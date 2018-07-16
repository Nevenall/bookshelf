"use strict"

// This preps html fragments to be complied by the vue loader

module.exports = function(source) {
   return `export default "
         <template>
         <div class="page">
            ${source}
         </div>
      </template>"`
}