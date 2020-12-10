---
layout: tabbed_indexed_content
title: Transcriptome Project のデータ登録
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
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
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: WGS
    url: /ddbj/wgs.html
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
---

## Transcriptome Project のデータ登録

Transcriptome の各段階と登録データの種別の対応を示します。  
下図では典型的な手法の各段階を模式的に示しています。  
なお、次世代シークエンサをご使用の際は、[BioProject](/bioproject/index.html) と [BioSample](/biosample/index.html) にも ご登録ください。

**重要:**[ヒトを対象とした研究データの登録について](/policies.html#human)

![]({{ site.baseurl }}/assets/images/ddbj/transcriptome.png)

[DRA] Raw outputs 次世代シークエンサの出力  
: 次世代シークエンサからの出力データは [DDBJ Sequence Read Archive (DRA)](/dra/index.html)へご登録ください。

[DTA] Chromatograms, Sequences, Qualities: Sanger 法の出力  
: single-path read の DNA sequence chromatograms (traces), base calls, quality estimates は、DDBJ [Trace Archive (DTA)](/dta/index.html) へご登録ください。

[TSA] Contigs: assemblies (overlapping reads) と Scaffolds  
: アセンブルされた cDNA 配列データは、[TSA](/ddbj/tsa.html) として [Mass Submission System](/ddbj/mss.html) から ご登録ください。

[EST] Expressed Sequence Tags  
: single-pass read の cDNA 配列は、[EST](/ddbj/est.html) として [Mass Submission System](/ddbj/mss.html) から ご登録ください。

[HTC] draft sequences of full length insert cDNA clones  
: 完全長の cDNA (mRNA) を cloning する手法を用いて作製された cDNA library から得られた概要配列データは [HTC](/ddbj/htc.html) として [Mass Submission System](/ddbj/mss.html) から ご登録ください。

Finished sequences of cDNA clones  
: 一般的なデータ、または、full length insert cDNA として [Mass Submission System](/ddbj/mss.html) から ご登録ください。
