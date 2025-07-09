---
layout: indexed_content
title: DDBJ Account
lang: en
---

## Introduction {#introduction}

To use the data submission and analysis services of Bioinformation and DDBJ Center (DDBJ Center), a DDBJ account is required. This page explains how to create and update a DDBJ account.

## Creating a new account {#create-account}

1. Access [DDBJ Account](https://accounts.ddbj.nig.ac.jp) and click \[Create an account\]. After entering the account information, agree to the [DDBJ Center Terms of Use](/policies-e.html) and click \[Create Account\].
2. Sign in with the entered username and password.

### Cautions on account creation {#caution}

- The username must be 3–24 characters long and can include lowercase letters, numbers, "\_" (underscore), and "-" (hyphen). The first character cannot be a symbol ("\_", "-"). Once created, the username cannot be changed.
- If applying for data submission or usage in the NBDC Human Database Application System, additional information besides the required fields is necessary.
- The password must be at least 8 characters long and include both letters and numbers.
- Agreeing to the [Terms of Use](/policies-e.html) is required when creating an account.
- Create your account with the approval of your supervisor and ues it securely.

## Using the account {#use-account}

With a DDBJ account, you can use the following services.  
- Metadata submission to BioProject/BioSample/DRA/GEA using the D-way submission system.
- Nucleotide sequence submission using the MSS system.
- Data submission and usage applications through the NBDC Human Database Application System.
- Uploading of submission data for BioProject/BioSample/DRA/GEA/MetaboBank/MSS via sftp.
- Uploading and downloading of JGA/AGD data via sftp.
- Job execution on the DFAST web service.

It takes approximately 5 minutes for account creation or updates to be reflected in the D-way submission system, NBDC Human Database Application System, JGA, and AGD.

### Cautions on using the NBDC Human Database Application System {#humandbs}

When submitting an application in Japanese through the NBDC Human Database Application System, additional information including Japanese names and detailed affiliations is required:

- First name in Japanese
- Last name in Japanese
- Job title
- Job title in Japanese
- Laboratory, Faculty, Department
- Postal code/Zip code
- State/Prefecture
- Street
- Phone

## Registering an SSH Public Key {#key}

Log in to your [DDBJ Account](https://accounts.ddbj.nig.ac.jp) and select SSH keys. Click New SSH key to upload your SSH public key file or paste the key content directly. A supported file format is OpenSSH and encryption methods are RSA, ECDSA, and ED25519.    
For instructions on generating public/private key pairs, see [Generating public and private keys](/key-e.html). 

## Updating account information {#update-account}

1. Access [DDBJ Account](https://accounts.ddbj.nig.ac.jp), click \[Sign in\] and log in with your username or email address and password.
2. You can update account information, change your password, and register or delete SSH public key(s) from the menu options.

## Troubleshooting {#trouble-shooting}

### Forgot Password {#forgot-password}

Move to log in page by clicking "Sign in" button at [DDBJ Account](https://accounts.ddbj.nig.ac.jp/).  
Then move to the password reset page by clicking "Forgot Password?"

### Forgot Username {#forgot-username}

Please log in [DDBJ Account](https://accounts.ddbj.nig.ac.jp/) using your registered email address instead of your username.

### Unable to connect via SSH {#cannot-ssh}

Ensure that your SSH public key is correctly registered. Also, refer to the following FAQs.

- [I can not SSH upload my files](/faq/en/sftp-e.html)
- [Access to the ftp-private is blocked by the remote host key identification warning](/faq/en/known-hosts-e.html)

For instructions on generating public/private key pairs, see [Generating public and private keys](/key-e.html). For data upload instructions, refer to [Data Upload](/upload-e.html).

By adding the following configuration to your `~/.ssh/config` file, you can connect with `ssh ddbj`. You can also check detailed debug information with `ssh -vvv ddbj`.

```
Host ddbj
Hostname ftp-private.ddbj.nig.ac.jp
User your-account-id
IdentityFile ~/.ssh/id_ed25519
```

## Other inquiries {#other}

For inquiries, please use the [Contact form](/contact-ddbj-e.html) and select "Contact: DDBJ Account" as the inquiry type.
