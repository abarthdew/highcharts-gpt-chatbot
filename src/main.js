import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import VueGtag from 'vue-gtag-next';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// variable declaration
const app = createApp(App);

// highchart & markdown global use
import VueHighcharts from 'vue3-highcharts';
import VueMarkdownIt from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css';

// vuex
import store from './store'

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

app
  .use(router)
  .use(pinia)
  .use(vuetify)
  .use(VueGtag, { property: { id: 'G-D07ELLDNWH' } })
  .component('VueHighcharts', VueHighcharts)
  .component('VueMarkdownIt', VueMarkdownIt)
  .use(store)
  .mount('#app');
