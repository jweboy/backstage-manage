import Vue from "vue";
import iView from "iview";

Vue.component("Button", iView.Button);
Vue.component("Layout", iView.Layout);
Vue.component("Sider", iView.Sider);
Vue.component("Header", iView.Header);
Vue.component("Menu", iView.Menu);
Vue.component("MenuItem", iView.MenuItem);
Vue.component("Icon", iView.Icon);
Vue.component("Breadcrumb", iView.Breadcrumb);
Vue.component("BreadcrumbItem", iView.BreadcrumbItem);
Vue.component("Upload", iView.Upload);
Vue.component("Row", iView.Row);
Vue.component("Card", iView.Card);
Vue.component("Tooltip", iView.Tooltip);

// 添加别名解决和HTML标签重名的问题(col会被识别成void元素)
// https://github.com/vuejs/eslint-plugin-vue/issues/604
Vue.component("ICol", iView.Col);

// 将部分常用的组件挂载到Vue对象上
Vue.prototype.$Loading = iView.LoadingBar;
Vue.prototype.$Notice = iView.Notice;
Vue.prototype.$Modal = iView.Modal;


import "iview/dist/styles/iview.css";
