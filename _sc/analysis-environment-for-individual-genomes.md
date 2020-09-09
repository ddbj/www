---
layout: indexed_content
title: 遺伝研スーパーコンピュータ個人ゲノム解析環境の利用方法 
category: sc
lang: ja
---

<div class="col-xs-12 col-sm-12">

<div id="viewlet-above-content-title">

<span id="social-tags-body" style="display: none" itemscope=""
itemtype="http://schema.org/WebPage"> <span
itemprop="name">遺伝研スーパーコンピュータ個人ゲノム解析環境の利用方法</span>
<span itemprop="description"></span> <span
itemprop="url">https://sc.ddbj.nig.ac.jp/ja/guide/analysis-environment-for-individual-genomes/guide</span>
<span
itemprop="image">https://sc.ddbj.nig.ac.jp/@@site-logo/sc\_logo\_20180216a.png</span>
</span>

</div>

遺伝研スーパーコンピュータ個人ゲノム解析環境の利用方法
======================================================

<div id="viewlet-below-content-title">

</div>

<div id="viewlet-above-content-body" class="section">

<div id="document-toc" class="section portlet toc" role="section"
style="display: none">

コンテンツ

<div class="section portletContent">

<div class="portletItem">

</div>

</div>

</div>

</div>

<div id="content-core" class="section active">

<div id="parent-fieldname-text" class="pat-autotoc">

<a href="#autotoc-item-autotoc-0" id="autotoc-item-autotoc-0" class="autotoc-level-1 active">利用資格</a><a href="#autotoc-item-autotoc-1" id="autotoc-item-autotoc-1" class="autotoc-level-1">利用方法</a><a href="#autotoc-item-autotoc-2" id="autotoc-item-autotoc-2" class="autotoc-level-2">ファイルのアップロードの方法</a><a href="#autotoc-item-autotoc-3" id="autotoc-item-autotoc-3" class="autotoc-level-2">解析システムへのログイン方法</a><a href="#autotoc-item-autotoc-4" id="autotoc-item-autotoc-4" class="autotoc-level-2">解析プログラムのインストール方法</a><a href="#autotoc-item-autotoc-5" id="autotoc-item-autotoc-5" class="autotoc-level-2">プログラムの実行方法</a><a href="#autotoc-item-autotoc-6" id="autotoc-item-autotoc-6" class="autotoc-level-2">データのダウンロードの方法</a><a href="#autotoc-item-autotoc-7" id="autotoc-item-autotoc-7" class="autotoc-level-2">データの消去について</a><a href="#autotoc-item-autotoc-8" id="autotoc-item-autotoc-8" class="autotoc-level-2">セキュリティーに関する注意事項</a>

 

利用資格
========

