---
layout: indexed_content
title: Controlled vocabulary for /rpt_type qualifier
pathname: rpt_type
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

The original site; [Controlled vocabulary for /rpt_type qualifier](http://www.insdc.org/controlled-vocabulary-rpttype-qualifier) 2015.11.11 version.

This page contains the current definition, format and controlled
vocabularly for repeat type qualifier.

```
Qualifier: /rpt_type=
Definition: organization of repeated sequence 
Value format: tandem, inverted, flanking, terminal, direct, dispersed, and other
Example: /rpt_type=INVERTED 
Comment: the values are case-insensitive, i.e. both "INVERTED" and "inverted" are valid;
```

## Definitions of the values: <a name="Definitions_of_the_values_"></a>

tandem:  
: a repeat that consists of two or more adjacent copies of a region whose length is greater than one in the same orientation;

inverted:  
: a repeat pair occurring in reverse orientation to one another on the same molecule;

flanking:  
: a repeat lying outside the sequence for which it has functional significance (eg. transposon insertion target sites);

terminal:  
: a repeat at the ends of and within the sequence for which it has functional significance other than long terminal repeat;

direct:  
: a repeat where the same sequence is repeated in the same direction;

dispersed:  
: a repeat that is located at dispersed sites in the genome;

*nested:*  
: a repeat that is disrupted by the insertion of another element;

*long_terminal_repeat:*  
: a sequence directly repeated at both ends of a defined sequence, of the sort typically found in retroviruses (replaces LTR Feature Key);

*non_ltr_retrotransposon_polymeric_tract:*  
: a polymeric tract, such as poly(dA), within a non LTR retrotransposon;

*x_element_combinatorial_repeat:*  
: a repeat region located between the X element and the telomere or adjacent Y' element;

*y_prime_element:*  
: a repeat region located adjacent to telomeric repeats or X element combinatorial repeats, either as a single copy or tandem repeat of two to four copies;

*telomeric_repeat:*  
: a repeat region found within the telomere;

*centromeric_repeat:*  
: a repeat region found within the modular centromere;

other:  
: a repeat exhibiting important attributes that cannot be described by other values.
