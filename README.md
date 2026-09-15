# [YOUR NAME] — Personal Portfolio

A personal portfolio website built with plain HTML, CSS, and vanilla
JavaScript. No frameworks, no build tools, no npm install — just open
`index.html` in a browser.

## Live demo

[ADD YOUR VERCEL URL HERE ONCE DEPLOYED]

## Tech stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no libraries or frameworks)

## Folder structure

```
portfolio/
│
├── index.html          Main page — all sections live here
├── style.css            All styling, organized by section
├── script.js             All interactivity (nav, scroll reveal, form, etc.)
├── README.md
│
├── assets/
│   ├── images/          Profile photo, about photo, project thumbnails
│   └── icons/            favicon.svg
│
└── resume/
    └── CV.pdf            Your downloadable resume
```

## Before you deploy: fill in your information

The site currently uses placeholder text like `[YOUR NAME]`,
`[YOUR EMAIL]`, `[PROJECT 1 NAME]`, etc. Open `index.html` and replace
every bracketed placeholder with your real information. Use your editor's
"Find" feature and search for `[` to make sure you didn't miss any.

## How to add your images

1. Add your photo as `assets/images/profile.jpg` (used in the Hero section).
2. Add a second photo as `assets/images/about.jpg` (used in the About section).
3. Add project screenshots as `assets/images/project-1.jpg` through
   `project-4.jpg`.
4. Recommended size: at least 800px wide, JPG or PNG, kept under ~500KB each
   so the site loads quickly.

If an image is missing, the site shows a clean placeholder block instead of
a broken image icon, so the layout still looks correct while you're working
on it.

## How to add your CV

1. Export your resume as a PDF.
2. Rename the file exactly to `CV.pdf`.
3. Place it inside the `resume/` folder, replacing the placeholder file.
4. The "Download CV" button in the Hero section is already linked to
   `resume/CV.pdf` — no code changes needed.

## How to test the website locally

You can simply double-click `index.html` and it will open in your browser.

For a more realistic local server experience (recommended, and required
if you want relative paths to behave exactly like they will on a real host):

**Option A — VS Code Live Server extension**
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` → "Open with Live Server".

**Option B — Python (no installation needed on most systems)**
```bash
cd portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## How to create a public GitHub repository

1. Go to [github.com](https://github.com) and log in.
2. Click the **+** icon in the top right → **New repository**.
3. Name it something like `my-portfolio`.
4. Set visibility to **Public**.
5. Do **not** initialize with a README (you already have one) — leave the
   other checkboxes unchecked.
6. Click **Create repository**.

## How to push this project to GitHub

Open a terminal inside the `portfolio` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio website"
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/my-portfolio.git
git push -u origin main
```

Replace `[YOUR-USERNAME]` with your actual GitHub username, and
`my-portfolio` with your repository name if you chose something different.

## How to deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in — you can
   sign in directly with your GitHub account.
2. Click **Add New... → Project**.
3. Select your `my-portfolio` GitHub repository from the list and click
   **Import**.
4. Vercel will detect this as a static site. You don't need to change any
   build settings — leave "Framework Preset" as **Other**, and leave the
   build command and output directory blank.
5. Click **Deploy**.
6. Wait for the build to finish (usually under a minute for a static site).

## How to get your final live Vercel URL

Once deployment finishes, Vercel shows a screen with a **Visit** button and
a URL that looks like:

```
https://my-portfolio-yourusername.vercel.app
```

Click **Visit** to confirm the site works, then copy that URL — this is
your live link. Paste it into the "Live demo" section at the top of this
README, and into your LinkedIn post.

## How to create a LinkedIn post showcasing your portfolio

1. Take a clean screenshot of your Hero section (or record a short screen
   capture scrolling through the site).
2. Go to LinkedIn and click **Start a post**.
3. Attach the screenshot/video.
4. Write a short caption, for example:

   > Just launched my personal portfolio website! 🚀
   > Built entirely with plain HTML, CSS, and JavaScript — no frameworks —
   > as part of my [YOUR COURSE/UNIVERSITY] assignment.
   >
   > Check it out: [YOUR VERCEL URL]
   > Code: [YOUR GITHUB URL]
   >
   > #webdevelopment #html #css #javascript #buildinpublic

5. Tag your university or course account if relevant, and post.

## Notes

- The contact form is frontend-only: it validates input with JavaScript and
  shows a success message, but does not send real emails (this is
  intentional — connecting a backend or email service like Formspree is
  optional and outside the scope of this assignment).
- The design respects `prefers-reduced-motion` for users who have that
  system setting enabled.
