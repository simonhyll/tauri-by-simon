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
					autogenerate: {
						directory: 'help'
					}
				},
				{
					label: 'Architecture',
					autogenerate: {
						directory: 'architecture'
					}
				},
				{
					label: 'Best Practises',
					autogenerate: {
						directory: 'best_practises'
					}
				},
				{
					label: 'CI/CD',
					autogenerate: {
						directory: 'ci_cd'
					}
				},
				{
					label: 'Comparisons',
					autogenerate: {
						directory: 'comparisons'
					}
				},
				{
					label: 'Contributing',
					autogenerate: {
						directory: 'contributing'
					}
				},
				{
					label: 'Cookbook',
					autogenerate: {
						directory: 'cookbook'
					}
				},
				{
					label: 'Crates.io',
					autogenerate: {
						directory: 'crates_io'
					}
				},
				{
					label: 'Developing',
					autogenerate: {
						directory: 'developing'
					}
				},
				{
					label: 'Distributing',
					autogenerate: {
						directory: 'distributing'
					}
				},
				{
					label: 'Frontend',
					autogenerate: {
						directory: 'frontend'
					}
				},
				{
					label: 'Hacking',
					autogenerate: {
						directory: 'hacking'
					}
				},
				{
					label: 'Introduction',
					autogenerate: {
						directory: 'introduction'
					}
				},
				{
					label: 'Javascript Concepts',
					autogenerate: {
						directory: 'javascript_concepts'
					}
				},
				{
					label: 'Legal Concepts',
					autogenerate: {
						directory: 'legal_concepts'
					}
				},
				{
					label: 'Migrating',
					autogenerate: {
						directory: 'migrating'
					}
				},
				{
					label: 'Plugins',
					autogenerate: {
						directory: 'plugins'
					}
				},
				{
					label: 'Practise Project: Flashcards',
					autogenerate: {
						directory: 'practise_project_flashcards'
					}
				},
				{
					label: 'Practise Project: TODO',
					autogenerate: {
						directory: 'practise_proeject_todo'
					}
				},
				{
					label: 'Rust Concepts',
					autogenerate: {
						directory: 'rust_concepts'
					}
				},
				{
					label: 'Tauri Concepts',
					autogenerate: {
						directory: 'tauri_concepts'
					}
				},
				{
					label: 'Testing',
					autogenerate: {
						directory: 'testing'
					}
				},
				{
					label: 'Web Concepts',
					autogenerate: {
						directory: 'web_concepts'
					}
				},
			],
		}),
	],
});
