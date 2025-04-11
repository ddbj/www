---
layout: simple
title: Access to the ftp-private is blocked by the remote host key identification warning.
category: faq
db:
  - bioproject
  - biosample
  - ddbj
  - dra
  - gea
tags: 
  - Data transfer
date: 2021-09-28T09:16:30
lang: en
---

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
