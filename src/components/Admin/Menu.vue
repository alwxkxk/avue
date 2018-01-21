<template>
  <el-menu router @select="handleSelect">
    <!-- 渲染菜单 -->
    <template v-for="(value, key) in mune" v-if="typeof value === 'string'">
      <el-menu-item :index="value">
        <span slot="title">
          <i class="el-icon-caret-right"></i>{{ key }}
        </span>
      </el-menu-item>
    </template>
    <!-- 将对象渲染成子菜单 只支持嵌套一层-->
    <template v-else>
      <el-submenu :index="key">
        <span slot="title">
          <i class="el-icon-menu"></i>{{ key }}
        </span>
        <el-menu-item v-for="(subvalue, subkey) in value" :index="subvalue" :key="subkey">
          <span slot="title">
            <i class="el-icon-caret-right"></i>{{ subkey }}
          </span> 
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
  import user from '@/config/user-menu.js'
  import administrator from '@/config/administrator-menu.js'
  export default {
    name: 'Menu',
    props: ['group'],
    data () {
      return {
        mune: this.group === 'administrator' ? administrator : user
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(this.group)
        console.log(key, keyPath)
      }
    }
  }
</script>