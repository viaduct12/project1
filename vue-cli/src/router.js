import Vue from "vue";
import Router from "vue-router";
import home from "./pages/home.vue";
import photo from "./pages/photo.vue";
import prices from "./pages/prices.vue";
import things from "./pages/things.vue";
import weather from "./pages/weather.vue";
import contact from "./pages/contact.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/photo",
      name: "photo",
      component: photo
    },
    {
      path: "/prices",
      name: "prices",
      component: prices
    },
    {
      path: "/things",
      name: "things",
      component: things
    },
    {
      path: "/weather",
      name: "weather",
      component: weather
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    }

  ]
});