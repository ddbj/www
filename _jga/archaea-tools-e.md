---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: How to Use Archaea Tools
category: jga
current_tab: submission
lang: en
---

If uploading or downloading large datasets to JGA via sftp takes too long, you can request setup of the high-speed transfer tool [Archaea tools](ttps://hcp.clealink.jp/) (formerly HCPtools). The tool will be setup for each account.

Unlike the NIG supercomputer, VPN connection is not required.

* [How to use Archaea tools on the NIG supercomputer](https://sc.ddbj.nig.ac.jp/en/guides/software/CopyTool/Archaea_tools/)
* [Official manuals for each product](https://support.bytix.tech/document/)
* [Latest version](ttps://support.bytix.tech/latest/)

## Installing the client software {#install}

Follow the instructions below to install the client software.

Linux  
* [Ubuntu](https://support.bytix.tech/docs/archaea/tools/1.4/B_setup_client/B04_Ubuntu/)
* [CentOS](https://support.bytix.tech/docs/archaea/tools/1.4/B_setup_client/B03_RHEL/)

## Configuration files {#config}

Place the configuration files in your home directory. You can obtain the files from GitHub.

Linux
```
cd $HOME
git clone https://github.com/nig-sc/Bytix_Archaea/ .hcp
```

After git clone, the following files will be created:
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

Next, set the absolute path of your private key in the configuration file hcp-common.conf:
hcp-common.conf
```
PrivateKeyFile /home/youraccount/.ssh/id_rsa # Absolute path to your private key
AcceptableCryptMethod   PLAIN                # Encryption: none
AcceptableDigestMethod  SHA256               # Digest method: SHA256
DisableDataIntegrityChecking yes             # Allow no digest
```

## Connection test {#test}

After completing the configuration, perform a connection test using the command below.
In this example, the account test07 is used. Make sure you have registered your public key
 with your DDBJ account in advance.

Run the following test command:
```
$ hcp-ls --user=test07 133.39.233.39

hcp-ls starts :
agd
jga

ExitCode : 0
```

If ExitCode : 0 appears, the connection is successful.

## Downloading {#download}

Data you have applied for is located under the directory of the application ID:
```
133.39.233.39:jga/download/J-DU000024
```

Decryption tools are available in the following directory:
```
133.39.233.39:jga/download/J-DU000024/tools
```

Run the download command. Make sure there is enough free space on your local disk.
```
$ hcp --user=test07 <remote-directory-path> <local-directory-path>
```

Example:
```
$ hcp --user=test07 133.39.233.39:jga/download/J-DU000024 .
```

## Uploading {#upload}

Run the upload command:
```
$ hcp --user=test07 <local-directory-path> <remote-directory-path>
```

Example:
```
$ hcp --user=test07 files-to-be-uploaded 133.39.233.39:jga/upload/J-DS000014	
```
