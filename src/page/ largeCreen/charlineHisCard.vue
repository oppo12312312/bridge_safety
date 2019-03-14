<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 20:27:45
 * @LastEditTime: 2019-03-14 15:27:49
 -->
<template>
  <div class="br-card br-card-line">
    <CHistogram 
      :data="chartData"
      :extend="extend"
   
      :settings="chartSettings"
      height="100%"></CHistogram>
  </div>

</template>

<script>
import CHistogram from 'v-charts/lib/histogram';
import {} from 'echarts';
import largeCharts from '@/js/echarts/largeCharts';

export default {
  components: {
    CHistogram
  },
  data() {
    return {
      chartSettings: {
        showLine: ['下单用户']
      },
      extend: {
        xAxis: largeCharts.xAxis,
        yAxis: largeCharts.yAxis,
        title: {
          text: '负载',
          textStyle: {
            color: '#58cdda'
          }
        },
        grid: { 
          top: '40px',
          right: '30px',
          bottom: '20px' 
        }
      },
      chartData: {
        columns: ['日期', '访问用户', '下单用户'],
        rows: [
          {
            '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 
          },
          {
            '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 
          },
          {
            '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 
          },
          {
            '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 
          },
          {
            '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 
          },
          {
            '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 
          }
        ]
      }
    };
  }
};
</script>
