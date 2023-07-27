---
layout: tabbed_indexed_content
title: Finished level genomic sequences
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
related_pages:
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: Environmental sequence の登録
    url: /ddbj/environmental.html
  - title: Transcriptome Project のデータ登録
    url: /ddbj/transcriptome.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa.html
---

**Finished level genomic sequences (non-WGS)**

Finished level genomic sequences として登録可能な配列データ

* Finished level genomic sequencesとは、ゲノムを構成する各レプリコンの全長配列であり、レプリコンにつき、1エントリーであることが必要です。シーケンシングギャップが含まれていても構いません。一般的には、chromosome の全長配列を指します。
* 各chromosomeのエントリは、一つながりの連続した配列です。Finished level genomic sequences にはchromosomeに加えて、オルガネラやプラスミドの配列も含めることができます。
* ゲノムを構成する各エントリは、chromosome、オルガネラ、プラスミドの何れかでなければならない。また、エントリはchromosome番号が割り当てられない（unanchored など）も、Finished level genomic sequences セットの一部に含めることができます。
* 原核生物では、レプリコン単位（ゲノム及びプラスミド）の全長配列が読み取られていることが期待されます。
* 真核生物では、各chromosomeの配列にシーケンシングギャップ（セントロメア、テロメア、繰り返し配列が連続する部分などの読み取りが困難領域）を含む一つながりの配列を、Finished level として登録可能です。シーケンシングギャップ領域のアノテーションが、必須です。


<br>**データ登録の要点**
* Finished level genomic sequences の登録は [Mass Submission System (MSS)](https://www.ddbj.nig.ac.jp/ddbj/mss.html) から申し込んで下さい。
* Finished level genomic sequences の登録に先立ち、[BioProject](https://www.ddbj.nig.ac.jp/bioproject/index.html) と [BioSample](https://www.ddbj.nig.ac.jp/biosample/index.html) への登録を完了し、それらアクセッション番号をFinished level genomic sequences エントリに記載をします。
* Raw read sequences は、[DDBJ Sequence Read Archive (DRA)](https://www.ddbj.nig.ac.jp/dra/index.html)に登録可能です。アセンブリの構築に使用した run data のアクセッション番号は、 Finished level genomic sequences エントリに記載をします。
* source以外のCDS、tRNA、rRNA等の biological feature を記載する場合には、[BioSample](https://www.ddbj.nig.ac.jp/biosample/index.html) の登録時に[locus_tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html) を必ず取得して下さい。
* biological feature の記載は任意ですが、過去に登録例がない生物種のゲノムデータには、記載が必要です。

以下のサイトも併せてご覧下さい。



* [Genome Project データの登録](https://www.ddbj.nig.ac.jp/ddbj/genome.html) 
* [INSDC standards for genome assembly submission](https://www.ddbj.nig.ac.jp/ddbj/assembly.html)

<br>**DDBJ フォーマットの例**

**Finished level genomic sequences** 配列エントリの特徴



* [アクセッション番号](https://www.ddbj.nig.ac.jp/ddbj/wgs.html#AccessionA) はAccession prefix  2 文字と数字 6 桁 を基本とします。
* <span style="text-decoration:underline;">DEFINITION </span>行には以下の各項目が表示されます。
    * 原核生物では、chromosomeが1本で構成されるゲノム配列エントリの場合、全長ゲノム配列であることを示す “complete genome”が表示されます。
* 真核生物では、 一つながりの chromosomeの配列エントリにchromosome番号が表示されます。  
* <span style="text-decoration:underline;">COMMENT</span> ブロックには以下の各項目が表示されます。

<table>
  <tr>
   <td>
タグ名
   </td>
   <td>値（内容）
   </td>
  </tr>
  <tr>
   <td>Assembly Method
   </td>
   <td>アセンブルに使用したアルゴリズムの名称とバージョン
   </td>
  </tr>
  <tr>
   <td>Assembly Name
   </td>
   <td>生物名を含まないゲノムアセンブリの名称・バージョン。真核生物ゲノムの場合は必須
   </td>
  </tr>
  <tr>
   <td>Genome Coverage
   </td>
   <td>ゲノム配列決定の深度、被覆度。ゲノム全体推定塩基の被覆率として算出
   </td>
  </tr>
  <tr>
   <td>Sequencing Technology
   </td>
   <td>配列解析に使用された sequencing platform 名
   </td>
  </tr>
</table>




* 原核生物ゲノムエントリのフラットファイルの例
    * Accession:[ AP025277-AP025279](http://getentry.ddbj.nig.ac.jp/getentry/na/AP025277-AP025279/?format=flatfile&filetype=html&trace=true&show_suppressed=false&limit=10)
    * Example: Aeromonas hydrophila strain; NUITM-VA1, chromosome and plasmid
* 真核生物ゲノムエントリのフラットファイルの例
    * Accession:[ AP023152-AP023171](http://getentry.ddbj.nig.ac.jp/getentry/na/AP023152-AP023171/?format=flatfile&filetype=html&trace=true&show_suppressed=false&limit=10)
    * Example: Felis catus, chromosome genome assemblies
    * [AP023152](http://getentry.ddbj.nig.ac.jp/getentry/na/AP023152/?format=flatfile&filetype=html&trace=true&show_suppressed=false&limit=10)  chromosome A1 エントリ
