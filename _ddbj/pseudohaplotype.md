---
layout: indexed_content
title: Pseudohaplotype
pathname: pseudohaplotype
category: ddbj
lang: ja
---

これまで全ゲノムシークエンスでは相同染色体のアリルを区別せず、コンセンサス配列として結果を得ることが一般的でした。しかし、ロングリード・シークエンス技術によりハプロイ （INSDC では pseudohaplotype と呼んでいます）を区別してシークエンスすることが可能になりました。Pseudohaplotype シークエンスは同じサンプルから二つのゲノムデータが得られるという特徴があるため、INSDC ではデータの登録方法を定めています。

## pseudohaplotype <a name="pseudohaplotype"></a>

DDBJ に pseudohaplotype アセンブリを登録する典型的な場合について説明します。まず、pseudohaplotype を区別するためにどちらかを Principal とし、もう片方を Alternate とします。絶対的な基準はありませんが、配列長やシークエンス精度などを基に登録者で選定してください。各 pseudohaplotype は同じサンプルに由来するため、共通の BioSample を使います。INSDC では BioProject と BioSample の組み合わせでアセンブリを管理しているため、組み合わせが pseudohaplotype 毎にユニークになるようにPrincipal と Alternate に対応する BioProject をそれぞれ作成します。さらにアンブレラ BioProject を作成し、両方の BioProject をまとめます。

Pseudohaplotype をシークエンスした生データを DRA に登録する場合、両方の pseudohaplotype のデータが混在している場合、BioProject はアセンブリとは別に DRA
用のものを登録します。BioSample はサンプルがアセンブリと同じであれば、共通のものを使います。

{::nomarkdown}
{% include image.html url="submission/pseudohaplotype.jpg" caption="pseudohaplotype データの登録" class="w600" %}
{:/}

### BioProject <a name="bioproject"></a>

Principal と Alternate pseudohaplotype に対応するプロジェクトをそれぞれ登録し、両者をまとめるアンブレラプロジェクトを登録します。

  - BioProject 1: Principal
      - title に pseudohaplotype のフェーズに関する情報を記載。例 Principal
        pseudohaplotype や Primary haplotype
  - BioProject 2: Alternate
      - title に pseudohaplotype のフェーズに関する情報を記載。例 Alternate
        pseudohaplotype や Alternate haplotype
  - Umbrella BioProject
      - BioProject 1、2 と他の関連する BioProject（図の例では DRA 用の BioProject
        3）をまとめる。

### BioSample <a name="biosample"></a>

サンプルは pseudohaplotype で共通であるため、一つのゲノム用サンプルを登録します。

  - パッケージはゲノム用の
    [MIGS](/biosample/services/index.html#Genomic_Sequences_Sample) を選択。
  - Principal と alternate pseudohaplotype が由来する共通サンプルを一つ登録。
  - Pseudohaplotype に遺伝子アノテーションを付与する場合、Principal と Alternate で使う共通の
    [locus tag prefix](/ddbj/locus_tag.html) を locus\_tag\_prefix
    属性に記入します。プレフィックスが共通でもタグで pseudohaplotype
    を区別することができます。例 A1C\_p00001 (Principal) と
    A1C\_a00001 (Alternate)

### DDBJ <a name="ddbj"></a>

Principal と Alternate pseudohaplotype をそれぞれ登録します。

  - Principal pseudohaplotype
      - [DBLINK](”/ddbj/file-format.html#dblink”) で BioProject 1
        (Principal) を参照します。
      - [ST\_COMMENT](”/ddbj/file-format.html#comment”)
        に所定のコメントを記載します。  
        Genome-Assembly-Data ST\_COMMENT: Diploid :: Principal
        Pseudohaplotype
  - Alternate pseudohaplotype
      - [DBLINK](”/ddbj/file-format.html#dblink”) で BioProject 2
        (Alternate) を参照します。
      - [ST\_COMMENT](”/ddbj/file-format.html#comment”)
        に所定のコメントを記載します。  
        Genome-Assembly-Data ST\_COMMENT: Diploid :: Alternate
        Pseudohaplotype

### 登録例 <a name="real-examples"></a>

#### 共通 <a name="common"></a>

  - BioProject: [PRJDB10054
    (Umbrella)](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10054)
  - BioSample:
    [SAMD00229903](https://www.ncbi.nlm.nih.gov/biosample/SAMD00229903)

#### Principal pseudohaplotype <a name="principal"></a>

  - BioProject:
    [PRJDB10055](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10055)
  - DDBJ:
    [BLYA01000001-BLYA01003780](https://www.ncbi.nlm.nih.gov/nuccore/BLYA00000000)

#### Alternate pseudohaplotype <a name="alternate"></a>

  - BioProject:
    [PRJDB10056](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10056)
  - DDBJ:
    [BLYB01000001-BLYB01003780](https://www.ncbi.nlm.nih.gov/nuccore/BLYB00000000)

#### DRA <a name="dra"></a>

  - BioProject:
    [PRJDB9979](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB9979)
  - DRA: [DRX222432-DRX222163,
    DRR231909-DRR231923](https://www.ncbi.nlm.nih.gov/sra?term=DRP006217)
