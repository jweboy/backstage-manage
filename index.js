import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      redirect: "/file", // 默认展示文件列表页面
      children: [
        {
          path: "file",
          name: "file",
          component: () =>
            import(/* webpackChunkName: "bucket" */ "@/views/Bucket.vue")
        },
        {
          path: "test",
          name: "test",
          component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue")
        }
      ]
    }
    // {
    //   path: '/file/storage',
    //   name: 'file-storage',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "storage" */ './views/FileStorage.vue'),
    // },
  ]
});

export default router;
