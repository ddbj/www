---
layout: indexed_content
title: 遺伝研スーパーコンピュータシステム 
category: sc
lang: ja
---

<div class="col-xs-12 col-sm-9">

<div class="row">

<div class="col-xs-12 col-sm-12">

<div id="viewlet-above-content-title">

<span id="social-tags-body" style="display: none" itemscope=""
itemtype="http://schema.org/WebPage"> <span
itemprop="name">遺伝研スーパーコンピュータシステム</span> <span
itemprop="description"></span> <span
itemprop="url">https://sc.ddbj.nig.ac.jp/ja/home</span> <span
itemprop="image">https://sc.ddbj.nig.ac.jp/@@site-logo/sc\_logo\_20180216a.png</span>
</span>

</div>

遺伝研スーパーコンピュータシステム
==================================

<div id="viewlet-below-content-title">

</div>

<div id="viewlet-above-content-body" class="section">

</div>

<div id="content-core" class="section">

<div id="parent-fieldname-text">

 

 

国立遺伝学研究所は生命・医学系研究における情報処理のための大規模計算基盤として、大規模クラスタ型計算機・大規模メモリ共有型計算機・大容量高速ディスク装置を備えた最新鋭のスーパーコンピュータシステムサービスを提供しています。

<img src="https://sc.ddbj.nig.ac.jp/ja/top_image2.png" title="top_image2.png" class="image-inline" alt="top_image2.png" /> 

 

