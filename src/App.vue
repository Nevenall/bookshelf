<template>
    <div id="app">
        <div class="page-container md-layout-column">
            <md-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Sufficient Reason</span>
            </md-toolbar>
            <md-drawer :md-active.sync="showNavigation">
                <md-toolbar md-elevation="0">
                    <img src="./assets/logo.png" alt="BookShelf">
                    <span class="md-title">BookShelf</span>
                </md-toolbar>
                <md-list>
                    <md-list-item v-for="page in pages" :key="page.name" @click="pushNav(page.name)">
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
import pages from "./pagedata";

export default {
  name: "app",
  data() {
    return {
      pages: [],
      showNavigation: false
    };
  },
  created() {
    this.pages = pages.pages;
    console.log(pages);
  },
  components: {},
  methods: {
    pushNav(path) {
      this.showNavigation = false;
      this.$router.push(path);
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
