import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    name: "posts",
    path: "/posts",
    components: {
      default: Posts,
      footer: PostsFooter,
      navigation: Navigation,
    },
    beforeEnter: () => {
      console.log("router based before each");
    },
    children: [
      {
        path: "",
        component: NoPost,
      },
    ],
  },

  {
    path: "/createpost",
  },

  { path: "/:NotFound(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
});

router.beforeEach((to, _1, next) => {
  console.log("Global before each");
  if (to.path === "/createpost") {
    next();
  } else {
    next();
  }
});

router.afterEach(() => {
  console.log("Router after each");
});

export default router;
