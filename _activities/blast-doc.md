---
layout: indexed_content
title: 相同性検索プログラムBLASTの内部構造
pathname: blast-doc
category: _activities
lang: ja
related_pages:
  - title: DDBJ スタッフの論文 (2009-)
    url: /activities/papers.html
  - title: DDBJ スタッフの出版物（2009-）
    url: /activities/presentations.html
  - title: DDBJ スタッフの講演発表（2009-）
    url: /activities/past-presentations.html
  - title: 国際実務者会議報告一覧
    url: /activities/icm-reports.html
  - title: DDBJ スタッフの論文 (1996-2008)
    url: /activities/past-papers.html
  - title: DDBJ スタッフの講演発表（2001-2006）
    url: /activities/past-presentations.html
  - title: DDBJ の塩基配列解析ツールについて
    url: /column/ddbjpipeline.html
  - title: DDBJ スタッフの出版物（1996–2008）
    url: /activities/past-publications.html
  - title: DDBJ アノテータの業務紹介
    url: /column/annotator.html
  - title: 「ユーザーの皆様へ，お願いです！」
    url: /column/request.html
  - title: DDBJ での特許関連配列データの公開業務の紹介
    url: /column/patent.html
  - title: DDBJ スタッフコラム
    url: /column/staffcolumn.html
  - title: 遺伝子とゲノム
    url: /column/genegenome.html
  - title: 進化ゲノム学とは
    url: /column/introevog.html
  - title: FASTAとBLASTについて
    url: /column/homology_doc.html
  - title: DDBJ Annual Report
    url: /activities/annualreport.html
  - title: 発行物アーカイブ
    url: /archives/pub-archives.html
  - title: DDBJ Mail Magazine
    url: /subscribe.html
  - title: DDBJ データ解析チャレンジ
    url: /activities/ddbj-challenge.html
---

　ＤＮＡの塩基配列やタンパク質のアミノ酸配列の決定が一般的になった現在では，新たに決めた配列と相同性の高い配列をデータベース中で発見することが，分子の機能や構造，そして分子進化を考える上で，ますます重要になっています。この相同性検索のための強力なツールが，Altschulら（1990）によって開発されたBLAST（Basic Local Alignment Search Tool）です。ここでは，BLASTのプログラムの原理と実際の作業手順について，簡単に紹介します。

## 何を探すのか <a name="何を探すのか"></a>

最初に，相同性（homology）の概念について解説します。単に相同性と言っても，様々です。２本の配列を比較したときに，連続した５個のアミノ酸のみが完全に一致している場合も「相同」と言うことができますし，数百個のアミノ酸のうち２０％程度が一致している場合も「相同」と呼ぶことができます。そこで，前者の例を局地的相同性（local homology），後者の例を全体的相同性（global homology）と呼んで区別します。つまり，局地的相同性は短い配列部分が類似していることで，全体的相同性は比較的長い領域，あるいは配列全体にわたって類似していることです。また，相同性には程度の差があります。配列の９０％が一致しているような相同性の高い配列もあれば，１０％程度が一致しているに過ぎない相同性の低い配列もあります。  
BLASTの検索によって発見できるのは，高い局地的相同性を持つ配列です。高い全体的相同性を持つ配列も，問題なく発見できます。低い局地的相同性を持つ配列を発見できるかどうかは，その相同性の程度と，プログラムのパラメータの設定に依存します。低い全体的相同性を持つ配列を発見することは困難で，たとえばＦＡＳＴＡなどの他のプログラムの方が優れています。また，BLASTでは，たとえ局地的相同性が高くても相同な部分にギャップが入っていると，その相同性を発見できないことがあります。

## 統計学的背景 <a name="統計学的背景"></a>

