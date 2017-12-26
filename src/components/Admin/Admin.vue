<template>
  <el-container class="h100">
    <el-header class="header"><avue-header></avue-header></el-header>
    <el-container>
      <el-aside  class="aside" width="200px">
        <el-menu default-active="overview" class="el-menu-vertical-demo" @select="handleSelect">
          <el-menu-item index="overview">
            <span slot="title">
              <i class="el-icon-menu"></i>纵览</span>
          </el-menu-item>
          <el-submenu index="1">
            <span slot="title">
              <i class="el-icon-menu"></i>导航一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项3</el-menu-item>
            <el-menu-item index="1-5">选项3</el-menu-item>
          </el-submenu>

          <el-menu-item index="setting">
            <span slot="title">
              <i class="el-icon-setting"></i>系统设置</span>
          </el-menu-item>
          <el-menu-item index="logMessage">
            <span slot="title">
              <i class="el-icon-setting"></i>日志管理</span>
          </el-menu-item>
          <el-menu-item index="device">
            <span slot="title">
              <i class="el-icon-setting"></i>设备管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="main"><router-view></router-view></el-main>
        <el-footer class="footer" height="20px"></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
  .header {
    background-color: #409EFF;
    color: white;
    text-align: left;
    line-height: 60px;
  }

  .footer {
    background-color: #409EFF;
    color: black;
    text-align: center;
    height: 20px;
  }

  .aside {
    background-color: white;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .main {
    background-color: #E9EEF3;
    color: #333;
    padding: 2px;
    height: 100%;
  }
</style>

<script>
  import Header from '@/components/Admin/Header'
  import LogMessage from '@/components/Admin/LogMessage'

  export default {
    methods: {
      handleSelect (key) {
        console.log('select menu:', key)
        if (key === 'overview') {
          this.$router.push({path: '/admin/overview'}) // 编程式导航至控制页面
        } else if (key === 'logMessage') {
          this.$router.push({path: '/admin/logMessage'}) // 编程式导航至控制页面
        }
      }
    },
    components: {
      'avue-header': Header,
      'avue-log-message': LogMessage
    }

  }
</script>