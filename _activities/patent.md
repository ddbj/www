---
layout: indexed_content
title: DDBJ での特許関連配列データの公開業務の紹介
pathname: patent
category: _activities
---

DDBJ Mail Magazine 連載期間：No.50（2010年5月27日発行）〜No.54（2010年11月1日発行）,
No.81（2013年3月14日発行)  
※最新の情報とは内容が異なる場合がありますのでご注意下さい。

{:.text-align-end}
DDBJ アノテータ　青野 英雄

## １．日本特許庁の特許配列データ

### 1\. はじめに

私はアノテータとして，公開特許公報に含まれる特許配列データ(特許データ)の登録および公開業務を担当している。  
今回のコラムでは，先行技術調査において調査対象とする人が多い思われる日本特許庁(JPO)の特許データを中心に，国際塩基配列データベース(INSDC)での特許データの公開概要，DDBJ の検索ツールを利用した先行技術調査について説明を行いたい。

### 2\. 国際塩基配列データベースからの特許データ公開

DNA Data Bank of Japan(DDBJ)は，米国の GenBank，欧州の EMBL-Bank とともに INSDC を構築している。INSDC は科学研究由来の配列データだけでなく，以下の様に日本，韓国，米国，欧州の各国特許庁から登録された特許データを，各データバンクから公開を行っている。

  - 日本： [日本特許庁(JPO)](//www.jpo.go.jp/index.html) → DDBJ
  - 韓国： [韓国特許庁(KIPO)](//www.kipo.go.kr/kpo/user.tdf?a=user.main.MainApp) → DDBJ
  - 米国： [米国特許商標庁(USPTO)](//www.uspto.gov/) → GenBank
  - 欧州： [欧州特許庁(EPO)](//www.epo.org/) → EMBL-Bank

各国特許庁から送られてくる特許データには，塩基配列とアミノ酸配列データがある。特許データの塩基配列データは各データバンクから公開が行われた後に，INSDC 内で交換が行われる。しかしアミノ酸配列データにおいては登録されたデータバンクから公開が行われるが，他データバンクから公開されたアミノ酸配列データの公開においては，各データバンクの判断となっている。

### 3\. JPO 特許データの概要

#### 3-1）DDBJ に登録される特許データ

DDBJ から公開している特許データは，特許出願後に公開された公開特許公報に含まれる塩基配列とアミノ酸の配列データである。  
そのため DDBJ から新規に公開される配列は，基本的に特許権に関する査定および登録が行われる前の配列である。新規公開されたデータのその後の査定状況，既公開データの査定および登録状況については，特許電子図書館(IPDL)等で確認を行う必要がある。

参考： 「特許電子図書館(IPDL)」

#### 3-2) JPO 特許データの種類と公開頻度

JPO から送られてくる特許データには，日本国内に出願された国内公開公報，国際出願され JPO が国際調査を行った国際公開公報，外国からの日本国指定の国際出願により JPO から公表された公表公報由来の配列が含まれる。  
JPO から DDBJ に月に1度の定期公開データ，不定期の追加公開データの送付が行われ，DDBJ からは月に1度以上の公開を行っている。

#### 3-3) JPO 特許データの内容

JPO の特許データには，出願人から提出された配列(塩基配列/アミノ酸配列)，生物名，出願人名，発明者名，公開公報番号，公報公開日，出願番号，出願日，優先日および優先出願番号，コメント，配列の特徴を示す Feature 情報などが記載される。 DDBJ では，JPO から送付されるデータを公開フラットファイルフォーマット(FF)に変換し，公開を行っている。また同一の公報番号に複数の配列が含まれる場合は，各配列ごとにアクセッション番号が付与される。

参考： 「[特許・知的所有権と優先権](/policies.html#ownership)」

#### 3-4) 特許出願中の塩基配列の DDBJ への登録および公開

特許出願中の塩基配列については，特許出願後に発行される公開特許公報に含まれる塩基配列が JPO から DDBJ に送付されるため，DDBJ に新規登録する必要はない。  
しかし論文執筆のために，出願前に出願予定の塩基配列を DDBJ に登録を行う必要がある場合は，DDBJ から公開された塩基配列データは「公知」の扱いになるため，DDBJ からの公開には注意が必要である。出願前のデータ公開には，特許法第30条の「発明の新規性喪失の例外規定」に適用されるかを JPO に確認し，慎重に対応する必要がある。

参考： 「特許法第30条(新規性喪失の例外)の適用について」

### 4\. 先行技術調査のヒント

DDBJ が提供している検索サービスを使用することにより，先行技術調査や特許申請を検討している配列について，配列相同性検索とキーワード検索の側面から調査を行うことができる。

#### 4-1) 特許データの見分け方

検索されたデータにおいて，アクセッション番号の先頭の英文字(プレフィックス)から特許データであるか，また特許データの由来特許庁を判断することができる。JPO の [プレフィックス](/search/patented_data-j.html) では，E, BD, DD, DJ, DL, DM, FU, FV, FWのアクセッション番号となっている。また特許データの [Division](/ddbj/locus.html#division) は PAT に分類される。そのため公開 FF のアクセッション番号，[LOCUS](/ddbj/flat-file.html#Locus) 

行を確認することで，特許データであるかを確認できる。

#### 4-2) 配列相同性検索

特許出願予定の塩基配列を手元に保持している場合は，[配列相同性検索(BLAST)](//blast.ddbj.nig.ac.jp/) により類似配列を確認することができる。検索条件で Division から PAT を選択することにより，既公開の特許データを対象に類似配列が存在するかを確認することができる。  
類似配列が認められた場合，公開 FF から公報番号を確認し，IPDL 等で出願内容および請求項，審査状況を確認することで，出願予定の内容の先行技術調査を行うことができる。

#### 4-3) キーワード検索

JPO の特許データには英訳された発明タイトルが記載されている。そのため塩基配列データにおいては，[キーワード検索システム ARSA](//arsa.ddbj.nig.ac.jp/html/) を使用することにより，関連キーワードから先行技術調査を行うことが可能である。Advanced Search 画面の検索条件で，Division から PAT を選択することにより，特許データに限定した検索することが可能である。

### 5\. 最後に

先行技術調査のために DDBJ の公開データを利用されている方も多いかと思う。当コラムが，DDBJ での特許データの調査および各データの公開 FF を読み解くための一助になれば幸いである。また一般の研究者の方も，特許データに興味を持って頂けたら幸いである。  
次回以降は，KIPO データの紹介，特許データの公開 FF の構造，公開 FF からの公開特許公報の検索方法について説明を行う予定である。

## 2\. 韓国特許庁の特許配列データ

### 1\. はじめに

日本 DNA データバンク（DDBJ）では，第1回コラムで紹介した [日本特許庁（JPO）](//www.jpo.go.jp/indexj.htm)の特許配列データ（特許データ）以外にも，[韓国特許庁（KIPO）](//www.kipo.go.kr/kpo/user.tdf?a=user.main.MainApp)の特許データの公開も行っている。今回のコラムでは KIPO 特許データの概要を中心に，KIPO 関連機関からのデータ検索方法についても紹介を行いたい。

### 2\. KIPO 特許データの概要

#### 2-1） KIPO 特許データの登録の流れ

DDBJ では2008年3月より，KIPO の塩基配列およびアミノ酸配列の特許データについて公開を行っている。 DDBJ に登録される特許データは，KIPO から [Korean Bioinformation
Center（KOBIC）](https://www.kobic.re.kr/newkobic/index.php?mid=eng)
に送られ，KOBIC で DDBJ への登録ファイルが作成される。DDBJ では KOBIC から送付されるデータを公開フラットファイルフォーマット（FF）に変換し，公開を行っている。  
DDBJ から公開された塩基配列データは，GenBank および EMBL-Bank の各データバンクからも公開されている。アミノ酸配列データにおいては登録されたデータバンクから公開が行われるが，他データバンクから公開されたアミノ酸配列データの公開においては各データバンクの判断となっている。KIPO のアミノ酸配列データにおいては，DDBJ 以外に EBI（European Bioinformatics Institute）からも公開が行われている。  
KIPO に蓄積されていた特許データが DDBJ に登録されることで，国際塩基配列データベース（INSDC）のユーザに KIPO 特許データの提供が可能になっている。

#### 2-2）KIPO 特許データの登録状況

KIPO の特許データにおけるアクセッション番号先頭の英文字（プレフィックス）は，DI が指定される。DI000001 から DI499999 が塩基配列データ，DI500001 から DI999999 がアミノ酸配列データとして割り当てられ，現在まで以下の様に282,161件の塩基配列とアミノ酸配列データが公開されている。

塩基配列データ　　： DI000001 - DI168562 （168,562件）  
アミノ酸配列データ： DI500001 - DI613599 （113,599件）

KIPO の特許データは不定期に受け付けており，近日中に追加登録が行われる予定である。

### 3\. KIPO 特許データ検索

#### 3-1）DDBJ からの KIPO 特許データの公開

[ 塩基配列特許データ ]  
: 塩基配列特許データは，getentry，ARSA から公開を行っている。getentry ではアクセッション番号と公報番号による検索，ARSA ではアクセッション番号や公報番号の他にキーワードによる検索を行うことが可能である。また配列相同性検索（BLAST）では検索対象の特許データに KIPO の塩基配列データが取り込まれているため，類似配列の検索が可能となっている。さらに定期リリースデータでの公開も行っている。
  
[ アミノ酸配列特許データ ]  
: アミノ酸配列特許データは，getentry と anonymous FTP サイトから公開を行っている。getentry ではアクセッション番号による検索のみ可能である。[anonymous FTP サイト](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/patent/) では，KIPO のアミノ酸配列特許データを一括して取得が可能である。

#### 3-2）KIPO 関連機関からの検索

DDBJ に登録されている KIPO 特許データは，KIPO が保持している特許データの一部にすぎない。そのため DDBJ に登録されているデータ以外の検索には，KIPO 関連機関からの検索が有効である。

[ KOBIC ]  
: KOBIC が提供する PATOME@Korea は韓国特許配列データベースであり，「PatSeq DB　search」の項目では出願番号，出願人，英訳発明タイトルによる検索が可能である。特許公開公報の出願内容に関わる塩基配列，アミノ酸配列を参照することができるため，配列の取得もしくは参照したい場合には PATOME@Korea が有用である。  
また PATOME@Korea では，韓国特許配列の塩基配列，アミノ酸配列を対象にした相同性検索サービスも提供している。しかしながら PATOME@Korea で提供している特許公報の本文は韓国語となっているため，何らかの方法で翻訳して内容を確認する必要がある。

[ Korea Intellectual Property Rights Information Service（KIPRIS）]  
: PATOME@Korea では特許公報本文が韓国語でのみ参照が可能であったが，KIPRIS が提供している KPA の検索では特許公報のフロントページおよび要約が英文にて参照可能である。そのため特許公報の出願内容を把握したい場合には有用である。KPA は，キーワード，公報番号（出願番号，公開番号），出願人，発明者により検索を行うことができる。<br>さらに K2E-PAT（Korean to English Patent Automatic Translation）においては，有料であるが特許公報全文を機械翻訳された英文にて参照が可能である。

### 4\. 最後に

KIPO が保持する特許データの多くが，DDBJ からの公開に至っていないのが現状である。そのため今回のコラムでは，KIPO 関連機関での特許データの検索方法についても言及した。現在，DDBJ では KIPO からのデータをよりスムーズに受け入れる方法を検討中であり，今後，DDBJ から多くの KIPO データが追加公開される予定である。  
次回以降のコラムでは JPO 特許データの公開 FF の構造，各特許庁の公報番号による getentry での検索方法，JPO の公開 FF から公報番号を取得し公開特許公報を参照するまでの検索手順について説明を行う予定である。

## 3\. DDBJ 検索サービスを使用した特許公開公報の確認方法

### 1\. はじめに

今までの特許コラムでは DDBJ が公開を行っている [日本特許庁(JPO)](//www.jpo.go.jp/indexj.htm) と [韓国特許庁(KIPO)](//www.kipo.go.kr/kpo/user.tdf?a=user.main.MainApp) の塩基配列とアミノ酸配列の特許配列データの紹介を行った。今回のコラムでは，DDBJ 検索ツールを使用した特許データ検索方法，JPO データの公開フラットファイル(FF)に表示される公開番号を取得して <span class="font-red">\*</span>特許電子図書館(IPDL) で特許公開公報を検索する方法について紹介を行いたい。（\*：特許電子図書館へリンクしています）

### 2\. DDBJ 検索ツールを使用した特許データ検索

#### 2-1) getentry

[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html) では表1に示す様にアクセッション番号もしくは特許公報番号を指定することで，塩基配列データおよびアミノ酸配列データのエントリー検索が可能である。塩基配列データはアクセッション番号検索の他に，特許公報番号でも検索を行うことができる。特許公報番号の検索では JPO 以外に，KIPO，[米国特許商標庁(USPTO)](//www.uspto.gov/)，[欧州特許庁(EPO)](//www.epo.org/) 由来データの検索が可能である。しかしアミノ酸配列データではアクセッション番号検索のみで，特許公報番号での検索は行うことはできない。

<table>
  	<caption>表1：塩基配列/アミノ酸配列データの検索条件<br>＊各特許庁の特許公報番号の種類と検索に指定する入力フォーマットは，<a href="/getentry-help.html#parameter">getentry の HELP</a> を参照。</caption>
    <thead>
      <tr>
        <th></th>
        <th>アクセッション番号</th>
        <th>特許公報番号</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>塩基配列データ</th>
        <td>○</td>
        <td>○</td>
      </tr>
      <tr>
      <th>アミノ酸配列データ</th>
        <td>○</td>
        <td>×</td>
      </tr>
    </tbody>
</table>

以下に特許公報番号検索，アミノ酸配列データ検索を行う際の getentry での画面指定条件の留意点を示した。  
特許公報番号の検索では，図1の様に「ID指定」のプルダウンメニューから [Patent Retrieval Number] を選択して，特許公報番号を入力ボックスに記載して検索を行う必要がある。

{:.size-optimize}
{% include image.html url="ddbj/column_09.jpg" caption="図1：特許公報番号検索の getentry 指定条件" %}

アミノ酸配列データを検索する際には，Protein データベースの Patent のラジオボタンにチェックを入れる必要がある。

{:.size-optimize}
{% include image.html url="ddbj/column_10.jpg" caption="図2：アミノ酸配列データ検索の getentry 指定条件" %}

#### 2-2）ARSA (All-round Retrieval of Sequence and Annotation)

[ARSA](//arsa.ddbj.nig.ac.jp/html/) では塩基配列データを対象にキーワードによる検索を行うことができるが，アミノ酸データの検索は行うことはできない。表2に，実際に検索する場合が多いと思われる入力条件例を紹介した。

表2：ARSA 入力条件例

例1）JPO 由来データを対象に検索したい場合  
: Advanced Search 画面において Division に PAT を選択し，Primary Accession Number の入力ボックスに E|BD|DD|DJ|DL|DM|FU|FV|FW のアクセッション番号プレフィックスを指定することで，JPO 由来データを対象にすることができる。 JPO のアクセッション番号プレフィックスについては順次追加されているため，[最新のプレフィックス](/search/patented_data-j.html)を確認の上，検索を実行して頂きたい。

例2）同一公報由来の全塩基配列データを検索したい場合  
: Advanced Search 画面において Division に PAT を選択し，Comment，Keywords，Journal のいずれかの入力ボックスに，配列番号なしの公開番号を入力して検索すると，同一公報由来の塩基配列データを検索することができる。
入力値例：2010511691

例3) 出願人名で検索したい場合  
: Advanced Search 画面において Division に PAT を選択し，Journal の入力ボックスに出願人の英語名を入力して検索すると，出願人名で検索が可能である。

例4) 出願番号で検索したい場合  
: Advanced Search 画面において Division に PAT を選択し，Comment の入力ボックスに，出願番号を入力することで検索が可能である。
入力値例：2001563636

アミノ酸データのキーワード検索を行いたい場合は，[EBI](//www.ebi.ac.uk/)の EBI-eye search，SRS，[NCBI](//www.ncbi.nlm.nih.gov/) の Protein database(GenPept) で確認が可能である。

### 3\. 特許 FF の特許公開番号(公開番号)記載箇所

JPO の特許 FF で，公開番号は図3の黄色で示しているKEYWORDS行，JOURNAL行，COMMENT PN 行の3か所に記載される。特許公開公報を検索するためには，KEYWORDS 行，JOURNAL 行，COMMENT PN 行のいずれかの行から，公開番号を取得する必要がある。

{:.size-optimize}
{% include image.html url="ddbj/column_11.jpg" caption="図3：特許 FF の公報番号記載箇所（抜粋）" %}

公開番号は，以下のフォーマットで記載される。公開番号の先頭の JP は，国内公報および公表公報由来データに記載され，国際公表由来のデータには WO が記載される。基本的に公開番号の後ろには ”-A” が記載され，特許公開公報由来であることを示す。また配列番号は，同一公報由来の各配列に塩基配列，アミノ酸配列の順に連番で記載される。

KEYWORDS行/ COMMENT PN行：  
: JP[space] 公開番号[-A/\]配列番号 WO[space] 公開番号[-A/\]配列番号

JOURNAL行：  
: JP[space] 公開番号[-A\][space\]配列番号 WO[space\]公開番号[-A\][space\]配列番号

表3：公開番号の記載フォーマット

### 4\. 特許公開公報を検索する方法

特許 FF から公開番号を取得した後に特許公開公報の内容を確認する方法の一つとして，IPDL での検索方法を紹介したい。IPDL の「特許・実用新案検索」の画面から，「特許・実用新案公報 DB」をクリックすると図4の画面となる。  
文献種別では A，文献番号に公開番号を入力する。文献番号に入力する公開番号は，最初の4桁の数字の後ろにハイフンを入力する必要がある。文献番号照会ボタンを押すと，該当する特許公開公報を確認することができ，最大12の公開番号の検索を行うことが可能である。

{:.size-optimize}
{% include image.html url="ddbj/column_12.jpg" caption="図4：IPDL の特許・実用新案公報 DB 検索画面 (IPDL より画面引用)" %}

検索結果は“文献番号の選択画面”，“特許公開公報の参照画面”，“特許公開公報に記載される図の参照画面”で表示される。また検索した特許公開公報の公開後の審査状況を確認するためは，特許公開公報の参照画面で，経過情報のボタンを押すことで審査状況を参照することができる。

### 5\. 最後に

DDBJ から公開している JPO の特許 FF は，他のデータバンクから公開している特許データに比べて，出願人名や発明者名，公開日，出願番号，出願日，優先出願番号などの特許公開公報に記載されている有用な情報が，各エントリーに記載されている。JPO のエントリーは出願内容に関する基本情報を有しているため，最終の次回コラムでは JPO の特許 FF において，出願内容に関する基本情報がどの様に格納され表示されているかを紹介する予定である。

## 4\. 日本特許庁(JPO) データの公開フラットファイル構造

### 1\. はじめに

今までの特許コラムでは DDBJ が公開を行っている [日本特許庁(JPO)](//www.jpo.go.jp/indexj.htm) と [韓国特許庁(KIPO)](//www.kipo.go.kr/kpo/user.tdf?a=user.main.MainApp) の塩基配列とアミノ酸配列の特許配列データの紹介，DDBJ 検索ツールを使用した特許公開公報(公開公報) の検索方法の紹介を行った。  
今回のコラムでは JPO データの公開フラットファイル(FF) において，出願内容に関する基本情報がどの様に格納され表示されているかを中心に紹介したい。DDBJ が公開を行っている特許データを読み解くための一助となれば幸いである。

### 2\. JPO データの FF 構造と記載内容

#### 2-1）JPO データの出願情報と FF の記載箇所

JPO では出願人が作成した [配列表(ST25)](//www.jpo.go.jp/tetuzuki/t_tokkyo/shinsa/pdf/enki_amino_guide.pdf) を加工し，DDBJ 登録用ファイル(JPO ファイル) が作成している。DDBJ では JPO から送られてくる登録ファイルを変換し，特許データ
FF を構築している。  
JPO データの FF は，他データバンクから公開されている [欧州特許庁(EPO)](//www.epo.org/) および [米国特許商標庁(USPTO)](//www.uspto.gov/) の FF と比べて，出願内容に関する基本情報が記載され，エントリーを参照しただけで多くの情報を得ることができる。表1に出願基本情報と FF の記載箇所をまとめた。

| 出願情報項目         | FF の記載箇所                                  |
| -------------- | ----------------------------------------- |
| 特許公開番号(公開番号)   | KEYWORDS 行, JOURNAL 行, COMMENT PN 行       |
| 公開日            | JOURNAL 行                                 |
| 出願番号           | COMMENT PF 行                              |
| 出願日            | COMMENT PF 行                              |
| 出願人            | JOURNAL 行                                 |
| 発明者            | REFERENCE AUTHORS 行, COMMENT PI 行         |
| 発明タイトル         | DEFINITION 行, REFERENCE TITLE 行           |
| 優先権主張出願の出願番号   | COMMENT PR 行                              |
| 優先権主張日         | COMMENT PR 行                              |
| Feature情報      | COMMENT FT 行                              |
| 生物名(登録ファイル記載値) | COMMENT OS 行                              |
| 生物名(DDBJ変換時)   | SOURCE 行, ORGANISM 行, /organism qualifier |

{: .tablecaption}
表1：出願基本情報と FF での記載箇所

#### 2-2）JPO データの FF 構造

JPO データの FF 構造と各項目の記載内容について，塩基配列データと記載内容の対応関係を図1で示し，6つの部分に分けて解説した。  
公開公報のフロントページに記載される出願基本情報は，③REFERENCE 情報および ④COMMENT 情報を参照することで，把握が可能である。アミノ酸配列データについては，各項目で解説した。

{:.size-optimize}
{% include image.html url="ddbj/column_18.jpg" caption="図1：JPO 塩基配列データの FF と記載内容の対応関係　（画像クリックで拡大）" %}

1. LOCUS 行- KEYWORDS 行
[LOCUS 行]  
: アクセッション番号，配列長，分子タイプ，分子形態，Division，最終公開日が記載される。
: 
  | 配列長      | 塩基配列データの場合は配列長の数値の後に bp，アミノ酸配列データの場合は配列長の数値の後に aa が記載される。 |
  | 分子タイプ    | 塩基配列データの場合は DNA もしくは RNA が記載され，アミノ酸配列データの場合は PRT が記載される。  |
  | 分子形態     | linear が塩基配列の場合のみ記載される。アミノ酸配列データでは記載されない。                 |
  | Division | 特許データの Division である PAT が記載される。                           |
  | 最終公開日    | そのデータが公開された日付が記載される。データが更新され，再公開されると日付は変わる。               |

:
  アミノ酸配列データの LOCUS 行は塩基配列データと記載内容が異なるため，図2にアミノ酸配列データの LOCUS 行の例を示した。

  {:.size-optimize}
  {% include image.html url="ddbj/column_14.jpg" caption="図2：アミノ酸配列データの LOCUS 行(例)" %}

[DEFINITION 行]  
: 発明タイトルが記載される。REFERENCE の TITLE 行と同じ内容が記載される。

[ACCESSION 行]  
: アクセッション番号が記載される。

[VERSION 行]  
: アクセッション番号と配列バージョン番号が記載される。 VERSION 行は塩基配列データのみに記載され，アミノ酸配列データには記載されない。配列バージョン番号は初公開時には1が指定される。

[KEYWORDS 行]  
: 公開番号が記載される。国内公開公報および公表公報に由来するデータには JP が先頭に付加され，国際公開公報に由来するデータには WO が付加される。

: 公開番号の記載フォーマットについては，DDBJ メールマガジン No.53 「[3. 特許 FF の特許公開番号(公開番号)記載箇所](#3)」を参照。

2. 生物情報
  
[SOURCE 行]  
: DDBJ の FF に記載する生物学名(生物名)は，NCBI が構築している [Unified Taxonomy Database](//www.ncbi.nlm.nih.gov/taxonomy) の生物名を採用している。そのため④COMMENT のOS行に記載される登録ファイルの生物名から Unified Taxonomy Database の生物名へ変換が行われた名称が，SOURCE 行に記載される。また human などの一般名(common name) での記載が可能な場合は，生物名の後ろに記載される。<br>例：SOURCE Homo sapiens (human)

[ORGANISM 行]  
: 1行目は SOURCE 行と同じ生物名が記載され，2行目は Unified Taxonomy Database に基づいた分類(lineage) 情報が記載される。
  
  ``` 
    例：  ORGANISM  Homo sapiens
                    Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
                    Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
                    Catarrhini; Hominidae; Homo.
    
  ```
  
  「生物名が unidentified となるデータ」
  
  特許データは出願内容により明確に生物名を記載できない場合がある。DDBJ での FF 構築時に登録ファイルの生物名が Unified Taxonomy Database に存在しない場合は，下記例の様に生物名は unidentified が記載される。登録ファイルの出願人が記載した生物名については，④COMMENT の OS 行で確認することが可能である。
  
  ``` 
  例: 生物名が unidentified のデータ例(FF抜粋)
        SOURCE      unidentified
          ORGANISM  unidentified
                    unclassified sequences.
                    
        COMMENT     OS   Bacillus
        
        FEATURES             Location/Qualifiers
              source          1..2000
                              /mol_type="unassigned DNA"
                              /db_xref="taxon:32644"
                              /organism="unidentified"
  ```

3. REFERENCE 情報  
: REFERENCE 情報は，AUTHORS 行，TITLE 行，JOURNAL 行で構成される。
  
[AUTHORS 行]  
: DDBJ の FF 構築ルールに基づいて変換された発明者が記載される。発明者のフルネームは，④COMMENT の PI 行で確認を行うことができる。

[TITLE 行]  
: 発明タイトルが記載される。DEFINITION 行と同じ内容が記載される。

[JOURNAL 行]  
: 1行目には「Patent:」の後に，公開番号，公開日が記載される。2行目以降に出願人名が記載される。 ④COMMENT の PN 行で公開番号，PD 行で公開日が記載されるが，出願人名は JOURNAL 行のみに記載され，COMMENT には記載されない。

4. COMMENT 情報  
: COMMENT 情報には，表2の様に JPO ファイルに含まれる出願内容の一部が記載される。
  
  |  行名  |  各行の記載内容  |
  | ---- | ---- |
  |  OS  |  登録ファイルの出願人が記載した生物名が記載される。この生物名に基づき，<br/>SOURCE 行，ORGANISM 行，/organism，/db_xref が構築される  |
  |  PN  |  公開番号が配列番号と共に記載される  |
  |  PD  |  公開日  |
  |  PF  |  出願日 出願番号  |
  |  PR  |  優先権主張日，優先権主張出願の出願番号  |
  |  PI  |  発明者  |
  |  CC  |  コメント  |
  |  FH  |  Feature ヘッダーとして Key　Location/Qualifiers の固定値が記載される  |
  |  FT	  |  Feature 情報|
  <caption>表2：COMMENT 情報の各行の説明</caption>

  現在受け付けている JPO データでは記載されていないが、国際特許分類(IPC) を記載する PC 行がある。

5. Feature 情報  
  JPO データ(KIPO データも含) の Feature 情報は，source feature のみが記載される。塩基配列データは， /mol\_type，/db\_xref，/organism のみが記載され，アミノ酸配列データでは /db\_xref，/organism のみが記載される。
  
  | /mol\_type | 塩基配列データのみで記載され，DNA データの場合は unassigned DNA，RNA データの場合はunassigned RNAが記載される。アミノ酸データでは，記載されない。 |
  | /db\_xref  | taxon: の後ろに Unified Taxonomy Database での生物名の ID(Taxonomy ID) が記載される。                        |
  | /organism  | ④COMMENT の OS 行の JPO ファイルの生物名から，Unified Taxonomy Database の生物名に変換が行われた生物名が記載される。            |
      
  「/db\_xrefによるTaxonomy IDの記載追加について」
  
  JPO および KIPO データの FF では /db\_xref による Taxonomy ID の記載が行われていなかった。そのため2010年5月より，JPO および KIPO の全データに，Taxonomy ID を付与する修正作業を実施した。Unified Taxonomy Database の内容は逐次更新されており，Taxonomy ID が維持された状態で，生物名の更新が行われている。Taxonomy ID を各エントリーで保持させることで，Taxonomy ID に基づいた最新の生物名の情報を反映させることが可能となった。DDBJ では年に1度，JPO および KIPO の全データについて Taxonomy ID から SOURCE 行，ORGANISM 行，/organism の再構築し，最新の生物名の情報を反映する作業を実施する予定である。

6. 配列情報  
  公開番号の後ろに記載される配列番号に対応する塩基配列，アミノ酸配列が記載される。  
  塩基配列データでは，BASE COUNT 行で配列の adenine(a), cytosine(c), guanine(g), thymine(t) の塩基数が記載される。アミノ酸配列データでは，図3の様に BASE COUNT 行は出力されない。
  
  {:.size-optimize}
  {% include image.html url="ddbj/column_15.jpg" caption="図3：アミノ酸配列データの配列情報の表示" %}


### 3\. EPO および USPTO の FF

EPO の塩基配列データは EMBL-Bank/EBI，USPTO の塩基配列データは GenBank/NCBI で FF が構築され公開が行われている。各バンク間では特許塩基配列データの交換が行われている。

EPO の塩基配列データでは，JPO データの様に出願番号や出願日などの出願情報について多くは反映されていない。しかし JPO データでは COMMENT の FT 行で記載される feature 情報が，source feature 以外にも記載される。CDS が記載される場合は，図4の様に翻訳されたアミノ酸配列と /protein\_id も記載される。図4は，DDBJ のエントリー検索ツールである getentry で，EPO の塩基配列データを検索した内容を示した。

{:.size-optimize}
{% include image.html url="ddbj/column_16.jpg" caption="図4：EPO 塩基配列データFF (例: HC000669)　（画像クリックで拡大）" %}

USPTO の塩基配列データでは，生物情報は Unknown で記載され，source feature には /db\_xref による Taxonomy ID の付与も行われない。発明タイトル，発明者，出願人，公開番号，公開日，配列で FF が構築され，JPO データと比べると出願内容に関する情報が少ない。図5は DDBJ で USPTO データを検索した内容となるが，GenBank/NCBI 側での公開データでは公開番号にハイパーリンクが設定され，公開公報が参照できる様になっている。図5は getentry で，USPTO の塩基配列データを検索した内容を示した。

{:.size-optimize}
{% include image.html url="ddbj/column_17.jpg" caption="図5：USPTO 塩基配列データ FF における表示内容 (例: GX000001)　（画像クリックで拡大）" %}

### 4\. 最後に

今回で DDBJ が行っている特許業務を紹介するコラムは最終となるが，DDBJ が提供している特許データを活用して頂くために，基本的な内容を紹介した。そのため特許実務を行っている方にとっては，御存じの内容が多くあったと思われる。DDBJ が提供している特許データをより活用して頂くために，特許データについて不明な点について御連絡を頂ければ幸いである。次回以降，不定期となるが，御寄せ頂いた質問を取り上げて，DDBJ メールマガジンで回答を行って行く予定である。

## ５．日本特許庁(JPO)データにおける公開フラットファイルの新フォーマットの紹介

### 1\. はじめに

DDBJ では、日本特許庁(JPO)データの公開フラットファイル(FF) について、COMMENT 部分に記載される内容の改良を行った。塩基配列データの新フォーマットはDDBJ release 90.0 から、JPO の全データが新フォーマットに対応している(図1参照)。アミノ酸配列データにおいては、2012年9月公開のJPO アミノ酸蓄積ファイルより、全データが新フォーマットで提供を行っている(図2参照)。  
今回のコラムでは、JPO データの新フォーマットの特徴を紹介したい。

{:.float-left}
![]({{ site.baseurl }}/assets/images/ddbj/Fig1rev.jpg)

{:.float-right}
![]({{ site.baseurl }}/assets/images/ddbj/Fig2rev.jpg)

{:.float-release}
### 2\. COMMENT 部分の新フォーマット

#### 2-1：

JPO データは公開公報のフロントページに記載される出願基本情報に関わる内容が記載され、公開公報を参照しなくてもFF だけで特許基本情報が把握できる特徴がある。  
しかしFF の各部分に出願基本情報に関わる内容が記載されるため、必要な情報がFFのどの部分に記載されているのか理解しておく必要があった。特に出願人名はREFERENCE 部分のJOURNAL 行のみに記載され、FF 構造を理解していないと出願人情報を取得するのが難しかった(図3参照)。

{:.size-optimize}
{% include image.html url="ddbj/Ref.jpg" caption="図3: REFERENCE 部分の出願人記載箇所" %}

#### 2-2：

新フォーマットではCOMMENT 部分に出願基本情報に関わる内容を全て記載し、COMMENT 部分を参照しただけで出願基本情報を把握できる様に改良を行った(図4参照)。

{:.size-optimize}
{% include image.html url="ddbj/RevC.jpg" caption="図4: COMMENT 部分の新フォーマットと各行の説明" %}

新フォーマットでは、出願人名が記載されるPA 行、発明タイトルが記載されるPT 行、出願人指定の配列番号を記載したPS 行の追加を行った(表1参照)。

|  COMMENT 部分新規追加行  |  記載内容  |
| ---- | ---- |
|  PA 行  |  出願人名が記載される。<br/>PA 行の他に、REFERENCE 部分のJOURNAL 行にも記載される。  |
|  PT 行  |  発明タイトルが記載される。<br/>PT 行の他に、DEFINITION、REFERENCE 部分のTITLE 行にも記載される。  |
|  PS 行  |  配列表で記載される配列番号が記載される。<br/>N の後ろに配列番号が記載される。  |

<caption>表1: COMMENT 部分新規追加行の説明</caption>

3\. 配列番号

#### 3-1：

公開公報で記載される配列番号と、JPO データのFF での配列番号が一致しない問題があった。  
旧フォーマットではFF 上で配列表の配列番号の記載がないため、公開公報の内容をみてJPO データのFF を参照しても、該当する配列を特定するのが難しかった。  
その問題を解消するため、新フォーマットではPS 行を新たに追加した。

#### 3-2：

出願人は配列をJPO へ提出する際に、WIPO ST.25 という [ガイドライン](//www.jpo.go.jp/shiryou/kijun/kijun2/pdf/tjkijun_vii-2-furoku3.pdf "tjkijun_vii-2-furoku3.pdf") に従い配列表を作成する。  
配列表では1 から始まる通し番号の配列番号を、出願人が各配列に付与している。出願内容に複数の配列が含まれる場合、配列番号は塩基配列、アミノ酸配列の順序は考慮されずに記載される。そのためJPO ではDDBJ に配列データを送る際に、塩基配列、アミノ酸配列の順に入れ替えを行い、配列番号を振り直している(表2参照)。

![表2: 配列表とFF での配列番号の対応](/images/ddbj/PS.jpg)

JPO 記載の配列番号は公開番号とともに、DEFINITION 行、KEYWORDS 行、COMMENT 部分のPN 行、REFERENCE 部分のJOURNAL 行に記載される。  
国内公報および公表公報由来データの公開番号には先頭にJP、国際公報由来のデータにはWO が記載され、公開番号の後ろには"-A" が記載される(表3参照)。

|  配列番号FF 記載箇所  |  公開番号フォーマット  |
| ---- | ---- |
|  <strong>DEFINITION 行<br/>KEYWORDS 行<br/>COMMENT PN 行</strong>  |  JP[space]公開番号[-A/]配列番号<br/>WO[space]公開番号[-A/]配列番号  |
|  <strong>REFERENCE JOURNAL 行</strong>  |  JP[space]公開番号[-A][space]配列番号<br/>WO[space]公開番号[-A][space]配列番号  |

<caption>表3: JPO 記載配列番号のFF 記載箇所と公開番号フォーマット</caption>

#### 3-3：

PS 行は固定文字列N の後に配列表の配列番号が記載されるため、[ARSA](//arsa.ddbj.nig.ac.jp/html/QuickSearch) で公開番号とN を含めた配列番号をキーワードに指定することにより、該当するエントリーを検索できる様になった。

### 4\. 最後に

COMMENT 部分に新フォーマットを導入することにより、特許データのFF と公開特許公報との関連性を高めることができた。より利便性を高めるため、現在、JPO データのFF を公開特許公報にハイパーリンクで参照することができる様に検討を行っている。
