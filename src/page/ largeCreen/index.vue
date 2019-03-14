<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 15:11:20
 * @LastEditTime: 2019-03-14 15:29:02
 -->
<template>
  <div class="br-large-creen">
    <div class="top">
      <card></card>
      <card class="fx1"></card>
      <card class="fx1"></card>
      <card class="fx1"></card>
      <card></card>
    </div>
    <div class="buttom">
      <div class="sides">
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
        <charlineHisCard></charlineHisCard>
        <card ></card>
      </div>
      <div class="map">  
        <charChinaMap></charChinaMap>
        <!-- <charlineHisCard></charlineHisCard> -->
      
      </div>
      
      <div class="sides">
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
        <charLineCard></charLineCard>
        <card ></card>
      </div>
    </div>
  </div>
</template>

<script>
import charChinaMap from './charChinaMap';
import card from './card';
import charLineCard from './charLineCard';
import charlineHisCard from './charlineHisCard';
export default {
  components: {
   
    card,
    charChinaMap,
    charLineCard,
    charlineHisCard
  }

};
</script>

<style>

</style>
