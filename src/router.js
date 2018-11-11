import Vue from "vue";
import Router from "vue-router";
import iView from 'iview';

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
          path: '/file',
          name: "镜像空间",
          component: () => import(/* webpackChunkName: "bucketList" */ "@/views/File"),
        },
        {
          path: '/file/:id',
          name: "文件列表",
          component: () => import(/* webpackChunkName: "fileList" */ "@/views/File/FileList"),
        },
        {
          path: "test",
          name: "test",
          component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue")
        },
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/Login.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

// LoadingBar
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

export default router;