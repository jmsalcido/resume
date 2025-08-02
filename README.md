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

This project is based on a free resume template by Xiaoying Riley. The original template is available at [themes.3rdwavemedia.com](http://themes.3rdwavemedia.com).

---
