import Vue from "vue";
import iView from "iview";

Vue.component("Button", iView.Button);
Vue.component("Layout", iView.Layout);
Vue.component("Sider", iView.Sider);
Vue.component("Header", iView.Header);
Vue.component("Menu", iView.Menu);
Vue.component("MenuItem", iView.MenuItem);
Vue.component("Icon", iView.Icon);
// Vue.component("Upload", iView.Upload);
Vue.component("Breadcrumb", iView.Breadcrumb);
Vue.component("BreadcrumbItem", iView.BreadcrumbItem);
Vue.component("Upload", iView.Upload);
Vue.component("Row", iView.Row);

// col会被识别成void元素 通过重命名解决
// https://github.com/vuejs/eslint-plugin-vue/issues/604
Vue.component("ICol", iView.Col);
Vue.component("Card", iView.Card);

import "iview/dist/styles/iview.css";
