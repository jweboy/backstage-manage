<style scoped>
.menu {
  height: 100vh;
}
.title {
  margin-left: 5px;
}
</style>
<template>
  <menu class="menu" width="auto" theme="dark" active-name="file">
    <menuitem
      v-for="item in menu"
      :name="item.key"
      :to="item.link"
      :key="item.key"
    >
      <Icon :type="item.icon" /> <span class="title">{{ item.title }}</span>
    </menuitem>
  </menu>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "附件管理",
          key: "file",
          link: "/file",
          icon: "md-archive"
        },
        {
          title: "测试管理",
          key: "test",
          link: "/test",
          icon: "md-archive"
        }
      ]
    };
  }
};
</script>
