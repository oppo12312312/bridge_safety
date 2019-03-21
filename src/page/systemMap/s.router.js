/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 18:46:32
 * @LastEditTime: 2019-03-20 22:10:40
 */

const index = resolve => require(['./index'], resolve);
// const taskManage = resolve => require(['./taskManage'], resolve);


export default [{
  path: '/systemMap/index',
  name: 'systemMap',
  component: index,

  
}];
