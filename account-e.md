---
layout: indexed_content
title: Submission Account
lang: en
---

## D-way account  {#ddbj-submission-account}

Bioinformation and DDBJ Center provides the D-way account system. In the D-way account, you can use BioProject, BioSample, GEA, DRA and JGA databases of DDBJ Center and the DBCLS application systems. This handbook explains how to create and use a D-way account.

{::options parse_block_html="true" /}
<div class="attention">
- Create a D-way account and manage data with permission of Principal Investigator (PI).
- Issued account and password must be maintained securely by users.
- Account ID cannot be changed once it has been created.
- In the D-way account page, updated information will be reflected in about 10 minutes.
- It takes about 10 minutes for the created D-way account becoming active in the DBCLS application system.
</div>

DDBJ Center uses scp authenticated by a ssh key for transfer of large files. You need to register a public key to upload data files to DRA, GEA and JGA.

Users submitting data submission or data use applications to DBCLS are recommended to [enter additional account information](#dbcls). The added items are automatically filled to new applications and the users are able to avoid entering these items in each application.

## Create a D-way account in the website {#account-for-bioproject-biosample-submissions}

### Create an account on website {#create-an-account-on-website}

Open the submission portal page at
[https://ddbj.nig.ac.jp/D-way](https://ddbj.nig.ac.jp/D-way/). 
Click the [Register for a new account] button.

{::nomarkdown}
{% include image.html url="books/account_1_new.png" caption="Create a new account" class="w400" %}
{:/}

Enter necessary information and click the [Continue].

{::options parse_block_html="true" /}
<div class="attention">
Login ID:
* ID must be 4 to 24 characters long.
* ID can contain small letters, numbers and "_".
* "-" and capital letters cannot be used.
* Numbers and "_" cannot be used for first letter.
</div>

{::nomarkdown}
{% include image.html url="books/account_2.jpg" caption="Enter basic account information" class="w250" %}
{:/}

Enter basic account information and reserve an account ID after agreeing on the [Terms of Use](/policies-e.html).

{::nomarkdown}
{% include image.html url="books/account_3.jpg" caption="Reserve an account" class="w400" %}
{:/}

A confirmation mail is sent to the entered e-mail address.  
Set a password by clicking a link in the mail.

<div class="attention">
Set a password longer than 8 characters contains both alphabets and numbers.
</div>

{::nomarkdown}
{% include image.html url="books/account_4.jpg" caption="Set a password" class="w300" %}
{:/}

Please wait more than 10 minutes after setting a password and login [D-way](https://ddbj.nig.ac.jp/D-way).  
The account information fields including required ones are displayed.  
Enter your account information and click [Update\].

{::nomarkdown}
{% include image.html url="books/account_5.jpg" caption="Enter account information fields" class="w400" %}
{:/}

You need to register a [public key](#generate-key-pair) to upload files to DRA/GEA/JGA.
Please wait more than 10 minutes after entering account information, login [D-way](https://ddbj.nig.ac.jp/D-way) again and register a [public key](#generate-key-pair).

## Registering a public key {#public-key}

To upload data files to [DDBJ Sequence Read Archive (DRA)](/dra/index-e.html) and [Genomic Expression Archive (GEA)](/gea/index-e.html), a public key should be registered to your account. The public key is used to identify users to access the file submission server.

### Generate public and private key pair  {#generate-key-pair}

<span class="red"><a href="/jga/download-e.html#key-for-decryption">A key for JGA dataset decryption</a> should be in the RSA format. The ed25519 format is not supported.</span>

### Windows {#windows}

A public key for D-way authentification can be both openSSH and PuTTY formats.
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

### Register a public key {#register-public-key}

Login to the [submission account](https://ddbj.nig.ac.jp/D-way/). In the Account page, a public key can be uploaded in the
"Public Key" area at the bottom. Select a public key file and register
it by [Register public key] button.

{::nomarkdown}
{% include image.html url="books/keyregister.jpg" caption="Register a public key for authentication" class="w500" %}
{:/}

The JGA submissions are not browsable in the D-way web portal. Please use JGA services according to ["JGA submission steps"](/jga/substep-e.html) and ["Download steps"](/jga/download-e.html).

### Update account  {#update-account}

Edit account information and update account by [Update] button. The
registered public key for authentication can be overwritten by uploading a new file.

{::options parse_block_html="true" /}
<div class="attention">
Updated account information will be reflected in about 10 minutes. Please login again after 10 minutes.
</div>

## Items to be added for DBCLS applications {#dbcls}

Add the organization and job title information to your account.
Login the [DBCLS application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application/) and select the "User information update" at the top right menu. Or directly access [the user profile site](https://profile.ddbj.nig.ac.jp/groupmanager/secure).

{% include image.html url="books/profile1-e.jpg" caption="User information update" class="w200" %}

Click the Edit button to add the information.

{% include image.html url="books/profile2.jpg" caption="Edit the account information by the Edit button" class="w300" %}

Add additional information.

* Laboratory, Faculty, Department
* Postal code/Zip code
* State/Prefecture
* Street
* Phone
* Job Title

{% include image.html url="books/profile3-e.jpg" caption="Add account information" class="w300" %}

Save the information by the Save button.

{% include image.html url="books/profile4.jpg" caption="Save the information" class="w300" %}

To register a public key for authentication, press [Key]. If a key has been registered to the D-way account, this resigtration is not necessary. If a key has not been registered, "Public key is not registered" is shown under "My Account".
{% include image.html url="books/profile5.jpg" caption="Register a public key for authentication" class="w300" %}

Select a public key and press [Send].
{% include image.html url="books/profile6.jpg" caption="Select a public key" class="w300" %}

## Password reset {#password-reset}

Follow [Forgot password?\] link under the [D-way](https://ddbj.nig.ac.jp/D-way) login page.  
{% include image.html url="books/pass-reset-1.jpg" caption="Forgot password" class="w500" %}

Enter an account ID to reset a password and click [Submit\].  
If the account exists, a password reset mail will be sent to the registered address.
{% include image.html url="books/pass-reset-2.jpg" caption="Enter an account ID" class="w400" %}

Follow instructions in the mail and reset a new password.  
{% include image.html url="books/pass-reset-3.jpg" caption="Reset a new password" class="w400" %}

<div class="attention">
A new password will be reflected in 10 minutes.  
After 10 minutes, login [D-way](https://ddbj.nig.ac.jp/D-way) with a new password.
</div>

## Password change {#password-change}

Login [D-way](https://ddbj.nig.ac.jp/D-way) and move to the password change page from "Password" menu at top.

{::nomarkdown}
{% include image.html url="books/pass1.jpg" caption="Move to the password change page" class="w450" %}
{:/}

Enter a current password (once) and a new password (twice). Change the password by clicking the "Change" button.

{::nomarkdown}
{% include image.html url="books/pass2.jpg" caption="Enter a current password (once) and a new password (twice)" class="w450" %}
{:/}

{::options parse_block_html="true" /}
<div class="attention">
Updated account information will be reflected in about 10 minutes. Please login again after 10 minutes.
</div>

The following message is displayed if the password was changed successfully.

{::nomarkdown}
{% include image.html url="books/pass3.jpg" caption="Message of successfull password change." class="w450" %}
{:/}

## Email address change {#mail-address-change}

Enter a new address in E-mail of Account and click "Update".　　
An update request email will be sent to the old address. Update the address according to instructions in the request mail.

{::nomarkdown}
{% include image.html url="account/mail-change.jpg" caption="Change email address" class="w400" %}
{:/}

<div class="attention">
Email regarding data submissions is sent to email addresses entered in the submissions.
If you change email address of your D-way account, you need to update addresses of data submissions to receive emails regarding the submissions.  
Updated account information will be reflected in about 10 minutes. Please login again after 10 minutes.
</div>

## Session Expired {#session}

After your password was changed, "Session Expired" may be displayed in your web brower. In this case, please access D-way in secret mode ([Google chrome](https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DDesktop&hl=ja), [Firefox](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)) or use another browser.

{::nomarkdown}
{% include image.html url="books/d-way-session.jpg" caption="Session Expired" class="w300" %}
{:/}

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

