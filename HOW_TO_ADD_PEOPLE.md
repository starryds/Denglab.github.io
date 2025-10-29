# How to Add or Edit Lab People

## 📝 Where to Add People Information

All lab member information is stored in one easy-to-edit file:

**`src/data/people.js`**

## 🎯 Quick Steps

### 1. Open the People Data File

Navigate to: `src/data/people.js`

### 2. Add a New Person

Copy this template and fill in the details:

```javascript
{
  id: 'person-name',                    // Unique ID (lowercase, no spaces)
  name: 'Person Name',                  // Full name
  title: 'Their Title or Role',         // Job title (e.g., "Postdoctoral Fellow")
  photo: '/images/person-photo.jpg',    // Photo path (put images in public/images/)
  introduction: 'Their full introduction text here. This will be shown on their individual detail page when someone clicks on their card.'
}
```

### 3. Add Their Photo

1. Put the photo file in: `public/images/`
2. Use the filename in the `photo` field (e.g., `/images/john-smith.jpg`)

### 4. Example Entry

```javascript
{
  id: 'john-smith',
  name: 'John Smith',
  title: 'Postdoctoral Fellow',
  photo: '/images/john-smith.jpg',
  introduction: 'John Smith is a postdoctoral fellow in the Deng Lab working on metabolic reprogramming in prostate cancer. His research focuses on understanding how cancer cells alter their metabolism...'
}
```

## 📸 Photo Requirements

- **Location**: `public/images/` folder
- **Format**: JPG, PNG, or other web formats
- **Recommended size**: Square photos work best (e.g., 400x400px or 500x500px)
- **Naming**: Use simple names like `john-smith.jpg` (no spaces, lowercase recommended)

## 🔍 How It Works

- **Main Page (Lab People tab)**: Shows photo and title only
- **Detail Page**: Shows photo, name, title, and full introduction
- Clicking a person card opens their detail page

## ✏️ Editing Existing People

Just find their entry in `src/data/people.js` and update any fields:

```javascript
{
  id: 'dr-deng',
  name: 'Dr. Deng',  // Change name here
  title: 'Principal Investigator',  // Change title here
  photo: '/images/with logo.jpeg',
  introduction: 'Updated introduction text...'  // Change intro here
}
```

## 🚀 After Making Changes

After editing `src/data/people.js`, you need to rebuild and deploy:

```bash
./deploy.sh
```

Or manually:
```bash
npm run build
# Then deploy to gh-pages branch
```

## 💡 Tips

- Keep `id` fields unique (no duplicates)
- Use simple, descriptive IDs (lowercase, hyphens for spaces)
- Make sure photo files exist before deploying
- The introduction can be multiple sentences/paragraphs

