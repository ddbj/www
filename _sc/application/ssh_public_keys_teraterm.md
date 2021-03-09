---
layout: indexed_content
title: Windows TeraTermによるssh公開鍵の登録・追加
category: sc
lang: ja
current_tab: application
---

# Windows TeraTermによるssh公開鍵の登録・追加


 
Windows（TeraTerm）   topへ移動

（１）ユーザ端末におけるペア鍵の生成

　TeraTerm で鍵を生成するには、TeraTermを起動します。

　teraterm1

　,【設定】ー【ＳＳＨ鍵生成】にて鍵の生成を行います。

 

　teraterm2

  鍵の種類をＲＳＡ，ビット数（Ｂ）を２０４８として【生成】ボタンを押下して、鍵を生成します。

 

  teraterm3

  鍵のパスフレーズを入力後、【公開鍵の保存】(id_rsa.pubファイルの保存）、【秘密鍵の保存】（id_rsaファイルの保存）ボタンを押下して、id_rsa,id_rsa.pubを作成します。

 

（２）遺伝研ゲートウェイノードへの公開鍵の設置

 作成したid_rsa.pubをファイルのアップロードフォームでアップロードして下さい。

　・ ファイルのアップロードフォーム

sshupload

画面下部（赤枠）の【選択】を押し、ファイル選択画面寄り、アップロードするファイルを選択後、画面下部（赤枠）の【公開鍵登録】ボタンを押して登録を行う。

（３）遺伝研ゲートウェイノードへのＳＳＨ接続確認

TeraTermを起動します。

  teraterm c1

　ホスト名：gw.ddbj.nig.ac.jp  ポート：２２、サービス：SSH,サービスバージョンSSH2を設定し、【ＯＫ】ボタンを押下する。

  teraterm c2

   スーパーコンピュータシステムにログインするユーザＩＤ、鍵生成時に指定したパスフレーズを入力する。

　「ＲＡＳ／ＩＳＡ鍵を使う」を選択し、作成した秘密鍵を選択し、【ＯＫ】ボタンを押下する。

  teraterm c3

  スーパーコンピュータシステムへのログインが完了します。

 

 
Mac／Linux   topへ移動


 
