---
layout: indexed_content
title: TXSearch
category: services
lang: ja
related_pages:
  - title: ARSA ヘルプ
    url: /arsa-help.html
  - title: BLAST ヘルプ
    url: /blast-help.html
  - title: getentry ヘルプ
    url: /getentry-help.html
  - title: VecScreen ヘルプ
    url: /vecscreen-help.html
  - title: ClustalW ヘルプ
    url: /clustalw-help.html
  - title: 過去のサービス
    url: /past-services.html
  - title: 関連論文
    url: /references.html
  - title: WABI (Web API for Biology)
    url: /wabi.html
  - title: WABI BLAST ヘルプ
    url: /wabi_blast-help.html
  - title: WABI ClustalW ヘルプ
    url: /wabi_clustalw-help.html
  - title: WABI VecScreen ヘルプ
    url: /wabi_vecscreen-help.html
  - title: WABI MAFFT ヘルプ
    url: /wabi_mafft-help.html
  - title: Pipeline ヘルプ
    url: /pipeline-help.html
---

TXSearch は、DDBJ が提供する [NCBI Taxonomy](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) の検索システムです。国際塩基配列データベース([INSD]({{site.baseurl}}/aboutus/insdc.html)) にデータを登録する際には、NCBI Taxonomy に基づいた生物名の表記を使用する必要があります。

## 検索（ウェブ検索フォームから）

#### トップページ（Tree画面）：[http://ddbj.nig.ac.jp/tx_search/](http://ddbj.nig.ac.jp/tx_search/)
![トップページ]({{ site.baseurl }}/assets/images/help/txhelp01.gif)  

### 検索フォームへの入力方法

検索フォームのテキスト入力欄に検索したい名前や数字を入力し、「送信」をクリックまたはリターンキーを押します。

![検索フォームへの入力]({{ site.baseurl }}/assets/images/help/txhelp03.gif)

* 1文字のワイルドカード"?"と複数文字のワイルドカード"*"が使用できます。
- 論理演算子(AND, OR, NOT)は以下のように入力します。

  | ---- | ---- |
  |  AND  |  スペース　または AND または &&   |
  |  OR  |  OR または  |
  |  NOT  |  NOT  |

- Example を利用することもできます。

  1. 検索ボックス下の"Example" をクリックすると、いくつか簡単な例が表示されます。
  2. 例の中から１つを選んでクリックすると、検索ボックスに入力されます。
  3. 生物名やtaxonomy_id などを、検索したいものに変更します。

  ![検索フォーム Example]({{ site.baseurl }}/assets/images/help/txhelp02.gif)

- デフォルトでは以下のフィールドを検索します。

  | ---- | ---- | ---- |
  |  tax_id  |  anamorph  |  in_part  |
  |  scientific_name  |  teleomorph  |  includes  |
  |  common_name  |  authority  |  misnomer  |
  |  synonym  |  blast_name  |  misspelling  |
  |  acronym  |  equivalent_name  |  type_material  |

  特定のフィールドに限定して検索する場合には、[フィールド名を指定](#f-shitei)します。

* 結果が1000件を超える場合は最初（scientific_name で昇順）の 1000件分のみ結果を返します。この表示件数の上限を変更することはできません。<br> 結果を1000件以下にするためには、[絞り込み検索](#refine)を行ってください。

### 絞り込み検索 <a name="refine"></a>

複数フィールドの組み合わせや、フィールド名を指定して絞り込み検索を行います。 

* 結果が1000件を超える場合は最初（scientific_name で昇順）の 1000件分のみ結果を返します。この表示件数の上限を変更することはできませんので、絞り込み検索を行って1000件以下になるようにしてください。
* テキスト入力欄に solr の standard query parser parameters の q パラメータを入力することで、より詳細な検索ができます
* フィールドの指定方法<a name="f-shitei"></a><br><span class="red">フィールド名：値</span>（例　tax_id:9606)
* 複数フィールドの指定方法<br>"フィールド名：値" を論理演算子をはさんで並べます（例　scientific_name:(Homo Sapiens) && rank:species)
- 検索に使用できるフィールド名は以下の通りです

  |  検索に使用できるフィールド名  |    |
  | ---- | ---- |
  |  
  tax_id<br>scientific_name<br>common_name<br>synonym<br>acronym<br>anamorph<br>teleomorph<br>authority<br>blast_name<br>equivalent_name<br>in_part<br>includes<br>misnomer<br>misspelling<br>type_material  |  フィールド名を指定すれば絞り込み検索が可能となります。<br> フィールド名を指定しない場合、これらのフィールド全てを検索します。  |
  |  lineagerank  |  フィールド名の指定が必要です。  |

