<template>
   <div id="app">
      <div class="page-container md-layout-column">
         <md-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="showNavigation = true">
               <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">BookShelf&nbsp;>&nbsp;{{book.title}}</span>
         </md-toolbar>
         <md-drawer :md-active.sync="showNavigation">
            <md-toolbar md-elevation="0">
               <img src="./assets/logo.png" alt="BookShelf">
            </md-toolbar>
            <md-list>
               <md-list-item @click="pushNav('./')">
                  <h3>{{book.title}}</h3>
               </md-list-item>
               <md-list-item md-expand v-for="section in book.sections" :key="section.name">
                  <span class="md-list-item-text">{{section.name}}</span>
                  <md-list slot="md-expand">
                     <md-list-item class="md-inset" v-for="nestedPage in section.pages" :key="nestedPage.path" @click="pushNav(nestedPage.path)">
                        <span class="md-list-item-text">{{nestedPage.name}}</span>
                     </md-list-item>
                  </md-list>
               </md-list-item>
               <md-list-item v-for="page in book.pages" :key="page.path" @click="pushNav(page.path)">
                  <span class="md-list-item-text">{{page.name}}</span>
               </md-list-item>
            </md-list>
         </md-drawer>
         <md-content>
            <router-view></router-view>
         </md-content>
      </div>
   </div>
</template>

<script>
import Book from "@/book";

export default {
  name: "app",
  data() {
    return {
      book: {},
      showNavigation: false
    };
  },
  created() {
    this.book = Book;
  },
  components: {},
  methods: {
    pushNav(path) {
      // note - a little hack to correct pathing issues.
      var p = path.substring(1);
      this.showNavigation = false;
      this.$router.push(p);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.md-content {
  padding: 5em;
  text-align: justify;
}

/* 
body {
  margin: 3em;
  background-color: rgb(26, 11, 44);
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #7e7d81;
}

.md-button {
  background-color: #7e7d81;
}

main {
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
} */
</style>
