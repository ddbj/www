---
layout: simple
title: I can not scp transfer my files.
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-11-19T14:07:21
lang: en
---



<p>First, confirm the following basic points.</p>
<div class="sub_index">
  <ul class="disc">
    <li>Authentification is by using SSH key not by password.</li>
    <li>A private key is pair of a public key registered in a D-way submission account.</li>
    <li>A private key file has read permission.</li>
    <li>A private key file permission is set as others cannot access. For example, rw-------.</li>
    <li>A passphrase for private key is correctly entered.</li>
  </ul>
</div>
<p>When transferring data files by using a private key generated in the other operating system, please check format of a private key. <a href="/account-e.html#convert-private-key">Convert private key</a></p>
<p><span class="bold">In Unix/Mac OS X</span>: Convert a key in the Windows PuTTY file format into the OpenSSH.</p>
<p><span class="bold">In Windows WinSCP:</span> Convert a key in the Unix/Mac OS X OpenSSH file format into the Windows PuTTY format.</p>
<p>When these are correct, because we do not support technical details regarding use of third-party softwares, please refer to websites of softwares or confirm your system administrators whether scp (port 22) is allowed or not.</p>
