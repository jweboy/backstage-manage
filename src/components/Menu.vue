<style scoped>
.menu {
  height: 100vh;
}
.title {
  margin-left: 5px;
}
.el-menu {
  height: calc(100vh - 60px);
}
</style>
<template>
  <el-menu default-active="/file" :router="true">
    <el-menu-item v-for="item in menu" :index="item.key" :key="item.key">
      <i :class="item.icon"></i> <span class="title">{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "图库管理",
          key: "/file",
          icon: "el-icon-picture"
        },
        {
          name: "系统设置",
          key: "/test",
          icon: "el-icon-setting"
        }
      ]
    };
  }
};
</script>
