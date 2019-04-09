<template>
  <div class="activity">
    <bread-crumb :routes="routes"/>
    <div class="big-card-container">

    </div>
  </div>
</template>

<script>
  import BreadCrumb from '@/components/breadCrumb';
  export default {
    data() {
      return {
        routes: [{
          name: '配置中心',
          icon: 'appstore-fill'
        }, '活动']
      }
    },
    components: {
      BreadCrumb
    }
  }
</script>