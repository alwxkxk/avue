<template>
  <div class="h100">
    <el-button disabled>批量上传账号</el-button>
    <el-button disabled>手动添加账号</el-button>
    <el-table class="log-message-table" :data="userList" border height="100%">
      <el-table-column align="center" prop="name" label="账号名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="nick_name" label="昵称">
      </el-table-column>
      <el-table-column align="center" prop="create_time" label="注册时间">
      </el-table-column>
      <el-table-column align="center" prop="last_time" label="最后登陆时间">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleDelete(scope.row,scope.$index)" size="small" type="danger">删除用户</el-button>
      </template>
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
  import common from '@/assets/common.js'
  export default {
    name: 'UserList',
    data () {
      return {
        userList: []
      }
    },
    methods: {
      handleDelete (row, index) {
        // console.log(row, index)
        request.deleteUser(row.name)
        .then(res => {
          if (res.data.error_code === 0) {
            this.$message.success('成功删除用户')
            this.userList.splice(index, 1)
          } else {
            this.$message.error(res.data.data)
          }
        })
      }
    },
    created () {
      request.getUserList()
        .then(res => {
          this.userList = res.data.data
          this.userList.forEach(user => {
            // 手动转换为当地时间
            user.create_time = common.convertLocalTime(user.create_time)
            user.last_time = common.convertLocalTime(user.last_time)
          })
          console.log(this.userList)
        })
        .catch(err => {
          console.log(err)
          this.$message.error('网络或服务器问题')
        })
    }
  }
</script>