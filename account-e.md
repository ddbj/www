---
layout: tabbed_indexed_content
title: Submission Account
lang: en
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/1092WV_aXjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Create a DDBJ account.

## D-way account <a name="ddbj-submission-account"></a>

Bioinformation and DDBJ Center provides the D-way account system. In the D-way account, you can use BioProject, BioSample, GEA, DRA and JGA databases of DDBJ Center and the NBDC application systems. This handbook explains how to create a D-way account.

{::options parse_block_html="true" /}
<div class="attention">

  - Create a D-way account and manage data with permission of Principal Investigator (PI).
  - Issued account and password must be maintained securely by users.
  - Account name cannot be changed once it has been created.
  - It takes about 10 minutes for the created D-way account becoming active in the NBDC application system.

</div>

DDBJ Center employs scp authenticated by ssh key for transfer of large files. Therefore, you need to register a public key for authentication for using DRA, GEA and JGA services which accompany transfer of large files. In addition, because DRA metadata require a center name, you need to register a center name assigned to your affiliation for using DRA service.

{::nomarkdown}
{% include image.html url="books/hac01-e.jpg" caption="Service permission of D-way account" class="w300" %}
{:/}

## Create a D-way account in the website<a name="account-for-bioproject-biosample-submissions"></a>

### Create an account on website<a name="create-an-account-on-website"></a>

By default, you can use BioProject/BioSample/NBDC application systems in the D-way account created on the website.

<div class="attention">
For submission to DRA and GEA, you need to register center name and public key.
</div>

Open the submission portal page at
[https://ddbj.nig.ac.jp/D-way](https://ddbj.nig.ac.jp/D-way/). Click the [Register for a new account] button.

{::nomarkdown}
{% include image.html url="books/account_1_new.png" caption="Create a new account" class="w250" %}
{:/}

Enter necessary information and click the [Continue].

{::options parse_block_html="true" /}
<div class="attention">

Login ID:
: &emsp;ID must be 4 to 24 characters long.
: &emsp;ID can contain small letters, numbers and "_".
: &emsp;"-" and capital letters cannot be used.
: &emsp;Numbers and "_" cannot be used for first letter.

</div>

{::nomarkdown}
{% include image.html url="books/account_2.jpg" caption="Enter basic account information" class="w250" %}
{:/}

Enter basic account information and reserve an account ID.

{::nomarkdown}
{% include image.html url="books/account_3.jpg" caption="Reserve an account" class="w250" %}
{:/}

A confirmation mail is sent to the entered e-mail address. Activate your
reserved account according to the mail text.

Set a password for the activated account.

<div class="attention">
Set a password longer than 8 characters contains both alphabets and　numbers.
</div>


{::nomarkdown}
{% include image.html url="books/account_4.jpg" caption="Set a password" class="w250" %}
{:/}

{::nomarkdown}
{% include image.html url="books/initial.jpg" caption="Can submit to BioProject, BioSample and NBDC" class="w450" %}
{:/}


## Enable DRA/GEA/JGA submission in account <a name="enable-dra-submission-in-account"></a>

For submission to the [DDBJ Sequence Read Archive (DRA)](/dra/index-e.html) and [Genomic Expression Archive (GEA)](/gea/index-e.html), center name and public key should be registered to your account. The center name is abbreviated name of
organization assigned by the DRA. The public key is used to identify users to access the file submission server.

### Generate public and private key pair <a name="generate-key-pair"></a>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Windows</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/1092WV_aXjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Install and run the [PuTTY Key Generator](https://www.puttygen.com/%0A).
Set parameters as below and click the [Generate] button.

[![]({{ site.baseurl }}/assets/images/books/win_key_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/win_key_1.jpg "PuTTY Key Generator parameter settings"){: .group1}

Generate a key pair by moving mouse pointer randomly in the window and
save the public and private keys. The key is saved in the PuTTY format
and can be used in the WinSCP.

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Mac OS X</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/jBfOqsJxDZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Unix</a></h4>
<div class="accordion-content">

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

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

### Register center name and public key <a name="register-center-name-and-public-key"></a>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1092WV_aXjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Login to the [submission account](https://ddbj.nig.ac.jp/D-way/). Set a
new password for the first time of login. In the "Account" page, fill
your organization name in the "Center Full Name" and choose an
appropriate one from suggested list. Then, update your account by
clicking the [Update] button.

If an appropriate center is not registered, apply a new one by clicking
the [Apply new center name] button and inform us a full name of your
organization.

{::nomarkdown}
{% include image.html url="books/center.jpg" caption="Register a center name" class="w400" %}
{:/}

Once center name is registered, a public key can be uploaded in the
"Public Key" area at the bottom. Select a public key file and register
it by [Register public key] button.

{::nomarkdown}
{% include image.html url="books/keyregister.jpg" caption="Register a public key for authentication" class="w400" %}
{:/}

Once both center name and public key for authentication are registered, you can submit to
the DRA/GEA at menus at top left.

{::nomarkdown}
{% include image.html url="books/drasub.jpg" caption="Can submit to DRA/GEA in addition to BioProject and BioSample" class="w450" %}
{:/}

The JGA submissions are not browsable in the D-way web portal (under development). Please use JGA services according to ["JGA submission steps"](/jga/substep-e.html) and ["Download steps"](/jga/download-e.html).

### Update account <a name="update-account"></a>

Edit account information and update account by [Update] button. The
registered public key for authentication can be overwritten by uploading a new file.

## Password change<a name="password-change"></a>

Login [D-way](https://ddbj.nig.ac.jp/D-way) and move to the password change page from "Password" menu at top.

{::nomarkdown}
{% include image.html url="books/pass1.jpg" caption="Move to the password change page" class="w450" %}
{:/}

Enter a current password (once) and a new password (twice). Change the password by clicking the "Change" button.

{::nomarkdown}
{% include image.html url="books/pass2.jpg" caption="Enter a current password (once) and a new password (twice)" class="w450" %}
{:/}

The following message is displayed if the password was changed successfully.

{::nomarkdown}
{% include image.html url="books/pass3.jpg" caption="Message of successfull password change." class="w450" %}
{:/}

## Session Expired<a name="session"></a>

After your password was changed, "Session Expired" may be displayed in your web brower. In this case, please access D-way in secret mode ([Google chrome](https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DDesktop&hl=ja), [Firefox](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)) or use another browser.

{::nomarkdown}
{% include image.html url="books/d-way-session.jpg" caption="Session Expired" class="w300" %}
{:/}

## Convert a private key <a name="convert-private-key"></a>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Windows PuTTY to OpenSSH</a></h4>
<div class="accordion-content">

Select the "Import key" of "Conversions" menu and load the private key
generated by PuTTY.

[![]({{ site.baseurl }}/assets/images/books/con_1_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_1_e.jpg "Import key"){: .group1}

Select the "Export OpenSSH key" of "Conversions" menu and save the
converted private key. The converted private key can be used in Unix and
Mac OS X.

[![]({{ site.baseurl }}/assets/images/books/con_2_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_2_e.jpg "Export OpenSSH key"){: .group1}

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">OpenSSH to Windows PuTTY</a></h4>
<div class="accordion-content">

Select the "Import key" of "Conversions" menu and load the private key
generated in Unix/Mac OS X.

[![]({{ site.baseurl }}/assets/images/books/con_3_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_3_e.jpg "Import key"){: .group1}

Click the [Save private key] button and save the converted private
key. The converted private key can be used in Windows WinSCP.

[![]({{ site.baseurl }}/assets/images/books/con_4_e.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_4_e.jpg "Save converted private key"){: .group1}

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>
