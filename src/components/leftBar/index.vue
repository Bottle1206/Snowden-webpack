<template>
  <div class="left-bar dark-menu">
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
          <ac-icon icon="appstore-fill" :size="15"/><span>配置中心</span>
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
    z-index 1
    .title
      font-size 18px
      font-weight 500
      color #FFF // #409eff
      padding 0 20px
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

    .el-menu
      border none
      width 200px
      .el-menu-item, .el-submenu__title
        height 48px
        font-size 13px
        color #505153
      .el-submenu
        line-height 48px
      .el-submenu__title
        line-height 47px
        .ac-icon
          margin-right 5px

  .dark-menu
    background-color #001529
    .el-menu
      background-color #001529
      .el-menu-item, .el-submenu__title
        color rgba(255,255,255,.7)
        &:hover
          color #FFF
          background-color transparent
          i
            color #FFF
        &.is-active
          background-color #1890ff
          color #FFF
        i
          color rgba(255,255,255,.7)
      .el-submenu .el-menu
        background-color: #000c17;
        box-shadow: inset 0 2px 8px rgba(0,0,0,.45)

  /* important */   
  @media screen and (max-width: 1367px)
    .left-bar .el-menu
      .el-submenu__title
        height 45px
        line-height 44px
      .el-submenu .el-menu-item
        height 45px
        line-height 45px
        
</style>