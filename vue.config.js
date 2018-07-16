const path = require('path')

module.exports = {
   pwa: {
      name: 'BookShelf'
   },
   devServer: {
      stats: "verbose",
      clientLogLevel: "info"
   },
   chainWebpack: config => {
      config.module
         .rule('pages')
         .test(/\.html$/)
         .include.add(path.join(__dirname, 'src/pages')).end()

      config.module
         .rule('pages')
         .use('vue-loader')
         .loader('vue-loader')

      config.module
         .rule('pages')
         .use('vue-page-loader')
         .loader('./src/vue-page-loader')
   }
}