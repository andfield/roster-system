import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login"
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
}) ;


export default router;
