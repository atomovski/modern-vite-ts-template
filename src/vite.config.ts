import { defineConfig } from 'vite';

export default defineConfig({ 
  server: {
    cors: true,
    headers: {
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'unsafe-none'
    }
  }
});
