<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:58:28
 * @LastEditTime: 2019-03-20 21:01:06
 -->
<template>
  <div class="system-map"> 
    <div class="search">
      
    </div>

    <div class="content">
      
      <breadcrumb></breadcrumb>
      <div class="map">
        <bridgeMap 
          ref="map" 
          :markers="markers"></bridgeMap>
      </div>


    </div>


  </div>  
  
  
</template>

<script>
import bridgeMap from '@/components/bridgeMap';
import breadcrumb from '@/page/layout/breadcrumb';

export default {
  components: {
    bridgeMap,
    breadcrumb
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
