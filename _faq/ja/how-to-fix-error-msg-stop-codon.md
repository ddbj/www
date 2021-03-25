---
layout: simple
title: '"Stop codon ‘*’ is found in the range." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T16:24:59
lang: ja
---

一般的な対応方法については [途中に出現する終止コドンへの対応](/ddbj/cds.html#stop) をご確認ください。  
[タンパク質コード配列; CDS feature について](/ddbj/cds.html) も ぜひ ご覧ください。  
以下では代表的な事例について説明しています。

1. CDS の読み枠 (フレーム) を示す /[codon\_start](/ddbj/qualifiers.html#codon_start) は正しく記載されているでしょうか。  
1, 2, 3 から適切な読み枠を選択してください。

    参考:  
: [codon\_start qualifier
    による翻訳開始の位置補正](/ddbj/cds.html#frame "/sub/cds.html#frame")
: [“First codon \[\*\*\*\] is not a start codon.” / “Final codon
    \[\*\*\*\] is not a stop codon.”
    というエラーが表示されました](/faq/ja/how-to-fix-error-msg-first-codon.html)
: [“Value of \[ codon\_start \] is not 1, but \[\#\#\#..\#\#\#\] is 5′
    complete type.”
    というエラーが表示されました](/faq/ja/how-to-fix-error-msg-codon-start.html)

1. [genetic code](/ddbj/geneticcode-e.html) が
/[transl\_table](/ddbj/qualifiers.html#transl_table) に正しく記載されているでしょうか。  
下記をご参照の上、genetic code を適切に設定してください。

    参考:  
: [The Genetic Codes](/ddbj/geneticcode-e.html)
: [/transl\_table qualifier について](/ddbj/qualifiers.html#transl_table)
: [“Invalid value \[\*\*\*\] for \[transl\_table\] qualifier.”
    というエラーが表示されました](/faq/ja/how-to-fix-error-msg-transl-table.html)

1. フレームシフトやナンセンス変異などで、stop codon が実際に生じているでしょうか。  
    1. pseudogene の場合  
    CDS 横の "Select Qualifier" から [/pseudogene](/ddbj/qualifiers.html#pseudogene) を追加してください。/pseudogene には[規定値](/ddbj/pseudogene-e.html) でタイプを指定する必要があります。  
    詳細は [b) pseudogene と見做される場合](/ddbj/cds.html#stop_b) をご参照ください。

    1. pseudogene とは断言できない場合、IgG などの獲得免疫関連で多様性が生じる過程、その他理由が不明で stop codon が生じている場合 
    CDS feature ではなく、misc\_feature を用いて記載してください。  
詳細は [a) nonsense mutation、frame shift などと推定されるが理由不明、または、IgG
などの獲得免疫関連で多様性が生じる過程の場合](/ddbj/cds.html#stop_a)
をご参照ください。

1. その他    
[ribosomal slippage](/ddbj/cds.html#stop_d)、[RNA
editing](/ddbj/cds.html#stop_e)、[例外的なアミノ酸翻訳](/ddbj/cds.html#stop_f)、[IS
や Tn などの挿入](/ddbj/cds.html#stop_g)などでも、このエラーメッセージが出力されることがあります。
