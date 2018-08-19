<template>
   <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary" md-elevation="1">
         <md-button class="md-icon-button" @click="drawer = true">
            <md-icon>menu</md-icon>
         </md-button>
         <span class="md-title">BookShelf
            <md-icon>chevron_right</md-icon>
         </span>
      </md-app-toolbar>
      <md-app-drawer md-fixed md-persistent="full" :md-active.sync="drawer">
         <div class="drawer-logo">
            <img src="./assets/logo-vertical.png" alt="bookshelf logo">
         </div>
         <md-list>
            <md-list-item md-expand v-for="section in book.sections" :key="section.name">
               <span class="md-list-item-text">{{section.name}}</span>
               <md-list slot="md-expand">
                  <md-list-item class="md-inset" v-for="nestedPage in section.pages" :key="nestedPage.path" @click="pushNav(nestedPage.path)">{{nestedPage.name}}</md-list-item>
               </md-list>
            </md-list-item>
            <md-list-item v-for="page in book.pages" :key="page.path" @click="pushNav(page.path)">{{page.name}}</md-list-item>
         </md-list>
      </md-app-drawer>
      <md-app-content md-scrollbar>
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
  (primary: #448aff, accent: #ff6600, background: #ffffff)
);
@import "~vue-material/dist/theme/all";
@import "fonts/system-fonts.css";
@import "fonts/book-fonts.css";
.md-app {
  height: 100vh;
}
.md-content {
  overflow: auto;
}
.drawer-logo {
  padding: 10px;
}
#page {
  @import "typography.scss";
  @import "book.scss";
}
</style>
