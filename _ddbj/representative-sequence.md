---
layout: tabbed_indexed_content
title: 多型関連研究における同一配列の代表データ登録
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: ja
---

## 多型関連研究における同一配列の代表データ登録

近年、re-sequencing による多型関連研究が増加傾向にあり、これに由来する配列データの登録も増加傾向にあります。    
DDBJ (INSDC) では, <span style="color:red">基本的には、配列が同一であっても, 個別に配列を受け付けます。</span>    
しかしながら、多型関連研究において使用したサンプルの全てを配列データとして登録した場合、時にはデータ量が膨大で冗長なものとなり、検索利用面での利便性を損なうかもしれません。

多型関連研究においては 
/[haplotype](/ddbj/qualifiers.html#haplotype) または 
/[frequency](/ddbj/qualifiers.html#frequency) qualifier で出現頻度とサンプル総数を記載し代表データのみに集約して登録する方法も受け付けております。

ただし、この方法は 同種異個体に由来する同一配列・類似配列を 常に１つの配列データで代表させるという意味ではありません。    
適正なデータ評価と検索利用面での利便性, サンプリングした集団数を正しく反映する目的で、同一配列であっても代表配列データは配列多型の数と観測した集団の数の積算分に相当する件数に集約することが求められます。

配列多型  
: /[haplotype](/ddbj/qualifiers.html#haplotype), /[allele](/ddbj/qualifiers.html#allele) qualifier などの記載の単一性を維持可能な配列の variation を単位とする区別

観測した集団  
: /[geo_loc_name](/ddbj/qualifiers.html#geo_loc_name), /[lat_lon](/ddbj/qualifiers.html#lat_lon), /[collection_date](/ddbj/qualifiers.html#collection_date), /[host](/ddbj/qualifiers.html#host) qualifier などの記載の単一性を維持可能なサンプリングした集団を単位とする区別

例えば、ネコのある locus に関して日米において配列を調査した結果、下表のように３種類の haplotype で示される配列多型を観測し、haplotype 毎には同一の配列であったとします。
この結果をDDBJに登録する場合、観測した全個体の配列、231件をそのまま登録していただいても構いませんが、それは冗長に感じられます。

<table>
  <thead>
    <tr>
      <th>配列多型(haplotype)</th>
      <th><span style="color:green">A</span></th>
      <th>B</th>
      <th>C</th>
      <th>total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><span style="color:red">Japan</span></th>
      <td><span style="color:blue">75</span></td>
      <td>38</td>
      <td>0</td>
      <td><span style="color:blue">113</span></td>
    </tr>
    <tr>
      <th>USA</th>
      <td>26</td>
      <td>32</td>
      <td>60</td>
      <td>118</td>
    </tr>
    <tr>
      <th>total</th>
      <td>101</td>
      <td>60</td>
      <td>70</td>
      <td>231</td>
    </tr>
  </tbody>
</table>

観測した配列は３タイプですので, 配列の同一性にのみ着目して３件の配列データで代表させることも可能と思われます。
しかし、その方法では観測した集団の情報を捉えることが困難になります。
そのため観測した集団に関する情報と配列の双方を配列データに保持可能な件数が良いと思われます。
下記 要領でサンプルの由来情報を source feature に記載し、６通り中、観測されていない日本における haplotype C を除く５件の配列データを登録することが好ましいと考えられます。
さらに、もし、時間経過について観測した場合、/collection_date qualifier についても同様に考えるべきかもしれません。


<pre>    <a href="/ddbj/features.html#source">source</a>        1..365
                  /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="2007"
                  /<a href="/ddbj/qualifiers.html#geo_loc_name">geo_loc_name</a>="<span style="color:red">Japan</span>"
                  /<a href="/ddbj/qualifiers.html#haplotype">haplotype</a>="<span style="color:green">A</span> [<span style="color:blue">75</span> in <span style="color:blue">113</span>]"
                  /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                  /<a href="/ddbj/qualifiers.html#organism">organism</a>="Felis catus"
    <a href="/ddbj/features.html#variation">variation</a>     124
                  /<a href="/ddbj/qualifiers.html#frequency">frequency</a>="<span style="color:blue">75</span> in <span style="color:blue">113</span>"
                  /<a href="/ddbj/qualifiers.html#inference">inference</a>="similar to DNA sequence (same 
                  species):INSD:AB012345.1"
                  /<a href="/ddbj/qualifiers.html#replace">replace</a>="t"
</pre>
