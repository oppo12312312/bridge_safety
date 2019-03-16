/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 19:29:28
 * @LastEditTime: 2019-03-16 19:56:41
 */
module.exports = {
  transpileDependencies: [
    'node_modules/leaflet',
    'node_modules/echarts',
    'node_modules/v-charts',
    'node_modules/vue2-leaflet'
  ],
  css: {
    loaderOptions: {
      sass: {
        module: {
          rules: []
        }
      }
    }
  }
};
