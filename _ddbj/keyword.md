---
layout: indexed_content
title: INSDC agreed methodological keywords

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

## INSDC agreed methodological keywords

The original site; [INSDC agreed methodological keywords](http://www.insdc.org/documents/methodological-keywords) 2013.10.31 version

Methodological keywords are added at the discretion of the INSDC from a controlled vocabulary of terms that explicitly describe the type of sequence contained within the entry.

| Keyword                        |Description             |
| -------------------------------| ---------------------- |
| BARCODE                        | a genetic barcode sequence that meets the standards as defined by CBoL (Consortium for the Barcode of Life)|
| CAGE (Cap Analysis Gene Express| short sequences in 5' end of mRNA obtained by using Cap Analysis Gene Expression|
| CAP trapper                    | sequences obtained from cDNAs created using cap-trapping|
| ENV                            | A sequence derived from an environmental sample (see the description for the /environmental sample qualifier in Feature Table document)|
| EST                            | Short single pass cDNA sequences with no annotation other than a source feature.|
| expressed sequence tag         | Short single pass cDNA sequences with no annotation other than a source feature.|
| EST (expressed sequence tag)   | Deprecated.|
| 3'-end sequence (3'-EST)       | EST sequence from the 3' direction|
| 5'-end sequence (5'-EST)       | EST sequence from the 5' direction|
| FLI_CDNA                       | A sequence derived from a cDNA libraries created using full-mRNA cloning methods|
| GSS                            | Genome survey sequence, short single pass genomic sequences|
| genome survey sequence         | Genome survey sequence, short single pass genomic sequences|
| HTC                            | High-throughput cDNA record from full length cDNA sequencing projects.|
| HTG                            | The sequence submitted mainly from genome sequencing projects which regarded a clone as a sequencing unit.|
| HTGS_PHASE0                    | Sequence consists of an unordered set of sequencing reads (typically 100-200), unoriented, unordered, unannotated and containing gaps|
| HTGS_PHASE1                    | Sequence consists of unfinished, may be unordered, unoriented contigs, with gaps, with or without annotation.|
| HTGS_PHASE2                    | Sequence consists of unfinished, ordered, oriented contigs, with or without gaps, with or without annotation.|
| HTGS_PHASE3                    | deprecated; once the sequence is considered to be finished, the HTGS_PHASEx keyword should be removed|
| HTGS_DRAFT                     | Sequence at draft stage. These should be, on average over all draft depositions, at least 4X coverage (but can be more) and are Phase 1 or Phase 2.|
| HTGS_ENRICHED                  | The BAC assembly is enriched by inclusion of both BAC generated reads and overlapping WGS reads.|
| HTGS_POOLED_CLONE              | The assembly consists of a specific BAC clone's reads that were deconvoluted from an array of pooled clones; contains overlapping reads from WGS sequencing if used in conjunction with HTGS_ENRICHED.|
| HTGS_POOLED_MULTICLONE         | The assembly consists of reads from multiple BAC clone reads that have not yet been deconvoluted from an array of pooled clones.|
| UNORDERED                      | For CON records, order and orientation of components are unknown.|
| oligo capping                  | sequences obtained from cDNAs created using oligo-capping|
| STS                            | Sequence tagged site; The tag site for genome sequencing. The information of chromosome, map, PCR_condition is mandatory for this division.|
| sequence tagged site           | Sequence tagged site; The tag site for genome sequencing. The information of chromosome, map, PCR_condition is mandatory for this division.|
| STS (sequence tagged site)     | Deprecated.|
| TPA                            | Re-annotation/re-assemblies of primary sequences deposited in INSDC, the Trace Archive (TA) or the Sequence Read Archive (SRA) that have been the focus of a peer reviewed publication.|
| Third Party Data               | Re-annotation/re-assemblies of primary sequences deposited in INSDC, the Trace Archive (TA) or the Sequence Read Archive (SRA) that have been the focus of a peer reviewed publication.|
| TPA:experimental               | TPA sequences where the annotations presented are supported by wet-lab experimental evidence|
| TPA:inferential                | TPA sequences where the annotations presented are not supported by wet-lab experimental evidence|
| TPA:specialist_db              | TPA sequences that are submitted from an existing authoritative public database that is built using INSDC sequence data and is described in an accepted peer-reviewed publication|
| TPA:assembly                   | TPA sequences that are a re-assembly of an existing genome or large genomic region or TPA sequences that are a de-novo assembly of existing primary sequences deposited in INSDC|
| TSA                            | shotgun assemblies of primary transcriptome data deposited in INSDC, the Trace Archive (TA) or the Sequence Read Archive (SRA)|
| Transcriptome Shotgun Assembly | shotgun assemblies of primary transcriptome data deposited in INSDC, the Trace Archive (TA) or the Sequence Read Archive (SRA)|
| WGS                            | Whole genome shotgun data from a sequencing project where the data are likely to be completely reassembled with no tracking between reassembly updates.|
| STANDARD_DRAFT                 | Standard draft genome sequence data should refer to any number of reads, or runs on any number of different sequencing platforms, and assembled into sequenced contigs.|
| HIGH_QUALITY_DRAFT             | This should refer to a product with overall coverage representing greater than 90% of the genome or target region. Efforts should be made to include only sequence of the target organism and exclude contaminating sequences (e.g. from tissue cell lines).|
| IMPROVED_HIGH_QUALITY_DRAFT    | This standard refers to a high-quality-draft assembled sequence where additional work has been performed beyond the initial shotgun sequencing and standard assembly using either manual or automated methods. In addition, this standard should contain no discernable misassemblies, and if feasible, should have attempted to reduce the number of contigs (thus reducing the number of gaps) and supercontigs (or scaffolds). |
| NON_CONTIGUOUS_FINISHED <span class="new">NEW!</span> | This standard describes high-quality assemblies that have been subject to automated and manual improvement, and where closure approaches have been successful for almost all gaps, misassemblies, and low-quality regions. Attempts have been made to resolve all gap and sequence uncertainties, and only those recalcitrant to resolution remain (with notations in the genome submission as to the nature of the uncertainty). |
