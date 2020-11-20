---
layout: simple
title: My job generated an error
category: faq
db:
  - pipeline
date: 2014-09-17T15:28:09
lang: en
---

## My job generated an error

<p>( Pattern 1 )<br><span style="font-size: 15px; color:rgb(0,0,255)">If on the Status screen, the Status shows as “error” and the Start time as “not displayed”.</span></p>
<ul>
  <li>This error means that something has caused an inability to load he specified query files.</li>
  <li>Please confirm that the specified query files are text files. (There are no particular specified filename extensions.)</li>
  <li>Then confirm that there are no problems with the format of FASTA/FASTQ etc.</li>
  <li>Please note that if there are blank lines (as final lines etc.) included, an error will be generated.</li>
  <li>Please confirm that the filenames are in single-byte Roman letters (symbols). (Double-byte characters, in Japanese etc., are not handled)</li>
  <li>Please check that there are no spaces in the filenames.</li>
  <li>If you have selected Assembly→BLAT(mapping), and have not been able to obtain the Assembly results file, on BLAT(mapping) this status will occur.</li>
</ul><br><a href="{{ site.baseurl }}/assets/images/news/FAQ_2_1e_1.png"><img src="{{ site.baseurl }}/assets/images/news/FAQ_2_1e_1.png" alt="FAQ_2_1e_1" style="width: 630px;"></a><br>
<p>( Pattern 2 )<br><span style="font-size: 15px; color:rgb(0,0,255)">If on the Status screen, the Status shows as “error” and the Start time as “displayed”.</span></p>
<ul>
  <li>Confirm that there are no problems with the format of FASTA/FASTQ etc. for the specified query files. </li>
  <li>Please check the logical input value in Options etc.</li>
  <li>From the Selecting Tools screen, you can refer to each Tool’s site, or Help. ※ Depending on the tool selected, there may be a maximum line length restriction.</li>
  <li>On the Detail view screen, there are cases where the cause can be specified from the Command being run and the Log1 (standard output) and Log 2 (standard error); please check this.</li>
</ul><br>
<p>( Pattern 3 )<br><span style="font-size: 15px; color:rgb(0,0,255)">If on the Status screen, the Status shows as “complete” and there is an error shown on the Detail view screen.</span></p>
<ul>
  <li>Please check the logical input value in Options etc.</li>
  <li>From the Selecting Tools screen, you can refer to each Tool’s site, or Help. ※ Depending on the tool selected, there may be a maximum line length restriction.</li>
  <li>On the Detail view screen, there are cases where the cause can be specified from the Command being run and the Log1 (standard output) and Log 2 (standard error); please check this.</li>
</ul><br><a href="{{ site.baseurl }}/assets/images/news/FAQ_1_3e_1.png"><img src="{{ site.baseurl }}/assets/images/news/FAQ_1_3e_1.png" alt="FAQ_1_3e_1" style="width: 630px;"></a><br>
<p>If you cannot specify the cause, or if you would like to make a comment, please kindly contact support(pipeline_dev@ddbj.nig.ac.jp).</p>
