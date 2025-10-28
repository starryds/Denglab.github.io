# Push to GitHub - Quick Instructions

Your website has been committed to a local git repository! Now follow these steps to push it to GitHub.

## Step 1: Check Current Repository

Your local repository is ready. Check if you already have a remote:

```bash
git remote -v
```

## Step 2: Add Your GitHub Repository

Based on your existing site at https://starryds.github.io/Denglab.github.io/, it looks like your GitHub username is `starryds`.

**Option A: Create a NEW repository on GitHub**
1. Go to https://github.com/new
2. Repository name: `deng-lab-website` (or any name you prefer)
3. Don't initialize with README, .gitignore, or license
4. Click "Create repository"

**Option B: Use existing repository**
If you want to update your existing `Denglab.github.io` repository:
```bash
git remote add origin https://github.com/starryds/Denglab.github.io.git
```

## Step 3: Push to GitHub

```bash
# Set main as default branch
git branch -M main

# Add your GitHub repository as remote
# (Replace YOUR_USERNAME and YOUR_REPO with your actual values)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Actions for Deployment

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

Your site will automatically build and deploy!

## Quick Commands

```bash
# Make sure you're in the right directory
cd "/Users/sd2396/Documents/Yale_onboard/lab setup/Website"

# Check status
git status

# Check remote (before adding)
git remote -v

# Add GitHub as remote (replace with your actual repo URL)
git remote add origin https://github.com/starryds/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Important Note About Node.js

Before the website can be built and deployed, you need to:

1. **Install Node.js**:
   ```bash
   brew install node
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```

The GitHub Actions workflow will automatically build your site once Node.js is available in the deployment environment.

## Need Help?

- Check `GITHUB_SETUP.md` for detailed instructions
- Check `DEPLOYMENT.md` for complete deployment guide
- Run `git remote -v` to see your current remote setup

