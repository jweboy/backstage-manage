import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import Main from './views/Main.vue';
import FileStorage from './views/FileStorage.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/file/storage',
      name: 'file-storage',
      component: FileStorage,
    },
    // {
    //   path: '/file/storage',
    //   name: 'file-storage',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "storage" */ './views/FileStorage.vue'),
    // },
  ],
});

// global loading
router.beforeEach((to, from , next) => {
  iView.LoadingBar.start();
  next();
});
router.afterEach((route) => {
  iView.LoadingBar.finish();
});

export default router;

