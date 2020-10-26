---
layout: indexed_content
title: How do I send data currently stored on the DDBJ supercomputer to Pipeline? Similarly, how do I send data to the supercomputer after the Pipeline analysis?
category: faq
db:
  - pipeline
date: 2015-04-28T14:12:20
lang: en
---

## How do I send data currently stored on the DDBJ supercomputer to Pipeline? Similarly, how do I send data to the supercomputer after the Pipeline analysis?

To upload data from the supercomputer to Pipeline, use the ftp command from the supercomputer to connect to the DDBJ Pipeline FTP server; this allows you to transfer data directly without going through your local computer.More specifically, the procedure is as follows.1. After logging in to the gw supercomputer, use qlogin to move to one of the computational nodes.2. Use the ftp command to connect to the server: $ ftp pdata.nig.ac.jp3. When prompted, enter the DDBJ Pipeline user name and password.4. Once you are connected, upload your files to the directory named query.After you have uploaded files, you may register them within Pipeline by following procedures similar to that used in the GUI.For the reverse process—copying result files to the supercomputer—at present, there is no way to do this.(However, it is possible to copy result files individually by specifying a destination location and assigning it write privileges.)As the question suggests, it would certainly be convenient if file transfers between the supercomputer and Pipeline could be carried out directly; this is a goal of future development efforts.