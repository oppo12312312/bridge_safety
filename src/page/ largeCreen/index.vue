<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 15:11:20
 * @LastEditTime: 2019-03-14 10:02:29
 -->
<template>
  <div class="br-large-creen">
    <!-- <div class="top">
      <card></card>
      <card class="fx1"></card>
      <card class="fx1"></card>
      <card class="fx1"></card>
      <card></card>
    </div> -->
    <div class="buttom">
      <!-- <div class="sides">
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
      </div> -->
      <div class="map">  
        <charMap></charMap>
      </div>
      
      <!-- <div class="sides">
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
      </div> -->
    </div>
  </div>
</template>

<script>
import charMap from './chaChinaMap';
import card from './card';
import charLineCard from './charLineCard';
export default {
  components: {
    charMap,
    card,
    charLineCard
  }

};
</script>

<style>

</style>
