---
layout: simple
title: 公開を取り消したデータが現在も参照できるのはなぜですか
category: faq
db:
  - ddbj
tags: 
  - 検索
date: 2014-06-03T18:14:34
lang: ja
---

一度公開されたエントリに、一定の利用制限をかけることは、[条件つきで可能](/faq/ja/restore-released-data-private.html)です。説明は [DDBJ と SRA におけるデータ処理](/data-processing.html) をご覧ください。
その場合は、次回以降に作成する定期リリースに当該データを含めないこととし、DDBJ 配下の通常検索サービスから削除することになります。    
しかしながら、[getentry](https://getentry.ddbj.nig.ac.jp/top-j.html) を利用してアクセッション番号で検索した場合には、永久に閲覧が可能な状態になります。ただし，国際塩基配列データベース側の作業ミスにより誤って公開された場合は，その限りではありません。    
これは "[Nucleotide Sequence Database Policies](https://www.science.org/doi/10.1126/science.298.5597.1333b)" で、次のように明文化されています。

---

INSD に登録されたデータは、科学資料として永久に保存され公開される。登録者によるデータの訂正や更新は歓迎するし、誤った部分は次のデータリリースで訂正されるべきであるが、全てのデータは永久に保存され、アクセッション番号で検索できるものとする。

---

また、不特定多数の機関が国際塩基配列データベースを随時コピーして独自のデータベースを構築しております。    
これらのデータベースからの削除は DDBJ ではサポートできかねます。それぞれの管理者へ直接、ご依頼いただくことになります。

参考: [INSDC Status Document](https://www.insdc.org/submitting-standards/insdc-status-document/)

