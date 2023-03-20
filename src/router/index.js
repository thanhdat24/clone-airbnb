import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/ContactView.vue";
import RoomsView from "../views/RoomsView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
   {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/room",
    name: "Room",
    component: RoomsView,
  },
  {
    path: "/room-detail",
    name: "RoomDetail",
    component: RoomDetailView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
