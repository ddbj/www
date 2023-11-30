---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: メタデータ
category: dra
current_tab: overview
lang: ja
---

## オブジェクト  {#objects}

メタデータにはシークエンスデータがどのようにして得られたのかが記載されています。
メタデータは複数のオブジェクトから構成され、各オブジェクトは [XML スキーマ](https://github.com/ddbj/pub/tree/master/docs/dra)で定義され、相互に関連付けられています。

データモデル図
{% include image.html url="books/sra_object.png" caption="データモデル図" class="w500" %}

[Submission](#Submission){: #Submission-obj}
: 公開予定や登録者といった管理情報を記載し、同時に登録する DRA オブジェクトをまとめる。

[BioProject](#BioProject){: #BioProject-obj}
: 研究プロジェクト。外部データベース。

[BioSample](#BioSample){: #BioSample-obj}
: シークエンスデータが得られた生物学的なサンプル。外部データベース。

[Experiment](#Experiment){: #Experiment-obj}
: サンプルから構築したライブラリーとシークエンス機種に関する情報を記載。Experiment は１つの BioProject と１つの BioSample を参照します。
複数の Experiment は１つの BioSample を参照することができます。１つの Experiment が複数の BioSample を参照することはできません。

[Run](#Run){: #Run-obj}
: シークエンス用ライブラリー (Experiment) に由来するデータファイルをまとめます。Experiment を介してデータファイルは特定のサンプルにリンクされます。
Run に含まれる全てのファイルは１つの SRA/fastq ファイルにマージされ、Run のアクセッション番号がファイル名になります。
ペアードデータファイルは同じ Run に含め、リードが正しくペアとして処理されるようにします。

[Analysis](#Analysis){: #Analysis-obj}
: Run データに関連するデータで、登録先がないデータを登録します。Analysis は DDBJ/EBI/NCBI で交換していません。

[メタデータの例](/dra/example.html)

## メタデータの項目 {#fields}

必須<span class="red">*</span>
条件によって必須<span class="conditionally_required">*</span>

## Submission  {#Submission}

### Submitting organization  {#Area_submitting_organization}

アカウントの Organization の値が自動的に引き写されます。
2023年11月30日に center name は廃止され、組織名の略号管理はなくなりました。

### Hold Until  {#Area_hold-until}

公開方法を指定します。

[Hold Until](#Hold_Until)<a name="Hold_Until"></a><span class="conditionally_required">*</span>
: 公開予定日を設定します。最長で4年後まで設定でき、延長することができます。

[Immediate Release](#Immediate_Release)<a name="Immediate_Release"></a><span class="conditionally_required">*</span>
: 即日公開。登録処理が完了次第、データが公開されます。

### Submitter  {#Area_submitter-submission}

登録者の名前とメールアドレス。責任者 (principal investigator) を含めてください。登録に関する連絡は記入された全てのアドレスに対して行われます。
登録者情報は公開されません。

<div class="attention">
DRA 登録に関するメールは Submission に記載されたメールアドレスに対して送信されます。
D-way アカウントに登録されているメールアドレスを変更した場合、登録に関するメールが送信されるよう、DRA Submission のアドレスも変更する必要があります。
</div>

[Name](#Contact_Name)<a name="Contact_Name"></a><span class="red">*</span>
: 登録者の名前。

[E-mail](#Contact_E-mail)<a name="Contact_E-mail"></a><span class="red">*</span>
: 登録者の電子メールアドレス。

## BioProject  {#BioProject}

[BioProject ID](#DRA_BioProjectID)<a name="DRA_BioProjectID"></a><span class="red">*</span>
: [BioProject](/bioproject/index.html) に登録済みのプロジェクトから該当するものを１つ選択するか、新規に BioProject を登録します。BioProject の登録方法は [BioProject の登録](/bioproject/submission.html) を参照してください。

## BioSample  {#BioSample}

[BioSample ID](#DRA_BioSampleID)<a name="DRA_BioSampleID"></a><span class="red">*</span>
: [BioSample](/biosample/index.html) に登録済みのサンプルから該当するものを選択するか、新たにサンプルを登録し BioSample の登録方法は [BioSample の登録](/biosample/submission.html)を参照してください。

## Experiment  {#Experiment}

[Alias](#Experiment_Alias)<a name="Experiment_Alias"></a>
: 自動的に Experiment に付けられる名前。アクセッション番号のないオブジェクトは Alias で参照されます。

[BioSample Used](#BioSample_Used)<a name="BioSample_Used"></a><span class="red">*</span>
: Experiment が参照している BioSample を選択します。

[Title](#Experiment_Title)<a name="Experiment_Title"></a><span class="red">*</span>
: 検索結果で表示される Experiment の短いタイトル。 自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。 独自のタイトルを入力する場合は、Experiment の内容をタブ区切りテキストファイルとしてダウンロードし、Title カラムにユニークなタイトルを入力しアップロードします。

[Library Name](#Library_Name)<a name="Library_Name"></a>
: ライブラリーの名前。

[Library Source](#Library_Source)<a name="Library_Source"></a><span class="red">*</span>
: ライブラリー構築に用いた試料。

| Library Source     | Description                                                                        |
|---|
| GENOMIC            | Genomic DNA (includes PCR products from genomic DNA).                              |
| TRANSCRIPTOMIC     | Transcription products or non genomic DNA (EST, cDNA, RT-PCR, screened libraries). |
| METAGENOMIC        | Mixed material from metagenome.                                                    |
| METATRANSCRIPTOMIC | Transcription products from community targets.                                     |
| SYNTHETIC          | Synthetic DNA.                                                                     |
| VIRAL RNA          | Viral RNA.                                                                         |
| OTHER              | Other, unspecified, or unknown library source material.                            |

[Library Selection](#Library_Selection)<a name="Library_Selection"></a><span class="red">*</span>
: シークエンスに用いたライブラリを構築するためのサンプルの選別や濃縮方法。

| Library Selection                      | Description                                                                                                                                                                                        |
|---|
| RANDOM                                 | Random shearing only.                                                                                                                                                                              |
| PCR                                    | Source material was selected by designed primers.                                                                                                                                                  |
| RANDOM PCR                             | Source material was selected by randomly generated primers.                                                                                                                                        |
| RT-PCR                                 | Source material was selected by reverse transcription PCR.                                                                                                                                         |
| HMPR                                   | Hypo-methylated partial restriction digest.                                                                                                                                                        |
| MF                                     | Methyl Filtrated.                                                                                                                                                                                  |
| repeat fractionation                   | Selection for less repetitive (and more gene rich) sequence through Cot filtration (CF) or other fractionation techniques based on DNA kinetics.                                                   |
| size fractionation                     | Physical selection of size appropriate targets.                                                                                                                                                    |
| MSLL                                   | Methylation Spanning Linking Library.                                                                                                                                                              |
| cDNA                                   | complementary DNA.                                                                                                                                                                                 |
| cDNA_randomPriming                    |                                                                                                                                                                                                    |
| cDNA_oligo_dT                        |                                                                                                                                                                                                    |
| PolyA                                  | PolyA selection or enrichment for messenger RNA (mRNA); should replace cDNA enumeration.                                                                                                           |
| Oligo-dT                               | enrichment of messenger RNA (mRNA) by hybridization to Oligo-dT.                                                                                                                                   |
| Inverse rRNA                           | depletion of ribosomal RNA by oligo hybridization.                                                                                                                                                 |
| ChIP                                   | Chromatin immunoprecipitation.                                                                                                                                                                     |
| MNase                                  | Micrococcal Nuclease (MNase) digestion.                                                                                                                                                            |
| DNAse                                  | Deoxyribonuclease (DNase) digestion.                                                                                                                                                               |
| Hybrid Selection                       | Selection by hybridization in array or solution.                                                                                                                                                   |
| Reduced Representation                 | Reproducible genomic subsets, often generated by restriction fragment size selection, containing a manageable number of loci to facilitate re-sampling.                                            |
| Restriction Digest                     | DNA fractionation using restriction enzymes.                                                                                                                                                       |
| 5-methylcytidine antibody              | Selection of methylated DNA fragments using an antibody raised against 5-methylcytosine or 5-methylcytidine (m5C)MBD2 protein methyl-CpG binding domain : Enrichment by methyl-CpG binding domain. |
| MBD2 protein methyl-CpG binding domain | MBD2 protein methyl-CpG binding domain.                                                                                                                                                            |
| CAGE                                   | Cap-analysis gene expression.                                                                                                                                                                      |
| RACE                                   | Rapid Amplification of cDNA Ends.                                                                                                                                                                  |
| MDA                                    | multiple displacement amplification.                                                                                                                                                               |
| padlock probes capture method          | Padlock Probes capture strategy to be used in conjuction with Bisulfite-Seq.                                                                                                                       |
| other                                  | Other library enrichment, screening, or selection process.                                                                                                                                         |
| unspecified                            | Library enrichment, screening, or selection is not specified.                                                                                                                                      |

[Library Strategy](#Library_Strategy)<a name="Library_Strategy"></a><span class="red">*</span>
: ライブラリーの構築手法。

| Library Strategy                        | Description                                                                                                                                                                                                                                                               |
|---|
| WGS                                     | Whole genome shotgun.                                                                                                                                                                                                                                                     |
| WGA                                     | Whole genome amplification.                                                                                                                                                                                                                                               |
| WXS                                     | Random sequencing of exonic regions selected from the genome.                                                                                                                                                                                                             |
| RNA-Seq                                 | Random sequencing of whole transcriptome.                                                                                                                                                                                                                                 |
| miRNA-Seq                               | Micro RNA and other small non-coding RNA sequencing.                                                                                                                                                                                                                      |
| ncRNA-Seq                               | Capture of other non-coding RNA types, including post-translation modification types such as snRNA (small nuclear RNA) or snoRNA (small nucleolar RNA), or expression regulation types such as siRNA (small interfering RNA) or piRNA/piwi/RNA (piwi-interacting RNA).    |
| ssRNA-seq                               | strand-specific RNA sequencing                                                                                                                                                                                                                                            |
| WCS                                     | Whole chromosome (or other replicon) shotgun.                                                                                                                                                                                                                             |
| CLONE                                   | Genomic clone based (hierarchical) sequencing.                                                                                                                                                                                                                            |
| POOLCLONE                               | Shotgun of pooled clones (usually BACs and Fosmids).                                                                                                                                                                                                                      |
| AMPLICON                                | Sequencing of overlapping or distinct PCR or RT-PCR products.                                                                                                                                                                                                             |
| CLONEEND                                | Clone end (5', 3', or both) sequencing.                                                                                                                                                                                                                                   |
| FINISHING                               | Sequencing intended to finish (close) gaps in existing coverage.                                                                                                                                                                                                          |
| RAD-Seq                                 | Restriction Site Associated DNA Sequence                                                                                                                                                                                                                                  |
| ChIP-Seq                                | Direct sequencing of chromatin immunoprecipitates.                                                                                                                                                                                                                        |
| MNase-Seq                               | Direct sequencing following MNase digestion.                                                                                                                                                                                                                              |
| DNase-Hypersensitivity                  | Sequencing of hypersensitive sites, or segments of open chromatin that are more readily cleaved by DNaseI.                                                                                                                                                                |
| Bisulfite-Seq                           | Sequencing following treatment of DNA with bisulfite to convert cytosine residues to uracil depending on methylation status.                                                                                                                                              |
| EST                                     | Single pass sequencing of cDNA templates.                                                                                                                                                                                                                                 |
| FL-cDNA                                 | Full-length sequencing of cDNA templates.                                                                                                                                                                                                                                 |
| CTS                                     | Concatenated Tag Sequencing.                                                                                                                                                                                                                                              |
| MRE-Seq                                 | Methylation-Sensitive Restriction Enzyme Sequencing strategy.                                                                                                                                                                                                             |
| MeDIP-Seq                               | Methylated DNA Immunoprecipitation Sequencing strategy.                                                                                                                                                                                                                   |
| MBD-Seq                                 | Direct sequencing of methylated fractions sequencing strategy.                                                                                                                                                                                                            |
| Tn-Seq                                  | Gene fitness determination through transposon seeding.                                                                                                                                                                                                                    |
| FAIRE-seq                               | Formaldehyde Assisted Isolation of Regulatory Elements                                                                                                                                                                                                                    |
| SELEX                                   | Systematic Evolution of Ligands by EXponential enrichment                                                                                                                                                                                                                 |
| NOMe-Seq                                | Nucleosome Occupancy and Methylome sequencing.                                                                                                                                                                                                                            |
| RIP-Seq                                 | Direct sequencing of RNA immunoprecipitates (includes CLIP-Seq, HITS-CLIP and PAR-CLIP).                                                                                                                                                                                  |
| ChIA-PET                                | Direct sequencing of proximity-ligated chromatin immunoprecipitates.                                                                                                                                                                                                      |
| Hi-C                                    | Chromosome Conformation Capture technique where a biotin-labeled nucleotide is incorporated at the ligation junction, enabling selective purification of chimeric DNA ligation junctions followed by deep sequencing                                                      |
| ATAC-seq                                | Assay for Transposase-Accessible Chromatin (ATAC) strategy is used to study genome-wide chromatin accessibility. alternative method to DNase-seq that uses an engineered Tn5 transposase to cleave DNA and to integrate primer DNA sequences into the cleaved genomic DNA |
| Targeted-Capture                        |                                                                                                                                                                                                                                                                           |
| Tethered Chromatin Conformation Capture |                                                                                                                                                                                                                                                                           |
| Synthetic-Long-Read                     | binning and barcoding of large DNA fragments to facilitate assembly of the fragment                                                                                                                                                                                       |
| Other                                   | Library strategy not listed.                                                                                                                                                                                                                                              |

[Library Construction Protocol](#Library_Construction_Protocol)<a name="Library_Construction_Protocol"></a>
: DNA の断片化 (DNA fragmentation)、アダプター配列などのライゲーション (DNA ligation) や濃縮
(DNA enrichment) 方法をフリーテキストで記載します。キットを使用した場合はキットの名前とバージョン (あれば) を含めます (例 Illumina Nextera DNA Library Preparation Kit)。

参考: Alnasir J, Shanahan HP. Investigation into the annotation of protocol sequencing steps in the sequence read archive. Gigascience. 2015 May 9;4:23. doi: 10.1186/s13742-015-0064-7. eCollection 2015. PMID: [25960871](https://www.ncbi.nlm.nih.gov/pubmed/25960871/) (Open Access)

[Instrument](#Instrument)<a name="Instrument"></a><span class="red">*</span>
: シークエンサの機種を選択します。Sequel IIe の場合、Sequel II を選択し、[Library Construction Protocol](#Library_Construction_Protocol) に Sequel IIe を使ったことを記載してください。

| Instrument Model                    |
|---|
| 454 GS                              |
| 454 GS 20                           |
| 454 GS FLX                          |
| 454 GS FLX+                         |
| 454 GS FLX Titanium                 |
| 454 GS Junior                       |
| Illumina Genome Analyzer            |
| Illumina Genome Analyzer II         |
| Illumina Genome Analyzer IIx        |
| Illumina HiSeq 1000                 |
| Illumina HiSeq 1500                 |
| Illumina HiSeq 2000                 |
| Illumina HiSeq 2500                 |
| Illumina HiSeq 3000                 |
| Illumina HiSeq 4000                 |
| Illumina NovaSeq 6000               |
| Illumina MiSeq                      |
| Illumina MiniSeq                    |
| Illumina iSeq 100                   |
| Illumina HiScanSQ                   |
| HiSeq X Five                        |
| HiSeq X Ten                         |
| NextSeq 500                         |
| NextSeq 550                         |
| NextSeq 1000                        |
| NextSeq 2000                        |
| Helicos HeliScope                   |
| AB SOLiD System                     |
| AB SOLiD System 2.0                 |
| AB SOLiD System 3.0                 |
| AB SOLiD 3 Plus System              |
| AB SOLiD 4 System                   |
| AB SOLiD 4hq System                 |
| AB SOLiD PI System                  |
| AB 5500 Genetic Analyzer            |
| AB 5500xl Genetic Analyzer          |
| AB 5500xl-W Genetic Analysis System |
| Complete Genomics                   |
| BGISEQ-500                          |
| DNBSEQ-G400                         |
| DNBSEQ-T7                           |
| DNBSEQ-G50                          |
| MGISEQ-2000RS                       |
| MinION                              |
| GridION                             |
| PromethION                          |
| PacBio RS                           |
| PacBio RS II                        |
| Sequel                              |
| Sequel II                           |
| Ion Torrent PGM                     |
| Ion Torrent Proton                  |
| Ion Torrent S5                      |
| Ion Torrent S5 XL                   |
| Ion GeneStudio S5                   |
| Ion GeneStudio S5 plus              |
| Ion GeneStudio S5 prime             |
| AB 310 Genetic Analyzer             |
| AB 3130 Genetic Analyzer            |
| AB 3130xL Genetic Analyzer          |
| AB 3500 Genetic Analyzer            |
| AB 3500xL Genetic Analyzer          |
| AB 3730 Genetic Analyzer            |
| AB 3730xL Genetic Analyzer          |

[Library Layout](#Library_Layout)<a name="Library_Layout"></a><span class="red">*</span>
: データファイル中のリード構成を選択します。リードの向き (Forward と Reverse) は Instrument から自動判定されます。2022年12月に Spot Type から Library Layout に表示名が変更になりました。

| Spot Type | Description |
|---|
| single | Single read |
| paired | Paired reads |

[Insert Size](#Insert_Size)<a name="Insert_Size"></a><span class="conditionally_required">*</span>
: ペアエンドライブラリを構築した際のインサートサイズ。2022年12月に Nominal Length から Insert Size に表示名が変更になりました。

## Run  {#Run}

[Alias](#Run_Alias)<a name="Run_Alias"></a>
: 自動的に Run に付けられる名前。アクセッション番号のないオブジェクトは Alias で参照されます。

[Title](#Run_Title)<a name="Run_Title"></a><span class="red">*</span>
: Run の短いタイトル。ユニークなタイトルを付けます。 検索結果で表示される Run の短いタイトル。 自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。 独自のタイトルを入力する場合は、[Run の内容をタブ区切りテキストファイルとしてダウンロード](/dra/submission.html#run)し、Title カラムにユニークなテキストを入力しアップロードします。

[Experiment Referenced](#Experiment_Referenced)<a name="Experiment_Referenced"></a><span class="red">*</span>
: Run が属する Experiment を選択します。

### Data files for Run  {#Area_data-files-for-run}

Run に含めるデータファイルを選択します。

[Run/Analysis](#Run_Analysis)<a name="Run_Analysis"></a>
: データファイルが Run もしくは Analysis に属しているのかを指定します。ウェブ画面上では入力できず、属している Run もしくは Analysis の alias が選択されると自動的に入力されます。タブ区切りテキストファイルで入力する場合には、Run もしくは Analysis を入力します。

[File Name](#File_Name)<a name="File_Name"></a><span class="red">*</span>
: シークエンスデータファイル名。DRA サーバにアップロードされているファイル名が自動的に入力されます。

[Run/Analysis contains files](#Run_Analysis_contains_files)<a name="Run_Analysis_contains_files"></a><span class="red">*</span>
: データファイルが属する Run を選択します。

[File Type](#File_Type)<a name="File_Type"></a><span class="red">*</span>
: シークエンスデータのファイル形式。fastq ファイルの場合、リード長が一定かそうでないかに関わらず全て "fastq" を選択します。

| File Type        | Description                                                                                                            |
|---|
| fastq            | fastq files                                                                                                            |
| hdf5             | PacBio hdf5 Format file                                                                                                |
| bam              | Binary SAM format for use by loaders that combine alignment and sequencing data                                        |
| tab              | A tab-delimited table maps "SN in SQ line of BAM header" and "reference fasta file"                                    |
| reference_fasta | Reference sequence file in single fasta format used to construct SRA archive file format. Filename must end with ".fa"  |

[MD5 Checksum](#MD5_Checksum)<a name="MD5_Checksum"></a><span class="red">*</span>
: データファイルの MD5 チェックサム値。[MD5 チェックサム値の取得方法](/checksum.html)

## Analysis  {#Analysis}

[Alias](#Analysis_Alias)<a name="Analysis_Alias"></a>
: 自動的に Analysis に付けられる名前。アクセッション番号のないオブジェクトは Alias で参照されます。

[Title](#Analysis_Title)<a name="Analysis_Title"></a><span class="red">*</span>
: Analysis オブジェクトのタイトル。

[Description](#Analysis_Description)<a name="Analysis_Description"></a><span class="red">*</span>
: Analysis の内容を記述します。

[Analysis Type](#Analysis_Type)<a name="Analysis_Type"></a><span class="red">*</span>
: Analysis の種類を選択します。アライメントデータは Run に登録します。

|  Analysis Type  |  Description  |
|---|
|  De Novo Assembly  |  A placement of sequences including trace, SRA, GI records into a multiple alignment from which a consensus is computed..  |
|  Sequence Annotation  |  Per sequence annotation of named attributes and values.<br> Example: Processed sequencing data for submission to dbEST without assembly.<br> Reads have already been submitted to one of the sequence read archives in raw form.<br> The fasta data submitted under this analysis object result from the following treatments, which may serve to filter reads from the raw dataset:<br>     - sequencing adapter removal<br>     - low quality trimming<br>- poly-A tail removal<br>- strand orientation <br>- contaminant removal.  |
|  Abundance Measurement  |  Identify the tools and processing steps used to produce the abundance measurements (coverage tracks).  |

### Data files for Analysis  {#Area_data-files-for-analysis}

Analysis に含めるデータファイルを選択します。

[Run/Analysis](#Run_Analysis_for_Analysis)<a name="Run_Analysis_for_Analysis"></a>
: データファイルが Run もしくは Analysis に属しているのかを指定します。ウェブ画面上では入力できず、属している Run もしくは Analysis の alias が選択されると自動的に入力されます。タブ区切りテキストファイルで入力する場合には、Run もしくは Analysis を入力します。

[File Name](#Analysis_File_Name)<a name="Analysis_File_Name"></a><span class="red">*</span>
: 解析データのファイル名。

[Run/Analysis contains files](#Analysis_Run_Analysis_contains_files)<a name="Analysis_Run_Analysis_contains_files"></a><span class="red">*</span>
: データファイルが属する Analysis を選択します。

[File Type](#Analysis_File_Type)<a name="Analysis_File_Type"></a><span class="red">*</span>
: 解析データのファイル形式。

|  File Type  |  Description  |
|---|
|  bam  |  Binary form of the Sequence alignment/map format for read placements, from the SAM tools project.<br/>See <a href="http://sourceforge.net/projects/samtools/">http://sourceforge.net/projects/samtools/</a>.  |
|  tab  |  A tab delimited text file that can be viewed as a spreadsheet. The first line should contain column headers..  |
|  ace  |  Multiple alignment file output from the phred assembler and similar programs.<br/>See <a href="http://www.phrap.org/consed/distributions/README.16.0.txt">http://www.phrap.org/consed/distributions/README.16.0.txt</a> for a description of the ACE file format..  |
|  fasta  |  Sequence data format indicating sequence base calls.The format is simple: a header line initiated with the &gt; character, data lines following with base calls..  |
|  wig  |  The wiggle (WIG) format allows display of continuous-valued data in track format.This display type is useful for GC percent, probability scores, and transcriptome data.<br/> See <a href="http://genome.ucsc.edu/goldenPath/help/wiggle.html">http://genome.ucsc.edu/goldenPath/help/wiggle.html</a> for a description of the Wiggle Track format..  |
|  bed  |  BED format provides a flexible way to define the data lines that are displayed in an annotation track.<br/> See <a href="http://genome.ucsc.edu/FAQ/FAQformat#format1">http://genome.ucsc.edu/FAQ/FAQformat#format1</a> for a description of the BED format..  |
|  vcf  |  Variant Call Format.<br/>See <a href="http://www.1000genomes.org/wiki/analysis/variant%20call%20format/vcf-variant-call-format-version-41">http://www.1000genomes.org/wiki/analysis/variant%20call%20format/vcf-variant-call-format-version-41</a> for a description of the VCF format.  |
|  maf  |  Mutation Annotation Format  |
|  gff  |  General Feature Format  |
|  csv  |    |
|  tsv  |    |

[MD5 Checksum](#Analysis_MD5_Checksum)<a name="Analysis_MD5_Checksum"></a><span class="red">*</span>
: Analysis データファイルの MD5 チェックサム値。[MD5 チェックサム値の取得方法](/checksum.html)

