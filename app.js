/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-15 11:36:47
 * @LastEditTime: 2019-03-16 17:17:50
 */
const express = require('express'); //express框架
const http = require('http'); 
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static('./dist'));

const httpServer = http.createServer(app);
httpServer.listen(5000, '0.0.0.0', () => {
  console.log('success');
});
