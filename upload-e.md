---
layout: indexed_content
title: Data upload
lang: en
---

## Data upload {#upload} 

This page explains how to upload data files for DRA/GEA/DDBJ/MetaboBank to the DDBJ file server.

### Host name and port number  {#hostandport}

- Hostname: ftp-private.ddbj.nig.ac.jp
- Port number: 22

### Destination directories to upload  {#uploaddestination}

The destination directories are different with the databases. Do NOT create sub-directories under the destination directories of DRA and GEA.  

- DRA: ~/\<DRA submission ID\> (for example, test07-0018)
- GEA: ~/gea/\<GEA submission ID\> (for example, ESUB000350)
- MSS: ~/mass
- MetaboBank: ~/metabobank

Upload data files too large to upload from the [DDBJ Mass Submission System](/ddbj/mss-e.html) web form according to this page.  

Upload [JGA](/jga/submission-step-e.html) data files to the different server.

### mass directory  {#mssdirectory}

* The mass directory is a target to import the files when MSS Application Form is used. Therefore only the the submission files should be placed here. MSS Application Form reads the files recursively from the subdirectories under mass/.
* There are some rules for the submission file name. As to the compressed files, the files in the compressed archive should be subject to the rule.
  * File extension of the annotation file should be either one of <span style="background-color: #e8e8e8;">.ann</span>, <span style="background-color: #e8e8e8;">.annt</span>, <span style="background-color: #e8e8e8;">.tsv</span>, or <span style="background-color: #e8e8e8;">.ann.txt</span>
  * File extension of the nucleotide sequence file should be either one of <span style="background-color: #e8e8e8;">.fasta</span>, <span style="background-color: #e8e8e8;">.seq.fa</span>, <span style="background-color: #e8e8e8;">.fa</span>, <span style="background-color: #e8e8e8;">.fna</span>, or <span style="background-color: #e8e8e8;">.seq</span>
  * An annotation file and a nucleotide sequence file must comprise a pair. The system determines as a pair whose filenames without the extension has the same name.
    * Excluding the case of re-submitting the submission files as the request from DDBJ curator.
  * Use alphanumeric and part of symbolic (excluding space, backtick, angle brackets "<>", and parentheses "()") characters for the file name. Do not include multibyte character such as Japanese font.
  * MSS Application Form can import the files from compressed archive. The following compression types are available.
    * gzip, bzip2, xz, lzip, lzma, lzop, zstd, compress    
    e.g.    
    20230322-1.tar.gz    
    20230322-2.tar.bz2    
    20230322-3.tar.xz    
    20230322-4.zip    
    20230322-5.tar.lzma    
    20230322-6.tar.lzo    
    20230322-7.tar.zst    
    20230322-8.tar.Z


## Terminal {#terminal}

### Linux/Mac OS X {#terminal-linux}

Upload files by using scp.

Command format:  
scp -i \<Your private key> \<Your Files> \<D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/\<Destination directory>

- \<Your private key\>: the private key for authentication which is pair of a public key registered to your D-way account. For example, ~/.ssh/id_rsa
- \<Your Files\>: Files to be uploaded.  
For example, strainA_1.fastq, raw1.txt raw2.txt (raw1.txt and raw2.txt) and *.bam (files with bam extension specified by a wild card).
- \<D-way Login ID\>: D-way Login ID. For example, test07.
- \<Destination directory\>: the destination directory.   
For example, DRA: \<DRA submission ID\>, GEA: \<GEA submission ID\>, DDBJ: /mass and MetaboBank: /metabobank.

Example commands (DRA).  
```
$ scp -i ~/.ssh/id_rsa strainA_1.fastq test07@ftp-private.ddbj.nig.ac.jp:~/test07-0018
```

Enter the passphrase (if setted for the key).
```
Enter passphrase for key '/home/you/.ssh/id_rsa': 
```

You can directly handle the uploaded files by logging in the server.   
SSH login the server by executing,  
```
$ ssh -i <Your private key> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp
```

Example commands.  
```
$ ssh -i ~/.ssh/id_rsa test07@ftp-private.ddbj.nig.ac.jp
```

