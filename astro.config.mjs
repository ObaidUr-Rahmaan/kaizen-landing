import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import clerk from '@clerk/astro'

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [clerk()],
  adapter: netlify(),
  output: 'server',
})