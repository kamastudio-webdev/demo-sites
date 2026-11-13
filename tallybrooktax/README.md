# Tallybrook Tax Service (demo site)

A demo website by KamaStudio for a made-up tax preparer in Columbus, OH. It shows a lead what a
KamaStudio site looks like. The business, people, phone number, address and
reviews are all fictional.

Built with Astro. Netlify builds and publishes this folder from the `main`
branch of the `demo-sites` repository.

## What makes it a demo

- A banner on every page says it's a demo and gives Kyle's number.
- Search engines are told to stay out (`noindex` on every page, `robots.txt`,
  and a header in `netlify.toml`).
- The forms never send anything. They only show a "this is a demo" message.
- The phone number is a 555 number.
- Google Analytics tag `G-Y2JC9ZQ8WJ` (KamaStudio Demo Sites) is on every page.

## Where things are

| What | File |
|---|---|
| Business name, phone, address, hours, menu, banner details | `src/site.ts` |
| Colors and fonts | `src/styles/global.css` |
| Logo | `src/components/Logo.astro` and `public/favicon.svg` |
| Pages | `src/pages/` |
| Fees | `src/components/FeeSchedule.astro` |
| What to bring checklist | `src/checklist.ts` |
| Filing deadline countdown | `src/deadline.ts` |

## Commands

- `npm install` once
- `npm run dev` to preview while editing
- `npm run build` to build into `dist/`
