import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/tauri-by-simon',
	integrations: [
		starlight({
			title: 'Tauri by Simon',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
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
					autogenerate: {
						directory: 'getting_started'
					}
				},
				{
					label: 'Help',
					collapsed: true,
					autogenerate: {
						directory: 'help'
					}
				},
				{
					label: 'Architecture',
					collapsed: true,
					autogenerate: {
						directory: 'architecture'
					}
				},
				{
					label: 'Best Practises',
					collapsed: true,
					autogenerate: {
						directory: 'best_practises'
					}
				},
				{
					label: 'CI/CD',
					collapsed: true,
					autogenerate: {
						directory: 'ci_cd'
					}
				},
				{
					label: 'Comparisons',
					collapsed: true,
					autogenerate: {
						directory: 'comparisons'
					}
				},
				{
					label: 'Contributing',
					collapsed: true,
					autogenerate: {
						directory: 'contributing'
					}
				},
				{
					label: 'Cookbook',
					collapsed: true,
					autogenerate: {
						directory: 'cookbook'
					}
				},
				{
					label: 'Crates.io',
					collapsed: true,
					autogenerate: {
						directory: 'crates_io'
					}
				},
				{
					label: 'Developing',
					collapsed: true,
					autogenerate: {
						directory: 'developing'
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
					label: 'Frontend',
					collapsed: true,
					autogenerate: {
						directory: 'frontend'
					}
				},
				{
					label: 'Hacking',
					collapsed: true,
					autogenerate: {
						directory: 'hacking'
					}
				},
				{
					label: 'Introduction',
					collapsed: true,
					autogenerate: {
						directory: 'introduction'
					}
				},
				{
					label: 'Javascript Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'javascript_concepts'
					}
				},
				{
					label: 'Legal Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'legal_concepts'
					}
				},
				{
					label: 'Migrating',
					collapsed: true,
					autogenerate: {
						directory: 'migrating'
					}
				},
				{
					label: 'Plugins',
					collapsed: true,
					autogenerate: {
						directory: 'plugins'
					}
				},
				{
					label: 'Practise Project: Flashcards',
					collapsed: true,
					autogenerate: {
						directory: 'practise_project_flashcards'
					}
				},
				{
					label: 'Practise Project: TODO',
					collapsed: true,
					autogenerate: {
						directory: 'practise_proeject_todo'
					}
				},
				{
					label: 'Rust Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'rust_concepts'
					}
				},
				{
					label: 'Tauri Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'tauri_concepts'
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
					label: 'Web Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'web_concepts'
					}
				},
			],
		}),
	],
});
