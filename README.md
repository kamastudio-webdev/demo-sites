# KamaStudio demo sites

Demo websites for made-up local businesses. Kyle sends them to leads to show
what a KamaStudio website looks like. Every site has a "Demo site by
KamaStudio" banner, a 555 phone number, sample reviews and forms that don't
send anything, and is kept out of Google.

| Folder | Business | City | Domain |
|---|---|---|---|
| `oakspurtire` | Oakspur Tire & Wheel (tire shop) | Kansas City, MO | oakspurtire.online |
| `tallybrooktax` | Tallybrook Tax Service (tax preparer) | Columbus, OH | tallybrooktax.online |
| `larkmeadowlawn` | Larkmeadow Lawn Care | Raleigh, NC | larkmeadowlawn.online |
| `sixpennybarber` | Sixpenny Barber Shop | Denver, CO | sixpennybarber.online |

Each folder is its own Astro site with its own Netlify project. In Netlify, the
project's base directory is the folder name, the build command is
`npm run build` and the publish directory is `dist` (all set in each folder's
`netlify.toml`).

## Starting a new demo

Copy the folder whose layout is closest, then change `src/site.ts`, the colors
and fonts in `src/styles/global.css`, the logo, and the page text. The demo
banner, phone call bar and contact form read the business details from
`src/site.ts`.
