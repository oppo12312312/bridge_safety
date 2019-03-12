<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 17:12:22
 * @LastEditTime: 2019-03-12 18:50:37
 -->
<template>
  <div class="br-layout">
    <topTitle></topTitle>
    <div class="br-buttom">
      <topMenu></topMenu>
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
  }

};
</script>

<style>

</style>
