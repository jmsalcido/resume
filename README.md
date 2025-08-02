# Jose Salcido - Resume

A modern, responsive resume website built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Vite** - Fast build tool and development server
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Markdown** - Markdown rendering for content
- **Google Fonts** - Typography (Inter font)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Footer/         # Footer component
│   ├── MainContent/    # Main content sections
│   │   ├── Experience/ # Work experience
│   │   ├── Projects/   # Project showcase
│   │   ├── Skills/     # Skills with progress bars
│   │   └── Summary/    # Career summary
│   └── Sidebar/        # Sidebar components
│       ├── Contact/    # Contact information
│       ├── Education/  # Education history
│       ├── Interests/  # Personal interests
│       ├── Languages/  # Language skills
│       └── Profile/    # Profile section
├── data/               # TypeScript data files
│   ├── developer.ts    # Personal information
│   └── resume.ts       # Resume content
└── assets/             # Images and other assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

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

## 📊 Analytics with PostHog

This resume template includes optional PostHog analytics integration to track visitor engagement and understand how your resume is being viewed.

### Setup PostHog Analytics:

1. **Create a PostHog account** at [posthog.com](https://posthog.com)
2. **Get your project API key** from your PostHog dashboard
3. **Add your API key** to the environment variables:
   ```bash
   # Create a .env file in the root directory
   VITE_POSTHOG_API_KEY=your_posthog_api_key_here
   VITE_POSTHOG_HOST=https://app.posthog.com
   ```
4. **Deploy your resume** and start tracking analytics!

### What You Can Track:

- **Page views** and visitor sessions
- **Time spent** on different sections
- **Click tracking** on contact links and projects
- **Geographic data** of visitors
- **Device and browser** information
- **Custom events** for specific interactions

### Privacy-First Analytics:

PostHog is privacy-focused and GDPR-compliant. You can:
- **Respect user privacy** with proper consent management
- **Anonymize data** as needed
- **Control data retention** policies
- **Export data** whenever needed

## 🎨 Features

- **Responsive Design** - Mobile-first design that works on all devices
- **Tailwind CSS** - Modern utility-first styling with consistent design system
- **TypeScript** - Full type safety throughout the application
- **Modern React** - Uses React 19 with functional components and hooks
- **Markdown Support** - Rich text formatting for descriptions
- **Progress Bars** - Visual skill level indicators with smooth animations
- **Clean Architecture** - Well-organized component structure
- **Accessibility** - Semantic HTML and ARIA attributes

## 📝 Content Management

The resume content is managed through TypeScript files in the `src/data/` directory:

- `developer.ts` - Personal information, contact details, education, languages, and interests
- `resume.ts` - Work experience, projects, skills, and career summary

## 🎨 Design System

This resume uses Tailwind CSS for consistent styling:

- **Colors**: Gray scale with blue accents
- **Typography**: Inter font family
- **Layout**: Flexbox and Grid for responsive design
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable utility classes for common patterns

## 🚀 Deployment

This is a static site that can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file server

## 📄 License

This project is **completely free and open source**! 🎉

### ✨ You are free to:

- **Use this template** for your own resume
- **Modify and customize** all content and styling
- **Update the developer data** with your information
- **Replace the profile picture** with your own
- **Deploy it** to any hosting platform
- **Share it** with others
- **Fork and improve** the codebase

### 🎯 How to Use:

1. **Fork or clone** this repository
2. **Update** `src/data/developer.ts` with your personal information
3. **Update** `src/data/resume.ts` with your experience and skills
4. **Replace** `public/images/developer.jpeg` with your profile picture
5. **Customize** colors and styling in `tailwind.config.js` if desired
6. **Deploy** to your preferred hosting service

### 📝 Attribution:

While not required, if you'd like to give credit:
- Created with AI by [Jose Salcido](https://jmsalcido.dev)

**Happy coding! 🚀**

---
