---
layout: simple
title: How to transfer data files from the NIG supercomputer to my DRA directory?
category: faq
db:
  - dra
tags: 
  - Data transfer
date: 2014-12-12T15:22:30
lang: en
---

## How to transfer data files from the NIG supercomputer to my DRA directory?

<h4 class="bold">If the private key was generated on Unix/Mac OS X</h4>
<p>Transfer your private key to the NIG supercomputer (Linux). Next, transfer the files by executing.</p>
<pre><code>scp <span class="italic">&lt;Your Files&gt;</span> <span class="italic">&lt;D-way Login ID&gt;</span>@dradata.ddbj.nig.ac.jp:~/<span class="italic">&lt;Submission ID&gt;</span></code></pre>
<div class="sub_index">
  <ul>
    <li>&lt;Your Files&gt; Files to be transferred. <br>Ex: file1 file2 (file1 and file2), file* (all files whose filenames start with “file”)</li>
    <li>&lt;D-way Login ID&gt; D-way Login ID (ex. drauser)</li>
    <li>&lt;Submission ID&gt; Submission ID (ex. drauser-0003)</li>
  </ul>
</div>
<h4 class="bold">If the private key was generated on Windows PC</h4>
<p>After <a href="/account-e.html#convert-private-key">the conversion of the key into the OpenSSH format used in Linux</a>, transfer the private key to the supercomputer.Then, specify the private key using -i option of scp.</p>
<pre><code>scp -i <span class="italic">&lt;Private Key&gt;</span> <span class="italic">&lt;Your Files&gt;</span> <span class="italic">&lt;D-way Login ID&gt;</span>@dradata.ddbj.nig.ac.jp:~/ <span class="italic">&lt;Submission ID&gt;</span></code></pre>
<div class="sub_index">
  <ul>
    <li>&lt;Private Key&gt; The private key file path (ex. /home/mishima/id.rsa)　</li>
  </ul>
</div>
