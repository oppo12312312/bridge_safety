<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 20:27:45
 * @LastEditTime: 2019-03-14 09:58:19
 -->
<template>
  <CMap 
    :data="chartData"
    :extend="extend"
    :settings="settings"
    height="100%"></CMap>
</template>

<script>
import CMap from 'v-charts/lib/map';
import {} from 'echarts';
export default {
  components: {
    CMap
  },
  data() {
    return {
      extend: {
        color: ['#c12f34', '#38b03f'],
        legend: {
          right: 0,
          textStyle: {
            color: '#ffffff'
          },
          borderRadius: 5,
          data: [{
            name: '税收',
            // 强制设置图形为圆。
            icon: 'circle',
            color: '#ffffff'
          }, {
            name: '人口',
            // 强制设置图形为圆。
            icon: 'circle',
          }],
        },
        
        toolbox: {
          show: true,
          left: 'left',
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: {
          label: false,
          roam: true,
          itemStyle: {
            areaColor: '#e2e0e000',
            borderColor: '#ffffff'
          },
          emphasis: {
            label: {
              show: true,
              color: '#e6a85f',
            },
            itemStyle: {
              areaColor: 'rgba(230, 168, 95, 0.6)',
              borderColor: '#e6a85f',
              borderWidth: 1
            }
          },
          showEffectOn: 'render',
          // symbolSize() {
          //   debugger;
          //   return 1000;
          // },
          markPoint: {
            symbol: 'roundRect',
            symbolSize() {
              debugger;
              return 1000;
            },
            itemStyle: {
              color: '#e6a85f',
            }
          }
        }
      },
      chartData: {
        columns: ['位置', '税收', '人口'],
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
  },

};
</script>

<style>

</style>
