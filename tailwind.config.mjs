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
				},
				'slide-in-top': {
					'0%': {
						transform: 'translateY(-50px)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1,
					}
				},
				'toast-active': {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'40%': {
						transform: 'translateX(10%)',
					},
					'80%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(0%)',
					}
				}
			},
			animation: {
				'slider': 'slider 40s linear infinite',
				'slide-in-top': 'slide-in-top 0.3s both',
				'toast-active': 'toast-active 1s ease forwards'
			}
		},
	},
	plugins: [],
}
