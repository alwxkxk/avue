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
          <div slot="tip">文件限制大小：不超过200MB</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row class="file-row h80">
      <el-col :span="4" v-for="(item, index) in fileList" :key="item.file_name" class="file-col">
        <div class="file">
          <img :src="fileImagePath" class="file-image" @click="handledownload(item)">
          <i class="el-icon-delete file-delete-icon" @click="handleDelete(item,index)"></i>
          <p>{{item.file_name}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>



<script>
  import fileImagePath from '@/assets/file.png'
  import request from '@/assets/request.js'
  import { url } from '@/config/config.js'
  export default {
    name: 'File',
    data () {
      return {
        fileImagePath: fileImagePath,
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
      handleDelete (file, index) {
        // console.log('handleDelete', file, index)
        request.deleteFile(file.uuid)
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
      handledownload (file) {
        // 打开新窗口下载文件
        // console.log('handledownload', file)
        window.open(url.downloadFile.replace(/:uuid/, file.uuid))
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

  .file-row {
    background-color: white;
  }

  .file-col :hover .file-delete-icon {
    display: inline-block;

  }

  .file-col :hover {
    cursor: pointer;
  }

  .file {
    text-align: center;
  }

  .file-delete-icon {
    display: none;
  }

  .file-image {
    width: 4em;
  }
</style>