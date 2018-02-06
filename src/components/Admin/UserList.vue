<template>
  <div class="h100">
    <el-row>
      <el-col :span="5">
          <el-input v-model="input" placeholder="搜索或添加账号"></el-input>
      </el-col>
      <el-col :span="6" :offset="1">
          <el-button @click="addUser">添加用户</el-button>
      </el-col>
    </el-row>
    
    <el-table class="log-message-table" :data="userListTable" border height="100%"  >
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
        input: '',
        userList: [],
        userListTable: []
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
      },
      addUser () {
        let name = this.input
        request.addUser(name)
        .then(res => {
          if (res.data.error_code === 0) {
            this.$message.info(`新增用户${name}，初始密码与账号相同`)
            this.userList.push(res.data.data)
          } else {
            this.$message.error(res.data.data)
          }
        })
      }
    },
    watch: {
      input: function () {
        if (this.input.length !== 0) {
          this.userListTable = this.userList.filter(user => user.name.includes(this.input))
        } else {
          this.userListTable = this.userList
        }
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
          this.userListTable = this.userList
        })
        .catch(err => {
          console.log(err)
          this.$message.error('网络或服务器问题')
        })
    }
  }
</script>