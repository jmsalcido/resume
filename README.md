# Jose Salcido - Resume

A modern, responsive resume website built with Vite, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Vite** - Build tool and development server
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Markdown** - Markdown rendering for descriptions
- **PostHog** - Privacy-focused analytics

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with navigation
│   ├── Home.tsx            # Landing page
│   ├── ExperiencePage.tsx # Work history (/experience)
│   ├── SkillsPage.tsx      # Skills & highlights (/skills)
│   ├── ContactPage.tsx     # Contact info (/contact)
│   ├── Navigation.tsx      # Navigation component
│   ├── Sidebar/            # Profile, Education, Languages, Interests
│   ├── MainContent/        # Summary, Experience, Skills, Projects
│   └── Footer/
├── data/
│   ├── developer.ts       # Personal info, education, languages, interests
│   └── resume.ts          # Professional experience, skills, ventures
└── utils/
    └── analytics.ts       # PostHog integration
```

## Routes

- `/` - Home / Summary
- `/experience` - Work experience timeline
- `/skills` - Skills and highlights
- `/contact` - Contact information

## Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Analytics

This site uses PostHog for privacy-focused analytics. To enable:

1. Create a PostHog account at [posthog.com](https://posthog.com)
2. Add your API key to `.env.local`:
   ```
   VITE_POSTHOG_API_KEY=your_api_key
   VITE_POSTHOG_HOST=https://app.posthog.com
   ```

## Deployment

This is a static site that can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file server

## License

MIT