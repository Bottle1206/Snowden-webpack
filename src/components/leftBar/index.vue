<template>
  <div class="left-bar">
    <div class="title">
      <i class="logo"></i>
      <span>Vue-SW</span>
    </div>
    <el-menu
      :default-active="$route.path"
      :default-openeds="['1']"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <ac-icon icon="appstore-fill" :size="16"/>
          <span>配置中心</span>
        </template>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/activity">活动</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="stylus">
  GRAY = #001529
  .left-bar
    position relative
    width 200px
    height 100vh
    box-shadow 1px 0px 1px rgba(20,20,20,.1)
    z-index 2
    .title
      font-size 18px
      font-weight 600
      color #409eff // #409eff
      padding 0 18px
      line-height 53px
      margin-bottom 5px
      box-shadow 0 1px 9px -3px rgba(0,0,0,.2)
      .logo
        vertical-align middle
        display inline-block
        height 24px
        width 24px
        margin-right 3px
        background url('../../assets/logo.png') no-repeat center
        background-size contain
      span
        vertical-align middle
     .el-menu
      border-right none
      width 200px
      .el-submenu .el-menu-item
        border-right 2px solid #FFF
        min-width 180px
        &.is-active
          border-color #409EFF
          background-color rgba(0,121,255,.08)
    .el-submenu__title
      color #505153
      span
        margin-left 3px
    .el-menu-item
      color #505153

  /* important */   
  @media screen and (max-width: 1367px)
    .left-bar
      width 185px
      .el-menu
         width 185px
      .el-submenu__title
        height 50px
        line-height 50px
      .el-submenu .el-menu-item
        height 45px
        line-height 45px
        
</style>