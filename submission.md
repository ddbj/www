---
layout: indexed_content
title: データベースと登録窓口
lang: ja
---

## データベースと登録窓口  {#db}

生命情報・DDBJ センターがデータ登録を受け付けているデータベースと窓口の一覧。

<table>
  <thead>
    <tr>
      <th>データベース</th>
      <th>説明</th>
      <th>窓口</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/ddbj/index.html">Annotated/Assembled Sequences (DDBJ)</a></td> 
      <td>フラットファイル GenBank 相当 (INSDC)</td>
      <td>
      &bull; <a href="/ddbj/web-submission.html">NSSS</a>: ウェブフォームの塩基配列登録システム<br>
      &bull; <a href="/ddbj/mss.html">MSS</a>: NSSS が対応していない多件数、長大な配列データの登録システム<br>
      &bull; <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a>: 原核生物ゲノムの高速自動アノテーションパイプライン<br>
      </td>      
    </tr>
    <tr>
      <td><a href="/dra/index.html">DDBJ Sequence Read Archive (DRA)</a></td> 
      <td>主として NGS 由来 raw sequence data and/or alignment information (INSDC)</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/bioproject/index.html">BioProject</a></td> 
      <td>研究プロジェクト (INSDC)</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/biosample/index.html">BioSample</a></td> 
      <td>生物学的な試料、サンプル (INSDC)</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/gea/index.html">Genomic Expression Archive (GEA)</a></td> 
      <td>遺伝子発現、エピジェネティクスやジェノタイピング SNP アレイ等の機能ゲノミクスデータ</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/jga/index.html">Japanese Genotype-phenotype Archive (JGA)</a></td> 
      <td>アクセス制限が必要な個人レベルの遺伝学的なデータと匿名化された表現型情報</td> 
      <td><a href="/jga/submission.html">JGA Submission</a></td> 
    </tr>
  </tbody>
</table>

研究目的、データ種別により、上記の何れか、必要に応じて複数に渡ってデータを登録する必要があります。

## 比較的小規模な塩基配列データの登録  {#small}

通常はウェブフォーム入力による [NSSS](/ddbj/web-submission.html) 登録を推奨します。    
下記に該当する場合、[MSS](/ddbj/mss.html) 登録をお願いします。    

* 配列数が 500 を超える
* 配列が長い (目安は 500 kb 以上)
* エントリ (１つの配列) あたりに多数 (概ね30以上) の Feature がある
* [WGS](/ddbj/wgs.html), [CON](/ddbj/con.html), [TSA](/ddbj/tsa.html), [TLS](/ddbj/tls.html), [HTC](/ddbj/htc.html), [HTG](/ddbj/htg.html), [EST](/ddbj/est.html), [GSS](/ddbj/gss.html), STS の登録

## 大規模な塩基配列データの登録 {#large}

以下に該当する場合、BioProject, BioSample へ登録後、DRA、MSS の何れか、または両方への登録が必要です。    

* [Genome Project のデータ登録](/ddbj/genome.html)
  * 細菌、または、古細菌のゲノム、[DFAST](https://dfast.ddbj.nig.ac.jp/)
  * [メタゲノムアセンブリ](/ddbj/metagenome-assembly.html) 
  * [Single amplified genome](/ddbj/single-amplified-genome.html)
* [Transcriptome Project のデータ登録](/ddbj/transcriptome.html)
* 遺伝子発現解析
* [Targeted Locus Study (TLS)](/ddbj/tls.html)、主として大規模な OTU profile 解析

Transcriptome で [Transcriptom Shotgun Assembly (TSA)](/ddbj/tsa.html) に該当する場合、BioProject, BioSample へ登録後、DRA と MSS への登録が必須です。    
転写産物配列の比較計測による遺伝子発現解析の場合、BioProject, BioSample へ登録後、DRA 登録が必要です。
解析済みデータの GEA 登録も強く推奨します。主要な科学雑誌は解析済みデータの [GEO/ArrayExpress/GEA](https://www.nature.com/sdata/policies/repositories#omics) への登録を義務付けています。    

## 塩基配列以外のデータの登録先  {#non-nuc}

* マイクロアレイデータは [GEA](/gea/index.html) で受け付けています。
* 塩基配列を伴わないアミノ酸配列データは DDBJ では受け付けておりません。[UniProt](https://www.uniprot.org/) への登録をご検討ください。    
[FAQ: アミノ酸配列の登録方法を教えてください](/faq/ja/how-to-submit-amino-acid-seq.html)    
* ヒトに関する研究データの場合、アクセス制限データベースである [JGA](/jga/submission.html) で受け付けることが可能な場合があります。JGA に登録するためには [NBDC](https://humandbs.biosciencedbc.jp/data-submission) へ提供を申請し、承認される必要があります。

## 受け付けることができない塩基配列データ   {#non-acceptable}

* ゲノム DNA と RNA 転写産物を混合した塩基配列
* 特定の実体を伴わない塩基配列 (いわゆる consensus sequences)
* 長さが 100 塩基未満の塩基配列 (2021年6月以降) 
* primer のみで構成される塩基配列 (2021年6月以降)
