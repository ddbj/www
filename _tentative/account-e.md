---
layout: indexed_content
title: Submission Account
pathname: account-e
category: tentative
---

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/1092WV_aXjA/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/1092WV_aXjA?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "Create a new DDBJ submission account")

</div>

</div>

Create a DDBJ submission account.

<div class="section chapter">

## DDBJ submission account

At the DNA Data Bank of Japan (DDBJ), BioProject, BioSample, GEA and DRA
submissions are managed in user's account. This handbook explains how to
create a submission account.

<div class="attention">

  - Create an account and submit data with the permission of the
    Principal Investigator (PI).
  - Issued account and password must be maintained securely by users.
  - Account name cannot be changed once it has been created.

</div>

</div>

There are two types of submission account. For submission to the [DDBJ
Sequence Read Archive (DRA)](/dra/index-e.html) and [Genomic Expression
Archive (GEA)](/gea/index-e.html), registering of center name and public
key is required.

![Two types of submission account.](/images/books/hac01.jpg)

<div class="section chapter">

## Account for BioProject/BioSample submissions

<div class="section section">

### Create an account on website

You can submit to BioProject and BioSample databases in the account
created as explained in this chapter.

<div class="attention no_top">

For submission to DRA and GEA, you need to register center name and
public key.

</div>

Open the submission portal page at
[https://ddbj.nig.ac.jp/D-way](https://ddbj.nig.ac.jp/D-way/). Click the
\[Register for a new account\] button.

![Create a new submission account](/images/books/account_1_new.png
"Create a new submission account")

Enter necessary information and click the \[Continue\].

<div class="attention no_top">

  - Login ID:
  - ID must be 4 to 24 characters long.
  - ID can contain small letters, numbers and "\_".
  - "-" and capital letters cannot be used.
  - Numbers and "\_" cannot be used for first letter.

</div>

![](/images/books/account_2.jpg "Enter basic account information")

Enter basic account information and reserve an account ID.

![Reserve an account](/images/books/account_3.jpg "Reserve an account")

A confirmation mail is sent to the entered e-mail address. Activate your
reserved account according to the mail text.

Set a password for the activated account.

<div class="attention no_top">

Set a password longer than 8 characters contains both alphabets and
numbers.

</div>

![Set a password](/images/books/account_4.jpg "Set a password")

![Can submit to BioProject and BioSample](/images/books/initial.jpg
"Can submit to BioProject and BioSample")

</div>

</div>

<div class="section chapter">

## Enable DRA/GEA submission in account

For submission to the [DDBJ Sequence Read Archive
(DRA)](/dra/index-e.html) and [Genomic Expression Archive
(GEA)](/gea/index-e.html), center name and public key should be
registered to your account. The center name is abbreviated name of
organization assigned by the DRA. The public key is used to identify
users to access the file submission server.

<div class="section section">

### Generate public and private key pair

<div class="section sub_section">

#### [Windows](javascript:void\(0\))

<div class="toggle_text none">

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/Aos7KR6XwUw/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/Aos7KR6XwUw?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "Generate a key pair (Windows)")

</div>

</div>

Install and run the [PuTTY Key Generator](https://www.puttygen.com/%0A).
Set parameters as below and click the \[Generate\] button.

![](/images/books/win_key_1.jpg
"PuTTY Key Generator parameter settings")

Generate a key pair by moving mouse pointer randomly in the window and
save the public and private keys. The key is saved in the PuTTY format
and can be used in the WinSCP.

</div>

</div>

<div class="section sub_section">

#### [Mac OS X](javascript:void\(0\))

<div class="toggle_text none">

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/jBfOqsJxDZU/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/jBfOqsJxDZU?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "Generate a key pair (Mac)")

</div>

</div>

Run "Terminal" from Macintosh HD \> Applications \> Utilities \>
Terminal.app.

![](/images/books/mac_key_1_e.jpg "Run Mac terminal")

In the Terminal, execute following commands.

``` code
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

![](/images/books/mac_key_2_e.jpg "Go to Folder")

In the "Go to Folder" window, enter the path to the ".ssh" folder under
your home.

![](/images/books/mac_key_3_e.jpg "Enter the path to the .ssh folder")

The public key file "id\_rsa.pub" is displayed.

![](/images/books/mac_key_4_e.jpg "Public key file in .ssh folder")

Copy the public key file "id\_rsa.pub" to your desk top for your account
registration.

</div>

</div>

<div class="section sub_section">

#### [Unix](javascript:void\(0\))

<div class="toggle_text none">

``` code
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

</div>

</div>

</div>

<div class="section section">

### Register center name and public key

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/1092WV_aXjA/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/1092WV_aXjA?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "Create a new submission account")

</div>

</div>

Login to the [submission account](https://ddbj.nig.ac.jp/D-way/). Set a
new password for the first time of login. In the "Account" page, fill
your organization name in the "Center Full Name" and choose an
appropriate one from suggested list. Then, update your account by
clicking the \[Update\] button.

If an appropriate center is not registered, apply a new one by clicking
the \[Apply new center name\] button and inform us a full name of your
organization.

![Register a center name](/images/books/center.jpg
"Register a center name")

Once center name is registered, a public key can be uploaded in the
"Public Key" area at the bottom. Select a public key file and register
it by \[Register public key\] button.

![Register a public key](/images/books/keyregister.jpg
"Register a public key")

Once both center name and public key are registered, you can submit to
the DRA/GEA at menus at top left.

![Can submit to DRA/GEA in addition to BioProject and
BioSample](/images/books/drasub.jpg
"Can submit to DRA/GEA in addition to BioProject and BioSample")

</div>

<div class="section section">

### Update account

Edit account information and update account by \[Update\] button. The
registered public key can be overwritten by uploading a new file.

</div>

</div>

<div class="section chapter">

## Convert private key

<div class="section section">

#### [Windows PuTTY to OpenSSH](javascript:void\(0\))

<div class="toggle_text none">

Select the "Import key" of "Conversions" menu and load the private key
generated by PuTTY.

![](/images/books/con_1_e.jpg "Import key")

Select the "Export OpenSSH key" of "Conversions" menu and save the
converted private key. The converted private key can be used in Unix and
Mac OS X.

![](/images/books/con_2_e.jpg "Export OpenSSH key")

</div>

</div>

<div class="section section">

#### [OpenSSH to Windows PuTTY](javascript:void\(0\))

<div class="toggle_text none">

Select the "Import key" of "Conversions" menu and load the private key
generated in Unix/Mac OS X.

![](/images/books/con_3_e.jpg "Import key")

Click the \[Save private key\] button and save the converted private
key. The converted private key can be used in Windows WinSCP.

![](/images/books/con_4_e.jpg "Save converted private key")

</div>

</div>

</div>
