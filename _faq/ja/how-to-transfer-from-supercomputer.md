---
layout: simple
title: NIG スパコン上にあるデータを DRA サーバに直接転送する方法は？
category: faq
db:
  - dra
tags: 
  - データの転送
date: 2014-12-12T15:19:44
lang: ja
---

#### Unix/Mac OS X 上で秘密鍵を作成した場合
秘密鍵を遺伝研スパコン (Linux) に転送します。次に データファイルを scp 転送します。
```
scp <Your Files> <D-way Login ID>@dradata.ddbj.nig.ac.jp:~/<Submission ID>
```
- &lt;Your Files&gt; 転送するファイル    
例: file1 file2 (file1とfile2)，file* (fileではじまる全てのファイル)
- &lt;D-way Login ID&gt; D-way の Login ID    
例: drauser
- &lt;Submission ID&gt; 登録の Submission ID    
例: drauser-0003

#### Windows 上で秘密鍵を作成した場合
Linux で使用されている [OpenSSH 形式へ変換](/account.html#convert-private-key)した後，遺伝研スパコンに秘密鍵を転送します。    
また，scp 転送時には -i オプションで秘密鍵を指定して下さい。
```
scp -i <Private Key> <Your Files> <D-way Login ID>@dradata.ddbj.nig.ac.jp:~/<Submission ID>
```
- &lt;Private Key&gt; 秘密鍵を PATH で指定    
例: /home/mishima/id.rsa　

