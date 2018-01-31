<template>
  <div class="h100">
    <el-row>
      <el-col :span="16" :offset="1">
        <p>总文件数：{{fileTotalNumber}}</p>
        <p>已使用空间大小：{{fileTotalSize}} KB</p>
      </el-col>
      <el-col :span="7">
        <el-upload class="upload-button" action="api/file" :show-file-list="false" :on-success="handleUploadSuccess">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">文件限制大小：不超过200MB</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-table class="file-list-table h80" :data="fileList" border height="80%">
      <el-table-column align="center" prop="file_name" label="文件名">
      </el-table-column>
      <el-table-column align="center" prop="size" label="文件大小/KB">
      </el-table-column>
      <el-table-column align="center" prop="create_time" label="上传时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.row,scope.$index)" size="small" type="danger">删除</el-button>
          <el-button @click="handledownload(scope.row,scope.$index)" size="small" type="primary">下载</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>



<script>
  import request from '@/assets/request.js'
  import {url} from '@/config/config.js'
  export default {
    name: 'File',
    data () {
      return {
        fileTotalNumber: 0,
        fileTotalSize: 0,
        fileList: []
      }
    },
    watch: {
      fileList: function (value) {
        this.fileTotalNumber = value.length
        this.fileTotalSize = value.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.size
        }, value[0].size)
      }
    },
    methods: {
      handleUploadSuccess (response, file) {
        if (response.error_code === 0) {
          this.$message.success('成功上传文件')
          this.fileList.push(response.data)
        } else {
          this.$message.error('上传文件失败')
        }
      },
      handleDelete (row, index) {
        // console.log(row)
        request.deleteFile(row.uuid)
          .then(res => {
            if (res.data.error_code === 0) {
              this.$message.success('成功删除文件')
              this.fileList.splice(index, 1)
            } else {
              this.$message.error(res.data.data)
            }
          })
          .catch(err => { this.$message.error(err) })
      },
      handledownload (row, index) {
        // 打开新窗口下载文件
        window.open(url.downloadFile.replace(/:uuid/, row.uuid))
      }
    },
    created () {
      request.fileList()
        .then(res => {
          console.log(res)
          this.fileList = res.data.data
        })
        .catch(err => {
          console.log(err)
          this.$message.error('网络或服务器问题')
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .upload-button {
    margin: 1em;
  }
</style>