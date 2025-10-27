# Quick Start Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```
   
   If you don't have npm installed, you'll need to install Node.js first from [nodejs.org](https://nodejs.org/)

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   This will start the development server at `http://localhost:5173`

3. **View in Browser**
   - Open your browser and navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can deploy these files to any static hosting service.

## Next Steps

1. Edit the content in the component files:
   - `src/components/LabIntro.jsx` - Lab introduction text
   - `src/components/PeopleTab.jsx` - Team members
   - `src/components/ProjectsTab.jsx` - Research projects
   - `src/components/NewsTab.jsx` - News and updates

2. Replace placeholder images with actual photos in `public/images/`

3. Customize colors and styling in `src/styles/global.css`

## Troubleshooting

- **Port already in use**: Change the port by editing `vite.config.js`
- **Module not found**: Run `npm install` again
- **Images not showing**: Check that image paths start with `/images/`
