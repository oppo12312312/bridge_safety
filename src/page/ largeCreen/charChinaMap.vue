<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 20:27:45
 * @LastEditTime: 2019-03-14 14:18:29
 -->
<template>
  <div 
    class="height100"
    ref="cardChinaChar"></div>
</template>

<script>


const option = {
  tooltip: {
    trigger: 'item',
    formatter(params) {
      if (params.value[2] > 0) {
        return `${params.name} : 未处理报警数量 ( ${params.value[2]} )`;
      }
      return params.name + ': 正常';
    }
  },
  toolbox: {
    show: true,
    left: 'left',
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
  grid: { 
    top: '40px',
    right: '30px',
    bottom: '20px' 
  },
  legend: {
    x: 'right',
    data: ['报警', '正常'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    roam: true,
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      areaColor: '#e2e0e000',
      borderColor: '#d4d4d4'
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
    }
  },
  series: [
    {
      name: '报警',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: 18,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      emphasis: {
        itemStyle: {
          borderColor: '#fff',
        }
      },
      itemStyle: {
        opacity: 0.5,
        color: 'red',
                
      }
    }, {
      name: '正常',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: 18,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      emphasis: {
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        }
      },
      itemStyle: {
        opacity: 0.5,
        color: '#38b03f',
                
      }
    }
  ]
};
import echarts from 'echarts';
import 'echarts/map/js/china.js';

export default {
  mounted() {
    this.getData();
    this.draw();
  },
  methods: {
    getData() {
      const data = [{
        name: '长沙',
        lng: 116.7,
        lat: 28.21,
        value: 0
      },
      {
        name: '聊城',
        lng: 115.97, 
        lat: 36.45,
        value: 0
      },
      {
        name: '武汉',
        lng: 114.31, 
        lat: 30.52,
        value: 0
      },
      {
        name: '天津',   
        lng: 117.2,
        lat: 39.13,
        value: 24
      },
      {
        name: '兰州', 
        lng: 103.73,
        lat: 36.03,
        value: 34
      },
      {
        name: '洛阳', 
        lng: 112.44,
        lat: 34.7,
        value: 212
      }
      ];

      const waring = [];
      const normal = [];
      data.forEach(item => {
        const value = {
          name: item.name,
          value: [item.lng, item.lat, item.value]
        };
        if (item.value > 0) {
          waring.push(value);
        } else {
          normal.push(value);
        }
      });
      option.series[0].data = waring;
      option.series[1].data = normal;
    },
    draw() {
      const myChart = echarts.init(this.$refs.cardChinaChar);
      myChart.setOption(option); 
    }
  }

};
</script>


<style>

</style>
