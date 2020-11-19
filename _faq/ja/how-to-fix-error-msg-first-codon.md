---
layout: indexed_content
title:  '"First codon [***] is not a start codon." / "Final codon [***] is not a stop codon." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T15:51:12
lang: ja
---

## "First codon [\*\*\*] is not a start codon." / "Final codon [***] is not a stop codon." というエラーが表示されました

<p>これらの error message は <a href="/ddbj/cds.html">CDS (protein coding sequence) feature</a> のアミノ酸翻訳の結果が、5'末端 または 3'末端において適切ではなかったことを示しています。<br>当該 CDS が全長ではなく部分配列の場合、その feature location には部分配列であることを示すフラグが必要です。<br>部分配列の場合、<a href="/ddbj/location.html">location の記述法</a>に示されている記載ルールに従い、5' end not complete を示す "<strong>&lt;</strong>"、3' end not complete を示す "<strong>&gt;</strong>" のフラグを適切に加えて入力してください。<br>
  <!-- Nucleotide Sequence Submission System -->
</p>
<table class="t04">
  <caption>例: CDS が 1..295 である場合の部分配列記述</caption>
  <tbody>
    <tr>
      <th>location</th>
      <th>状況</th>
    </tr>
    <tr>
      <td> &lt;1..295</td>
      <td> 開始コドンで始まらない、かつ、終止コドンで終わる</td>
    </tr>
    <tr>
      <td>1.. &gt;295</td>
      <td>開始コドンで始まり、かつ、終止コドンで終わらない</td>
    </tr>
    <tr>
      <td> &lt;1.. &gt;295</td>
      <td>開始コドンで始まらない、かつ、終止コドンで終わらないとき</td>
    </tr>
  </tbody>
</table>
<dl><dt>参照</dt>
  <dd><a href="/faq/ja/how-to-fix-error-msg-stop-codon.html">“Stop codon ‘*’ is found in the range.” というエラーが表示されました</a></dd>
  <dd><a href="/ddbj/cds.html#frame" title="/sub/cds.html#frame">codon_start qualifier による翻訳開始の位置補正</a></dd>
</dl>
