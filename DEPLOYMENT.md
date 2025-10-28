# Deployment Instructions

## Prerequisites

First, you need to install Node.js if you haven't already:

### For macOS (using Homebrew):
```bash
brew install node
```

### Or download from:
https://nodejs.org/

## Setup Steps

### 1. Install Dependencies

Once Node.js is installed, run:
```bash
npm install
```

### 2. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - Deng Lab website"
```

### 3. Connect to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Build and Deploy

```bash
# Install gh-pages for deployment
npm install --save-dev gh-pages

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Alternative: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Create a workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit and push:
```bash
mkdir -p .github/workflows
# Copy the workflow content above to .github/workflows/deploy.yml
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

## Manual Deployment (if GitHub Actions not available)

If you prefer manual deployment after each update:

```bash
# Make sure you're on the main branch
git add .
git commit -m "Update website"

# Deploy to GitHub Pages
npm run deploy

# Push the main branch
git push
```

## Access Your Website

Once deployed, your site will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

If your repository is named exactly `YOUR_USERNAME.github.io`, it will be available at:
- `https://YOUR_USERNAME.github.io/`

## Updating the Site

To update the website:

1. Make changes to the files
2. Test locally with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
4. If using GitHub Actions, it will auto-deploy
5. If using manual deployment, run `npm run deploy`

## Troubleshooting

### Port already in use
Change the port in `vite.config.js` or kill the process:
```bash
lsof -ti:5173 | xargs kill
```

### Build fails
Try deleting `node_modules` and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pages not updating
- Wait a few minutes for GitHub to rebuild
- Check the Actions tab in your GitHub repository for errors
- Verify the build succeeded: click on the latest workflow run

