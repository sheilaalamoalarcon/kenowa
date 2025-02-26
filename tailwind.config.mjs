/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: {
					light: '#1c1917',
					default: '#ccc',
					dark: '#fafaf9'
				},
				orange: {
					light: '#ff7e29',
					default: '#ff7e29',
					dark: '#ff7e29'
				}
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
			},
			gridRow: {
				layout: 'auto, 1fr, auto',
			}
		}
	},
	plugins: [],
}
