---
layout: tabbed_indexed_content
title: locus tag
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: ja
---

## locus tag {#locus_tag}

locus tag はゲノム上の遺伝子に体系的に割り当てる識別子です。異なるゲノム上の全く異なる遺伝子に同じような名称が用いられることによる混乱を防ぐために INSD (DDBJ/ENA/GenBank) に導入されました。DDBJ に登録する染色体やプラスミドといったゲノムアセンブリを構成する全ての塩基配列では /locus_tag qualifier で共通の locus tag prefix を使用して遺伝子を体系的に識別できるようにしています。

## locus tag prefix の登録 {#locus_tag_prefix}

ゲノムアセンブリ配列には [BioProject](/bioproject/submission.html) と [BioSample](/biosample/submission.html) が必要です。locus tag prefix は BioSample とあわせて登録します。  BioSample の[ゲノムアセンブリ系パッケージ](/biosample/overview.html#genome-assembly-sample) に含まれる locus tag prefix 属性に希望する prefix を入力します。locus tag prefix は3文字以上12文字以内の英数字のみを使用し、最初の1文字目は英字で始めますが、2文字目以降は数字も使用することができます (例: A1C)。prefix には '-' '\_' '\*' といったシンボル記号は使用できません。  
BioSample に登録した prefix は変更できません。そのため将来変わる可能性がある生物名や株名に揃えた prefix の登録は避けてください。   

## /locus_tag の記載方法 {#locus_tag_qualifier}

ゲノム配列は DDBJ の [Mass Submission System](/ddbj/mss.html) から登録します。  
DDBJ に登録するゲノムアセンブリを構成する全ての塩基配列において対応する BioSample に登録した prefix を /locus_tag qualifier で使用します。/locus_tag は全てのタンパク質コード遺伝子とタンパク質をコードしない RNA 遺伝子に割り当てます。/locus_tag では prefix と tag の値はアンダースコアで区切ります (例: A1C_00001)。/locus_tag はゲノム内の遺伝子に出現順序に従って体系的に記載し、タンパク質コード遺伝子、RNA 産物や由来染色体といった遺伝子種別に依らずに付番することを推奨します。  
染色体番号や RNA 種別などの情報を /locus_tag に含めることを希望する場合、prefix とアンダースコアの後にそれらの情報を加えます。

```
ABC_I00001 for gene 1, chromosome I
ABC_II00001 for gene 1, chromosome II
ABC_r1112 for ribosomal RNA genes
ABC_t1113 for tRNA genes
```

具体的には /locus_tag は以下の feature に記載します ([repeat_region](/ddbj/features.html#repeat_region) には記載しません)。

* [mRNA](/ddbj/features.html#mRNA)
* [CDS](/ddbj/features.html#cds)
* [5'UTR](/ddbj/features.html#5UTR)
* [3'UTR](/ddbj/features.html#3UTR)
* [intron](/ddbj/features.html#intron)
* [exon](/ddbj/features.html#exon)
* [tRNA](/ddbj/features.html#tRNA)
* [rRNA](/ddbj/features.html#rRNA)
* [ncRNA](/ddbj/features.html#ncRNA)
* [tmRNA](/ddbj/features.html#tmRNA)
* [precursor_RNA](/ddbj/features.html#precursor_RNA)
* [prim_transcript](/ddbj/feature-table.html#prim_transcript)
* [misc_RNA](/ddbj/features.html#misc_RNA)

単一遺伝子を構成する exon/CDS/mRNA といった全ての feature の /locus_tag には同じ値を記入します。また、１つの /locus_tag には１つの [/gene](/ddbj/qualifiers.html#gene) qualifier が対応するようにします。  

## /locus_tag の追加 {#add}

登録者がゲノム配列とアノテーションを更新した場合、新規 gene には以下の方法で新しい /locus_tag を追加することができます。

更新方法1: 削除と新規追加

```
更新前       更新後
ABC_0022
           ABC_4568 (new gene)
ABC_0023   ABC_0023
```

更新方法2: 予め設けておいたギャップの間に追加

```
更新前       更新後
ABC_0020   ABC_0020
           ABC_0021 (new gene)
ABC_0030   ABC_0030
```

ABC_0020.1 のようなバージョンに類似した小数表記はできません。
