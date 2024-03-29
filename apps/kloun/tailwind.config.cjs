/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '455px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				barkpattern: "url('/images/bgg.svg')",
				'footer-texture': "url('/img/footer-texture.png')"
			},
			colors: {
				gray: {
					50: '#123646',
					100: '#f7fafc',
					200: '#edf2f7',
					300: '#e2e8f0',
					400: '#cbd5e0',
					500: '#a0aec0',
					600: '#718096',
					700: '#4a5568',
					800: '#2d3748',
					900: '#1a202c'
				},
				blue: {
					100: '#ebf8ff',
					200: '#bee3f8',
					300: '#90cdf4',
					400: '#63b3ed',
					500: '#4299e1',
					600: '#3182ce',
					700: '#2b6cb0',
					800: '#2c5282',
					900: '#0099FF'
				}
			}
		}
	},
	plugins: [require("@tailwindcss/typography")],
	variants: {}
}