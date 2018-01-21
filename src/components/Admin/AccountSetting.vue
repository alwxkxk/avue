<template>
  <div>
    <el-row class="avue-row">
      <el-col :span="6">
        <div class="avatar">
          <img :src="avatarUrl">
          </img>
          <el-upload class="uploadButton" :action="action" :show-file-list="false" :on-success="handleAvatarSuccess">
            <el-button size="small">上传图片</el-button>
          </el-upload>
        </div>
        <!-- 昵称栏 -->
        <el-col :span="16" :offset="1">
          <el-input v-model="user.nickName">
            <i class="el-icon-edit el-input__icon" slot="suffix" @click="changeNickName"></i>
          </el-input>
        </el-col>

      </el-col>
      <el-col :span="18" class="p10px">
        <el-col :span="2">用户名：</el-col>
        <el-col :span="8">
          <el-input disabled v-model="user.name"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round @click="changePasswordFormVisible=true">修改密码</el-button>
        </el-col>
      </el-col>
      <el-col :span="18" class="p10px">
        <el-col :span="2">邮箱：</el-col>
        <el-col :span="8">
          <el-input v-model="user.email"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round @click="setEmail">验证邮箱</el-button>
        </el-col>
      </el-col>
      <el-col :span="18" class="p10px">
        <el-col :span="2">手机：</el-col>
        <el-col :span="8">
          <el-input v-model="user.phone"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round disabled>验证手机</el-button>
        </el-col>
      </el-col>
      <el-col :span="18">
        <el-col :span="4">
          <el-button round disabled>绑定QQ</el-button>
        </el-col>
        <el-col :span="4">
          <el-button round disabled>绑定微信</el-button>
        </el-col>
      </el-col>
    </el-row>
    <!-- 修改密码对话窗 start -->
    <el-dialog title="修改密码" :visible="changePasswordFormVisible" @close="changePasswordFormVisible=false" width="30%">
      <el-form :model="changePasswordForm" label-width="80px">
        <el-form-item label="旧密码">
          <el-input type="password" v-model="changePasswordForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input type="password" v-model="changePasswordForm.newPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="重输密码">
          <el-input type="password" v-model="changePasswordForm.newPasswordAgain" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changePasswordFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changePasswordComfirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改密码对话窗 end -->
  </div>
</template>
<style scoped>
  .avatar img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    margin: 1em;
    border: 0.3px solid rgb(34, 34, 34);
  }

  .avatar:hover .uploadButton {
    display: block;
  }

  .avatar .uploadButton {
    color: black;
    position: absolute;
    top: 8em;
    left: 3.5em;
    opacity: 0.9;
    display: none;

  }

  .avue-row {
    line-height: 40px;
    margin: 10px 2px;
  }
</style>

<script>
  import logo from '@/assets/logo.png'
  import { url } from '@/config/config.js'
  import bus from '@/assets/bus.js'
  import request from '@/assets/request.js'
  export default {
    name: 'AccountSetting',
    data () {
      return {
        avatarUrl: '',
        user: {
          name: '',
          email: '',
          phone: '',
          nickName: '',
          avatar: ''
        },
        action: url.postAvatar,
        changePasswordFormVisible: false,
        changePasswordForm: {
          password: '',
          newPassword: '',
          newPasswordAgain: ''
        }
      }
    },
    created () {
      const user = JSON.parse(window.localStorage.getItem('user')) || {}
      // console.log('created', user)
      this.user.name = user.name
      this.user.email = user.email
      this.user.phone = user.phone
      this.user.nickName = user.nick_name
      this.avatarUrl = user.avatar ? url.getImage + '/' + user.avatar : logo
    },
    methods: {
      handleAvatarSuccess (response, file) {
        console.log(response, file)
        this.avatarUrl = url.getImage + '/' + response.data.imageName
        bus.$emit('changeAvatar', this.avatarUrl)
        bus.$emit('chageUserInfo', 'avatar', response.data.imageName)
      },
      changePasswordComfirm () {
        console.log(this.changePasswordForm)
        const password = this.changePasswordForm.password
        const newPassword = this.changePasswordForm.newPassword
        const newPasswordAgain = this.changePasswordForm.newPasswordAgain
        if (newPassword !== newPasswordAgain) {
          return this.$message.error('两次密码不一致')
        }
        request.changePassword(password, newPassword)
        .then(res => {
          if (res.data.error_code === 0) {
            this.$message.success('修改密码成功，请重新登陆。')
            this.registerFormVisible = false
            this.$router.replace('/')
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch(err => {
          this.$message.error('网络或服务器问题')
          console.log(err)
        })
      },
      setEmail () {
        this.$prompt('请输入账号密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'})
        .then(({ value }) => {
          request.setEmail(value, this.user.email)
          .then(res => {
            if (res.data.error_code === 0) {
              this.$message.success('已发送验证邮件')
            } else {
              this.$message.error(res.data.message)
            }
          })
          .catch(err => {
            this.$message.error(err)
          })
        })
        .catch(err => {
          console.log(err)
          this.$message.info('取消输入')
        })
      },
      changeNickName () {
        console.log(this.user.nickName)
        request.changeNickName(this.user.nickName)
        .then(res => {
          if (res.data.error_code === 0) {
            this.$message.success('成功修改昵称')
            bus.$emit('chageUserInfo', 'nick_name', this.user.nickName)
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch(err => {
          this.$message.error(err)
        })
      }
    }
  }
</script>