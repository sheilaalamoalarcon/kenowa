// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel';

import db from '@astrojs/db';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), auth(), db(), tailwind({
    configFile: "./tailwind.config.mjs"
  })],
  site: 'http://localhost:4321',
  output: 'server',
  adapter: vercel()
});