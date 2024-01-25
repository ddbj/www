---
layout: tabbed_indexed_content
service_name: BioSample
title: BioSample Submission
category: biosample
current_tab: submission
lang: en
---

<div class="attention" markdown="1">
Submission of research data from human subjects
: <span class="red">For submitting data from human subjects (human data) to the databases of DDBJ center, it is submitter's responsibility to ensure that the dignity and right of human subject are protected in accordance with all applicable laws, ordinances, guidelines and policies of submitter's institution. In principle, make sure to remove any direct personal identifiers of human subjects from your data to be submitted. Before submitting human data, read the "[Submission of research data from human subjects](/policies-e.html#submission-of-human-data)".</span>
</div>

## Create a new sample submission  {#create-new-sample-submission}

Obtain a [submission account](/account-e.html).

Move to the Biosample submission page from the "Biosample" menu at the top. Create a new sample submission by clicking the \[New submission\] button.

<div class="attention">
The maximum number of samples per submission is 1,000. If you have more than 1,000 samples, please create multiple submissions.
</div>

<div class="attention">
If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
</div>

{% include image.html url="books/hbs-01.jpg" caption="Create a new sample submission" class="w400" %}

To submit a BioSample, enter content from left to right tabs.

For BioSample information fields, please see the [BioSample information fields](/biosample/sample-info-e.html).

{% include image.html url="books/hbs-02.jpg" caption="Submit new samples" class="w450" %}

Select a sample type in the "SAMPLE TYPE". 

In the "SAMPLE TYPE", select an appropriate package according to the type of sample or sequence. Enter required and optional sample attributes provided by a selected package. 

* See "[Sample Information](/biosample/sample-info-e.html#Sample-type)" regarding how to select a package.
* See "[Sample attributes](/biosample/attribute-e.html)" regarding sample attributes.
* More than one sample can be submitted in single submission.
* Single submission can not have samples of different packages.

{% include image.html url="books/hbs-03.jpg" caption="Select a sample package" class="w450" %}

Download a template text file according to the selected package. User-defined attributes can be added to the rightmost column.

{% include image.html url="books/hbs-04.jpg" caption="Download a text file for entering sample attributes" class="w450" %}

## Enter sample attributes  {#enter-sample-attributes}

