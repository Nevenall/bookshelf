import gulp from 'npm:gulp'
let { parallel, series, src, dest, watch } = gulp

import through from 'npm:through2'
import replace from 'npm:gulp-replace'

import sourcemaps from 'npm:gulp-sourcemaps'

import concat from "npm:gulp-concat"
import rename from 'npm:gulp-rename'
import gulpif from 'npm:gulp-if'
import del from 'npm:delete'
import { dirname } from 'node:path'

import { compile, preprocess } from 'npm:svelte/compiler'


import postcss from 'npm:postcss'
import gulppostcss from 'npm:gulp-postcss'
import postcssloadconfig from 'npm:postcss-load-config'

import browserSync from 'npm:browser-sync'
let devServer = browserSync.create()


let svelteOptions = {
   sveltePath: './svelte'
}

// default components import internals from "npm:./svelte/internal"
// but the service-worker will then provide that file under each component directory
// which breaks some of the internals of component compiling
// therefore, we replace that import path with a static one
function fixInternals() {
   return replace('./svelte/internal', '/dependencies/svelte/index.mjs')
}

// clean up the dist directory before we start building
function clean(done) {
   del('dist/**', done)
}

function index() {
   return src('src/index.html')
      .pipe(dest('dist'))
}

function js() {
   return src('src/**/*.js')
      .pipe(dest('dist'))
}

async function styles() {
   return src('src/styles/**/*.css')
      // plugins configured in ./postcss.config.cjs
      .pipe(gulppostcss())
      .pipe(dest('dist/styles'))
}


// copy html chapters
function chapters() {
   return src('src/book/**/*.html')
      .pipe(dest('dist/book'))
}

function assets() {
   return src('src/book/assets/**')
      .pipe(dest('dist/assets'))
}

async function components() {
   // manually load the postcss config
   let config = await postcssloadconfig({ env: process.env || 'development' }, './postcss.config.js')

   return src("src/**/*.svelte")
      .pipe(through.obj(function (file, encoding, done) {
         let source = file.contents.toString()

         preprocess(source, {
            style: async ({ content, markup, attributes, filename }) => {
               // only preprocessing postcss <style> elements
               if (attributes.lang !== 'postcss') return
               let processed = await postcss(config.plugins).process(content, config.options)
               return { code: processed.css.toString() }
            }
         })
            .then(preprocessed => {
               let compiled = compile(preprocessed.code, { filename: file.path, ...svelteOptions })
               // default components import internals from "npm:./svelte/internal"
               // but the service-worker will then provide that file under each component directory
               // which, i believe, breaks some of the internals of component compiling
               // therefore, we replace that import path with a static one
               var content = compiled.js.code
               file.contents = Buffer.from(content)
               done(null, file)
            })
            .catch(err => {
               console.log(err)
            })
      }))
      .pipe(fixInternals())
      .pipe(dest('dist'))
}

// copy client dependencies and do some renaming
function dependencies() {
   return src('node_modules/svelte/internal/index.mjs')
      // Svelte internals 
      .pipe(rename(function (path) {
         path.dirname = 'svelte'
         path.basename = 'index'
      }))
      .pipe(dest('dist/dependencies'))

      // // svelte transitions
      // .pipe(src('node_modules/svelte/transition/index.mjs'))
      // .pipe(rename(function (path) {
      //    path.basename = 'transition'
      // }))
      // .pipe(dest('dist/dependencies'))


      // pagejs client router
      .pipe(src('node_modules/page/page.mjs'))
      .pipe(rename(function (path) {
         path.dirname = 'page'
         path.basename = 'index'
      }))
      .pipe(dest('dist/dependencies'))
}

// copy static files
function staticFiles() {
   return src('static/**')
      .pipe(dest('dist'))
}

function dev(done) {
   devServer.init({
      server: './dist',
      single: true,
      port: 8080,
      files: ['dist/**'],
      open: false,
      notify: false,
      // middleware for http2
      // middleware: [history]
   })

   // watch each type of file seperately so we can more efficently run just that pipeline 
   watch('src/index.html', index)
   watch('static/**', staticFiles)
   watch('src/icons/**', icons)
   watch('src/styles/**', styles)
   watch('src/**/*.js', js)
   watch('src/**/*.svelte', components)
   watch('src/book/**/*.html', chapters)

   done()
}

function icons() {
   return src('src/icons/**/*.svg')
      .pipe(through.obj(function (file, enc, done) {
         let source = file.contents.toString()
         let compiled = compile(source, { filename: file.path, ...svelteOptions })

         var content = compiled.js.code
         file.contents = Buffer.from(content)
         file.extname = ".svg"
         done(null, file)
      }))
      .pipe(fixInternals())
      .pipe(dest('dist/icons'))
}

// build processes files, 
// currently in parallel, but there may be some parts we want to serialize because, of sass and svelte stuff
let compileBookShelf = parallel(
   staticFiles,
   components,
   index,
   dependencies,
   js,
   styles,
   icons,
   chapters,
   assets
)

// default task is to clean and run build
let build = series(
   clean,
   compileBookShelf
)

let develop = series(build, dev)

export {
   build as default,
   build as build,
   develop as develop,
   dependencies as dependencies
}