では次に，BLASTがどういう基準で相同な配列をデータベース中から選び出しているかを説明します。類似した２本の配列がある時に，その類似性が偶然によるものなのか，あるいは偶然ではないのかという問題を考えます。この問題を統計学的に判定するために，これらの配列が進化的にも機能的にも全く関係がなく偶然に類似する確率がどの程度であるかを調べます。そして，その確率がある基準値より小さければ，これらの配列は偶然ではなく何らかの原因によって類似していると判断することができるのです。このように，BLASTでは偶然では説明のつかない類似した配列を選び出しているのです。  
その統計的判定は，以下の手順で行います。まず，２本の配列の類似度を定量化するために，相同性スコアを計算します。このスコアは，すべてのアミノ酸のペアについて定義されていて，一致したアミノ酸や性質の類似したアミノ酸のペアには正の得点，それ以外は負の得点が与えられています。ランダムに選んだ２個のアミノ酸のペアに対しては，このスコアの期待値は負の値です。BLASTでは，アミノ酸配列の比較の場合には，BLOSUM62というアミノ酸の間の相同性スコア行列を利用します。ＤＮＡの塩基配列の場合は，一致した塩基には＋５，異なる塩基には－４が与えられます。２つの配列間の相同性スコアは，ひとつひとつのサイトでのスコアの総和として定義されます。 ２本の配列のアラインメントを作り，そのアラインメントの中で相同性の高い部分を考えます。そのような部分配列のうち，最も相同性スコアが大きくなるような部分配列のことを，ＭＳＰ（maximal segment pair）と呼びます。このＭＳＰには，ギャップが入ることは許されていません。ＭＳＰをこのように定義すると，２本の全く独立な（無関係な）配列間のＭＳＰの相同性スコアの理論的な確率分布関数が得られます。そして，ＭＳＰのスコアＭがある基準値（cutoff：Ｓ）より大きくなる確率Ｐは，

<dl>
<dt></dt>
<dd>Ｐ{Ｍ＞Ｓ}　≦　Ｋ*ｎｍ exp（－λ*Ｓ）
</dd>
</dl>
で与えられます（Karlin and Altschul 1990）。ただし，Ｋ\*とλ\*は，スコア行列とアミノ酸組成値によって決まる定数です。ｎとｍは比較した２本の配列の全長です。この式を用いることによって，ＭＳＰが統計的に有為な相同性を持つのか，あるいは単なる偶然によって説明できるのかを判定することができます。

## アルゴリズム <a name="アルゴリズム"></a>

BLASTのプログラムは，３つのステップに分かれています。第一は検索配列（query
sequence）からデータベース検索用の文字列リストneighborhood word list）を作成すること，第二はリストにある文字列をデータベース中で探すこと，第三は見つかった文字列を使い，相同性の高い領域の範囲を決定することです。

最初のステップである検索用文字列リストの作成方法は，タンパク質のアミノ酸配列の場合とＤＮＡの塩基配列の場合で若干異なります。タンパク質のアミノ酸配列の場合は，デフォールトの文字列の長さ（wordsize：Ｗ）が３です。まず，長さ３のすべての可能な文字列を想定します。これには203＝8,000種類があります。このうち，検索配列中にある長さ３のすべての文字列に対してアラインメントした時に，ある基準スコア（Ｔ）以上の相同性スコアが得られるような文字列をすべて選び出し，これを文字列リストに加えます。その結果，検索用文字列リストには，検索配列中にある長さ３のすべての文字列とそれに類似した配列が含まれることになります。　ＤＮＡの塩基配列の場合は，デフォールトの文字列の長さ（Ｗ）が１２です。そして，検索配列中の長さ１２のすべての配列を文字列リストに含めます。この場合，検索配列の長さをｎとすれば，文字列の種類はｎ－Ｗ＋１になります。  
次のステップでは，検索用文字列リスト中のすべての文字列を，データベース中で検索します。この時には，完全に一致した文字列だけを探すようにしています。完全一致だけを許すことにより，検索時間の劇的な短縮を実現しているのです。最後のステップでは，データベース中で発見された各文字列について，相同性の高い領域の範囲を配列の上流と下流にのばしてゆきます。そして，相同性スコアが局地的に最大になるように，相同領域の範囲を決定します。すなわち，ＭＳＰを探す作業をしているわけです。この作業は，相同領域の範囲を広げてもそれ以上スコアが高くならないところまで続けられます。  
ＤＮＡデータベースの場合，検索対象となるデータベースは，検索に先立って加工が施されています。まず，すべての長さ８の文字列のデータベース中での出現頻度を調べ，期待値よりもかなり高頻度のものは検索用文字列リストから除かれます。また，反復配列のサブデータベースを作り，それに対しては全データベースとは区別して検索を行います。これらのフィルターを使うことで，塩基組成の偏った領域や，反復配列を含む領域に対しても相同性検索が実行できるように工夫されています。

