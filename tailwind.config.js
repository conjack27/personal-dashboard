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
        'main-image': "url('../img/img-2.jpg')"
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
      block: '210px'
    },
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
      pink: '#F2D0C9',
      white: '#FFFFFF',
      black: '#000000',
      grey: '#333333'
    }
  },
  variants: {},
  plugins: []
}
