---
layout: indexed_content
title: DDBJ Sequence Read Archive Handbook
pathname: submission
category: dra
lang: ja
---

# DDBJ Sequence Read Archive

[DDBJ Sequence Read Archive (DRA)]({{ site.baseurl }}/aboutdra/index.html) は Roche 454 GS System®、Illumina Genome Analyzer®、Applied Biosystems SOLiD® System などの次世代シークエンサからの出力データのためのデータベースです。 DRA は [International Nucleotide Sequence Database Collaboration (INSDC)]({{ site.baseurl }}/aboutus/insdc.html) のメンバーであり、 [NCBI Sequence Read Archive (SRA)](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi) と [EBI Sequence Read Archive (ERA)](https://www.ebi.ac.uk/ena/) との国際協力のもと、運営されています。

公開された Analysis 以外のデータは3極で自動的にミラーリングされます。

従来のキャピラリ式シークエンサからの出力データは fastq ファイルとして DRA に登録することができます。 クロマトグラムの登録を希望する場合は [DDBJ Trace Archive]({{ site.baseurl }}/aboutdta/index.html) に登録します。

## メタデータ <a name="metadata"></a>

### メタデータオブジェクト <a name="metadata-objects"></a>

メタデータにはシークエンスデータがどのようにして得られたのかが記載されています。 メタデータは [Submission](#Submission)、[BioProject](#BioProject)、[BioSample](#BioSample)、[Experiment](#Experiment)、[Run](#Run)、[Analysis](#Analysis) の各オブジェクトで構成されます。 各オブジェクトは XML スキーマで定義され、相互に関連付けられています。アクセッション番号はオブジェクトに して発行されます。 オブジェクトの構造とアクセッション番号は DDBJ/EBI/NCBI で共通です。 Experiment Run、Analysis は SRA のオブジェクトで、BioProject と BioSample は外部データベースのオブジェクトにな ます。

メタデータの詳細は対応する XML スキーマをご覧ください。[DRA XML schema](https://github.com/ddbj/pub/tree/master/docs/dra)

[Submission](#Submission)  
: 登録するオブジェクトをとりまとめるオブジェクト。

[BioProject](#BioProject)  
: 研究プロジェクト全体の概要。プロジェクトは複数のサンプルやデータセットを含むことが一般的です。

[BioSample](#BioSample)  
: 生物学的なサンプルに関する記述。サンプルはユニークな属性をもった BioSample として登録します。

[Experiment](#Experiment)  
: BioSample に由来するシークエンス用ライブラリーとシークエンスの手法について記載します。 Experiment は１つの BioProject と１つの BioSample を参照します。 複数の Experiment は１ BioSample を参照することができますが、逆に１つの Experiment が複数の BioSample を参照することはできません。

[Run](#Run)  
: シークエンス用ライブラリー (Experiment) に由来するファイルをまとめます。 Experiment を介してデータファイルは特定のサンプルにリンクされます。 Run に含まれる全てのファイルは１つの SRA/fastq ファイルにマージされ、Run のアクセッション番号がファイル名になります。そのため、異なるサンプ replicate に由来するファイルは同じ Run に含めるべきではありません。 一方、ペアード タファイルは同じ Run に含め、リードが正しくペアとして処理されるようにします。

[Analysis](#Analysis)  
: Run に格納されたデータを解析したデータで、しかるべき登録先がないようなデータを登録します。Analysis は DDBJ/EBI/NCBI で交換していません。 交換を希望する場合は [DRA チームに連絡します]({{ site.baseurl }}/aboutus/contact.html)。 Analysis は [DRASearch](http://ddbj.nig.ac.jp/DRASearch) でインデックスされず、ftp でのファイル公開のみになります。

{::nomarkdown}
{% include image.html url="books/sra_object.png" caption="データモデル" class="w450" %}
{:/}

### オブジェクトの構成例 <a name="organization-metadata-objects"></a>

登録者は実際のデータにあわせて柔軟にオブジェクトを構成することができます。

  - [最もシンプルなケース](#ex_simple)
  - [三つの菌株の比較ゲノム解析 (ペアエンド)](#ex_samples)
  - [(Technical, Biological) replicate がある場合 (ペアエンド)](#ex_replicates)
  - [関連するデータが別々の論文に発表される場合](#ex_submissions)

#### 最もシンプルなケース <a name="ex_simple"></a>

{::nomarkdown}
{% include image.html url="submission/obj_ex1.jpg" caption="最もシンプルなケース" class="w450" %}
{:/}

#### 三つの菌株の比較ゲノム解析 (ペアエンド) <a name="ex_samples"></a>

ペアリードファイルは同じ Run に含めます。

{::nomarkdown}
{% include image.html url="submission/obj_ex2.jpg" caption="三つの菌株の比較ゲノム解析 (ペアエンド)" class="w450" %}
{:/}

#### (Technical, Biological) replicate がある場合 (ペアエンド) <a name="ex_replicates"></a>

[関連する FAQ: 塩基配列登録にはいくつのサンプルが必要ですか?](/faq/ja/index.html#samples-for-sra)

{::nomarkdown}
{% include image.html url="submission/obj_exreplicate.jpg" caption="(Technical, Biological) replicate がある場合　(ペアエンド)" class="w450" %}
{:/}

#### 関連するデータが別々の論文に発表される場合 <a name="ex_submissions"></a>

{::nomarkdown}
{% include image.html url="submission/obj_ex3.jpg" caption="関連するデータが別々の論文に発表される場合" class="w450" %}
{:/}

メタデータ各項目の説明

必須<span class="red">*</span>  
条件によって必須<span class="conditionally_required">*</span>

### Submission <a name="Submission"></a> 

#### Center Name <a name="Area_center-name"></a>

登録者が所属する組織に関する情報を記載します。

[Center Name](#Submission_Center_Name)<a name="Submission_Center_Name"></a><span class="red">*</span>  
: 登録者が所属する組織の Center Name。[Center Name リスト。](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/meta/list/centerlist)DDBJ/EBI/NCBI
SRA にデータを登録する際にはこの Center Name が必要です。

メタデータ作成ツールはアカウント情報から Center Name を自動的に取得します。

<span class="red">Center Name は登録の所有権を示すものではなく、SRA が運用上使用している略称です。所有権は [Submitter](#Area_submitter-submission) に記載される登録者にあります。</span>

<!-- end list -->

[Lab Name](#Laboratory_Name)<a name="Laboratory_Name"></a><span class="red">*</span>  
: 登録者が所属する研究室やグループ名。アカウントに登録されている "Lab/Group"、"Department (2)"、"Department (1)"、"Organization" がカンマで連結されたテキストが初期表示されます。

#### Hold Until <a name="Area_hold-until"></a>

公開方法を指定します。

[Hold Until](#Hold_Until)<a name="Hold_Until"></a><span class="conditionally_required">*</span>  
: 公開予定日を設定します。最長で4年後まで設定でき、延長することができます。

<!-- end list -->

[Immediate Release](#Immediate_Release)<a name="Immediate_Release"></a><span class="conditionally_required">*</span>  
: 即日公開。登録作業が終わり次第、データが公開されます。

#### Submitter <a name="Area_submitter-submission"></a>

登録者の名前とメールアドレスのリストです。責任者 (principal investigator) を含めてください。登録に関する連絡は記入された全てのアドレスに対して行われます。<span class="red">責任者以外の人が登録作業をした場合、その作業者を含めてください。</span>登録者情報は公開されません。登録者情報を明示したい場合は BioProject に記載してください。

[Name](#Contact_Name)<a name="Contact_Name"></a><span class="red">*</span>  
: 登録者の名前。

<!-- end list -->

[E-mail](#Contact_E-mail)<a name="Contact_E-mail"></a><span class="red">*</span>  
: 登録者の電子メールアドレス。

### BioProject <a name="BioProject"></a> 

[BioProject ID](#DRA_BioProjectID)<a name="DRA_BioProjectID"></a><span class="red">*</span>  
: [BioProject]({{ site.baseurl }}/aboutbioproject/index.html) に登録済みのプロジェクトから該当するものを１つ選択するか、新規に BioProject を登録します。BioProject の登録方法は [BioProject Handbook]({{ site.baseurl }}/aboutbioproject/submission.html) を参照してください。

### BioSample <a name="BioSample"></a> 

[BioSample ID](#DRA_BioSampleID)<a name="DRA_BioSampleID"></a><span class="red">*</span>  
: [BioSample]({{ site.baseurl }}/aboutbiosample/index.html) に登録済みのサンプルから該当するものを選択するか、新たにサンプルを登録し BioSample の登録方法は [BioSample Handbook]({{ site.baseurl }}/aboutbiosample/submission.html) をてください。

### Experiment <a name="Experiment"></a>

[Alias](#Experiment_Alias)<a name="Experiment_Alias"></a>  
: 自動的に Experiment に付けられる名前。アクセッション番号のないオブジェクトは Alias で参照されます。

<!-- end list -->

[BioSample Used](#BioSample_Used)<a name="BioSample_Used"></a><span class="red">*</span>  
: Experiment が参照している BioSample を選択します。

<!-- end list -->

[Title](#Experiment_Title)<a name="Experiment_Title"></a><span class="red">*</span>  
: 検索結果で表示される Experiment の短いタイトル。 自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。 独自のタイトルを入力する場合は、Experiment の内容をタブ区切りテキストファイルとしてダウンロードし、Title カラムにユニークなテキストを入力しアップロードします。

<!-- end list -->

[Library Name](#Library_Name)<a name="Library_Name"></a>  
: ライブラリーの名前。

<!-- end list -->

[Library Source](#Library_Source)<a name="Library_Source"></a><span class="red">*</span>  
: ライブラリー構築に用いた試料。

    | Library Source     | Description                                                                        |
    | ------------------ | ---------------------------------------------------------------------------------- |
    | GENOMIC            | Genomic DNA (includes PCR products from genomic DNA).                              |
    | TRANSCRIPTOMIC     | Transcription products or non genomic DNA (EST, cDNA, RT-PCR, screened libraries). |
    | METAGENOMIC        | Mixed material from metagenome.                                                    |
    | METATRANSCRIPTOMIC | Transcription products from community targets.                                     |
    | SYNTHETIC          | Synthetic DNA.                                                                     |
    | VIRAL RNA          | Viral RNA.                                                                         |
    | OTHER              | Other, unspecified, or unknown library source material.                            |

<!-- end list -->

[Library Selection](#Library_Selection)<a name="Library_Selection"></a><span class="red">*</span>  
: シークエンスに用いたライブラリを構築するためのサンプルの選別や濃縮方法。

    | Library Selection                      | Description                                                                                                                                                                                        |
    | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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

<!-- end list -->

[Library Strategy](#Library_Strategy)<a name="Library_Strategy"></a><span class="red">*</span>  
: ライブラリーの構築手法。

    | Library Strategy                        | Description                                                                                                                                                                                                                                                               |
    | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
    | RIP-Seq                                 | Direct sequencing of RNA immunoprecipitates (includes CLIP-Seq, HITS-CLIP and PAR-CLIP).                                                                                                                                                                                  |
    | ChIA-PET                                | Direct sequencing of proximity-ligated chromatin immunoprecipitates.                                                                                                                                                                                                      |
    | Hi-C                                    | Chromosome Conformation Capture technique where a biotin-labeled nucleotide is incorporated at the ligation junction, enabling selective purification of chimeric DNA ligation junctions followed by deep sequencing                                                      |
    | ATAC-seq                                | Assay for Transposase-Accessible Chromatin (ATAC) strategy is used to study genome-wide chromatin accessibility. alternative method to DNase-seq that uses an engineered Tn5 transposase to cleave DNA and to integrate primer DNA sequences into the cleaved genomic DNA |
    | Targeted-Capture                        |                                                                                                                                                                                                                                                                           |
    | Tethered Chromatin Conformation Capture |                                                                                                                                                                                                                                                                           |
    | Synthetic-Long-Read                     | binning and barcoding of large DNA fragments to facilitate assembly of the fragment                                                                                                                                                                                       |
    | Other                                   | Library strategy not listed.                                                                                                                                                                                                                                              |

<!-- end list -->

[Library Construction Protocol](#Library_Construction_Protocol)<a name="Library_Construction_Protocol"></a>  
: DNA の断片化 (DNA fragmentation)、アダプター配列などのライゲーション (DNA ligation) や濃縮
(DNA enrichment) 方法をフリーテキストで記載します。キットを使用した場合はキットの名前とバージョン (あれば) を含めます (例 Illumina Nextera DNA Library Preparation Kit)。
  
参考: Alnasir J, Shanahan HP. Investigation into the annotation of protocol sequencing steps in the sequence read archive. Gigascience. 2015 May 9;4:23. doi: 10.1186/s13742-015-0064-7. eCollection 2015. PMID: [25960871](https://www.ncbi.nlm.nih.gov/pubmed/25960871/) (Open Access)

<!-- end list -->

[Instrument](#Instrument)<a name="Instrument"></a><span class="red">*</span>  
: シークエンサの機種を選択します。

    | Instrument Model                    |
    | ----------------------------------- |
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
    | MinION                              |
    | GridION                             |
    | PromethION                          |
    | PacBio RS                           |
    | PacBio RS II                        |
    | Sequel                              |
    | Ion Torrent PGM                     |
    | Ion Torrent Proton                  |
    | Ion Torrent S5                      |
    | Ion Torrent S5 XL                   |
    | AB 310 Genetic Analyzer             |
    | AB 3130 Genetic Analyzer            |
    | AB 3130xL Genetic Analyzer          |
    | AB 3500 Genetic Analyzer            |
    | AB 3500xL Genetic Analyzer          |
    | AB 3730 Genetic Analyzer            |
    | AB 3730xL Genetic Analyzer          |

<!-- end list -->

[Spot Type](#Spot_Type)<a name="Spot_Type"></a><span class="red">*</span>  
: データファイル中のリード構成を選択します。

    | Spot Type   | Description                           |
    | ----------- | ------------------------------------- |
    | single      | Single read                           |
    | paired (FF) | Paired reads with same direction.     |
    | paired (FR) | Paired reads with opposite direction. |

<!-- end list -->

[Nominal Length](#Nominal_Length)<a name="Nominal_Length"></a><span class="conditionally_required">*</span>  
: ペアエンドライブラリを構築した際のインサートサイズ。

<!-- end list -->

[Nominal Sdev](#Nominal_Sdev)<a name="Nominal_Sdev"></a>  
: インサートサイズの標準偏差

<!-- end list -->

[Spot Length](#Spot_Length)<a name="Spot_Length"></a><span class="red">*</span>  
: データファイル中のリードの長さを記載します。ペアードの場合は両リードの合計長 (ギャップ長は除きます) を記入します。
    
  - Spot length が一定の場合、一定の値を記入
  - リード長が一定ではない 454 プラットフォームの場合、フロー数を記入
  - 不定長の fastq の場合、平均長を記入

### Run <a name="Run"></a>

[Alias](#Run_Alias)<a name="Run_Alias"></a>  
: 自動的に Run に付けられる名前。アクセッション番号のないオブジェクトは Alias で参照されます。

<!-- end list -->

[Title](#Run_Title)<a name="Run_Title"></a><span class="red">*</span>  
: Run の短いタイトル。ユニークなタイトルを付けます。 検索結果で表示される Run の短いタイトル。 自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。 独自のタイトルを入力する場合は、Run の内容をタブ区切りテキストファイルとしてダウンロードし、Title カラムにユニークなテキストを入力しアップロードします。

<!-- end list -->

[Experiment Referenced](#Experiment_Referenced)<a name="Experiment_Referenced"></a><span class="red">*</span>  
: Run が属する Experiment を選択します。

#### Data files for Run <a name="Area_data-files-for-run"></a>

Run に含めるデータファイルを選択します。

[Run/Analysis](#Run_Analysis)<a name="Run_Analysis"></a>  
: データファイルが Run もしくは Analysis に属しているのかを指定します。ウェブ画面上では入力できず、属している Run もしくは Analysis の alias が選択されると自動的に入力されます。タブ区切りテキストファイルで入力する場合には、Run もしくは Analysis を入力します。

<!-- end list -->

[File Name](#File_Name)<a name="File_Name"></a><span class="red">*</span>  
: シークエンスデータファイル名。DRA サーバにアップロードされているファイル名が自動的に入力されます。

<!-- end list -->

[Run/Analysis contains files](#Run_Analysis_contains_files)<a name="Run_Analysis_contains_files"></a><span class="red">*</span>  
: データファイルが属する Run を選択します。

<!-- end list -->

[File Type](#File_Type)<a name="File_Type"></a><span class="red">*</span>  
: シークエンスデータのファイル形式。リード長が一定ではない fastq ファイルの場合は  "generic_fastq"、一定の場合は "fastq" を選択します。

    | File Type        | Description                                                                                                            |
    | ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | generic_fastq   | fastq files with variable read length                                                                                  |
    | fastq            | fastq files with constant read length                                                                                  |
    | sff              | 454 Standard Flowgram Format file                                                                                      |
    | hdf5             | PacBio hdf5 Format file                                                                                                |
    | bam              | Binary SAM format for use by loaders that combine alignment and sequencing data                                        |
    | tab              | A tab-delimited table maps "SN in SQ line of BAM header" and "reference fasta file"                                    |
    | reference_fasta | Reference sequence file in single fasta format used to construct SRA archive file format. Filename must end with ".fa" |

<!-- end list -->

[MD5 Checksum](#MD5_Checksum)<a name="MD5_Checksum"></a><span class="red">*</span>  
: データファイルの MD5 チェックサム値。[MD5 チェックサム値の取得方法](#supplement-md5)

### Analysis <a name="Analysis"></a>

[Alias](#Analysis_Alias)<a name="Analysis_Alias"></a>
: 自動的に Analysis に付けられる名前。アクセッション番号のないオブジェクトは Alias で参照されます。

<!-- end list -->

[Title](#Analysis_Title)<a name="Analysis_Title"></a><span class="red">*</span>  
: Analysis オブジェクトのタイトル。

<!-- end list -->

[Description](#Analysis_Description)<a name="Analysis_Description"></a><span class="red">*</span>  
: Analysis の内容を記述します。

<!-- end list -->

[Analysis Type](#Analysis_Type)<a name="Analysis_Type"></a><span class="red">*</span>  
: Analysis の種類を選択します。アライメントデータは Run に登録します。

  |  Analysis Type  |  Description  |
  | ---- | ---- |
  |  De Novo Assembly  |  A placement of sequences including trace, SRA, GI records into a multiple alignment from which a consensus is computed..  |
  |  Sequence Annotation  |  Per sequence annotation of named attributes and values.<br> Example: Processed sequencing data for submission to dbEST without assembly.<br> Reads have already been submitted to one of the sequence read archives in raw form.<br> The fasta data submitted under this analysis object result from the following treatments, which may serve to filter reads from the raw dataset:<br>     - sequencing adapter removal<br>     - low quality trimming<br>- poly-A tail removal<br>- strand orientation <br>- contaminant removal.  |
  |  Abundance Measurement  |  Identify the tools and processing steps used to produce the abundance measurements (coverage tracks).  |

#### Data files for Analysis <a name="Area_data-files-for-analysis"></a>

Analysis に含めるデータファイルを選択します。

[Run/Analysis](#Run_Analysis_for_Analysis)<a name="Run_Analysis_for_Analysis"></a>  
: データファイルが Run もしくは Analysis に属しているのかを指定します。ウェブ画面上では入力できず、属している Run もしくは Analysis の alias が選択されると自動的に入力されます。タブ区切りテキストファイルで入力する場合には、Run もしくは Analysis を入力します。

<!-- end list -->

[File Name](#Analysis_File_Name)<a name="Analysis_File_Name"></a><span class="red">*</span>  
: 解析データのファイル名。

<!-- end list -->

[Run/Analysis contains files](#Analysis_Run_Analysis_contains_files)<a name="Analysis_Run_Analysis_contains_files"></a><span class="red">*</span>  
: データファイルが属する Analysis を選択します。

<!-- end list -->

[File Type](#Analysis_File_Type)<a name="Analysis_File_Type"></a><span class="red">*</span>  
: 解析データのファイル形式。

    |  File Type  |  Description  |
    | ---- | ---- |
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

<!-- end list -->

[MD5 Checksum](#Analysis_MD5_Checksum)<a name="Analysis_MD5_Checksum"></a><span class="red">*</span>  
: Analysis データファイルの MD5 チェックサム値。[MD5 チェックサム値の取得方法補足](#supplement-md5)

## Run データファイル <a name="run-data-files"></a>

アライメントデータやシークエンスデータを登録します。

{::options parse_block_html="true" /}
<div class="attention red">
  - fasta は受け付けていません。最低限 quality score 付きのベース/カラーコールデータが必要です。
  - ファイル名は英数字 [A-Z,a-z,0-9]、アンダースコア [_]、ハイフン [-] とドット [.] のみから構成され、空白文字、カッコ、句読点やシンボルを含まないこと。
  - バーコード配列で由来サンプルが区別されたデータファイルは登録前に分割し、由来サンプルごとに BioSample を作成します。各 BioSample には１つかそれ以上のユニークなデータファイルがリンクされている状態にします。
  - fastq ファイルの場合、ペアリードは別々のファイルとして登録します。bam や sff ファイルの場合、分割する必要はありません。
  - データファイルは登録用ディレクトリの直下に置いてください。基本的に tar などのアーカイブファイルのなかにディレクトリを作成しないでください。
  - BAM、SFF や HDF5 などのバイナリーファイルは圧縮しないでください。
</div>

### 登録するデータファイルの形式について <a name="formats-sequencing-data-files"></a> <a name=""></a>

DRA のメタデータ作成ツールは technical read (アダプター、プライマーやバーコード配列) を記載することに対応していません。 「technical read を含む生データを登録する場合」や「[DRA XML schema](https://github.com/ddbj/pub/tree/master/docs/dra) 中にはあるがツール中には無い項目をメタデータに記載する場合」は[メタデータを XML ファイルで登録する](#create-metadata-in-xml-files)必要があります ([XML の記載例](/ddbj/example.html))。

一般的な形式

| Format                                           | Platform      | Recommended |
| ------------------------------------------------ | ------------- | ----------- |
| [BAM](#BAM_file) | all platforms | Yes         |
| [fastq](#fastq)                                  | all platforms | Yes         |

プラットフォーム特異的な形式

| Format                                           | Platform            | Recommended                      |
| ------------------------------------------------ | ------------------- | -------------------------------- |
| [SFF](#454)                                      | 454 and Ion Torrent | Yes                              |
| [PacBio HDF](#Pacific_Biosciences)               | PacBio              | Yes                              |
| [SOLiD csfasta/qual](#SOLiD)                     | SOLiD               | No (please convert to fastq/bam) |
| [Illumina qseq and scarf](#Illumina_Native_Data) | Illumina            | No (please convert to fastq/bam) |

### BAM ファイル <a name="BAM_file"></a> 

Binary Alignment/Map (BAM) ファイルは DRA への登録にとって好ましいファイル形式の一つです。BAM は Sequence Alignment/Map (SAM) ファイル形式のバイナリー圧縮です (詳細は [SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf))。BAM ファイルは SAM/BAM 用ツール (例えば [samtools](http://www.htslib.org/)) で human-readable なテキスト形式である SAM に変換することができます。BAM はアライメントされなかった unaligned read を含めることができます。DRA はプライマリーデータとして Run に unaligned read を含む BAM を登録することを推奨しています。

SAM はリードの既知リファレンス配列へのアライメントに関する情報と生リードデータを含んだタブ区切りテキストファイルです。 SAM ファイルは二つの主要なセクション、ヘッダーとアライメント（シークエンスリード）セクション、から構成されます。 ここでは「BAM ファイルの DRA への登録」という観点で SAM フォーマットについて説明していることに留意してください（DRA は SAM ファイルでの登録を受付けていません）。 より詳細なファイルフォーマット仕様は [samtools ウェブサイト](http://www.htslib.org/)を参照してください。

SAM ヘッダーの例:

```
@HD    VN:1.4    SO:coordinate
@SQ    SN:CHROMOSOME_I    LN:15072423
UR:ftp://ftp.ncbi.nlm.nih.gov/genbank/genomes/Eukaryotes/invertebrates/Caenorhabditis_elegans/
WBcel215/Primary_Assembly/assembled_chromosomes/FASTA/chrI.fa.gz    AS:ce10    
SP:Caenorhabditis elegans
 
@SQ    SN:CHROMOSOME_II    LN:15279345    
UR:ftp://ftp.ncbi.nlm.nih.gov/genbank/genomes/Eukaryotes/invertebrates/Caenorhabditis_elegans/
WBcel215/Primary_Assembly/assembled_chromosomes/FASTA/chrII.fa.gz     AS:ce10    
SP:Caenorhabditis elegans  
 
@RG    ID:1    PL:ILLUMINA    LB:C_ele_05    DS:WGS of C elegans    PG:BamIndexDecoder
@PG    ID:bwa    PN:bwa    VN:0.5.10-tpx
```

SAM アライメントの例:

```
3658435    145    CHROMOSOME_I    1    0    100M    CHROMOSOME_II    2716898    0    
GCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCT
AAGCCT    
@CCC?:CCCCC@CCCEC>AFDFDBEGHEAHCIGIHHGIGEGJGGIIIHFHIHGF@HGGIGJJJJJIJJJJJJJJJJJJJJJJJJJJJHHHHHFF
FFFCCC    RG:Z:1    NH:i:1    NM:i:0
    
5482659    65    CHROMOSOME_I    1    0    100M    CHROMOSOME_II    11954696    0    
GCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCTAAGCCT
AAGCCT    
CCCFFFFFHHGHGJJGIJHIJIJJJJJIJJJJJIJJGIJJJJJIIJIIJFJJJJJFIJJJJIIIIGIIJHHHHDEEFFFEEEEEDDDDCDCCCA
AA?CC:    RG:Z:1    NH:i:1    NM:i:0
```

#### BAM ファイル処理 <a name="BAM_ファイル処理"></a>

ヘッダーとアライメントセクションは整合的である必要があります: 各アライメントリードの RNAME (リファレンス配列の名前、3フィールド目) はヘッダー中の SN タグ値 (例 CHROMOSOME_I) と一致している必要があります。加えて、アライメントリードの任意フィールドである read group (RG:Z:) はヘッダー中の read group ID と一致している必要があります (例 1)。 また、2フィールド目の FLAG フィールドはデータに対して正しい値がセットされていることが重要です。 DRA ファイル処理パイプラインは不正な FLAG 値を補正しますが、不正な値が多すぎる場合はエラーになり す。DRA はアライメントセクション中の任意かつ非標準のタグ/フィールド値は保持しません。 しかし、ヘッダーセクション全体は保持されます。

SAM フォーマットはリードのリファレンスへの全体マッチを表すイコールサイン (=) の sequence フィールドでの使用、もしくは、アスタリスク (*) の sequence と quality 両フィールドでの使用を許容していますが、DRA 処理パイプラインはこれらの値を認 しません。

予期せぬ表記方法で記されたペアリードは適切に認識されず不適切な SRA ファイル形成をもたらします（ペアリードがシングルフラグメントとして扱われてしまいます）。例えば、リー 名の後ろに :0 と :1 と付されたリードはペアのリード１と２として認識されません。これらの表記方法が使用されている 合、:0 と :1 を削除して同じリード名を使ったほうがよいです。特定のシークエンサから出力される標準的な表記方法は正し 認識されます。 例えば、Illumina のリード名に付された /1 と /2 は標準的な表記方法です。 ペアリードに対して SAM BAM flag に適切なビット値 (multi-segment template 1-bit、first segment 64-bit と last segment 128-bit) が設定されていない場合、もしくは、ペアリードが別々の bam ファイルに分かれ いる場合は適正な SRA ファイルが生成されません。

Run にアライメントデータを登録する場合は、「BAM」、「INSDC, refseq アクセッション番号 OR リファレンス配列マルチ fasta、それから bam SN リファレンス名、との対応表」が必要です。1 Run に 1 bam ファイルを登録します。

Run ではなく Analysis に登録する場合対応表は不要ですが、アライメントされなかったリードを含めた bam を Run に登録することを強く推奨します。

<div class="attention red">
PacBio や IonTorrent などでリファレンス配列がない bam ファイル (unmapped bam でありヘッダーに SQ 行がない) が出力データの場合、対応表やリファレンス fasta を指定する必要はありません
</div>

<div class="attention red">
将来、新しいツールで再解析や再アライメントする際に重要であるため、bam ファイルのみを登録するときはアライメントされなかったリード (unaligned reads) を含めてください。
</div>

{::nomarkdown}
{% include image.html url="books/bam-mapping.jpg" caption="bam とリファレンス配列の対応付け" class="w500" %}
{:/}

1. #### BAM <a name="BAM"></a>
  アライメントデータを BAM フォーマットで登録することができます。BAM ファイルは [SAMtools](http://samtools.sourceforge.net/) と [picard](https://broadinstitute.github.io/picard/) で読み込める形式になっている必要があります。圧縮していない BAM ファイルをアップロードしてください。   
  Run の [File Type](#File_Type) には "bam" を選択します。

2. #### リファレンスを INSDC/RefSeq アクセッション番号で指定 <a name="リファレンスを_INSDC/RefSeq_アクセッション番号で指定"></a>
  リファレンス配列が[リスト](/files/ref/ref-file.txt)にある場合、アクセッション番号.バージョン番号 (例 NC_000001.11) でリファレンスを参照することができます。 [配列のバージョン番号]({{ site.baseurl }}/flatfile/flat-file.html#Version)は必須です。リファレンスゲノム配列のアクセッション番号は[NCBI Assembly](https://www.ncbi.nlm.nih.gov/assembly/) で検索することができます。

3. #### リファレンスをマルチ fasta で提供 <a name="リファレンスをマルチ_fasta_で提供"></a>
  リファレンス配列が[リスト](/files/ref/ref-file.txt)にない場合、リファレンス配列をマルチ fasta ファイルで提供します。真核生物のオルガネラ配列等短い配列は番号指定に対応していないケースがあります。
  Run の [File Type](#File_Type) には "reference_fasta" を選択します。bam ヘッダーで定義されたリファレンスとマルチ fasta 中の配列は対応表を介して defline 中の配列名でリンクされます。 bam SQ 行 LN タグのリファレンス配列長とマルチ fasta 中の配列長が異なっている場合ワーニングになります。

4. #### INSDC/RefSeq アクセッション番号とマルチ fasta が混在するケース <a name="INSDC/RefSeq_アクセッション番号とマルチ_fasta_が混在するケース"></a>
  一部のリファレンス配列が[リスト](/files/ref/ref-file.txt)にある場合、アクセッション.バージョン番号 (例 NC_000001.11) で一部のリファレンスを指定し、残りのリファレンス配列はマルチ fasta ファイルで提供します。混在しているケースでは、対応表にアクセッション.バージョン番号とマルチ fasta 中の defline 中の配列名を記載します。

5. #### SN-リファレンス配列の対応表 <a name="SN-リファレンス配列の対応表"></a>
  ご自分で独自に作成するファイルです。「BAM ファイルヘッダーの SQ 行中の SN 値」と「アクセッション番号 OR リファレンスマルチ fasta ファイル中の配列名」との対応関係をタブ区切りで記載します。 Run の [File Type](#File_Type) には "tab" を選択します。

  BAM ファイルヘッダー
<!-- end list -->

```
@HD VN:1.0 GO:none SO:coordinate
@SQ SN:chr1 LN:249698942
@SQ SN:chr2 LN:242508799
@SQ SN:chr3 LN:198450956
...
```

SN-リファレンス配列の対応表。例では SN:chr1 にリファレンス fasta ファイル中の配列 ref1 が対応。

```
chr1 ref1
chr2 ref2
chr3 ref3
...
```

リファレンスマルチ fasta。

```
>ref1
CGGTGGGGGTGGTGTTAGTACCCCATCTTGTAGGTCTGAAACACAAAGTGTGGGGTGTCT
...
>ref2
TCCACCAACGTTAGAAGGCCTTGGCCCCCAGAGAGCCAATTTCACAATCCAGAAGTCCCC
...
>ref3
GTGTGTGACCAGGGAGGTCCCCGGCCCAGCTCCCATCCCAGAACCCAGCTCACCTACCTT
...
```

SN-リファレンス配列の対応表。例では SN:chr1 に NC_000001.11 が対応。

```
chr1 NC_000001.11
chr2 NC_000002.12
chr3 NC_000003.12
...
```

### fastq <a name="fastq"></a> 

Run の filetype はリード長が一定・不定によって異なります。

  - リード長が揃っている fastq ファイルの場合、Run の file type で <span class="red">fastq</span> を選択します。ペアードデータの場合、対になっているファイル中でペアとなっているリードが同じ順番で記載されている必要があります。
  - リード長が一定ではない fastq ファイル: Run の file type で <span class="red">generic_fastq</span> を選択します。

fastq の形式。詳しくは[NCBI のサイト](https://www.ncbi.nlm.nih.gov/sra/docs/submitformats/#fastq-files)をご覧ください。

  - Quality value は phred 形式にしてください。オフセットはデフォルトで 33 (!) になります。64 (@) の場合は [Run XML を編集](#create-metadata-in-xml-files)して ascii_offset="@" にしてください。
  - DRA のメタデータ作成インターフェースは Technical read (アダプター、リンカー、バーコード配列)
    記載に対応していないため、Technical read を含める場合は [登録するデータファイルの形式について](#formats-sequencing-data-files) を参考に technical read が記載された Experiment XML を登録してください ([XML の記載例](/ddbj/example.html))。Technical reads が除去されている場合、XML 登録は必要ありません。
  - ペアードリードは別々の fastq ファイルとして登録してください。リード名にペアリードを同定するためのサフィックス (例 '/1' と '/2') が含まれている必要があります。
  - 各リードの最初の行は '@' で始まっている必要があります。
  - ベースコールと Quality value は '+' で始まる行で区切られている必要があります。
  - fastq ファイルは gzip もしくは bzip2 で圧縮してください。

### 454 <a name="454"></a> 

454 からのシークエンスデータは sff ファイル か fastq/bam ファイルで登録します。

sff ファイル中のリード名は、プレート内の位置情報とユニークな run id を反映した情報を含んでいるので、sff ファイルを書き変えないでください。

sffファイル形式はすでに最適化されており、ファイルをさらに圧縮する必要はありません。圧縮していない sff ファイルを送付してください。

sff ファイルに２つ以上のサンプルに由来するデータが含まれている場合は、sff から生成した fastq
ファイルをサンプルごとに分割して登録してください。

### Illumina Genome Analyzer <a name="Illumina-Genome-Analyzer"></a>

#### Illumina Native Data <a name="Illumina_Native_Data"></a>

##### Illumina pipeline v1.4 以降

qseq ファイルでの登録は受け付けておりません。fastq/bam ファイルに変換してから登録してください。

### SOLiD <a name="SOLiD"></a> 

#### SOLiD Native Format <a name="SOLiD_Native_Format"></a>

SOLiD native ファイルでの登録は受け付けておりません。fastq/bam ファイルに変換してから登録してください。

### Ion Torrent <a name="Ion-Torrent"></a>

sff ファイルもしくは fastq/bam ファイルを登録します。

### Helicos Heliscope <a name="Helicos-Heliscope"></a>

quality value をすべて "14" として作成した fastq/bma ファイルを登録します。

### Complete Genomics <a name="Complete-Genomics"></a>

[fastq ファイル](#fastq)を登録します。

### Pacific Biosciences <a name="Pacific-Biosciences"></a>

#### HDF5 <a name="hdf5"></a>

Pacific Biosciences は生データを格納するためにディレクトリ様構造を持つ HDF5 ファイルを使用しています。DRA は bas.h5 と bax.h5 両方のファイル形式での登録を受け付けています。RS II から出力されるデータは、１ の Run に *.bas.h5 １ファイルと *.bax.h5 ３ファイルを登録します。ファイル名を変更しないでください。

<div class="attention red">
Run に HDF5 以外のデータを含めないでください。
</div>

#### bam <a name="pacbio_bam"></a>

以下の unaligned bam ファイルの登録をサポートしています。1 Run に 1 bamファイルを指定してください。
unaligned bamの場合、リファレンス配列や対応表の指定は必要ありません。

  - subread BAM files (*.subreads.bam)
  - CCS read BAM files (*.ccs.bam)

#### fastq <a name="pacbio_fastq"></a>

リード長は可変なので [generic_fastq](#fastq) を Run の filetype で指定してください。

### Oxford Nanopore <a name="Oxford-Nanopore"></a>

fastq/bam ファイルを登録します。

### キャピラリシークエンサ <a name="Capillary-sequencing-platform"></a>

fastq/bam ファイルを登録します。

## Analysis データファイル <a name="analysis-data-files"></a>


### PacBio Base Modification Files <a name="Pacbio-Base-Modification-Files"></a>

[PacBio](http://www.pacb.com) シークエンサーは塩基配列に加え、塩基のメチル化状態を解析することができ、そのデータを共有することは研究者コミュニティにとって重要です。 例えば、修飾された塩基の正確な位置情報は DNA メチルトランスフェラーゼの特異性の解析に用いることができます。 PacBio の解析ソフトウェア(RS_Modification_and_Motif_Analysis) はこれらの修飾塩基配列情報を抽出し、以下のいくつかのファイルに出力します:

  - motif_summary.csv
  - modifications.csv
  - modifications.gff
  - motifs.gff

この解析結果ファイル、原核生物については少なくとも motif_summary.csv ファイルを DRA Analysis として登録することは研究者コミュニティにとって貴重なデータになります。 Run に加え、これらのファイルを [Sequence Annotation type](#Analysis_Type) Analysis として是非ご登録ください。 サポートが必要な場合は [DRA チームにご連絡ください]({{ site.baseurl }}/aboutus/contact.html)。

[NCBI guidelines of PacBio Base Modification Files](https://www.ncbi.nlm.nih.gov/genbank/basemodificationfiles)

# DRA へのデータ登録 <a name="dra-submission"></a>

<div class="attention red">
研究責任者 (principal investigator) の許可なくデータを登録しないでください。
</div>

<div class="attention">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)を熟読してください。</span>
</div>

<div class="attention">
特許に関連するデータの登録  
: <span class="red">登録するデータが特許に関連する場合は、[「特許に関連する塩基配列の登録に関する注意、データの優先権」](/policies.html#disclaimer)の内容を必ずご確認ください。</span>
</div>

次世代シークエンサからのデータを DRA に登録するためにはメタデータとシークエンスデータが必要です。

アセンブルした配列データは [DDBJ](/index.html) へ登録します。[DDBJ Mass Submission System (MSS)]({{ site.baseurl }}/services/mss.html) が、次世代シークエンサから生み出されるゲノムや大量データの登録受付先になります。

## DRA 登録の流れ <a name="dra-data-submission"></a>

### 1. 登録アカウントを作成

  - [D-way 登録アカウント]({{ site.baseurl }}/tentative/account.html)を作成
  - [公開鍵と center name をアカウントに登録]({{ site.baseurl }}/tentative/account.html#enable-dra-submission-in-account)し、DRA 登録を可能に

### 2. DRA 登録を作成しデータファイルをアップロード

  - 新規 DRA 登録を作成 ([アカウントに DRA 登録権限を付与しておきます]({{ site.baseurl }}/tentative/account.html#enable-dra-submission-in-account))  
    データは DRA 登録 (Submission) 単位で公開されます。
  - BioProject、BioSample、Experiment と Run を投稿する前にデータファイルを scp でアップロード

### 3. プロジェクトとサンプル情報を登録

#### [BioProject (Study)]({{ site.baseurl }}/aboutbioproject/submission.html) <a name="__________BioProject_Study________"></a>

  - 研究プロジェクトの内容
  - 「なぜ」そのサンプルをシークエンスしたのか

#### [BioSample (Sample)]({{ site.baseurl }}/aboutbiosample/submission.html)<a name="__________BioSample_Sample________"></a> ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv} 

  - 生物学的、物理的にユニークなサンプル
  - 「何を」シークエンスしたのか

![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}メタデータをタブ区切りテキストファイルで登録できます

### 4. Experiment と Run を登録

#### DRA Experiment <a name="DRA_Experiment"> ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - 特定のサンプルから構築したライブラリーについての説明
  - 「どのように」シークエンスをしたのか
  - 複数の Experiment は一つの Sample を参照できるが、逆はできない

#### DRA Run <a name="DRA_Run"></a> ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - Experiment と Run を投稿した後、データファイルの検証処理を開始
  - Run にリンクしている全てのデータファイルは 1 つの SRA ファイルにマージされます

### 5. シークエンスデータファイルの検証処理

  - シークエンスデータファイルをアーカイブ用 SRA ファイルに変換する処理を開始
  - 検証処理を通った登録が査定されアクセッション番号が発行される

## DRA へのデータ登録方法 <a name="how-to-submit-dra-data"></a>

アカウント取得から BioProject/BioSample/DRA の登録まで全てをカバーした [TogoTV](https://togotv.dbcls.jp/20190523.html) (22分12秒、作成:2019年)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6IDeMaLDuQQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

BioProject/BioSample/DRA の登録方法 (6分50秒、作成:2015年)

<iframe width="560" height="315" src="https://www.youtube.com/embed/GbAVB3Zg1tw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 登録アカウント <a name="submission-account"></a>

[日本 DNA データバンク (DDBJ) センター](/index.html) は [BioProject]({{ site.baseurl }}/aboutbioproject/index.html) 、[BioSample]({{ site.baseurl }}/aboutbiosample/index.html) と [DRA]({{ site.baseurl }}/aboutdra/index.html) への登録をユーザアカウントで管理しています。

[登録アカウントマニュアル]({{ site.baseurl }}/tentative/account.html)に従い、登録アカウントを取得し、DRA 登録権限をアカウントに追加します。

### データ構成 <a name="organize-data"></a>

オブジェクトの構成例は[こちら](#index_id2)をご覧ください。 Submission 中では１つの BioProject のみ登録できます。 BioSample、Experiment、Run は複数登録することができます。サンプル数を中心に考えるとデータを構成しやすくなります。

ここでは３つのバクテリア菌株のゲノム配列をペアーエンドでシークエンスしたデータを登録する場合を例に説明します。

{::nomarkdown}
{% include image.html url="books/datamodel1.jpg" caption="三つの菌株のゲノム配列を登録" class="w450" %}
{:/}

### 新規登録の作成 <a name="create-new-submission"></a>

[D-way (https://ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/) にログインします。上部の DRA メニューから DRA のデータ登録一覧ページへ進みます。

[New submission] をクリックし、新規登録を作成します。  
同時に、データ受付サーバ (ftp-private.ddbj.nig.ac.jp) に対応するディレクトリがホーム直下に作成されます。[データファイルはこのディレクトリにアップロードします](#upload-sequence-data)。

<div class="attention red">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルいたします。
</div>

<div class="attention red">
オブジェクトは Submission 単位で公開されます。オブジェクトを異なる時期に公開したい場合は Submission を分けて登録してください。
</div>

{::nomarkdown}
{% include image.html url="books/hdra01.jpg" caption="新規 DRA 登録の作成" class="w450" %}
{:/}

登録のステータスには以下のものがあります。"submission_validated" と "data_error"
になった登録が査定されます。

DRA 登録のステータス一覧
{: .tablecaption}

| ステータス                 | 状態                            |
| --------------------- | ----------------------------- |
| New                   | メタデータの投稿前                     |
| metadata_submitted   | メタデータが投稿された                   |
| data_validating      | データファイルの検証処理中                 |
| data_error           | データファイルの検証処理エラー               |
| submission_validated | メタデータとデータファイルの検証処理が完了         |
| completed             | アクセッション番号が発行された               |
| confidential          | 公開用ファイルの作成処理が完了し、非公開に保たれている状態 |
| Public                | 公開されている状態                     |

### シークエンスデータのアップロード <a name="upload-sequence-data"></a> 

<span class="red">メタデータを作成する前に登録するシークエンスデータファイルをアップロードします。先にメタデータを作成する場合は適当なファイルをアップロードしてください。</span>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">ターミナルによるシークエンスデータの転送 (Linux/Mac OS X)</a></h4>
<div class="accordion-content">

ファイルを SCP 転送します。

```
$ scp <Your Files> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/<DRA Submission ID>
```

  - <Your Files> 転送するファイル。例: file1 file2 (file1とfile2)、file*
    (fileではじまる全てのファイル)
  - <D-way Login ID> D-way の Login ID (例 test07)
  - <DRA Submission ID> DRA 登録の Submission ID (例: test07-0018)
  - コマンドの例: scp strainA_1.fastq test07@ftp-private.ddbj.nig.ac.jp:~/test07-0018

鍵を作成したときに指定したパスフレーズを入力します。

```
Enter passphrase for key '/home/you/.ssh/id_rsa': 
```

サーバにログインし、直接ファイルを操作することができます。サーバに SSH でログインします。

```
$ ssh <D-way Login ID>@ftp-private.ddbj.nig.ac.jp
```

鍵を作成したときに指定したパスフレーズを入力します。

```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

ログインに成功すると、次のコマンドプロンプトが表示されます。

```
[test07@dradata ~]$
```

サーバのログイン環境は、登録者専用のプライベート環境になっていて、登録者以外はアクセスすることができません。実行できるコマンドは下記のものに制限されています。不要なファイルの削除は登録者が実施することができます。

```
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">WinSCP によるシークエンスデータの転送 (Windows)</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZxIfewrk8lI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DRA への登録 ～データの転送 (Windows)～

[WinSCP (http://winscp.net/eng/download.php)](http://winscp.net/eng/download.php) をインストールし、起動します。

以下のように設定した後、 右中央にある [Advanced...] をクリックします。

<div class="attention red">
転送モードはバイナリモードにします。テキストモードで転送しないでください。
</div>

  - **File protocol:** SFTP
  - **Host name:** ftp-private.ddbj.nig.ac.jp
  - **Port number:** 22
  - **User name:** (D-way の Login ID を入力)
  - **Password:** (空欄のまま)

[![秘密鍵の登録１]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg "秘密鍵の登録１"){:.w300}]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg "秘密鍵の選択１"){:.group1}

"Authentication" にある "Private key file" で、事前に作成した PuTTY 形式の秘密鍵を選択します。

[![秘密鍵の登録2]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg "秘密鍵の登録2"){:.w300}]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg "秘密鍵の選択2"){:.group1}

最後に、下中央にある [Login] をクリックします。

[![winSCPへのログイン]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg "winSCPへのログイン"){:.w300}]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg "winSCPへのログイン"){:.group1}

初回接続時には警告メッセージが表示されますが、“はい” を選択してください
(次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウにデータ受付サーバの登録者専用ディレクトリが表示されます。 左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

[![ファイルの転送]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg "ファイルの転送"){:.w400}]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg "ファイルの転送"){:.group1}

転送したファイルは、ファイルを選択し [削除] ボタンをクリックすることで削除できます。

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Cyberduck によるシークエンスデータの転送 (Mac OS X)</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/A2hPlGZEW_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DRA への登録 ～データの転送 (Mac)～

[Cyberduck (http://cyberduck.ch)](http://cyberduck.ch) をインストールし、起動します。

トップ画面で “Open Connection” を選択します。

[![open_connection]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg "open_connection"){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg "open_connection"){:.group1}

使用する転送方式で “SFTP (SSH File Transfer Protocol)” を選択します。

[![SFTP]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg "SFTP"){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg "SFTP"){:.group1}

Cyberduck の起動画面で、以下のように設定し More Options の “Use Public Key
Authentication” をチェックします。

  - **Server:** ftp-private.ddbj.nig.ac.jp
  - **Port:** 22
  - **Username:** (D-wayのLogin IDを入力)
  - **Password:** (空欄のまま)
  - **Add to Keychain:** (チェックを入れる)

[![key_authentication]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg "key_authentication"){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg "key_authentication"){:.group1}


秘密鍵 (private key) はデフォルトで “ユーザのホームフォルダ .ssh フォルダ (Finder からは見えない隠しフォルダ) > id_rsa” に保存されています。

[![private_key]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg "private_key"){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg "private_key"){:.group1}


初回接続時には警告メッセージが表示されますが “常に” を選択してください (次回から表示されません)。

ログインに成功すると、データ受付サーバの登録者専用ディレクトリが表示されます。登録者の PC
にあるファイルを選択しウィンドウにドラッグ＆ドロップすることで、ファイルをサーバに転送します。

[![transfer]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg "transfer"){:.w400}]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg "transfer"){:.group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

<div class="attention red">
ftp-private.ddbj.nig.ac.jp サーバに秘密鍵を使って ssh でログインすることができます。
実行できるコマンドは下記のものに制限されています。不要なファイルの削除は登録者が実施することができます。  
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
</div>

<div class="attention red">
[DDBJ 大量登録システム (Mass Submission System, MSS)]({{ site.baseurl }}/services/mss.html) 用の登録ファイルでサイズがメール添付の上限を超えるような場合は DRA サーバを利用することができます。 [MSS チームに連絡]({{ site.baseurl }}/aboutus/contact.html#to-ddbj)した後、ファイルを /submission/ [submitter ID]/mass にアップロードします。
</div>

### ウェブツールでのメタデータ作成 <a name="create-metadata-using-tool"></a> 

作成した新規登録をクリックし、登録詳細ページへ移動します。

{::nomarkdown}
{% include image.html url="books/hdra02.jpg" caption="登録詳細ページへ移動" class="w450" %}
{:/}

登録詳細ページ中の [Enter / Update metadata] をクリックし、メタデータ作成ツールを起動します。

{::nomarkdown}
{% include image.html url="books/hdra03.jpg" caption="メタデータ作成ツールを起動" class="w450" %}
{:/}

新規登録に対応するファイルサーバのディレクトリにデータファイルがアップロードされていない場合、下記のようなメッセージが表示されます。[データファイルをアップロードします](#upload-sequence-data)。

先にメタデータを作成しておきたい場合は、適当なファイルをアップロードしておきます。

{::nomarkdown}
{% include image.html url="books/hdra-not-uploaded.jpg" caption="データファイルがアップロードされていない場合" class="w200" %}
{:/}

メタデータは Submission、BioProject、BioSample、Experiment、Run、Analysis (任意)
オブジェクトで構成されています。 メタデータ作成ツールの画面上で、各項目に内容を英語で入力していきます。

入力画面で必須項目は赤色のアスタリスク記号 (<span class="red">＊</span>) で示されています。

画面の下部にある [Save] や次のオブジェクトへの移動ボタンをクリックすると入力内容がチェックされます。エラーが表示された場合は内容を修正してください。

#### Submission <a name="submission"></a>

公開予定日を4年以内に設定します。 登録者には実作業者と責任者を含む複数名を指定してください。登録者情報は一般に公開されません。

<div class="attention red">
オブジェクトは Submission 単位で公開されます。オブジェクトを異なる時期に公開したい場合は Submission を分けて登録してください。
</div>

{::nomarkdown}
{% include image.html url="books/hdra-submission01.jpg" caption="Submission に登録情報を入力" class="w450" %}
{:/}

#### Study <a name="study"></a>

[register a project] をクリックして新規にプロジェクトを登録するか、もしくは、自身のアカウントで登録したプロジェクト一覧から、該当するものを1つ選びます。
従来通りプロジェクトを BioProject から個別に登録することもできます。

複数のプロジェクトを登録することはできません。 自身のアカウント以外で取得されたプロジェクトを参照したい場合は [DRA チームに連絡してください]({{ site.baseurl }}/aboutus/contact.html)。

{::nomarkdown}
{% include image.html url="books/hdra-bp01.jpg" caption="BioProject の新規登録、もしくは選択" class="w450" %}
{:/}

BioProject を新規登録する場合は左のタブから順番に内容を英語で入力していきます。二段目が BioProject になります。登録者などの情報は DRA Submission で入力した内容が引き写されます。

各項目の説明は [BioProject Handbook]({{ site.baseurl }}/aboutbioproject/submission.html#metadata) を参照してください。

{::nomarkdown}
{% include image.html url="books/hdra-bp02.jpg" caption="BioProject の新規登録" class="w450" %}
{:/}

ゲノムをアセンブルするプロジェクトでは、アセンブリに対してユニークな [Locus tag
prefix]({{ site.baseurl }}/tentative/locus_tag.html) が必要です。

[Project data type="Genome Sequencing" or "Metagenome"] AND [Capture="Whole"] AND  
[Objective="Sequence" or "Annotation" or "Assembly"] で Locus tag prefix 入力ボックスが現れます。

プレフィックスには３-12文字の英数字のみを含めることができます。先頭は英文字にします。数字は２文字目以降で使用できます (例: A1C)。
シンボル (-_*) を含めることはできません。プレフィックスとタグの値はアンダースコア '_' で区切ります (例: A1C_00001)。

[WGS]({{ site.baseurl }}/datacategories/wgs.html) の登録のみで prefix を使用しない場合は入力欄を空にしてください。

prefix は NCBI が一括管理しています。プロジェクトを投稿する段階で、NCBI に prefix を予約しにいきます。予約済みの場合はエラーになるので、再度希望する prefix を入力して投稿します。

<div class="attention red">
複数の prefix の取得を希望する場合は [DRA チームに連絡します]({{ site.baseurl }}/aboutus/contact.html)
</div>

{::nomarkdown}
{% include image.html url="books/hdra-bpltag.jpg" caption="Locus tag prefix の取得" class="w450" %}
{:/}

最後の "OVERVIEW" で内容を確認したうえで [Submit BioProject] をクリックして投稿します。

{::nomarkdown}
{% include image.html url="books/hdra-bp03.jpg" caption="BioProject の投稿" class="w450" %}
{:/}

BioProject を投稿した後、Study では投稿したプロジェクトが選択されている状態になります。

{::nomarkdown}
{% include image.html url="books//hdra-bp04.jpg" caption="投稿されたプロジェクトが選択される" class="w450" %}
{:/}

#### Sample <a name="sample"></a>

[register sample(s)] でサンプルを新規に登録するか、もしくは、自身のアカウントで作成した BioSample 一覧から、該当するものを全て選択します。

一つのチェックボックスを選択し、続いて Shift キーを押しながら次のボックスをクリックすると、サンプルが範囲選択されます。
また、カラム上部のボックスにテキストを入力しサンプルを絞った状態で [Select filtered
BioSamples] をクリックすると、フィルターされたサンプルが全て選択されます。

<div class="attention red">
1 submission で登録できるサンプル数の上限は約 2,000 になります。
</div>

自身のアカウント以外で取得された BioSample を参照したい場合は [DRA チームに連絡してください]({{ site.baseurl }}/aboutus/contact.html)。

{::nomarkdown}
{% include image.html url="books/hdra-bs01.jpg" caption="BioSample の新規登録 or 選択" class="w450" %}
{:/}

BioSample を新規登録する場合は左のタブから順番に内容を英語で入力していきます。二段目が BioSample になります。登録者などの情報は DRA Submission で入力した内容が引き写されます。

各項目の説明は [BioSample Handbook]({{ site.baseurl }}/aboutbiosample/submission.html#metadata) を参照してください。

{::nomarkdown}
{% include image.html url="books/hdra-bs02.jpg" caption="BioSample の新規登録" class="w450" %}
{:/}

"SAMPLE TYPE" でサンプルの種類を選択します。

Sample type については [BioSample Handbook]({{ site.baseurl }}/aboutbiosample/submission.html#Sample_type) を参照してください。

{::nomarkdown}
{% include image.html url="books/hdra-bs03.jpg" caption="Sample type の選択" class="w450" %}
{:/}

Sample type に応じた属性入力用テンプレートファイルをダウンロードします。

必須・任意・ユーザが定義した一連の属性でサンプルを記述することが、登録作業の中心になります。

[BioSample 属性の説明]({{ site.baseurl }}/aboutbiosample/attribute.html)。独自の属性を追加したい場合は、右端に属性名と値を追加します。

[サンプル属性ファイルの記入例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

ファイルはタブで区切られているので、エクセルなどの表計算ソフトで編集することができます。一行目には属性名が記載されています。* が必須属性です。

二行目以降に１行１サンプルで入力していきます。BioProject アクセッション番号が発行されていないプロジェクトの場合 [bioproject_id]({{ site.baseurl }}/aboutbiosample/attribute.html?all=all#bioproject_id) には PSUB 番号を入力します。値がない属性には、適宜 "missing" や "not applicable" などを記入します。

Biological/Technical replicate は別々の BioSample として登録します。登録に必要なサンプル数は [FAQ: 塩基配列登録にはいくつのサンプルが必要ですか?](/faq/ja/index.html#samples-for-sra)
を参照してください。

{::nomarkdown}
{% include image.html url="books/hdra-bs04.jpg" caption="サンプル属性テンプレートファイルのダウンロード" class="w450" %}
{:/}

サンプル属性ファイルを選択して Continue をクリックすると validator がルールに基づいてアップロードされたファイルをチェックします。Error や Warning メッセージが表示された場合は必要に応じて内容を修正して再度アップロードします。Error が解消されない限り次のタブに進んで内容を submit することはできません。

Validation ルールとメッセージについては [Validation rules ページ]({{ site.baseurl }}/aboutbiosample/validation.html)をご覧ください。

{::nomarkdown}
{% include image.html url="books/hdra-bs04-2.jpg" caption="BBioSample の validation。この例では sample \"genome bacteria strain C\" の collection_date に将来の日付が記入されているエラーと geo_loc_name 中の国名と緯度経度が一致していない warning が表示されています。" class="w500" %}
{:/}

最後の "OVERVIEW" で内容を確認したうえで投稿します。"ATTRIBUTES" で属性ファイルをダウンロードすることができます。

<div class="attention red">
登録後は最新の属性ファイルをダウンロードすることができます。
</div>

{::nomarkdown}
{% include image.html url="books/hdra-bs05.jpg" caption="BioSample の投稿" class="w450"%}
{:/}

BioSample を投稿した後、Sample では投稿したサンプルが選択されている状態になります。

{::nomarkdown}
{% include image.html url="books/hdra-bs06.jpg" caption="投稿されたサンプルが選択される" class="w450" %}
{:/}

#### Experiment <a name="experiment"></a>

初期状態では選択された BioSample と同数の Experiment と Run が自動生成され、それぞれの BioSample - Experiment - Run がリンクされています。Experiment/Run の自動生成は Experiment タブの初回表示時にのみ行われ、自動生成後に BioSample を選択し直した場合には自動生成されません。

| BioProject | - BioSample (1) | - Experiment (1) | - Run (1) |
|            | - BioSample (2) | - Experiment (2) | - Run (2) |
|            | - BioSample (3) | - Experiment (3) | - Run (3) |

下の例では３つの Experiment が自動的に作成され、それぞれがユニークな BioSample を参照しています。

[Add new Experiment(s)] で Experiment の追加、右端の [Delete] で Experiment の削除をすることができます。Run から参照されている Experiment は削除することができません。

{::nomarkdown}
{% include image.html url="books/hdra-experiment01.jpg" caption="各 BioSample を参照している Experiment が自動的に作成される" class="w450" %}
{:/}

タブ区切りテキストファイルでまとめて Experiment を作成することができます。まず [Save] で内容を保存し、Alias (例 test07-0040_Experiment_0001 ～ 0003) を確定します。Alias はアクセッション番号が発行されるまでのオブジェクトの仮の名称になります。

[Download TSV file] で内容をタブ区切りテキストファイルとしてダウンロードします。

{::nomarkdown}
{% include image.html url="books/hdra-experiment02.jpg" caption="Save して Alias
を確定し、タブ区切りテキストファイルをダウンロード" class="w450" %}
{:/}

エクセルなどの表計算ソフトでメタデータをまとめて作成することができます。

"Title" は空であれば、自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。独自の Title を付けたい場合は、"Title" 欄にテキストを入力します。

"BioSample Used" は "SSUB BioSample Submission ID" : "Sample name" (例 SSUB003746 : Genome bacteria strain A) で指定します。":" の両側の空白は無視されます。

{::nomarkdown}
{% include image.html url="books/hdra-experiment03.jpg" caption="Experiment テンプレートファイル" class="w450" %}
{:/}

入力内容をタブ区切りテキストファイルとして保存し、選択したうえで [Upload TSV file] をクリックして読み込ませます。

{::nomarkdown}
{% include image.html url="books/hdra-experiment04.jpg" caption="Experiment をタブ区切りテキストファイルとしてアップロード" class="w450" %}
{:/}

<div class="attention red">
エクセルなどの表計算ソフト独自の形式ではなくタブ区切りテキストファイルとしてアップロードします。
</div>

#### Run <a name="run"></a>

初期状態で選択された BioSample と同数の Experiment と Run が作成されており、それぞれの Run はユニークな Experiment を参照しています。

下の例では３つの Run が作成され、それぞれが作成された Experiment を参照しています。

[Add another Run(s)] で Run の追加、右端の [Delete] で Run の削除をすることができます。ファイルが紐づいている Run は削除することができません。

{::nomarkdown}
{% include image.html url="books/hdra-run01.jpg" caption="Save して Alias を確定" class="w450" %}
{:/}

[Save] で Run の Alias を確定すると、内容をタブ区切りテキストファイルでまとめて編集できるようになります。

[Select data files for Run] で Run とアップロードしたデータファイルをリンクする画面に移動します。

{::nomarkdown}
{% include image.html url="books/hdra-run02.jpg" caption="ファイルと Run をリンクする画面へ移動" class="w450" %}
{:/}

ディレクトリにアップロードされているファイル一覧が表示されます。ファイルが属すべき Run の Alias を "Run/Analysis contains files" で選択します。

続いて [File type](#File_Type) と [MD5 Checksum](#supplement-md5) を入力します。タブ区切りテキストファイルでまとめて内容を入力する場合、データファイルを区別するため Run に登録するファイルの左端の Run/Analysis に "Run" と入力します。

<div class="attention red">
ペアリードが含まれるファイルは同じ Run に含めます。リード名からペアは自動で判定されます。Run に含まれているファイルは１つにまとめられます。
</div>

<div class="attention red">
リード長が一定ではない fastq ファイルの場合、filetype には "generic_fastq" を選択します。
</div>

{::nomarkdown}
{% include image.html url="books/hdra-runfinish.jpg" caption="データファイルの属性を入力し Run に結び付ける" class="w450" %}
{:/}

Analysis (任意) が不要な場合は [Submit / Update DRA metadata] をクリックし、メタデータを投稿します。

{::nomarkdown}
{% include image.html url="books/hdra-submit01.jpg" caption="DRA メタデータの投稿" class="w450" %}
{:/}

メタデータの投稿後、データファイルを検証する処理を開始します。"Validate uploaded data files to finish this submission" をクリックします。

{::nomarkdown}
{% include image.html url="books/hdra-submit02.jpg" caption="メタデータ投稿後、データファイルの検証に進む" class="w450" %}
{:/}

#### Analysis (任意) <a name="analysis"></a>

必要な数の Analysis を作成後、それぞれの Analysis について詳細を入力します。不要な Analysis は [Delete] ボタンで削除することができます。

[Select data files for Analysis] ボタンをクリックし、ファイルと Analysis を結び付ける画面に移動します。

{::nomarkdown}
{% include image.html url="books/hdra-analysis01.jpg" caption="Analysis の入力" class="w450" %}
{:/}

データファイルの属性を入力し、Analysis とリンクさせます。タブ区切りテキストファイルでまとめて内容を入力する場合、Analysis に登録するファイルを区別するために左端の Run/Analysis に "Analysis" と入力します。

{::nomarkdown}
{% include image.html url="books/hdra-analysisfile01.jpg" caption="データファイルと Analysis のリンク" class="w450" %}
{:/}

[Enter / Update metadata] をクリックして内容を投稿し、データファイルの検証に進みます。Analysis 用のファイルは md5 しかチェックされません。

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)" name="create-metadata-in-xml-files">XML でのメタデータ登録方法</a></h3>
<div class="accordion-content">

メタデータ作成ツールは technical read (アダプター、プライマーやバーコード配列) を記載することに対応していません。
「technical read を含む生データを登録する場合」や「[DRA XML schema](https://github.com/ddbj/pub/tree/master/docs/dra) 中にはあるがツール中には無い項目をメタデータに記載する場合」は メタデータを XML で登録、もしくは登録した XML を編集してアップロードします。

1. DRA 新規登録を作成し、データファイルをアップロードします。

2. Submission、Experiment、Run XML を作成します。アクセッション番号が未発行の BioProject と
BioSample を Experiment から参照する場合、以下のように記載します。
    ```
    <STUDY_REF>
      <IDENTIFIERS>
        <PRIMARY_ID label="BioProject Submission ID">PSUB004220</PRIMARY_ID>
      </IDENTIFIERS>
    </STUDY_REF>
    ```
    <br>
    ```
    <SAMPLE_DESCRIPTOR>
      <IDENTIFIERS>
        <PRIMARY_ID label="BioSample Submission ID">SSUB003742 : sample name</PRIMARY_ID>
      </IDENTIFIERS>
    </SAMPLE_DESCRIPTOR>
    ```
3. XML を検証します。以下の Unix コマンドで XML をスキーマに対して検証することができます。エラーになる XML
をアップロードすることはできません。
    ```
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.submission.xsd?view=co test07-0018.Submission.xml
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.experiment.xsd?view=co test07-0018.Experiment.xml
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.run.xsd?view=co test07-0018.Run.xml
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.analysis.xsd?view=co test07-0018.Analysis.xml
    ```
4. チェックした XML をアップロードします。Submission、Experiment、Run、Analysis (任意) の XML ファイルを選択し、同時にアップロードします。
    アップロードされた XML について「SRA xsd に対する妥当性」と「オブジェクト間の関係性」がチェックされます。エラーが発生した場合はファイルを修正してください。<br>
    [![作成した XML のアップロード]({{ site.baseurl }}/assets/images/books/hdra-xmlupload.jpg "作成した XML のアップロード"){:.w500}]({{ site.baseurl }}/assets/images/books/hdra-xmlupload.jpg "作成した XML のアップロード"){:.group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">XML でのメタデータ編集方法</a></h3>
<div class="accordion-content">

メタデータ作成ツールは technical read (アダプター、プライマーやバーコード配列) を記載することに対応していません。
「technical read を含む生データを登録する場合」や「[DRA XML schema](https://github.com/ddbj/pub/tree/master/docs/dra) 中にはあるがツール中には無い項目をメタデータに記載する場合」は メタデータを XML で登録、もしくは登録した XML を編集してアップロードします。

1. [メタデータ作成ツールでメタデータを作成し、投稿します。](#create-metadata-using-tool)
2. "metadata_submitted" になった登録の Submission、Experiment、Run、Analysis (任意) を XML ファイルとしてダウンロードします。
    [![ツールで作成したメタデータを XML としてダウンロード]({{ site.baseurl }}/assets/images/books/hdra-xmldownload.jpg "ツールで作成したメタデータを XML としてダウンロード"){:.w500}]({{ site.baseurl }}/assets/images/books/hdra-xmldownload.jpg "ツールで作成したメタデータを XML としてダウンロード"){:.group1}
3. XML を編集します。ファイル中のリードの構成を記載する SPOT_DESCRIPTOR
  については[記入例]({{ site.baseurl }}/aboutdra/example.html)を参考にしてください。 その他の項目については、[DRA XML schema](https://github.com/ddbj/pub/tree/master/docs/dra) 中の説明を参照してください。
4. アクセッション番号が未発行の BioProject と BioSample を  Experiment から参照する場合、以下のように記載します。
    ```
    <STUDY_REF>
      <IDENTIFIERS>
        <PRIMARY_ID label="BioProject Submission ID">PSUB004220</PRIMARY_ID>
      </IDENTIFIERS>
    </STUDY_REF>
    ```
    <br>
    ```
    <SAMPLE_DESCRIPTOR>
      <IDENTIFIERS>
        <PRIMARY_ID label="BioSample Submission ID">SSUB003742 : sample name</PRIMARY_ID>
      </IDENTIFIERS>
    </SAMPLE_DESCRIPTOR>
    ```
5. XML を検証します。以下の Unix コマンドで XML をスキーマに対して検証することができます。エラーになる XML をアップロードすることはできません。
    ```
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.submission.xsd?view=co test07-0018.Submission.xml
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.experiment.xsd?view=co test07-0018.Experiment.xml
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.run.xsd?view=co test07-0018.Run.xml
    xmllint --schema http://www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA/SRA.analysis.xsd?view=co test07-0018.Analysis.xml
    ```
6. 編集した XML をアップロードします。Submission、Experiment、Run、Analysis (任意) の XML ファイルを選択し、同時にアップロードします。
  アップロードされた XML について「SRA xsd に対する妥当性」と「オブジェクト間の関係性」がチェックされます。エラーが発生した場合はファイルを修正してください。<br>
  [![編集した XML のアップロード]({{ site.baseurl }}/assets/images/books/hdra-xmlupload.jpg "編集した XML のアップロード"){:.w500}]({{ site.baseurl }}/assets/images/books/hdra-xmlupload.jpg "編集した XML のアップロード"){:.group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### データファイルの検証 <a name="validation-data-files"></a>

転送したシークエンスデータファイルをアーカイブ用 SRA ファイルに変換する過程で MD5 値とシークエンスデータの整合性が検証されます。

“Data Files” に「Run と Analysis (任意) のメタデータに記載されているファイル名」と「データ受付サーバにアップロードされたファイル名と MD5 値」が一覧表示されます。

メタデータに記載されている全てのファイルがアップロードされている場合、[Validate data files] がクリックできる状態になります。

アップロードされているファイルのうちメタデータに記載されていないものは無視されます。

登録詳細画面中の [Validate data files] をクリックし、シークエンスデータファイルの検証処理を開始します。

{::nomarkdown}
{% include image.html url="books/hdra-validate.jpg" caption="シークエンスデータの検証処理を開始" class="w450" %}
{:/}

検証処理は以下の順番で実行されます。

#### MD5 Check <a name="MD5_Check"></a>

メタデータに記載されている MD5 値と、実際のファイルの MD5 値とが一致するかチェックされ、一致しない場合はエラーが表示されます。
エラーの場合は [Enter / Update metadata] からメタデータを修正するか、ファイルを再アップロードしてください。

#### Data Check <a name="Data_Check"></a>

シークエンスデータからアーカイブ用の SRA
ファイルを作成します。この過程でシークエンスデータファイルのフォーマットとメタデータとの整合性が検証されます。
作成に失敗するとエラーが表示されます。エラーが発生した場合は [Stop validation] をクリックして検証処理を停止した後、メタデータを修正、もしくは、データファイルを再アップロードします。
ファイルサイズが大きい場合は検証処理に時間がかかります。

問題が無ければ登録のステータスが "submission_validated" になり、検証 されたファイルが別ディレクトリに移されます。

登録のステータスが "submission_validated" になると DRA スタッフが査定を始めます。 DRA スタッフから指示があるまで D-way を操作せずにお待ちください。

#### data_error になった場合 <a name="data_error"></a>

検証処理のいずれかのステップでエラーになると、ステータスが "data_error" になります。 [Stop validation] をクリックして検証処理を停止してから、メタデータの編集やファイルの再アップロードを行い、再度 [Validate data files] をクリックしてください。

[FAQ: データファイルの validation エラーへの対処方法は？](/dra/faq.html#data-validation-error)

{::nomarkdown}
{% include image.html url="books/hdra-error.jpg" caption="検証処理を停止" class="w450" %}
{:/}

ステータスが "metadata_submitted" に戻るので、必要に応じてメタデータの修正、データファイルの再アップロードを行います。

{::nomarkdown}
{% include image.html url="books/hdra-edit.jpg" caption="データを修正" class="w450" %}
{:/}

### アクセッション番号の発行 <a name="accession-numbers"></a>

メタデータとシークエンスデータに問題がなければ、プレフィックス DR (Submission (DRA)、Experiment (DRX)、Run (DRR)、Analysis (DRZ)) のアクセッション番号が発行され、ステータスが “completed” になります。アクセッション番号は “Component” に表示されます。

また、Submission に記載されている登録者には、アクセッション番号がメールで通知されます。

{::nomarkdown}
{% include image.html url="books/hdra-accession.jpg" caption="DRA アクセッション番号" class="w450" %}
{:/}

### アーカイブ済み fastq/SRA ファイルの期間限定アクセス提供 <a name="fastq-sra-files"></a>

登録者がアーカイブ済みデータファイルを確認できるようにするため、アクセッション番号が発行された Run の fastq/SRA ファイルはファイルサーバ (ftp-private.ddbj.nig.ac.jp) 上の登録者がアクセスできる場所にコピーされます。
ディスク容量の圧迫を防ぐため、コピーされたファイルは作成から一ヶ月後に自動的に削除されます。

<div class="attention red">
ディスク空き容量の予期せぬ急減等により、コピーした fastq/SRA ファイルの一ヶ月以内の削除やコピー機能の一時停止が実施されることがあります。
できるだけ事前にウェブサイト等で周知いたしますが、直前になることもあり得ることをご了承ください。
</div>

  - (submitter's home)/report/dra/(DRA submission accession)/fastq/
  - (submitter's home)/report/dra/(DRA submission accession)/sra/

例

  - /report/dra/DRA000001/fastq/DRR000001.fastq.bz2
  - /report/dra/DRA000001/fastq/DRR000002.fastq.bz2
  - /report/dra/DRA000001/fastq/DRR000002_1.fastq.bz2
  - /report/dra/DRA000001/fastq/DRR000002_2.fastq.bz2
  - /report/dra/DRA000001/sra/DRR000001.sra
  - /report/dra/DRA000001/sra/DRR000002.sra

### データ公開 <a name="data-release"></a>

登録データのデータベースへの取り込みが完了するとステータスが "confidential" になり、即日公開が指定されている場合以外は、以下の原則に則り、データが公開されるまで非公開で保持されます。

DRA では以下の場合にデータを公開しています。

<div class="attention red">
オブジェクトは Submission 単位で公開されます。オブジェクトを異なる時期に公開したい場合は Submission を分けて登録してください。
</div>

- A. 登録者から公開依頼の連絡を受けた場合  
- B. 登録者がアクセッション番号を公表した事を確認した場合。  
登録者以外の第三者が過失により他人のアクセッション番号を論文や学会等で公表した場合などは該当しません。  
公表とは、アクセッション番号を不特定多数の対象に知らせる行為 (学術論文、学会、インターネット、報道機関などを媒体とした発表)
を指します。
- C. 公開予定日が到来した場合
- D. DRA Run (DRR) アクセッション番号を引用している DDBJ/EMBL-Bank/GenBank レコード
([TSA](/ddbj/tsa.html)、[WGS]({{ site.baseurl }}/datacategories/wgs.html), [CON]({{ site.baseurl }}/datacategories/con.html)
など) が公開された場合


B, C または D の場合は登録者の了解がなくても例外なく公開します。D の場合、引用されている DRR 番号を含む DRA
登録全体が公開されます。

FAQ:
[BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp_bs_seq_release.html)

データが公開されると、数日間のうちに [DRASearch](http://ddbj.nig.ac.jp/DRASearch) で検索可能になり
[NCBI SRA](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi) にミラーリングされます。

DRA ファイルサーバに存在する fastq ファイル一覧:
[fastqlist](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/meta/list/fastqlist)

## 登録の更新 <a name="update-submission"></a>

### 各データベースにおける更新方法 <a name="update-in-each-database"></a>

|  データベース  |  更新方法  |
| ---- | ---- |
|  [Annotated sequence database](/index.html)  |  [ウェブフォームから依頼]({{ site.baseurl }}/services/updt-form.html)  |
|  Sequence Read Archive (DRA)  |  [D-way にログインして登録者自身で更新](#change-hold-date)<br/>[配列データの追加や削除はウェブフォームから依頼)]({{ site.baseurl }}/aboutus/contact.html)  |
|  BioProject/BioSample  |  [ウェブフォームから依頼]({{ site.baseurl }}/aboutus/contact.html)  |

### 公開予定日の変更 <a name="change-hold-date"></a> 

公開予定日は最長で4年後まで指定でき、繰り返し更新することができます。Hold Date の [Change] をクリックし、公開予定日変更ページに移動し、予定日を変更します。

[![公開予定日の変更]({{ site.baseurl }}/assets/images/books/hdra-hold.jpg "公開予定日の変更"){:.w400}]({{ site.baseurl }}/assets/images/books/hdra-hold.jpg "公開予定日の変更"){:.group1}

データを即日公開する場合は "Release Now" をクリックします。作業した日の深夜に公開処理が実施され、[ftp にデータファイルが公開](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/)され、数日以内に [DRA 検索システム](http://ddbj.nig.ac.jp/DRASearch)にインデックスされます。

### メタデータの更新 <a name="update-metadata"></a>

[Enter / Update metadata] からメタデータを編集します。編集不可項目はブロックされています。
必要な編集が完了後、メタデータ作成ツールの [Submit/Update DRA metadata] ボタンをクリックし、更新内容を DRA データベースに反映させます。

関連する文献が公表された場合は、pubmed ID を含む文献情報を添えて [BioProject チーム]({{ site.baseurl }}/aboutbioproject/index.html) に追加を依頼します。

### データファイルの追加 <a name="add-data-files"></a>

DRA では登録が完了した Run データファイルの追加・変更はできません。別の Submission で新しく Experiment-Run のセットを追加し、既存の BioProject や BioSample を参照することでデータを追加します。

Run と同様登録が完了した Analysis データファイルの追加・変更はできません。Analysis を差し替える場合は [DRA チームにご連絡ください]({{ site.baseurl }}/aboutus/contact.html)。

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、[New submission] をクリックし、新規 DRA 登録を作成します。 作成した新規登録でデータを追加する対象の BioProject と BioSample を選択します。

  - 新たにサンプルを追加する場合は BioProject を共有し、新規登録で BioSample - Experiment - Run を追加します。
  - 既存のサンプルにデータを追加する場合は BioProject と BioSample を共有し、新規登録で Experiment - Run を追加します。

続いて DRA Experiment と Run タブで、Experiment、Run オブジェクトとデータファイルを追加します。

メタデータを submit し、ファイルの検証処理を実行します。追加された Experiment/Run オブジェクトに対してアクセッション番号が発行されます。

<div class="attention red">
追加したデータに対応する BioProject 番号は同一ですが、Submission に対する DRA 番号は異なります。
</div>

{::nomarkdown}
{% include image.html url="books/add_data_files.jpg" caption="サンプルの追加" class="w400" %}
{:/}

{::nomarkdown}
{% include image.html url="books/add_run.jpg" caption="サンプルへのデータ追加" class="w400" %}
{:/}

登録が完了した DRA 登録にデータファイルを直接追加する場合は [DRA チームに連絡してください]({{ site.baseurl }}/aboutus/contact.html)。

### オブジェクトの削除 <a name="withdraw-archived-objects"></a>

Experiment、Run や Analysis などのオブジェクトを削除する場合は [DRA チームに連絡してください]({{ site.baseurl }}/aboutus/contact.html)。

## 補足: MD5 値 <a name="supplement-md5"></a> 

MD5 (Message Digest Algorithm 5) はハッシュ関数であり、与えられたファイルに対してハッシュ値 (MD5値、32桁の英数字) を出力します。ファイルが破損していると MD5 値が変化します。 DRA では、到着したファイルの MD5 値の一致をチェックすることで、ファイルの破損がないかどうか確認しています。

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)" name="obtain-md5-number-linux">MD5 値の取得 (Linux)</a></h3>
<div class="accordion-content">

ファイルの MD5 値を取得します。

```
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)" name="obtain-md5-number-mac-os-x">MD5 値の取得 (Mac OS X)</a></h3>
<div class="accordion-content">

ファイルの MD5 値を取得します。

```
$ md5 file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)" name="obtain-md5-number-windows">MD5 値の取得 (Windows)</a></h3>
<div class="accordion-content">

[Fsum Frontend (http://sourceforge.net/projects/fsumfe/)](http://sourceforge.net/projects/fsumfe/)
をインストールし、起動します。  
まず、 "md5" にチェックを入れてください。

[![md5 を選択]({{ site.baseurl }}/assets/images/books/Fsum1.jpg "md5 を選択"){:.w400}]({{ site.baseurl }}/assets/images/books/Fsum1.jpg "md5 を選択"){:.group1}

[+] ボタンをクリックし、必要なシークエンスデータファイルを開いてください。同時に複数のファイルを選択することが可能です。

[![シークエンスデータファイルを選択]({{ site.baseurl }}/assets/images/books/Fsum2.jpg "シークエンスデータファイルを選択"){:.w400}]({{ site.baseurl }}/assets/images/books/Fsum2.jpg "シークエンスデータファイルを選択"){:.group1}

最後に、[Calculate hashes] ボタンをクリックしてください。各ファイルの MD5 値が表示されます。[Export] ボタンから、MD5 値の一覧表 (.html, .csv, .xml) を作成することができます。

[![MD5 値の計算を開始]({{ site.baseurl }}/assets/images/books/Fsum3.jpg "MD5 値の計算を開始"){:.w400}]({{ site.baseurl }}/assets/images/books/Fsum3.jpg "MD5 値の計算を開始"){:.group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>