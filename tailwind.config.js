/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pub/**/*.{html,js}"],
	theme: {
		screens: {
			'sm': { 'max': '767px'},
			'md': {'min': "768px", 'max': "1023px" },
			'lg': {'min': "1024px" },
		},
		extend: {
			backgroundImage: {
				banner: "url('/imgs/banners.jpg')",
			},
		},
	},
	plugins: [],
};