* [BioSample attribute list and explanation](/biosample/attribute-e.html)
* [Example submission files](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

A text file is separated by tab and can be opened and editted in spreadsheet editor (e.g. Excel®). Attribute names are in a header line. Attributes with "\*" are required.  
From second lines, enter one sample per line. 

{% include image.html url="books/bs-tsv.jpg" caption="Enter samples in Excel" class="w500" %}

<div class="attention">
In one submission, samples can be submitted as 1 sample - 1 line in sample attributes tab-delimited text file.
</div>

### Missing value reporting  {#missing-value-reporting}

[The International Nucleotide Database Collaboration (INSDC)](https://www.insdc.org/submitting-standards/missing-value-reporting) have developed a standardised missing/null value reporting language to be used where a value of an expected format for sample information reporting can not be provided. Submitters are strongly encouraged to always provide true values of expected formats. In cases where this information cannot be provided (e.g., pathogen samples for which this information would lead to identifiability of a human) or is not relevant (e.g., study of a model organism lab stock or an established cell line), it is recommended to declare an appropriate exemption using one of the reporting level terms of the extended INSDC "missing value" reporting standards (e.g. "missing: control sample"). If these reporting level terms are not appropriate, enter "missing", "not collected" or "not provided".

To facilitate an understanding of the supported terms we enclose a table with the missing/null value terms and their definitions.

Please use the following standardised missing value vocabulary only if a true value of an expected format for a mandatory field is missing. If a true value is missing for a recommended or an optional field then these fields should not be used for reporting at all.

INSDC missing value reporting terms ([INSDC website](https://www.insdc.org/submitting-standards/missing-value-reporting))

<table>
  <tr>
    <th>INSDC term (top level)</th>
    <th>INSDC term (lower level)</th>
    <th>Definition</th>
    <th>INSDC term (reporting level)</th>
    <th>Definition</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan="2" class="borderbtm-sep">not applicable</td>
      <td rowspan="2" class="borderbtm-sep"></td>
      <td rowspan="2" class="borderbtm-sep">information is inappropriate to report, can indicate that the standard itself fails to model or represent the information appropriately</td>
      <td>control sample</td>
      <td>Information is not applicable as the sample represents a negative control sample collected in a lab.</td>
    </tr>
    <tr>
      <td>sample group</td>
      <td>Information is not applicable as the sample represents a group of samples that do not have a single origin. E.g. for co-assembly or transcriptome assembly.</td>
    </tr>
    <tr>
      <td rowspan="6" class="borderbtm-sep">missing</td>
      <td rowspan="3" class="borderbtm-sep">not collected</td>
      <td rowspan="3" class="borderbtm-sep">information of an expected format was not given because it has not been collected</td>
      <td>synthetic construct</td>
      <td>Information does not exist as the sample represents an ab-initio synthetic construct.</td>
    </tr>
    <tr>
      <td>lab stock</td>
      <td>Information was not collected as the sample represents a cultured cell line or model organism under long-term lab control.</td>
    </tr>
    <tr>
      <td>third party data</td>
      <td>Information does not exist as the metadata was not collected or reported in records predating the 2023 agreement. For use in Third PArty data submissions.</td>
    </tr>
    <tr>
      <td>not provided</td>
      <td>information of an expected format was not given, a value may be given at the later stage</td>
      <td>data agreement established pre-2023</td>
      <td>Data agreements were established before the 2023 INSDC standard and metadata can not be provided. A value may be given at a later stage.</td>
    </tr>
    <tr>
      <td rowspan="2" class="borderbtm-sep">restricted access</td>
      <td rowspan="2" class="borderbtm-sep">information exists but can not be released openly because of privacy concerns</td>
      <td>endangered species</td>
      <td>Information can not be reported as the target organism is endangered e.g. on the IUCN red-list.</td>
    </tr>
    <tr>
      <td>human-identifiable</td>
      <td>Information can not be reported as the metadata would make the sample human-identifiable.</td>
    </tr>
  </tbody>
</table>

### Sample attributes validation  {#validation}

Upload the sample attribute file by selecting the file and click the Continue button. The validator checks the uploaded file accoring to the rules and feedbacks the error and warning messages. Submitters can not submit the BioSample unless all errors are resolved.

For validation rules and messages, please see [Validation rules page](/biosample/validation-e.html).

In the following packages, at least one of attributes is required. For example, strain or isolate is mandatory in the Microbe package.  
In the BioSample submission tsv, required attributes are marked with "*", however, at least one required attributes are not marked.  

| Package | 'either-one-mandatory' attributes | 'either-one-mandatory' attributes |
|---|
| Microbe | strain, isolate | isolation_source, host |
| Model.organism.animal | strain, isolate, breed, cultivar, ecotype | age, dev_stage |
| Metagenome.environmental | isolation_source, host ||
| Invertebrate | isolate, breed | isolation_source, host |
| Plant | isolate, cultivar, ecotype | age, dev_stage |
| Virus | host, lab_host ||
| Beta-lactamase | strain, isolate ||
| Pathogen.cl | strain, isolate ||
| Pathogen.env | strain, isolate ||

{% include image.html url="books/hbs-04-2.jpg" caption="BioSample validation.In this example, an error for the future date in the collection_date and a warning for inconsistent countries between geo_loc_name and lat_lon of the sample KOME-2 are displayed" class="w450" %}

Check content in the last "OVERVIEW" and submit samples. In the "ATTRIBUTES" area, the submitted sample attribute file can be downloaded.

{% include image.html url="books/hbs-05.jpg" caption="Submit BioSample" class="w450" %}

## Accession numbers  {#accession-numbers}

When creating a new submission, a temporary ID starts with SSUB is assigned. The DDBJ BioSample issues accession numbers with prefix SAMD to the submitted samples passed validation. When an unregistered organism is described in the organism or the locus_tag_prefix has values, accession numbers are issued after curator review. You can view status and accession numbers of submitted samples in your [submission account](https://ddbj.nig.ac.jp/D-way/).

<div class="attention">
- Do NOT cite a temporary ID starts with SSUB in references.
- Do not double submit the samples which have been registered to EBI and NCBI.
</div>

## Release of BioSample {#sample-release} 

You can select the following options. Hold date cannot be set for BioSample.

- Release immediately following curation
- Release when referenced data is published

The submitted sample data can be kept private. Sample data are automatically released when the linked DDBJ/DRA/GEA/MetaboBank record(s) is published. The release of the BioSample record does not trigger the release of private DDBJ/DRA/GEA/MetaboBank record(s) referencing this BioSample accession. The release of the BioSample record does trigger the release of referencing BioSample in derived_from attributes.

FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html)

## Update BioSample  {#update-biosample}

Registered samples can be updated. Please inform us points to be updated through the [contact form](/contact-ddbj-e.html) so that we will update the samples. If you want to update sample attributes, please attach the updated attribute tsv file to the email replying to the accession number notification email. You can [download the attribute tsv file at D-way](#accession-numbers).  
You may check the updated samples by [downloading the updated attribute tsv file at ATTRIBUTES](#accession-numbers).

{% include image.html url="books/bs-tsv-dl.jpg" caption="Download the BioSample attributes tsv file" class="w450" %}
