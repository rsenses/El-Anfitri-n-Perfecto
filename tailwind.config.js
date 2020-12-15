module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
        'primary': '#000',
        'secondary': '#fbbd59',
        'black': '#000',
        'white': '#fff',
    }),
    fontFamily: {
        'headers': ['Saol Display','Helvetica', 'Arial', 'sans-serif'],
        'body': ['Inter','Helvetica', 'Arial', 'sans-serif'],
    },
     textColor: {
        'black': '#000',
        'white': '#fff',
       'primary': '#fbbd59'
     },
     borderColor: theme => ({
         DEFAULT: '#fbbd59',
        'primary': '#fbbd59',
        'secondary': '#fff',
        'black': '#000',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
