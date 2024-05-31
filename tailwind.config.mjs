/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  screens: {
			'iphone-13': '390px',
		  },
		  width: {
			'iphone-13': '390px',
		  },
		  height: {
			'iphone-13': '844px',
		  },
		},
	  },
	plugins: [],
}
