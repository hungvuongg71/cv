// Use defineConfig from vitest/config so the `test` block is type-safe
// AND Vite config types are fully included (no conflict).
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// `import.meta.url` replaces `__dirname` — works in ESM without @types/node
const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/cv/', // Change to your GitHub repo name
  resolve: {
    alias: {
      '@': r('./src'),
      '@presentation': r('./src/presentation'),
      '@application': r('./src/application'),
      '@domain': r('./src/domain'),
      '@infrastructure': r('./src/infrastructure'),
      '@shared': r('./src/shared'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
