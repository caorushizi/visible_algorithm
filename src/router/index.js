import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home")
  },
  {
    path: "/01-start-with-canvas",
    name: "01",
    component: () =>
      import(
        /* webpackChunkName: "01-start-with-canvas" */
        "@/views/01-start-with-canvas"
      )
  },
  {
    path: "/02-divide-the-money",
    name: "02",
    component: () =>
      import(
        /* webpackChunkName: "02-divide-the-money" */
        "@/views/02-divide-the-money"
      )
  },
  {
    path: "/03-monte-carlo-method",
    name: "03",
    component: () =>
      import(
        /* webpackChunkName: "03-monte-carlo-method" */
        "@/views/03-monte-carlo-method"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
