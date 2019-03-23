/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-18 11:47:44
 * @LastEditTime: 2019-03-23 22:53:43
 */
import echarts from 'echarts';
export default {
  methods: {
    /**
     * @description: 
     * @options {char参数} 
     * @return: 
     */
    init(options, dom) {
      const myChart = echarts.init(dom);
      myChart.setOption(options); 
      const originFn = window.onresize;
      window.onresize = function () {
        originFn && originFn();
        myChart.resize();
      };
    }
  }
};
