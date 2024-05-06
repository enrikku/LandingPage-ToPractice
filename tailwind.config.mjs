/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'supabase': '#43cc8e',
				'angular': '#de002d',
				'postgres': '#2f6792',
				'tailwind': '#16becb',
				'node': '#74b956',
			},
			borderColor: {
				'supabase': '#43cc8e',
				'angular': '#de002d',
				'postgres': '#2f6792',
				'tailwind': '#16becb',
				'node': '#74b956',
			},
		},
	},
	variants: {
		fill: ['hover', 'focus'],
	},
	plugins: [
		require('daisyui'),
		require('tailwindcss-animated')
	],
}
