#!/bin/sh
echo '检查目录是否存在'
if [ ! -d "/source" ];
then
    echo '目录不存在，创建目录'
    mkdir source
fi

echo "开始部署资源"
cd source
apt update
apt install git
apt install docker && apt install docker-compose && service docker start
git config --global user.name "huaweiserver"
git config --global user.email "709364178@qq.com"
git clone https://github.com/JhonLandy/dockerDeploy.git

echo "部署资源完毕, 启动服务......"

cd dockerDeploy && sh deploy-dev.sh

echo "启动完成，请尝试打开服务验证服务是否部署成功"


