import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";

export default defineConfig({
	site: 'https://tauri.by.simon.hyll.nu',
	trailingSlash: 'always',
	integrations: [vue(),
	starlight({
		title: 'Tauri by Simon',
		social: {
			github: 'https://github.com/tauri-apps/tauri',
			discord: 'https://discord.com/invite/tauri'
		},
		lastUpdated: true,
		logo: {
			src: './src/assets/icon.png'
		},
		favicon: '/icon.png',
		customCss: ['./src/styles/theme.css'],
		head: [{
			tag: 'script',
			attrs: {
				src: '/navigate.js'
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
				label: 'Best Practices',
				collapsed: true,
				autogenerate: {
					directory: 'best_practices'
				}
			},
		],
	}),
	],
});