- 完全一致検索の場合には、フィールド名を以下のように指定します。

  | ---- |
  |  scientific_name_ex  |
  |  common_name_ex  |
  |  synonym_ex  |
  |  acronym_ex  |
  |  anamorph_ex  |
  |  teleomorph_ex  |
  |  authority_ex  |
  |  blast_name_ex  |
  |  equivalent_name_ex  |
  |  in_part_ex  |
  |  includes_ex  |
  |  misnomer_ex  |
  |  misspelling_ex  |
  |  type_material_ex  |

### 検索の入力例

|  入力文字列	  |  検索内容  |
| ---- | ---- |
|  human AND lineage:Mammalia   |  デフォルト検索フィールドに "human "を含み linage が Mammalia であるものを検索  |
|  human AND rank:subspecies  |  デフォルト検索フィールドに "human "を含み rank: が subspecies であるものを検索  |
|  human AND NOT(lineage:Eukaryota)	  |  デフォルト検索フィールドに "human "を含み linage が Eukaryota でないものを検索  |
|  tax_id:9606  |  tax_id が 9606 を検索  |
|  Homo Sapiens  |  デフォルト検索フィールド内で Homo (AND) Sapiens を検索  |
|  scientific_name:"Homo sapiens"  |  scientific_name が "Homo sapiens" を検索  |
|  scientific_name:(Homo sapiens)  |  scientific_name に "Homo”と "sapiens" を含むものを検索  |
|  scientific_name:Homo sapiens  |  scientific_name に"Homo" を含み、デフォルト検索フィールドに "sapiens" を含むものを検索  |
|  scientific_name_ex:"Homo sapiens"  |  scientific_name が "Homo sapiens" であるものを検索（完全一致）<br> （注意）名前にスペースが含まれる場合、前後に " （ダブルクォート） をつけることが必須です。 |
|  50000  |  デフォルト検索フィールドに "50000" を含むものを検索 ("Crinipellis sp. GDGM 50000" のように　名前に"50000" を含むものと、tax_id が "50000" の "Sarracenia alabamensis" がヒットします。どちらか一方のみを検索したい場合には、[フィールド名を指定](#f-shitei)します。）  |
|  tax_id:(741158 OR 63221)<br>または<br>tax_id:(741158 \|\| 63221) |tax_id が 741158 または 63221　を検索|  
|  scientific_name:(Acetobacter c*)	 |  scientific_name に "Acetobacter" と "C で始まる0文字以上の任意の文字列" を含むものを検索  |
|  scientific_name:(Acetobacter sp*)  |  scientific_name に "Acetobacter" と "spで始まる0文字以上の任意の文字列" を含むものを検索  |
|  tax_id:960?  |  tax_id が　960? (? は任意の１文字）を検索  |

## 検索結果

### Search Result(Taxon Information 画面)

検索フォームから検索した場合の結果表示画面です。

![検索結果]({{ site.baseurl }}/assets/images/help/txhelp04.gif)


* 指定した taxonomy id の taxon の scientific name, taxonomy id, rank, division code, genetic code, mitochondrial genetic code, scientific name 以外の name class の名前, lineage が表示されます。
* taxonomy id は [NCBI Taxonomy Browser](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) へリンクしています。
* genetic code id, mitochondrial genetic code id は [Genetic code table](/ddbj/geneticcode.html) へリンクしています。
* lineage 中の名前は、その taxon をトップにしたツリー画面へリンクしています。

### Tree 画面

Search Result/Taxon Information 画面で lineage 中の名前をクリックすると、その taxon をトップにしたツリー画面が表示されます。

![Tree 画面]({{ site.baseurl }}/assets/images/help/txhelp05.gif)

1. scientific name はTaxon Information画面へのリンク。
2. taxonomy id は [NCBI Taxonomy Browser](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) へのリンクになっています。
3. scientific name の左にある三角形のアイコンをクリックすると、その taxon の下の階層のツリーを開閉します。
4. ツリーのトップの scientific name の右にある↑をクリックすると、1階層上がったツリーを表示します。この時、表示する階層数が1つ増やされます。<br>URL 中の depth パラメータの値を変更すると表示する階層数が変更されます。

## taxonomy_id や検索語を URL に含めた表示方法

taxonomy_id や検索語を含んだ URL を指定して、検索結果を直接表示したり Taxon Information ページ、またはツリー画面にリンクを張ることができます。

### taxonomy_id をURL に含める場合

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>詳細</th>
      <th>入力例</th>
    </tr>
  </thead>
  <tbody>
    <tr id="tx_id">
      <th>id <span class="red">(必須）</span>
    </th>
      <td>検索対象の taxonomy_id を指定します。</td>
      <td>
        <ul class="disc">
          <li>taxonomy_id :9606 をツリー表示<br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/9606?view=tree">//ddbj.nig.ac.jp/tx_search/9606?view=tree</a><br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/9606">//ddbj.nig.ac.jp/tx_search/9606</a>
          </li>
          <li>taxonomy_id :63221 をTaxon Information 表示<br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/63221?view=info">//ddbj.nig.ac.jp/tx_search/63221?view=info</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr id="tx_view">
      <th>view</th>
      <td>表示画面を指定します。<br>省略した場合は ツリー画面 が指定されます。</td>
      <td>
        <ul class="disc">
          <li>taxonomy_id :63221 をTaxon Information 表示<br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/63221?view=info">//ddbj.nig.ac.jp/tx_search/63221?view=info</a>
          </li>
          <li>taxonomy_id :63221 をツリー表示<br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/63221">//ddbj.nig.ac.jp/tx_search/63221</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr id="tx_depth">
      <th>depth</th>
      <td>表示するツリーの階層数を指定します。<br>省略した場合は 2 が指定されます。</td>
      <td>
        <ul class="disc">
          <li>taxonomy_id :63221 を5 階層まで表示<br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/63221?depth=5">//ddbj.nig.ac.jp/tx_search/63221?depth=5</a>
          </li>
          <li>taxonomy_id :9606 をデフォルトの2階層表示<br>
          <a class="external" href="http://ddbj.nig.ac.jp/tx_search/9606">//ddbj.nig.ac.jp/tx_search/9606</a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 検索語をURL に含める場合

URL の指定方法
:	//ddbj.nig.ac.jp/tx_search/search?query=xxx&lang=en

（xxxの部分に検索語が入ります。）

入力例
:	* scientific_name:(Homo sapiens) の検索結果  
[//ddbj.nig.ac.jp/tx_search/search?query=scientific_name%3A%28Homo+sapiens%29&lang=en](http://ddbj.nig.ac.jp/tx_search/search?query=scientific_name%3A%28Homo+sapiens%29&lang=en)
:	* scientific_name が Homo sapiens に完全一致の検索結果  
[//ddbj.nig.ac.jp/tx_search/search?query=scientific_name_ex%3A%22Homo+sapiens%22&lang=en](http://ddbj.nig.ac.jp/tx_search/search?query=scientific_name_ex%3A%22Homo+sapiens%22&lang=en)