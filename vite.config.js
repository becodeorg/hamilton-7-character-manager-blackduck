// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                addchar: resolve(__dirname, 'addchar.html'),
                singlechar: resolve(__dirname, 'singlechar.html'),
            },
        },
    },
});
