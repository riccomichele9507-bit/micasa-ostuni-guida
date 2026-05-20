import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all env vars (no prefix filter) so we can inline the guest-facing ones.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: { port: 3000 },
    preview: { port: 3000 },
    // Inline the guest-facing values into the CLIENT bundle. They are shown on the
    // page anyway, but this keeps them out of the committed source / public repo.
    // The serverless function reads the same values from process.env at runtime.
    define: {
      __WIFI_NETWORK__: JSON.stringify(env.VITE_WIFI_NETWORK ?? ''),
      __WIFI_PASSWORD__: JSON.stringify(env.VITE_WIFI_PASSWORD ?? ''),
      __LOCK_CODE__: JSON.stringify(env.VITE_LOCK_CODE ?? ''),
    },
  }
})
