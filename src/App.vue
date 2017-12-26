<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // name: 'app'
}
</script>

<style lang="scss">
@import './style/common.scss';
html,body,#app {height: 100%;margin:0;padding:0;}
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  background-image: url("./assets/background.jpg");
}

</style>
