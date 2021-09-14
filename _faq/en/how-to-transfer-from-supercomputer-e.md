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

#### If the private key was generated on Unix/Mac OS X
Transfer your private key to the NIG supercomputer (Linux). Next, transfer the files by executing.
```
scp <Your Files> <D-way Login ID>@dradata.ddbj.nig.ac.jp:~/<Submission ID>
```
- &lt;Your Files&gt; Files to be transferred.    
ex: file1 file2 (file1 and file2), file* (all files whose filenames start with “file”)
- &lt;D-way Login ID&gt; D-way Login ID    
ex. drauser
- &lt;Submission ID&gt; Submission ID    
ex. drauser-0003

#### If the private key was generated on Windows PC
After [the conversion of the key into the OpenSSH format used in Linux](/account-e.html#convert-private-key), transfer the private key to the supercomputer.Then, specify the private key using -i option of scp.
```
scp -i <Private Key> <Your Files> <D-way Login ID>@dradata.ddbj.nig.ac.jp:~/<Submission ID>
```
- &lt;Private Key&gt; The private key file path    
ex. /home/mishima/id.rsa

