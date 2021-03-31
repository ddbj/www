---
layout: indexed_content
title: 遺伝研スーパーコンピュータシステム
category: sc
lang: ja
current_tab: application
---

## ssh公開鍵の登録・追加・削除手順

セキュリテイ強化のため、遺伝研スパコンの利用者は、ssh公開鍵の登録をお願い致します。

### ssh公開鍵の登録・追加手順

以下は、Linux, Mac, Windows WSL2環境の場合のssh公開鍵の登録手順です。他に[Windows TeraTermの場合](/sc/application/ssh_public_keys_teraterm.html)、[Windows Puttyの場合](/sc/application/ssh_public_keys_putty.html)を別のページに記載してありますので必要に応じて参照してください。


### (1) ユーザーの計算機上における公開鍵と秘密鍵の生成


ユーザーの計算機上にOpenSSHがインストールされていることを確認して下さい。インストールされていない場合、先にインストールをお願いします。


秘密鍵及び公開鍵を生成するには、ssh-keygenコマンドを使用します。

```bash
$ ssh-keygen -t rsa -b 2048                                                      (1)
Generating public/private rsa key pair.
Enter file in which to save the key (/home/temp/.ssh/id_rsa):                    (2)
Enter passphrase (empty for no passphrase):                                      (3)
Enter same passphrase again:                                                     (4)
Your identification has been saved in /home/temp/.ssh/id_rsa.
Your public key has been saved in /home/temp/.ssh/id_rsa.pub.
The key fingerprint is:
e5:23:f0:fc:b7:60:70:80:79:91:f2:f1:6d:a8:ae:90 temp@host
```
   
- (1) RSAバージョン2による2048ビットの鍵生成。
- (2) 公開鍵及び秘密鍵の保存先指定。
  - 変更する場合のみここでパスを指定します。変更しない場合はEnterのみ入力してください。（通常は変更不要）
- (3) パスフレーズの入力。
  - ユーザーの計算機が盗難等にあった場合の対策として、パスフレーズは必ず指定してください。
- (4) パスフレーズの再入力。


公開鍵及び秘密鍵の保存先を確認すると、id_rsa.pub, id_rsaの２つのファイルが作成されています。
前者が公開鍵、後者が秘密鍵のファイルです。秘密鍵は盗まれないよう厳重に管理してください。


```
$ ls ~/.ssh
id_rsa  id_rsa.pub
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAznOdmkDHzjDpsNIhkl2VNjUXBlC3QePKDAzmu3FDCMgBYUDyiXAXLf85q25cy
lVq66gLUP63nlFJz4/SLO13w2Qf3Gyyj7ADJJZR3sD+Sf8vdlt2hShAT0kkKBmToBqv2Pqx2SfzRVedlyCE4YFieUVmZUkz95
dxwSUklGXmQSvigkqCG86r0NlxCSMjYitDGWAyGMu37cvBYzH0+C2uthtbqTd1VYHfjtvewySSZsvbVVnjLme0Ah2cAyifVaS
N4uslDBqkN62b3vaijoXPy9ieUzSP0/dgBhKN/m7yhnM/1s+foJnRI3wfDdqXPw3yOqPC/9EXrjnmdpEmpgMJTw== temp@host
$ 
```



### (2) 遺伝研スパコンへの公開鍵の設置

公開鍵ファイルid_rsa.pubを遺伝研スパコンに登録するには以下の2つの方法があります。

<table style="table-layout: fixed;">
<tr valign="top">
<td>
<p><a href="https://sc2.ddbj.nig.ac.jp/index.php/ja-form-ssh-application-2" target="_blank" rel="noopener">公開鍵ファイルのアップロードフォーム</a></p>
<p>画面下部（赤枠）の【選択】を押し、ファイル選択画面からアップロードするファイルを選択後、画面下部（赤枠）の【公開鍵登録】ボタンを押して登録を行ってください。</p>
</td>
<td>
<p><a href="https://sc2.ddbj.nig.ac.jp/index.php/ja-form-ssh-application" target="_blank" rel="noopener">公開鍵の直接入力フォーム</a></p>
<p>画面下部（赤枠）部分に上記で作成したした公開鍵をコピー・ペーストし、画面下部の公開鍵ボタンを押して登録を行ってください。</p>
</td>
</tr>
<tr valign="top">
<td>
<p><img style="max-width: 100%;" src="/assets/images/sc/sshupload.jpeg" alt></p>
</td>
<td>
<p><img style="max-width: 100%;" src="/assets/images/sc/sshdirectjpg.jpeg" alt></p>
</td>
</tr>
</table>


公開鍵登録後、以下のようにして遺伝研スパコンにログインできるようになったか確認してください。

```bash
$ ssh アカウント名@gw.ddbj.nig.ac.jp
Enter passphrase for key '/home/アカウント名/.ssh/id_rsa':
Last login: Fri Sep 19 13:28:19 2019 from gw.ddbj.nig.ac.jp
---------------------------------------------------------------------
Thank you for using supercomputer system.
This node is in use for login service only. Please use 'qlogin'.
---------------------------------------------------------------------
[（アカウント名）@gw ~]$
```

パスフレーズの入力プロンプトが表示されたら鍵生成に指定したパスフレーズを入力します。

パスフレーズ及び公開鍵・秘密鍵の認証後、スーパーコンピュータシステムへのログインが完了します。

秘密鍵の格納場所が`~/.ssh/id_rsa`以外の場合はsshコマンドのパラメタ、-i 秘密鍵PATHを用いることも可能です。


### ssh公開鍵の削除手順

ssh公開鍵の削除を行うには以下のようにしてください。
