/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 18:46:32
 * @LastEditTime: 2019-03-23 20:59:31
 */

const index = resolve => require(['./index'], resolve);
// const taskManage = resolve => require(['./taskManage'], resolve);

export default [{
  path: '/monitor/index',
  name: 'monitor',
  component: index,

  
}];
