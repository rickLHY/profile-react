import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs keep the same static build working both at
  // ricklhy.github.io/profile-react/ and at a custom domain's root.
  base: './',
})
