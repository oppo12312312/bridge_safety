<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 17:12:22
 * @LastEditTime: 2019-03-23 16:11:59
 -->
<template>
  <div class="br-layout">
    <topTitle></topTitle>
    <div class="br-buttom">
      <topMenu 
        @active="menuActive" 
        class="br-top-menu"></topMenu>
      <div class="br-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
  
<script>
import topMenu from './topMenu';
import topTitle from './topTitle';
export default {
  components: {
    topMenu,
    topTitle
  },
  data() {
    return {
      menuActiveNames: []
    };
  },
  provide() {
    return {
      menuObj: this
    };
  },
  methods: {
    menuActive(value) {
      this.menuActiveNames = [].concat(value);
    }
  }
};
</script>

<style>

</style>
