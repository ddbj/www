---
layout: indexed_content
title: GEA への登録
pathname: overview
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
    url: /faq/ja/index.html
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

## 概要 <a name="over"></a>

GEA はマイクロアレイや次世代シークエンサから出力される機能ゲノミクスデータを受け付けています。主要な experiment type としては transcription profiling (mRNA と miRNA)、chromatin immunoprecipitation (ChIP) と SNP genotyping が挙げられます。GEA における experiment type の[全リスト](/gea/experiment-types.html)。

マイクロアレイとシークエンシング実験の submission はそれぞれ [MIAME](http://fged.org/projects/miame/) と [MINSEQE](http://fged.org/projects/minseqe/) ガイドラインに準拠する必要があります。

<table>
<tr>
<th>GEA が受付けているデータ</th>
<th>GEA が受付けていないデータ</th>
</tr>
<tbody>
<td>
<p>定量的な遺伝子発現、遺伝子発現制御やエピジェネティクス解析をしている研究やその他の機能ゲノミクス研究から得られたデータ。</p>
<p>例:</p>
<ul>
<li>mRNA プロファイリング、RNA-seq</li>
<li>small RNA プロファイリング、miRNA-seq</li>
<li>ChIP-Seq</li>
<li>HiC-seq</li>
<li>methyl-seq、bisulfite-seq</li>
</ul>
<p>データが GEA に登録可能かどうか不明な場合は<a href="/contact-ddbj.html">お問い合わせください</a>。</p>
</td>
<td>
<ul>
<li>アクセス制限が必要なヒトデータ (<a href="/jga/index.html">JGA</a> に登録してください)</li>
<li>アセンブルされた転写産物 (<a href="/dra/submission.html">DRA</a> と <a href="/ddbj/tsa.html">DDBJ Transcriptome Shotgun Assembly</a> に登録してください)</li>
<li>全ゲノムシークエンス (<a href="/dra/submission.html">DRA</a> と <a href="/ddbj/wgs.html">DDBJ WGS</a> に登録してください)</li>
<li>メタゲノムシークエンス (<a href="/dra/submission.html">DRA</a> と <a href="/ddbj/environmental.html">DDBJ Environmental sequence</a> に登録してください)</li>
<li>リシークエンス、塩基配列変異やコピー数変異 (<a href="/dra/submission.html">DRA</a> と <a href="https://www.ncbi.nlm.nih.gov/snp/docs/submission/hts_launch_and_introductory_material/">NCBI (human-only)</a> もしくは <a href="https://www.ebi.ac.uk/eva/">EBI variation resource</a> に登録してください)</li>
<li>survey シークエンスやエキソームシークエンス (<a href="/dra/submission.html">DRA</a> に登録してください)</li>
<li>メタボロミクスやプロテオミクスデータ (プロテオミクスデータは <a href="https://jpostdb.org/">jPOST</a> に登録してください)</li>
</ul>
<p>これらのデータの登録先については <a href="/services/index.html">DDBJ ウェブサイト</a>を参照してください。</p>
</td>
</tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
  <span class="red">ヒトを対象とした研究データの登録について</span>  
  : 研究対象者に由来するデータを DDBJ
    センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。 ヒトを対象とした研究データを登録する場合は「[ヒトを対象とした研究データの登録について](/policies.html#human)」を熟読してください。
</div>

## 登録ファイル <a name="sub-files"></a>

### マイクロアレイ実験 <a name="arrayxp"></a>

[マイクロアレイ実験の登録](/gea/submit-array.html)

  - [IDF と SDRF メタデータ](/gea/metadata.html)
  - [生データ](/gea/datafile.html#array_data)
  - [解析済みデータ](/gea/datafile.html#array-proc)
  - [（必要であれば）アレイデザインファイル](/gea/adf.html)

### シークエンシング実験 <a name="seqxp"></a>

[シークエンシング実験の登録](/gea/submit-sequence.html)

  - [IDF と SDRF メタデータ](/gea/metadata.html)
  - [生データ (先行して](/gea/datafile.html#seq_raw) [DRA](/dra/submission.html) に登録しておく必要があります)
  - [解析済みデータ](/gea/datafile.html#seq_proc)

## アクセッション番号 <a name="acc"></a>

GEA の Experiment と Array design に対して以下の形式のアクセッション番号が発行されます (n は整数)。中央の四文字コードについては ArrayExpress [accession codes](https://www.ebi.ac.uk/arrayexpress/help/accession_codes.html) をご覧ください。

  - Experiment: E-GEAD-n
  - Array design: A-GEAD-n

十分なメタデータとデータファイルが提供された登録に対してアクセッション番号が発行されます。

## データ公開 <a name="rel"></a>

関連する論文が公表されるまでデータを非公開にすることができます。四年後までの公開予定日を設定し、随時延長することができます。登録されたデータは[データ公開原則](/documents/data-release-policy.html)に従って公開されます。

## Reviewer access <a name="reviewer-access"></a>

GEA データベースに非公開 experiment と array design が登録された後、登録者は査読者用のアクセストークンを発行することができます。トークンを発行してジャーナルの編集者と査読者に伝える手順については [reviewer accesss](/gea/reviewer-access.html) ページをご覧ください。

## 更新 <a name="update"></a>

GEA に登録されたデータを更新・削除する場合は [GEA チームに連絡](/contact-ddbj.html)してください。