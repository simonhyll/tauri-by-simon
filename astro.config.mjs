import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";

export default defineConfig({
	site: 'https://tauri.by.simon.hyll.nu',
	trailingSlash: 'always',
	trailingSlash: 'ignore',
	integrations: [vue(),
	starlight({
		title: 'Tauri by Simon',
		description: 'My unofficial opinionated articles on using Tauri',
		social: {
			rss: 'https://tauri.by.simon.hyll.nu/feed.xml',
			github: 'https://github.com/sponsors/simonhyll',
			linkedin: 'https://linkedin.com/in/simonhyll',
			discord: 'https://discord.com/invite/tauri',
			stackOverflow: 'https://stackoverflow.com/users/5614602/simon-hyll',
			youtube: 'https://youtube.com/@hyllsimon',
		},
		lastUpdated: true,
		logo: {
			src: './src/assets/logo_small.png'
		},
		favicon: '/icon.png',
		customCss: ['./src/styles/theme.css'],
		components: {
			Footer: './src/components/Footer.astro',
			Header: './src/components/Header.astro',
			SocialIcons: './src/components/SocialIcons.astro',
		},
		head: [{
			tag: 'script',
			attrs: {
				src: '/navigate.js'
			}
		}, {
			tag: 'script',
			attrs: {
				src: '/loadSw.js',
				async: true
			}
		},
		// Open Graph / Facebook meta tags
		{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
		{ tag: 'meta', attrs: { property: 'og:url', content: 'https://tauri.by.simon.hyll.nu' } },
		{ tag: 'meta', attrs: { property: 'og:title', content: 'Tauri by Simon' } },
		{ tag: 'meta', attrs: { property: 'og:description', content: 'My unofficial opinionated articles on using Tauri' } },
		{ tag: 'meta', attrs: { property: 'og:image', content: 'https://www.yourwebsite.com/image-url.jpg' } },
		// Twitter Card meta tags
		{ tag: 'meta', attrs: { property: 'twitter:card', content: 'summary_large_image' } },
		{ tag: 'meta', attrs: { property: 'twitter:url', content: 'https://tauri.by.simon.hyll.nu' } },
		{ tag: 'meta', attrs: { property: 'twitter:title', content: 'Tauri by Simon' } },
		{ tag: 'meta', attrs: { property: 'twitter:description', content: 'My unofficial opinionated articles on using Tauri' } },
		{ tag: 'meta', attrs: { property: 'twitter:image', content: 'https://tauri.by.simon.hyll.nu/icon.png' } },
		],
		sidebar: [
			{
				label: 'Getting Started',
				collapsed: true,
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
			{
				label: 'Concepts',
				collapsed: true,
				autogenerate: {
					directory: 'concepts'
				}
			},
		],
	}),
	],
});
