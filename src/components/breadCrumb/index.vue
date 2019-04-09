<template>
  <div class="my-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in reRoutes"
        :key="item.name"
        :to="item.path || false"
      ><ac-icon v-if="item.icon" :icon="item.icon" :size="14" /> {{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="user-info">
      <span class="ac-m-r-10">
        <ac-icon icon="user" :size="14"/> {{userName}}
      </span>
      <span class="cursor-pointer" @click="logout">
        <ac-icon icon="export" :size="14"/> 退出
      </span>
    </div>
  </div>
</template>

<script> 
  import { delCookie } from '@/util/cookie.js';
  export default {
    props: {
      routes: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      userName() {
        return this.$store.state.userInfo.userName
      },
      reRoutes() {
        return this.routes.map(item => {
          if (typeof item === 'string') {
            return { name: item }
          }
          return item
        })
      }
    },
    methods: {
      logout() {
        this.$confirm('确认退出当前账户？', '提示', {
          type: 'warning'
        }).then(() => {
          delCookie('ssosessionid')
          // var url = window.location.href;
          // window.location.href = `http://sso.sony.com/login?u=${url}`;
        })
      }
    }
  }
</script>

<style lang="stylus">
  .my-breadcrumb
    height 54px
    padding 20px
    color rgba(0,0,0,.45)
    .el-breadcrumb
      float left
      .el-breadcrumb__separator
        margin 0 7px
    .iconfont
      color rgba(0,0,0,.35)
    .user-info
      line-height 1
      font-size 13px
      float right
      .ac-icon
        color #409eff

</style>