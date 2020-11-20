---
layout: simple
title: ジョブがエラーになる
category: faq
db:
  - pipeline
date: 2014-05-30T17:14:31
lang: ja
---

## ジョブがエラーになる

<p>
  &lt;パターン1&gt;<br><span style="font-size: 15px; color:rgb(0,0,255)">Status画面で、Statusが「error」でStart timeが「表示されていない」場合</span>
</p>
<ul>
  <li>指定したクエリーファイルが、何らかの原因で読み込めなかったことによるエラーです。</li>
  <li>指定したクエリーファイルが、<span class="red">テキストファイル</span>であることを、ご確認ください。(拡張子の指定は特にありません。)</li>
  <li>また、FASTA/FASTQなどのフォーマットに問題がないか、ご確認ください。</li>
  <li>空行(最終行などに)が含まれていると、エラーになりますので、ご注意ください。</li>
  <li>ファイル名が半角の英数(記号)であることを、ご確認ください。(日本語などの全角文字には対応していません。)</li>
  <li>ファイル名には、<span class="red">スペースを含めないでください</span>。</li>
  <li><span class="red">Assembly→BLAT(mapping)を選択された場合</span>で、Assembly結果ファイルが得られなかった場合は、BLAT(mapping)でこの状態になります。</li>
</ul><br><a href="{{ site.baseurl }}/assets/images/news/FAQ_2_1.png"><img src="{{ site.baseurl }}/assets/images/news/FAQ_2_1.png" class="alignnone" style="width: 630px;"></a><br>
<p>
  &lt;パターン2&gt;<br><span style="font-size: 15px; color:rgb(0,0,255)">Status画面で、Statusが「error」でStart timeが「表示されている」場合</span>
</p>
<ul>
  <li>指定したクエリーファイルの、FASTA/FASTQなどのフォーマットに問題がないか、ご確認ください。</li>
  <li>オプションなどの入力値を、ご確認ください。</li>
  <li>Selecting Tools画面から、各ToolのサイトやHelpをご確認いただけます。※選択されたツールによっては、列の長さに上限があります</li>
  <li>Detail view画面で、実行されたCommandと、Log1(標準出力)とLog2(標準エラー)から、原因を特定できる場合もありますので、ご確認ください。</li>
</ul><br>
<p>
  &lt;パターン3&gt;<br><span style="font-size: 15px; color:rgb(0,0,255)">Status画面で、Statusが「complete」だが、Detail view画面で、エラーが出ている場合</span></p>
<ul>
  <li>オプションなどの入力値を、ご確認ください。</li>
  <li>Selecting Tools画面から、各ToolのサイトやHelpをご確認いただけます。※選択されたツールによっては、列の長さに上限があります。</li>
  <li>Detail view画面で、実行されたCommandと、Log1(標準出力)とLog2(標準エラー)から、原因を特定できる場合もありますので、ご確認ください。</li>
</ul><br><a href="{{ site.baseurl }}/assets/images/news/FAQ_1_3.png"><img src="{{ site.baseurl }}/assets/images/news/FAQ_1_3.png" class="alignnone" style="width: 630px;"></a><br>
<p>原因が特定できない場合や、お気づきの点などありましたら、お手数ですが<a href="https://sites.google.com/a/g.nig.ac.jp/pipeline_help/home/support" style="text-decoration:underline;background-color:initial;padding-top:2px;padding-right:2px;padding-bottom:2px;padding-left:2px"><span style="font-color: #000000;">support</span></a>までご連絡ください。</p>