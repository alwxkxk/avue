<template>
  <div class="right">
    <div>系统控制</div>
    <div>
      <el-dropdown @command="handleCommand">
        <el-button class="avatar">
            <el-badge is-dot="true" class="avatar-badge"></el-badge>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="message">消息<el-badge is-dot="true" class="item-badge"></el-badge></el-dropdown-item>
          <el-dropdown-item command="setting">账号设置</el-dropdown-item>
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
    background-size: 100%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      handleCommand (command) {
        this.$message('click on item ' + command)
      }
    }
  }
</script>