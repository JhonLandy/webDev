---
title: Git 实用命令
---

# Git实用命令

- 本地历史覆盖到远程（如要删除远程记录，修改远程记录）

   ```bash
   git push -f 
   ```

- 修改记录

   ```bash
   git rebase -i commit-id
   git commit --amend
   ```

- 撤销提交

   使用 git revert [commit] 可以撤销指定的提交， 要撤销一串提交可以用 [commit1]..[commit2] 语法。 注意这是一个前开后闭区间，即不包括 [commit1]，但包括 [commit2]。

   ```bash
   git revert commit-id
   ```

- 删除本地分支

   ```bash
   git branch -D 分支名
   ```

- 删除远程分支

   ```bash
   git push origin --delete 分支名
   ```

- 比较分支

1. 工作目录 vs 暂存区

   ```bash
   git diff [filename]
   ```

2. 暂存区（add 的文件） vs 本地Git仓库

   ```bash
   git diff --cached [filename] //暂存区（add 的文件） vs 本地Git仓库
   ```

3. 工作目录 vs 本地git仓库

   ```bash
   git diff [commit] [filename] 
   //意义：查看工作目录同Git仓库指定 commit 的内容的差异。[commit]=HEAD 时：查看工作目录同最近一次 commit 的内容的差异
   ```

4. 本地Git仓库 vs Git仓库

   ```bash
   git diff [commit1] [commit2] //Git仓库任意两次 commit 之间的差别。
   ```
5. 撤销暂存区内容
```bash
git add filename//添加文件到暂存区

git reset HEAD  //撤销暂存区全部文件

git reset HEAD filename//指定撤销暂存区的文件
```

     