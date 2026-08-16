# Kishore K I — Portfolio

A single-page portfolio built with plain HTML/CSS/JS (no build step, no frameworks) — ready for GitHub Pages.

## How to edit your content

You almost never need to touch `index.html`, `css/style.css`, or `js/main.js`.
**Everything you'll want to change lives in one file: `js/data.js`.**

Open `js/data.js` in any text editor (VS Code, Notepad, GitHub's own web editor). It's one big object with clearly named sections:

- `site` — your name, tagline, hero quote, email, phone, LinkedIn, GitHub, resume file path
- `about` — array of paragraphs
- `education` — school + college entries
- `skillCategories` — Robotics / Programming / Automation / CAD & Design / Systems
- `internships` — your two internships, with a `details` array (shown when the card is expanded)
- `projects` — your two major projects, with `details` + `learnt`
- `certificates` — all 13 certificate slots (2 are filled from your resume, 11 are placeholders — just overwrite the placeholder text and paste a real `link`/`image`)
- `achievements` — your 7 achievements

For every `link` or `certificateLink` / `photosLink` / `videoLink` / `worksLink` field: paste the URL (Google Drive share link, YouTube link, LinkedIn post, etc.) between the quotes. Leave `"#"` if you don't have the link yet.

For `image` / `logo` fields: paste a direct image URL, or leave `""` for a placeholder icon.

**Adding a 14th certificate?** Copy one of the existing `{ ... }` blocks inside `certificates: [ ... ]`, paste it as a new entry, and edit the fields. The grid layout resizes automatically — no CSS changes needed.

## Replacing your resume

Replace `assets/resume.pdf` with your actual resume file (keep the exact filename `resume.pdf`, or update `site.resumeFile` in `data.js` if you rename it). It's already wired to both the inline preview and the Download button.

## Adding your photo

In `index.html`, find the `<div class="about-figure">` block near the top and set the `src=""` on the `<img>` tag to your photo's URL (or a local path like `assets/portrait.jpg` if you add the file to `/assets`).

## Deploying to GitHub Pages (free)

1. Create a new GitHub repository (e.g. `portfolio`).
2. Upload all files in this folder to the repository, keeping the folder structure (`index.html` at the root, `css/`, `js/`, `assets/` alongside it).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a live URL after a minute or two, typically `https://<your-username>.github.io/<repo-name>/`.
6. Any time you edit `js/data.js` and push the change, the live site updates automatically within a minute.

## Notes

- The contact form opens the visitor's email client with a pre-filled message (via `mailto:`) — this works with zero backend, since GitHub Pages can't run server code. If you later want real form submissions without opening an email client, services like Formspree or Getform can be dropped in.
- Fonts (Inter, DM Sans, Manrope, Playfair Display, Lora, Space Grotesk, Montserrat, Satoshi) load from Google Fonts and Fontshare via CDN — no local font files needed, and they'll load correctly once deployed (a local file preview may show fallback fonts if your network blocks those CDNs).
- The whole site respects `prefers-reduced-motion` and is keyboard-navigable.
