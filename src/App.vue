<template>
   <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary" md-elevation="1">
         <md-button class="md-icon-button" @click="drawer = true">
            <md-icon>menu</md-icon>
         </md-button>
         <span class="md-title">BookShelf</span>
      </md-app-toolbar>

      <md-app-drawer md-fixed md-persistent="full" :md-active.sync="drawer">
         <!-- todo - a card with the logo text vertical -->
         <md-toolbar class="md-transparent" md-elevation="0">
            BookShelf
         </md-toolbar>

         <md-list>
            <md-list-item>
               <md-icon>move_to_inbox</md-icon>
               <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
               <md-icon>send</md-icon>
               <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
               <md-icon>delete</md-icon>
               <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
               <md-icon>error</md-icon>
               <span class="md-list-item-text">Spam</span>
            </md-list-item>
         </md-list>
      </md-app-drawer>

      <md-app-content>
         <div id="page">
            <router-view/>
         </div>
      </md-app-content>
   </md-app>
</template>

<script>
import Book from "@/book";

export default {
  name: "App",
  data() {
    return {
      drawer: false,
      book: Book,
      title: "BookShelf"
    };
  },
  methods: {
    pushNav(path) {
      // note - a little hack to correct pathing issues.
      var p = path.substring(1).replace(/ /g, "-");
      this.drawer = false;
      this.$router.push(p);
    }
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(blue, A200),
    accent: md-get-palette-color(red, A200)
  )
);

@import "~vue-material/dist/theme/all";

@import "fonts/system-fonts.css";
@import "fonts/book-fonts.css";
html {
  overflow-y: hidden;
}
.md-app {
  max-height: 100vh;
}
#page {
  @import "typography.scss";
  @import "book.scss";
}
</style>
