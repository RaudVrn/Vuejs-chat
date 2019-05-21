import Vue from "vue";
import Router from "vue-router";
import DashboardMain from "./app/dashboard/components/DashboardMain";
import ServicesList from "./app/services/components/ServicesList";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardMain,
      children: [
        {
          path: "/services",
          name: "services",
          component: ServicesList
        },
        {
          name: "services-gift",
          path: "/services-gift",
          component: ServicesList
        },
        {
          name: "services-transfer",
          path: "/services-transfer",
          component: ServicesList
        },
        {
          name: "services-education",
          path: "/services-education",
          component: ServicesList
        }
      ]
    }
  ]
});
