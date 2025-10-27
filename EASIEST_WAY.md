# Easiest Way to Push to GitHub

## The Simplest Method: Use GitHub Desktop App

Since brew isn't installed, here's the absolute easiest way:

### Step 1: Download GitHub Desktop
Go to: https://desktop.github.com/
Click "Download for Mac"

### Step 2: Install and Open
1. Open the downloaded .dmg file
2. Drag GitHub Desktop to Applications
3. Open GitHub Desktop
4. Sign in with your GitHub account (starryds)

### Step 3: Add This Repository
1. In GitHub Desktop, click "File" → "Add Local Repository"
2. Navigate to: `/Users/sd2396/Documents/Yale_onboard/lab setup/Website`
3. Click "Add Repository"

### Step 4: Publish Repository
1. Click "Publish repository" button (or File → Publish repository)
2. Name: `Denglab.github.io` (or keep current name)
3. Make sure "Keep this code private" is UNCHECKED
4. Click "Publish Repository"

### Step 5: Enable GitHub Pages
1. Go to https://github.com/starryds/Denglab.github.io
2. Click **Settings** → **Pages**
3. Under **Source**: Select **GitHub Actions**
4. Save

Done! Your site will build automatically and be live at:
https://starryds.github.io/Denglab.github.io/

---

## Alternative: Manual Token Method (if you prefer command line)

### Step 1: Create Personal Access Token

1. Go to: https://github.com/settings/tokens/new
2. Note name: "Lab Website Deployment"
3. Expiration: 90 days (or custom)
4. Select scopes:
   - ✅ **repo** (all of it)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Use Token to Push

In terminal, run:

```bash
cd "/Users/sd2396/Documents/Yale_onboard/lab setup/Website"

# Push using token (replace YOUR_TOKEN with your actual token)
git push https://YOUR_TOKEN@github.com/starryds/Denglab.github.io.git main
```

Or set it as remote:
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/starryds/Denglab.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (same as above)

---

## Recommended: GitHub Desktop (Easiest!)

GitHub Desktop is by far the simplest method. It handles authentication automatically and gives you a nice visual interface.

Your files are all committed and ready - just needs to be pushed!

## Current Status
✅ Files committed (36 files, 1,481 lines)
✅ Repository configured
⏳ Waiting for push to GitHub
