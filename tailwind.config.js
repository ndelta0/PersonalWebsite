/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#042c4b',
				secondary: {
					100: '#E2E2D5',
					200: '#888883'
				}
			},
			fontFamily: {
				body: ['Inter']
			}
		}
	},
	plugins: [require('daisyui')]
};
