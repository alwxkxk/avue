<template>
  <div class="right">
    <div>系统控制</div>
    <div>
      <el-dropdown @command="handleCommand">
        <el-button class="avatar" :style="backgroundImage">
            <el-badge is-dot class="avatar-badge"></el-badge>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="message">消息<el-badge is-do class="item-badge"></el-badge></el-dropdown-item>
          <el-dropdown-item command="accountSetting">账号设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
  .right {
    display: flex;
    justify-content: space-between;
  }

  .avatar-badge {
    position: relative;
    top: -15px;
    right: -15px;
  }

  .item-badge {
    position: relative;
    right: -10px;
  }

  .avatar {
    background-image: url("../assets/logo.png");
    background-repeat:no-repeat;
    background-size: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>

<script>
import axios from 'axios'
import { url } from '../config/config.js'
export default {
  name: 'Header',
  data () {
    return {
      backgroundImage: 'background-image: url("../assets/logo.png");'
    }
  },
  created () {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user.avatar) {
      this.backgroundImage = 'background-image:url("' + url.root + url.getImage + '/' + user.avatar + '");'
    }
  },
  methods: {
    handleCommand (command) {
    // this.$message('click on item ' + command)
      if (command === 'logout') {
        axios({
          method: 'delete',
          url: url.logout,
          withCredentials: true // axios请求携带 cookie
        })
        .then((res) => {
          if (res.status !== 200) {
            this.$message.error('网络或服务器问题：' + res.status)
            return
          }
          if (res.data.error_code === 0) {
            this.$message('成功退出')
            this.$router.replace({path: '/'})
          } else {
            this.$message(res.data.message)
          }
        })
        .catch((err) => {
          this.$message.error('网络或服务器问题')
          console.log(err)
        })
      } else if (command === 'accountSetting') {
        this.$router.push({path: '/admin/accountSetting'})
      }
    }
  }
}
</script>