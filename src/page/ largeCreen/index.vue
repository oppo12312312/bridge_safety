<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 15:11:20
 * @LastEditTime: 2019-03-23 14:49:41
 -->
<template>
  <el-scrollbar class="height100">
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
          <charChinaMap></charChinaMap>
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
  </el-scrollbar>
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
