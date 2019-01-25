<template>
  <div class="login-page">
    <div class="login-container">
      <div class="top-title">
        <img src="../../assets/logo.png" class="center-img">
      </div>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        status-icon
        hide-required-asterisk
        label-width="64px"
        label-position="top"
        @keyup.enter.native="login"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"/>
        </el-form-item>
        <a class="tip-info" style="color: #409EFF">请使用域账号登录</a>
        <el-button type="primary" class="btn-absolute" @click="login">登 录</el-button>
      </el-form>
      <div class="head-info">
        <h4>Snowden-Webpack</h4>
        <p class="info">vue-SPA模板，支持snowden-cli<b style="color: #ffc000; font-size: 18px">。</b></p>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
  import MyFooter from './footer.vue';
  export default {
    data() {
      return {
        form: {
          userName: '',
          password: ''
        },
        rules: {
          userName: [{
            required: true,
            message: '请输入用户名'
          }],
          password: [{
            required: true,
            message: '请输入密码'
          }]
        }
      }
    },
    methods: {
      login() {

      }
    },
    components: {
      MyFooter
    }
  }
</script>

<style lang="stylus">
  BLUE = #409EFF // #545c64
  .login-page
    background-color #F4F6F8
    height 100%
    .login-container
      background-color #FFF
      position absolute
      left 48%
      top 40%
      transform translate(-50%, -50%)
      width 700px
      padding 64px 198px 22px 88px
      .top-title
        height 53px
        width 112px
        padding 10px 4px
        position absolute
        bottom 100%
        left 0
        .center-img
          height 35px
          width 35px
      .el-form-item__label
        line-height 21px
        font-size 14px
        padding-bottom 5px
        color #999
        font-weight 600
      .el-input__inner
        border-color #FFF
        border-radius 0
        background-color #F4F6F8
        height 48px
        line-height 48px
      .tip-info
        display block
        margin-bottom 30px
      .btn-absolute
        position absolute
        bottom -19px
        left 96px
        width 180px
        border-radius 20px
        box-shadow 2px 8px 4px -4px rgba(41,137,235,.3), 2px 4px 4px 0 rgba(41,137,235,.14), 2px 4px 12px 0 rgba(41,137,235,.12)
        padding 11px 20px          
      .head-info
        height 256px
        width 245px
        position absolute
        top 38px
        right -200px
        background-color BLUE
        padding 50px 28px
        box-shadow 4px 4px 4px rgba(0,0,0,.1), -2px -2px 4px rgba(0,0,0,.05), 8px 10px 6px rgba(41, 137,235,.2), -4px -6px 6px rgba(41, 137,235,.1)
        font-family Mcriosoft Yahei
        color #FFF
        h4
          font-size 25px
          margin 0
        .info 
          line-height 1.2
          margin 10px 0 0 0
          font-size 13px
          color rgba(255, 255, 255, .9) 
        
</style>