/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-15 11:36:47
 * @LastEditTime: 2019-03-15 12:23:52
 */
const express = require('express'); //express框架
const http = require('http'); //express框架
const app = express();
app.use(express.static('./dist'));

const httpServer = http.createServer(app);
httpServer.listen(5000, '0.0.0.0', () => {
  console.log('succes');
});
