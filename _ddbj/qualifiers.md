---
layout: indexed_content
title: Qualifier key の定義
pathname: qualifiers
category: ddbj
current_tab: flat_file
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
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
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

DDBJ への新規登録で使用を推奨する qualifier key を以下に挙げています。 より詳しい INSDC qualifier key に関する情報は, Feature Table Definition の [7.3.1 Qualifier List](/ddbj/feature-table.html#7.3.1) をご参照ください。 

## Feature/Qualifier 対応 <a name="usage"></a>

Feature/Qualifier 対応一覧表には、DDBJ へ登録を推奨する feature と qualifier の組み合わせを示しています。

[Feature/Qualifier対応一覧表](https://drive.google.com/open?id=1D4urG81gksPJSfxlsJXeHLaUnz2VfC\\\_C)![]({{ site.baseurl }}/assets/images/parts/pdf.png "pdficon"){:.pdficon}(2018.12.20)

INSDC において記載可能な feature と qualifier の組み合わせに関しましては、[Feature Table Definition](/ddbj/feature-table.html) の [7.2 Appendix II: Feature keys reference](/ddbj/feature-table.html#7.2) をご参照ください。 

## Qualifier key の定義

allele<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#allele)</span> 
: |  定義  |  allele の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  adh1-1  |

altitude<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#altitude)</span> 
: |  定義  |  サンプルを採取した場所の地理的な高度  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  -256 m<br/>330.12 m  |
  |  備考  |  海表面を基準とした上下の高度をメートルを単位とした数値で示します。  |

anticodon<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#anticodon)</span>
: |  定義  |  [tRNA](/ddbj/features.html#tRNA)のアンチコドンの位置とコードするアミノ酸  |
  |  入力書式  |  (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;)<br/>&lt;location&gt; は anticodon の位置に相当する塩基番号を入力します。<br/>&lt;amino_acid&gt; は [Amino Acid Codes](/ddbj/code.html#amino-1), [Modified and Unusual Amino Acids](/ddbj/code.html#amino-2)のリストにある省略形を使用します。 |
  |  入力例  |  (pos:34..36,aa:Phe)<br/>(pos:join(5,495..496),aa:Leu)<br/>(pos:complement(4156..4158),aa:Gln)  |
  |  出力例  |  (pos:34..36,aa:Phe,seq:aaa)<br/>(pos:join(5,495..496),aa:Leu,seq:tag)<br/>(pos:complement(4156..4158),aa:Gln,seq:ttg)  |

artificial_location<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#artificial\\\_location)</span>
: |  定義  |  [CDS](/ddbj/features.html\\\#cds) または　[mRNA](/ddbj/features.html\\\#mRNA) の　[location](/ddbj/location.html) が frameshift または途中に出現する終止コドンを調整するために生物学的なプロセシングではない理由で補正されていることを示すフラグ  |
  |  書式  |  "heterogeneous population sequenced" または "low-quality sequence region"  |
  |  備考  |  ゲノム, transcriptome など大規模な登録において, 雑多な集団の配列決定, または, 配列の決定精度が低い場合にのみ, 使用可能です。  |

bio_material<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#bio\\\_material)</span>
: |  定義  |  配列が得られた生物材料(生きている個体・系統)の保管施設と識別子  |
  |  書式  |  [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;material_id&gt;  |
  |  例  |  CGC:CB3912 (Caenorhabditis stock centre の例)  |
  |  備考  |  &lt;material_id&gt; は必須です。<br/>保管施設としては, 動物園, 水族館, stock centre, seed bank, germplasm repository, DNA bank などが含まれます。&lt;institution_code&gt; は下記などを参照してください。<br>[institution_code list](ftp://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt)(NCBI FTP site)<br/>[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections)  |

bound_moiety<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#bound\\\_moiety)</span>
: |  定義  |  当該 feature で示される領域に結合すると推定される分子、複合体の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  GAL4  |

cell_line<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#cell\\\_line)</span>
: |  定義  |  配列の得られた cell line の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  MCF7  |

cell_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#cell\\\_type)</span> 
: |  定義  |  配列の得られた細胞のタイプ  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  leukocyte  |

chromosome<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#chromosome)</span>
: |  定義  |  配列の得られた染色体番号, あるいは, 染色体名  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  1  |

clone<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#clone)</span>
: |  定義  |  配列の得られた clone の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  lambda-hIL7.3  |

clone_lib<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#clone\\\_lib)</span>
: |  定義  |  配列の得られた clone library の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)   |
  |  例  |  lambda gt11 rice root cDNA (Gene Tech, No. 20)  |

codon_start<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#codon\\\_start)</span> 
: |  定義  |  タンパク質のコード領域がスタートコドンで始まらない場合に[読み枠の開始位置](/ddbj/cds.html#frame)を 1, 2, 3 の中から選択します。  |
  |  書式  |  1 or 2 or 3 (全角不可)  |

collected_by<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#collected\\\_by)</span> 
: |  定義  |  標本個体を採集した人物、または、団体の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  |
  |  例  |  Dan Janzen  |

collection_date<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#collection\\\_date)</span>
: |  定義  |  標本を採取した日付<br/>日時の幅を示す場合は、２つの値を slash "/" で区切って記載してください。<br/>採取した時刻を記載する場合、日付の後に "T" を付加し、続けて、時間と分を記載してください。<br/>時刻は協定世界時 (UTC) ・グリニジ平均時 "Zulu Time" (Z) で記載してください。  |
  |  Value format  |  YYYY-MM-DDThh:mm:ssZ<br/>YYYY-MM-DDThh:mmZ<br/>YYYY-MM-DDThhZ<br/>YYYY-MM-DD<br/>YYYY-MM<br/>YYYY<br/><br/>YYYY/YYYY<br/>YYYY-MM-DD/YYYY-MM-DD<br/>YYYY-MM/YYYY-MM<br/>YYYY-MM-DDThh:mmZ/YYYY-MM-DDThh:mmZ<br/><br/>'YYYY': 年号を表す４桁の数字<br/>'MM': 月を表す２桁の数字 (01 ～ 12)<br/>'DD': 日を表す２桁の数字 (01 ～ 31)<br/>'hh': 時を表す２桁の数字 (00 ～ 23)<br/>'mm': 分を表す２桁の数字 (00 ～ 59)<br/>'ss': 秒を表す２桁の数字 (00 ～ 59)  |
  |  Example  |  2015-10-11T17:53:03Z<br/>1952-10-21T11:43Z<br/>1952-10-21T11Z<br/>1952-10-21<br/>1952-10<br/>1952<br/>1952/1953<br/>1952-10-21/1953-02-15<br/>1952-10/1953-02<br/>1952-10-21T11:43Z/1952-10-21T17:43Z  |
  |  Comment  |  日付まで特定した記載 (YYYY-MM-DD) を強く推奨します。<br/><br/>INSDC では 'Mmm' (月の略記) を含む "21-Oct-1952" のような旧書式のデータが維持されており、その登録受付も可能としていますが、DDBJ では、旧書式でのデータ登録を受け付けておりません。  |

compare<span class="right-alignment">[Feature Table　Definition](/ddbj/feature-table.html#compare)</span> 
: |  定義  |  国際塩基配列データベースで公開されている比較対象  |
  |  書式  |  &lt;アクセッション番号&gt;.&lt;バージョン番号&gt;  |
  |  例  |  AB123456.1  |

country<span class="right-alignment">[Feature　Table Definition](/ddbj/feature-table.html#country)</span>
: |  定義  |  (疫学的, あるいは, 個体群研究において)配列サンプルを得た地域を 政治上の国, 大洋, または, 海, の名称で示し,続けて地方・地域を示します。  |
  |  書式  |  &lt;国名&gt;[:&lt;詳細な地名&gt;] (全角, ダブルクォーテーション ( " )  不可)  |
  |  例  |  Japan:Kanagawa, Hakone, Lake Ashi  |
  |  備考  |  国名は[国名リスト](/ddbj/country.html)から選択します。  |

cultivar<span class="right-alignment">[Feature Table　Definition](/ddbj/feature-table.html#cultivar)</span>
: |  定義  |  配列の得られた植物の栽培品種名  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Nipponbare  |

culture_collection<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#culture\\\_collection)</span>
: |  定義  |  配列の得られた培養細胞の保管施設と ID  |
  |  書式  |  &lt;institution-code&gt;:[&lt;collection-code&gt;:]&lt;culture_id&gt;  |
  |  例  |  ATCC:26370  |
  |  備考  |  &lt;institution-code&gt; と &lt;culture_id&gt; が必須です。<br />生きている微生物やウイルスの培養系, および細胞株を記載するのに用います。<br />&lt;institution_code&gt; は下記などを参照してください。<br />[institution_code list](ftp://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt)(NCBI FTP site)<br />[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections") |

db_xref<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#db\\\_xref)</span>
: |  定義  |  他のデータベース内の関連情報を示す  |
  |  書式  |  &lt;データベース名&gt;:&lt;ID&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  UniProtKB/Swiss-Prot:P28763  |
  |  備考  |  原則として、新規登録データには記載できません。<br />アノテーションの根拠として参照した場合は db_xref ではなく、[inference](#inference) を用いて記載してください。<br />データベース名には[データベースリスト](/ddbj/db_xref.html)の何れかを記載します。 |

dev_stage<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#dev\\\_stage)</span> 
: |  定義  |  配列が得られた生物の発生段階  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  fourth instar larva  |

direction<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#direction)</span>
: |  定義  |  DNA の複製開始方向  |
  |  書式  |  left, right, both の中から選択します (全角不可)  |

EC_number<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#EC\\\_number)</span>
: |  定義  |  タンパク質産物としての酵素コミッション番号  |
  |  書式  |  &lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt;  |
  |  例  |  1.1.2.4<br />1.1.2.-<br />1.1.2.n  |
  |  備考  |  "-" は番号が不明な場合, "n" は番号が未割当の場合に用います。  |

ecotype<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#ecotype)</span> 
: |  定義  |  遺伝学的に生育環境への適応を反映した表現型特性を示す種内集団  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Columbia  |

environmental_sample<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#environmental\\\_sample)</span><a name="environmental_sample"></a>
: |  定義  |  PCR, DGGE, あるいは、その他の方法で直接, 分子を単離したため、生物種が同定できない大量の環境DNAサンプルに由来した配列であることを示します。<br/>詳細は[環境サンプルの説明](/ddbj/env.html)を ご参照ください。  |
  |  書式  |  値なし  |
  |  備考  |  environmental_sample のエントリには[isolation_source](#isolation_source)も必要です。<br/>[strain](#strain) と同時には使用できません。  |

estimated_length<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#estimated\\\_length)</span>
: |  定義  |  配列内のギャップの推定長  |
  |  入力書式  |  unknown or known  |
  |  入力例  |  unknown<br/>known  |
  |  出力書式  |  unknown or &lt;整数&gt;  |
  |  出力例  |  unknown<br/>342  |

exception<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#exception)</span><a name="exception"></a>
: |  定義  |  アミノ酸翻訳の特殊な例外  |
  |  書式  |  以下から選択します<br>{::nomarkdown}<ul><li>RNA editing</li><li>reasons given in citation</li><li>rearrangement required for product</li><li>annotated by transcript or proteomic data</li></ul>{:/}  |
  |  備考  |  /exception="annotated by transcript or proteomic data" を記載する場合, その証拠になる転写産物, あるいは, タンパク質の存在を示すために [/inference qualifier](#inference)を記述する必要があります。  |

experiment<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#experiment)</span>
: |  定義  |  feature 記載の根拠となる生物学的な実験の簡単な記述  |
  |  書式  |  [CATEGORY:]&lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)<br/>CATEGORY は省略可能です。記載する場合は下記のリストから選択します。<br>{::nomarkdown}<ul><li>COORDINATES</li><li>DESCRIPTION</li><li>EXISTENCE</li></ul>{:/}  |
  |  例  |  COORDINATES: 5' and 3' RACE<br/>Northern blot<br/>heterologous expression system of Xenopus laevis oocytes  |
  |  備考  |  実験の詳細までは含めないでください。<br/>* 2005年の12月に /evidence=EXPERIMENTAL を experiment に置き換える際,<br/>/experiment="experimental evidence, no additional details recorded"<br/>が使われました。  |

focus<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#focus)</span>
: |  定義  |  配列が複数の生物種に由来する場合に, 最も注目すべき source feature であることを示します。  |
  |  書式  |  値なし  |

frequency<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#frequency)</span>
: |  定義  |  当該 feature が存在する頻度  |
  |  書式  |  &lt;観測した事例の数&gt; in &lt;調査した個体の総数&gt;,<br/>&lt;観測した事例の数&gt;/&lt;調査した個体の総数&gt;,<br/>or &lt;小数&gt;  |
  |  例  |  1 in 12<br/>23/108<br/>.85  |

function<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#function)</span>
: |  定義  |  そのfeatureで示される配列に起因する機能  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  essential for recognition of cofactor  |

gap_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#gap\\\_type)</span><a name="gap_type"></a>
: |  定義  |  genome assembly の一部において、構成要素間の連結部に位置する gap の種別  |
  |  書式  |  以下から選択します。<br>{::nomarkdown}<ul><li>between scaffolds</li><li>within scaffold</li><li>telomere</li><li>centromere</li><li>short arm</li><li>heterochromatin</li><li>repeat within scaffold</li><li>repeat between scaffolds</li><li>contamination</li><li>unknown</li></ul>{:/} |
  |  備考  |  [AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/)に従い、[assembly_gap](/ddbj/features.html#assembly_gap) feature でのみ、使用します |

gene<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#gene)</span>
: |  定義  |  配列に対応する遺伝子シンボル  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  ilvE<br /><br />入力時のご注意: [CDS](/ddbj/features.html#cds)に関してましては [遺伝子命名に関する考え方](/ddbj/cds.html#product)もご参照ください。<br>{::nomarkdown}<ul><li>遺伝子シンボルとしての略号を記載して下さい。</li><li>一般に通用する複数の略号がある場合でも複数の略号を記載しないで下さい。<br />また, そのために不必要に区切り記号を使用しないで下さい。<br />略号の複数記載を希望される場合は, 代表的な略号を gene に記載し, その他の略号を [gene_synonym](#gene_synonym) に記載してください。</li></ul>{:/} |

gene_synonym<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#gene\\\_synonym)</span>
: |  定義  |  配列に対応する遺伝子シンボル, gene, または, locus_tag で使用した記載とは別な呼称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  ilvE  |
  |  入力時のご注意  |  [CDS](/ddbj/features.html#cds) に関してましては [遺伝子命名に関する考え方](/ddbj/cds.html#product) もご参照ください。<br>{::nomarkdown}<ul><li>遺伝子シンボルとしての略号を記載して下さい。</li><li>一般に通用する複数の略号がある場合でも複数の略号を記載しないで下さい。<br/>また, そのために不必要に区切り記号を使用しないで下さい。<br/>略号の複数記載を希望される場合は, 代表的な略号を[gene](#gene) に記載し, その他の略号を gene_synonym に記載してください。</li></ul>{:/} |

germline<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#germline)</span><a name="germline"></a>
: |  定義  |  配列が適応的免疫反応の要素である体細胞ゲノム再編成を受けていないことを示します。親の germline から受け継がれ,再編成を受けていない配列であることを示します。  |
  |  書式  |  値なし  |
  |  備考  |  [rearranged](#rearranged)と同時に記載することはできません。  |

haplogroup<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#haplogroup)</span>
: |  定義  |  配列多型を共有する類似な haplotype グループの名称。haplogroup は, しばしば, 個体群移動の追跡に利用されます。  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  H*  |

haplotype<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#haplotype)</span>
: |  定義  |  同じ染色体上で連鎖する対立遺伝子の組み合わせの名称。組み換えがない場合それぞれのハプロタイプはひとつの単位として遺伝するので,集団の中での遺伝子流動を追うために使われます。  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Dw3 B5 Cw1 A1  |

host<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#host)</span>
: |  定義  |  配列決定した分子を得た生物の(実験室ではない)自然界における宿主の学名  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Homo sapiens<br/>Homo sapiens 12 years old girl  |

identified_by<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#identified\\\_by)</span>
: |  定義  |  標本個体の分類学的な同定を行った専門家の名前  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  John Burns  |

inference<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#inference)</span><a name="inference"></a>
: |  定義  |  根拠となる生物学的な実験ではない推定の構造化された記述  |
  |  書式  |  [CATEGORY:]TYPE[ (same species)][:EVIDENCE_BASIS]<br/>CATEGORY は省略可能です。記載する場合は下記のリストから選択します。<br>{::nomarkdown}<ul><li>COORDINATES</li><li>DESCRIPTION</li><li>EXISTENCE</li></ul>{:/}<br/>[TYPE] は下記のリストから選択します。<br>{::nomarkdown}<ul><li>similar to sequence</li><li>similar to AA sequence</li><li>similar to DNA sequence</li><li>similar to RNA sequence</li><li>similar to RNA sequence, mRNA</li><li>similar to RNA sequence, EST</li><li>similar to RNA sequence, other RNA</li><li>profile</li><li>nucleotide motif</li><li>protein motif</li><li>ab initio prediction</li><li>alignment</li></ul>{:/} |
  |  例  |  similar to DNA sequence:INSD:AY411252.1<br/>similar to RNA sequence, mRNA:RefSeq:NM_000041.2<br/>similar to DNA sequence (same species):INSD:AACN010222672.1<br/>profile:tRNAscan:2.1<br/>protein motif:InterPro:IPR001900<br/>ab initio prediction:Genscan:2.0<br/>alignment:Splign:1.26p:RefSeq:NM_000041.2,INSD:BC003557.1  |
  |  備考  |  [(same species)] は任意 同種との相同性により得られた推定の場合記述します。<br/>[:EVIDENCE_BASIS] は任意ですが, 参照したデータベースエントリ (Accession number と version を含む) , あるいはアルゴリズム (version を含む) を記述します。<br/> [inference の推奨例](http://www.insdc.org/documents/inference-qualifiers)<br/>* 2005年の12月に /evidence=NOT_EXPERIMENTAL を inference に置き換える際,<br/>/inference="non-experimental evidence, no additional details recorded"<br/>が使われました。 |

isolate<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#isolate)</span>
: |  定義  |  配列の得られたindividual isolate  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  SI-152<br/>DGGE: C12  |

isolation_source<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#isolation\\\_source)</span><a name="isolation_source">
: |  定義  |  配列が得られた生物学的サンプルに関する, 物理的, 環境的, かつまたは, 地理的な由来  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  rumen isolates from standard pelleted ration-fed steer #6  |

lab_host<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#lab\\\_host)</span>
: |  定義  |  配列決定した分子を得た生物を増殖させるために実験室で使われた宿主の学名  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Gallus gallus<br/>Gallus gallus embryo<br/>Escherichia coli strain DH5 alpha<br/>Homo sapiens HeLa cells  |

lat_lon<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#lat\\\_lon)</span>
: |  定義  |  配列決定したサンプルが採取された位置の地理的座標  |
  |  書式  |  d[d.dddd] &lt;N or S&gt; d[dd.dddd] &lt;W or E&gt;  |
  |  例  |  47.94 N 28.12 W<br/>45.0123 S 4.1234 E  |
  |  備考  |  小数点以下の数字は分秒ではなく小数で記載してください。  |

linkage_evidence<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#linkage\\\_evidence)</span>
: |  定義  |  [assembly_gap](/ddbj/features.html#assembly_gap) で示される連鎖の証拠。[assembly_gap](/ddbj/features.html#assembly_gap) feature で [gap_type](#gap_type) の値が "within scaffold""repeat within scaffold" あるいは "contamination" の場合のみ使用可能です。[gap_type](#gap_type) の値が "contamination" の場合、/linkage_evidence の値は "unspecified" にする必要があります。  |
  |  書式  |  以下から選択します<br>{::nomarkdown}<ul><li>align genus</li><li>align xgenus</li><li>align trnscpt</li><li>clone contig</li><li>map</li><li>paired-ends</li><li>pcr</li><li>proximity ligation</li><li>strobe</li><li>within clone</li><li>unspecified</li></ul>{:/}  |
  |  備考  |  [AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/)に従い、[assembly_gap](/ddbj/features.html#assembly_gap) feature でのみ、使用します  |

locus_tag<span class="right-alignment">[Feature Table　Definition](/ddbj/feature-table.html#locus\\\_tag)</span>
: |  定義  |  (主としてゲノムプロジェクト用に)登録者が体系的に一定な識別子を 遺伝子とその関連 feature の検索を目的として割り当てたもの  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  ABC_0022<br/>A1C_00001  |
  |  備考  |  同一の値を取る /locus_tag はエントリ内に存在しても構いませんが, それは, 同一の遺伝子に関連することを示すものであり, それ以外の場合は /locus_tag の値は一意性を確保されていなければなりません。<br/>また, [/locus_tag の値に用いる prefix は事前登録制](/ddbj/locus_tag.html)とし, INSDC 全体においても, 広く一意性を確保するように努めています。  |

macronuclear<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#macronuclear)</span>
: |  定義  |  繊毛虫などで配列が大核 (生殖核でない)に由来することを示します。  |
  |  書式  |  値なし  |

map<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#map)</span>
: |  定義  |  その feature のゲノム上の位置情報  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  8q12-q13  |

mating_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mating\\\_type)</span><a name="mating_type"></a>
: |  定義  |  配列の得られた生物の mating type を示します。原核生物, あるいは, 減数分裂による性的に二形性の配偶子を伴わない真核生物で用います (cf. [sex](#sex))。  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  MAT-1<br/>plus<br/>-<br/>odd<br/>even  |

metagenome_source<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#metagenome\\\_source)</span>
: |  定義  |  Metagenome Assembled Genome (MAG) として得られた配列、すなわち、metagenome から単一 taxon として assemble された場合に、その由来となった metagenome を記載します。  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  human gut metagenome<br />soil metagenome<br />[taxonomy database に存在する metagenome を含む値](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&amp;id=408169&amp;lvl=3&amp;keep=1&amp;srchmode=1&amp;unlock)でなければなりません。  |
  |  備考  |  metagenome_source を記載する場合は [environmental_sample](#environmental_sample) の記載が必須です。  |

mobile_element_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mobile\\\_element\\\_type)</span>
: |  定義  |  mobile_element の名称  |
  |  書式  |  &lt;mobile_element_type&gt; [:&lt;mobile_element_name&gt;]&lt;mobile_element_type&gt;は以下の規定値から何れか１つを選びます。<br>{::nomarkdown}<ul><li>transposon</li><li>retrotransposon</li><li>integron</li><li>insertion sequence</li><li>non-LTR retrotransposon</li><li>SINE</li><li>MITE</li><li>LINE</li><li>other</li></ul>{:/}  |
  |  例  |  transposon:Tnp9  |

mod_base<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mod\\\_base)</span>
: |  定義  |  修飾塩基  |
  |  書式  |  [Modified Base Abbreviation](/ddbj/code.html\\\#nucleotide-2) のリストにある省略形を使用します。  |
  |  例  |  m2g  |

mol_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mol\\\_type)</span>
: |  定義  |  生体内における分子種, 合成された分子種, あるいは予想される分子種  |
  |  書式  |  以下から適切なものを選択して記載します。 genomic DNA, genomic RNA, mRNA, tRNA, rRNA, transcribed RNA,<br/>other RNA, other DNA ,viral cRNA, unassigned DNA, unassigned RNA  |
  |  備考  |  primary entry では生体内における分子種、あるいは、合成された分子種を、TPA の場合は予想される分子種を示します。<br/><br/>{::nomarkdown}<ul><li>genomic DNA は核の DNA だけではなく, organelle, plasmid の DNA にも用います。</li><li>rRNA gene (rDNA) は rRNA ではなく genomic DNA を選びます。</li><li>mRNA を鋳型とした cDNA 配列は EST も含めて mRNA を選びます。</li><li>premature RNA を鋳型とした cDNA 配列は transcribed RNA を選びます。</li><li>人工的に改変・構築した配列の場合は, other DNA, あるいは, other RNA を選びます。</li><li>通常の RNA ウイルスでは genomic RNA を選びます。</li><li>ただし、Negarnaviricota (ssRNA negative-strand virus) では、原則、viral cRNA を選びます。<br/>viral cRNA はマイナス鎖 RNA ウイルスが子孫のゲノムを産生する際に生じるプラス鎖の鋳型を指します。<br/>ssRNA negative-strand virus 由来のゲノム配列に関しては、原則、記載を以下に統一しています。</li></ul>{:/}<br /><br />アミノ酸翻訳方向と正: viral cRNA<br/>アミノ酸翻訳方向と逆: genomic RNA  |

ncRNA_class<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#ncRNA\\\_class)</span>
: |  定義  |  タンパク質をコードしない RNA ([ncRNA](/ddbj/features.html#ncRNA)) の種別  |
  |  書式  |  &lt;TYPE&gt;  |
  |  入力例  |  miRNA<br/>siRNA  |
  |  備考  |  &lt;TYPE&gt; は [Controlled vocabulary for ncRNA classes](http://www.insdc.org/documents/ncrna-vocabulary) になければなりません。<br/>otherを選択した場合は [product](#note) に名称、[note](#note) に簡単な説明を記載してください。  |

note<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#note)</span><a name="note"></a>
: |  定義  |  自由記述の補足説明  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  | 

number<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#number)</span>
: |  定義  |  [exon](/ddbj/features.html\\\#exon),[intron](/ddbj/features.html\\\#intron) の番号  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  5a  |

old_locus_tag<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#old\\\_locus\\\_tag)</span>
: |  定義  |  ゲノムプロジェクトがfeature 検索を目的として割り当てたID  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  RSc0382  |

operon<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#operon)</span>
: |  定義  |  その featureが属している operon (1つの転写物に転写される遺伝子群) の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  lac  |

organelle<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#organelle)</span>
: |  定義  |  配列の得られたオルガネラ  |
  |  書式  |  以下のオルガネラタイプから選択します。<br>{::nomarkdown}<ul><li>mitochondrion</li><li>mitochondrion:kinetoplast</li><li>hydrogenosome</li><li>plastid:chloroplast</li><li>plastid:apicoplast</li><li>plastid:chromoplast</li><li>plastid:cyanelle</li><li>plastid:leucoplast</li><li>plastid:proplastid</li><li>plastid</li><li>chromatophore</li><li>nucleomorph</li></ul>{:/} |

organism<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#organism)</span>
: |  定義  |  配列の得られた生物の学名  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Homo sapiens  |
  |  備考  |  詳しくは, [Organism Qualifier について](/ddbj/organism.html)を参照して下さい。  |

PCR_conditions<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#PCR\\\_conditions)</span>
: |  定義  |  PCR の条件  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  Initial denaturation:94degC,1.5min  |

PCR_primers<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#PCR\\\_primers)</span>
: |  定義  |  配列を増幅するために使用されたPCR プライマー１回のPCR反応で使用したプライマーをすべて含む  |
  |  書式  |  [fwd_name: XXX1, ]fwd_seq: xxxxx1,[fwd_name: XXX2, ]fwd_seq: xxxxx2, [rev_name: YYY1, ]rev_seq: yyyyy1, [rev_name: YYY2, ]rev_seq: yyyyy2<br/><br/>例1)<br/>fwd_name: CO1P1, fwd_seq: ttgattttttggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg<br/><br/>例2)<br/>fwd_seq: tgtgtgtgtgactgaca, rev_seq: tagcgatacggtcaatgc<br/><br/>例3)<br/>fwd_name: hoge1, fwd_seq: cgkgtgtatcttact, rev_name: hoge2, rev_seq: cggtgtatcttact<br/><br/>例4)<br/>fwd_name: CO1P1, fwd_seq:ttgattttttggtcayccwgaagt, fwd_name: CO1P2, fwd_seq: gatacacaggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg"  |
  |  備考  |  fwd_seq と rev_seq は両者ともに必須, fwd_name と rev_name は任意。<br/>配列は常に 5'から3' の方向。<br/>[修飾塩基](/ddbj/code.html#nucleotide-2)は &lt;i&gt; のように&lt; &gt;で囲います。<br/>それ以外の塩基配列は <[IUPAC で決められたアルファベット](/ddbj/code.html#nucleotide-1)で記載されます。  |

plasmid<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#plasmid)</span>
: |  定義  |  配列の得られた天然のプラスミドの名称 (cloning vector を意味するものではありません)  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  C-589  |

product<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#product)</span>
: |  定義  |  feature に対応した遺伝子産物の名称, 例えば [mRNA](/ddbj/features.html#mRNA) featureには mRNA の名称, [CDS](/ddbj/features.html#cds) にはポリペプチドの名称, [mat_peptide](/ddbj/features.html#mat_peptide) には, 成熟タンパク質の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  trypsinogen (CDS feature の場合)<br/>trypsin (mat_peptide feature の場合)<br/>XYZ neural-specific transcript (mRNA feature の場合)  |
  |  入力時のご注意  |  [CDS](/ddbj/features.html#cds) に関しましては, [遺伝子命名に関する考え方](/ddbj/cds.html#product)もご参照ください。{::nomarkdown}<ul><li>原則, 略号の類ではない一般名を記載して下さい。</li><li>生物名を含めないで下さい。</li><li>一般名が複数ある場合でも, 複数の名称を記載しないで下さい。 また, そのために不必要な区切り記号を使用しないで下さい。 一般名の複数記載を希望される場合は, 代表的な名称を product に記載し, その他の名称を [note](#note) に記載して下さい。</li><li>機能, 名称等が不明な蛋白質の場合は, hypothetical protein と記載することを推奨します。</li></ul>{:/}  |

protein_id<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#protein\\\_id)</span>
: |  定義  |  翻訳される [CDS feature](/ddbj/features.html#cds) に対して国際塩基配列データベース INSDC が発行する識別子です。(登録時には入力しません)  |
  |  書式  |  &lt;identifier&gt;.&lt;version&gt;  |
  |  例  |  BAA12345.1  |
  |  備考  |  IDは３文字のアルファベットと５つの数字で構成されています。<br/>ピリオドの後の数字はその protein_id の version番号です。<br/>配列の更新などによってCDSの翻訳アミノ酸配列が変更になった場合には, protein_id は変わりませんが, version 番号が上がります。  |

proviral<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#proviral)</span>
: |  定義  |  配列が得られたウイルス,または, ファージが別の生物のゲノム内に一体化していることを示します。  |
  |  書式  |  値なし  |

pseudo<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#pseudo)</span>
: |  定義  |  記載されている feature が本来の機能を持たないことを示します。<br/>[CDS feature](/ddbj/features.html#cds) に pseudo を指定すると [translation](#translation) が出力されません。  |
  |  書式  |  値なし  |
  |  備考  |  新規登録では記載しないでください。必要な場合は [pseudogene](#pseudogene) を記載してください。  |

pseudogene<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#pseudogene)</span><a name="pseudogene"></a>
: |  定義  |  記載されている feature が pseudogene であると登録者が判断したことを示します。<br/>[CDS feature](/ddbj/features.html#cds) に pseudogene を指定すると [translation](#translation) が出力されません。  |
  |  書式  |  以下のタイプから選択します。<br>{::nomarkdown}<ul><li>processed</li><li>unprocessed</li><li>unitary</li><li>allelic</li><li>unknown</li></ul>{:/}  |
  |  備考  |  タイプの詳細 は [Controlled vocabulary for /pseudogene qualifier](http://www.insdc.org/documents/pseudogene-qualifier-vocabulary) で解説されています。  |

rearranged<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rearranged)</span><a name="rearranged"></a>
: |  定義  |  配列が適応的免疫反応の要素である体細胞ゲノム再編成を受けていることを示します。親の germline から受け継がれた後,再編成を受けた配列であることを示します。  |
  |  書式  |  値なし  |
  |  備考  |  [germline](#germline)と同時に記載することはできません。  |

regulatory_class<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#regulatory\\\_class)</span>
: |  定義  |  転写、翻訳、複製、または染色体構造に関連する調節において機能する配列領域の分類区分  |
  |  書式  |  以下のタイプから選択します。<br>{::nomarkdown}<ul><li>attenuator</li><li>CAAT_signal</li><li>DNase_I_hypersensitive_site</li><li>enhancer</li><li>enhancer_blocking_element</li><li>GC_signal</li><li>imprinting_control_region</li><li>insulator</li><li>locus_control_region</li><li>matrix_attachment_region</li><li>minus_35_signal</li><li>minus_10_signal</li><li>polyA_signal_sequence</li><li>promoter</li><li>recoding_stimulatory_region</li><li>replication_regulatory_region</li><li>response_element</li><li>ribosome_binding_site</li><li>riboswitch</li><li>silencer</li><li>TATA_box</li><li>terminator</li><li>transcriptional_cis_regulatory_region</li><li>other</li></ul>{:/} |
  |  備考  |  タイプの詳細 は [Controlled vocabulary for /regulatory_class](http://www.insdc.org/controlled-vocabulary-regulatoryclass) で解説されています。  |

replace<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#replace)</span>
: |  定義  |  比較対象の配列上でその feature の位置において置換される塩基  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  a  |

ribosomal_slippage<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#ribosomal\\\_slippage)</span>
: |  定義  |  翻訳の途中で読み枠が変わるなど ribosomal slippage が起きていることを示す  |
  |  書式  |  値なし  |
  |  備考  |  [CDS](/ddbj/features.html\\\#cds) の [location](/ddbj/location.html) で "join(486..1784,1784..4810)" などのように ribosomal_slippage の位置が示される  | 

rpt_family<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rpt\\\_family)</span>
: |  定義  |  くり返し配列タイプの名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) )  |
  |  例  |  Alu<br/>Kpn  |

rpt_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rpt\\\_type)</span>
: |  定義  |  配列のくり返し構造  |
  |  書式  |  以下から選択します。<br>{::nomarkdown}<ul><li>tandem</li><li>inverted</li><li>flanking</li><li>terminal</li><li>direct</li><li>dispersed</li><li>nested</li><li>long_terminal_repeat</li><li>non_ltr_retrotransposon_polymeric_tract</li><li>x_element_combinatorial_repeat</li><li>y_prime_element</li><li>telomeric_repeat</li><li>centromeric_repeat</li><li>other</li></ul>{:/} |
  |  備考  |  規定値の詳細は [Controlled vocabulary for /rpt_type qualifier](http://www.insdc.org/controlled-vocabulary-rpttype-qualifier) に解説があります。  |

rpt_unit_seq<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rpt\\\_unit\\\_seq)</span>
: |  定義  |  くり返し単位の配列  |
  |  書式  |  &lt;text&gt;; acgtmrwsykvhdbn0123456798() のみ可  |
  |  例  |  aagggc<br/>ag(5)tg(8)<br >(aaaga)6(aaaa)1(aaaga)12  |

satellite<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#satellite)</span>
: |  定義  |  satellite DNA マーカーの識別子; 同一, あるいは, 関連した短い配列単位が多数, 直列に繰り返している構造を指します。  |
  |  書式  |  &lt;satellite_type&gt;[:&lt;class&gt;][ &lt;identifier&gt;]  |
  |  例  |  satellite: S1a<br/>satellite: alpha<br/>satellite: gamma III<br/>microsatellite: DC130  |
  |  備考  |  &lt;satellite_type&gt;は必須であり, 下記の３つから何れかを記載します。<br>{::nomarkdown}<ul><li>satellite</li><li>microsatellite</li><li>minisatellite</li></ul>{:/} |

segment<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#segment)</span>
: |  定義  |  配列の得られた virus または phage のセグメント  |
  |  書式  |  &lt;text&gt; (全角,ダブルクォーテーション ( " ) 不可)  |
  |  例  |  6  |

serotype<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#serotype)</span>
: |  定義  |  配列の得られた生物、ウイルスなどの血清学的タイプ  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  B1  |

serovar<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#serovar)</span>
: |  定義  |  (一般に原核生物で)抗原特性により分類される血清学的変種  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  O157:H7  |

sex<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sex)</span><a name="sex"></a>
: |  定義  |  配列の得られた生物の性別を示します。減数分裂と性的に二形性の配偶子を伴う真核生物において用います(cf. [mating_type](#mating_type))。  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  female<br/>male<br/>hermaphrodite<br/>monoecious<br/>dioecious  |

specimen_voucher<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#specimen\\\_voucher)</span>
: |  定義  |  配列の得られた標本(動植物個体の一部 または 全体)が維持管理されている管理団体とＩＤ  |
  |  書式  |  [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;specimen_id&gt;  |
  |  例  |  UAM:Mamm:52179<br/>AMCC:101706<br/>USNM:field series 8798<br/>personal:Dan Janzen:99-SRNP-2003  |
  |  備考  |  &lt;collection_code&gt; が存在しない場合は記載不要です。<br/>&lt;institution_code&gt; は下記などを参照してください。<br/>[institution_code list](ftp://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt) (NCBI FTP site)<br/>[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections)  |

strain<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#strain)</span><a name="strain"></a>
: |  定義  |  配列の得られた strain の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) )  |
  |  例  |  BALB/c  |

sub_clone<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sub\\\_clone)</span>
: |  定義  |  配列の得られた sub-clone の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  lambda-hIL7.20g  |

submitter_seqid<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#submitter\\\_seqid)</span>
: |  定義  |  [TSA](/ddbj/tsa.html), [TLS](/ddbj/tls.html), [WGS](/ddbj/wgs.html), [CON](/ddbj/con.html) におけるセット内で一意な識別子  |
  |  書式  |  &lt;text&gt;<br/>全角, ダブルクォーテーション ( " ), パイプ ( | ), イコール ( = ), 角括弧 ( [ ] ), 引用符 ( &gt; ) スペース 不可  |
  |  例  |  contig53<br/>scaffold25  |

sub_species<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sub\\\_species)</span>
: |  定義  |  配列の得られた生物の　subspecies の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  troglodytes  |

sub_strain<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sub\\\_strain)</span>
: |  定義  |  配列の得られた遺伝学的あるいは他の方法で改変された sub-strain の名称。<br/>その親に当たる strain は [strain](#strain) qualifier に記載されます。  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  abis  |
  |  備考  |  strain が不明な場合は sub_strain は使わず strain に記載します。<br>{::nomarkdown}<ul><li>通常の例: /strain="K-12", /sub_strain="MG1655"</li><li>strain が不明な例: /strain="MG1655"</li></ul>{:/} |

tag_peptide<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#tag\\\_peptide)</span>
: |  定義  |  タンパク質分解の標的となる [tmRNA](/ddbj/features.html\\\#tmRNA) のコードするペプチドタグとその終止コドンの塩基位置  |
  |  書式  |  &lt;base_range&gt;  |
  |  例  |  90..122  |

tissue_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#tissue\\\_type)</span>
: |  定義  |  配列の得られた組織の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  brain  |

trans_splicing<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#trans\\\_splicing)</span>
: |  定義  |  成熟 RNA の形成の過程で異なる RNA 分子の exon が結合することを示します。  |
  |  書式  |  値なし  |
  |  備考  |  [CDS](/ddbj/features.html\\\#cds),[mRNA](/ddbj/features.html\\\#mRNA) などの　[location](/ddbj/location.html) で join(complement(69611..69724),139856..140087) などのように trans splicing が起きていることが示されます。  |

transgenic<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#transgenic)</span>
: |  定義  |  外来 DNA が組み込まれた形質転換生物由来の配列であることを示します。  |
  |  書式  |  値なし  |

transl_except<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#transl\\\_except)</span><a name="transl_except"></a>
: |  定義  |  塩基配列上の特定の位置において [CDS](/ddbj/features.html#cds) の翻訳が [transl_table](#transl_table) で指定されたコドン暗号表に従わない場合, 翻訳例外がある場合などに入力します。  |
  |  書式  |  (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;) &lt;amino_acid&gt;は [Amino Acid Codes](/ddbj/code.html#amino-1), [Modified and Unusual Amino Acids](/ddbj/code.html#amino-2) のリストにある省略形を使用します。  |
  |  例  |  1. 特定の位置で翻訳例外がある場合<br/>/transl_except=(pos:213..215,aa:Sec)<br/>213番目から215番目が例外的に selenocysteine (一文字表記ではU) に翻訳されます。<br/><br/>2. polyadenylation により stop codon になる場合<br/>/transl_except=(pos:1017,aa:TERM)<br/>/transl_except=(pos:2000..2001,aa:TERM)<br/>1017番目のt, あるいは2000, 2001番目の ta の3'側に a が付加されることにより taa stop codon となる<br/><br/>3. [Amino Acid Codes](/ddbj/code.html#amino-1), [Modified and Unusual Amino Acids](/ddbj/code.html#amino-2) で定義されないアミノ酸に翻訳される場合<br/>/transl_except=(pos:213..215,aa:OTHER)<br/>/note="unusual amino acid"<br/>213番目から215番目が note qualifier に記載されたアミノ酸に例外的に翻訳される  |

transl_table<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#transl\\\_table)</span><a name="transl_table"></a>
: |  定義  |  genetic code, コドン暗号表の番号  |
  |  書式  |  &lt;整数&gt; (1 - 6, 9 - 14, 16, 21 - 31)  |
  |  例  |  11  |
  |  備考  |  [CDS](/ddbj/features.html#cds) の [translation](#translation) は transl_table で指定されたコドン暗号表に従って自動的にアミノ酸翻訳されます<br/> * [transl_except](#transl_except), [exception](#exception) が指定されている場合は除きます。<br/>国際塩基配列データベースで使用するコドン暗号表は taxonomy database: [The Genetic Codes](/ddbj/geneticcode.html) で規定されています。<br/>transl_table が入力されていない場合には, 自動的に Standard code (/transl_table=1) によって翻訳されます。  |
  |  入力方法  |  塩基配列登録システムの場合<br/>通常は, 自動的にその生物名に対応した transl_table をセットしますので選択する必要はありません。<br/>Taxonomy database に登録されていない生物名の場合は、transl_table がおわかりでしたら genetic code の項目に入力してください。各[CDS](/ddbj/features.html#cds) feature の transl_table に反映されます。<br/><br/>MSS の場合<br/>コドン暗号表の番号を適切に入力して下さい。  |

translation<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#translation)</span><a name="translation"></a>
: |  定義  |  [CDS](/ddbj/features.html#cds) のアミノ酸翻訳配列<br/>[Amino Acid Codes](/ddbj/code.html#amino-1) のリストにある１文字表記を使用します。<br/>その他のアミノ酸の場合は全て X で表記されます。<br/>[exception](#exception) qualifier が入力された場合を除き、入力された [CDS feature の情報を基に自動翻訳](/ddbj/cds.html#translation)しますので、登録の際は記載不要です。  |
  |  例  |  MERRYCHRISTMASANDHAPPYNEWYEAR  |

variety<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#variety)</span>
: |  定義  |  配列の得られた variety (変種 = varietas; 亜種の下位ランク) の名称  |
  |  書式  |  &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)  |
  |  例  |  insularis  |
