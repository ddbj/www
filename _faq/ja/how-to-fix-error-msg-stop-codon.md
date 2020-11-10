---
layout: indexed_content
title: '"Stop codon ‘*’ is found in the range." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T16:24:59
lang: ja
---

## "Stop codon ‘*’ is found in the range." というエラーが表示されました

<p>一般的な対応方法については <a href="/ddbj/cds.html#stop">途中に出現する終止コドンへの対応</a> をご確認ください。<br><a href="/ddbj/cds.html">タンパク質コード配列; CDS feature について</a> も ぜひ ご覧ください。<br>以下では代表的な事例について説明しています。
  <!-- Nucleotide Sequence Submission System -->
</p>
<p><strong>1.</strong> CDS の読み枠 (フレーム) を示す /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a> は正しく記載されているでしょうか。<br> 1, 2, 3 から適切な読み枠を選択してください。</p>
<dl><dt>参考:</dt>
  <dd><a href="/ddbj/cds.html#frame" title="/sub/cds-j.html#frame">codon_start qualifier による翻訳開始の位置補正</a></dd>
  <dd><a href="/faq/ja/how-to-fix-error-msg-first-codon.html">“First codon [***] is not a start codon.” / “Final codon [***] is not a stop codon.” というエラーが表示されました</a></dd>
  <dd><a href="/faq/ja/how-to-fix-error-msg-codon-start.html">“Value of [ codon_start ] is not 1, but [###..###] is 5′ complete type.” というエラーが表示されました</a></dd>
</dl>
<p><strong>2.</strong> <a href="/ddbj/geneticcode-e.html">genetic code</a> が /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a> に正しく記載されているでしょうか。<br>下記をご参照の上、genetic code を適切に設定してください。</p>
<dl><dt>参考:</dt>
  <dd><a href="/ddbj/geneticcode-e.html">The Genetic Codes</a></dd>
  <dd><a href="/ddbj/qualifiers.html#transl_table">/transl_table qualifier について</a></dd>
  <dd><a href="/faq/ja/how-to-fix-error-msg-transl-table.html">“Invalid value [***] for [transl_table] qualifier.” というエラーが表示されました</a></dd>
</dl>
<p><strong>3.</strong> フレームシフトやナンセンス変異などで、stop codon が実際に生じているでしょうか。<br><strong>3-1.</strong> pseudogene の場合<br>CDS 横の "Select Qualifier" から <a href="/ddbj/qualifiers.html#pseudogene">/pseudogene</a> を追加してください。/pseudogene には <a href="/ddbj/pseudogene-e.html">規定値</a> でタイプを指定する必要があります。<br>詳細は <a href="/ddbj/cds.html#stop_b">b) pseudogene と見做される場合</a> をご参照ください。</p>
<p><strong>3-2.</strong> pseudogene とは断言できない場合、IgG などの獲得免疫関連で多様性が生じる過程、その他理由が不明で stop codon が生じている場合<br>CDS feature ではなく、misc_feature を用いて記載してください。<br>詳細は <a href="/ddbj/cds.html#stop_a">a) nonsense mutation、frame shift などと推定されるが理由不明、または、IgG などの獲得免疫関連で多様性が生じる過程の場合</a> をご参照ください。</p>
<p><strong>その他</strong>、<a href="/ddbj/cds.html#stop_d">ribosomal slippage</a>、<a href="/ddbj/cds.html#stop_e">RNA editing</a>、<a href="/ddbj/cds.html#stop_f">例外的なアミノ酸翻訳</a>、<a href="/ddbj/cds.html#stop_g">IS や Tn などの挿入</a>などでも、このエラーメッセージが出力されることがあります。</p>
