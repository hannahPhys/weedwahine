# Weed Wāhine

Cannabis education from Aotearoa — a website for wāhine toa exploring plant medicine, wellness, and reconnecting with the tapu relationship between cannabis and female spirituality.

Live content (blog posts, author info) is managed in Contentful; the site itself is a static Gatsby build.

## Tech stack

- [Gatsby 2](https://www.gatsbyjs.com/) (React static site generator)
- [Contentful](https://www.contentful.com) as the CMS
- Sass for styling (compiled via [Dart Sass](https://sass-lang.com/dart-sass), not `node-sass`)
- Netlify for hosting/deploys

## Getting started

### Prerequisites

This project's dependency versions are old (Gatsby 2, `sharp`), so a few things matter:

- **Node 16**, run under Rosetta if you're on Apple Silicon (`arch -x86_64 zsh`, then `nvm use 16`). Newer Node versions fail to build the native `sharp` image-processing module.
- A `.env.development` file with:
  ```
  CONTENTFUL_SPACE_ID=your-space-id
  CONTENTFUL_ACCESS_TOKEN=your-delivery-api-token
  ```

### Install & run

```bash
npm install
npm run dev
```

Site runs at `http://localhost:8000`, GraphiQL explorer at `http://localhost:8000/___graphql`.

### Other scripts

- `npm run build` — production build to `./public`
- `npm run serve` — serve the production build locally
- `npm run netlify:deploy` — deploy `./public` to Netlify

## Project structure

- `src/pages/` — top-level routes (home, blog index, contact, shop)
- `src/templates/` — page templates driven by Contentful data (e.g. blog posts)
- `src/components/` — shared components (Hero, Layout, Navigation, etc.)
- `src/assets/` — images and fonts
- `gatsby-config.js` — plugin config, including the Contentful source and Sass setup

## Notes

- Styling uses `gatsby-plugin-sass` configured to use the `sass` (Dart Sass) package rather than the default `node-sass`, since `node-sass`'s native build doesn't compile on modern toolchains.
- The site's hero image is a local asset (`src/assets/cannabis-banner.jpg`), not pulled from Contentful.
