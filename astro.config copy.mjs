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
					autogenerate: {
						directory: 'getting_started'
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
						directory: 'frontend'
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
					label: 'Rust Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'rust_concepts'
					}
				},
				{
					label: 'JavaScript Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'javascript_concepts'
					}
				},
				{
					label: 'TypeScript Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'javascript_concepts'
					}
				},
				{
					label: 'Web Concepts',
					collapsed: true,
					autogenerate: {
						directory: 'web_concepts'
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
					label: 'Testing',
					collapsed: true,
					autogenerate: {
						directory: 'testing'
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
					label: 'Comparisons',
					collapsed: true,
					autogenerate: {
						directory: 'comparisons'
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
						directory: 'practise_project_todo'
					}
				},
			],
		}),
	],
});
