#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
#
git clone https://github.com/JhonLandy/dockerDeploy.git 
# 生成静态文件
yarn build:cloundServer 
# 进入生成的文件夹
cp -r docs/.vuepress/dist dockerDeploy/dist 
cd dockerDeploy
git init
git config --global user.email "709364178@qq.com"
git config --global user.name "YuanChengLang"
git add .
git commit -m 'deploy'
git push
# cd ../../../
# 生成静态文件
# npm run build:githubServer 

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # 如果是发布到自定义域名
# # echo 'www.example.com' > CNAME
# git init
# git add .
# git commit -m 'deploy'

# git remote add origin https://github.com/JhonLandy/blog.git
# git push -f https://github.com/JhonLandy/blog.git

# cd -