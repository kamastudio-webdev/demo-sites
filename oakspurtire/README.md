# Oakspur Tire & Wheel (demo site)

A demo website by KamaStudio for a made-up tire shop in Kansas City. It shows a
lead what a KamaStudio site looks like. The business, people, phone number,
address and reviews are all fictional.

Built with Astro. Netlify builds and publishes this folder from the `main` branch of the `demo-sites` repository.

## What makes it a demo

- A yellow banner on every page says it's a demo and gives Kyle's number.
- Search engines are told to stay out (`noindex` on every page, `robots.txt`,
  and a header in `netlify.toml`).
- The contact form never sends anything. It only shows a thank-you message.
- The shop phone number is a 555 number.
- Google Analytics tag `G-Y2JC9ZQ8WJ` (KamaStudio Demo Sites) is on every page,
  so tagged demo links show up in the lead sheet.

## Where things are

| What | File |
|---|---|
| Business name, phone, address, hours, menu, banner details | `src/site.ts` |
| Colors and type | `src/styles/global.css` |
| Logo | `src/components/Logo.astro` and `public/favicon.svg` |
| Pages | `src/pages/` (home, tires, services, about, contact) |
| Price list | `src/components/PriceBoard.astro` |
| Sample reviews | `src/components/Reviews.astro` |

## Making another demo from this one

Copy the project, then change `src/site.ts`, the colors in
`src/styles/global.css`, the logo, and the text on each page. The banner,
header, footer, phone call bar and contact form pick up the new details from
`src/site.ts`.

## Commands

- `npm install` once
- `npm run dev` to preview while editing
- `npm run build` to build into `dist/`
