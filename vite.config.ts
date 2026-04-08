import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  const explicitBase = process.env['VITE_BASE_PATH']
  const repoName = process.env['GITHUB_REPOSITORY']?.split('/')[1]
  const base = explicitBase || (process.env['GITHUB_ACTIONS'] === 'true' && repoName ? `/${repoName}/` : '/')

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
