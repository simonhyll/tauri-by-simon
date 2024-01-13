import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";

export default defineConfig({
	site: 'https://simonhyll.github.io',
	base: process.env.TAURI_PLATFORM ? '/' : '/tauri-by-simon/',
	trailingSlash: 'always',
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
				src: process.env.TAURI_PLATFORM ? '/navigate.js' : '/tauri-by-simon/navigate.js',
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
					directory: 'frontend'
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
					directory: 'debugging'
				}
			},
			{
				label: 'Testing',
				collapsed: true,
				autogenerate: {
					directory: 'testing'
				}
			},
			{
				label: 'Distributing',
				collapsed: true,
				autogenerate: {
					directory: 'distributing'
				}
			},
			{
				label: 'Samples',
				collapsed: true,
				autogenerate: {
					directory: 'samples'
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
