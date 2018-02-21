<template>
  <div id="app">
    <header>
        <nav>    
            <router-link v-for="page in pages" :key="page.name" v-bind:to="page.name">{{page.name}}</router-link>
        </nav>
        <h1 class="logo">BookShelf</h1>
    </header>
    <main>
      <img src="./assets/logo.png" alt="BookShelf">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import pages from "./pagedata";

export default {
  name: "app",
  data() {
    return {
      pages: []
    };
  },
  created() {
    this.pages = pages.pages;
  },
  components: {}
};
</script>

<style>
body {
  margin: 3em;
  background-color: rgb(26, 11, 44);
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #7e7d81;
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
}
</style>
