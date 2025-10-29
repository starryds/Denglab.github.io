#!/bin/bash

# Deploy script for Deng Lab Website
# This builds the site and deploys it to gh-pages branch

echo "🚀 Building and deploying Deng Lab Website..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this from the Website directory"
    exit 1
fi

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Step 1: Build the website
echo "📦 Building website..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Step 2: Switch to gh-pages branch
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# Step 3: Remove old files and copy new build
echo "📋 Updating deployment files..."
rm -rf assets images index.html 2>/dev/null
cp -r dist/* .
rm -rf dist

# Step 4: Commit and push
echo "💾 Committing changes..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 Pushing to GitHub..."
git push origin gh-pages --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo "🌐 Your site will be live at: https://starryds.github.io/Denglab.github.io/"
    echo ""
else
    echo ""
    echo "❌ Push failed. You may need to authenticate."
    echo ""
fi

# Step 5: Switch back to original branch
echo "🔄 Switching back to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo ""
echo "✨ Done! Check your website in 1-2 minutes."

