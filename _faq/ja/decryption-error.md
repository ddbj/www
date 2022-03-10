---
layout: simple
title: JGA データを復号できません
category: faq
db:
  - jga
tags: 
  - 復号
date: 2022-03-09T09:35:51
lang: ja
---

JGA データの復号で PuTTY 形式の秘密鍵を使用した場合、"Unable to load Private Key" というエラーになります。  
[秘密鍵を PuTTY 形式から OpenSSH 形式に変換](account.html#convert-private-key)し、OpenSSH 形式の秘密鍵を使用してください。 
NBDC 利用申請に登録する公開鍵は OpenSSH/PuTTY どちらの形式にも対応しているため、公開鍵の形式変換は必要ありません。
