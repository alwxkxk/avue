<template>
  <el-container class="height-100">
    <el-header><avue-header></avue-header></el-header>
    <el-container>
      <el-aside width="200px">
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
          <el-menu-item index="log">
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
        <el-main><router-view></router-view></el-main>
        <el-footer height="20px"></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #409EFF;
    color: white;
    text-align: left;
    line-height: 60px;
  }

  .el-footer {
    background-color: #409EFF;
    color: black;
    text-align: center;
    height: 20px;
  }

  .el-aside {
    background-color: white;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
  import Header from '@/components/Header'
  export default {
    methods: {

      handleSelect (key) {
        console.log('select menu:', key)
        if (key === 'overview') {
          console.log('in to:')
          this.$router.push({path: '/admin/overview'}) // 编程式导航至控制页面
        }
      }
    },
    components: {
      'avue-header': Header
    }

  }
</script>