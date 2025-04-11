---
layout: simple
title: I can not transfer files by using sftp
category: faq
db:
  - ddbj
  - dra
  - gea
  - metabobank
  - jga
tags:
  - System
date: 2021-05-05T06:46:24
lang: en
---

Confirm the following points.

- Authentification is by using SSH key not by password.
- A private key is pair of a public key registered in a DDBJ account. [Manual](/ddbj-ddbj-account-e.html#public-key)
- Make sure to specify a private key for authentification and not a private key for dataset encryption/decryption. [Manual](/jga/download-e.html#data-use-approval-download)
- A private key file has read permission.
- A private key file permission is set as others cannot access. For example, rw-------.
- A passphrase for private key is correctly entered.
- The ssh connection with the port number 22 (DRA/GEA/DDBJ/MetaboBank) or 443 (JGA) is allowed in your network (Please ask your network administrator)

When transferring data files by using a private key generated in the other operating system, please check format of a private key. [Convert private key](/ddbj-ddbj-account-e.html#convert-private-key)

- In Unix/Mac OS X: Convert a key in the Windows PuTTY file format into the OpenSSH.
- In Windows WinSCP: Convert a key in the Unix/Mac OS X OpenSSH file format into the Windows PuTTY format.

When these are correct, because we do not support technical details regarding use of third-party softwares, please refer to websites of softwares or confirm your system administrators whether ssh, port 22 (DRA/GEA/DDBJ/MetaboBank) and 443 (JGA), is allowed or not.

### Check if communication is allowed in the user environment {#allow}

As requested, the DDBJ Center will investigate access logs to ftp-private.ddbj.nig.ac.jp.
If there is no record in the access logs, it is possible that communication is not allowed in the user's environment.    
On April 10, 2025, the IP address of ftp-private.ddbj.nig.ac.jp was changed from 133.39.224.111 to 133.39.233.40. Due to this change, communication that was previously allowed in the user environment may now be blocked. Please ask your network administrator to confirm whether communication to 133.39.233.40 on port 22 is allowed.  
  
JGA/AGD data transfer server is jga-gw.ddbj.nig.ac.jp 133.39.233.39

### Check if the user home directory has been created {#home}

If you see the following error message, it is possible that the user home directory has not been created on `ftp-private.ddbj.nig.ac.jp` for DDBJ accounts newly created after April 10, 2025.  
The DDBJ Center will create the user home directory on your behalf, so please [contact us](/contact-ddbj-e.html) with your account name.


```
sftp -i id_rsa test07@ftp-private.ddbj.nig.ac.jp
Enter passphrase for key id_rsa':
client_loop: send disconnect:
Connection resetConnection closed
```

### REMOTE HOST IDENTIFICATION HAS CHANGED {#identification}

The BioProject/BioSample/DRA/GEA systems have been migrated to new supercomputer at 10th April 2025.    
Due to this migration, access to ftp-private.ddbj.nig.ac.jp may be blocked by the remote host key identification warning.  

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:LAPCiua8RAlPIZwE4MKWX7YHMY//rtyjfnUYBj/cnfk.
Please contact your system administrator.
Add correct host key in /Users/test07/.ssh/known_hosts to get rid
of this message.
Offending ECDSA key in /Users/test07/.ssh/known_hosts:2
Host key for ftp-private.ddbj.nig.ac.jp has changed and you have
requested strict checking.
Host key verification failed.
Connection closed
```

Delete a line where "ftp-private.ddbj.nig.ac.jp" or the IP address "133.39.224.111" are recorded from the known_hosts file under your home directory (for example, test07).  
/home/test07/.ssh/known_hosts   

You may know the line number to be deleted from the warning message (example below is 2).    

```
Offending ECDSA key in /Users/test07/.ssh/known_hosts:2
```

After deleting the line of the known_hosts file, access to the server.    
Because the access is regarded as a first time access, you are asked whether record the server key or not. Please select "yes" and access the server.

#### UNPROTECTED PRIVATE KEY FILE WARNING {#unprotected}

If the private key access permission is too open, following error may be shown.  
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions for './private-key-for-auth' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "./private-key-for-auth": bad permissions
test07@ftp-private.ddbj.nig.ac.jp: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
lost connection
```

Right-click the private key file and select the property.  
<a href="/assets/images/books/win-ps-1.jpg" title="file property" class="group1"><img src="/assets/images/books/win-ps-scp-1.jpg" alt="file property" title="file property" class="w300"></a>   

Select detailed setting of the security tab.  
<a href="/assets/images/books/win-ps-scp-2.jpg" title="detailed setting of security" class="group1"><img src="/assets/images/books/win-ps-scp-2.jpg" alt="detailed setting of security" title="detailed setting of security" class="w300"></a>  

Disable access permission entry inheritance to enable permission deletion.  
<a href="/assets/images/books/win-ps-scp-3.jpg" title="Disable access permission entry inheritance" class="group1"><img src="/assets/images/books/win-ps-scp-3.jpg" alt="Disable access permission entry inheritance" title="Disable access permission entry inheritance" class="w300"></a>  

Convert explicit access permission.  
<a href="/assets/images/books/win-ps-scp-4.jpg" title="Convert explicit access permission" class="group1"><img src="/assets/images/books/win-ps-scp-4.jpg" alt="Convert explicit access permission" title="Convert explicit access permission" class="w300"></a>  

Delete all permissions.  
<a href="/assets/images/books/win-ps-scp-5.jpg" title="Delete all permissions" class="group1"><img src="/assets/images/books/win-ps-scp-5.jpg" alt="Delete all permissions" title="Delete all permissions" class="w300"></a>   

Add access permission.  
<a href="/assets/images/books/win-ps-scp-6.jpg" title="Add access permission" class="group1"><img src="/assets/images/books/win-ps-scp-6.jpg" alt="Add access permission" title="Add access permission" class="w300"></a>   

Add a Windows user (example, test07).    
<a href="/assets/images/books/win-ps-scp-7.jpg" title="Add a Windows user" class="group1"><img src="/assets/images/books/win-ps-scp-7.jpg" alt="Add a Windows user" title="Add a Windows user" class="w300"></a>  

Allow full control to the Windows user.   
<a href="/assets/images/books/win-ps-scp-8.jpg" title="Allow full control" class="group1"><img src="/assets/images/books/win-ps-scp-8.jpg" alt="Allow full control" title="Allow full control" class="w300"></a>  

Change the file permission.   
<a href="/assets/images/books/win-ps-scp-9.jpg" title="Change the file permission" class="group1"><img src="/assets/images/books/win-ps-scp-9.jpg" alt="Change the file permission" title="Change the file permission" class="w300"></a>  

Run sftp.      
