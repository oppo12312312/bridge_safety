/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-05-08 21:22:13
 * @LastEditTime: 2019-05-08 21:27:09
 */
let http = require("http");
let path = require("path");
let url = require("url");
let zlib = require("zlib");
let fs = require("fs");
let { promisify } = require("util");
let mime = require("mime");
//把一个异步方法转成一个返回promise的方法
let stat = promisify(fs.stat);
http.createServer(request).listen(8080);
async function request(req, res) {
 let { pathname } = url.parse(req.url); 
 let filepath = path.join(__dirname, pathname); 
 // fs.stat(filepath,(err,stat)=>{});现在不这么写了，异步的处理起来比较麻烦
 try {
  let statObj = await stat(filepath);
  res.setHeader("Content-Type", mime.getType(pathname));
  let acceptEncoding = req.headers["accept-encoding"];
  if (acceptEncoding) {
   if (acceptEncoding.match(/\bgzip\b/)) {
     
    res.setHeader("Content-Encoding", "gzip");
    fs
     .createReadStream(filepath)
     .pipe(zlib.createGzip())
     .pipe(res);
   } else if (acceptEncoding.match(/\bdeflate\b/)) {
    res.setHeader("Content-Encoding", "deflate");
    fs
     .createReadStream(filepath)
     .pipe(zlib.createDeflate())
     .pipe(res);
   } else {
    fs.createReadStream(filepath).pipe(res);
   }
  } else {
   fs.createReadStream(filepath).pipe(res);
  }
 } catch (e) {
  res.statusCode = 404;
  res.end("Not Found");
 }
}