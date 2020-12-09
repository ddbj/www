---
layout: indexed_content
title: The new JGA system
category: jga
current_tab: submission
tab_menu:
  - id: home
    title: Home
    url: /jga/index-e.html
  - id: browse researches at nbdc
    title: Browse researches at NBDC
    url: https://humandbs.biosciencedbc.jp/en/data-use/all-researches
    children:
      - title: DDBJ Search
        url: https://ddbj.nig.ac.jp/search
  - id: submission
    title: Submission
    url: /jga/submission-e.html
    children:
      - title: How to submit
        url: /jga/submission-step-e.html
      - title: How to access data
        url: /jga/download-e.html
      - title: Groups
        url: /jga/group-e.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: Updates in 2020
        url: /jga/update-202009-e.html
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=jga?keyword%5B%5D=jga
lang: en
---

## New JGA system<a name="update-202009"></a>

The new Japanese Genotype-phenotype Archive (JGA) and [NBDC data
submission and use application
systems](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)
([https://humandbs.ddbj.nig.ac.jp/nbdc/application](https://humandbs.ddbj.nig.ac.jp/nbdc/application/))
will be released on 29th, September, 2020. The change points are
summarized in this page.

## Account integration to D-way<a name="account-integration"></a>

We have been operated the D-way account for BioProject/BioSample/DRA/GEA
submission and the JGA account for the JGA data submission and download.
After 29th, September, 2020, the JGA account will be merged to the D-way
and users will be able to use the BioProject/BioSample/DRA/JGA/NBDC
Application systems in the D-way account.

If you want to submit data to JGA or use JGA data, please create your
[D-way](https://ddbj.nig.ac.jp/D-way/) account if you do not have it.
You can use the JGA system after your application is approved by NBDC.
If you already have a D-way account, you can apply applications to NBDC
in your D-way account. For details, please see [this
page](/account-integration-e.html).

{::options parse_block_html="true" /}
<div class="attention red">

After creating a new D-way account, the D-way account will be active in
the NBDC application system after about 10 minutes.

</div>

{::nomarkdown}
{% include image.html url="books/integration_d_way-e.png" caption="Account integration to D-way" class="w300" %}
{:/}


## Group<a name="group"></a>

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

### Data submitter group<a name="subgrp"></a>

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

{::nomarkdown}
{% include image.html url="books/subgrp_nbdc-e.png" caption="Data submission group" class="w400" %}
{:/}

### Data user group<a name="usergrp"></a>

Data use application to NBDC (for example, J-DU000001) is linked to data
use group (for example, usergrp1). After the data use application is
approved, you can download JGA Dataset (for example, JGAD000001)
approved in the application.

Please include only those who actually download the data as group
member. Researcher uses the downloaded data should be listed as a
collaborator but should not be included as a group member.

The owner can remove a member without his/her permission. However, you
need to request member addition to NBDC.

{::nomarkdown}
{% include image.html url="books/usergrp_nbdc-e.png" caption="Data use group" class="w400" %}
{:/}

## Data submission and download steps<a name="steps"></a>

The NBDC application system and the JGA system will be integrated by the
common account and group. In the same account, users can "Apply data
submission application - submit data to JGA" and "Apply data use
application - download data from JGA". Please see each page for the
[data submission](/jga/submission-step-e.html) and
[download](/jga/download-e.html).

{::nomarkdown}
{% include image.html url="books/nbdc-jga-e.png" caption="Data submission and download steps" class="w550" %}
{:/}

## Data transfer by scp<a name="transfer"></a>

The JGA upload and download toos will be replaced by scp. In the new JGA
system, data files will be uploaded and downloaded by scp.

## Data encryption flow<a name="encryption"></a>

For the data submission, upload unencrypted data files (transfer channel
is encrypted by scp). After issuing accession numbers, the JGA system
will store data files in encrypted form as before.

For data use, approved datasets will be encrypted by a public key
registered by a user during the data use application to NBDC. Users need
to decrypt the data files by using a private key after scp download.
Please see [this page](/jga/download-e.html#public-key-for-dataset-encryption) for details.

## Search system renewal<a name="search"></a>

The JGA Study/Dataset browser provided at
https://ddbj.nig.ac.jp/jga/viewer/view/studies will be replaced by the
new "DDBJ Search" at <https://ddbj.nig.ac.jp/search>. We will further
develop the DDBJ Search.

## Accession number digits<a name="accessions"></a>

For future addition of version nubmers, the digits of the JGA accession
numbers will be changed. The DDBJ Search will respond new accessions
when accessed by the old 11-digit numbers.


| Object     | Prefix | Current digits | New digits | New number examples |
|------------|--------|----------------|------------|---------------------|
| Study      | JGAS   | 11             | 6          | JGAS000001          |
| Data set   | JGAD   | 11             | 6          | JGAD000001          |
| Policy     | JGAP   | 11             | 6          | JGAP000001          |
| Sample     | JGAN   | 11             | 9          | JGAN000000001       |
| Experiment | JGAX   | 11             | 9          | JGAX000000001       |
| Data       | JGAR   | 11             | 9          | JGAR000000001       |
| Analysis   | JGAZ   | 11             | 9          | JGAZ000000001       |
| Submission | JGA    | 11             | 6          | JGA000001           |
| DAC        | JGAC   | 11             | 6          | JGAC000001          |

## Incorporation of past data submission and use applications<a name="future"></a>

The NBDC application system does not have past applications. We will
incorporate past data submission and use applications linked to groups.

