import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Svelte FAST Marquee',
			social: {
				github: 'https://github.com/abosch19/svelte-fast-marquee',
			},
			sidebar: [
				{ label: 'Install', link: '/install/' },
				{ label: 'Usage', link: '/usage/' },
				{ label: 'Props', link: '/props/' }
			],
		}),
	],
});
