import Vue from "vue";
import element from "element-ui";

Vue.use(element.Container);
Vue.use(element.Header);
Vue.use(element.Aside);
Vue.use(element.Main);
Vue.use(element.Menu);
Vue.use(element.MenuItem);
Vue.use(element.Row);
Vue.use(element.Col);
Vue.use(element.Card);
Vue.use(element.Button);
Vue.use(element.Dropdown);
Vue.use(element.DropdownItem);
Vue.use(element.DropdownMenu);
Vue.use(element.Upload);
Vue.use(element.Tooltip);
Vue.use(element.Pagination);
Vue.use(element.Loading);
Vue.use(element.Dialog);
Vue.use(element.Form);
Vue.use(element.FormItem);
Vue.use(element.Input);
Vue.use(element.Radio);
Vue.use(element.RadioGroup);
Vue.use(element.Breadcrumb);
Vue.use(element.BreadcrumbItem);

// 将部分常用的组件挂载到Vue对象上
// Vue.prototype.$Loading = element.Loading;
Vue.prototype.$msgbox = element.MessageBox;
Vue.prototype.$message = element.Message;

// 用于axios请求
export const Loading = element.Loading;
export const Notification = element.Notification;

// 添加别名解决和HTML标签重名的问题(col会被识别成void元素)
// https://github.com/vuejs/eslint-plugin-vue/issues/604
