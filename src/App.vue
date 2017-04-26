<template>
  <div id="app">
    <heads></heads>
    <router-view class="app-view"></router-view>
  </div>
</template>
<script>
  import Heads from 'components/common/heads.vue'

  export default {
    data() {
      return {
        
      }
    },
    components: {
      Heads
    }
  }
</script>
<style lang="less">
  @import './less/variable.less';
  html,
  body {
    height: 100%;
    font-family: pingfang;
    overflow: hidden;
  }
  #app {
    height: 100%;
    padding-top: @head-height;
  }
  .app-view {
    height: 100%;
    padding-left: 280px;
  }
</style>