<template>
  <div>系统控制
    <el-badge :value="12" class="item">
      <el-button type="primary" icon="el-icon-bell"></el-button>
    </el-badge>
  </div>
</template>

<style>
  .item {
  margin-top: 2px;
  margin-right: 2px;
}
</style>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>