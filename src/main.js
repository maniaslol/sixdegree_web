import 'bootstrap';
import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router/routerIndex'

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)


//時戳轉換套件


import moment from 'moment'

Vue.use(require('vue-moment'));

Vue.prototype.moment = moment;


// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.component('loading', Loading)


Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

// fb登入初始化-----------------------------------------------------

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//------------------------------------------------------------------

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')