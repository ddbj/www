---
layout: tabbed_indexed_content
title: 塩基配列の登録
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
lang: ja
current_tab: submission
related_pages:
  - title: 登録の見本
    url: /ddbj/example.html
  - title: Feature key
    url: /ddbj/features.html
  - title: Qualifier key
    url: /ddbj/qualifiers.html
  - title: Organism qualifier に記載する生物名
    url: /ddbj/organism.html
  - title: タンパク質コード配列; CDS feature について
    url: /ddbj/cds.html
  - title: Location の記述法
    url: /ddbj/location.html
---

## 塩基配列登録の前に  {#responsibility}

### 塩基配列登録の目的と意義  {#purpose}

多くの雑誌では学術論文の投稿に先立って、塩基配列を国際塩基配列データベース ([International Nucleotide Sequence Database; INSD](http://www.insdc.org/))に登録し、[アクセッション番号](/documents/accessions.html)を取得した上で、その番号を当該論文に記載することを義務付けています。DDBJは、この国際塩基配列データベースを構成するデータバンクの１つです。

[受け入れ基準](/documents/accessions.html)を満たしている塩基配列であるならば、研究者はこれを広く一般に公開することを目的として、学術論文の投稿予定の有無に関わらず、必要に応じて DDBJ に登録することができます。

DDBJ を含む国際塩基配列データベースに登録された塩基配列は公開された後には、[誰でも全てを制限なしに利用可能](/about/insdc.html#policy)となります。

なお、DDBJ に塩基配列データを登録しても、データに関する[優先権、特許権](/policies.html#priority)などは生じませんので、ご注意ください。

参照: [FAQ\] [DDBJ に登録すればデータの優先権は確保されますか。特許申請するべきですか](/faq/ja/priorities-for-data.html)

### 新規登録か、更新か？  {#update}

もし、新規登録とすべきか、既に登録した配列の更新とすべきか、迷う状況が発生しましたら、[お問い合わせフォーム](/contact-ddbj.html)の「塩基配列登録データの修正・更新」にご連絡ください。

[塩基配列登録システム](/ddbj/web-submission.html) は、新規登録専用となっております。塩基配列登録システムから更新内容を送付しないでください。
更新の場合は、[更新に関する説明](/ddbj/update.html)をご参照の上、[登録データの修正・更新申し込み](/ddbj/update-form.html)
から ご連絡をお願いいたします。

### 登録に附随する権利と義務 {#right} 

DDBJ に塩基配列を登録する際には、配列以外に、[登録者とコンタクトパーソン](#terms)、 関連文献 ([primary citation](#pcite))、由来生物名、遺伝子の機能、特性等に関する情報（以下、<span class="bold">登録情報</span>と総称します）が必要となります。

DDBJ から塩基配列を公開する際には、登録情報を DDBJ の定める[フラットファイル](/ddbj/flat-file.html)という形式に整形して公開しています。登録者とコンタクトパーソンは、原則として、フラットファイルの [REFERENCE1](/ddbj/flat-file.html#Reference1) に記載されています。

登録者は自身の研究の進展・異動、または、誤りを正すなどの理由により、自身が登録した[塩基配列と登録情報を修正・更新](/ddbj/update.html)することができます。

[データフロー説明](#data_flow)、あるいは、このページの最初の段落にもありますように、国際塩基配列データベースを介して塩基配列が公開されたならば、誰でもその登録情報を参照、閲覧可能になります。登録者以外の利用者から配列自体を含む登録情報に誤りがあるなどの指摘を受けた場合、国際塩基配列データベースは、その旨をコンタクトパーソン宛に連絡します。ただし、<span class="red">配列自体を含む登録情報を更新することが可能なのは、当該塩基配列の登録者のみです。</span>指摘を受けて登録情報を修正するか否かの判断は、登録者に委ねられます。

登録者には、配列利用者からの登録内容に関する問い合わせの際には、これに応じる義務があります。利用者からの登録者への連絡が必要な際は、DDBJから[問い合わせフォーム](/contact-ddbj.html)を
介してコンタクトパーソンへ転送いたします。そのため、[DDBJ からのメールを迷惑メールとしないように設定](/precautions.html)をお願いいたします。

国際塩基配列データベースは登録情報に関する研究上の主張などに関して、登録者を含めた利用者間に意見の相違がある場合、双方の主張に関して中立の立場を取ります。

### 論文と塩基配列の公開  {#citation}

[Primary citation](#pcite) が投稿中であるなどの場合、当該論文が公表されるまでの間、DDBJ は登録情報を非公開の状態で保持することが可能です。その場合、登録者は塩基配列登録に際し、登録情報に[公開予定日 (Hold date)](#holddate)を含めなければなりません。公開予定日を設定した場合、登録情報は非公開の状態で維持されます。非公開の登録情報に関しては、DDBJ は登録者以外に対して守秘義務があります。

非公開の登録情報は[データ公開原則](/documents/data-release-policy.html)に従い、公開予定日到来などの理由により公開されます。

一度公開された登録情報は、DDBJ 側に重大な過失があった場合を除き、原則として、非公開の状態に戻すことができません。

ただし、DDBJ は、登録者からの要請に応じて、登録情報の利用に一定の制限をかけることができます。

参照：

  - [登録データの 取り扱いについて](/about/insdc.html#policy)
  - [FAQ\]
    [公開を取り消したデータが現在も参照できるのはなぜですか](/faq/ja/why-retracted-data-available.html)

## 塩基配列データの登録に必要な情報  {#item}

### 登録者の情報  {#submitter_info}

[コンタクトパーソン](#contact)の所属、住所、電話番号、全ての[登録者](#submitter)の氏名が必要です。公開段階での表示は[REFERENCE 1](/ddbj/flat-file.html#Reference1) のようになります。2007 年以前は、E-mail address、電話番号、FAX 番号をフラットファイルに表示していましたが、2008年以降は特に登録者が希望しない限り表示していません。

注意事項: 登録者は、可能な限り複数に  
: 塩基配列の修正・更新を行う権利を有するのは登録者のみです。<br>基本的には将来的に連絡が取れなくなることなどを避けるために、実作業者と研究指導者、最低でも２人以上の連名記載を強く推奨します。<br>特に学生などが 研究指導者の連名なしに 独りで登録することは、原則、認められません。

### 公開予定日  {#hold-date}

登録者は登録時に即日公開、一定期間の非公開を選択することが可能です。  
公開予定日とは DDBJ で公開作業を開始する日付けです。  
即日公開ではない登録の場合は、公開予定日の設定が必要になります。  
参照: [データ公開原則](/documents/data-release-policy.html)

### 登録件数  {#number}

特に 連続したアクセッション番号の発行を希望される場合は、登録件数を確定させた後に、ご登録ください。

配列が同一であっても、独立に配列が決定された結果であれば、個別に登録を受け付けます。原則的には、決定した配列を すべて ご登録いただくことが DDBJ、INSDC の方針です。しかし、場合によっては、出現頻度とサンプル総数を記載の上、代表データのみに集約して登録することも可能です。その場合、配列多型と 観測した集団 の各記載の単一性を維持可能な単位を考慮して、各々のサンプル単位に集約することが推奨されます。詳細は
[多型関連研究における同一配列の代表データ登録](/ddbj/representative-sequence.html)
をご覧下さい。

### 論文、REFERENCE  {#reference}

登録する塩基配列に直接関係する論文情報、主論文 ([primary citation](#pcite))について著者とタイトルの記載が必須となっております。もし、特に論文投稿の予定がない場合でも、形式的にご記載をお願いいたします。

また、特に必須ではありませんが、参考文献としての論文情報を記載しておくことも可能です。

### 配列に関する生物学的情報  {#bio-inf}

生物学的由来 ([生物名](/ddbj/organism.html)など) の記載は、種同定の可否に関わらず、必須です。

いわゆるアノテーション情報として、[feature](/ddbj/features.html)を、可能な限り、記載いただいています。[タンパク質コード配列](/ddbj/cds.html)、[rRNA](/ddbj/features.html#rRNA)、[tRNA](/ddbj/features.html#tRNA)、[ncRNA](/ddbj/features.html#ncRNA)などの位置 ([location](/ddbj/location.html)) をご用意ください。また、その下位に記載する[product](/ddbj/qualifiers.html#product)、[gene](/ddbj/qualifiers.html#gene)といった情報も、適宜、記載をお願いいたします。

注意事項: タンパク質コード配列; CDS feature には、gene と product を記載  
: [DDBJ の遺伝子命名に関する考え方](/ddbj/cds.html#product)の記載指針を ご参照の上、ご登録ください。

### 塩基配列  {#sequence}

塩基配列として使用可能な文字種、[核酸コード](/ddbj/code.html#nucleotide-1) は IUPAC 準拠です。

登録する塩基配列からは以下に該当する配列は取り除いてください。ただし、人工的に構築した配列 (expression vector など)
自体を登録する場合は、この限りではありません。

  - vector に由来する配列
  - linker、adapter に由来する配列
  - 実際の配列が未知であり、保存性が高い領域を利用して設計した primer に由来する配列

ご登録の前に、ベクタースクリーニングをお願いいたします。[VecScreen](http://ddbj.nig.ac.jp/vecscreen/?lang=ja)をご利用ください。

## 塩基配列登録の流れ  {#workflow}

### 1.塩基配列登録受付  {#accept}

(A) 塩基配列登録システム を利用  
: Web経由の[塩基配列登録システムに](/ddbj/web-submission.html)よる登録をお勧めしております。

(B) Mass Submission System (MSS) を利用  
: 登録予定データが、以下のような条件に該当する場合は [Mass Submission System
    (MSS)](/ddbj/mss.html) をご利用ください。
  - 登録予定データが、件数が多い (1024 以上) 場合
  - 多数の Feature を持つ場合 (概ね30以上)
  - 長大な配列 (概ね500 kb以上) の場合
  - 塩基配列登録システムが最適でないと思われる登録

### 2.データの査定  {#annotation}

DDBJ のキュレータが、公開に必要な事項を、国際塩基配列データベース（DDBJ/ENA/GenBank）が定める基準と、DDBJの注釈規範に従って入力し、査定した上で公開を行なっています。この作業の過程で、データの正確性を確保するため、登録者に問い合わせ等をさせていただく場合があります。

### 3.アクセッション番号の発行と通知  {#accession number}

データの受け取り後、5日以内（土、日、祭日を除く）にアクセッション番号を発行し、コンタクトパーソンに E-mailでお知らせします。アクセッション番号の通知が上記の5日間を経過しても届かない場合には、[ご連絡](/contact-ddbj.html#to-ddbj)ください。

### 4.データ公開  {#releasing}

データ公開のご連絡を、コンタクトパーソンへ E-mail で送ります。公開データの内容は[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html)などで検索して確認して下さるようお願いいたします。

登録したデータに関して訂正等がある場合は、アクセッション番号、訂正希望箇所を明記して以下のアドレス宛にお知らせ下さい。詳細は[登録データの修正・更新](/ddbj/update.html)をご参照ください。

### 5.登録、公開について連絡先一覧  {#information}

<table>
  <tbody>
    <tr>
      <th>問い合わせ一般</th>
      <td><a href="/contact-ddbj.html#to-ddbj">お問い合わせフォーム</a></td>
    </tr>
    <tr>
      <th>登録全般に関する問い合わせ</th>
      <td><a href="/contact-ddbj.html#to-ddbj">お問い合わせフォーム</a></td>
    </tr>
    <tr>
      <th>登録済みデータ更新・公開依頼</th>
      <td><a href="/ddbj/update-form.html">登録データの修正・更新申し込み</a></td>
    </tr>            
  </tbody>
</table>

## 配列データの遷移 {#data_flow} 

下図にDDBJにおける塩基配列の新規登録から公開と更新までのデータフローを示します。

<img src="{{site.baseurl}}/assets/images/ddbj/workflow.gif" alt="配列データの遷移" title="" class="w400">

<ol>
  <li class="decrement">
    論文投稿<br>
    多く科学雑誌は論文投稿に際し、DDBJ/ENA/GenBank の何れかへ塩基配列を登録することを義務付けています。
      <span class="red">※ 論文を投稿しない場合も塩基配列の登録は可能です。</span>
    </li>
  <li>
    配列登録<br>
    基本的には、DDBJ への登録は <a href="/ddbj/web-submission.html">塩基配列登録システム</a>、または、<a href="/ddbj/mss.html">Mass Submission System</a>
      を経由します。登録作業が完了しましたら、登録者にアクセッション番号をお知らせします。
    </li>
  <li>
    非公開<br>
    登録後に即時公開か、一定期間非公開か、は登録時に登録者が指定します。非公開を希望する場合は、<a href="#holddate">公開予定日</a>
      の指定が必要です。
    </li>
  <li>
    配列データ公開<br>
    登録時に即時公開を指定された場合は、作業完了後、すぐに公開いたします。公開予定日
      が指定された場合は、<a href="/documents/data-release-policy.html">公開原則</a>に基づき公開されます。論文出版などによるアクセッション番号の公表が確認された場合は例外なく公開します。また「アクセッション番号の公表」に基づく公開請求は、誰にでも可能です。
    </li>
  <li>
    公開データの利用<br>
    DDBJ から公開されたデータは、最初に<a href="http://getentry.ddbj.nig.ac.jp/top-j.html">getentry</a>で検索可能になり、<a href="ftp://ftp.ddbj.nig.ac.jp/">anonymous FTP</a>から取得可能になります。GenBankとENAにも転送され、そちらからも閲覧・取得が可能になります。DDBJのサービス、相同性検索，<a href="http://ddbj.nig.ac.jp/arsa/?lang=ja" >ARSA</a>
      などにも展開されます。公開されたデータは、基本的には、<a href="/about/insdc.html#policy" >どなたでも閲覧・利用が可能</a>です。
    </li>
  <li>
    公開データの被引用性<br>
    DDBJ/ENA/GenBank から公開されたデータは多くのデータベースで２次的に引用されています。
  </li>
  <li>
    公開データへのフィードバック<br>
    公開されたデータに対する質問・確認などは登録者へお願いいたします。連絡先が不明な場合は転送いたしますので、<a href="/contact-ddbj.html" >お問い合わせフォーム</a>からご連絡ください。
  </li>
  <li>
    データ更新の権限<br>
    登録データを<a href="#right" >更新する権利を持っているのは登録者のみ</a>です。更新後に即時公開か、一定期間非公開か、は登録者が指定します。ただし、既に公開されているデータの場合は、非公開にすることはできません。
  </li>
</ol>

## 用語 {#terms} 

登録者 (Submitter)<a name="submitter"></a>
: 登録者は、原則として、その[エントリ](#entry)の登録情報に責任を持つことが可能な人物であり、その登録情報に変更を加える(updateする）権利を有します。基本的に、登録者には、DDBJ、または、DDBJ 利用者からの登録内容に関する問い合わせには応じる義務があります。
: 原則として、登録者は、フラットファイルの [REFERENCE 1](/ddbj/flat-file.html#Reference1)
    に記載されます。

コンタクトパーソン (Contact person)  <a name="contact"></a>
: コンタクトパーソンとは、その[エントリ](#entry)の登録情報について把握し、国際塩基配列データベースから塩基配列が公開された後、その利用者からの問い合わせに対応する代表者としての義務を負います。
:      
  - コンタクトパーソンは、原則として、登録者の中の一人でなければなりません。
  - そのエントリに関する DDBJ からの連絡も、原則として、このコンタクトパーソン宛に行われます。そのため、[DDBJ からのメールを迷惑メールとしないように設定](/precautions.html)をお願いいたします。
  - コンタクトパーソンは、原則として、フラットファイルの [REFERENCE 1](/ddbj/flat-file.html#Reference1) に記載されます。
    利用者から登録者へ連絡が必要な場合、DDBJから[問い合わせフォーム](/contact-ddbj.html)を介してコンタクトパーソンへ転送いたします。

受付日 (Accept Date)  <a name="acceptdate"></a>
: 受付日 (Accept Date) とは、原則として、アクセッション番号を発行可能な元データが DDBJ に到着した日付けです。

公開予定日 (Hold Date) <a name="holddate"></a>
: 公開予定日とは DDBJ で公開作業を開始する日付けです。登録者が必要に応じて設定します。<br>参照: [データ公開原則](/documents/data-release-policy.html)

業務日  <a name="working-day"></a>
: DDBJ センターは土曜日と日曜日に加えて、[国民の祝日](//eco.mtk.nao.ac.jp/koyomi/faq/holiday.html)、年末年始(12月29日から翌年の1月３日)、[情報・システム研究機構](https://www.rois.ac.jp/index.html)の定める夏季休業日(８月中の２日間) には業務を休止します。DDBJ Calendar もご参照ください。

フラットファイル (flat file)  <a name="flatfile"></a>
: フラットファイルとは、DDBJ のデータ公開形式です。<br>参照: [DDBJ のデータ公開形式 (flat file) の説明](/ddbj/flat-file.html)

エントリ (Entry)  <a name="entry"></a>
: エントリとは、塩基配列データベースのデータの単位です。<br>参照: [DDBJ のデータ公開形式 (flat file) の説明](/ddbj/flat-file.html)

プライマリーエントリ (Primary entry)  <a name="primary_entry">
: プライマリーエントリとは、DDBJ/ENA/GenBank 国際塩基配列データベースから、取得可能なデータであると同時に、登録者が実験的に配列決定し、アノテーション付加を行ったデータです。<br>参照: [TPA (Third Party Data)](/ddbj/tpa.html)

Primary citation<a name="pcite"> </a>
: Primary citation とは、当該配列に関する主論文を指します。<br>原則として、[フラットファイル](/ddbj/flat-file.html)の [REFERENCE 2](/ddbj/flat-file.html#Reference2) に記載されます。<br>REFERENCE 2 には、その配列の公表状況を提示する意味合いがあります。 Primary citation が複数ある場合、または、これに相当しない関連文献がある場合は REFERENCE 3 以降に、必要に応じて記載することができます。


