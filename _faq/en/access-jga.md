---
layout: indexed_content
title: I can not access by scp/ssh to the JGA server
category: faq
db:
  - jga
tags: 
  - System
date: 2020-10-15T11:19:00
lang: en
---

## I can not access by scp/ssh to the JGA server

<p>First, confirm the following basic points.</p>
<div class="sub_index">
  <ul class="disc">
    <li>Make sure your global IP address (not a private IP address) of accessing source has been added to the white list by JGA. If accessed via a proxy server, the addresses of accessing source and your machine are different. Please ask system administrator of your institution. <a href="/jga/global-ip-e.html">Manual</a></li>
    <li>Authentification is by using SSH key not by password.</li>
    <li>A private key is pair of a public key registered in a D-way account. <a href="/account-e.html#enable-dra-submission-in-account">Manual</a></li>
    <li>Make sure to specify a private key for authentification and not a private key for dataset encryption/decryption. <a href="/jga/download-e.html#data-use-approval-download">Manual</a></li>
    <li>A private key file has read permission.</li>
    <li>A private key file permission is set as others cannot access. For example, rw-------.</li>
    <li>A passphrase for private key is correctly entered.</li>
  </ul>
</div>
<p>When transferring data files by using a private key generated in the other operating system, please check format of a private key. <a href="/account-e.html#convert-private-key">Convert private key</a></p>
<p><span class="bold">In Unix/Mac OS X</span>: Convert a key in the Windows PuTTY file format into the OpenSSH.</p>
<p><span class="bold">In Windows WinSCP:</span> Convert a key in the Unix/Mac OS X OpenSSH file format into the Windows PuTTY format.</p>
<p>When these are correct, because we do not support technical details regarding use of third-party softwares, please refer to websites of softwares or confirm your system administrators whether scp (in the case of JGA, port 443) is allowed or not.</p>