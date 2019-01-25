<template>
  <div class="my-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><ac-icon icon="appstore-fill" :size="14"/> 配置中心</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
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
    computed: {
      userName() {
        return 'Snowden'
      }
    },
    methods: {
      logout() {
        this.$confirm('确认退出当前账户？', '提示', {
          type: 'warning'
        }).then(() => {
          // 清除登录信息
          
        })
      }
    }
  }
</script>

<style lang="stylus">
  .my-breadcrumb
    height 34px
    padding-bottom 20px
    // padding 12px 16px
    color rgba(0,0,0,.45)
    .el-breadcrumb
      float left
    .iconfont
      color rgba(0,0,0,.35)
    .user-info
      line-height 1
      font-size 13px
      float right
      .ac-icon
        color #409eff

</style>