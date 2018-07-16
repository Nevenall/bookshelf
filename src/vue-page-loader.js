"use strict"

// This preps html fragments to be complied by the vue loader

module.exports = function(source) {

   source = source.replace(/href="\//ig, 'href="#/')

   return `export default "
         <template>
         <div class="page">
            ${source}
         </div>
      </template>"`
}