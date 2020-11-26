---
layout: indexed_content
title: MAGE-TAB の例
pathname: example
category: gea
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /gea/index.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence.html
      - title: Metadata
        url: /gea/metadata.html
      - title: Data File
        url: /gea/datafile.html
      - title: Validation
        url: /gea/validation.html
      - title: Single-cell submission guide
        url: /gea/single-cell.html
      - title: Example
        url: /gea/example.html
      - title: Array Design
        url: /gea/adf.html
      - title: Data matrix
        url: /gea/matrix.html
      - title: Reviewer Access
        url: /gea/reviewer-access.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=gea
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
      - title: RefEx
        url: http://refex.dbcls.jp/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea.html
lang: ja
---

## IDF 例 <a name="idf"></a>

[IDF
スプレッドシート例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

| [Comment\[GEAAccession\]](/gea/metadata-e.html#Comment_idf)               | E-GEAD-369                                                                      |     |
| MAGE-TAB Version                                                          | 1.1                                                                             |     |
| [Investigation Title](/gea/metadata-e.html#Investigation_Title)           | Transcriptional profiling of Arabidopsis leaves exposed to elevated temperature |     |
| [Experiment Description](/gea/metadata-e.html#Experiment_Description)     | We investigated genome-wide ... biological replicates were analyzed.            |     |
| [Experimental Design](/gea/metadata-e.html#Experimental_Design)           | stimulus or stress design                                                       |     |
| [Experimental Factor Name](/gea/metadata-e.html#Experimental_Factor_Name) | temperature                                                                     |     |
| [Experimental Factor Type](/gea/metadata-e.html#Experimental_Factor_Type) | temperature                                                                     |     |
| [Person Last Name](/gea/metadata-e.html#Person_Last_Name)                 | Test                                                                            |     |
| [Person First Name](/gea/metadata-e.html#Person_First_Name)               | Tarou                                                                           |     |
| [Person Affiliation](/gea/metadata-e.html#Person_Affiliation)             | DDBJ Center, National Institute of Genetics                                     |     |
| [Person Roles](/gea/metadata-e.html#Person_Roles)                         | submitter                                                                       |     |
| [Public Release Date](/gea/metadata-e.html#Public_Release_Date)           | 2018-06-22                                                                      |     |
| [PubMed ID](/gea/metadata-e.html#PubMed_ID)                               | 29040613                                                                        |     |
| [Protocol Name](/gea/metadata-e.html#Protocol_Name)                       | P-GEAD-535                                                                      | ... |
| [Protocol Type](/gea/metadata-e.html#Protocol_Type)                       | sample collection protocol                                                      | ... |
| [Protocol Description](/gea/metadata-e.html#Protocol_Description)         | Plants were sown on GM medium ... 22 degrees celsius.                           | ... |
| [SDRF File](/gea/metadata-e.html#SDRF_File)                               | E-GEAD-369.sdrf.txt                                                             |     |
| [Comment\[Number of channel\]](/gea/metadata-e.html#Comment_idf)          | single-channel                                                                  |     |
| [Comment\[Array Design REF\]](/gea/metadata-e.html#Comment_idf)           | A-AFFY-2                                                                        |     |
| [Comment\[AEExperimentType\]](/gea/metadata-e.html#Comment_idf)           | transcription profiling by array                                                |     |
| [Comment\[BioProject\]](/gea/metadata-e.html#Comment_idf)                 | PRJDB3647                                                                       |     |
| [Comment\[Public Release Date\]](/gea/metadata-e.html#Comment_idf)        | 2018-06-22                                                                      |     |
| [Comment\[Last Update Date\]](/gea/metadata-e.html#Comment_idf)           | 2018-06-22                                                                      |     |

サポートされている IDF タグの全リストは [IDF ページ](/gea/metadata-e.html#idf)をご覧ください。

## SDRF 概念的な例 <a name="sdrf_con"></a>

[SDRF
スプレッドシート例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

  - [Example 1: サンプル毎の生データと解析済みデータファイル](#sdrf_example1)
  - [Example 2: Two-color マイクロアレイ](#sdrf_example2)
  - [Example 3: サンプル毎の次世代シークエンス DRA 生データ (Run)
    と解析済みデータファイル、及び、解析済みマトリックスファイル](#sdrf_example3)

以下の例では概念上重要なカラムに限定した SDRF グラフと対応する表を示しています。青色のカラムヘッダーはグラフノード（Name
カラム）を表しています。

### Example 1: サンプル毎の生データと解析済みデータファイル <a name="sdrf_example1"></a>

単純なマイクロアレイ実験。各サンプルに対して１つの生データファイルと解析済みデータファイルがあるケース。

{::nomarkdown}
{% include image.html url="magetab/sdrf1.png" caption="各サンプルに対して１つの生データファイルと解析済みデータファイルがあるケース" class="w400" %}
{:/}

| Source Name | Protocol REF | Assay Name      | Array Data File | Derived Array Data File |
| Source 1    | P-GEAD-10    | Hybridization 1 | Data1.CEL       | Processed1.txt          |
| Source 2    | P-GEAD-10    | Hybridization 2 | Data2.CEL       | Processed2.txt          |
| Source 3    | P-GEAD-10    | Hybridization 3 | Data3.CEL       | Processed3.txt          |
| Source 4    | P-GEAD-10    | Hybridization 4 | Data4.CEL       | Processed4.txt          |

{: .tablecaption}
各サンプルに対して１つの生データファイルと解析済みデータファイルがあるケース

### Example 2: Two-color マイクロアレイ <a name="sdrf_example2"></a>

{::nomarkdown}
{% include image.html url="magetab/sdrf2.png" caption="Two-color マイクロアレイ" class="w400" %}
{:/}

| Source Name | Extract Name | Labeled Extract Name  | Label | Assay Name      |
| Source 1a   | Extract 1a   | LabeledExtract 1a Cy3 | Cy3   | Hybridization 1 |
| Source 1b   | Extract 1b   | LabeledExtract 1b Cy5 | Cy5   | Hybridization 1 |
| Source 2a   | Extract 2a   | LabeledExtract 2a Cy3 | Cy3   | Hybridization 2 |
| Source 2b   | Extract 2b   | LabeledExtract 2b Cy5 | Cy5   | Hybridization 2 |
| Source 3a   | Extract 3a   | LabeledExtract 3a Cy3 | Cy3   | Hybridization 3 |
| Source 3b   | Extract 3b   | LabeledExtract 3b Cy5 | Cy5   | Hybridization 3 |

{: .tablecaption}
Two-color マイクロアレイ

### Example 3: サンプル毎の次世代シークエンス DRA 生データ (Run) と解析済みデータファイル、及び、解析済みマトリックスファイル  <a name="sdrf_example3"></a>

単純な次世代シークエンス実験。サンプル毎の次世代シークエンス DRA 生データ (Run)
と解析済みデータファイル、及び、解析済みマトリックスファイル

{::nomarkdown}
{% include image.html url="magetab/sdrf3.png" caption="サンプル毎の次世代シークエンス DRA 生データ (Run)
と解析済みデータファイル、及び、解析済みマトリックスファイル" class="w500" %}
{:/}

| Source Name | Protocol REF | Assay Name   | Array Data File | Derived Array Data File | Derived Array Data Matrix File |
| Source 1    | P-GEAD-20    | Sequencing 1 | DRR000001       | Processed1.txt          | Processed-matrix.txt           |
| Source 2    | P-GEAD-20    | Sequencing 2 | DRR000002       | Processed2.txt          | Processed-matrix.txt           |
| Source 3    | P-GEAD-20    | Sequencing 3 | DRR000003       | Processed3.txt          | Processed-matrix.txt           |
| Source 4    | P-GEAD-20    | Sequencing 4 | DRR000004       | Processed4.txt          | Processed-matrix.txt           |

{: .tablecaption}
サンプル毎の次世代シークエンス DRA 生データ (Run) と解析済みデータファイル、及び、解析済みマトリックスファイル

## MAGE-TAB 実際の例 <a name="tab_real"></a>

[SDRF スプレッドシート例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

以下は ArrayExpress に実際に登録されているマイクロアレイとシークエンシング実験の MAGE-TAB 例です。

| Accession Number                                                            | IDF Text                                                                               | SDRF Text                                                                                | Experiment Summary                                                                                                       | Platform                      |
| [E-TABM-18](https://www.ebi.ac.uk/arrayexpress/experiments/E-TABM-18)       | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-TABM-18/E-TABM-18.idf.txt)       | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-TABM-18/E-TABM-18.sdrf.txt)       | Transcription profiling of 35 different Arabidopsis thaliana ecotypes                                                    | Affymetrix                    |
| [E-TABM-985](https://www.ebi.ac.uk/arrayexpress/experiments/E-TABM-985)     | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-TABM-985/E-TABM-985.idf.txt)     | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-TABM-985/E-TABM-985.sdrf.txt)     | Transcription profiling by array of mouse testis development, dye swap design                                            | Compugen                      |
| [E-MEXP-2665](https://www.ebi.ac.uk/arrayexpress/experiments/E-MEXP-2665)   | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-MEXP-2665/E-MEXP-2665.idf.txt)   | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-MEXP-2665/E-MEXP-2665.sdrf.txt)   | ChIP-chip by array of mouse cell lines and fresh tissues                                                                 | Multiple platforms            |
| [E-TABM-855](https://www.ebi.ac.uk/arrayexpress/experiments/E-TABM-855)     | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-TABM-855/E-TABM-855.idf.txt)     | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-TABM-855/E-TABM-855.sdrf.txt)     | Genotyping of human lymphoblastoid cell lines from pairs of HapMap indiviudals                                           | Illumina GoldenGate SNP array |
| [E-MTAB-371](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-371)     | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-MTAB-371/E-MTAB-371.idf.txt)     | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-MTAB-371/E-MTAB-371.sdrf.txt)     | ChIP-seq of human myofibroblasts                                                                                         | Illumina Sequencing           |
| [E-MTAB-6311](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-6311)   | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-MTAB-6311/E-MTAB-6311.idf.txt)   | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-MTAB-6311/E-MTAB-6311.sdrf.txt)   | Transcription changes in zebrafish embryos of different developmental ages after exposure to cyanide (two factor values) | Affymetrix                    |
| [E-GEOD-26444](https://www.ebi.ac.uk/arrayexpress/experiments/E-GEOD-26444) | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-GEOD-26444/E-GEOD-26444.idf.txt) | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-GEOD-26444/E-GEOD-26444.sdrf.txt) | Deep sequencing-based analysis of the anaerobic stimulon                                                                 | SOLiD sequencing              |
| [E-GEOD-24366](https://www.ebi.ac.uk/arrayexpress/experiments/E-GEOD-24366) | [idf text](https://www.ebi.ac.uk/arrayexpress/files/E-GEOD-24366/E-GEOD-24366.idf.txt) | [sdrf text](https://www.ebi.ac.uk/arrayexpress/files/E-GEOD-24366/E-GEOD-24366.sdrf.txt) | Global changes following N-deprivation in Chlamydomonas                                                                  | 454 sequencing                |

{: .tablecaption}
MAGE-TAB 実際の例
