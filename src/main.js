/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:31:30
 * @LastEditTime: 2019-03-23 16:46:36
 */
import Vue from 'vue';
import router from '@/router'; // 路由
import ElementUI from 'element-ui'; //element组件库

import App from './App.vue';

import '@/assets/style/index.scss'; 
import '@/assets/style/element-variables.scss'; //element 主题样式库

// import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { //element组件库
  size: 'small' 
});

router.beforeEach((to, from, next) => {
  console.log('next');
  next(); // 必须使用 next ,执行效果依赖 next 方法的调用参数
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
