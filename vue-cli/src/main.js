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
    city: '',
    flightInfo: {
      originCode: '',
      destinationCode: '',
      dateCode: ''
    }
  },
  mutations: {
    changeCity (state, payload) {
      state.city = payload.newCity
    },
    changeFlightInfo(state, payload){
      state.flightInfo = payload.newFlightInfo  
    }
<<<<<<< HEAD

=======
    
>>>>>>> 20a097a8b71b1639483a773c46690f9213843cc1
  },
  getters: 
  {
    city: state => state.city,
    flightInfo: state => state.flightInfo,
  }
})


new Vue({
  router,
  store,
  moment,
  render: h => h(App)
}).$mount("#app");



