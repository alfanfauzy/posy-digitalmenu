const plugins = {
  'postcss-import': {},
  tailwindcss: {},
  autoprefixer: {},
}

// if (process.env.NODE_ENV === 'production') {
//   plugins['@fullhuman/postcss-purgecss'] = {
//     content: [
//       './pages/**/*.tsx',
//       './src/containers/**/*.tsx',
//       './src/components/**/**/*.tsx',
//       './styles/globals.css',
//     ],
//     defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
//   }

//   plugins.cssnano = {
//     preset: ['default'],
//   }
// }

module.exports = {
  plugins,
}
