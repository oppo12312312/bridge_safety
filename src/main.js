/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:31:30
 * @LastEditTime: 2019-03-12 15:20:37
 */
import Vue from 'vue';
import router from '@/router'; // 路由
import ElementUI from 'element-ui'; //element组件库

import App from './App.vue';

import '@/assets/style/index.scss'; 
import '@/assets/style/element-variables.scss'; //element 主题样式库

// import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { //element组件库
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
