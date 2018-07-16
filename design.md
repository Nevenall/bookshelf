# BookShelf Design Document

Vue 
Vue cli 
Webpack 4
Vuetify


## Touch enabled page turning

Vuetify supports touch events. 


## Niggling bits

The vuetify framework seems to be reflowing the text when the drawer is closed. Hopefully once we start filling out the css that will go away.


## Design Thoughts

### structure for styles

Should we separate the basic typography?
i.e. have a div for the page and colors and format
and another div specifically for typography?
also, can we create a stylus style block in App.vue specifically for setting the theme colors?

## Todo

- [x] Add basic styling to App.vue
- [x] Add basic typography to App.vue
- [ ] add roboto and material design icon fonts as woff(2) files so they can be embedded in the package.
- [ ] clean up the scss with &. scope operator

