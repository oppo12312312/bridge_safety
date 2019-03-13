# 当发生错误时中止脚本
set -e

# 删除日志
rm -rf nohup.out 

# 更新代码
git pull

#更新包
cnpm install

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 启动
serve -l 5000
