<template>
  <div>
    <el-row class="avue-row">
      <el-col :span="6">
        <div class="avatar">
            <img :src="avatarUrl">
            </img>
            <el-upload
            class="uploadButton"
            :action="action"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            >
            <el-button  size="small">上传图片</el-button>
          </el-upload>
        </div>
        <el-col :span="16" :offset="1">
          <el-input v-model="user.nickName">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
          </el-input>
        </el-col>

      </el-col>
      <el-col :span="18" class="p10px">
        <el-col :span="2">用户名：</el-col>
        <el-col :span="8">
          <el-input disabled v-model="user.name"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round>修改密码</el-button>
        </el-col>
      </el-col>
      <el-col :span="18" class="p10px">
        <el-col :span="2">邮箱：</el-col>
        <el-col :span="8">
          <el-input v-model="user.email"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round>验证邮箱</el-button>
        </el-col>
      </el-col>
      <el-col :span="18" class="p10px">
        <el-col :span="2">手机：</el-col>
        <el-col :span="8">
          <el-input v-model="user.phone"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round>验证手机</el-button>
        </el-col>
      </el-col>
      <el-col :span="18">
        <el-col :span="4">
          <el-button round>绑定QQ</el-button>
        </el-col>
        <el-col :span="4">
          <el-button round>绑定微信</el-button>
        </el-col>
      </el-col>
    </el-row>
  </div>

</template>
<style scoped>
  .avatar img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    margin: 1em;
    border:0.3px solid rgb(34, 34, 34);
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
        action: url.postAvatar
      }
    },
    created () {
      const user = JSON.parse(window.localStorage.getItem('user')) || {}
      // console.log('created', user)
      this.user.name = user.name
      this.user.email = user.email
      this.user.phone = user.phone
      this.user.nickName = user.nick_name
      this.avatarUrl = user.avatar ? url.root + url.getImage + '/' + user.avatar : logo
  },
    methods: {
      handleAvatarSuccess (response, file) {
        console.log(response, file)
        this.avatarUrl = url.root + url.getImage + '/' + response.data.imageName
      }
    }
  }
</script>