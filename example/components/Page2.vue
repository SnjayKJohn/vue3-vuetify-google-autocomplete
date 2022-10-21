<template>
  <div>
    <v-navigation-drawer v-model="drawerRight" width="550" fixed right clipped app>
      <v-card flat>
        <v-card-title><h3>Props</h3></v-card-title>
        <v-card-text>
          <v-text-field label="id" v-model="id"></v-text-field>
          <v-text-field label="append-icon" v-model="appendIcon"></v-text-field>
          <v-text-field label="append-outer-icon" v-model="appendOuterIcon"></v-text-field>

          <v-text-field label="background-color" v-model="backgroundColor"></v-text-field>
          <v-text-field label="clear-icon" v-model="clearIcon"></v-text-field>
          <v-text-field label="color" v-model="color"></v-text-field>
          <v-text-field label="counter" v-model="counter"></v-text-field>
          <v-text-field label="prepend-icon" v-model="prependIcon"></v-text-field>
          <v-text-field label="classname" v-model="classname"></v-text-field>
          <v-text-field label="Label Text" v-model="labelText"></v-text-field>
          <v-text-field label="Placeholder Text" v-model="placeholderText"></v-text-field>

          <v-switch label="autofocus" v-model="autofocus"></v-switch>
          <v-switch label="Clearable" v-model="clearable" color="secondary" hide-details></v-switch>
          <v-switch label="Dark" v-model="dark" color="secondary" hide-details></v-switch>
          <v-switch label="Dense" v-model="dense" color="secondary" hide-details></v-switch>
          <v-switch label="Error" v-model="error" color="secondary" hide-details></v-switch>
          <v-switch label="Disabled" v-model="disabled" color="secondary" hide-details></v-switch>
          <v-switch label="Filled" v-model="filled" color="secondary" hide-details></v-switch>
          <v-switch label="Flat" v-model="flat" color="secondary" hide-details></v-switch>
          <v-switch label="Outlined" v-model="outlined" color="secondary" hide-details></v-switch>
          <v-switch label="Reverse" v-model="reverse" color="secondary" hide-details></v-switch>
          <v-switch
            label="Enable Geolocation"
            v-model="enableGeolocation"
            color="secondary"
            hide-details
          ></v-switch>
          <v-switch
            label="Use place name"
            v-model="placeName"
            color="secondary"
            hide-details
          ></v-switch>
          <v-switch
            label="Required"
            v-model="required"
            color="secondary"
            hide-details
          ></v-switch>
          <v-select
            label="Types"
            :items="typesOptions"
            v-model="types"
            hint="Choose types"
            persistent-hint
          ></v-select>
          <v-select label="Countries"
            :items="countryOptions"
            item-text="Name"
            item-value="Code"
            v-model="country"
            multiple
            :menu-props="{maxHeight:'400'}"
            hint="Choose countries to limit search to"
            :rules="[countryValidationRules]"
            persistent-hint
          ></v-select>
          <v-text-field label="Callback Function" v-model="callbackFunction"></v-text-field>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar color="blue-grey lighten-3" dark clipped-right app>
      <v-toolbar-title>Vuetify Google Autocomplete - Page 2</v-toolbar-title>
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
            <v-card :dark="dark">
              <v-card-text>
                <vuetify-google-autocomplete
                  :id="id"
                  :append-icon="appendIcon"
                  :append-outer-icon="appendOuterIcon"
                  :autofocus="autofocus"
                  :backgroundColor="backgroundColor"
                  :clearIcon="clearIcon"
                  :color="color"
                  :counter="counter"
                  :classname="classname"
                  :clearable="clearable"
                  :country="country"
                  :dark="dark"
                  :dense="dense"
                  :error="error"
                  :disabled="disabled"
                  :enable-geolocation="enableGeolocation"
                  :filled="filled"
                  :flat="flat"
                  :label="labelText"
                  :outlined="outlined"
                  :placeholder="placeholderText"
                  :placeName="placeName"
                  :prepend-icon="prependIcon"
                  :required="required"
                  :reverse="reverse"
                  :types="types"
                  v-on:placechanged="getAddressData"
                  v-on:no-results-found="noResultsFound"
                >
                </vuetify-google-autocomplete>
                <v-layout row>
                  <v-flex xs2>Result Object:</v-flex>
                  <v-flex xs10>
                    <div class="message-body">{{ address }}</div>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card flat height="335px" class="text-xs-left">
              <v-toolbar flat dense class="blue-grey lighten-3">
                <v-toolbar-title
                  class="body-2"
                  style="color: white;"
                >Generated HTML</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn slot="activator"
                    v-clipboard="outputHtml"
                    @success="handleCodeCopySuccess('HTML')"
                    @error="handleCodeCopyError('HTML')"
                    icon
                    >
                    <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                    <span>Copy HTML</span>
                  </template>
                  <span>Left tooltip</span>
                </v-tooltip>
              </v-toolbar>
              <v-container>
                <pre><code style="width: 100%; overflow: auto;">{{ outputHtml }}</code></pre>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card flat class="text-xs-left">
              <v-toolbar flat dense class="blue-grey lighten-3">
                <v-toolbar-title class="body-2" style="color: white;">Generated JS</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      slot="activator"
                      v-clipboard="outputJs"
                      @success="handleCodeCopySuccess('JS')"
                      @error="handleCodeCopyError('JS')"
                      icon
                    >
                    <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                    <span>Copy JS</span>
                  </template>
                </v-tooltip>
              </v-toolbar>
              <v-container>
                <pre><code style="width: 100%; overflow: auto;">{{ outputJsData }}</code></pre>
                <br>
                <pre><code style="width: 100%; overflow: auto;">{{ outputJsCallback }}</code></pre>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        :timeout="4000"
        :success="snackbar.context === 'success'"
        :info="snackbar.context === 'info'"
        :warning="snackbar.context === 'warning'"
        :error="snackbar.context === 'error'"
        :primary="snackbar.context === 'primary'"
        :secondary="snackbar.context === 'secondary'"
        v-model="snackbar.visible"
        >{{ snackbar.text }}<v-btn dark text @click.native="snackbar.visible = false">Close</v-btn>
      </v-snackbar>
    </v-main>
    <v-footer color="blue-grey lighten-3" class="white--text" app>
      <span>Vuetify Google Autocomplete</span>
      <v-spacer></v-spacer>
      <span></span>
    </v-footer>
  </div>
