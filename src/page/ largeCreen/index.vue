<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 15:11:20
 * @LastEditTime: 2019-03-19 20:32:36
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
        <card class="fx1"></card>
        <charLineCard></charLineCard>
        <card class="fx1"></card>
        <charlineHisCard></charlineHisCard>
        <card class="fx1"></card>
      </div>
      <div class="map">  
        1212
      </div>
      
      <div class="sides">
        <card class="fx1"></card>
        <charLineCard></charLineCard>
        <card class="fx1"></card>
        <charLineCard></charLineCard>
        <card class="fx1"></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from './card';
import charLineCard from './charLineCard';
import charlineHisCard from './charlineHisCard';
export default {
  components: {
   
    card,
    charLineCard,
    charlineHisCard
  }

};
</script>

<style>

</style>
