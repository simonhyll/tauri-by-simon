import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
	site: 'https://tauri.by.simon.hyll.nu',
	trailingSlash: 'ignore',
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [
			rehypeHeadingIds, [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { ariaHidden: true, tabIndex: -1, class: 'heading-link' } }]]
	},
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
		customCss: ['./src/styles/theme.scss'],
		components: {
			MarkdownContent: './src/components/overrides/MarkdownContent.astro',
			Footer: './src/components/overrides/Footer.astro',
			Header: './src/components/overrides/Header.astro',
			Sidebar: './src/components/overrides/Sidebar.astro',
			SocialIcons: './src/components/overrides/SocialIcons.astro',
			SiteTitle: './src/components/overrides/SiteTitle.astro',
		},
		head: [
			// {
			// 	tag: 'meta',
			// 	attrs: {
			// 		'http-equiv':"Content-Security-Policy",
			// 	    content:"default-src 'self' tauri:// http://tauri.localhost https://tauri.localhost;frame-src github.com;frame-ancestors github.com;style-src 'unsafe-inline';script-src 'wasm-unsafe-eval';img-src 'self' asset: https://asset.localhost" 
			// 	}
			// },
			{
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
			{ tag: 'meta', attrs: { property: 'og:image', content: 'https://tauri.by.simon.hyll.nu/social.png' } },
			// Twitter Card meta tags
			{ tag: 'meta', attrs: { property: 'twitter:card', content: 'summary_large_image' } },
			{ tag: 'meta', attrs: { property: 'twitter:url', content: 'https://tauri.by.simon.hyll.nu' } },
			{ tag: 'meta', attrs: { property: 'twitter:title', content: 'Tauri by Simon' } },
			{ tag: 'meta', attrs: { property: 'twitter:description', content: 'My unofficial opinionated articles on using Tauri' } },
			{ tag: 'meta', attrs: { property: 'twitter:image', content: 'https://tauri.by.simon.hyll.nu/social.png' } },
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
				label: 'Setup',
				collapsed: true,
				autogenerate: {
					directory: 'setup'
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
				label: 'Best Practices',
				collapsed: true,
				autogenerate: {
					directory: 'best_practices'
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
				label: 'Labs',
				collapsed: true,
				items: [
					{
						label: 'Overview',
						link: 'labs'
					},
					{
						label: 'Features',
						collapsed: true,
						autogenerate: {
							directory: 'labs/features'
						}
					},
					{
						label: 'ChatGPT',
						collapsed: true,
						autogenerate: {
							directory: 'labs/chatgpt'
						}
					},
					{
						label: 'DevOps',
						collapsed: true,
						autogenerate: {
							directory: 'labs/devops'
						}
					},
					{
						label: 'Project Management',
						collapsed: true,
						autogenerate: {
							directory: 'labs/project-management'
						}
					},
				],
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
