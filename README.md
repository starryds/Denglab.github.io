# Lab Website Starter (GitHub Pages)

A super-simple starter to publish a lab website via GitHub Pages, mimicking the "big hero + filterable grid" layout (similar to the Nobel Prize archive pages).

## How to use

1. Create a new GitHub repository (you can name it `username.github.io` for a user site).
2. Upload the contents of this folder (or the ZIP) to the repository root.
3. In the repository Settings ▸ Pages, set **Source** to "Deploy from a branch", Branch = `main`, Folder = `/ (root)`.
4. Wait 1–2 minutes and visit `https://username.github.io` (replace with your username).

## Customize

- Edit `index.html`: change the hero title, tags, and sample cards.
- Edit `assets/script.js` if you want to modify filter behavior.
- Add real images to `/img` and replace the gray placeholders in the cards.
- Optional: Add a custom domain in Settings ▸ Pages (creates a `CNAME` file).

## Next steps (optional)

- Convert this into a Jekyll site and use a theme (e.g., Minimal Mistakes) so you can manage content as Markdown.
- Add pages like `/people`, `/publications`, `/join`, and link them from the header.
