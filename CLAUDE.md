# CLAUDE.md — willwright82.github.io

## Project Overview

This is Will Wright's personal GitHub Pages site (`willwright82.github.io`), serving as a portfolio and personal brand hub for a senior UX engineer and designer based in Edinburgh, Scotland. The site showcases branding, UX/UI design, and web development work. The primary audience is potential clients, employers, and collaborators in design and tech.

Key constraints:
- Static site hosted via GitHub Pages on the `master` branch
- No build pipeline assumed unless explicitly added — treat as plain HTML/CSS/JS unless a framework config is present
- Performance and accessibility are first-class concerns

## Tech Stack

- **Hosting**: GitHub Pages (`master` branch deploys automatically)
- **Languages**: HTML, CSS, JavaScript (check for any framework files — e.g. `package.json`, `_config.yml` for Jekyll)
- **Version control**: Git (SSH remotes), branch `master`
- **Local dev**: macOS (zsh), VS Code, Webflow exports may be used as source

## Common Commands

```bash
# Push changes
git add . && git commit -m "message" && git push origin master

# Check git status
git status

# Pull latest with rebase (preferred)
git pull origin master --rebase

# Preview locally (if no build step)
open index.html
# or serve with Python
python3 -m http.server 8080
```

## Code Style Guidelines

- **HTML**: Semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, `<main>`)
- **CSS**: BEM naming convention where applicable; prefer CSS custom properties for theming
- **JavaScript**: ES modules (`import/export`), no jQuery unless already present in project
- **No inline styles** — keep styles in external CSS files
- **Images**: Use descriptive `alt` text on all `<img>` tags for accessibility
- **Formatting**: 2-space indentation, UTF-8 encoding

## Design Conventions

- Follow the existing visual identity — do not introduce new fonts, colours, or layout patterns without flagging it
- Preserve any existing design system tokens (CSS variables, class names)
- Responsive design is required — test breakpoints at 375px, 768px, 1280px
- Accessibility: WCAG 2.1 AA minimum (contrast ratios, keyboard nav, ARIA labels)

## Git Workflow

- Branch: `master` is the production branch — commits here deploy live
- Commit messages: imperative mood, lowercase, concise (e.g. `fix nav spacing on mobile`, `add project card component`)
- Prefer `git pull --rebase` over merge to keep history clean
- Do **not** force push to `master` without explicit instruction

## File & Content Placement

- `index.html` — homepage, main entry point
- `assets/` or `img/` — images and media (check existing structure before adding new folders)
- `css/` or `styles/` — stylesheets
- `js/` or `scripts/` — JavaScript files
- Do not create duplicate components; check existing files before adding new ones

## Safe Change Rules

Do **not** casually modify:
- Meta tags, OG tags, or SEO-related content in `<head>` without explicit instruction
- Any analytics or tracking script tags
- Font or icon CDN links (may break design system)
- File naming conventions already established in the repo

## What Done Looks Like

- HTML validates (no errors in W3C validator)
- No console errors in browser
- Renders correctly on mobile and desktop
- Changes committed and pushed to `master` with a clear commit message
- GitHub Pages deployment reflects the change (allow ~60s for propagation)

## Personal Context

- Owner: Will Wright (`willwright82`) — Senior UX Engineer, designer, Webflow developer
- Style preference: clean, minimal, professional — no clutter or excessive animation
- Do not add emojis, excessive comments, or placeholder copy to production files
- Do not explain what you're about to do — just do it
