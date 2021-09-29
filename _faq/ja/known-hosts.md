---
layout: simple
title: ホスト鍵不一致の警告が表示され ftp-private にアクセスできません
category: faq
db:
  - bioproject
  - biosample
  - ddbj
  - dra
  - gea
tags: 
  - データの転送
date: 2021-09-28T09:16:30
lang: ja
---

2021年9月28日に BioProject/BioSample/DRA/GEA システムは新しいスパコンへ移行しました。    
これに伴い ftp-private.ddbj.nig.ac.jp サーバのホスト鍵が変更になったため、ssh でデータをアップロードしようとすると、ホスト鍵不一致の警告が表示され、アクセスすることができない場合があります。    

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

メッセージに従いユーザのホーム領域（例 test07 ユーザ）にある    
/home/test07/.ssh/known_hosts   
ファイルの ftp-private.ddbj.nig.ac.jp もしくは IP アドレス 133.39.224.111 が記載されている一行を削除します。    

メッセージから削除すべき、該当する行（例では11行目）を知ることもできます。    

```
Offending RSA key in /home/test07/.ssh/known_hosts:11
```

known_hosts のサーバの古いホスト鍵が記載されている行を削除した後、ssh でアクセスします。   
初めてアクセスした状態になるため、ホスト鍵の登録 yes/no を聞かれるので "yes" を選択し、アクセスします。