<template>
  <el-row class="margin-top-2em">
    <el-col :span="6" class="status-box">
      <div>
        <el-progress type="circle" :percentage="mem.percentage" :stroke-width="14"></el-progress>
      </div>
      <div>
        <p>已使用：{{mem.used}} MB</p>
        <p>总内存：{{mem.totol}} MB</p>
      </div>
    </el-col>
    <el-col :span="6" class="status-box">
      <div>
        <el-progress type="circle" :percentage="currentLoad" :stroke-width="14"></el-progress>
      </div>
      <div>
          <p>CPU平均负载 %</p>
      </div>
    </el-col>
    <el-col :span="6" class="status-box" v-for="item in fs" :key="item.fs">
      <div>
        <el-progress type="circle" :percentage="item.use" :stroke-width="14"></el-progress>
      </div>
      <div>
          <p>磁盘 {{item.fs}}</p>
          <p>磁盘总空间：{{item.total}} GB</p>
      </div>
    </el-col>
  </el-row>


</template>



<script>
  import socket from '@/assets/connect.js'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        mem: {
          totol: 0,
          used: 0,
          percentage: 0
        },
        currentLoad: 0,
        fs: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      // 加入systemStatus room
      socket.emit('join systemStatus room')
      // 接收systemStatus
      socket.on('systemStatus', systemStatusJSON => {
        const systemStatus = JSON.parse(systemStatusJSON)
        this.mem = systemStatus.mem
        this.currentLoad = systemStatus.currentLoad
        this.fs = systemStatus.fs
      })
    },
    destroyed () {
      // 离开 systemStatus room
      socket.emit('leave systemStatus room')
    }
  }
</script>


<style scoped>
  .status-box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .margin-top-2em{
    margin-top: 2em;
  }
</style>