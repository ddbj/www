---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: 登録概要
category: gea
current_tab: submission overview
lang: ja
---

<div class="attention" markdown="1">
  <span class="red">ヒトを対象とした研究データの登録について</span>  
  : 研究対象者に由来するデータを DDBJ
    センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。 ヒトを対象とした研究データを登録する場合は「[ヒトを対象とした研究データの登録について](/policies.html#submission-of-human-data)」を熟読してください。
</div>

GEA はマイクロアレイや次世代シークエンサから出力される機能ゲノミクスデータを受け付けています。データの登録先については[登録ナビゲーション](/submission-navigation.html)を参照してください。

<table class="gea">
   <tr>
      <th>GEA が受付けているデータ</th>
      <th>GEA が受付けていないデータ</th>
   </tr>
   <tbody>
      <td>
         <p>定量的な遺伝子発現、遺伝子発現制御、エピジェネティクス解析や SNP genotyping 等の機能ゲノミクス研究から得られたデータ。<br>例:<br></p>
         <ul>
            <li>mRNA プロファイリング、RNA-seq</li>
            <li>small RNA プロファイリング、miRNA-seq</li>
            <li>ChIP-Seq</li>
            <li>HiC-seq</li>
            <li>methyl-seq、bisulfite-seq</li>
            <li>SNP マイクロアレイ genotyping</li>
         </ul>
         <p>データが GEA に登録可能かどうか不明な場合は<a href="/contact-ddbj.html">お問い合わせください</a>。</p>
      </td>
      <td>
         <ul>
            <li>アクセス制限が必要なヒトデータ (<a href="/jga/index.html">JGA</a> に登録してください)</li>
            <li>アセンブルされた転写産物 (<a href="/dra/submission.html">DRA</a> と <a href="/ddbj/tsa.html">DDBJ TSA</a> に登録してください)</li>
            <li>全ゲノムシークエンス (<a href="/dra/submission.html">DRA</a> と <a href="/ddbj/wgs.html">DDBJ WGS</a> に登録してください)</li>
            <li>メタゲノムシークエンス (<a href="/dra/submission.html">DRA</a> と <a href="/ddbj/environmental.html">DDBJ ENV</a> に登録してください)</li>
            <li>リシークエンス、塩基配列変異やコピー数変異 (<a href="/dra/submission.html">DRA</a> とヒトデータは <a href="/togovar/submission.html">TogoVar-repository</a>、ヒト以外のデータは <a href="https://www.ebi.ac.uk/eva/">EBI Variation Archive</a> に登録してください)</li>
            <li>Survey シークエンスやエキソームシークエンス (<a href="/dra/submission.html">DRA</a> に登録してください)</li>
            <li>メタボロミクスデータ (<a href="/metabobank/submission.html">MetaboBank</a> に登録してください)</li>
            <li>プロテオミクスデータ (<a href="https://jpostdb.org/">jPOST</a> に登録してください)</li>
         </ul>
      </td>
   </tbody>
</table>
## 登録ファイル {#submission-files}

### マイクロアレイ実験 {#array}

[マイクロアレイ実験の登録](/gea/submit-array.html)

- [IDF と SDRF メタデータ](/gea/metadata.html)
- [生データ](/gea/datafile.html#array_data)
- [解析済みデータ](/gea/datafile.html#array-proc)
- [（必要に応じて）アレイデザインファイル](/gea/adf.html)

### シークエンシング実験 {#seq}

[シークエンシング実験の登録](/gea/submit-sequence.html)

- [IDF と SDRF メタデータ](/gea/metadata.html)
- [生データ (先行して](/gea/datafile.html#seq_raw) [DRA](/dra/submission.html) に登録)
- [解析済みデータ](/gea/datafile.html#seq_proc)

## アクセッション番号 {#accession}

GEA の Experiment と Array design に対してアクセッション番号が発行されます (n は整数)。

- Experiment: E-GEAD-n
- Array design: A-GEAD-n

## データ公開 {#release}

関連する論文が公表されるまでデータを非公開にすることができます。四年後までの公開予定日を設定し、随時延長することができます。登録されたデータは[データ公開原則](/documents/data-release-policy.html)に従って公開されます。

FAQ: [データ公開の依頼方法は？](/faq/ja/request-release.html)

## Reviewer access {#reviewer-access}

データの登録後、査読者用のアクセストークンを発行することができます。詳しくは [Reviewer accesss](/gea/reviewer-access.html) をご覧ください。

## 更新 {#update}

データを更新・削除は[フォーム](https://forms.gle/PzTzxuYiMenc8CCR6)から GEA チームに依頼してください。
