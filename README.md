# Deng Lab Website

A modern, responsive website for the Deng Lab at Yale University, built with React and Vite.

## Features

- **Hero Banner**: Eye-catching lab branding with animated overlay
- **Lab Introduction**: Overview of the lab's mission and research
- **Tabbed Sections**: 
  - Lab People: Grid layout of team member cards
  - Lab Projects: Research project showcase with images
  - Lab News: Timeline view of recent updates and announcements

## Tech Stack

- React 18+
- Vite for fast development and building
- CSS Modules for component styling
- Responsive design (mobile-first)
- Modern design system with smooth animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Customization

### Updating Content

1. **Lab Introduction**: Edit `src/components/LabIntro.jsx`
2. **Lab People**: Edit the `people` array in `src/components/PeopleTab.jsx`
3. **Lab Projects**: Edit the `projects` array in `src/components/ProjectsTab.jsx`
4. **Lab News**: Edit the `newsItems` array in `src/components/NewsTab.jsx`

### Styling

- Global styles: `src/styles/global.css`
- Component-specific styles: Each component has its own `.module.css` file
- Design tokens (colors, spacing, etc.) are defined in `global.css`

### Images

Place images in `public/images/` and reference them as `/images/filename.jpg`

## Project Structure

```
Website/
├── public/
│   └── images/          # Images and assets
├── src/
│   ├── components/      # React components
│   ├── styles/          # Global styles and CSS
│   ├── App.jsx          # Main app component
│   └── main.jsx         # React entry point
├── index.html           # HTML template
└── package.json         # Dependencies
```

## License

MIT
