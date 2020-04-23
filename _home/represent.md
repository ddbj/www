---
layout: indexed_content
title: 多型関連研究における同一配列の代表データ登録
pathname: represent
category: _home
---

# 多型関連研究における同一配列の代表データ登録

近年, re-sequencing による多型関連研究が増加傾向にあり, これに由来する配列データの登録も増加傾向にあります。DDBJ (INSDC) では, <span class="red">基本的には, 配列が同一であっても, 個別に配列を受け付けます。</span>しかしながら, 多型関連研究において使用したサンプルの全てを配列データとして登録した場合, 時にはデータ量が膨大で冗長なものとなり, 検索利用面での利便性を損なうかもしれません。

多型関連研究においては /[frequency](/ddbj/qualifiers.html#frequency) qualifier で出現頻度とサンプル総数を記載し代表データのみに集約して登録する方法も受け付けております。

ただし, この方法は 同種異個体に由来する同一配列・類似配列を 常に１つの配列データで代表させるという意味ではありません。 適正なデータ評価と検索利用面での利便性, サンプリングした集団数を正しく反映する目的で, 同一配列であっても代表配列データは配列多型の数と観測した集団の数の積算分に相当する件数に集約することが求められます。

  - 配列多型  
    [haplotype](/ddbj/qualifiers.html#haplotype), [allele](/ddbj/qualifiers.html#allele) などの記載の単一性を維持可能な配 variation を単位とする区別
  - 観測した集団  
    [country](/ddbj/qualifiers.html#country), [lat\_lon](/ddbj/qualifiers.html#lat_lon), [host](/ddbj/qualifiers.html#host) などの記載の単一性を維持可能なサンプリングし を単位とする区別

例えば, ネコのあるlocusに関して日米において配列を調査した結果, 下表のように３種類のhaplotypeで示される配列多型を観測し, haplotype毎には同一の配列であったとします。この結果をDDBJに登録する場合, 観測した全個体の配列, 231件をそのまま登録していただいても構いませんが, それは冗長に感じられます。

<div class="main_table format">

|  配列多型(haplotype)  |  A  |  B  |  C  |  total  |
| ---- | ---- | ---- | ---- | ---- |
|  Japan  |  75  |  38  |  0  |  113  |
|  USA  |  26  |  32  |  60  |  118  |
|  totla  |  101  |  60  |  70  |  231  |

観測した配列は３タイプですので, 配列の同一性にのみ着目して３件の配列データで代表させることも可能と思われます。しかし, その方法では観測した集団の情報を捉えることが困難になります。 そのため観測した集団に関する情報と配列の双方を配列データに保持可能な件数が良いと思われます。下記 要領でサンプルの由来情報を source feature に記載し, ６通り中, 観測されていない日本における haplotype C を除く５件の配列データを登録することが, 好ましいと考えられます。

``` code flat-file
    source        1..365
                  /country="Japan"
                  /haplotype="A"
                  /mol_type="genomic DNA"
                  /organism="Felis catus"
    variation     124
                  /compare="AB012345.1"
                  /frequency="75 in 113"
                  /replace="t"
```
