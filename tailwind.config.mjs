/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cecla-purple': '#41429c',
				'cecla-purple-light': '#9090da',
				'cecla-transparent-purple': 'rgba(65, 67, 156, 0.199)',
			},
			backgroundImage: {
				'cecla-front': "url('/assets/CECLA-banner.jpg')",
				'cecla-students': "url('/assets/CECLA-students-banner.jpg')",
				'cecla-icons-institute': "url('/assets/CECLA-institute-icon.png')"
			},
			keyframes: {
				'slider': {
					'0%': {
						transform: "translateX(0)"
					},
					'100%': {
						transform: "translateX(calc(-250px * 8))"
					}
				}
			},
			animation: {
				'slider': 'slider 40s linear infinite',
			}
		},
	},
	plugins: [],
}
