import Vue from "vue";
import Router from "vue-router";
import DashboardMain from "./app/dashboard/components/DashboardMain";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardMain
    }
  ]
});
