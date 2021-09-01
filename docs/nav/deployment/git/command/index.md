---
title: Git 实用命令
---
<big>作者： 糯米</big>

<big>日期：2020年8月30号</big>

# Git实用命令
* 本地历史覆盖到远程（如要删除远程记录，修改远程记录）

   

```bash
   git push -f 
   ```

* 修改记录

   

```bash
   git rebase -i commit-id
   git commit --amend
   ```

* 撤销提交

   使用 git revert [commit] 可以撤销指定的提交， 要撤销一串提交可以用 [commit1]..[commit2] 语法。 注意这是一个前开后闭区间，即不包括 [commit1]，但包括 [commit2]。

   

```bash
   git revert commit-id
   ```

* 删除本地分支

   

```bash
   git branch -D 分支名
   ```

* 删除远程分支

   

```bash
   git push origin --delete 分支名
   ```

 

* 工作目录 vs 暂存区

   

```bash
   git diff [filename]
   ```

* 暂存区（add 的文件） vs 本地Git仓库

   

```bash
   git diff --cached [filename] //暂存区（add 的文件） vs 本地Git仓库
   ```

* 工作目录 vs 本地git仓库

   

```bash
   git diff [commit] [filename] 
   //意义：查看工作目录同Git仓库指定 commit 的内容的差异。[commit]=HEAD 时：查看工作目录同最近一次 commit 的内容的差异
   ```

* 本地Git仓库 vs Git仓库

   

```bash
   git diff [commit1] [commit2] //Git仓库任意两次 commit 之间的差别。
   ```

* 撤销暂存区内容

   

```bash
   git rm -r --cached 文件/文件夹名字 
   ```

* 单独本地文件 vs 远程文件

   

```bash
   git diff [local/filepath] [remote/filepath]
   git diff src/a.txt src/a.txt
   ```

* 本地仓库 vs 远程仓库 (整体比较)

   

```bash
   git diff [localbranch] [remote/branch]
   ```

* 删除工作区文件

```bash
   git rm 文件 //这次删除会提交到暂存区
```

* 查看分支从哪里拉取

```bash
   git reflog --date=local | grep feature/ycl_overview_edit
```

* git fetch

```bash
   从远程下载分支。有冲突不会自动合并
```

* git pull (-f)

```bash
   同fetch，只是下载以后，有冲突直接进行merge。
```

* git cherry-pick

```bash
   // 仅仅把某分支某次提交的提交合并到当前分支
   git cherry-pick commitId(某分支的提交hash)
   // 把这个分支（feature）最近一次提交合并到当前分支
   git cherry-pick feature
   // cherry-pick 发生冲突后，修改完文件，执行以下命令
   git add .
   git cherry-pick --continue
```