# Suhasini Bantroth – 3D Portfolio

A responsive portfolio website with an interactive 3D background (Three.js), light/dark theme, and sections for About, Skills, Projects, Experience, and Contact.

## Files

```
portfolio/
├── index.html      # page content (edit text, links, projects here)
├── css/style.css   # colors, layout, theme
├── js/main.js      # 3D background, typing text, tilt effect
├── assets/photo.jpg  # your profile photo (replace with a new one anytime)
└── README.md
```

## Run it on your computer

Double-click `index.html`. It needs an internet connection the first time to load Three.js and the font.

## Publish it free with GitHub Pages

1. On GitHub, create a **public** repository, for example `portfolio`.
2. Click **Add file → Upload files**, drag in everything inside this folder (`index.html`, the `css`, `js`, `assets` folders, and `.nojekyll`), then **Commit changes**.
3. Go to **Settings → Pages**. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute your site is live at `https://suhasini-bantroth.github.io/portfolio/`.

Tip: name the repository `Suhasini-Bantroth.github.io` to get the shorter address `https://suhasini-bantroth.github.io/`.

## Customize

- **Text and links:** edit `index.html`. Search for a project name to find its card.
- **Colors:** change the values at the top of `css/style.css` (`--a` and `--b` are the accent colors).
- **Photo:** replace `assets/photo.jpg` with another square image.
- **Typing words:** edit the `words` list near the top of `js/main.js`.
