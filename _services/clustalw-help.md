---
layout: indexed_content
title: ClustalW ヘルプ
service_link:
  en: http://clustalw.ddbj.nig.ac.jp/index.php?lang=ja
  ja: http://clustalw.ddbj.nig.ac.jp/index.php?lang=en
pathname: clustalw-help
category: search_analysis
description:
  en: DMultiple alignment and tree-making
  ja: 塩基・アミノ酸配列の多重整列と系統樹作成
affiliation: DDBJ
tags:
  - analysis
---

ClustalW は，DNA配列やタンパク質配列の多重整列のためのツールです。<br>DDBJ では，通常版（最新バージョン）と DDBJ拡張版(Version 1.83, Modified by Dr. Kirill Kryukov) を提供しています。

## Version

"2.1" （ClustalW の最新版），または"1.83"（Dr. Kirill Kryukov　改訂のDDBJ オリジナル） の何れかを選択してください。　デフォルトは　"2.1" です。  
"1.83"　を選択すると、系統樹作成・BOOTSTRAP の詳細なオプションの指定が可能になります。 

## 配列

### 配列の種類の選択
DNA/Protein の何れかを選択すると，それぞれの詳細なオプションを選択できます。デフォルトは Protein です。 

### 配列の入力

データを直接テキストボックスに入力するか，データを格納したファイルを指定（ファイルアップロード機能）します。各配列にはタイトル名が必要です。

