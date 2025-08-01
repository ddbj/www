---
layout: simple
title: セカンダリアクセッション番号とは何ですか
category: faq
db:
  - ddbj
tags: 
  - アクセッション番号
date: 2014-06-03T16:48:55
lang: ja
---

DDBJ を含む[国際塩基配列データベース](/insdc/index.html)が、登録された塩基配列データに対して発行する番号を[アクセッション番号 (accession number)](/insdc/accessions.html)と呼んでいます。    
[DDBJ 公開形式 (flat file)](/ddbj/flat-file.html)においては [ACCESSION](/ddbj/flat-file.html#AccessionB)行に記載されています。

複数エントリの統合、大幅な内容変更など、既に登録された塩基配列の更新に相当する場合でも、新規に登録し直して アクセッション番号を発行することがあります。 この際に、新規のアクセッション番号 (プライマリアクセッション番号) に対して、既存のアクセッション番号をセカンダリアクセッション番号とすることがあります。

flat file には、先頭にプライマリアクセッション番号、２つ目以降にセカンダリアクセッション番号を記載します。

**例**

<pre class="flatfile">ACCESSION   <span style="border-bottom:solid 3px #ff0000;">AB999999</span> <span style="border-bottom:solid 3px #0000ff;">AB888888</span> <span style="border-bottom:solid 3px #0000ff;">AB777777</span></pre>

<span style="color: #ff0000">AB999999 -- primary accession number</span>    
<span style="color: #0000ff">AB888888 AB777777 -- secondary accession number</span>

通常は、プライマリアクセッション番号とセカンダリアクセッション番号のどちらで検索しても、変更後のデータが返ります。

ただし、セカンダリアクセッション番号のエントリが既に公開済みの場合、データベース上から抹消される訳ではありませんので、[getentry](https://getentry.ddbj.nig.ac.jp/top-j.html) では、直接番号を指定することで検索と閲覧が可能です。

参考
- [getentry ヘルプ](/services/getentry.html)
- [INSDC Status Document](https://www.insdc.org/submitting-standards/insdc-status-document/)
- [公開を取り消したデータが現在も参照できるのはなぜですか?](/faq/ja/why-retracted-data-available.html)

