<template>
  <div>
    <v-app-bar color="blue-grey lighten-3" dark clipped-right app>
      <v-toolbar-title>Vuetify Google Autocomplete - Page 1</v-toolbar-title>
      <v-btn @click="navigatePreviousPage()" icon><v-icon>mdi-chevron-left</v-icon></v-btn>
      <v-btn @click="navigateNextPage()" icon><v-icon>mdi-chevron-right</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-tooltip left></v-tooltip>
      <v-btn :href="docsLink" icon><v-icon>mdi-chrome-reader-mode</v-icon></v-btn>
      <v-btn :href="githubLink" icon><v-icon>fa-github</v-icon></v-btn>
      <v-btn :href="npmLink" icon>
        <img :src="npmIcon" class="icon icons8-NPM" width="40" height="40">
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-text>
                A page without VGA.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer color="blue-grey lighten-3" class="white--text" app>
      <span>Vuetify Google Autocomplete</span>
      <v-spacer></v-spacer>
      <span></span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    githubLink: 'https://github.com/MadimetjaShika/vuetify-google-autocomplete',
    npmLink: 'https://www.npmjs.com/package/vuetify-google-autocomplete',
    docsLink: 'https://madimetjashika.github.io/vuetify-google-autocomplete/docs/',
    npmIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA6ElEQVRoQ+2Yaw7CIBCEl+vo/Y+i16kxMVETmgGGLW3y9S/dgXkshZa4+FMuvv6AwGoHcQAHTAWIkCmgXY4DtoQmAA6YAtrlOGBLaAKUR8RmYiwth8BS+SPiz4Hb1pamZ/n2fmbNnji/80Pg9A7U4qIiNKvmHSGFJSOkAGoOzKqBQIsCOPDZK/f6SsUxpQdq+/dI47ckAAKzvgNTIjRyrlFNPILZU2OfRiHQI3fl3aErZc8l6B65f8AhoBJwSgfUoo8cH4rQkQtUc0FAKZQ9jgPZCit8HFAKZY/jQLbCCh8HlELZ45d34AVLqehFzhuaFgAAAABJRU5ErkJggg==',
  }),
  computed: {},
  methods: {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
