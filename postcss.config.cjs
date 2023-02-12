module.exports = (ctx) => ({
   parser: 'postcss-scss',
   syntax: 'postcss-scss',
   map: ctx.env === 'development' ? ctx.map : false,
   plugins: {
      'postcss-strip-inline-comments': {},      
      'postcss-simple-vars': {},
      'postcss-nested': {},
      'autoprefixer': { overrideBrowserslist: ['last 1 version'] },
      'cssnano': ctx.env === 'production' ? {} : false
   }
})