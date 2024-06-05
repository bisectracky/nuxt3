// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [ '~/plugins/amplify.js'],
});

