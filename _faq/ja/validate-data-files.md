---
layout: simple
title: Validate data files ボタンをクリックできず検証処理を開始できません
category: faq
db:
  - dra
tags: 
  - シークエンスデータ
date: 2015-10-05T09:16:49
lang: ja
---

## Validate data files ボタンをクリックできず検証処理を開始できません

Run メタデータに記入された全てのデータファイルが DRA サーバにアップロードされると，"Validate data files" ボタンが活性化され，検証処理を開始することができるようになります。メタデータを投稿しステータスが "metadata_submitted" になった後でもボタンが不活化されている場合は，以下の点をチェックしてください。
<div class="sub_index">
  <ul class="disc">
    <li>Run メタデータに記入した全てのデータファイルが DRA サーバにアップロードされていない。</li>
    <li>データファイルのファイル名に空白が含まれており，アップロードされたファイルが認識されていない。</li>
    <li>アップロードされたファイルがディレクトリに含まれており，認識されていない。</li>
  </ul>
</div>