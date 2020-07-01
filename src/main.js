import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'//https://cdn.materialdesignicons.com/5.0.45/
Vue.config.productionTip = false
import Vue2Filters from "vue2-filters";
import { imageUrl } from "@/services/constants";
Vue.use(Vue2Filters);

import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.filter("imageUrl", function(image) {
  return `${imageUrl}/${image}?timestamp=${Date.now()}`;
});