</template>

<script>
import countryCodeList from '../countrycode.json';

export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    autocompleteModel: 'Some Default Location...',
    vueGoogleAutocompleteLink: 'https://github.com/olefirenko/vue-google-autocomplete',
    snackbar: {
      text: '',
      visible: '',
      context: '',
    },
    errorAlert: {
      message: '',
      visible: false,
    },
    address: {},
    appendIcon: 'mdi-magnify-plus-outline',
    appendOuterIcon: 'mdi-magnify-plus-outline',
    autofocus: false,
    clearIcon: '',
    color: '',
    counter: '',
    backgroundColor: '',
    callbackFunction: 'getAddressData',
    classname: '',
    clearable: true,
    country: [],
    countryOptions: countryCodeList,
    dark: false,
    dense: false,
    error: false,
    disabled: false,
    enableGeolocation: false,
    filled: false,
    flat: false,
    id: 'map',
    prependIcon: '',
    labelText: 'Search Address',
    outlined: false,
    placeholderText: '',
    placeName: false,
    required: true,
    reverse: false,
    types: 'address',
    typesOptions: [
      'geocode',
      'address',
      'establishment',
      '(regions)',
      '(cities)',
    ],
    drawerRight: true,
    left: null,
    githubLink: 'https://github.com/MadimetjaShika/vuetify-google-autocomplete',
    npmLink: 'https://www.npmjs.com/package/vuetify-google-autocomplete',
    docsLink: 'https://madimetjashika.github.io/vuetify-google-autocomplete/docs/',
    npmIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA6ElEQVRoQ+2Yaw7CIBCEl+vo/Y+i16kxMVETmgGGLW3y9S/dgXkshZa4+FMuvv6AwGoHcQAHTAWIkCmgXY4DtoQmAA6YAtrlOGBLaAKUR8RmYiwth8BS+SPiz4Hb1pamZ/n2fmbNnji/80Pg9A7U4qIiNKvmHSGFJSOkAGoOzKqBQIsCOPDZK/f6SsUxpQdq+/dI47ckAAKzvgNTIjRyrlFNPILZU2OfRiHQI3fl3aErZc8l6B65f8AhoBJwSgfUoo8cH4rQkQtUc0FAKZQ9jgPZCit8HFAKZY/jQLbCCh8HlELZ45d34AVLqehFzhuaFgAAAABJRU5ErkJggg==',
  }),
  computed: {
    countryValidationRules: function anon() {
      if (this.country.length > 5) {
        const message = 'Please select a max of 5 countries.';
        this.setErrorAlert(true, true, message);
        return message;
      }

      this.setErrorAlert(false, false, '');
      return true;
    },

    outputHtml() {
      return `<vuetify-google-autocomplete
  :id="${this.id}"
  :append-icon="${this.appendIcon}"
  :append-outer-icon="${this.appendOuterIcon}"
  :autofocus="${this.autofocus}"
  :clearIcon="${this.clearIcon}"
  :color="${this.color}"
  :counter="${this.counter}"
  :backgroundColor="${this.backgroundColor}"
  :clearable="${this.clearable}"
  :classname="${this.classname}"
  :country="[${this.country}]"
  :dark="${this.dark}"
  :dense="${this.dense}"
  :disabled="${this.disabled}"
  :error="${this.error}"
  :enable-geolocation="${this.enableGeolocation}"
  :filled="${this.filled}"
  :flat="${this.flat}"
  :label="${this.labelText}"
  :outlined="${this.outlined}"
  :placeholder="${this.placeholderText}"
  :placeName="${this.placeName}"
  :prepend-icon="${this.prependIcon}"
  :required="${this.required}"
  :reverse="${this.reverse}"
  :types="['${this.types}']"
  v-on:placechanged="${this.callbackFunction}">
</vuetify-google-autocomplete>`;
    },

    outputJsData() {
      return `data() {
  return {
    address: ${JSON.stringify(this.address)},
    appendIcon: '${this.appendIcon}',
    appendOuterIcon: '${this.appendOuterIcon}',
    autofocus: '${this.autofocus}',
    color: '${this.color}',
    counter: '${this.counter}',
    backgroundColor: '${this.backgroundColor}',
    classname: '${this.classname}',
    clearable: '${this.clearable}',
    country: [${this.country}],
    dark: ${this.dark},
    dense: ${this.dense},
    disabled: ${this.disabled},
    enableGeolocation: ${this.enableGeolocation},
    error: ${this.error},
    filled: ${this.filled},
    flat: ${this.flat},
    id: '${this.id}',
    labelText: '${this.labelText}',
    outlined: '${this.outlined}',
    prependIcon: '${this.prependIcon}',
    placeholderText: '${this.placeholderText}',
    placeName: ${this.placeName},
    required: '${this.required}',
    reverse: '${this.reverse}',
    types: ['${this.types}'],

  }
}`;
    },

    outputJsCallback() {
      return `methods: {
  ${this.callbackFunction}: function (addressData, placeResultData) {
    this.address = addressData;
  }
}`;
    },

    outputJs() {
      return `${this.outputJsData},
${this.outputJsCallback}`;
    },
  },
  methods: {
    /**
    * Callback method when the location is found.
    *
    * @param {Object} addressData Data of the found location
    * @param {Object} placeResultData PlaceResult object
    * @param {String} id Input container ID
    */
    getAddressData(addressData) {
      this.address = addressData;
    },

    /**
    * Handles the successful clipboard copy event.
    */
    handleCodeCopySuccess(code) {
      this.snackbar.text = `${code} code copied to clipboard!`;
      this.snackbar.context = 'success';
      this.snackbar.visible = true;
    },

    /**
    * Handles the error clipboard copy event.
    */
    handleCodeCopyError(code) {
      this.snackbar.text = `Could not copy ${code} code to clipboard!`;
      this.snackbar.context = 'error';
      this.snackbar.visible = true;
    },

    /**
    * Handler when no results are found.
    */
    noResultsFound(output) {
      this.snackbar.text = `no results found: ${JSON.stringify(output)}`;
      this.snackbar.context = 'error';
      this.snackbar.visible = true;
    },

    setErrorAlert(disabled, visible, message) {
      this.disabled = disabled;
      this.errorAlert.visible = visible;
      this.errorAlert.message = message;
    },
  },
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
