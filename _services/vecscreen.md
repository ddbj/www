---
layout: indexed_content
title: VecScreen
category: services
lang: ja
related_pages:
  - title: ARSA ヘルプ
    url: /services/arsa.html
  - title: BLAST ヘルプ
    url: /services/blast.html
  - title: getentry ヘルプ
    url: /services/getentry.html
  - title: ClustalW ヘルプ
    url: /services/clustalw.html
  - title: TXSearch ヘルプ
    url: /services/txsearch.html
  - title: 過去のサービス
    url: /services/past-services.html
  - title: 関連論文
    url: /services/references.html
  - title: WABI (Web API for Biology)
    url: /services/wabi.html
  - title: WABI BLAST ヘルプ
    url: /services/wabi-blast.html
  - title: WABI ClustalW ヘルプ
    url: /services/wabi-clustalw.html
  - title: WABI VecScreen ヘルプ
    url: /services/wabi-vecscreen.html
  - title: WABI MAFFT ヘルプ
    url: /services/wabi-mafft.html
  - title: Pipeline ヘルプ
    url: /services/pipeline.html
---

## VecScreenとは  {#VecScreenとは}

VecScreenは塩基配列中に含まれるベクター，リンカー，アダプター，プライマー領域などの領域 (本文ではベクターコンタミと表記します) をベクター配列データベースとのblast検索により検出するツールです。プログラム本体は[NCBIのvecscreenプログラム](//www.ncbi.nlm.nih.gov/tools/vecscreen/univec/)を使用しています。

## 使用可能なブラウザについて  {#browser}

Internet Explorer 8以上，および最新版のFirefox，Chrome，Safari で動作確認を行っています。旧バージョンのブラウザでは動作に支障が生じる可能性がございますのでご注意ください。

## 使い方   {#usage}

<img src="/assets/images/help/VecScreen-Usage.png" alt="" title="使い方" class="">

### Query  {#query}

* FASTA 形式で検索配列を入力して下さい。クエリー配列を直接テキストボックスに入力するか，File Uploadにクエリー配列のファイルを指定してください。配列中に数字，スペースが入っていても問題ありません。
* 検索する配列が複数の場合は，各配列を区別するために配列名が必要です。先頭に「>」をつけた配列名の行を各配列の前においてください (multi FASTA 形式)。
* 検索する配列が一つの場合は配列名は必要ありませんが，配列名をつける場合は先頭に「>」をつけた配列名の行を配列の前において下さい。

```
FASTA 形式

>my query sequence 1
caccctctcttcactggaaaggacaccatgagcacggaaagcatgatccaggacgtggaa
gctggccgaggaggcgctccccaggaagacagcagggccccagggctccaggcggtgctg
gttcctcagcctcttctccttcctgctcgtggcaggcgccgccac

複数配列の入力例 (multi FASTA 形式)

>my query sequence 1
caccctctcttcactggaaaggacaccatgagcacggaaagcatgatccaggacgtggaa
gctggccgaggaggcgctccccaggaagacagcagggccccagggctccaggcggtgctg
gttcctcagcctcttctccttcctgctcgtggcaggcgccgccac
>my query sequence 2
ggccagggcacccagtctgagaacagctgcacccgcttcccaggcaacctgcctcacatg
cttcgagacctccgagatgccttcagcagagtgaagactttctttcaaatgaaggatcag
ctggacaacatattgttaaaggagtccttgctggaggactttaag
>my query sequence 3
atgggtctcacctcccaactgcttccccctctgttcttcctgctagcatgtgccggcaac
tttgcccacggacacaactgccatatcgccttacgggagatcatcgaaactctgaacagc
ctcacagagcagaagactctgtgcaccaagttgaccataacggac
```


<div class="attention" markdown="1">
配列サイズが巨大な場合，配列数が多い場合など，以下のような理由で結果を正常に取得出来ない場合があります。

* 結果が巨大になりブラウザで表示出来ない
* メモリ枯渇で異常終了となる
* 検索時間が長くなり過ぎてタイムアウトする

そのような場合は，配列数を少なくしたり配列を短くするなどの処理を行ってから再実行してください。
</div>

### WWW or Email  {#www}

WWWの場合，結果がその場でスクリーン上に表示されます。
結果をEmailで受け取りたい場合はE-mailを選択しEmailアドレスを間違えないように入力してください。
初期値はWWWがセットされています。

### Databases  {#database}

ベクターデータベースを選択します。UniVecかUniVec_Coreのどちらかを選択できます。初期値はUniVecがセットされています。
本システムでは[https://ftp.ncbi.nih.gov/pub/UniVec/](https://ftp.ncbi.nih.gov/pub/UniVec/)で取得できるものと同一なデータベースを使用しています。


UniVec
:   UniVecは多くのベクター，リンカー，アダプター，プライマー配列で構成されるnon-redundantなベクターデータベースです。UniVecでは利用者自身のマニュアルチェックにより，結果からfalse positiveなhitの除去処理が必要になります。false positive hitを許容した上でベクターコンタミ領域検出における最大hit数を得たい場合に使用します。

UniVec_Core
:   UniVec_Core は，UniVecの一部で構成されるデータベースです。利用者自身が結果をレビューすることなしに自動処理でベクターコンタミを検出するようにデザインされていて，false positiveの混入を最小限にしたい場合に使用します。

UniVec_Coreは，バクテリア，ファージ，酵母，合成配列などからのoligonucleotideとベクター配列のみを含んでいます。mammalian由来の配列を含むようなベクターはUniVec_Coreには含まれていません。したがってUniVec＿Coreを使用した場合はUniVecでは検出できるようなベクターコンタミを見落とすことがあります。

### Output format  {#format}

以下の4つが選択可能です。デフォルトは "HTML format, with alignment" がセットされています。

HTML format, with alignment
:   結果がHTML形式で得られ，query配列上のベクターコンタミ領域を示す図，結果のサマリ，アラインメント結果が表示されます([例](/assets/images/help/VecScreen-HTMLwAlign.png))。

HTML format, no alignment
:   結果がHTML形式で得られ，query配列上のベクターコンタミ領域を示す図，結果のサマリが表示されます([例](/assets/images/help/VecScreen-HTMLwoAlign.png))。

Text list, with alignment
:   結果がテキスト形式で得られ，結果のサマリ，アラインメント結果が表示されます([例](/assets/images/help/VecScreen-TEXTwAlign.png))。

Text list, no alignment
:   結果がテキスト形式で得られ，結果のサマリのみが表示されます([例](/assets/images/help/VecScreen-TEXTwoAlign.png))。

### パラメーター設定はない  {#パラメーター設定はない}

本システムには相同性検索のためのパラメーター設定はありません。プログラム本体はNCBIから取得可能なvecscreenプログラムを実行しています。vecscreenについては，[//www.ncbi.nlm.nih.gov/tools/vecscreen/about](//www.ncbi.nlm.nih.gov/tools/vecscreen/about/),[//www.ncbi.nlm.nih.gov/tools/vecscreen/univec/](//www.ncbi.nlm.nih.gov/tools/vecscreen/univec/)をご覧ください。

### VecScreenの実行  {#execute}

Send to vecscreenをクリックすると実行します。Clearをクリックするとクエリ―配列が消去されます。

### 結果表示  {#result}

スコアおよび期待値に基づきベクターコンタミ領域である可能性が高い順に，**Strong Match**，**Moderate Match**，**Weak Match**のカテゴリーがつけられて結果表示されます。２つのベクターhit領域で挟まれる50-bp未満の領域や，ベクターhit領域からクエリー配列末端までが50-bp未満の場合にも**Suspect Origin**としてベクターコンタミの可能性が提示されます。
カテゴリーの詳細については[//www.ncbi.nlm.nih.gov/tools/vecscreen/about/#Categories](//www.ncbi.nlm.nih.gov/tools/vecscreen/about/#Categories)をご覧ください。

## ベクターコンタミ領域の判定について  {#ベクターコンタミ領域の判定について}

もし自動的に行うとすればたいていの**Strong match**と**Moderate match**で示される領域については，ベクターベクターコンタミであると判断できます。
**Weak match**についてはベクターコンタミの可能性を示唆し，**Suspect origin**についても同様にベクターコンタミの可能性を示すものですが，いずれも自動的にベクターコンタミとは言い切ることができません。

厳密にはクローニング実験に実際に用いられたベクター，アダプター，リンカー，プライマー各配列とクローニング手法を考慮した上で，VecScreenの結果をもとにベクターコンタミの正確な位置が判断されるべきです。

VecScreen結果の判定については次のリンク先もご参照ください。
[//www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation/](//www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation/)

## 結果が正しく得られない場合の注意点

VecScreenはベクターコンタミをすべて検出できる完璧なツールではありません。当然，UniVecに含まれないようなベクター，アダプター，リンカー，プライマー配列を含む塩基配列をクエリーに用いた場合には検出できないことや，類似した配列が検出されたとしてもベクターコンタミの領域が小さく予測されたり，より低いカテゴリーとして表示されることになります。ベクターコンタミ領域のトリミングについては，クローニング時に実際に使用されたforeign DNAやクローニングmethodを考慮した上で行われる必要があります。

## 例外に関して  {#例外に関して}

UniVecデータベースの構成上，以下の配列をクエリーに用いた場合もベクターコンタミとして検出されることになりますのでご承知おきください。詳しくは，[//www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation/#Exceptions](//www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation/#Exceptions)をご覧ください。


<div class="attention" markdown="1">
Virus genomes, Yeast and bacterial biosynthetic genes, Transcriptional signals from bacteria, yeast, a few mammals, and other model organisms, Bacterial and yeast repressor and activator genes, Bacterial genes mediating antibiotic resistance, Bacterial plasmid genes and replication origins, Yeast replication elements, Bacteriophage genomes, Transposons and Insertion Sequences, Other specialized elements from a variety of sources (including a few from humans)
</div>

## Request IDについて  {#requestid}

{: .float-left }
検索実行後の画面には Request ID が表示されます。同じ番号が検索結果の最上部にも表示されます。このRequest IDはResult ViewerもしくはDDBJへの問い合わせの際に必要です。この番号を控えておけばブラウザを閉じてしまっても期限内であればRequest ID から結果を閲覧することができます(右図)。

{: .float-right }
<img src="/assets/images/help/VecScreen-RequestID.png" alt="" title="VecScreen-RequestID" class="">

{: .float-release }
## Result viewer  {#resultviewer}

{: .float-left }
Request ID(上述)から検索結果を取得することができます。画面左側のメニューから"Result viewer"をクリックしてください。Result viewer画面に切り替わるので,Request IDを入力後"display"をクリックしてください(右図)。

{: .float-right }
<img src="/assets/images/help/VecScreen-ResultViewer.png" alt="" title="VecScreen-ResultViewer" class="">

{: .float-release }
## 検索結果を閲覧可能な期間  {#検索結果を閲覧可能な期間}

実行後７日間で結果が消去されます。