Enter the passphrase (if setted for the key).
```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

After logging in successfully, the following prompt is displayed.
```
[test07@at056 ~]$ 
```

The login environment is private for the submitter. Users other than the submitter cannot access the data.  
Executable commands are restricted to the following ones. Users can delete unnecessary files.  
```
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
```

### PowerShell (Windows) {#ps}

This section explains how to upload files by commands using Windows PowerShell.

Searh and run "PowerShell" in the Windows start menu.   
<a href="/assets/images/books/ps-run.jpg" title="Search and run PowerShell" class="group1"><img src="/assets/images/books/ps-run.jpg" alt="Run PowerShell" title="Search and run PowerShell" class="w500"></a>   

Upload files by scp.  

Command format:  
scp -i \<Your openSSH-format private key\> \<Your Files\> \<D-way Login ID\>@ftp-private.ddbj.nig.ac.jp:~/\<Destination directory\>

- \<Your openSSH-format private key\>: the private key for authentication which is pair of a public key registered to your D-way account. For example, ~/.ssh/id_rsa
- \<Your Files\>: Files to be uploaded.  
For example, strainA_1.fastq, raw1.txt raw2.txt (raw1.txt and raw2.txt) and *.bam (files with bam extension specified by a wild card).
- \<D-way Login ID\>: D-way Login ID. For example, test07.
- \<Destination directory\>: the destination directory.   
For example, DRA: \<DRA submission ID\>, GEA: \<GEA submission ID\>, DDBJ: /mass and MetaboBank: /metabobank.

Example commands (DRA).  
```
> scp -i ~/.ssh/id_rsa strainA_1.fastq test07@ftp-private.ddbj.nig.ac.jp:~/test07-0018
```

Enter the passphrase (if setted for the key).
```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

You can directly handle the uploaded files by logging in the server.   
SSH login the server by executing,  
```
$ ssh -i <Your private key> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp
```

Example commands.  
```
$ ssh -i ~/.ssh/id_rsa test07@ftp-private.ddbj.nig.ac.jp
```

Enter the passphrase (if setted for the key).
```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

After logging in successfully, the following prompt is displayed.
```
[test07@at056 ~]$ 
```

The login environment is private for the submitter. Users other than the submitter cannot access the data.  
Executable commands are restricted to the following ones. Users can delete unnecessary files.  
```
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
```

## WinSCP (Windows) {#winscp}

This section explains how to upload data files by using the GUI software WinSCP.  

Install and run [WinSCP](http://winscp.net/eng/download.php).  

Configure as below and click the [Advanced…] button.
Be sure to select the "binary mode" for file transfer. Do NOT select the "text mode".  

- File protocol: SFTP
- Host name: ftp-private.ddbj.nig.ac.jp
- Port number: 22
- User name: (D-way Login ID)
- Password: (Leave empty)

<a href="/assets/images/books/winscp1_400.jpg" title="Select a private key 1" class="group1"><img src="/assets/images/books/winscp1_400.jpg" alt="Select a private key 1" title="Select a private key 1" class="w500"></a>

Please select the PuTTY-format private key, which you created beforehand, from "Private key file" in "Authentication".

<a href="/assets/images/books/winscp2_400.jpg" title="Select a private key 2" class="group1"><img src="/assets/images/books/winscp2_400.jpg" alt="Select a private key 2" title="Select a private key 2" class="w400"></a>

Lastly, click the [Login] button in the lower center.

<a href="/assets/images/books/winscp3_400.jpg" title="Login to the WinSCP" class="group1"><img src="/assets/images/books/winscp3_400.jpg" alt="Login to the WinSCP" title="Login to the WinSCP" class="w400"></a>

At the first time of login, a warning message is displayed; however, please select "Yes" (this message will not be displayed again). Next, enter the passphrase set for the keys.

After login successfully, a folder of your PC is displayed at left, and your private directory in the server is displayed at right. Select the files at the left window and drag & drop them into the right window to transfer the files to the server.

<a href="/assets/images/books/winscp4_400.jpg" title="Transfer files by using WinSCP" class="group1"><img src="/assets/images/books/winscp4_400.jpg" alt="Transfer files by using the WinSCP" title="Transfer files by using WinSCP" class="w400"></a>

You can delete the transferred files by selecting the files and clicking the [Delete] button.

## Cyberduck (Mac OS X) {#cyberduck}

Download and install [Cyberduck (https://cyberduck.io/)](https://cyberduck.io/).

Run the Cyberduck and click the [Open Connection] button in the Cyberduck menu.

Set as follows.  

* SFTP (SSH File Transfer Protocol)
* Server: ftp-private.ddbj.nig.ac.jp
* Port: 22
* Username: (D-way Login ID)
* Password: (Leave empty)
* SSH Private Key: Select a private key paired with a public key registered to your D-way account for authentification.
* Add to Keychain: (Check)

<a href="/assets/images/books/Cyberduck_3.jpg" title="Configuration" class="group1"><img src="/assets/images/books/Cyberduck_3.jpg" alt="Configuration" title="Configuration" class="w400"></a>

By default, the private key is created in "User’s home folder > .ssh folder (invisible in Finder) > id_rsa".

At the first time of login, a warning message is displayed; however, please select "Always" (this message will not be displayed again).

After login successfully, your private directory in the server is displayed in the window. Select the files in your PC and drag & drop them into the window to transfer the files to the server.

## Trouble-shooting {#trouble}

Please see the following FAQs.  
* [I can not scp transfer my files](/faq/en/scp-e.html).  
* [Access to the ftp-private is blocked by the remote host key identification warning](/faq/en/known-hosts-e.html).  


