# Projek PETA - An interactive way to navigate EV charging ports!

## Architecture

- Astro
- Vercel (deployment)
- HuggingFace.js
- Dataset: Adjusted from `https://huggingface.co/datasets/cfahlgren1/us-ev-charging-locations/blob/main/charging_stations.json`

## Google Services used

- Google 3D Map API
- <a target="_blank" href="https://icons8.com/icon/61577/electric-vehicle">Electric Vehicle</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

## Project Structure

You'll see the following structure that made up the following project

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Any used assets, like images and `.gtlb` models, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Setup

You may insert your Google maps API into this project via the format shown under `.env.example` file. You may also create your own `.env` to try out.
