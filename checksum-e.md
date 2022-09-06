---
layout: indexed_content
title: MD5 checksum value
lang: en
---

MD5 (Message Digest Algorithm 5) is a hash function which calculates a hash value (MD5 value, 32-digit numbers and letters) of a given file. 
Because the MD5 value of the damaged file is distinct from the original one, 
DDBJ Center uses it to check whether uploaded file is intact or not by comparing the values before and after file upload.

## Linux {#linux}

Obtain the MD5 values of the files by executing,

```
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

## Mac OS X {#mac}

Obtain the MD5 values of the files by executing,

```
$ md5 file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

## Windows {#windows}

### PowerShell {#ps}

Run the Windows PowerShell.

[![]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg){:.w200}]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg "Run the Windows PowerShell"){: .group1}

Obtain MD5 checksum values by executing following commands in the PowerShell terminal.

```
Specify "md5" in the Algorithm option and obtain MD5 values.    
Different from Linux and Mac OS X, English letters are in uppercase.  
Uppercase and lowercase letters are not distinguished.

PS C:\files> Get-FileHash -Algorithm md5 sample1.fastq

Algorithm       Hash                                      Path
---------       ----                                      ----
MD5             9B5085A9DD0E823A2F1A4D93AF48230C   　　    C:\files\sample1.fastq

Files can be specified by using wild card (*).

PS C:\files> Get-FileHash -Algorithm md5 sample*

Algorithm       Hash                                      Path
---------       ----                                      ----
MD5             9B5085A9DD0E823A2F1A4D93AF48230C   　　    C:\files\sample1.fastq
MD5             0FE4741835A3E62C7523EA531753843A          C:\files\sample2.fastq
```

The terminal will be as follows.

[![]({{ site.baseurl }}/assets/images/books/win-ps-md5.jpg){:.w600}]({{ site.baseurl }}/assets/images/books/win-ps-md5.jpg "Execute MD5 commands"){: .group1}

### Fsum Frontend {#fsum}

Install and run the [Fsum Frontend (sourceforge.net/projects/fsumfe/)](//sourceforge.net/projects/fsumfe/).  
At first, tick off "md5".

<a href="/assets/images/books/Fsum1.jpg" title="Generate md5 in the tool 1" class="group1"><img src="/assets/images/books/Fsum1.jpg" alt="Generate md5 in the tool 1" title="Generate md5 in the tool 1" class="w400"></a>

After clicking the [+] button, open the sequence data files that you
need. You can select multiple files at the same time.

<a href="/assets/images/books/Fsum2.jpg" title="Generate md5 in the tool 2" class="group1"><img src="/assets/images/books/Fsum2.jpg" alt="Generate md5 in the tool 2" title="Generate md5 in the tool 2" class="w400"></a>

Click the [Calculate hashes] button. The MD5 numbers of the files are displayed.  
By clicking the [Export] button, you can obtain the list of the MD5 values as a html, a csv, or a xml file.

<a href="/assets/images/books/Fsum3.jpg" title="Generate md5 in the tool 3" class="group1"><img src="/assets/images/books/Fsum3.jpg" alt="Generate md5 in the tool 3" title="Generate md5 in the tool 3" class="w400"></a>
