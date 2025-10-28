#!/bin/bash

echo "🚀 Pushing Deng Lab Website to GitHub"
echo "====================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this from the Website directory"
    exit 1
fi

# Check git status
echo "📋 Current git status:"
git status --short
echo ""

# Check if remote is set
if ! git remote get-url origin &>/dev/null; then
    echo "❌ Error: No remote configured"
    echo "Set it up with:"
    echo "  git remote add origin https://github.com/starryds/Denglab.github.io.git"
    exit 1
fi

echo "📍 Remote URL:"
git remote -v
echo ""

# Ask for authentication method
echo "Choose authentication method:"
echo "1. GitHub Desktop (RECOMMENDED - easiest!)"
echo "2. Personal Access Token"
echo "3. SSH Key"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "✅ Best choice!"
        echo ""
        echo "Steps:"
        echo "1. Download GitHub Desktop: https://desktop.github.com/"
        echo "2. Open GitHub Desktop"
        echo "3. File → Add Local Repository"
        echo "4. Select this folder: $PWD"
        echo "5. Click 'Publish repository'"
        echo ""
        echo "See EASIEST_WAY.md for detailed instructions"
        ;;
    2)
        echo ""
        echo "To use Personal Access Token:"
        echo ""
        echo "1. Create token at: https://github.com/settings/tokens/new"
        echo "2. Select 'repo' scope"
        echo "3. Copy the token"
        echo "4. Run this command (replace YOUR_TOKEN):"
        echo ""
        echo "   git push https://YOUR_TOKEN@github.com/starryds/Denglab.github.io.git main"
        echo ""
        ;;
    3)
        echo ""
        echo "To use SSH:"
        echo ""
        echo "1. Generate SSH key:"
        echo "   ssh-keygen -t ed25519 -C 'your_email@example.com'"
        echo ""
        echo "2. Add key to GitHub:"
        echo "   cat ~/.ssh/id_ed25519.pub"
        echo "   # Copy output and add to https://github.com/settings/keys"
        echo ""
        echo "3. Change remote to SSH:"
        echo "   git remote set-url origin git@github.com:starryds/Denglab.github.io.git"
        echo ""
        echo "4. Push:"
        echo "   git push -u origin main"
        echo ""
        ;;
    *)
        echo "Invalid choice"
        ;;
esac

