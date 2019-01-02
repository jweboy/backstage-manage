<style scoped>
.layout-background {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url("../assets/background.png");
  background-size: cover;
}
.layout-form {
  background-color: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
}
.submit-btn {
  float: right;
}
</style>

<template>
  <div class="layout-background">
    <div class="layout-form">
      <el-form ref="loginForm" :model="loginForm" label-width="70px">
        <el-form-item label="用户名" prop="username" :rules="rules.username">
          <el-input
            type="text"
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="rules.password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span>默认用户： admin 默认密码：123</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: {
          required: true,
          message: "请输入用户名",
          trgger: "blur"
        },
        password: {
          required: true,
          message: "请输入密码",
          trgger: "blur"
        }
      },
      disabled: false
    };
  },
  methods: {
    handleSubmit() {
      // TODO: 增加接口
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          return false;
        }
        if (this.loginForm.username !== "admin") {
          this.$message({
            type: "error",
            message: "当前只支持默认用户admin"
          });
        } else if (this.loginForm.password !== "123") {
          this.$message({
            type: "error",
            message: "admin默认密码为123"
          });
        } else {
          this.$message({
            type: "success",
            message: "登录成功"
          });

          // TODO: router处理
          setTimeout(() => {
            location.href = "/";
          }, 1000);
        }
      });
    }
  }
};
</script>
