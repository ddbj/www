---
layout: indexed_content
title: DDBJ の塩基配列解析ツールについて

category: activities
lang: ja
related_pages:
  - title: DDBJ スタッフの論文 (1996-2008)
    url: /activities/past-papers.html
  - title: DDBJ スタッフの講演発表（2001-2006）
    url: /activities/past-presentations.html
  - title: 相同性検索プログラムBLASTの内部構造
    url: /activities/blast-doc.html
  - title: DDBJ アノテータの業務紹介
    url: /activities/curators.html
  - title: 「ユーザーの皆様へ，お願いです！」
    url: /activities/request.html
  - title: DDBJ での特許関連配列データの公開業務の紹介
    url: /activities/patent.html
  - title: DDBJ スタッフコラム
    url: /activities/staff-column.html
  - title: 遺伝子とゲノム
    url: /activities/gene-genome.html
  - title: 進化ゲノム学とは
    url: /activities/introevog.html
  - title: FASTAとBLASTについて
    url: /activities/homology-doc.html
  - title: DDBJ Mail Magazine
    url: /subscribe-ddbj.html
  - title: DDBJ データ解析チャレンジ
    url: /activities/training/2016-06-27.html
---

DDBJ の塩基配列解析ツール「DDBJ Read Annotation Pipeline」ついて，「DDBJ Read Annotation Pipeline」開発担当者 が DDBJ Mail Magazine に連載したコラムをまとめました。

連載期間：No.64（2011年9月29日発行），No.65（2011年10月27日発行）※最新の情報とは内容が異なる場合がありますのでご注意下さい。

## DDBJ の塩基配列解析ツールについて(前編) <a name="1"></a>

{:.text-align-end}
国立遺伝学研究所　大量遺伝情報研究室　長崎英樹

近年登場した高速シーケンサから文字通り桁違いの塩基配列情報が生成されています。費用や時間の節約と引き換えに，その膨大な配列情報の解析には大量のデータ処理が可能な計算機インフラやそれらを操作するための技能が必要となり多くの研究者を悩ませています。  
DDBJ では高速シーケンサ由来の大量配列データを取り扱う為に，クラウドコンピューティングを基盤とした塩基配列解析ツール「DDBJ Read Annotation Pipeline (以下DDBJ パイプライン)」を構築して広くユーザの方々に使ってもらおうとしています。クラウドコンピューティングとは大規模なデータ解析をインターネット越しに行う新しい計算機技術です。

DDBJ パイプラインは，[http://p.ddbj.nig.ac.jp/](https://p.ddbj.nig.ac.jp/pipeline/Login.do) <span></span>よりアクセスできます(図1)。トップページから取得したユーザアカウントか，DDBJ が公開している高速シーケンサの出力データベース [DDBJ
Sequence Read Archive (DRA)](/dra/index.html) のアカウントで利用可能となります。DDBJ パイプラインは，参照ゲノム配列に対するマッピングまたはde novo アセンブリを行なう「基礎処理部」とSNP 検出や発現解析等の高度な解析を行う「高次処理部」から構成されています。基礎処理部は公開済みで，高次処理部は試験運用中です。

{::nomarkdown}
{% include image.html url="ddbj/column_19.jpg" caption="図1：DDBJ パイプライン トップページ([http://p.ddbj.nig.ac.jp/])" %}
{:/}

## DDBJ の塩基配列解析ツールについて（後編） <a name="2"></a>

{:.text-align-end}
国立遺伝学研究所　大量遺伝情報研究室　長崎英樹

前回DDBJ パイプラインの概要とパイプラインが参照ゲノム配列に対するマッピングまたはde novo アセンブリを行なう基礎処理部とSNP 検出や発現解析等の高度な解析を行う高次処理部で構成されていることについて触れましたが，今回はその内容についてお話しさせていただきます。

