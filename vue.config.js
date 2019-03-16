/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 19:29:28
 * @LastEditTime: 2019-03-16 16:02:52
 */
module.exports = {
  transpileDependencies: [
    'node_modules/leaflet',
    'node_modules/echarts'
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
