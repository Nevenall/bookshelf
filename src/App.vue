<template>
    <div id="app">
        <m-theme :customStyle="material">
        <m-typography>
            <m-toolbar ref="toolbar" fixed waterfall>
                <m-toolbar-row shrink-center>
                    <m-toolbar-icon slot="start" icon="menu" menu-icon @click="toggleDrawer()" />
                </m-toolbar-row>
            </m-toolbar>
            <m-drawer-temporary ref="drawer">
                <m-drawer-toolbar-spacer class="mdc-theme--primary-bg" slot="toolbarSpacer" />
                <m-drawer-header class="mdc-theme--primary" slot="header">
                    <m-typo-headline>
                        Pages
                    </m-typo-headline>
                </m-drawer-header>
                <m-drawer-content>
                    <m-list>
                        <m-list-item v-for="page in pages" :key="page.name" @click="openRoute(page.name)">
                            {{page.name}}
                        </m-list-item>
                    </m-list>
                </m-drawer-content>
            </m-drawer-temporary>
            <div class="demo-content">
                <m-toolbar-fixed-adjust>
                    <main>
                        <m-layout-grid>
                            <keep-alive>
                                <router-view />
                            </keep-alive>
                        </m-layout-grid>
                    </main>
                </m-toolbar-fixed-adjust>
            </div>

            <!-- <header>
            <nav>
               <router-link v-for="page in pages" :key="page.name" v-bind:to="page.name">{{page.name}}</router-link>
            </nav>
            <h1 class="logo">BookShelf</h1>
         </header>
         <main>
            <img src="./assets/logo.png" alt="BookShelf">
            <router-view></router-view>
         </main> -->
        </m-typography>
        </m-theme>
    </div>
</template>

<script>
import pages from "./pagedata";

export default {
  name: "app",
  data() {
    return {
      pages: [],
      initialOpen: false,
       material: {
            '--mdc-theme-primary-light': '#9162e4',
            '--mdc-theme-primary':  '#5e35b1',
            '--mdc-theme-primary-dark': '#280680',
            '--mdc-theme-secondary': '#ff5722',
            '--mdc-theme-secondary-light': '#ff8a50',
            '--mdc-theme-secondary-dark': '#c41c00',
            '--mdc-theme-background': '#ffffff',
            '--mdc-theme-text-primary-on-primary': '#ffffff',
            '--mdc-theme-text-secondary-on-secondary': '#000000'
        }
    };
  },
  created() {
    this.pages = pages.pages;
  },
  components: {},
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggle();
    },
    openRoute(route) {
      this.$router.push(route);
      this.toggleDrawer();
    }
  }
};
</script>

<style>
@import url("https://cdnjs.com/libraries/normalize");
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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
</style>
