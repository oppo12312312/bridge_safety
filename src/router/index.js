/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 17:05:59
 * @LastEditTime: 2019-03-15 14:14:18
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/page/layout';
import test from '@/page/test';

Vue.use(VueRouter);
/**
 * 自动化注册所有子路由
 */
const childRoutes = [];
const requireModules = require.context('@/page', true, /\.router.js$/);
requireModules.keys().forEach(fileName => {
  const file = requireModules(fileName);
  childRoutes.push(file.default || file);
});


export default new VueRouter({
//   mode: 'history',
  routes: [
    {
      path: '/',
      // redirect: '/layout'
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      redirect: '/largeCreen',
      children: childRoutes
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    }
  ]
});
