# Jose Salcido - Resume

A modern, responsive resume website built with Vite, React, and TypeScript.

## 🚀 Tech Stack

- **Vite** - Fast build tool and development server
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Markdown** - Markdown rendering for content
- **Font Awesome** - Icons
- **Google Fonts** - Typography

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
└── assets/             # CSS and other assets
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

- **Responsive Design** - Works on desktop, tablet, and mobile
- **TypeScript** - Full type safety throughout the application
- **Modern React** - Uses React 19 with functional components and hooks
- **Markdown Support** - Rich text formatting for descriptions
- **Progress Bars** - Visual skill level indicators
- **Clean Architecture** - Well-organized component structure

## 📝 Content Management

The resume content is managed through TypeScript files in the `src/data/` directory:

- `developer.ts` - Personal information, contact details, education, languages, and interests
- `resume.ts` - Work experience, projects, skills, and career summary

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

**Coded with React and ❤️ by [Jose Salcido](http://jmsalcido.dev)**
