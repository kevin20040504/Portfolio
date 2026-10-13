# Kevin Ang: IT Portfolio

Personal portfolio website built with **Next.js 15, React 19, TypeScript, Tailwind CSS 4, and Lucide icons**.

All content (projects, screenshots, skills, certifications, experience, links) lives in **one file:
[`src/data/portfolio.ts`](src/data/portfolio.ts)**. You don't need to edit any components to update the site.

---

## 1. Run it on Windows

**Requirements:** [Node.js](https://nodejs.org) 18.18 or newer (the LTS version is best) and VS Code.

Open the `kevin-portfolio` folder in VS Code, then open a terminal (**Terminal → New Terminal**) and run:

```bash
npm install        # first time only: downloads dependencies
npm run dev        # starts the site at http://localhost:3000
```

Open http://localhost:3000 in your browser. The page reloads automatically when you save a file.
Press `Ctrl + C` in the terminal to stop it.

Other commands:

```bash
npm run build      # production build: run this before deploying to catch errors
npm run start      # serves the production build locally
npm run typecheck  # checks portfolio.ts and the code for type errors
```

> If PowerShell says *"running scripts is disabled on this system"*, either use **Command Prompt** as the VS Code
> terminal, or run once: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

---

## 2. Folder structure

```
kevin-portfolio/
├─ public/                         ← files served as-is (images, CV)
│  ├─ cv/
│  │  └─ Kevin-Ang-CV.pdf          ← put your CV here
│  └─ images/
│     ├─ certificates/             ← certificate images / PDFs
│     └─ projects/
│        ├─ study-buddy/
│        ├─ aws-moderation/
│        ├─ homefurgood/
│        └─ tmcc-asrms/            ← one folder per project
├─ src/
│  ├─ data/
│  │  ├─ portfolio.ts              ← ★ ALL YOUR CONTENT ★
│  │  └─ types.ts                  ← field definitions (rarely needs editing)
│  ├─ app/
│  │  ├─ layout.tsx                ← page shell, SEO metadata
│  │  ├─ page.tsx                  ← home page (section order)
│  │  ├─ projects/[slug]/page.tsx  ← project detail page
│  │  ├─ globals.css               ← colors, fonts, design tokens
│  │  ├─ icon.svg                  ← favicon
│  │  ├─ opengraph-image.tsx       ← link-preview image for LinkedIn etc.
│  │  ├─ robots.ts, sitemap.ts     ← SEO
│  │  └─ not-found.tsx             ← 404 page
│  ├─ components/                  ← UI sections and reusable pieces
│  └─ lib/                         ← helpers (file checks, styles)
└─ package.json
```

---

## 3. Adding project screenshots

Each project already lists the screenshots it expects. Until a file exists, the site shows a clean placeholder
that tells you the exact path to use.

1. Take the screenshot (PNG or JPG, about **1600 × 1000 px / 16:10** works best).
2. Save it in the project's folder using the name shown on the placeholder, e.g.
   `public/images/projects/study-buddy/homepage.png`
3. Refresh the page. It appears automatically.

**To add more screenshots, rename them, or change captions,** edit the project's `screenshots` list in
`src/data/portfolio.ts`:

```ts
screenshots: [
  { src: "/images/projects/study-buddy/homepage.png", caption: "Homepage" },
  { src: "/images/projects/study-buddy/quiz.png", caption: "Quiz page" },          // ← new
  { src: "/images/projects/study-buddy/erd.png", caption: "Database design", alt: "Entity relationship diagram of the users, subjects and sessions tables" },
],
```

- `src` starts with `/images/...`, without `public`.
- `cover` is the image shown on the project card. It can be the same file as a screenshot.
- File names are **case-sensitive once deployed**: `Homepage.PNG` ≠ `homepage.png`. Use lowercase.
- To remove a screenshot, delete its line. Large images are compressed automatically by Next.js.

> **Why no upload button?** This is a static website with no server or database, so a browser upload form
> couldn't actually save anything. Adding files to the folders above and redeploying is the real, reliable workflow.

---

## 4. Adding a new project

1. Create a folder: `public/images/projects/my-new-project/` and put screenshots in it.
2. In `src/data/portfolio.ts`, scroll to the **EXAMPLE** block at the end of the `projects` list, copy it,
   paste it above the comment (remove the `/*` and `*/`), and fill it in.
3. Key fields:
   - `slug`: lowercase with hyphens. The page will be at `/projects/my-new-project`.
   - `category`: `"Web Development"`, `"Cloud & AWS"`, or `"System Development"`. (To add a new category, add it
     to `ProjectCategory` in `src/data/types.ts` **and** to `projectFilters` in `portfolio.ts`.)
   - `status`: `"Completed"`, `"In Progress"`, `"Academic Project"`, or `"Capstone Project"`.
   - `features[].state`: `"implemented"`, `"in-progress"`, or `"planned"`. Planned features are clearly labelled
     as not built yet.
   - `links.github` / `links.demo`: full URLs, or `""` to hide the button.

The project automatically gets a card, filter support, its own page, a sitemap entry, and SEO metadata.

## 5. Adding a certification

1. Save the certificate image as `public/images/certificates/<name>.jpg` (and/or a PDF).
2. Add an entry to `certifications` in `portfolio.ts`:

```ts
{
  title: "Bootstrap 5 for Beginners",          // exactly as on the certificate
  issuer: "Alison",
  date: "12 Mar 2026",
  credentialId: "1234-56789012",                // optional
  verifyUrl: "https://alison.com/certification/check/...", // optional
  image: "/images/certificates/alison-bootstrap-5.jpg",    // optional, click to enlarge
  file: "/images/certificates/alison-bootstrap-5.pdf",     // optional, opens the PDF
},
```

## 6. Your CV, LinkedIn, and GitHub

| What | Where |
| --- | --- |
| **CV** | Save it as `public/cv/Kevin-Ang-CV.pdf`. Until then, the "Download CV" buttons show **Request CV** (opens an email) so visitors never hit a broken link. |
| **LinkedIn** | `socials.linkedin` in `portfolio.ts`, e.g. `"https://www.linkedin.com/in/your-name/"` |
| **GitHub** | `socials.github` in `portfolio.ts`, e.g. `"https://github.com/your-username"` |
| **Site URL** | `site.url` in `portfolio.ts`. Set this to your real address after deploying (used for SEO and link previews). |

Empty links are hidden from the footer. In the Contact section they show as a "to be added" card while placeholders are on.

## 7. Placeholders and the `showPlaceholders` switch

Any text in `portfolio.ts` that starts with `TODO:` is treated as unfinished.

- `site.showPlaceholders: true` shows unfinished items as subtle **"To be added"** notes and shows the file path on
  missing screenshots. Use this while editing.
- `site.showPlaceholders: false` hides unfinished text entirely and shows "Screenshot coming soon" on missing
  images. **Switch to `false` before sending the link to recruiters.**

Search for `TODO` in VS Code (`Ctrl + Shift + F`) to find everything left to fill in.

## 8. Contact form

There is intentionally **no contact form**: without a backend it couldn't send messages, and a form that silently
does nothing would look broken. Visitors can use **Send me an email** (opens their mail app) or **Copy email**.
If you want a form later, a free service such as Formspree or Web3Forms can be added without running a server.

---

## 9. Deploying (free) with Vercel

Vercel is made by the creators of Next.js and hosts personal sites for free.

1. Create a GitHub account and a new **repository** (it can be private).
2. Upload this folder to it. The easiest way is **GitHub Desktop**: *File → Add local repository →* choose
   `kevin-portfolio` → *Publish repository*. (`node_modules` and `.next` are excluded by `.gitignore`.)
3. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, select the
   repository, and click **Deploy**. No settings need changing.
4. After about a minute you get a URL like `https://kevin-portfolio.vercel.app`. Put that URL in `site.url`,
   commit, and push.

Every time you push a change (new screenshot, new project), Vercel rebuilds and updates the site automatically.
You can add a custom domain later in the Vercel project settings.

> Always run `npm run build` locally before pushing. If it fails there, it will fail on Vercel too.

**Note on images:** the site checks which images exist **when it builds**. On the deployed site, a new screenshot
appears after you push it (which triggers a rebuild). In `npm run dev` it appears on refresh.

---

## 10. Placeholder checklist

**General**
- [ ] Add CV: `public/cv/Kevin-Ang-CV.pdf`
- [ ] LinkedIn URL (`socials.linkedin`)
- [x] GitHub URL (`socials.github`)
- [x] Real site URL after deploying (`site.url`)
- [ ] Set `site.showPlaceholders` to `false` before sharing

**Study Buddy**
- [ ] Technologies actually used
- [ ] Problem statement, objectives, features, your role, technical implementation, challenges, takeaways
- [ ] Screenshots: `homepage.png`, `main-interface.png`, `features.png`, `additional-page.png`
- [ ] GitHub / demo links (if public)

**AWS Image Content Moderation**
- [ ] Specific AWS services used (replace the single `"AWS"` tag)
- [ ] Remaining objectives, architecture components (features), your role, implementation, challenges, takeaways
- [ ] Screenshots: `architecture-diagram.png`, `aws-console.png`, `workflow.png`, `components.png`

**HomeFurGood**
- [ ] Tech stack, your role, implementation
- [ ] Update each feature's `state` as you build it
- [ ] Screenshots: `landing-page.png`, `pet-listings.png`, `shelter-profiles.png`, `map-view.png`, `adoption-application.png`

**TMCC ASRMS**
- [ ] Confirm the year
- [ ] Your other contributions, challenges, takeaways
- [ ] Review the technologies and features lists for accuracy
- [ ] Screenshots: `dashboard.png`, `records-management.png`, `user-management.png`, `database-design.png`, `system-architecture.png`
- [ ] Repository link, only if public and your team agrees

**Certifications**
- [x] All six certificates added with images and PDFs
- [x] UA&P email hidden on the Alison images; Alison PDFs not published

**Experience & Leadership**
- [ ] Years on the UA&P Men's Basketball Team
- [ ] One specific responsibility or moment as co-captain
- [ ] Add internships here as `type: "Internship"` when you have them (the "Looking for my first IT internship" card then disappears automatically)
