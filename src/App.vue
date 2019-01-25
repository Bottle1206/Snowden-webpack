<template>
  <div id="app" :class="{'no-mac-os': !isMac}">
    <left-bar v-if="!isLogin" />
    <div :class="containerClass">
      <bread-crumb v-if="!isLogin"/>
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftBar from './components/leftBar';
import BreadCrumb from './components/breadCrumb';
import { getCookie } from './util/cookie';
export default {
  name: 'App',
  data() {
    return {
      isMac: true
    }
  },
  computed: {
    path() {
      return this.$route.path;
    },
    isLogin() {
      return this.path === '/login'
    },
    containerClass() {
      return this.path === '/login' ? 'full-container' : 'container';
    }
  },
  mounted() {
    this.isMac = /macintosh|mac os x/i.test(navigator.userAgent); 
  },
  components: {
    LeftBar,
    BreadCrumb
  }
}
</script>

<style lang="stylus">
  #app
    position relative
    height 100vh
    .left-bar
      position absolute
      left 0
      top 0
    >.container
      position relative
      height 100%
      overflow auto
      margin-left 200px
      background-color #F0F2F5
      padding 20px
      
    >.full-container
      position relative
      height 100%
      
  /* important */
  @media screen and (max-width: 1367px)
    #app >.container
      margin-left 185px
</style>
