/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#FAFAFA',
			},
			gridTemplateRows: {
				'layout': '1fr 1fr 1fr',
			}
		}
	},
	plugins: [],
}
