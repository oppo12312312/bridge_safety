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

# cd 到构建输出的目录下 
cd dist

#关闭之前的
xl_close_port -p 5000

# 启动
serve -l 5000 &
