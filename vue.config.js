const path = require('path')

module.exports = {
   pwa: {
      name: 'BookShelf',
      themeColor: '#82B1FF',
      iconPaths: {
         favicon32: 'icons/favicon-32x32.png',
         favicon16: 'icons/favicon-16x16.png',
         appleTouchIcon: 'icons/apple-touch-icon.png',
         maskIcon: 'icons/safari-pinned-tab.svg',
         msTileImage: 'icons/mstile-150x150.png',
      }
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