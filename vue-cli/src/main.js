import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)

axios.defaults.baseURL = "https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1";
axios.defaults.headers.common['Authorization'] = '563492ad6f9170000100000133f51eab663d4ca49c54c50c4e39bc80';


Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");