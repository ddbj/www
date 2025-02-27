---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Submission Overview
category: gea
current_tab: submission overview
lang: en
---

<div class="attention" markdown="1">
<span class="red">Submission of research data from human subjects</span>  
: For submitting data from human subjects (human data) to the databases of DDBJ center, it is submitter's responsibility to ensure that the dignity and right of human subject are protected in accordance with all applicable laws, ordinances, guidelines and policies of submitter's institution. In principle, make sure to remove any direct personal identifiers of human subjects from your data to be submitted. Before submitting human data, read the "[Submission of research data from human subjects](/policies-e.html#submission-of-human-data)"
</div>

GEA accepts all functional genomics data generated from microarray or next-generation sequencing (NGS) platforms. Regarding how to submit data, please refer to [Submission navigation](/submission-navigation-e.html).

<table class="gea">
   <thead>
      <tr>
         <th>GEA accepts</th>
         <th>GEA does not accept</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <p>Studies concerning quantitative gene expression, gene regulation, epigenetics, SNP genotyping or other functional genomics studies.</p>
            <p>Examples include:</p>
            <ul>
               <li>mRNA profiling, RNA-seq</li>
               <li>small RNA profiling, miRNA-seq</li>
               <li>ChIP-Seq</li>
               <li>HiC-seq</li>
               <li>methyl-seq, bisulfite-seq</li>
               <li>SNP microarray genotyping</li>
            </ul>
            <p>If you have questions about whether GEA can accept your data type, please <a href="/contact-ddbj-e.html">contact us</a>.</p>
         </td>
         <td>
            <ul>
               <li>human data that require controlled access (submit to <a href="/jga/index-e.html">JGA</a>)</li>
               <li>transcript assemblies (submit to <a href="/dra/submission-e.html">DRA</a> and <a href="/ddbj/tsa-e.html">TSA of DDBJ</a>)</li>
               <li>whole genome sequencing (submit to <a href="/dra/submission-e.html">DRA</a> and <a href="/ddbj/wgs-e.html">WGS of DDBJ</a> )</li>
               <li>metagenomic sequencing (submit to <a href="/dra/submission-e.html">DRA</a> and <a href="/ddbj/environmental-e.html">ENV of DDBJ</a>)</li>
               <li>resequencing, variation or copy number projects (submit to <a href="/dra/submission-e.html">DRA</a>, and human data to <a href="/togovar/submission-e.html">TogoVar-repository</a> and non-human data to <a href="https://www.ebi.ac.uk/eva/">EBI Variation Archive</a>)</li>
               <li>survey sequencing, whole exome (submit to <a href="/dra/submission-e.html">DRA</a>)</li>
               <li>metabolomics data (submit to <a href="/metabobank/submission-e.html">MetaboBank</a>)</li>
               <li>proteomics data (submit to <a href="https://jpostdb.org/">jPOST</a>)</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

## Submission files {#submission-files}

### Microarray experiment {#array}

[Submit microarray experiment](/gea/submit-array-e.html)

- [Metadata IDF and SDRF](/gea/metadata-e.html)
- [Raw data](/gea/datafile-e.html#array_data)
- [Processed data](/gea/datafile-e.html#array-proc)
- [Array design file (if not registered)](/gea/adf-e.html)

### Sequencing experiment {#seq}

[Submit sequencing experiment](/gea/submit-sequence-e.html)

- [Metadata IDF and SDRF](/gea/metadata-e.html)
- [Raw data (should be pre-registered to](/gea/datafile-e.html#seq_raw) [DRA](/dra/submission-e.html))
- [Processed data](/gea/datafile-e.html#seq_proc)

## Accession numbers {#accession}

Experiments and Array designs in GEA are assigned unique accession numbers (n is a number).

- E-GEAD-n for experiments
- A-GEAD-n for array designs

## Data release {#release}

The data can be kept private until your paper is published. You can set the hold date for a maximum of 4 years and can change it. Registered records are released according to the [Data Release Policy](/insdc/data-release-policy-e.html).

FAQ: [How to request data release?](/faq/en/request-release-e.html)

## Reviewer access {#reviewer-access}

Submitters are able to generate an access token for journal reviewers after a pre-published experiment or array design is loaded into the GEA database. For instructions, see [reviewer accesss page](/gea/reviewer-access-e.html) for how to obtain an access token and communicate it to journal editors and reviewers.

## Update  {#update}

After submitting data to GEA, please [contact us](https://forms.gle/Bqcrh6PBniA5eRPU6) to update or withdraw your data.
