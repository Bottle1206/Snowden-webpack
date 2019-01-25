<template>
  <i :class="`ac-icon icon iconfont icon-${icon}`" :style="{'font-size': size + 'px'}"></i>
</template>

<script>
  export default {
    name: 'AcIcon',
    props: {
      icon: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 12
      }
    }
  }
</script>