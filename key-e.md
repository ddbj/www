---
layout: indexed_content
title: Generating public and private keys
lang: en
---

## Generate public and private key pair  {#generate-key-pair}

<span class="red"><a href="/jga/download-e.html#key-for-decryption">A key for JGA dataset decryption</a> should be in the RSA format. The ed25519 format is not supported.</span>

### Windows {#windows}

A public key for authentification can be both openSSH and PuTTY formats.
For JGA data decryption, use openSSH-format private key. For WinSCP authentification, use PuTTY-format private key.

#### OpenSSH format {#openssh}

For JGA data decryption, use openSSH-format private key.

Run Windows PowerShell.

[![]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg){:.w200}]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg "Run Windows PowerShell"){: .group1}

Execute following commands in the PowerShell window to generate openSSH-format key pair.

```
Generate key pair.
By default, for example, two keys will be generated at C:\Users\mtaro in the case of mtaro Windows user.
PS C:\Users\mtaro> ssh-keygen -t rsa

Message will be shown.
Generating public/private rsa key pair.

Press [Enter] for setting no passphrase.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.

A private key is saved as "id_rsa" and a public key is saved as "id_rsa.pub" in "C:\Users\mtaro" folder.
```

Following is the example command execution in the PowerShell window.

[![]({{ site.baseurl }}/assets/images/books/win-ps-2.jpg){:.w600}]({{ site.baseurl }}/assets/images/books/win-ps-2.jpg "Generate a key pair by PowerShell"){: .group1}

A private key is saved as "id_rsa" and a public key is saved as "id_rsa.pub" in the openSSH format under "C:\Users\mtaro" folder.
[![]({{ site.baseurl }}/assets/images/books/win-ps-3.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/win-ps-3.jpg "A openSSH key pair is generated under the user folder"){: .group1}

To distinguish the key pair, please save the JGA [public and private key pair for data decryption](/jga/download-e.html#key-for-decryption) as filenamaes having the applicatio ID by using -f option.
```
PS C:\Users\mtaro> ssh-keygen -t rsa -f J-DU999991
A private key is saved as "J-DU999991" and a public key is saved as "J-DU999991.pub" in "C:\Users\mtaro" folder.
```

#### PuTTY format {#putty}

Install and run the [PuTTY Key Generator](https://www.puttygen.com/%0A).
Set parameters as below and click the [Generate] button.

[![]({{ site.baseurl }}/assets/images/books/win_key_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/win_key_1.jpg "PuTTY Key Generator parameter settings"){: .group1}

Generate a key pair by moving mouse pointer randomly in the window and
save the public and private keys. The key is saved in the PuTTY format
and can be used in the WinSCP.

To distinguish the key pair, please save the JGA [public and private key pair for data decryption](/jga/download-e.html#key-for-decryption) as filenamaes having the applicatio ID.
For example, the public key "J-DU999991.pub" and the private key "J-DU999991".

### Mac OS X {#mac}

Run "Terminal" from Macintosh HD > Applications > Utilities >
Terminal.app.

[![]({{ site.baseurl }}/assets/images/books/mac_key_1_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_1_e.jpg "Run Mac terminal"){: .group1}

In the Terminal, execute following commands.

```
Generate the keys.
$ ssh-keygen -t rsa

Messages are displayed.
Generating public/private rsa key pair.

File in which to save the key. Press [enter].
Enter file in which to save the key (/Users/you/.ssh/id_rsa):

Press the [enter] to set no passphrase.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in /Users/you/.ssh/id_rsa.
Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
At "/Users/you/.ssh", the private key is saved as "id_rsa" and the public key is saved as "id_rsa.pub".
```

From the Finder "Go" menu, select the "Go to Folder" to display the
invisible ".ssh" folder contains the public key.

[![]({{ site.baseurl }}/assets/images/books/mac_key_2_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_2_e.jpg "Go to Folder"){: .group1}

In the "Go to Folder" window, enter the path to the ".ssh" folder under
your home.

[![]({{ site.baseurl }}/assets/images/books/mac_key_3_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_3_e.jpg "Enter the path to the .ssh folder"){: .group1}

The public key file "id_rsa.pub" is displayed.

[![]({{ site.baseurl }}/assets/images/books/mac_key_4_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_4_e.jpg "Public key file in .ssh folder"){: .group1}

Copy the public key file "id_rsa.pub" to your desk top for your account
registration.

To distinguish the key pair, please save the JGA [public and private key pair for data decryption](/jga/download-e.html#key-for-decryption) as filenamaes having the applicatio ID by using -f option.
```
$ ssh-keygen -t rsa -f J-DU999991
At "/Users/you/.ssh", the private key is saved as "J-DU999991" and the public key is saved as "J-DU999991.pub".
```

### Unix {#unix}

```
Generate the keys.
$ ssh-keygen -t rsa

Messages are displayed.
Generating public/private rsa key pair.

File in which to save the key. Press [enter].
Enter file in which to save the key (/Users/you/.ssh/id_rsa):

Press the [enter] to set no passphrase.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in /Users/you/.ssh/id_rsa.
Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
At "/Users/you/.ssh", the private key is saved as "id_rsa" and the public key is saved as "id_rsa.pub".
```

To distinguish the key pair, please save the JGA [public and private key pair for data decryption](/jga/download-e.html#key-for-decryption) as filenamaes having the applicatio ID by using -f option.
```
$ ssh-keygen -t rsa -f J-DU999991
At "/Users/you/.ssh", the private key is saved as "J-DU999991" and the public key is saved as "J-DU999991.pub".
```

### Registering a public key for authentication {#register-public-key}

Log in to your [DDBJ account](https://accounts.ddbj.nig.ac.jp) and select SSH keys. Click [New SSH key] to either upload your SSH public key file or paste its content. Supported formats are OpenSSH with encryption types: RSA, ECDSA, and ED25519. Note that the JGA service cannot be accessed through the D-way web interface. After registering your authentication public key to your account, please follow the steps in [JGA submission steps](/jga/submission-step-e.html) and [How to use data](/jga/download-e.html).

## Convert a private key  {#convert-private-key}

### Windows PuTTY to OpenSSH {#putty-openssh}

Select the "Import key" of "Conversions" menu and load the private key
generated by PuTTY.

[![]({{ site.baseurl }}/assets/images/books/con_1_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_1_e.jpg "Import key"){: .group1}

Select the "Export OpenSSH key" of "Conversions" menu and save the
converted private key. The converted private key can be used in Unix and
Mac OS X.

[![]({{ site.baseurl }}/assets/images/books/con_2_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_2_e.jpg "Export OpenSSH key"){: .group1}

### OpenSSH to Windows PuTTY {#openssh-putty}

Select the "Import key" of "Conversions" menu and load the private key
generated in Unix/Mac OS X.

[![]({{ site.baseurl }}/assets/images/books/con_3_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_3_e.jpg "Import key"){: .group1}

Click the [Save private key] button and save the converted private
key. The converted private key can be used in Windows WinSCP.

[![]({{ site.baseurl }}/assets/images/books/con_4_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_4_e.jpg "Save converted private key"){: .group1}

