/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 19:29:28
 * @LastEditTime: 2019-03-16 20:14:05
 */
module.exports = {
  transpileDependencies: [
    'node_modules/leaflet',
    'node_modules/echarts',
    'node_modules/v-charts',
    'node_modules/vue2-leaflet'
  ],
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js']
  },
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
