import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
	site: 'https://simonhyll.github.io',
	base: '/tauri-by-simon',
	integrations: [vue(),
	starlight({
		title: 'Tauri by Simon',
		social: {
			github: 'https://github.com/withastro/starlight',
		},
		lastUpdated: true,
		logo: {
			src: './src/assets/icon.png'
		},
		favicon: './src/assets/icon.png',
		customCss: ['./src/styles/theme.css'],
		head: [{
			tag: 'script',
			attrs: {
				src: '/tauri-by-simon/navigate.js'
			}
		}],
		sidebar: [
			{
				label: 'Getting Started',
				collapsed: true,
				autogenerate: {
					directory: 'getting_started'
				}
			},
			{
				label: 'Concepts',
				collapsed: true,
				autogenerate: {
					directory: 'concepts'
				}
			},
			{
				label: 'Frontend',
				collapsed: true,
				autogenerate: {
					directory: 'empty'
				}
			},
			{
				label: 'Backend',
				collapsed: true,
				autogenerate: {
					directory: 'backend'
				}
			},
			{
				label: 'Debugging',
				collapsed: true,
				autogenerate: {
					directory: 'empty'
				}
			},
			{
				label: 'Testing',
				collapsed: true,
				autogenerate: {
					directory: 'empty'
				}
			},
			{
				label: 'Distributing',
				collapsed: true,
				autogenerate: {
					directory: 'empty'
				}
			},
			{
				label: 'Best Practises',
				collapsed: true,
				autogenerate: {
					directory: 'best_practises'
				}
			},
		],
	}),
	],
});
