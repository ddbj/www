---
layout: indexed_content
title: Data upload
lang: en
---

## Data upload {#upload} 

This page explains how to upload data files by using sftp for DRA/GEA/DDBJ/MetaboBank to the DDBJ file server.

### Host name and port number  {#hostandport}

- Hostname: ftp-private.ddbj.nig.ac.jp
- Port number: 22

### Destination directories to upload  {#uploaddestination}

The destination directories are different with the databases. Do NOT create sub-directories under the destination directories of DRA and GEA.  

- DRA: ~/\<DRA submission ID\> (for example, test07-0018)
- GEA: ~/gea/\<GEA submission ID\> (for example, ESUB000350)
- MSS: ~/mass [Read the detailed description](/ddbj/mss-e.html#sftpmss)
- MetaboBank: ~/metabobank

Upload [JGA](/jga/submission-step-e.html) data files to the different server.

## Terminal {#terminal}

### Linux/Mac OS X {#terminal-linux}

Login to sftp. If prompted for a passphrase, enter the passphrase.  
```
sftp -i <Your private key> <DDBJ account username>@ftp-private.ddbj.nig.ac.jp
```

- \<Your private key\>: the private key for authentication which is pair of a public key registered to your DDBJ account. For example, ~/.ssh/id_rsa
- \<DDBJ account username\>: DDBJ Account Username. For example, test07.

After logging in, you will enter interactive mode.
```
sftp>
```

Move to the upload directory and upload the file.  

Example commands (DRA).  
```
sftp> cd test07-0018
sftp> put strainA_1.fastq
```

For commands available in sftp interactive mode, please refer to the [manual page](https://manpages.ubuntu.com/manpages/xenial/man1/sftp.1.html).

### PowerShell (Windows) {#ps}

This section explains how to upload files by commands using Windows PowerShell.

Searh and run "PowerShell" in the Windows start menu.   
<a href="/assets/images/books/ps-run.jpg" title="Search and run PowerShell" class="group1"><img src="/assets/images/books/ps-run.jpg" alt="Run PowerShell" title="Search and run PowerShell" class="w500"></a>   

Login to sftp. If prompted for a passphrase, enter the passphrase.  
```
sftp -i <Your private key> <DDBJ account username>@ftp-private.ddbj.nig.ac.jp
```

- \<Your private key\>: the private key for authentication which is pair of a public key registered to your DDBJ account. For example, ~/.ssh/id_rsa
- \<DDBJ account username\>: DDBJ Account Username. For example, test07.

After logging in, you will enter interactive mode.
```
sftp>
```

Move to the upload directory and upload the file.  

Example commands (DRA).  
```
sftp> cd test07-0018
sftp> put strainA_1.fastq
```

For commands available in sftp interactive mode, please refer to the [manual page](https://manpages.ubuntu.com/manpages/xenial/man1/sftp.1.html).

## WinSCP (Windows) {#winscp}

This section explains how to upload data files by using the GUI software WinSCP.  

Install and run [WinSCP](http://winscp.net/eng/download.php).  

Configure as below and click the [Advanced…] button.
Be sure to select the "binary mode" for file transfer. Do NOT select the "text mode".  

- File protocol: SFTP
- Host name: ftp-private.ddbj.nig.ac.jp
- Port number: 22
- User name: (DDBJ Account Username)
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
* Username: (DDBJ Account Username)
* Password: (Leave empty)
* SSH Private Key: Select a private key paired with a public key registered to your DDBJ account for authentification.
* Add to Keychain: (Check)

<a href="/assets/images/books/Cyberduck_3.jpg" title="Configuration" class="group1"><img src="/assets/images/books/Cyberduck_3.jpg" alt="Configuration" title="Configuration" class="w400"></a>

By default, the private key is created in "User’s home folder > .ssh folder (invisible in Finder) > id_rsa".

At the first time of login, a warning message is displayed; however, please select "Always" (this message will not be displayed again).

After login successfully, your private directory in the server is displayed in the window. Select the files in your PC and drag & drop them into the window to transfer the files to the server.

## Trouble-shooting {#trouble}

Please see the following FAQs.  
* [I can not scp transfer my files](/faq/en/sftp-e.html).  
* [Access to the ftp-private is blocked by the remote host key identification warning](/faq/en/known-hosts-e.html).  


