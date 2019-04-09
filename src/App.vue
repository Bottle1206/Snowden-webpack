<template>
  <div id="app" :class="{'no-mac-os': !isMac}">
    <left-bar v-if="!isFull" />
    <div :class="containerClass">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftBar from './components/leftBar';

export default {
  name: 'App',
  data() {
    return {
      isMac: true
    }
  },
  computed: {
    isFull() {
      return this.$route.path === '/login';
    },
    containerClass() {
      return this.isFull ? 'full-container' : 'body-container';
    }
  },
  mounted() {
    this.isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  },
  components: {
    LeftBar
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
    >.body-container
      position relative
      height 100%
      overflow auto
      margin-left 200px
      background-color #F0F2F5
    >.full-container
      position relative
      height 100%
      
  /* important */
  // @media screen and (max-width: 1367px)
  //   #app >.container
  //     margin-left 185px
</style>
