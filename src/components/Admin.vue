<template>
  <el-container class="height-100">
    <el-header>后台管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <span slot="title">
              <i class="el-icon-menu"></i>导航一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <span slot="title">
              <i class="el-icon-menu"></i>导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">
              <i class="el-icon-setting"></i>导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>后台管理系统</el-footer>
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
    background-color: #B4BCCC;
    color: black;
    text-align: center;
    line-height: 20px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
  export default {
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>