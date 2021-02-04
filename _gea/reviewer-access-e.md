---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Reviewer Access
category: gea
current_tab: submission overview
lang: en
---

## Reviewer access token  {#access}

After your records have been accessioned, use the 'Generate new reviewer access key' button to create a reviewer token which provides anonymous, read-only access to your private submissions. The token can be sent to the journal editor who will circulate it to reviewers requiring access to your private data. The token will be expired after three months. You can re-generate a new token if necesssary. The reviewer access URL is provided in accession number notification e-mail sent to submitters. This method provides access to all private data except sequence files submitted to [DRA](/dra/index-e.html). [DRA](/dra/index-e.html) does not support access to private sequence data.


{% include image.html url="submission/reviewer1.jpg" caption="Generate new reviewer access key" class="w500" %}



{% include image.html url="submission/reviewer3.jpg" caption="A reviewer token" class="w300" %}


## Submitter anonymity  {#anonymity}

To reduce potential bias during peer review, some journals now offer manuscript depositors the option of "double-blind" peer review, where a depositor remains anonymous to the reviewer. GEA supports "double-blind" peer review of private data sets by redacting certain metadata fields which would inevitably reveal the submitter's identity, namely, [IDF fields](/gea/metadata-e.html#idf_tags) start with "Person" (name and email address), "PubMed" and "Publication" (pubmed ID and DOI). The redaction is done when a submitter chooses double-blind option and only applies when a reviewer is accessing the GEA experiment of interest, so the GEA submitter (using his/her dedicated D-way login) will continue to see the full metadata record. Anonymity can also be lifted by re-generating a token without selecting double-blind option, e.g. when the manuscript is submitted to a journal which does not support"double-blind" peer review. Finally, submitter anonymity will be lifted completely once the experiment goes public.

<div class="attention">

GEA automatically redact the IDF fields start with "Person", "PubMed" and "Publication". It is solely submitter's responsibility to remove any submitter-identifibale information in other places such as an owner of Excel file in processed data.

</div>


{% include image.html url="submission/reviewer7.jpg" caption="IDF fields redacted in double-blind option" class="w300" %}

