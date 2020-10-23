---
layout: indexed_content
title: データファイルはどのように処理されますか？
category: faq
db:
  - dra
tags: 
  - シークエンスデータ
date: 2014-12-25T10:21:37
lang: ja
---

## データファイルはどのように処理されますか？

<p>アップロードされたデータファイルは Run 単位で処理されます。Run にリンクしている全てのデータファイルから <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc">SRA toolkit</a> により<a href="http://www.ncbi.nlm.nih.gov/books/NBK47539/#SRA_Overview_BK.SRA_Architecture">バイナリーの SRA ファイル</a>が作成されます。この過程でリード長やリード名の書式などが全ての配列に渡ってチェックされます。<span class="attention_text">元々のリード名は Run 単位でユニークである必要があります。</span></p>
<p>リード名は編集され，DRR アクセッション番号に連番が付された ID が自動的に挿入されます。ファイル名には DRR アクセッション番号が付与されます (<a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&amp;run=DRR000001">例: DRR000001</a>)。filetype に <a href="/dra/submission.html#File_Type">"generic_fastq"</a> を指定した場合，リード名は DRR 番号に連番が付された ID で置換されます (<a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&amp;run=DRR030615">例: DRR030615</a>)。</p>
<p class="no_bottom">リード名の例:</p>
<pre class="code"><code>@DRR000001.1 3060N:7:1:1116:340 length=36nnGATGGTAAGATAGAAGCAGTTGAAGTTTACAAACCGnn+DRR000001.1 3060N:7:1:1116:340 length=36nnIIIII%IIIIIIIIII7IHII26:C6EI)+,9,%%*nn@DRR000001.2 3060N:7:1:1114:186 length=36nnGATATTGGCCTGCAGAAGTTCTTCCTGAAAGATGATnn+DRR000001.2 3060N:7:1:1114:186 length=36nnIIIIIIIIIIIIIGI8IIDI6II;?:,+9+&gt;.A1,Inn@DRR000001.3 3060N:7:1:945:361 length=36nnGTCAGGATCGGTCTCGCCTTTTAATAGAGGGAGATAnn+DRR000001.3 3060N:7:1:945:361 length=36nnIIIIIIIIIIIIIIII=3IIII&gt;&gt;I;-52/./+.I,</code></pre>
<p>Experiment で PAIRED が指定されている場合，Run 単位でペアリードが自動的にまとめられます。</p>
<p>DRA では <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc">SRA toolkit</a> を使い SRA ファイルから汎用されている fastq ファイルを生成し，SRA ファイルとともにダウンロード提供しています。</p>
<p>ペアリードの場合二種類以上の fastq ファイルが生成されます。ペアリードはファイル名に _1 (例 DRR000001_1.fastq.bz2) と _2 (例 DRR000001_2.fastq.bz2) が付いた fastq ファイルに分けて出力されます。ペアが見付からなかったリードは _1 や _2 が付いていないファイル (例 DRR000001.fastq.bz2) にまとめられます。</p>