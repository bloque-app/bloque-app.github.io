/**
 * The projects the hub lists, and the brand colours of the family. One place, read by the home
 * page's cards, the hero's marks and the Brand page.
 *
 * Hues come from the logo export (public/brand/<product>/symbol.svg): `hue` is the fill on light
 * grounds, `hueOnInk` the fill on ink. Status wording is "in design" for anything not yet open;
 * no dates are promised.
 */

export type Product = 'aledgent' | 'bezent' | 'rutent' | 'evmhot';

export interface Link {
	label: string;
	href: string;
	note?: string;
}

export interface Project {
	id: Product;
	/** What it is, in a few words: shown as the card's kicker. */
	role: string;
	/** One sentence. */
	summary: string;
	status: string;
	/** Stage, for the status pill's colour: live, open or design. */
	stage: 'live' | 'open' | 'design';
	links: Link[];
}

export const projects: Project[] = [
	{
		id: 'aledgent',
		role: 'Ledger',
		summary:
			"Bloque's ledger (Agent + ledger): a book that anyone it concerns can check against a public anchor on Kreivo.",
		status: 'In production at Bloque since 12 October 2026 · open source since 13 October 2026',
		stage: 'live',
		links: [
			{ label: 'Docs', href: '/aledgent/' },
			{ label: 'Repository', href: 'https://github.com/bloque-app/aledgent' },
		],
	},
	{
		id: 'bezent',
		role: 'Reserve bridge',
		summary:
			'Moves value between chains and off-chain reserves, and issues 1:1-backed assets: bUSDc, bEURc and bBTC.',
		status: 'Open source since 17 October 2026 · in development, not yet in production',
		stage: 'open',
		links: [{ label: 'Repository', href: 'https://github.com/bloque-app/bezent' }],
	},
	{
		id: 'rutent',
		role: 'Ramp',
		summary: 'Takes local money (Bre-B, PIX, SPEI) to on-chain balances, and back.',
		status: 'In design',
		stage: 'design',
		links: [],
	},
	{
		id: 'evmhot',
		role: 'EVM hot wallets',
		summary:
			'Hot-wallet administration for deposits on EVM chains, in Rust: per-user HD deposit addresses, deposit monitoring (native and ERC-20), a gas faucet, sweeps to the treasury, and webhooks.',
		status: 'Public repository',
		stage: 'open',
		links: [{ label: 'Repository', href: 'https://github.com/bloque-app/evmhot' }],
	},
];

export interface Colour {
	id: Product | 'next';
	name: string;
	hue: string;
	hueOnInk: string;
	/** Contrast of the fill against white and against ink (#0d0c17), from the round-8 colour check. */
	contrast: string;
	note?: string;
}

export const colours: Colour[] = [
	{ id: 'aledgent', name: 'Violet', hue: '#6a3cff', hueOnInk: '#a78bfa', contrast: '5.67 on white · lilac on ink' },
	{ id: 'bezent', name: 'Sky', hue: '#1f7bff', hueOnInk: '#1f7bff', contrast: '3.94 on white · 4.93 on ink' },
	{ id: 'rutent', name: 'Orange', hue: '#ff7a1a', hueOnInk: '#ff7a1a', contrast: '2.61 on white · 7.44 on ink' },
	{
		id: 'evmhot',
		name: 'Crimson',
		hue: '#d92d4a',
		hueOnInk: '#e8475f',
		contrast: '4.75 on white · lifted to #e8475f on ink (5.08)',
	},
	{
		id: 'next',
		name: 'Mint',
		hue: '#00cc66',
		hueOnInk: '#00cc66',
		contrast: '2.14 on white · 9.08 on ink',
		note: 'Reserved for the next product. No mark yet.',
	},
];

export const hueOf = (id: Product) => colours.find((c) => c.id === id)!;