[利用可能な配列データの記述形式](//www.ebi.ac.uk/Tools/msa/clustalw2/help/index.html#step1)
:   NBRF-PIR
:   EMBL-SWISSPROT
:   Pearson (Fasta)
:   Clustal (*.aln)
:   GCG-MSF (Pileup)
:   GCG9-RSF
:   GDE

配列の入力例（FASTA 形式）
:
```
>my_query_sequence_1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
>my_query_sequence_2
GGCCAGGGCACCCAGTCTGAGAACAGCTGCACCCGCTTCCCAGGCAACCTGCCTCACATG
CTTCGAGACCTCCGAGATGCCTTCAGCAGAGTGAAGACTTTCTTTCAAATGAAGGATCAG
CTGGACAACATATTGTTAAAGGAGTCCTTGCTGGAGGACTTTAAG
>my_query_sequence_3
ATGGGTCTCACCTCCCAACTGCTTCCCCCTCTGTTCTTCCTGCTAGCATGTGCCGGCAAC
TTTGCCCACGGACACAACTGCCATATCGCCTTACGGGAGATCATCGAAACTCTGAACAGC
CTCACAGAGCAGAAGACTCTGTGCACCAAGTTGACCATAACGGAC
```

タイトル名は、">" 以降の文字列から、最初のスペース以前の文字列までです。スペースが無い場合は、">" 以降の文字列から行末までとなります。
        同一タイトル名の配列が複数存在する場合はエラーとなります。

## Pairwise Alignment のパラメータの指定

### Alignment のタイプ

アライメントに使用するアルゴリズムを選択します。デフォルトは Slow です。

|  表示  |    |
| ---- | ---- |
|  slow  |  精度の高い alignment の作成に適していますが処理速度が遅いため，比較的短い配列の解析用です  |
|  fast  |  データ処理速度に優れたアルゴリズムであり，長大な配列を解析する場合に適しています  |      

### Slow/Fast Pairwise Alignment のオプション

DNA /Protein  Weight Matrix
:   塩基置換行列表/アミノ酸置換行列表を指定します。デフォルトは Protein の場合は Gonnet ，DNAの場合はIUBです。

|  Protein&nbsp;Weight&nbsp;Matrix  |    |
| ---- | ---- |
|  Gonnet  |  このmatrix は Dayhoff と同じ手法で導かれたものですが，（Dayhoffマトリックスが作成されたときに用いられたデータセットと比較して）はるかに大きなデータセットの比較に基づいて作成され，配列間で相同なアミノ酸をより整列しやすくされています。  |
|  BLOSUM  |  相同性検索を行なう際に最も広く用いられています。  |
|  PAM  |  この行列は1970年代後半以来，極めて広く使われています。Dayhoff's matrix とも呼ばれています。  |
|  ID  |  同一のアミノ酸には 1 を，異なるアミノ酸には 0 を与えます。  |


|  DNA&nbsp;Weight&nbsp;Matrix  |    |
| ---- | ---- |
|  IUB  |  プログラム BESTFIT で塩基配列の比較においてデフォルトで用いられているスコア行列で，XやNはIUBの曖昧表記に対してマッチしているとして扱われます。マッチのスコアは1.9，ミスマッチのスコアは0です。  |
|  ClustalW  |  以前ClustalWで使用されていたスコア行列です。<br> マッチのスコアは1.0，ミスマッチのスコアは0です。IUBの曖昧表記に対するマッチのスコアは0です。|

GAP OPEN
:   Gap（挿入・欠失）開始時の Gap penalty を指定します。デフォルトは&nbsp;10.0&nbsp;です。

GAP EXTENSION
:   Gap（挿入）継続時の Gap penalty を指定します。デフォルトは&nbsp;0.1&nbsp;です。

KTUP (WORD SIZE)
:   Fast algorithm で計算する際の word size を指定します。デフォルトは&nbsp;1&nbsp;です。

WINDOW LENGTH
:   Fast algorithm で計算する際の window size を指定します。デフォルトは&nbsp;5&nbsp;です。

SCORE TYPE
:   スコアの表示方法を指定します。デフォルトは&nbsp;percent&nbsp;です。percentの値は, absolute 出力値を配列長(比較する2配列のうち, 配列長が大きい値)で割り, 100を乗じた値です。

TOPDIAG
:   Fast algorithm で計算する際の top diagonals の数を指定します。デフォルトは &nbsp;5&nbsp;です。

PAIRGAP
:   Fast algorithm で計算する際の gap penalty を指定します。デフォルトは&nbsp;3&nbsp;です。

## Multiple Alignment のパラメータの指定

### alignment のオプションを指定します

DNA&nbsp;/Protein&nbsp;Weight&nbsp;Matrix
:   塩基置換行列表/アミノ酸置換行列表を指定します。デフォルトは Protein の場合は&nbsp;Gonnet&nbsp; ，DNAの場合は&nbsp;IUB&nbsp;です。

|  Protein&nbsp;Weight&nbsp;Matrix  |    |
| ---- | ---- |
|  Gonnet  |  このmatrix は Dayhoff と同じ手法で導かれたものですが，より大きいサイズのデータセットを元にした新しい手法で，Dayhoff よりも感度が良いとされています。  |
|  BLOSUM  |  相同性検索を行なう際に最も広く用いられています。  |
|  PAM  |  この行列は 1970 年代後半以来，極めて広く使われています。Dayhoff's matrix とも呼ばれています。  |
|  ID  |  同一のアミノ酸には 1 を，異なるアミノ酸には 0 を与えます。  |

|  DNA&nbsp;Weight&nbsp;Matrix  |    |
| ---- | ---- |
|  IUB  |  プログラムBESTFITで塩基配列の比較においてデフォルトで用いられているスコア行列で，XやNはIUBの曖昧表記に対してマッチしているとして扱わます。マッチのスコアは1.9，ミスマッチのスコアは0 です。 |
|  ClustalW  |  以前ClustalWで使用されていたスコア行列です。マッチのスコアは1.0，ミスマッチのスコアは0です。IUBの曖昧表記に対するマッチのスコアは0です。                   |

GAP OPEN
:   Gap 開始時の Gap penalty を指定します。デフォルトは&nbsp;10.0&nbsp;

GAP EXTENSION 
:   Gap 継続時の Gap penalty を指定します。デフォルトは&nbsp;0.2&nbsp;です。

GAP DISTANCES 
:   Gap間の距離が指定された値より小さいときにpenaltyをかけます。デフォルトは&nbsp;5&nbsp;です。

NO END GAPS
:   端のGapについてはGAP DISTANCESのpenaltyをかけないようにします。デフォルトは&nbsp;no&nbsp;です。

|  表示  |    |
| ---- | ---- |
|  no  |  penalty をかけない  |
|  yes  |  penalty をかける  |

ITERATION
:   Iteration アルゴリズムで　アライメントを改良するかどうかを指定します。デフォルトは&nbsp;none&nbsp;です。

|  表示  |    |
| ---- | ---- |
|  none  |  iteration を行いません  |
|  tree  |  アライメントの各段階でiterationを行います  |
|  alignment  |  最終的に得られたアライメントにのみiterationを行います  |

NUMITER
:   反復回数の最大値を示します。デフォルトは&nbsp;1&nbsp;です。

CLUSTERING
:   Clustering のタイプを指定します。デフォルトは&nbsp;NJ&nbsp;です。

|  表示  |    |
| ---- | ---- |
|  NJ  |  Neighbour-joining (Saitou and Nei 1987) 法  |
|  UPGMA  |  Unweighted Pair-Group Method with Arithmatic mean 法  |

### 出力のオプションを指定します

Format
:   Multiple&nbsp;alignmentの出力形式を指定します。デフォルトは &nbsp;Aln w/numbers&nbsp;です。

| 表示             |                                |
| -------------- | --------------------------------
| Aln w/numbers  | 塩基/アミノ残基の番号を表示させたClustalW 標準出力形式
| Aln wo/numbers | 塩基/アミノ残基の番号非表示のClustalW 標準出力形式  
| GCG MSF        | GCG MSF形式                       
| PHYLIP         | PHYLIP パッケージで利用可能な出力形式          
| NEXUS          | NEXUS形式                         
| NBRF/PIR       | NBRF/PIR 形式                     
| GDE            | GDE 形式                          
| Pearson/FASTA  | Pearson / FASTA　形式   

Order
:   Alignment 出力結果で，出力する配列の順番を指定します。デフォルトは&nbsp;aligned&nbsp;です。

|  表示  |    |
| ---- | ---- |
|  aligned  |  Alignment の順番で配列を出力します。  |
|  input  |  入力された配列の順番で配列を出力します。    |

## DDBJ 拡張版(Version 1.83, Modified by Dr. Kirill Kryukov) のオプション

### 系統樹作成・BOOTSTRAP のオプションの指定

Distance
:   系統樹計算時に使用する&nbsp;correction&nbsp;を指定します。デフォルトは &nbsp;Kimura&nbsp;です。PROTEINの場合は&nbsp;Kimura&nbsp;と&nbsp;p-distance&nbsp;のみ指定可能です。<span class="red">＊</span>のオプションは&nbsp;DDBJ&nbsp;オリジナルオプションです。

[系統樹の作成について](#tree)

|  塩基置換推定法  |  塩基置換モデル	  |  説明  |
| ---- | ---- | ---- |
|  Kimura  |  {::nomarkdown}<table><tr><td></td><td>T</td><td>C</td><td>A</td><td>G</td></tr><tr><td>T</td><td>-</td><td>α</td><td>β</td><td>β</td></tr><tr><td>C</td><td>α</td><td>-</td><td>β</td><td>β</td></tr><tr><td>A</td><td>β</td><td>β</td><td>-</td><td>α</td></tr><tr><td>G</td><td>β</td><td>β</td><td>α</td><td>-</td></tr></table>{:/}  |  トランジションとトランスバージョンの速度が異なると仮定して推定された塩基置換数  |
|  p-distance  |  入力された配列の順番で配列を出力します。  |  相違座位の割合  |
|  Jukes-Cantor<span class="red">＊</span>	  |  {::nomarkdown}<table><tr><td></td><td>T</td><td>C</td><td>A</td><td>G</td></tr><tr><td>T</td><td>-</td><td>α</td><td>α</td><td>α</td></tr><tr><td>C</td><td>α</td><td>-</td><td>α</td><td>α</td></tr><tr><td>A</td><td>α</td><td>α</td><td>-</td><td>α</td></tr><tr><td>G</td><td>α</td><td>α</td><td>α</td><td>-</td></tr></table>{:/}  |  全ての種類の塩基置換が同じ速度で生じると仮定して推定された塩基置換数  |
|  Tamura<span class="red">＊</span>	  |  {::nomarkdown}<table><tr><td></td><td>T</td><td>C</td><td>A</td><td>G</td></tr><tr><td>T</td><td>-</td><td>κπ<sub>GC</sub></td><td>1-π<sub>GC</sub></td><td>π<sub>GC</sub></td></tr> <tr><td>C</td><td>κ(1-π<sub>GC</sub>)</td><td>-</td><td>1-π<sub>GC</sub></td><td>π<sub>GC</sub></td></tr> <tr><td>A</td><td>1-π<sub>GC</sub></td><td>π<sub>GC</sub></td><td>-</td><td>κπ<sub>GC</sub></td></tr> <tr><td>G</td><td>1-π<sub>GC</sub></td><td>π<sub>GC</sub></td><td>κ(1-π<sub>GC</sub>)</td><td>-</td></tr></table>{:/}  |  トランジションとトランスバージョンの速度が異なると仮定し、さらに GC 含量の平衡速度も考慮して推定された塩基置換数  |
|  Tajima-Nei<span class="red">＊</span>	  |   {::nomarkdown}<table><tr><td></td><td>T</td><td>C</td><td>A</td><td>G</td></tr><tr><td>T</td><td>-</td><td>απ<sub>C</sub></td><td>απ<sub>A</sub></td><td>απ<sub>G</sub></td></tr> <tr><td>C</td><td>απ<sub>T</sub></td><td>-</td><td>απ<sub>A</sub></td><td>απ<sub>G</sub></td></tr> <tr><td>A</td><td>απ<sub>T</sub></td><td>απ<sub>C</sub></td><td>-</td><td>απ<sub>G</sub></td></tr> <tr><td>G</td><td>απ<sub>T</sub></td><td>απ<sub>C</sub></td><td>απ<sub>A</sub></td><td>-</td></tr></table>{:/}  |  塩基の平衡頻度を考慮して推定された塩基置換数  |
|  Gojobori-Ishii-Nei<span class="red">＊</span>	  |   {::nomarkdown}<table><tr><td></td><td>T</td><td>C</td><td>A</td><td>G</td></tr> <tr><td>T</td><td>-</td><td>β</td><td>γ</td><td>β</td></tr> <tr><td>C</td><td>α</td><td>-</td><td>α</td><td>δ</td></tr> <tr><td>A</td><td>ε</td><td>β</td><td>-</td><td>β</td></tr> <tr><td>G</td><td>α</td><td>ζ</td><td>α</td><td>-</td></tr></table>{:/}  |  GC と TA 間で速度が異なり、他の置換については全て速度が異なると仮定して推定された塩基置換数  |
|  Tamura-Nei<span class="red">＊</span>  |  {::nomarkdown}<table><tr><td></td><td>T</td><td>C</td><td>A</td><td>G</td></tr><tr><td>T</td><td>-</td><td>α<sub>2</sub>π<sub>C</sub></td><td>βπ<sub>A</sub></td><td>βπ<sub>G</sub></td></tr><tr><td>C</td><td>α<sub>2</sub>π<sub>T</sub></td><td>-</td><td>βπ<sub>A</sub></td><td>βπ<sub>G</sub></td></tr><tr><td>A</td><td>βπ<sub>T</sub></td><td>βπ<sub>C</sub></td><td>-</td><td>α<sub>1</sub>π<sub>G</sub></td></tr><tr><td>G</td><td>βπ<sub>T</sub></td><td>βπ<sub>C</sub></td><td>α<sub>1</sub>π<sub>A</sub></td><td>-</td></tr></table>{:/}  |  トランジションとトランスバージョンの速度が異なるだけでなく、トランジションの速度も TC と AG 間で異なると仮定し、さらに塩基の平衡頻度を考慮して推定された塩基置換数  |

|{::nomarkdown}<ul id="disc"><li>α, α<sub>1</sub>, α<sub>2</sub> ,β, γ, δ, ε, ζ, κ : 塩基置換速度</li><li>π<sub>T</sub>, π<sub>C</sub>, π<sub>A</sub>, π<sub>G</sub>, π<sub>GC</sub> : 平衡塩基頻度</li></ul>{:/}|   |   |

TOSSGAPS
:   系統樹計算時に gap を無視するかを指定します。デフォルトは **ON** (gap を無視する) です。

OUTPUTTREE 
:   系統樹計算結果の出力フォーマットを指定します。デフォルトは **phylip** です。

COUNT 
:   bootstrap の実行回数を指定します。デフォルトは **1000** です。指定できる範囲は 1-10000 です。

SEED 
:   bootstrap の実行時の seed 数を指定します。デフォルトは **111** です。指定できる範囲は 1-1000 です。

系統樹の作成について<a name="tree"></a>
:   複数の塩基配列あるいはアミノ酸配列を用いた系統樹の作成法としては、まず配列の全ての可能な組み合わせについて進化的距離（塩基置換数やアミノ酸置換数）を計算して距離行列を作成し、距離行列に最も適合するような系統樹を選び出す、いわゆる距離行列法や、配列を直接比較して、仮定された塩基置換やアミノ酸置換のパターンに最も適合するような系統樹を選び出す、いわゆる形質状態法などがあります。

:   CLUSTALWでは、距離行列法の一種である近隣結合法（NJ法）を用いて系統樹が作成されます。配列が塩基配列の場合、配列間の進化的距離としては塩基置換数が用いられますが、その計算方法は、p distance法、Kimuraの方法、Tamuraの方法、Tajima-Neiの方法、Gojobori-Ishii-Neiの方法、Tamura-Neiの方法などがあります。これらの方法は、塩基置換数の計算の際に仮定される塩基置換パターン（モデル）が異なっています。

:   一般に、塩基のT（U）とCはピリミジン、AとGはプリンという化学的構造を持ち、それぞれ物理化学的性質が似ていて、実際にTC間やAG間の置換（トランジション）はその他の置換（トランスバージョン）よりも頻繁に生じることが分かっています。また、生物種によって、GC含量などゲノムの塩基組成が異なるので、塩基置換の頻度は置換先の塩基の平衡頻度の影響を受けると考えられます。その他、生物学的なさまざまな要因によってそれぞれの塩基置換（T -> C、A -> Gなど）の速度は異なると考えるのが現実的です。

:   このように、生物の塩基配列の進化（変化）は非常に複雑なので、塩基置換数推定の際に仮定される塩基置換パターンも、より複雑な方が真の値に近い推定値が得られると考えられますが、一方、パターンを複雑にすればするほど、推定しなければならないパラメーター（αやβなど）の数も増加し、推定値の分散（標準誤差）が増大していきます。パラメーターの値は配列データから推定されるため、推定値の精度は配列数や塩基長、配列間の変異度に依存します。そのため、解析に用いるのに最適な塩基置換パターンは、解析される配列によって異なり、それを判定するための方法も存在しています。

:   CLUSTALWで用いられる塩基置換数推定法のデフォルト値はKimuraの方法ですが、これは非常に広く用いられている方法です。ただし、実際に解析している配列に合った塩基置換パターンがKimuraのモデルと異なる場合などには、誤った結果が得られることも考えられます。そのような場合は、DDBJオリジナルオプションとしていくつか異なった方法も用意してありますので、そちらを使用してみてもいいかもしれません。

:   アミノ酸配列間の進化的距離を推定する際も同様に、CLUSTALWではp distance法とKimuraの方法（塩基置換数推定法のKimuraの方法とは全く異なります）が利用可能であり、Kimuraの方法がデフォルト値となっています。必要に応じてp distance法も使用してみてください。


## 解析結果画面の見方

### ClustalW 解析結果

1. 解析結果
:   ![解析結果]({{ site.baseurl }}/assets/images/help/clustalw_01.gif)

2. Multiple Alignment の結果
:   ![Multiple Alignment の結果]({{ site.baseurl }}/assets/images/help/clustalw_02.gif)

3. Guide Tree
:   ![Guide Tree]({{ site.baseurl }}/assets/images/help/clustalw_03.gif)

4. BOOTSTRAP 計算結果
:   ![BOOTSTRAP 計算結果]({{ site.baseurl }}/assets/images/help/clustalw_04.gif)

<span class="red">（注意）</span>2012年4月より，全ての解析時に BOOTSTRAP の計算を実行します。ただし，入力フォームで[FORMAT] と [CLUSTERING] の選択が以下の様な組み合わせのときには .phb ファイルは作成されません。

|  [FORAMT]  |  [CLUSTERING]  |
| ---- | ---- |
|  PHYLIP  |  NJ  |
|  NEXUS  |  NJ  |
|  PHYLIP  |  UPGMA   |
|  NEXUS  |  UPGMA   |

(5)系統樹作成
:   ダウンロードしたファイルから系統樹を作成するには，系統樹作成ソフト (例 TreeView X や MEGA など)を利用してください。

### 検索結果表示と保存期間

検索結果は Request ID を入れた，下記の URL で表示できます。  
Request ID は，入力内容送信後の画面に表示されます。問い合わせ等の場合にも必要になりますので，必ず控えておいてください。  
URLが他人に知られると他人に解析結果が分かってしまうため，ご注意ください。

//clustalw.ddbj.nig.ac.jp/cgi-bin/clustalwr.cgi?id=**Request ID**&output=aln1 

## ClustalW について

* このプログラムは：ClustalW2.1
* 参考文献
  * Larkin MA, Blackshields G, Brown NP, Chenna R, McGettigan PA, McWilliam H, Valentin F, Wallace IM, Wilm A, Lopez R, Thompson JD, Gibson TJ, Higgins DG. (2007). Clustal W and Clustal X version 2.0. Bioinformatics, 23, 2947-2948. 
  * Chenna R, Sugawara H, Koike T, Lopez R, Gibson TJ, Higgins DG, Thompson JD. (2003) Multiple sequence alignment with the Clustal series of programs. Nucleic Acids Res. 31(13):3497-500.
  * Thompson JD, Higgins DG, Gibson TJ. (1994) CLUSTAL W: improving the sensitivity of progressive multiple sequence alignment through sequence weighting, position-specific gap penalties and weight matrix choice. Nucleic Acids Res. 22(22):4673-80.