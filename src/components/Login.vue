<template>
  <el-row type="flex" justify="center" align="middle" class="height-100">
    <el-col :span="7" class="login-container">
      <div class="login-title">系统后台</div>
      <el-form id="login-form" :model="loginForm">
        <el-form-item label="用户" class="login-form-item">
          <el-col :span="20">
            <el-input v-model="loginForm.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" class="login-form-item">
          <el-col :span="20">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-col>
        </el-form-item>
        <div class="login-form-btn">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button @click="register">注册</el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>

</template>


<script>
  import axios from 'axios'
  import { url } from '../config/config.js'
  export default {
    data () {
      return {
        loginForm: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        let name = this.loginForm.name
        let password = this.loginForm.password
        axios({
          method: 'post',
          url: url.login,
          data: {
            name: name,
            password: password
          }
        })
        .then((res) => {
          if (res.status !== 200) {
            this.$message.error('网络或服务器问题：' + res.status)
            return
          }
          if (res.data.error_code === 0) {
            this.$message('登陆成功')
            this.$router.push({path: '/admin'}) // 编程式导航至控制页面
          } else {
            this.$message(res.data.message)
          }
        })
        .catch((err) => {
          this.$message.error('网络或服务器问题')
          console.log(err)
        })
      },
      register () {
        this.$message.error('注册功能仍在开发中')
      }
    }
  }
</script>

<style>
  .login-container {
    border: 1px solid #D8DCE5;
    background-color: white;
  }

  .login-title {
    background-color: #34495e;
    color: white;
    font-size: 2em;
    text-align: center;
    height: 4em;
    line-height: 4em;
    margin-bottom: 1em;
  }

  .login-form-item {
    margin: 20px 10px;
  }

  .login-form-btn {
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
</style>