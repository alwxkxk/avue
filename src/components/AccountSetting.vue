<template>
  <div>
    <el-row class="avue-row">
      <el-col :span="6">
        <div class="avatar">
          <img :src="avatarUrl"></img>
          <p>上传图片</p>
        </div>

        <el-col :span="16" :offset="1">
          <el-input v-model="nickName">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
          </el-input>
        </el-col>

      </el-col>
      <el-col :span="18" class="pd10">
        <el-col :span="2">用户名：</el-col>
        <el-col :span="8">
          <el-input disabled v-model="name"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round>修改密码</el-button>
        </el-col>
      </el-col>
      <el-col :span="18" class="pd10">
        <el-col :span="2">邮箱：</el-col>
        <el-col :span="8">
          <el-input v-model="email"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round>验证邮箱</el-button>
        </el-col>
      </el-col>
      <el-col :span="18" class="pd10">
        <el-col :span="2">手机：</el-col>
        <el-col :span="8">
          <el-input v-model="phone"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button round>验证手机</el-button>
        </el-col>
      </el-col>
      <el-col :span="18">
        <el-col :span="4">
          <el-button round>绑定QQ</el-button>
        </el-col>
        <el-col :span="4">
          <el-button round>绑定微信</el-button>
        </el-col>
      </el-col>
    </el-row>
  </div>

</template>
<style scoped>
  .avatar img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    margin: 1em;
  }
  .avatar:hover p{display: block;}
  .avatar p {
    color: white;
    position: absolute;
    top: 4em;
    left: 4em;
    background-color: black;
    opacity: 0.4;
    display: none;

  }

  .avue-row {
    line-height: 40px;
    margin: 10px 2px;
  }

  .pd10 {
    padding: 10px;
  }

  .margin10 {
    margin: 10px;
  }
</style>

<script>
  export default {
    name: 'AccountSetting',
    data () {
      return {
        avatarUrl: 'http://img3.duitang.com/uploads/item/201602/27/20160227192212_SmNWM.jpeg',
        name: 'alwxkxk',
        email: '',
        phone: '',
        nickName: 'alwxkxk'
      }
    }
  }
</script>