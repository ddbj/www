---
layout: indexed_content
title: Databases and Data Submission Systems
lang: en
---

## Databases and Data Submission Systems {#db}

The table of databases and data submission systems of the Bioinformation and DDBJ Center. 

<table>
  <thead>
    <tr>
      <th>Database</th>
      <th>Description</th>
      <th>Registration site</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/ddbj/index-e.html">Annotated/Assembled Sequences (DDBJ)</a></td> 
      <td>For flatfile, a counterpart of GenBank (INSDC).</td>
      <td>
      &bull; <a href="/ddbj/web-submission-e.html">NSSS</a>: Nucleotide Sequence Submission System via web form.<br>
      &bull; <a href="/ddbj/mss-e.html">MSS</a>: Data submission system for large scale sequences, not suitable for NSSS.<br>
      &bull; <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a>: An automatic annotation service for prokaryotic genomes.<br>
      </td>      
    </tr>
    <tr>
      <td><a href="/dra/index-e.html">DDBJ Sequence Read Archive (DRA)</a></td> 
      <td>For raw sequencing data and alignment information from high-throughput sequencing platforms including NGS (INSDC).</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/bioproject/index-e.html">BioProject</a></td> 
      <td>Research projects (INSDC)</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/biosample/index-e.html">BioSample</a></td> 
      <td>Biological source materials and samples (INSDC)</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/gea/index-e.html">Genomic Expression Archive (GEA)</a></td> 
      <td>Functional genomics data such as gene expression, epigenetics and SNP genotyping array.</td> 
      <td><a href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></td> 
    </tr>
    <tr>
      <td><a href="/metabobank/index-e.html">MetaboBank</a></td> 
      <td>A public repository for metabolomics data.</td> 
      <td><a href="/metabobank/submission-e.html">MetaboBank submission form</a></td> 
    </tr>
    <tr>
      <td><a href="/jga/index-e.html">Japanese Genotype-phenotype Archive (JGA)</a></td> 
      <td>Individual-level human genetic and de-identified phenotypic data which require controlled-access.</td> 
      <td><a href="/jga/submission-e.html">JGA Submission</a></td> 
    </tr>
  </tbody>
</table>

Depending on your research purposes and data categories, you need to submit your data to some of the above databases.

## Small-scale Nucleotide Sequence Data Submissions {#small}

We recommend you to submit your data via web form, [NSSS](/ddbj/web-submission-e.html). 
In the following cases, please use [MSS](/ddbj/mss-e.html).

* many number of sequences (greater than 100) 
* long sequences (greater than 500 kb)
* complex submission containing many features (more than 30).
* [WGS](/ddbj/wgs-e.html), [CON](/ddbj/con-e.html), [TSA](/ddbj/tsa-e.html), [TLS](/ddbj/tls-e.html), [HTC](/ddbj/htc-e.html), [HTG](/ddbj/htg-e.html), [EST](/ddbj/est-e.html), [GSS](/ddbj/gss-e.html) and STS submissions

## Large-scale Nucleotide Sequence Data Submissions {#large}

In the following cases, you need to submit your data to DRA and/or MSS after registering BioProject and BioSample. 

* [Data Submission from Genome Project](/ddbj/genome-e.html)
  * Genome sequences from Bacteria or Archaea, [DFAST](https://dfast.ddbj.nig.ac.jp/)
  * [Metagenome assembly](/ddbj/metagenome-assembly-e.html) 
  * [Single amplified genome](/ddbj/single-amplified-genome-e.html)
* [Data submission from transcriptome project](/ddbj/transcriptome-e.html)
* Gene expression analysis
* [Targeted Locus Study (TLS)](/ddbj/tls-e.html), large-scale analysis for OTU profiling.

In cases of [Transcriptom Shotgun Assembly (TSA)](/ddbj/tsa-e.html), you need to submit your data to both DRA and MSS after registering BioProject and BioSample.    
For gene expression analysis by comparative measurements of transcript sequences, you need to submit your data to DRA after registering BioProject and BioSample. We also recommend you to submit processed data to GEA.    
Most journals request processed data deposition to [GEO/ArrayExpress/GEA](https://www.nature.com/sdata/policies/repositories#omics).

## Biological Data other than Nucleotide Sequences {#non-nuc}

* We accept microarray data at [GEA](/gea/index-e.html).
* DDBJ can not accept any amino acid sequences without underlying nucleotide submission. When you want to submit amino acid sequences only, please consider submitting them to [UniProt](https://www.uniprot.org/).    
[FAQ: How to submit amino acid sequences?](/faq/ja/how-to-submit-amino-acid-seq-e.html)    
* In cases of research data from human subjects, we might be able to accept your data at [JGA](/jga/submission-e.html). To submit your data to JGA, a data submission application to [NBDC](https://humandbs.biosciencedbc.jp/data-submission) needs to be approved.

## Nucleotide Sequence Data Unacceptable for DDBJ {#non-acceptable}

* Sequence containing a mix of genomic DNA and RNA transcript.
* Sequences without a physical counterpart (consensus sequences).
* Sequences shorter than 100 nucleotides (since June 2021).
* Sequence consisting only of primer (since June 2021).







