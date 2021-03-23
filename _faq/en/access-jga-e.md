---
layout: simple
title: I can not access by scp/ssh to the JGA server
category: faq
db:
  - jga
tags: 
  - System
date: 2020-10-15T11:19:00
lang: en
---

First, confirm the following basic points.
- Make sure your global IP address (not a private IP address) of accessing source has been added to the white list by JGA. If accessed via a proxy server, the addresses of accessing source and your machine are different. Please ask system administrator of your institution. [Manual](/jga/global-ip-e.html)
- Authentification is by using SSH key not by password.
- A private key is pair of a public key registered in a D-way account. [Manual](/account-e.html#enable-dra-submission-in-account)
- Make sure to specify a private key for authentification and not a private key for dataset encryption/decryption. [Manual](/jga/download-e.html#data-use-approval-download)
- A private key file has read permission.
- A private key file permission is set as others cannot access. For example, rw-------.
- A passphrase for private key is correctly entered.

When transferring data files by using a private key generated in the
other operating system, please check format of a private key. [Convert
private key](/account-e.html#convert-private-key)

**In Unix/Mac OS X:** Convert a key in the Windows PuTTY file format into the OpenSSH.

**In Windows WinSCP:** Convert a key in the Unix/Mac OS X OpenSSH file format into the Windows PuTTY format.

When these are correct, because we do not support technical details regarding use of third-party softwares, please refer to websites of softwares or confirm your system administrators whether scp (in the case of JGA, port 443) is allowed or not.
