# 当发生错误时中止脚本
# set -e
# cnpm install serve
# cnpm install -g xl_close_port

# 删除日志
rm -rf nohup.out 

# 更新代码
git pull
git add .
git commit -m 'deploy'
git push

#更新包
cnpm install

# 构建
npm run build

# 关闭所有的node进程
pgrep node | xargs kill -s 9

# 启动
node app.js &
