FROM node:20-alpine AS base

### Dependencies
# Environment Variables
ARG GOOGLE_TAG_ID
ARG POSTHOG_ID
ARG TELEGRAM_TOKEN
ARG TELEGRAM_TO
ARG POSTHOG_WEBHOOK_TOKEN
ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=$GOOGLE_TAG_ID
ENV NEXT_PUBLIC_POSTHOG_ID=$POSTHOG_ID
ENV TELEGRAM_BOT_TOKEN=$TELEGRAM_TOKEN
ENV TELEGRAM_TO_ID=$TELEGRAM_TO
ENV POSTHOG_WEBHOOK_TOKEN=$POSTHOG_WEBHOOK_TOKEN

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
# Set the working directory to /app inside the container
WORKDIR /app
# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

### Builder
# Rebuild the source code only when needed
FROM base AS builder
# Change environment variables
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

### Runner
# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
# Set Environment
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]
