<template>
  <div class="h100">
    <el-button disabled>批量上传账号</el-button>
    <el-button disabled>手动添加账号</el-button>
    <el-button type="danger">删除账号</el-button>
    <el-table class="log-message-table" :data="userList" border height="100%">
      <el-table-column align="center" prop="name" label="账号名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="nick_name" label="昵称">
      </el-table-column>
      <el-table-column align="center" prop="create_time" label="注册时间">
      </el-table-column>
      <el-table-column align="center" prop="last_time" label="最后登陆时间">
      </el-table-column>
    </el-table>
  </div>

</template>

<style scoped>
  .log-message-table {
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>
<script>
  import request from '@/assets/request.js'
  export default {
    name: 'LogMessage',
    data () {
      return {
        userList: []
      }
    },
    created () {
      request.getUserList()
        .then(res => {
          console.log(res)
          this.userList = res.data.data
        })
        .catch(err => {
          console.log(err)
          this.$message.error('网络或服务器问题')
        })
    },

    methods: {

    }
  }
</script>