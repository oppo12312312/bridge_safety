/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 17:05:59
 * @LastEditTime: 2019-03-20 22:12:20
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/page/layout';
import test from '@/page/test';

Vue.use(VueRouter);
/**
 * 自动化注册所有子路由
 */
let childRoutes = [];
const requireModules = require.context('@/page', true, /\.router.js$/);
debugger;
requireModules.keys().forEach(fileName => {
  const file = requireModules(fileName);
  childRoutes = childRoutes.concat(file.default);
});


export default new VueRouter({
  mode: 'history',
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
      redirect: '/largeCreen/index',
      children: childRoutes
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    }
  ]
});
