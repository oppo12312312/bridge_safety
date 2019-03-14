/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-14 14:51:03
 * @LastEditTime: 2019-03-14 15:24:58
 */
export default {
  xAxis: {
    // boundaryGap: false,
    splitLine: {
      show: false
    },
    axisLine: {
      show: true,
      // onZero: false,
      lineStyle: {
        color: '#989799'
      }
    },
    axisLabel: {
      color: '#989799',
      fontSize: 14,
      fontWeight: 100
    }
  },
  yAxis: {
    position: 'left',
    nameTextStyle: {
      color: '#E5E5E5',
      fontSize: 12,
      fontWeight: 100
    },
    splitLine: {
      show: false
    },
    axisLine: {
      show: true,
      onZero: false,
      lineStyle: {
        color: '#989799'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#989799',
      fontSize: 16,
      fontWeight: 100
    }
  },
  backgroundColor: '#1D223F'
};
