---
layout: indexed_content
title: MD5 チェックサム値の取得
lang: ja
---

MD5 (Message Digest Algorithm 5) はハッシュ関数であり、与えられたファイルに対して固有のハッシュ値 (MD5 値、32桁の英数字) を出力します。
ファイルが破損していると MD5 値が変化します。DDBJ センターでは、アップロードされたファイルの MD5 値の一致をチェックすることで、ファイルの破損がないかどうかを確認しています。

## Linux {#linux}

ファイルの MD5 値を取得します。

```
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

## Mac OS X {#mac}

ファイルの MD5 値を取得します。

```
$ md5 file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

## Windows {#windows}

### PowerShell {#ps}

Windows PowerShell を起動します。  

[![]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg){:.w200}]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg "Windows PowerShell を起動"){: .group1}

PowerShell のターミナルで以下のコマンドを実行し、MD5 チェックサム値を取得します。

```
アルゴリズムで md5 を指定し、ファイルの MD5 値を取得します。
Linux や Mac OS X と異なり MD5 値中の英字は大文字になりますが、大文字と小文字は区別されません。
PS C:\files> Get-FileHash -Algorithm md5 sample1.fastq

Algorithm       Hash                                      Path
---------       ----                                      ----
MD5             9B5085A9DD0E823A2F1A4D93AF48230C   　　     C:\files\sample1.fastq

ワイルドカード * を使ったファイル指定もできます。
PS C:\files> Get-FileHash -Algorithm md5 sample*

Algorithm       Hash                                      Path
---------       ----                                      ----
MD5             9B5085A9DD0E823A2F1A4D93AF48230C   　　   C:\files\sample1.fastq
MD5             0FE4741835A3E62C7523EA531753843A          C:\files\sample2.fastq
```

実際の画面では以下のようになります。  

[![]({{ site.baseurl }}/assets/images/books/win-ps-md5.jpg){:.w600}]({{ site.baseurl }}/assets/images/books/win-ps-md5.jpg "MD5 値取得コマンドを実行"){: .group1}

### Fsum Frontend {#fsum}

[Fsum Frontend (http://sourceforge.net/projects/fsumfe/)](http://sourceforge.net/projects/fsumfe/)
をインストールし、起動します。  
まず、 "md5" にチェックを入れてください。

<a href="/assets/images/books/Fsum1.jpg" title="md5 を選択" class="group1"><img src="/assets/images/books/Fsum1.jpg" alt="md5 を選択" title="md5 を選択" class="w400"></a>

[+] ボタンをクリックし、必要なデータファイルを開いてください。同時に複数のファイルを選択することが可能です。

<a href="/assets/images/books/Fsum2.jpg" title="データファイルを選択" class="group1"><img src="/assets/images/books/Fsum2.jpg" alt="データファイルを選択" title="データファイルを選択" class="w400"></a>

最後に、[Calculate hashes] ボタンをクリックしてください。各ファイルの MD5 値が表示されます。[Export] ボタンから、MD5 値の一覧表 (.html, .csv, .xml) を作成することができます。

<a href="/assets/images/books/Fsum3.jpg" title="MD5 値の計算を開始" class="group1"><img src="/assets/images/books/Fsum3.jpg" alt="MD5 値の計算を開始" title="MD5 値の計算を開始" class="w400"></a>
