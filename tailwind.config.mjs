/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'purple': '#6c4de6',
				'fondo': "#16181c"
			  },
			  borderColor: {
				'purple': '#6c4de6',
			  },
			  textColor: {
				"purple": '#6c4de6',
			  }
		},
	},
	plugins: [],
}
