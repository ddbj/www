---
layout: indexed_content
title: How to update our sequence?
category: faq
db:
  - ddbj
tags: 
  - Update
date: 2014-06-10T10:09:43
lang: en
---

## How to update our sequence?

<p>Please send your request from <a href="/contact-ddbj-e.html#to-ddbj">contact form</a> with the following contents in clear English.</p>
<ul>
  <li>Accession numbers:</li>
  <li>The modified part:</li>
  <li>Total base count:</li>
  <li>Other modified feature:</li>
  <li>Updated sequence in full length: Please use the following format.</li>
</ul>
<pre class="code"><code>&gt;AB*****1<br>aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt<br>ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc<br>//<br>&gt;AB*****2<br>aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt<br>ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc<br>aaaaaaaaaat<br>//</code></pre>
<ul>
  <li>Header line; starts with "&gt;", followed by the accession number at the head of each sequence. </li>
  <li>Sequence; each line must be 60 letters or less. </li>
  <li>End line; end flag, "//", must be at the end of each sequence. </li>
</ul>