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

First, confirm the following basic points.
 - Authentification is by using SSH key not by password.
 - A private key is pair of a public key registered in a D-way submission account.
 - A private key file has read permission.
 - A private key file permission is set as others cannot access. For example, rw-------.
 - A passphrase for private key is correctly entered.

When transferring data files by using a private key generated in the other operating system, please check format of a private key. [Convert private key](/account-e.html#convert-private-key)

**In Unix/Mac OS X**: Convert a key in the Windows PuTTY file format into the OpenSSH.

**In Windows WinSCP:** Convert a key in the Unix/Mac OS X OpenSSH file format into the Windows PuTTY format.

When these are correct, because we do not support technical details regarding use of third-party softwares, please refer to websites of softwares or confirm your system administrators whether scp (port 22) is allowed or not.
