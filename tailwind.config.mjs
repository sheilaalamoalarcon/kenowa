/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#FAFAFA',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				fadeOut: {
					'100%': { opacity: 0 },
					'0%': { opacity: 1 },
				}
			},
			animation: {
				fadeIn: 'fadeIn 0.5s linear forwards',
				fadeOut: 'fadeOut 0.5s linear forwards'
			}
		}
	},
	plugins: [],
}
