---
layout: indexed_content
title: Reviewer Access
category: gea
current_tab: submission overview
tab_menu:
  - id: home
    title: Home
    url: /gea/index-e.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview-e.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array-e.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence-e.html
      - title: Metadata
        url: /gea/metadata-e.html
      - title: Data File
        url: /gea/datafile-e.html
      - title: Validation
        url: /gea/validation-e.html
      - title: Single-cell submission guide
        url: /gea/single-cell-e.html
      - title: Example
        url: /gea/example-e.html
      - title: Array Design
        url: /gea/adf-e.html
      - title: Data matrix
        url: /gea/matrix-e.html
      - title: Reviewer Access
        url: /gea/reviewer-access-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=gea
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: RefEx
        url: http://refex.dbcls.jp/index.php?lang=en
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea-e.html
lang: en
---

## Reviewer access token <a name="access"></a>

After your records have been accessioned, use the 'Generate new reviewer access key' button to create a reviewer token which provides anonymous, read-only access to your private submissions. The token can be sent to the journal editor who will circulate it to reviewers requiring access to your private data. The token will be expired after three months. You can re-generate a new token if necesssary. The reviewer access URL is provided in accession number notification e-mail sent to submitters. This method provides access to all private data except sequence files submitted to [DRA](/dra/index-e.html). [DRA](/dra/index-e.html) does not support access to private sequence data.

{::nomarkdown}
{% include image.html url="submission/reviewer1.jpg" caption="Generate new reviewer access key" class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/reviewer3.jpg" caption="A reviewer token" class="w300" %}
{:/}

## Submitter anonymity <a name="anonymity"></a>

To reduce potential bias during peer review, some journals now offer manuscript depositors the option of "double-blind" peer review, where a depositor remains anonymous to the reviewer. GEA supports "double-blind" peer review of private data sets by redacting certain metadata fields which would inevitably reveal the submitter's identity, namely, [IDF fields](/gea/metadata-e.html#idf_tags) start with "Person" (name and email address), "PubMed" and "Publication" (pubmed ID and DOI). The redaction is done when a submitter chooses double-blind option and only applies when a reviewer is accessing the GEA experiment of interest, so the GEA submitter (using his/her dedicated D-way login) will continue to see the full metadata record. Anonymity can also be lifted by re-generating a token without selecting double-blind option, e.g. when the manuscript is submitted to a journal which does not support"double-blind" peer review. Finally, submitter anonymity will be lifted completely once the experiment goes public.

<div class="attention red">

GEA automatically redact the IDF fields start with "Person", "PubMed" and "Publication". It is solely submitter's responsibility to remove any submitter-identifibale information in other places such as an owner of Excel file in processed data.

</div>

{::nomarkdown}
{% include image.html url="submission/reviewer7.jpg" caption="IDF fields redacted in double-blind option" class="w300" %}
{:/}
