<template>
    <v-app dark>
        <v-navigation-drawer :clipped="clipped" v-model="drawer" disable-route-watcher disable-resize-watcher app>
            <v-card>
                <v-card-media class="text-white" height="200px" :src="require('./assets/logo-horizontal.png')">
                    <v-container fill-height fluid>
                        <v-layout fill-height align-end>
                            <v-flex xs12 align-end flexbox>
                                <v-list-tile @click="pushNav('./')">
                                    <!-- <v-list-tile-content>
                                        <span class="headline">{{book.title}}</span>
                                    </v-list-tile-content> -->
                                </v-list-tile>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
            </v-card>
            <v-list>
                <!-- <v-list-tile avatar @click.stop="pushNav('./')">
                    <v-list-tile-avatar>
                        <img src=./assets/logo.png alt=BookShelf />
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{book.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile> -->
                <v-list-group value="true" v-for="section in book.sections" :key="section.name">
                    <v-list-tile slot="activator">
                        <v-list-tile-title v-text="section.name"></v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile value="true" v-for="nestedPage in section.pages" :key="nestedPage.path" @click="pushNav(nestedPage.path)">
                        <v-list-tile-content>
                            <v-list-tile-title v-text="nestedPage.name"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile value="true" v-for="page in book.pages" :key="page.path" @click="pushNav(page.path)">
                    <v-list-tile-content>
                        <v-list-tile-title v-text="page.name"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                {{title}}
                <v-icon>chevron_right</v-icon>{{book.title}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container>
                <div id="page">
                    <router-view></router-view>
                </div>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Book from "@/book";

export default {
  name: "App",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
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
@import "fonts/system-fonts.css";
@import "fonts/book-fonts.css";
html {
  overflow-y: auto;
}
#page {
  @import "typography.scss";
  @import "book.scss";
}
</style>
