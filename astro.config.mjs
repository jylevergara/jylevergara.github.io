import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://jylevergara.github.io/', // Required for sitemap -> Replace with your site's URL
	output: 'static',
	integrations: [tailwind(), sitemap()],
});