/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 19:29:28
 * @LastEditTime: 2019-03-23 11:43:59
 */
module.exports = {
  transpileDependencies: [
    'node_modules/leaflet',
    'node_modules/echarts',
    'node_modules/v-charts',
    'node_modules/vue2-leaflet'
  ],
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://localhost:5000', //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //代理的路径
        }
      }
    }
  },
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