**<img src="https://sc.ddbj.nig.ac.jp/ja/caution.png/@@images/a4910b91-4299-4da0-aa28-80fd159914bc.png" title="caution.png" class="image-inline" alt="caution.png" /> ディスク容量が逼迫しているためユーザーホームディレクトリ内のデータについて当研究所ではバックアップを取っておりません。[免責事項](https://sc.ddbj.nig.ac.jp/ja/application/regulations/844bwb)の通り、利用者の責任においてバックアップを取っていただくようお願いいたします。** 

------------------------------------------------------------------------

新着情報
--------

 

### Rhelixa RNAseqパイプライン

2020.09.08

国立遺伝学研究所と包括連携協定を結ぶ[株式会社Rhelixa](https://www.rhelixa.com/)（代表取締役：仲木
竜）より、RNA-seq解析パイプラインが提供され、スーパーコンピュータシステムに実装されました。

本パイプラインは、RNA-seqアプリケーションにより得られた単一サンプルのシーケンスリードデータを参照ゲノムにマッピングし、遺伝子領域ごとに集計し、全遺伝子の発現量を計算するものです。

 

<table style="width: 803px;">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><img src="https://sc.ddbj.nig.ac.jp/ja/advanced-guide/rna-seq-pipeline-overview/@@images/59c67b6e-ef87-48e0-962a-ae4df9f68209.png" title="RNA-seqパイプライン概要" class="image-inline" alt="RNA-seqパイプライン概要" /></p>
<p> </p></td>
<td><p> </p>
<p>Rhelixa RNAseqパイプラインはSingularityコンテナイメージとしての形で遺伝研スパコン上にインストールされています。</p>
<p>Singularityコンテナイメージの遺伝研スパコン外での利用はできません。</p>
<p>利用方法は下記リンクをご参照ください。</p>
<ul>
<li><a href="https://sc.ddbj.nig.ac.jp/ja/advanced-guide/rhelixa-rnaseq-pipeline">Rhelixa RNAseqパイプラインの紹介</a></li>
<li><a href="https://sc.ddbj.nig.ac.jp/ja/advanced-guide/rhelixa-rnaseq-pipeline-manual">Rhelixa RNAseqパイプライン　利用マニュアル</a></li>
</ul></td>
</tr>
</tbody>
</table>

 

### Asperaの構成変更について

2020.08.27

これまではAsperaを使用する場合には、遺伝研スパコンのサポートまでご連絡頂いてAspera用のユーザー登録を別途行って頂く運用になっておりましたが、構成を変更し、一般解析環境のユーザーは特別な申請なしに大規模データのアップロード、ダウンロードを行えるようにしました。利用方法は「[システム利用案内
&gt;
一般解析環境におけるファイル転送の方法](https://sc.ddbj.nig.ac.jp/ja/guide/usage-for-general-analysis-environment/file-transfer)」をご参照ください。

 

個人ゲノム解析環境につきましてはさくらインターネット（株）社のHCPToolsを用いてAsperaと同様の機能を提供するよう準備しており、近日中に利用可能となります。

 

### 個人ゲノム解析環境のゲートウェイ構成変更について

2020.06.30  
  
これまで個人ゲノム解析環境ではデータのアップロード、ダウンロード時に  
一旦検疫ゲートウェイサーバーにデータをコピーし検疫を行うようお願いしておりましたが、  
検疫ゲートウェイサーバーが混雑し処理速度が低下していたため、  
今回これを廃止し、直接ユーザーディレクトリにデータ転送できるよう、構成を変更いたしました。  
  
これに伴いSSL-VPNクライアントソフトウェアのポート番号の変更(10443 =&gt;
443)をお願いいたします。  
これによりデータ転送が簡便になり速度も向上します。  
  
VPN接続ポートの変更手順については、下記URLをご参照ください。  
  
\[Mac版\]  
<https://sc.ddbj.nig.ac.jp/ja/guide/usage-for-analysis-environment-for-individual-genomes/longin-mac>  
  
\[Linux版\]  
<https://sc.ddbj.nig.ac.jp/ja/guide/usage-for-analysis-environment-for-individual-genomes/login-linux>  
  
\[Windows版\]  
<https://sc.ddbj.nig.ac.jp/ja/guide/usage-for-analysis-environment-for-individual-genomes/login-windows>

 

### 遺伝研スパコンの計算ノード増設について

 2020.04.01

<div id="parent-fieldname-text">

遺伝研スパコンシステムは、2020年4月1よりシステムが増強され、計算ノードの総コア数が11,696コアから15,280コアへ増加しました。

追加されるサーバは、AMDの最新型CPU（AMD EPYC
Rome）を搭載しており、スパコンシステム一般解析区画のThin計算ノードほぼ全て（epyc.qノード全体並びにGPUノードを除くlogin.qノード）がこれに入れ替わります。

これによりコア当たりの浮動小数点演算性能が倍増します（16GFLOPS/core →
32GFLOPS/core）。

 

入れ替え前後におけるThin計算ノードの詳細情報は以下の通りです。

</div>

<div>

 

</div>

<div>

<table style="width: 956px;" data-border="1">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>計算ノード</strong></p>
<p><strong>プロセッサ名</strong></p></th>
<th><h4 id="変更前"><strong>変更前</strong></h4>
<p><strong>Thin Type 1</strong></p>
<p><strong>AMD EPYC7501</strong></p></th>
<th><h4 id="変更後"><strong>変更後</strong></h4>
<p><strong>Thin Type 1<br />
</strong></p>
<p><strong>AMD EPYC7702<br />
</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>コードネーム</strong></td>
<td> Naples</td>
<td>Rome</td>
</tr>
<tr class="even">
<td><strong>リリース時期</strong></td>
<td>2017年第2四半期　　　</td>
<td>2019年第2四半期　　　</td>
</tr>
<tr class="odd">
<td><strong>コア数</strong></td>
<td>32（ノード当たり64コア）</td>
<td>64（ノード当たり128コア）</td>
</tr>
<tr class="even">
<td><strong>スレッド数</strong></td>
<td>64</td>
<td>128</td>
</tr>
<tr class="odd">
<td><strong>クロックスピード</strong></td>
<td>2.0GHz</td>
<td>2.0GHz</td>
</tr>
<tr class="even">
<td><strong>理論演算性能(CPU当たり)</strong></td>
<td>512GFLOPS</td>
<td>2048GFLOPS</td>
</tr>
<tr class="odd">
<td><strong>boost最大周波数</strong></td>
<td>3GHz</td>
<td>3.35GHz</td>
</tr>
<tr class="even">
<td><strong>Cache</strong></td>
<td>64MB</td>
<td>256MB</td>
</tr>
<tr class="odd">
<td><strong>台数内訳</strong></td>
<td>epyc.q 45台、login.q 6台</td>
<td>epyc.q 25台、login.q 3台</td>
</tr>
</tbody>
</table>

 

</div>

 

### ログインアカウントの年度末更新について

[ログインアカウント年度末更新・停止申請](https://sc2.ddbj.nig.ac.jp/index.php/ja-application-continue)

  

[ &gt;&gt;
その他の新着情報](https://sc.ddbj.nig.ac.jp/ja/operation/news)

------------------------------------------------------------------------

メンテナンス情報
----------------

2020.07.01

今年度の定期メンテナンスは11月頃(遺伝研法廷停電の日程による）、3月末(ストレージ増設)の2回を予定しています。 

<div id="content-core" class="section"
style="box-sizing: border-box; color: #4d4d4d; display: block; font-family: &amp;quot; roboto&amp;quot;,&amp;quot;helvetica neue&amp;quot;,helvetica,arial,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">

<div id="parent-fieldname-text" style="box-sizing: border-box;">

 

</div>

</div>

<div id="content-core" class="section">

<div id="parent-fieldname-text">

 

</div>

</div>

 

[&gt;&gt;
その他のメンテナンス情報 ](https://sc.ddbj.nig.ac.jp/ja/operation/maintenance)

 

------------------------------------------------------------------------

謝辞について
------------

遺伝研スーパーコンピュータシステムの活動は皆様の謝辞で評価されています。当スーパーコンピュータシステムを利用した論文が採択された際には以下の記載例を参考に謝辞への記載をお願いします。

記載例  
==============================================  
　　＜謝辞　英語＞  
　　Computations were partially performed on the NIG supercomputer  
　　at ROIS National Institute of Genetics.  
==============================================  
　　＜謝辞　日本語＞  
　　本研究は、情報・システム研究機構 国立遺伝学研究所が  
　　有する遺伝研スーパーコンピュータシステムを利用しました。  
================================================

その他
------

[サイトポリシーと個人情報の取り扱いについて](https://sc.ddbj.nig.ac.jp/ja/guide/site-policy)

 

 

</div>

</div>

<div id="viewlet-below-content-body" class="section">

<div class="visualClear">

</div>

<div class="documentActions">

</div>

</div>

</div>

</div>

<div class="col-xs-12 col-sm-12">

<div id="viewlet-below-content">

</div>

</div>

</div>
