# SSH安装

首先在git_bash输入：

```bas
ssh-keygen
```

输入passphrase(密钥)，会生成密钥的.接着输入：

```bash
ssh-agent bash
```

然后：

```bash
ssh-add 密钥文件路径
```

最后就可以下载项目：

```bash
git clone ssh://git@git-sa.nie.netease.com:32200/wb.yuanchenglang/test.git
```

