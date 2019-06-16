import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueDateFns from "vue-date-fns";
 
Vue.use(VueDateFns);


Vue.use(Vuex)


Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");