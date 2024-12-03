/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#00ff00',
				'primary-dark': '#00cc00'
			}
		}
	},
	plugins: []
};