import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Job from "@/views/Job.vue";
import Register from "@/views/Register.vue"
import Test from "@/views/Test_view.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/job",
    name: "job",
    component: Job
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/test",
    name: "test",
    component: Test
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
