---
layout: indexed_content
title: 多型関連研究における同一配列の代表データ登録
pathname: represent
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?tags%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
---

## 多型関連研究における同一配列の代表データ登録

近年, re-sequencing による多型関連研究が増加傾向にあり, これに由来する配列データの登録も増加傾向にあります。DDBJ (INSDC) では, <span class="red">基本的には, 配列が同一であっても, 個別に配列を受け付けます。</span>しかしながら, 多型関連研究において使用したサンプルの全てを配列データとして登録した場合, 時にはデータ量が膨大で冗長なものとなり, 検索利用面での利便性を損なうかもしれません。

多型関連研究においては /[frequency]({{ site.baseurl }}/ddbj/qualifiers.html#frequency) qualifier で出現頻度とサンプル総数を記載し代表データのみに集約して登録する方法も受け付けております。

ただし, この方法は 同種異個体に由来する同一配列・類似配列を 常に１つの配列データで代表させるという意味ではありません。 適正なデータ評価と検索利用面での利便性, サンプリングした集団数を正しく反映する目的で, 同一配列であっても代表配列データは配列多型の数と観測した集団の数の積算分に相当する件数に集約することが求められます。

配列多型  
: [haplotype]({{ site.baseurl }}/ddbj/qualifiers.html#haplotype), [allele]({{ site.baseurl }}/ddbj/qualifiers.html#allele) などの記載の単一性を維持可能な配 variation を単位とする区別

観測した集団  
: [country]({{ site.baseurl }}/ddbj/qualifiers.html#country), [lat_lon]({{ site.baseurl }}/ddbj/qualifiers.html#lat_lon), [host]({{ site.baseurl }}/ddbj/qualifiers.html#host) などの記載の単一性を維持可能なサンプリングし を単位とする区別

例えば, ネコのあるlocusに関して日米において配列を調査した結果, 下表のように３種類のhaplotypeで示される配列多型を観測し, haplotype毎には同一の配列であったとします。この結果をDDBJに登録する場合, 観測した全個体の配列, 231件をそのまま登録していただいても構いませんが, それは冗長に感じられます。

<table>
  <thead>
    <tr>
      <th>配列多型(haplotype)</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>total</th>                
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Japan</th>
      <td>75</td>
      <td>38</td>
      <td>0</td>
      <td>113</td>        
    </tr>
    <tr>
      <th>USA</th>
      <td>26</td>
      <td>32</td>
      <td>60</td>
      <td>118</td>        
    </tr>
    <tr>
      <th>totla</th>
      <td>101</td>
      <td>60</td>
      <td>70</td>
      <td>231</td>        
    </tr>      
  </tbody>
</table>

観測した配列は３タイプですので, 配列の同一性にのみ着目して３件の配列データで代表させることも可能と思われます。しかし, その方法では観測した集団の情報を捉えることが困難になります。 そのため観測した集団に関する情報と配列の双方を配列データに保持可能な件数が良いと思われます。下記 要領でサンプルの由来情報を source feature に記載し, ６通り中, 観測されていない日本における haplotype C を除く５件の配列データを登録することが, 好ましいと考えられます。

<pre><code>
    <a href="/ddbj/features.html#source">source</a>        1..365
                  /<a href="/ddbj/qualifiers.html#country">country</a>="Japan"
                  /<a href="/ddbj/qualifiers.html#haplotype">haplotype</a>="A"
                  /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                  /<a href="/ddbj/qualifiers.html#organism">organism</a>="Felis catus"
    <a href="/ddbj/features.html#variation">variation</a>     124
                  /<a href="/ddbj/qualifiers.html#compare">compare</a>="AB012345.1"
                  /<a href="/ddbj/qualifiers.html#frequency">frequency</a>="75 in 113"
                  /<a href="/ddbj/qualifiers.html#replace">replace</a>="t"
</code></pre>