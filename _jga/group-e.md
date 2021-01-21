---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: Group
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

## Group {#group}

The applications to NBDC, JGA submissions and downloads are managed
through groups consisting from D-way account holders as members. Through
groups, a principal investigator (PI) and applicant are able to
co-manage data without sharing their accounts. The PI is able to keep
access rights properly by removing members when they leave the PI's
laboratory. Regarding groups, please see "[Group](/group-e.html)" for
details.

## Data submitter group {#subgrp}

The applications to NBDC and JGA data submissions are managed by data
submitter groups. In the [NBDC application
system](https://humandbs.ddbj.nig.ac.jp/nbdc/application/), create a
group before submitting a data submission application. Include the PI
who is responsible for the submission and applicant who actually submits
data as members. In the new JGA system, submitters need to be members
instead of listed in the JGA Submission.

In the NBDC system, select "Create Group" in the left menu. In the
"Create Group" window, enter the name and description of the group, and
choose the "Data Submitter Group" and click Save button.

{::nomarkdown}
{% include image.html url="books/create-group-1_e.jpg" caption="Create a data submitter group" class="w450" %}
{:/}
<br>
A subgrp ID (for example, subgrp5352) is assigned to the data submitter
group.

{::nomarkdown}
{% include image.html url="books/create-group-2_e.jpg" caption="Assigned subgrp ID" class="w450" %}
{:/}
<br>
The account holder (account\_b) who creates the group become the group
owner. In the Member tab, the owner can invite a member. Click "Invite"
in the "Edit Group" window.

{::nomarkdown}
{% include image.html url="books/create-group-3_e.jpg" caption="Edit group" class="w450" %}
{:/}
<br>
Enter an account ID (account\_c) or an e-mail address of an account to
be invited. Send an invitation e-mail by clicking "Invite".

{::nomarkdown}
{% include image.html url="books/create-group-4_e.jpg" caption="Invite a member" class="w450" %}
{:/}
<br>
If the invited account holder click a link in the invitation e-mail,
he/she will be added as a member.

{::nomarkdown}
{% include image.html url="books/create-group-5_e.jpg" caption="Addition of a member" class="w450" %}
{:/}
<br>
The account\_c of the PI is added.

In this data submission application and subsequent JGA submission,
account\_c and account\_b are submitters. After finishing the
submission, the account\_b can transfer PI and Owner to account\_c.
