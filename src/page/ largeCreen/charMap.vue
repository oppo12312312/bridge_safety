<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 20:27:45
 * @LastEditTime: 2019-03-12 20:51:17
 -->
<template>
  <CMap 
    :data="chartData"
    height="100%"></CMap>
</template>

<script>
import CMap from 'v-charts/lib/map';
export default {
  components: {
    CMap
  },
  data() {
    return {
      chartData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          {
            '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 
          },
          {
            '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 
          },
          {
            '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 
          },
          {
            '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 
          }
        ]
      }
    };
  }
};
</script>

<style>

</style>
