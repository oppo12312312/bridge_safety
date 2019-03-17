/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 18:46:32
 * @LastEditTime: 2019-03-17 11:05:56
 */

const index = resolve => require(['./index'], resolve);
// const taskManage = resolve => require(['./taskManage'], resolve);


export default {
  path: '/test',
  name: 'test',
  component: index,
  // redirect: '/system/taskManage',
  // children: [{
  //   path: '/system/taskManage',
  //   name: 'taskManage',
  //   component: taskManage,
  // }]
  
};
