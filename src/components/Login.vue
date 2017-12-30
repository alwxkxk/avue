<template>
  <el-row type="flex" justify="center" align="middle" class="h100">
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
          <el-button @click="registerFormVisible=true">注册</el-button>
        </div>
        <el-button class="forget-password-string" type="text" @click="forgetPassword">忘记密码？</el-button>
      </el-form>
    </el-col>
    <!-- 用户注册对话弹窗 -->
    <el-dialog title="账号注册" :visible="registerFormVisible" @close="registerFormVisible=false" width="30%">
      <el-form :model="registerForm" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="registerForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input  type="password" v-model="registerForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="重输密码">
          <el-input  type="password" v-model="registerForm.passwordAgain" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="registerComfirm">确 定</el-button>
      </div>
    </el-dialog>
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
        },
        registerFormVisible: false,
        registerForm: {
          name: '',
          password: '',
          passwordAgain: ''
        }
      }
    },
    methods: {
      login () {
        const name = this.loginForm.name
        const password = this.loginForm.password
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
              return Promise.reject('网络或服务器问题：' + res.status)
            }
            if (res.data.error_code === 0) {
              this.$message.success('登陆成功')
              window.localStorage.setItem('user', JSON.stringify(res.data.data))// 将用户信息保存到本地
              this.$router.push({ path: '/admin' }) // 编程式导航至控制页面
            } else {
              this.$message.error(res.data.message)
            }
          })
          .catch((err) => {
            this.$message.error('网络或服务器问题')
            window.localStorage.removeItem('user')// 登陆失败会清除本地记录
            console.log(err)
          })
      },
      registerComfirm () {
        console.log(this.registerForm)
        const name = this.registerForm.name
        const password = this.registerForm.password
        if (password !== this.registerForm.passwordAgain) {
          return this.$message.error('两次密码不一致')
        }
        axios({
          method: 'post',
          url: url.register,
          data: {
            name: name,
            password: password
          }
        }).then((res) => {
          if (res.status !== 200) {
            this.$message.error('网络或服务器问题：' + res.status)
            return
          }
          if (res.data.error_code === 0) {
            this.$message.success('注册成功，请点击登陆。')
            this.registerFormVisible = false
          } else {
            this.$message.error(res.data.message)
          }
        }).catch((err) => {
          this.$message.error('网络或服务器问题')
          console.log(err)
        })
      },
      forgetPassword () {
        this.$prompt('请输入用户邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          axios({
            method: 'delete',
            url: url.forgetPassword + value
          })
        .then(res => {
          if (res.status !== 200) {
            this.$message.error('网络或服务器问题：' + res.status)
            return
          }
          if (res.data.error_code === 0) {
            this.$message.success('请查收邮件')
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch(err => {
          this.$message.error(err)
        })
        }).catch(() => {
          this.$message.info('取消输入')
        })
      }
    }
  }
</script>

<style scoped>
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

  .forget-password-string{
    font-size: 0.75em;
    right: -80%;
    position: relative;
  }
</style>