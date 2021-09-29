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

The BioProject/BioSample/DRA/GEA systems have been migrated to new supercomputer at 28th September 2021.    
Due to this migration, access to ftp-private.ddbj.nig.ac.jp may be blocked by the remote host key identification warning.  

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: POSSIBLE DNS SPOOFING DETECTED!    @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
The RSA host key for ftp-private.ddbj.nig.ac.jp has changed,
and the key for the corresponding IP address 133.39.224.111
is unknown. This could either mean that
DNS SPOOFING is happening or the IP address for the host
and its host key have changed at the same time.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!   @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:MQi8isve0moRNQj/9z73dZy6lBcprrd5p87ynoznZ3o.
Please contact your system administrator.
Add correct host key in /home/test07/.ssh/known_hosts to get rid of this message.
Offending RSA key in /home/test07/.ssh/known_hosts:11
  remove with:

... snipped ...

RSA host key for ftp-private.ddbj.nig.ac.jp has changed and you have requested strict checking.
Host key verification failed.
lost connection
```

Delete a line where "ftp-private.ddbj.nig.ac.jp" or the IP address "133.39.224.111" are recorded from the known_hosts file under your home directory (for example, test07).  
/home/test07/.ssh/known_hosts   

You may know the line number to be deleted from the warning message (example below is 11).    

```
Offending RSA key in /home/test07/.ssh/known_hosts:11
```

After deleting the line of the known_hosts file, access to the server.    
Because the access is regarded as a first time access, you are asked whether record the server key or not. Please select "yes" and access the server.