個人ゲノム解析システムの利用にあたりましては[遺伝研スパコン利用規程のページにある各文書](https://sc.ddbj.nig.ac.jp/ja/application/regulations)をご一読いただき、遵守していただきますようお願いいたします。

 

遺伝研スパコン個人ゲノム解析システムは以下のセキュリティーガイドラインを遵守しております。

-    [NBDCヒトデータ取扱いセキュリティガイドラインおよびNBDCヒトデータグループ共有データ取扱いセキュリティガイドライン
    チェックリスト（「機関外サーバ」運用責任者向け）](https://sc.ddbj.nig.ac.jp/ja/guide/analysis-environment-for-individual-genomes/nbdcform5_checklist_for_dbcenters-20180912_1.pdf)

 

 

利用申請は以下のページからお願いいたします。

-   <https://sc.ddbj.nig.ac.jp/ja/application/application/view>

課金サービス全般の利用方法は以下のページをご参照ください。

-   <https://sc.ddbj.nig.ac.jp/ja/guide/charged-services>  
      

 

利用方法
========

個人ゲノム解析システムは下図の構成となっています。ネットワーク接続は遺伝研スパコンファイアウォールによりホワイトリストにある特定のIPアドレスとだけ許可されています。またユーザーは検疫用ゲートウェイを介してのみユーザーの計算機と個人ゲノム解析システムとの間のデータ転送ができます。解析用クラスタ計算機内に研究グループごとの仮想マシンが作られそれを占有する形になります。

 <img src="https://sc.ddbj.nig.ac.jp/ja/image/system_new.png/@@images/2b454da0-def8-49e9-9bcd-c6dfd5596b85.png" title="system_new.png" class="image-inline" alt="system_new.png" />

 

ファイルのアップロードの方法
----------------------------

個人ゲノム解析システムでは検疫用ゲートウェイに向かってscpでファイルをアップロードしてください。

|                                                                       |
|-----------------------------------------------------------------------|
| scp  your-file.txt  your-account@qgwa.ddbj.nig.ac.jp:/home/you/Upload |

 

また、ファイルのアップロードにファイル転送ソフトAspera
Connectを使用することも可能です。Aspera
Connectを使用する場合はユーザーの申請が必要となりますので、<img src="https://sc.ddbj.nig.ac.jp/ja/image/sc-help.png/@@images/8202f858-645b-4f55-bb5e-1e79baf4d553.png" title="sc-helpdesk" class="image-inline" alt="sc-help.png" />までご申請ください。Aspera
Connectの使用方法については[システムへのファイル転送方法](https://sc.ddbj.nig.ac.jp/ja/guide/software/file-transfer "システムへのファイル転送方法")をご確認ください。***  
***

 

検疫用ゲートウェイ上へのファイルのアップロードが完了次第、アップロードファイルに対してウイルスチェックなどのテストが行われ、問題のないファイルは自動的に解析システムのストレージにコピーされます。（このコピーに関してユーザーがコマンドを実行するなどの操作は必要ありません。解析システムに直接ファイルをアップロードすることはできません。）

 

検疫用ゲートウェイのディスクサイズは110TB、解析用システムのディスクサイズは2019年現在合計5PBです。

 

検疫用ゲートウェイにアップロードされたファイルは解析システムへのデータコピー終了後約１週間以内に自動的に消去されます。ユーザー側で検疫ゲートウェイ上のファイルを明示的に消去しても構いません。(消去の際にはsrmコマンドを推奨します。OSによりコマンドラインオプションが異なることがありますので利用しているシステムのmanコマンドで利用方法を確認してください。)

<table style="height: 45px;" width="293">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>ssh your-account@qgwa.ddbj.nig.ac.jp</p>
<p>srm your_files.tar.gz</p></td>
</tr>
</tbody>
</table>

 

解析システムへのログイン方法
----------------------------

一旦、解析システムゲートウェイ(gwa)にログインし、解析システムゲートウェイ(gwa)上からご自身の解析環境(例えばA001)にログインします。

<table style="width: 412px;">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>ssh your-account@gwa.ddbj.nig.ac.jp</p>
<p>ssh your-account@A001</p></td>
</tr>
</tbody>
</table>

 

 

解析プログラムのインストール方法
--------------------------------

解析システムはシステム中にUbuntu Linux,
CentOSのリポジトリを持っているのでaptやyumはそのまま利用できます。

 

また、Singularityのリポジトリを遺伝研側で整備しており、そこで用意されているコンテナはそのまま利用できます。

 

さらに、ユーザーが解析システム内からHTTP,
HTTPSによりgithub等のインターネット上のリポジトリのファイルを取得することも可能ですので、ユーザー自身でソースファイルを取得してプログラムをコンパイルして利用することも可能です。

 

上記で対応できない場合は<img src="https://sc.ddbj.nig.ac.jp/ja/image/sc-help1.png/@@images/228c7364-a7c8-4db0-b074-66b22a7cfb52.png" title="sc-help1.png" class="image-inline" width="199" height="23" alt="sc-help1.png" />までメールで連絡してください。

 

プログラムの実行方法
--------------------

ユーザーに仮想マシンが割り当てられていますのでプログラム実行は通常のLinuxと同様の手順となります。

 

 

データのダウンロードの方法
--------------------------

解析システムからユーザーの研究室の計算機にデータをダウンロードする際には、
ユーザーの計算機と解析システムの間で直接データ転送する経路はありませんのでデータアップロードと反対の経路を使います。解析システムの$HOME/Downloadディレクトリにファイルを置いておくと、検疫ゲートウェイにファイルがコピーされますので、その後、検疫ゲートウェイからファイルを研究室にscpしてください。

|                                                                                                        |
|--------------------------------------------------------------------------------------------------------|
|  your-computer $ scp your-account@qgwa.ddbj.nig.ac.jp:/home/your-account/Download/your\_files.tar.gz . |

 

データの消去について
--------------------

前述の通り、利用前にユーザーに仮想マシンの利用計画を提出していただきます。利用計画とは例えばCPU4コア、メモリ16GB、ディスク10TBの仮想マシン３台を6ヶ月間のあとCPU12コア、メモリ48GB、ディスク10TBの仮想マシン10台を6ヶ月間、という内容となります。  
  
利用期間が終わったら仮想マシンをDDBJ側で消去します。その際にその研究グループのデータは解析システム上から無くなることになります。

ユーザー側で明示的に消去しても構いません。消去の際にはsrmコマンドを推奨します。OSによりコマンドラインオプションが異なることがありますので利用しているシステムのmanコマンドで利用方法を確認してください。

<table style="width: 415px;">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>ssh your-account@A001</p>
<p>srm –r your-directory</p></td>
</tr>
</tbody>
</table>

 

 

セキュリティーに関する注意事項
------------------------------

ユーザーの計算機は公開鍵暗号方式にてsshを用いて解析環境にログインします。ユーザーの計算機の盗難等に備えて
必ず十分な強度のパスフレーズを設定してください。

  

計算機の盗難その他セキュリティーインシデントや個人情報漏洩が疑われる場合などは速やかに<img src="https://sc.ddbj.nig.ac.jp/ja/media/image/sc-help1.png/@@images/14eaf8f8-8954-4b62-8d4c-ca37902baaed.png" title="sc-help1.png" class="image-inline" width="198" height="23" alt="sc-help1.png" />宛てに連絡してください。

 

<div id="simple-translate">

 

</div>

</div>

</div>

<div id="viewlet-below-content-body" class="section">

<div class="visualClear">

</div>

<div class="documentActions">

</div>

</div>

</div>
