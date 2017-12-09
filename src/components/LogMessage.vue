<template>
    <el-table class="log-message-table"
      :data="logList"
      border="true"
      max-height="450"
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
    text-align: center;
  }
</style>
<script>
import axios from 'axios'
import { url } from '../config/config.js'

export default {
  name: 'LogMessage',
  data () {
    return {
      logList: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: url.log,
      withCredentials: true // axios请求携带 cookie
    })
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