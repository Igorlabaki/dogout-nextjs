module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('/images/Kids/BackgroundMobile.png')",
        'web':"url('/images/Kids/BackgroundWeb.png')",
      },
      colors: {
        'header-pattern': 'black',
	      'blue-pattern': '#21BDFF',
	      'purple-pattern': '#613CE0',
	      'pink-pattern':' #f83bc1',
        'gray-pattern': '#EBEBEB'
      },
      fontFamily: {
        'pt-sans': ['"Pt Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};