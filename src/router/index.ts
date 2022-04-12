import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/index.vue";
import About from "../views/About.vue";
import Skill from "../views/skill/index.vue";
import Project from "../views/project/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/skill",
    name: "skill",
    component: Skill,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
