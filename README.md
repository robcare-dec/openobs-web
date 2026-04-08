# OpenObs Website

Marketing site for OpenObs, an open-source observability experience focused on AI-native workflows, dashboard generation, and alerting from natural language.

## What this repo contains

- The public website / landing page for OpenObs
- A static React + Vite frontend that can be deployed on GitHub Pages
- GitHub Actions workflow for automatic Pages deployment

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

The local dev server runs with a root base path, which keeps development simple.

## Production build

```bash
npm run build
```

## Deploying to GitHub Pages

This repository is configured to deploy through GitHub Actions.

What is already set up:
- Every push to `main` triggers a production build
- The generated `dist/` folder is deployed to GitHub Pages
- Vite automatically uses the correct repository base path during GitHub Actions builds
- `404.html` is generated from `index.html` to make future SPA-style routing safer on Pages
- `.nojekyll` is included so GitHub Pages serves the static output directly

## GitHub Pages setup

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or manually run the deploy workflow.

## Custom domains

The project can also be used with a custom domain. If you switch away from the repository path deployment and want full root hosting, you can provide a custom base path during build:

```bash
VITE_BASE_PATH=/your-path/ npm run build
```

For a root-domain deployment, the base path should remain `/`.

## Project structure

```text
.
|-- public/
|-- src/
|   |-- components/
|   |-- lib/
|   `-- main.tsx
|-- .github/workflows/
|-- index.html
`-- vite.config.ts
```

## Contributing

Issues and pull requests are welcome. If you are changing layout, copy, or brand presentation, try to preserve the overall OpenObs voice and product direction.

## License

No license has been added yet. Until a license is published, all rights are reserved by default.
