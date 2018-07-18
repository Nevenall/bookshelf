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

typography will vary by font, but we could specify size variables
and expose them for customization
that should work in many instances
but is it good practice to separate the layout from raw typography?
one could make an argument that it's all typography
could we take a generically written css from the pages directory and add the #page scope to it to get something localized? I wonder if sass can do that? 

Sass is great! 

Also, we can do various things to make the styles more readable with scss
We could parcel out the media breakpoints into their various element types. 
Or we could just nest them in reasonable ways. 

the font size and line heights are very dependent on the fonts
but the widths and placement are not so much. 
most of the rythmn is pretty generic. 
either each book overides the various font sizes and line heights in book.scss
or each book can just edit the typography values.


## Todo

- [x] Add basic styling to App.vue
- [x] Add basic typography to App.vue
- [x] add roboto and material design icon fonts as woff(2) files so they can be embedded in the package.
- [ ] clean up the scss 

