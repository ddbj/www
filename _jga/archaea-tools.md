---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: Archaea tools の利用方法
category: jga
current_tab: submission
lang: ja
---

JGA に大規模データを sftp でアップロード・ダウンロードすると時間がかかりすぎてしまう場合、JGA に高速転送ツールである [Archaea tools](https://hcp.clealink.jp/) (旧 HCPtools) のセットアップを依頼することができます。アカウント毎に個別にツールを設定いたします。　　

遺伝研スパコンとは異なり VPN 接続は必要ありません。　　

* [遺伝研スパコン Archaea tools の使い方](https://sc.ddbj.nig.ac.jp/software/Archaea_tools/)
* [各製品ごとの公式マニュアル](https://support.bytix.tech/document/)
* [最新バージョン](https://support.bytix.tech/latest/)

## クライアントソフトのインストール {#install}

以下の手順に従ってインストールします。  

Linux  
* [Ubuntu](https://support.bytix.tech/docs/archaea/tools/1.4/B_setup_client/B04_Ubuntu/)
* [CentOS](https://support.bytix.tech/docs/archaea/tools/1.4/B_setup_client/B03_RHEL/)

## 設定ファイルの設置 {#config}

ホームディレクトリに設定ファイルを設置します。設定ファイルは GitHub から取得します。  

Linux  

```
cd $HOME
git clone https://github.com/nig-sc/Bytix_Archaea/ .hcp
```

git clone すると以下のファイルが作られます。  
```
$ tree .hcp
.hcp
├── README.md
├── hchmod.conf
├── hchown.conf
├── hcp-common.conf
├── hcp-ls.conf
├── hcp.conf
├── hln.conf
├── hmkdir.conf
├── hmv.conf
├── hpwd.conf
├── hrm.conf
└── hsync.conf
```

次に認証用秘密鍵の絶対パスを設定ファイル hcp-common.conf に記載します。  
hcp-common.conf  
```
PrivateKeyFile /home/youraccount/.ssh/id_rsa # 秘密鍵の絶対パス
AcceptableCryptMethod   PLAIN                # 暗号化:なし
AcceptableDigestMethod  SHA256               # ダイジェスト方式: SHA256
DisableDataIntegrityChecking yes             # ダイジェスト方式なしを許可
```

## 接続テスト {#test}

設定完了後、以下のコマンドで接続テストを実施します。  
test07 アカウントを例に説明します。事前に D-way アカウントに[認証用公開鍵を登録](https://www.ddbj.nig.ac.jp/account.html#public-key)しておく必要があります。

以下のテストコマンドを実行します。  
```
$hcp-ls --user=test07 133.39.228.32

hcp-ls starts :
agd
jga

ExitCode : 0
```

ExitCode : 0 と表示されれば接続成功です。  

## ダウンロード {#download}

利用申請されているデータは申請 ID ディレクトリ内に設置されています。
```
133.39.228.32:jga/download/J-DU000024
```

復号化ツールは以下のディレクトリにあります。
```
133.39.228.32:jga/download/J-DU000024/tools
```

ダウンロードコマンドを実行します。  
ローカルディクスの空き容量が十分にある場所で実行します。  
```
$hcp --user=test07 <ダウンロードしたいディレクトリパス> <ローカルディレクトリパス>
```

```
$hcp --user=test07 133.39.228.32:jga/download/J-DU000024 .
```

## アップロード {#upload}

アップロードコマンドを実行します。 
```
$hcp --user=test07 <ローカルディレクトリパス> <アップロードしたいディレクトリパス>
```

例
```
$hcp --user=test07 files-to-be-uploaded 133.39.228.32:jga/upload/J-DS000014
```






