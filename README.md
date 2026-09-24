# Alharmain Associates

A modern, responsive real estate & construction website built with React, Vite, React Router, Tailwind CSS, Framer Motion and Lucide icons.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Renaming the site

Open `src/data/siteData.js` and change:

- `companyName`, `logoText`, `logoAccent`, `tagline`
- `phone`, `email`, `address`, `mapEmbedUrl`, `socials`
- `WHATSAPP_NUMBER` — **this is the single place your WhatsApp number lives.** Every "Contact / Inquire / WhatsApp" button across the site reads from here via `src/utils/whatsapp.js`. Use full international format with no `+` or spaces, e.g. `923001234567`.

## Where everything lives

| What | File |
|---|---|
| Company info, WhatsApp number, nav links, footer links, "How We Work" steps | `src/data/siteData.js` |
| Services (Architecture, Interior Design, Grey Structure, Finishing, etc.) | `src/data/services.js` |
| Blocks (residential/farmhouse/commercial communities) | `src/data/blocks.js` |
| Projects | `src/data/projects.js` |
| Properties (houses, apartments, plots, etc.) | `src/data/properties.js` |
| Blog posts | `src/data/blogs.js` |
| FAQs | `src/data/faqs.js` |
| Construction cost calculator rates | `src/data/calculatorRates.js` |

Every page and card component reads from these files — you never need to touch component/JSX code to update content, prices, or descriptions.

## Adding your own images & videos

1. Drop your image/video files into the matching subfolder under `src/assets/`:
   - `src/assets/images/services/`
   - `src/assets/images/blocks/`
   - `src/assets/images/projects/`
   - `src/assets/images/properties/`
   - `src/assets/images/blogs/`
   - `src/assets/videos/`
2. Update the corresponding `image`, `gallery`, or `video` field in the matching data file (e.g. `properties.js`) to point at your new file path.
3. Until you add a real file, pages show a clean placeholder (dark panel with an icon and the image's alt text) instead of a broken image — so you can see exactly what still needs a photo.

For the homepage hero, replace `src/assets/images/hero-image.jpg` (see `src/pages/Home.jsx` if you'd like to switch it to a background video instead — there's a comment showing where).

## Adding a new property / block / project / service / blog post

Each data file exports an array of plain objects. Copy an existing entry, change the `id` (this becomes the URL, e.g. `/properties/your-id`), and fill in the fields. No new files or routes need to be created — `PropertyDetails.jsx`, `BlockDetails.jsx`, `ProjectDetails.jsx`, `ServiceDetails.jsx` and `BlogDetails.jsx` are all single reusable pages driven by the URL parameter.

## Editing the construction cost calculator

Open `src/data/calculatorRates.js`:

- `constructionTypes` — rate per sq ft for each construction tier
- `foundationDepths` — multiplier for foundation depth options
- `projectTypeMultipliers` — multiplier per project type (house/apartment/farmhouse/commercial)

The calculation logic itself (`calculateEstimate`) shouldn't need changes — just update the numbers.

## Project structure

```
src/
├── assets/
│    ├── images/        (services, blocks, projects, properties, blogs subfolders)
│    └── videos/
├── components/          shared UI: Navbar, Footer, cards, forms, gallery, etc.
├── pages/                one file per route
├── data/                 all editable content lives here
├── utils/                whatsapp.js (message links), format.js (currency/date helpers)
├── App.jsx               router setup
├── main.jsx               entry point
└── index.css              Tailwind + global styles
```

## Notes

- This is a frontend-only build. The contact form validates and shows a success state, and can also send an inquiry straight to WhatsApp — connecting it to a real backend/email service is a small addition (see the comment in `src/components/ContactForm.jsx`).
- Design tokens (colors, fonts) live in `tailwind.config.js` under `theme.extend` if you want to adjust the palette or typography.