## ＤＤＢＪにおける利用法 <a name="ＤＤＢＪにおける利用法"></a>

ＤＤＢＪでＢＬＡＳＴを利用するには，電子メール検索サーバを用います。つまり，検索配列を電子メールで送り，検索結果を電子メールで受け取るという方式です。付録として，ＤＤＢＪのＢＬＡＳＴ電子メール検索サーバの利用手引きを添付しますので，ご利用下さい。

## 引用文献 <a name="引用文献"></a>

  - Altschul S. F., Gish W., Miller W., Myers E. W., and Lipman D. J. (1990)  
    Basic local alignment search tool. J. Mol. Biol. Vol. 215, pp. 403-410.
  - Karlin S., and Altschul S. F. (1990) Methods for assessing the statistical  
    significance of molecular sequence features by using general scoring
    schemes.  
    Proc. Natl. Acad. Sci. USA Vol. 87, pp. 2264-2268.

-----

## 付　録 <a name="付　録"></a>

ＢＬＡＳＴ　電子メール検索サーバ：  
: ＤＮＡの塩基配列やタンパク質のアミノ酸配列を新たに決定したら，その配列が他のどんな配列と類似しているかが知りたくなります。そこで役に立つのが，ＢＬＡＳＴ電子メール検索サーバです。このプログラムは，電子メールで任意のＤＮＡまたはアミノ酸配列を送信すると，その配列と相同性の高い配列をデータベース中で検索してくれるというものです。検索結果は，電子メールを使って自動的に返送されます。

検索リクエストメールの送り先：  
: ＢＬＡＳＴを利用するには，形式を整えた検索リクエストメールを以下の電子メールアドレスに送付してください。  
  　　BLAST@nig.ac.jp  
  このアドレスに，本文中にhelpまたはHELPと書いた電子メールを送ると，ＢＬＡＳＴ電子メール検索サーバの詳しい解説書（この文章）が返送されます。使用法の変更が生じた時には，この解説書に必要な情報を追加しますので，お役立てください。また，help-eまたはHELP-Eという文字列を送ると，英語版の解説書が返送されます。
  
  ``` 
  検索リクエストメールの形式：
  まずは下の例をご覧ください。
  
  　program  blastn
  　datalib  DDBJ
  　begin
  　> test sequence
  　AATTCCGGAATTCCGGAATTCCGGAATTCCGG
  　AATTCCGGAATTCCGGAATTCCGGAATTCCGG
  　//(or end)
  ```
    
    各行は，行の先頭（１文字目）から書き始めます。この例では，始めの２行はオプションを指定しています。オプションは，１行にひとつづつ記入します。すべてのオプションは，省略するとデフォールトの値に設定されます。調べたい配列は，"begin"のみを書いた行，先頭に"\>"と書いた行の次行から記入し，先頭に"//"または"end"と書いた行まで続きます。この"begin"，"\>"，"//"または"end"は省略できません。"\>"の行の後ろには，自由にコメントを書くことができます。メールは大文字も小文字も受け付けますが，どちらか一方に統一してください。

