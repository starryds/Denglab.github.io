# GitHub Setup Instructions

Your lab website is ready to deploy! Follow these steps to get it on GitHub.

## Prerequisites Checklist

Before proceeding, you need:

1. ✅ Node.js installed (visit https://nodejs.org/)
2. ✅ GitHub account created
3. ✅ Git installed on your Mac

## Step 1: Install Prerequisites

### If you don't have Node.js:
```bash
# Install Homebrew first (if you don't have it)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node.js
brew install node
```

### If you don't have Git:
```bash
# Install Xcode Command Line Tools (required for Git)
xcode-select --install
```

## Step 2: Install Website Dependencies

Once Node.js is installed, run:

```bash
npm install
```

Or use the quick start script:
```bash
./QUICK_START.sh
```

## Step 3: Test Locally (Optional)

Before deploying, test your website:

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

Press `Ctrl+C` to stop the server when done testing.

## Step 4: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `deng-lab-website`)
3. Don't initialize with README, .gitignore, or license
4. Click "Create repository"

## Step 5: Push to GitHub

In your terminal, navigate to the website folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Deng Lab website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Replace YOUR_USERNAME with your GitHub username
# Replace YOUR_REPO_NAME with your repository name

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 6: Enable GitHub Pages

Your site is already configured for automatic deployment!

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically build and deploy your site

## Step 7: View Your Website

After the GitHub Action completes (usually 2-3 minutes):

- Go to the **Actions** tab in your repository
- Wait for the workflow to finish (green checkmark)
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Updating Your Website

To update the website after making changes:

```bash
# Make your changes to the files
# Add changes
git add .

# Commit changes
git commit -m "Update website"

# Push to GitHub
git push
```

GitHub Actions will automatically rebuild and deploy your site!

## Troubleshooting

### "Node.js not found"
- Install Node.js from https://nodejs.org/
- Or use Homebrew: `brew install node`

### "npm: command not found"
- Node.js must be installed first
- Restart your terminal after installing

### "Git not found"
- Install Xcode Command Line Tools: `xcode-select --install`
- Follow the installation prompts

### GitHub Pages not showing
- Check the Actions tab for build errors
- Make sure you selected "GitHub Actions" as the source
- Wait a few minutes for the first deployment

### Want help?
Check the files:
- `DEPLOYMENT.md` - Detailed deployment instructions
- `README.md` - Project documentation
- `SETUP.md` - Setup and customization guide
