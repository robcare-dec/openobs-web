# Prism Website

Marketing site built with React, TypeScript, Tailwind, and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

This project is now set up to deploy to GitHub Pages with GitHub Actions.

What is already handled:
- On each push to `main`, GitHub Actions builds and deploys the `dist/` folder.
- During GitHub Actions builds, Vite automatically uses `/${repo-name}/` as the base path.
- If you use a custom domain later, the same site can still build from `/`.

## GitHub setup

1. Push this project to a GitHub repository.
2. Open `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or run the deploy workflow manually.

## Notes

- This site is a good fit for GitHub Pages because it is a static Vite app with no backend requirement.
- The workflow copies `index.html` to `404.html`, which helps if you add SPA routes later.
- If you ever need to build locally for a non-root path, you can override the base path:

```bash
VITE_BASE_PATH=/your-path/ npm run build
```
