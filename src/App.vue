<template>
  <div id="app">
    <header>
      <a href="#main-menu" 
      class="menu-toggle"
      role="button"
      id="main-menu-toggle"
      aria-expanded="false"
      aria-controls="main-menu"
      aria-label="open main menu">
        <span class="sr-only">open main menu</span>
        <span class="fa fa-bars" aria-hidden="true">Open</span>
      </a>
      <h1 class="logo">BookShelf</h1>
      <nav id="main-menu"
       class="main-menu"
       role="navigation"
       aria-expanded="false"
       aria-label="Main menu">
        <a href="#main-menu-toggle"
          class="menu-close"
          role="button"
          id="main-menu-close"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Close main menu">
          <span class="sr-only">Close main menu</span>
          <span class="fa fa-close" aria-hidden="true">X</span>
        </a>
        <ul>
          <li>
            <router-link v-for="page in pages" :key="page.name" v-bind:to="page.name">{{page.name}}</router-link>
          </li>
        </ul>
      </nav>
      <a href="#main-menu-toggle"
        class="backdrop"
        tabindex="-1"
        aria-hidden="true"
          hidden></a>
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
  }
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

/* header {
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





/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

/* Button styling */
.menu-toggle {
  display: inline-block;
  padding: .75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #333;
}

.menu-toggle:hover,
.menu-toggle:focus {
  color: #c00;
}

/*
 Default styles + Mobile first
 Offscreen menu style
*/
.main-menu {
  position: absolute;
  left: -200px;
  top: 0;
  height: 100%;
  overflow-y: scroll;
  overflow-x: visible;
  transition: left 0.3s ease,
              box-shadow 0.3s ease;
  z-index: 999;
}

.main-menu ul {
  list-style: none;
  margin: 0;
  padding: 2.5em 0 0;
  /* Hide shadow w/ -8px while 'closed' */
  -webkit-box-shadow: -8px 0 8px rgba(0,0,0,.5);
     -moz-box-shadow: -8px 0 8px rgba(0,0,0,.5);
          box-shadow: -8px 0 8px rgba(0,0,0,.5);
  min-height: 100%;
  width: 200px;
  background: #1a1a1a;
}

.main-menu a {
  display: block;
  padding: .75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #383838;
}

.main-menu li:first-child a {
  border-top: 1px solid #383838;
}

.main-menu a:hover,
.main-menu a:focus {
  background: #333;
  text-decoration: underline;
}

.main-menu .menu-close {
  position: absolute;
  right: 0;
  top: 0;
}

/*
 On small devices, allow it to toggle...
*/
/*
 :target for non-JavaScript
 aria-expanded="true/false" will be for JavaScript
*/
.main-menu:target,
.main-menu[aria-expanded="true"] {
  left: 0;
  outline: none;
  -moz-box-shadow: 3px 0 12px rgba(0,0,0,.25);
  -webkit-box-shadow: 3px 0 12px rgba(0,0,0,.25);
  box-shadow: 3px 0 12px rgba(0,0,0,.25);
}

.main-menu:target .menu-close,
.main-menu[aria-expanded="true"] .menu-close {
  z-index: 1001;
}

.main-menu:target ul,
.main-menu[aria-expanded="true"] ul {
  position: relative;
  z-index: 1000;
}

/* 
 We could us `.main-menu:target:after`, but
 it wouldn't be clickable.
*/
.main-menu:target + .backdrop,
.main-menu[aria-expanded="true"] + .backdrop {
  position: absolute;
  display: block;  
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: #000;
  background: rgba(0,0,0,.85);
  cursor: default;
}

@supports (position: fixed) {
  .main-menu,
  .main-menu:target + .backdrop,
  .main-menu[aria-expanded="true"] + .backdrop {
    position: fixed;
  }
}



</style>
