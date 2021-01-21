---
layout: tabbed_indexed_content
title: Web版塩基配列登録システム (NSSS)
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: submission
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
related_pages:
  - title: DDBJ 塩基配列登録システム HELP
    url: /ddbj/web-submission-help.html
  - title: 塩基配列の登録
    url: /ddbj/submission.html
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

{::options parse_block_html="true" /}
<div class="attention">

<span class="red">ヒトを対象とした研究データの登録について</span>

ヒトを対象とした全ての研究において DDBJ に送付するデータの由来である個人 (研究対象者)の尊厳及び人権は、適用されるべき法律、規定、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。  
原則として、研究対象者を直接特定し得る参照情報は、登録データから取り除いてください。  
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)をご覧ください。

</div>

## Web 版塩基配列登録システム  {#Web_版塩基配列登録システム}

Web 版塩基配列登録システム（DDBJ Nucleotide Sequence Submission System）は、アノテーションをつけた塩基配列を Web 経由で登録できるシステムです。

### 入力ガイド

<div class="nsss-menu">

<div class="nsss-icon">

[![]({{ site.baseurl }}/assets/images/parts/pdf_icon.svg)]({{ site.baseurl }}/assets/files/pdf/ddbj/websubHelp_full-j.pdf)

[マニュアル]({{ site.baseurl }}/assets/files/pdf/ddbj/websubHelp_full-j.pdf)

</div>

<div class="nsss-icon">

[![]({{ site.baseurl }}/assets/images/parts/youtube_icon.svg)](https://youtu.be/JTCV7bG_KJc)

[NSSS の紹介](https://youtu.be/JTCV7bG_KJc)

</div>

<div class="nsss-icon">

[![]({{ site.baseurl }}/assets/images/parts/gdrive.svg)](https://drive.google.com/file/d/1KnEVC--SFglqdENRGLMehFP9NuQXyVrt)

[NSSS の紹介](https://drive.google.com/file/d/1KnEVC--SFglqdENRGLMehFP9NuQXyVrt)

</div>

<div class="nsss-icon">

[![]({{ site.baseurl }}/assets/images/parts/info_icon.svg)](/ddbj/web-submission-help.html)

[NSSS HELP](/ddbj/web-submission-help.html)

</div>

</div>

新規登録を開始する  
: 初めて登録する場合には「[塩基配列の登録](/ddbj/submission.html)」,「[登録データ種別](data-categories.html)」について ご一読ください。
: １度に登録可能なエントリ数は 1024件までです(最大数はPC環境や配列長に依存します)。
: 本ツールで[TPA データ](/ddbj/tpa.html)の登録も可能です。
: 登録する配列から vector 由来の配列を除いてください。[VecScreen](http://ddbj.nig.ac.jp/vecscreen/)で確認できます。
: 右サイドバーの「Related pages」もご参照ください。
: 次のいずれかに該当する時には [MSS](/ddbj/mss.html) をご利用ください。
  - 配列が長い(目安は 500 kb 以上)
  - エントリあたりに多数(概ね30以上)のFeature がある
  - [WGS](/ddbj/wgs.html), [CON](/ddbj/con.html),[TSA](/ddbj/tsa.html), [TLS](/ddbj/tls.html),[HTC](/ddbj/htc.html), [HTG](/ddbj/htg.html),[EST](/ddbj/est.html), [GSS](/ddbj/gss.html), STS の登録

登録を再開する  
: ブックマークから submission を再開できます。

推奨するブラウザ  
: [Firefox](https://www.mozilla.org/ja/firefox/all/) または [Chrome](https://www.google.com/chrome/browser/desktop/index.html) の使用を推奨します。Windows 10 の Microsoft Edge では動作いたしません。

### 登録データの更新・お問い合わせ

  - Web版塩基配列登録システム では新規に登録するデータのみを受け付けております。修正用のデータを送らない でください。  
    アクセッション番号を取得済のデータの修正については「[登録データの修正・更新](/ddbj/update.html)」をご覧ください。
  - 入力途中でのトラブルは、"Submission ID" とともに、[「お問い合わせフォーム」](/contact-ddbj.html)よりご連絡ください。

{::options parse_block_html="true" /}
<div class="start-button">

**[新規登録の開始](https://ddbj.nig.ac.jp/submission)**  
次ページで **[Create new submission\]** をクリックしてください。

</div>
