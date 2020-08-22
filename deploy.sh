#!/usr/bin/env sh
sudo apt update
sudo apt install git

# 确保脚本抛出遇到的错误
set -e
#
git clone https://github.com/JhonLandy/dockerDeploy.git 
# 生成静态文件
yarn build:cloundServer 
# 进入生成的文件夹
cp -r ./docs/.vuepress/dist ./dockerDeploy


cd ./dockerDeploy
git config user.name 'JhonLandy'
git config user.email '709364178@qq.com'
git status
git add .
git commit -m 'deploy'
git config --unset user.name
git config --unset user.email
git push -f
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