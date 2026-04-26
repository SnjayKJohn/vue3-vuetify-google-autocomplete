// main.js or main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

import VueClipboards from "vue-clipboards";
import VuetifyGoogleAutocomplete from "../src/index"; // or from '../lib/index'

const vuetify = createVuetify({
  // Add your Vuetify 3 options here
});

// Global mixins in Vue 3 using app.config.globalProperties
const addGlobalNavigationMethods = (app) => {
  app.config.globalProperties.navigatePreviousPage = function () {
    switch (this.$route.path) {
      case "/":
        this.$router.push("/page-3");
        break;
      case "/page-2":
        this.$router.push("/page-1");
        break;
      case "/page-3":
        this.$router.push("/page-2");
        break;
      default:
        this.$router.push("/");
    }
  };

  app.config.globalProperties.navigateNextPage = function () {
    switch (this.$route.path) {
      case "/":
        this.$router.push("/page-1");
        break;
      case "/page-1":
        this.$router.push("/page-2");
        break;
      case "/page-2":
        this.$router.push("/page-3");
        break;
      default:
        this.$router.push("/");
    }
  };
};

// Create and mount app
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueClipboards);
app.use(VuetifyGoogleAutocomplete, {
  apiKey: "AIzaSyCGqUR7l5lUulm3d0Dwo7seYi9Fi03LeXI",
});

addGlobalNavigationMethods(app);

app.mount("#app");
