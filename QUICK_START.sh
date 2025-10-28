#!/bin/bash

echo "🚀 Deng Lab Website - Quick Start"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "📥 Please install Node.js first:"
    echo "   macOS: brew install node"
    echo "   Or download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start development server: npm run dev"
echo "2. Or build for production: npm run build"
echo ""
echo "For GitHub deployment, follow instructions in DEPLOYMENT.md"