オプションの指定方法：  
: program－使用する検索プログラムを指定します。以下の選択肢からひとつを選びます。 デフォールトはblastnです。
    
  | blastn  | あなたのDNA塩基配列をDNAデータベースと比較します   |
  | blastp  | あなたのアミノ酸配列をタンパク質データベースと比較します  |
  | blastx  | あなたのDNA塩基配列をタンパク質データベースと比較します |
  | tblastn | あなたのアミノ酸配列をDNAデータベースと比較します    |
    
  blastnとtblastnはDNAデータベース，blastpとblastxはタンパク質データベースを対象とした検索を行います。blastxとtblastnは，６通りのreading frameの全てについて検索を行います。 datalib－検索対象のデータベース名を指定します。現在用意されているデータベースは以下の通りです。このうちDNAは、現在公開されている全配列データを含む、重複のないデータベースです。 省略した場合は blastn と tblastn の場合は DNA、blastp と blastx の場合は PROTEIN が設定されます。
  
  ``` 
        DNA        （DDBJ と DDBJNEW を合わせた重複のないデータ）
        DDBJ       （DDBJ定期リリースデータ）
        DDBJNEW    （DDBJ定期リリース後の新着データ）
        EMBL       （EMBL定期リリースデータ）
        GENBANK    （GENBANK定期リリースデータ）
        EPD        （EPD[Eukaryotic Promoter Database]定期リリースデータ）
        PROTEIN    （PIR と SWISS PROT を合わせたデータ）
        PIR        （PIR定期リリースデータ）
        SWISS      （SWISS_PROT定期リリースデータ）
  ```
  
  このうち、DNA、DDBJ、DDBJNEW、EMBL、GENBANK、EPDがDNAデータベースで、PROTEIN、PIR、SWISSがタンパク質データベースです。 wordsize－"wordsize 5"のように，自然数を与えます。デフォールトは，blastnの場合は12，blastp，blastx，tblastnの場合は3です。blastnの場合は，wordsizeを12以外の数に変えるべきではありません。 histogram－"histogram 0"のように0を指定すると，相同性スコアの分布表を表示しなくなります。デフォールトは1で，分布表を表示します。 scores, description－相同性スコアの順位表を，第何位まで表示するかを指定します。"scores 50"のように指定します。scores，descriptionのどちらを書いても同じです。デフォールトは20位までです。 alignments－相同な配列とのアラインメントを，相同性スコアの順で第何位まで表示させるかを指定します。"alignments 50"のように指定します。デフォールトは20位までです。 expect－検索の結果出力される相同な配列の期待数を指定します。デフォールトは10件です。多くの相同な配列を出力させるには，この値を大きく指定します。逆に，非常に高い相同性を持つ配列だけを出力させるには，この値を小さく指定します。 cutoff－データベースに対して検索を実行する際に，データベース中の配列とquery配列のアラインメントの相同性スコアが，cutoff値以上であった場合に結果を出力します。デフォールトでは，cutoffの値はexpectの値から計算によって決められます。expectとcutoffの両方を指定した場合には，両者のうち条件のより厳しい方を採用します。実際に検索に使われた値を知るには，返信メールの終わり近くのParameters欄で，E(expect)とS(cutoff)の値を見てください。 各オプションとパラメータのより詳しい情報については，原著論文を参照してください。

**実際の検索例**

検索結果としては，(1)送信したメールの内容，(2)選択したプログラム名，(3)相同性スコアの分布グラフ，(4)相同性スコアの高い配列の順位表，(5)相同な配列とのアラインメント，(6)パラメータと統計などが出力されます。実際のＢＬＡＳＴの検索例を以下に示します。

