<template>

  <el-row type="flex" justify="center" align="middle" class="height-100">
    <el-col :span="6" class="login-container">
      <div class="login-title">系统后台</div>
      <el-form id="login-form" :inline="true" :model="loginForm">
        <el-form-item label="用户" class="login-form-item">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="login-form-item">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item  class="login-form-item">
          <el-button class="login-form-btn" type="primary" @click="login">登陆</el-button>
          <el-button class="login-form-btn">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>
<style>
  .login-container {
    border: 1px solid #D8DCE5;
  }

  .login-title {
    background-color: #34495e;
    color: white;
    font-size: 2em;
    text-align: center;
    height: 4em;
    line-height:4em;
    margin-bottom: 1em;
  }

  .login-form-item {
    margin: 10px;
  }

  .login-form-btn {
    margin:0 30px;
  }
</style>

<script>
  export default {
    data() {
      return {
        loginForm: {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$message(this.loginForm.userName + this.loginForm.password)
      }
    }
  }
</script>