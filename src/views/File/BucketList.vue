<style scoped>
.logo {
  display: block;
  margin: auto;
  width: 200px;
  height: 200px;
}
.content {
  padding: 14px 0;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.el-dropdown {
  float: right;
  color: #409eff;
  cursor: pointer;
}
.el-card {
  margin-bottom: 20px;
}
</style>

<template>
  <el-row :gutter="20">
    <el-col v-for="(item, index) in list" :span="6" :key="index">
      <router-link :to="/file/ + item">
        <div class="card-box">
          <el-card class="card" shadow="hover">
            <img src="../../assets/logo.png" class="logo" />
            <div class="content">
              <span class="title">{{ item }}</span>
              <!--
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                    <span class="button">
                      操作
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>查看</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              -->
            </div>
          </el-card>
        </div>
      </router-link>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      currentDate: new Date().toLocaleDateString()
    };
  }
};
</script>
