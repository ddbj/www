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

2025年4月10日に BioProject/BioSample/DRA/GEA システムは新しいスパコンへ移行しました。    
これに伴い ftp-private.ddbj.nig.ac.jp サーバのホスト鍵が変更になったため、ssh でデータをアップロードしようとすると、ホスト鍵不一致の警告が表示され、アクセスすることができない場合があります。    

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

メッセージに従いユーザのホーム領域（例 test07 ユーザ）にある    
/home/test07/.ssh/known_hosts   
ファイルの ftp-private.ddbj.nig.ac.jp もしくは IP アドレス 133.39.224.111 が記載されている一行を削除します。    

メッセージから削除すべき、該当する行（例では2行目）を知ることもできます。    

```
Offending ECDSA key in /Users/test07/.ssh/known_hosts:2
```

known_hosts のサーバの古いホスト鍵が記載されている行を削除した後、ssh でアクセスします。   
初めてアクセスした状態になるため、ホスト鍵の登録 yes/no を聞かれるので "yes" を選択し、アクセスします。