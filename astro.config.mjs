// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// This is the GitHub organisation's Pages root (bloque-app.github.io), so it is served at "/".
// Each project's own docs are a separate Pages site under it, at /<repo>/ (aledgent: /aledgent/).
// Both values come from the environment so a fork or a custom domain can build the same tree.
const site = process.env.SITE_URL ?? 'https://bloque-app.github.io';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
	site,
	base,
	output: 'static',
	integrations: [
		starlight({
			title: 'Bloque Open Source',
			description:
				"The tech family behind Bloque's financial services: books, reserves, ramps and wallets that anyone can check.",
			logo: {
				light: './src/assets/bloque-mark.svg',
				dark: './src/assets/bloque-mark-dark.svg',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			// Link previews (Slack, social): one card for every page, served from public/og.png.
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://bloque-app.github.io/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://bloque-app.github.io/og.png' } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/bloque-app' }],
			editLink: { baseUrl: 'https://github.com/bloque-app/bloque-app.github.io/edit/main/' },
			defaultLocale: 'root',
			locales: { root: { label: 'English', lang: 'en' } },
			// Theme, fonts and component overrides are the ones aledgent's docs use
			// (bloque-app/aledgent, site/), so the family has one theme to maintain.
			customCss: [
				'@fontsource/familjen-grotesk/700.css',
				'@fontsource/geist/400.css',
				'@fontsource/geist/500.css',
				'@fontsource/geist-mono/400.css',
				'./src/styles/theme.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				Hero: './src/components/Hero.astro',
			},
			expressiveCode: {
				themes: ['github-light', 'github-dark'],
				styleOverrides: {
					borderRadius: '18px',
					borderColor: 'var(--sl-color-hairline)',
					codeFontFamily: 'var(--__sl-font-mono)',
					uiFontFamily: 'var(--__sl-font)',
					frames: { shadowColor: 'transparent' },
				},
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Brand', link: '/brand/' },
				{ label: 'Open source at Bloque', link: '/open-source/' },
				{
					label: 'Projects',
					items: [
						{ label: 'aledgent docs', link: '/aledgent/' },
						{ label: 'evmhot on GitHub', link: 'https://github.com/bloque-app/evmhot' },
					],
				},
			],
		}),
	],
});
