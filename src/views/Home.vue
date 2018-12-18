<style scoped>
.layout-main {
  padding: 80px 24px 24px 24px;
  height: calc(100vh - 64px);
}
.layout-header {
  position: fixed;
  z-index: 100;
  width: calc(100% - 200px);
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-nav {
  width: 210px;
  margin: 0 auto;
  margin-right: 0;
}
  .element-menu{
    display: flex;
    justify-content: flex-end;
  }
  .el-main{
    height: calc(100vh - 60px);
    overflow-y: scroll;
  }
</style>
<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :router="true">
          <el-menu-item v-for="item in menu" :index="item.key">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <LeftMenu />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { LeftMenu } from "@/components";
export default {
  data() {
    return {
      menu: [
        // {
        //   name: "个人中心",
        //   icon: "md-person",
        //   key: "user"
        // },
        {
          name: "退出登录",
          icon: "ios-navigate",
          key: "/login",
        }
      ]
    };
  },
  components: { LeftMenu }
};
</script>
