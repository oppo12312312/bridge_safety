/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-15 11:36:47
 * @LastEditTime: 2019-03-23 11:47:31
 */
const express = require('express');
const app = express();
app.use(express.static('./dist'));
 
app.get('/get', (req, res) => {
  console.log(req.query);
  res.status(200).send({
    loginName: 'admin'
  });
});
app.post('/post', (req, res) => {
  console.log(req.body);
  res.status(200).send({
    loginName: 'post'
  });
});

 
const server = app.listen(5000, () => {
  const port = server.address().port;
  console.log(`启动成功,端口：${port}`);
});
