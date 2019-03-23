/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-23 11:22:26
 * @LastEditTime: 2019-03-23 11:50:49
 */
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000
});

export default {
  get: async (param) => {
    const res = await instance.get('/get', { params: param });
    return res.data;
  },
  post: async (param) => {
    const res = await instance.post('/post', param);
    return res.data;
  }
};
