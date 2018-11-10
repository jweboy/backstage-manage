<style scoped>
.layout-main {
  padding: 0 24px 24px;
  margin-top: 80px;
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
</style>
<template>
  <div class="home">
    <Layout>
      <Sider> <LeftMenu /> </Sider>
      <Layout class="main">
        <Header class="layout-header" :menu="menu">
          <Menu mode="horizontal" active-name="user">
            <div class="layout-nav">
              <MenuItem v-for="item in menu" name="item.key" :key="item.key">
                <Icon type="item.icon" /> <span>{{ item.name }}</span>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Main class="layout-main">
          <Breadcrumb class="breadcrumb">
            <BreadcrumbItem>home</BreadcrumbItem>
            <BreadcrumbItem>home2</BreadcrumbItem>
          </Breadcrumb>
          <router-view />
        </Main>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { LeftMenu } from "@/components";
export default {
  data() {
    return {
      menu: [
        {
          name: "个人中心",
          icon: "md-person",
          key: "user"
        },
        {
          name: "退出登录",
          icon: "ios-navigate",
          key: "loginOut"
        }
      ]
    };
  },
  components: { LeftMenu }
};
</script>
