<template>
    <el-table class="log-message-table"
      :data="logList"
      border
      height="100%"
      >
      <el-table-column
      align="center"
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
      align="center"
        prop="action"
        label="动作"
      >
      </el-table-column>
    </el-table>
  </template>

<style scoped>
  .log-message-table{
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
      logList: []
    }
  },
  created () {
    request.log()
    .then(res => {
      console.log(res)
      this.logList = res.data.data
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