``` code
送信メール（BLAST@nig.ac.jp宛に送るメール）
----------------------------------------
program blastn
datalib DDBJ
begin
> test sequence
AATTCCGGAATTCCGGAATTCCGGAATTCCGG
AATTCCGGAATTCCGGAATTCCGGAATTCCGG
//
----------------------------------------

受信メール（送り主に返送されるメール）
----------------------------------------
DDBJ BLAST E-Mail server Version 1.01
Request ID 941123230413.24526

Your query is                        （１）送信したメールの内容
        * * * * * * * *
> test sequence
AATTCCGGAATTCCGGAATTCCGGAATTCCGG
AATTCCGGAATTCCGGAATTCCGGAATTCCGG
        * * * * * * * *
BLASTN 1.3.0 [22-Nov-92]             （２）選択したプログラム名

Reference:  Altschul, Stephen F., Warren Gish, Webb Miller, Eugene W. 
Myers,and David J. Lipman (1990).  Basic local alignment search tool.
 J. Mol.
 Biol.215:403-410.

Notice:  this program is optimized to find nearly identical sequences 
rapidly.To identify weak similarities encoded in nucleic acid, 
use BLASTX or TBLASTN.

Query=  test sequence
        (64 letters, both strands)

Database:  /home/nigcray/db/DB_SEARCH/DATA/DDBJ19.DATA/ddbj_all.seq
           218,935 sequences; 216,416,172 total letters.
Searching..................................................done

（３）相同性スコアの分布グラフ

    Highest-scoring Hit Extension vs. Count of Database Sequences

       Histogram units:    = 3316 Sequences : less than 3316 sequences

 Highest
 Score
    |  Count-->
    V
    0 218828 |=======================================================
 Neighborhood word score threshold, T = 60
   60     22 |:
   61     35 |:
    （中略）
   98      0 |
   99      0 |
 >>>>>>>>>>>>>  Expect = 9.7, Observed = 4  <<<<<<<<<  Cutoff Score 100
  100      0 |
  101      0 |
    （中略）
  120      1 |:
  121      0 |
 -------------  Expect = 0.099, Observed = 3  -----------
  122      0 |
  123      0 |
  124      0 |
  125      1 |:
 >125      2 |:

 （４）相同性スコアの高い配列の順位表
                                                             Smallest
                                                             Poisson
                                                   High  Probability
Sequences producing High-scoring Segment Pairs:        Score  P(N)  N
L02529  RATFRZZH Rattus norvegicus Drosophila polarit... 213  1.4e-10 1
M32471  XELFINAA X.borealis finger protein mRNA, comp... 147  0.00040 1
M55914  HUMCMYCQ Human c-myc binding protein (MBP-1) ... 125  0.050   1
X00741  MMP53 Mouse mRNA for transformation associate...  20  0.14    1

（５）相同な配列とのアラインメント

>L02529  RATFRZZH Rattus norvegicus Drosophila polarity gene (frizzled)
        homologue mRNA, complete cds.ibronectin mRNAs, e
        Length = 4540
  Plus Strand HSPs:
 Score = 213 (58.9 bits), Expect = 1.4e-10, P = 1.4e-10
 Identities = 45/48 (93%), Positives = 45/48 (93%), Strand = Plus
Query:    17 AATTCCGGAATTCCGGAATTCCGGAATTCCGGAATTCCGGAATTCCGG 64
             | ||  ||||||||||||||||||||||||||||||||||||||||||
Sbjct:  4493 AGTTTTGGAATTCCGGAATTCCGGAATTCCGGAATTCCGGAATTCCGG 4540

  Minus Strand HSPs:
Score = 213 (58.9 bits), Expect = 1.4e-10, P = 1.4e-10
 Identities = 45/48 (93%), Positives = 45/48 (93%), Strand = Minus
Query:    52 AATTCCGGAATTCCGGAATTCCGGAATTCCGGAATTCCGGAATTCCGG 5
             | ||  ||||||||||||||||||||||||||||||||||||||||||
Sbjct:  4493 AGTTTTGGAATTCCGGAATTCCGGAATTCCGGAATTCCGGAATTCCGG 4540
    （中略）

（６）パラメータと統計

Parameters:
  E = 9.7, S = 100 (27.6 bits),  E2 = n/a, S2 = n/a
  W = 12, T = n/a, X = 73 (20.2 bits)
  M = +5 (1.4 bits), N = -4 (-1.1 bits)
  H = 1, V = 20, B = 20

Statistics:
  Lambda = 0.192 nats/unit score, Lambda/ln2 = 0.276 bits/unit score
  K = 0.173, H = 0.515 bits/position
  Expected/Observed high score = 110 (30.4 bits) / 213 (58.9 bits)
  # of letters in query sequence = 64

    （以下略）
```

　このＢＬＡＳＴ電子メール検索サーバについて，もし何かお気づきの点がありましたら，trouble@nig.ac.jpあてに電子メールをお送りください。
