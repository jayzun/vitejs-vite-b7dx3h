import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: [path.resolve(__dirname, './public/main.js')],
  },
});
