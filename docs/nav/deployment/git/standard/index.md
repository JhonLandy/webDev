---
title: Git 编写优雅的 commit message 并自动生成 changelog
---
<big>作者： 糯米</big>

<big>日期：2020年8月16号</big>

#  Git 编写优雅的 commit message

## 保存日志方法

- 命令安装

  ```bash
  npm install -g commitizen
  ```

- 支持打印Angular格式

  ```bash
  commitizen init cz-conventional-changelog --save --save-exact
  ```

- 使用方法

  ```bash
  git add .
  git cz
  ```

- 选择保存日志类型

  ```bash
  Select the type of change that you're committing: (Use arrow keys)
  > feat:     A new feature
    fix:      A bug fix
    docs:     Documentation only changes
    style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    refactor: A code change that neither fixes a bug nor adds a feature
  ```

## 打印日志方法

- 安装命令

  ```bash
  npm install -g conventional-changelog-cli
  ```

- 使用方法

  ```bash
  conventional-changelog -p angular -i CHANGELOG.md -s
  ```

  项目自动生成CHANGELOG.md文件，推荐使用 *Typora* 查看



## 制定提交规范

- package.json配置
    
    ```bash
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {//使用了eslint; 也可以不用eslint,这里 可以替换一下就可以，
        "src/**/*.{js,vue}": [
            "eslint --fix",
            "git add"
        ]
    },
    ```

