/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-image': "url('../img/pic-1.jpg')"
      })
    },
    fontFamily: {
      body: ['Roboto-Regular', 'sans-serif'],
      heading: ['Roboto-Thin', 'sans-serif']
    },
    scale: {
      98: '.98'
    },
    maxWidth: {
      1200: '1200px'
    },
    height: {
      block: '210px',
      '3/4': '75%',
      25: '25px',
      40: '40px',
      '64rem': '64rem',
      400: '400px',
      full: '100%'
    },
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
      pink: '#F2D0C9',
      white: '#FFFFFF',
      yellow: '#f6e05e',
      black: '#000000',
      sand: '#DECBA4',
      grey: '#333333'
    }
  },
  variants: {},
  plugins: []
}
