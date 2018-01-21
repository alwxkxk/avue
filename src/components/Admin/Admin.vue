<template>
  <el-container class="h100">
    <el-header class="header"><avue-header></avue-header></el-header>
    <el-container>
      <!-- 导航菜单 -->
      <el-aside class="aside" width="200px">
        <avue-menu :group="group"></avue-menu>
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
  import Menu from '@/components/Admin/Menu'
  import {group} from '@/config/config.js'
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleSelect (key) {
        console.log('select menu:', key)
      }
    },
    computed: {
      group: function () {
        const user = JSON.parse(window.localStorage.getItem('user')) || {}
        // console.log(group[user.group_id])
        return group[user.group_id]
      }
    },
    components: {
      'avue-header': Header,
      'avue-log-message': LogMessage,
      'avue-menu': Menu
    }
  }
</script>