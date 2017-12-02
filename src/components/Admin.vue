<template>
  <el-container>
    <el-header>后台管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#fff"
          text-color="#000" active-text-color="#ffd04b">
          <el-submenu index="1">
            
            <span slot="title"><i class="el-icon-menu"></i>系统管理</span>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">用户组管理</span>
                </el-menu-item>
            </el-submenu>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
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

</script>