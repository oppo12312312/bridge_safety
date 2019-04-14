/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-15 11:36:47
 * @LastEditTime: 2019-04-14 11:50:31
 */
const express = require('express'); //express框架
const http = require('http'); 
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static('./dist'));

// app.get('/api', (req, res) => {
//   res.send('hello world');
// });

const httpServer = http.createServer(app);
httpServer.listen(6000, '0.0.0.0', () => {
  console.log('success');
});


// const express = require('express');
// const history = require('connect-history-api-fallback');

// const app = express();
// app.use(express.static('./dist'));
// app.use(history());
// // app.get('/api', (req, res) => {
// //   res.send('Hello World');
// // });
 
// const server = app.listen(5000, () => {
//   // const host = server.address().address;
//   const port = server.address().port;
//   console.log(`启动成功,端口：${port}`);
// });
