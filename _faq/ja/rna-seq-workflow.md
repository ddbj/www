---
layout: simple
title: RNA-seqワークフローを使いたいのですが、どうしたらいいですか？
category: faq
db:
  - pipeline
date: 2017-04-27T12:00:32
lang: ja
---

## RNA-seqワークフローを使いたいのですが、どうしたらいいですか？

<div>RNA-seq定量化は、DDBJ Pipelineでは現在サポートを終了しております。（DNApod_Pitagora-Galaxyは、SNP注釈用です)</div>
<div>Pipeline後続RNA-seq定量化の選択肢は、下記があります。</div>
<div>①<a href="http://www.pitagora-galaxy.org/">pitagora-galaxy.org</a>を使用。</div>
<div>②手元PCでR bioconductor等プログラミング</div>
<div>　(＃ユーザの方でedgeRをpipeline後に使われてるケースがあります)</div>
<div>Pitagora-galaxy.orgではクラウド型テストサイトを、登録済ユーザで10GB制限で使える様です(HPより)。</div>
<div>データ読込は、Pipeline結果bamファイルをダウンロードしてPitagora-galaxyにアップロードして下さい。</div>