const path = require('path')

module.exports = {
  ignore: ['**/App.js', '**/*.test.js', '**/styles/GlobalStyles.js'],
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: ['src/Components/**/[A-Z]*.js'],
  theme: {
    color: {
      baseBackground: '#c2d6d3',
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StylesWrapper'),
  }
}