1. 基礎処理部  
: 新型シーケンサ配列の研究で一般的に利用されているBWA をはじめとする解析ツールを実装しています(表1)。2011年7月現在で実装している解析ツールの詳細な解説は 「実験医学増刊 Vol.29 No.15 使えるデータベース・ウェブツール (ISBN 978-4-7581-0317-6)」 にまとめてありますので併せてご覧ください。
: 解析の処理ステップはパイプライン側で設定してあり，マッピングのミスマッチ率設定などのオプションはユーザが画面上で入力します。DDBJ パイプラインの特徴として，DDBJ への配列登録支援機能，マッピング結果等の統計量計算機能，公開されているDRA/ERA/SRA のアクセッション番号を入力すると，DRA のFTP サーバからクエリ配列用に公開配列を取得する配列取得機能があります。

2. 高次処理部  
: ゲノム配列データ解析用web アプリケーションであるGalaxy のインターフェイスを利用しており，基礎解析部で生成した結果ファイルを基にSNP 検出や発現，クロマチン免疫沈降シーケンス (ChIP-Seq) 解析を行います。また，de novo アセンブリで作成したコンティグ中の遺伝子構造予測にも最近対応させています(図2)。
: DDBJ パイプラインには現在，基礎マッピング処理に分散解析サーバ10～33台，高次処理に同3台，基礎アセンブリ処理に250GBメモリの計算機を，クラウド資源として割り当てています。
: DDBJ におきましては，新型シーケンサ配列，解析した結果をDDBJ を通して登録，公開していただくことを推奨しております。DDBJ ではオンラインでの登録で使用するツールも準備しており，その解説についてはまたの機会にお話いたします。

| 種類              | ツール名                                              | 備考                                                                              |
| --------------- | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| マッピング           | BLAT                                              | 発現データはイントロンを想定したギャップを考慮したマッピングが可能                                               |
|                 | MAQ                                               | 高速シークエンサ登場初期にショートリードに対応。開発はBWA に引き継がれる                                          |
|                 | BWA                                               | MAQ より速く，より長いリードに対応(Roche 社のTitanium のリードもオプションで対応)                             |
|                 | SOAP2                                             | メモリ消費量少なく，より高速。精度はBWA より弱冠落ちる                                                   |
|                 | Bowtie                                            | ギャップは考慮しないが処理は速い                                                                |
|                 | TopHat                                            | RNA-Seq のリードを内部でBowtie を利用してマッピング。スプライスジャンクションを特定する                             |
|                 | Cufflinks                                         | マッピングされたRNA-Seq をアセンブルして発現量を正規化                                                 |
|                 | SAMtools                                          | 共通フォーマットに変換されたマッピング結果を解析するためのソフトウェアパッケージ                                        |
| *de novo* アセンブル | SOAPdenovo                                        | ヒト，パンダ等大型ゲノムのアセンブルで使用された。メモリ消費は多めだが，高速                                          |
|                 | ABySS                                             | 並列処理に対応したアセンブラ。アセンブルのアルゴリズムは基本的にSOAPdenovo と同じ(de bruijn graph)                 |
|                 | Edena                                             | 高速シークエンサ登場初期に開発されたアセンブラ                                                         |
|                 | SOLiD<sup>TM</sup> System de novo Accessory Tools | 高速シークエンサSOLiD のデータ解析用パイプライン。アセンブルプログラムVelvetとDNA -アミノ酸配列アライメントプログラムMUMmer を実行する |
| WEB インターフェイス    | Galaxy                                            | 解析ツール，実行しているジョブを統合管理する。DDBJ パイプラインでは高次解析で使用                                     |

{: .tablecaption}
表1：DDBJ パイプラインで稼働しているツール

{::nomarkdown}
{% include image.html url="ddbj/mag65-pipeline2.2.jpg" caption="図2：高次処理部 de novo アセンブルによるコンティグ解析画面" class="w600" %}
{:/}

-----

筆者が執筆者の一人でもあります [羊土社](https://www.yodosha.co.jp/index.html) から出版の [「使えるデータベース・ウェブツール](https://www.yodosha.co.jp/jikkenigaku/book/9784758103176/index.html)」 も併せてご覧下さい。

また，2011年6月30日に講師を務めました「第24回 DDBJing 講習会 in 東京」での[講義資料](/activities/index.html) もご参照下さい。
