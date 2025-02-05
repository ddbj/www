---
layout: simple
title: データ公開の依頼方法は？
category: faq
db:
  - ddbj
  - bioproject
  - biosample
  - dra
  - gea
  - metabobank
tags: 
  - データの公開
date: 2021-05-25T18:14:34
lang: ja
---

データ公開を希望する場合、DDBJ/DRA/GEA/MetaboBank データに対するアクセッション番号または Submission ID で公開対象を指定します。


<table class="table_faq">
  <thead>
    <tr>
      <th>データベース</th>
      <th>アクセッション番号の例</th>
      <th>依頼方法</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DDBJ</td> 
      <td>AB12345678, ABCDEF010123456　</td>
      <td><a href="https://forms.gle/Xx6wPKFgQDHdvXJG9">登録データの更新申し込みフォーム</a></td>      
    </tr>
    <tr>
      <td>DRA</td> 
      <td>DRR000001</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">D-way</a> にログインし、<a href="/dra/update.html#change-hold-date">登録者自身で DRA データを公開</a></td> 
    </tr>    
    <tr>
      <td>GEA</td> 
      <td>E-GEAD-1</td> 
      <td><a href="https://forms.gle/BQR6d9gZ3Prox1G89">GEA 更新依頼フォーム</a></td> 
    </tr>
    <tr>
      <td>MetaboBank</td> 
      <td>MTBKS1</td> 
      <td><a href="https://forms.gle/3Xx3W4ch3eyJpYc48">MetaboBank 更新依頼フォーム</a></td> 
    </tr>
    <tr>
      <td>BioProject</td> 
      <td>PRJDB1</td> 
      <td><a href="https://forms.gle/FuLvUNFeciTEdzQcA">BioProject/BioSample/DRA  更新依頼フォーム</a></td> 
    </tr>
    <tr>
      <td>BioSample</td> 
      <td>SAMD00000001</td> 
      <td><a href="https://forms.gle/FuLvUNFeciTEdzQcA">BioProject/BioSample/DRA  更新依頼フォーム</a></td> 
    </tr>
  </tbody>
</table>
    
#### 登録データの連動公開の仕組み   
FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)
- BioProject アクセッション番号が指定された場合、当該 BioProject のみが公開され、関連データは公開されません。    
- BioSample アクセッション番号が指定された場合、当該 BioSample のみが公開され、関連データは公開されません。    
- DDBJ/DRA/GEA/MetaboBank データが公開されると、参照されている BioProject と BioSample は連動して公開されます。 