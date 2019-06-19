import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import VueDateFns from "vue-date-fns";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import moment from 'moment';

Vue.prototype.moment = moment


Vue.use(BootstrapVue);

import Footer from './components/footer.vue';

Vue.component('app-footer', Footer);

Vue.use(VueDateFns);

 Vue.use(Vuex)



Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

export const store = new Vuex.Store({
  state: {
    city: ''
  },
  mutations: {
    changeCity (state, payload) {
      // console.log(payload);
      state.city = payload.newCity
    }
  },
  getters: 
  {
    city: state => state.city 
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



