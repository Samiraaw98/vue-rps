import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from 'vuetify'
 import 'vuetify/dist/vuetify.min.css';
 Vue.use(vuetify);

Vue.config.productionTip = false

new Vue({
  router,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
