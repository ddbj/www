---
layout: indexed_content
title: Genome Project のデータ登録
pathname: genome
category: datacategories
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

## Genome Project のデータ登録

ゲノム配列決定の各段階と登録データの種別の対応を示します。  
実際には併用されることも多いのですが、下図では典型的な手法の各段階を模式的に示しています。  
なお、大規模なゲノム配列決定プロジェクトは [BioProject](/bioproject/index.html) と [BioSample](/biosample/index.html) にも ご登録ください。

**重要:**[ヒトを対象とした研究データの登録について](/policies.html#human)

[INSDC standards for genome assembly submission](/ddbj/assembly.html) もご参照ください。

![]({{ site.baseurl }}/assets/images/ddbj/genome.png)

[DRA] Raw outputs 次世代シークエンサの出力  
: 次世代シークエンサからの出力データは [DDBJ Sequence Read Archive (DRA)](/dra/index.html)へご登録ください。

[DTA] Chromatograms, Sequences, Qualities: Sanger 法の出力  
: single-path read の DNA sequence chromatograms (traces), base calls, quality estimates は、DDBJ [Trace Archive (DTA)](/dta/index.html) へご登録ください。

[WGS] Contigs: assemblies (overlapping reads)  
: 冗長な raw read sequences ではなく、ある程度計算機処理を経た overlapping reads の配列は、[WGS](/ddbj/wgs.html) として [Mass Submission System](/ddbj/mss.html) から ご登録ください。

[HTG] draft sequences of large clones  
: finished レベルに達していない BAC, YAC, fosmid clone などの概要配列は [HTG](/ddbj/htg.html) として [Mass Submission System](/ddbj/mss.html) から ご登録ください。

[CON] Scaffolds: supercontigs or clone tiling path  
: gap を含めた連結構造、いわゆる supercontigs (assembled contigs separated by gaps)、または、複数の clone の tiling path として長大な配列を記載する場合は、[CON](/ddbj/con.html) として [Mass Submission System](/ddbj/mss.html) から ご登録ください。

Finished genomic sequences  
: 一般的なデータ、または、complete genome として [Mass Submission System](/ddbj/mss.html) から ご登録ください。
