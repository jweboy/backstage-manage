import Vue from "vue";
import iview from "iview";

Vue.component("Button", iview.Button);
Vue.component("Layout", iview.Layout);
Vue.component("Sider", iview.Sider);
Vue.component("Header", iview.Header);
Vue.component("Menu", iview.Menu);
Vue.component("MenuItem", iview.MenuItem);
Vue.component("Icon", iview.Icon);
// Vue.component("Upload", iview.Upload);
Vue.component("Breadcrumb", iview.Breadcrumb);
Vue.component("BreadcrumbItem", iview.BreadcrumbItem);
Vue.component("Upload", iview.Upload);
Vue.component("Row", iview.Row);

// col会被识别成void元素 通过重命名解决
// https://github.com/vuejs/eslint-plugin-vue/issues/604
Vue.component("ICol", iview.Col);
Vue.component("Card", iview.Card);

import "iview/dist/styles/iview.css";
