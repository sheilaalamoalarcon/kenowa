// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel';

import db from '@astrojs/db';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [preact(), auth(), db()],
  site: 'http://localhost:4321',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});