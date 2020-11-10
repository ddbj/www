---
layout: indexed_content
title: NIG スパコン上にあるデータを DRA サーバに直接転送する方法は？
category: faq
db:
  - dra
tags: 
  - データの転送
date: 2014-12-12T15:19:44
lang: ja
---

## NIG スパコン上にあるデータを DRA サーバに直接転送する方法は？

<h4 class="bold">Unix/Mac OS X 上で秘密鍵を作成した場合</h4>
<p>秘密鍵を遺伝研スパコン (Linux) に転送します。次に データファイルを scp 転送します。</p>
<p class="code break">scp <span class="italic">&lt;Your Files&gt;</span> <span class="italic">&lt;D-way Login ID&gt;</span>@dradata.ddbj.nig.ac.jp:~/<span class="italic">&lt;Submission ID&gt;</span></p>
<div class="sub_index">
  <ul>
    <li>&lt;Your Files&gt; 転送するファイル。<br>例: file1 file2 (file1とfile2)，file* (fileではじまる全てのファイル)</li>
    <li>&lt;D-way Login ID&gt; D-way の Login ID (例: drauser)</li>
    <li>&lt;Submission ID&gt; 登録の Submission ID (例: drauser-0003)</li>
  </ul>
</div>
<h4 class="bold">Windows 上で秘密鍵を作成した場合</h4>
<p>Linux で使用されている <a href="/account.html#convert-private-key">OpenSSH 形式へ変換</a>した後，遺伝研スパコンに秘密鍵を転送します。また，scp 転送時には -i オプションで秘密鍵を指定して下さい。</p>
<p class="code break">scp -i <span class="italic">&lt;Private Key&gt;</span> <span class="italic">&lt;Your Files&gt;</span> <span class="italic">&lt;D-way Login ID&gt;</span>@dradata.ddbj.nig.ac.jp:~/<span class="italic">&lt;Submission ID&gt;</span></p>
<div class="sub_index">
  <ul>
    <li>&lt;Private Key&gt; 秘密鍵を PATH で指定。例: /home/mishima/id.rsa　</li>
  </ul>
</div>
