---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: The new JGA system
category: jga
current_tab: submission
lang: en
---

## New JGA system {#update-202009}

The new Japanese Genotype-phenotype Archive (JGA) and [NBDC data
submission and use application
systems](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)
([https://humandbs.ddbj.nig.ac.jp/nbdc/application](https://humandbs.ddbj.nig.ac.jp/nbdc/application/))
will be released on 29th, September, 2020. The change points are
summarized in this page.

## Account integration to D-way {#account-integration}

We have been operated the DDBJ account for BioProject/BioSample/DRA/GEA
submission and the JGA account for the JGA data submission and download.
After 29th, September, 2020, the JGA account will be merged to the D-way
and users will be able to use the BioProject/BioSample/DRA/JGA/NBDC
Application systems in the DDBJ account.

If you want to submit data to JGA or use JGA data, please create your
[D-way](https://ddbj.nig.ac.jp/D-way/) account if you do not have it.
You can use the JGA system after your application is approved by NBDC.
If you already have a DDBJ account, you can apply applications to NBDC
in your DDBJ account. For details, please see [this
page](/account-integration-e.html).

<div class="attention" markdown="1">
After creating a new DDBJ account, the D-way account will be active in
the NBDC application system after about 10 minutes.
</div>

{% include image.html url="books/integration_d_way-e.png" caption="Account integration to D-way" class="w300" %}

## Group {#group}

In the new account system, submissions and NBDC data submission and use
applications are managed through 'group'. By using group, a principal
investigator and a researcher are able to edit submitted records
collaboratively, and limit submitters by adding and removing group
members without sharing account credentials. When an account holder is
sole submitter, submission is linked to default group having one member,
the account holder. For details, please see [this page](/group-e.html).

The owner can send an invitation email to another account holder. If the
holder accepts invitation, he/she is added to the group.

The owner can remove a member without his/her permission.

### Data submitter group {#subgrp}

The submission application (for example, J-DS000001) to NBDC is managed
by submission group (for example, subgrp1). NBDC creates JGA submissions
(for example, JSUB000001) linked to approved applications and applicants
can submit their data.

Update request (for example, J-DS000001-002) should be applied from the
same group which applied the initial submission application. The
submitter can add data to a new submission linked to approved update
application. The initial data submission and update applications are
assigned branch numbers such as J-DS000001-002.

The owner can remove a member without his/her permission. However, you
need to request member addition to NBDC.

Include all submitters as members. Emails regarding submissions are sent
to members only.

{% include image.html url="books/subgrp_nbdc-e.png" caption="Data submission group" class="w400" %}

### Data user group {#usergrp}

Data use application to NBDC (for example, J-DU000001) is linked to data
use group (for example, usergrp1). After the data use application is
approved, you can download JGA Dataset (for example, JGAD000001)
approved in the application.

Please include only those who actually download the data as group
member. Researcher uses the downloaded data should be listed as a
collaborator but should not be included as a group member.

The owner can remove a member without his/her permission. However, you
need to request member addition to NBDC.


{% include image.html url="books/usergrp_nbdc-e.png" caption="Data use group" class="w400" %}


## Data submission and download steps {#steps}

The NBDC application system and the JGA system will be integrated by the
common account and group. In the same account, users can "Apply data
submission application - submit data to JGA" and "Apply data use
application - download data from JGA". Please see each page for the
[data submission](/jga/submission-step-e.html) and
[download](/jga/download-e.html).

{% include image.html url="books/nbdc-jga-e.png" caption="Data submission and download steps" class="w550" %}

## Data transfer by sftp {#transfer}

The JGA upload and download toos will be replaced by scp. In the new JGA
system, data files will be uploaded and downloaded by scp.    
At [22th April 2021](/news/en/2021-04-13-e.html), scp was switched to sftp to improve usability and security.

## Data encryption flow {#encryption}

For the data submission, upload unencrypted data files (transfer channel
is encrypted by sstp). After issuing accession numbers, the JGA system
will store data files in encrypted form as before.

For data use, approved datasets will be encrypted by a public key
registered by a user during the data use application to NBDC. Users need
to decrypt the data files by using a private key after sftp download.
Please see [this page](/jga/download-e.html#public-key-for-dataset-encryption) for details.

## Search system renewal {#search}

The JGA Study/Dataset browser provided at
https://ddbj.nig.ac.jp/jga/viewer/view/studies will be replaced by the
new "DDBJ Search" at <https://ddbj.nig.ac.jp/search>. We will further
develop the DDBJ Search.

## Accession number digits {#accessions}

For future addition of version nubmers, the digits of the JGA accession
numbers will be changed. The DDBJ Search will respond new accessions
when accessed by the old 11-digit numbers.


| Object     | Prefix | Current digits | New digits | New number examples |
|---|
| Study      | JGAS   | 11             | 6          | JGAS000001          |
| Data set   | JGAD   | 11             | 6          | JGAD000001          |
| Policy     | JGAP   | 11             | 6          | JGAP000001          |
| Sample     | JGAN   | 11             | 9          | JGAN000000001       |
| Experiment | JGAX   | 11             | 9          | JGAX000000001       |
| Data       | JGAR   | 11             | 9          | JGAR000000001       |
| Analysis   | JGAZ   | 11             | 9          | JGAZ000000001       |
| Submission | JGA    | 11             | 6          | JGA000001           |
| DAC        | JGAC   | 11             | 6          | JGAC000001          |

## Incorporation of past data submission and use applications {#future}

The NBDC application system does not have past applications. We will
incorporate past data submission and use applications linked to groups.

