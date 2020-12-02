const path = require('path')

module.exports = {
  ignore: ['**/App.js', '**/*.test.js', '**/styles/GlobalStyles.js'],
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: ['src/Components/**/[A-Z]*.js'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StylesWrapper'),
  },
  styles: {
    Pre: {
      pre: {
        backgroundColor: 'green',
      },
    },
    StyleGuide: {
      base: {
        backgroundColor: '#000',
        width: '300px',
      },
      '@global body': {
        backgroundColor: '#000',

      }
    },
  },

  
}