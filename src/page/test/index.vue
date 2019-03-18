<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:58:28
 * @LastEditTime: 2019-03-17 11:30:35
 -->
<template>
  <div class="w100 height100">      
    <bridgeMap 
      ref="map" 
      :markers="markers"></bridgeMap></div>
  
</template>

<script>
import bridgeMap from '@/components/bridgeMap';

export default {
  components: {
    bridgeMap
  },
  data() {
    return {
      markers: [{
        id: 1,
        lng: 200,
        lat: 300,
        name: '999'
      }, {
        id: 2,
        lng: 400,
        lat: 610.5,
        name: '999'
      }]
    };
  }

};
</script>

<style>

</style>
