import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Сайт аккаунта marishka-k.github.io открывается из корня — base '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
});
