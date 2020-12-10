---
layout: indexed_content
title: Sequence data included in patent applications
category: ddbj
current_tab: other
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index-e.html
  - id: submission
    title: Submission
    url: /ddbj/submission-e.html
    children:
      - title: Before Submission
        url: /ddbj/submission-e.html
      - title: Web submission
        url: /ddbj/web-submission-e.html
      - title: Mass Submission
        url: /ddbj/mss-e.html
      - title: Data Update
        url: /ddbj/update-e.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=en
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-e.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=en
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file-e.html
    children:
      - title: Feature key
        url: /ddbj/features-e.html
      - title: Qualifier key
        url: /ddbj/qualifiers-e.html
      - title: Organism qualifier
        url: /ddbj/organism-e.html
      - title: Description of Location
        url: /ddbj/location-e.html
      - title: Protein Coding Sequence
        url: /ddbj/cds-e.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode-e.html
      - title: Codes Used in Sequence Description
        url: /ddbj/code-e.html
      - title: Example of Submission
        url: /ddbj/example-e.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories-e.html
    children:
      - title: Data Submission from Genome Project
        url: /ddbj/genome-e.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype-e.html
      - title: WGS
        url: /ddbj/wgs-e.html
      - title: Metagenome Assembly
        url: /ddbj/metagenome-assembly-e.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome-e.html
      - title: CON
        url: /ddbj/con-e.html
      - title: GSS
        url: /ddbj/gss-e.html
      - title: HTG
        url: /ddbj/htg-e.html
      - title: Submission of environmental sequences
        url: /ddbj/environmental-e.html
      - title: ENV
        url: /ddbj/env-e.html
      - title: TLS
        url: /ddbj/tls-e.html
      - title: Data Submission from Transcriptome Project
        url: /ddbj/transcriptome-e.html
      - title: TSA
        url: /ddbj/tsa-e.html
      - title: EST
        url: /ddbj/est-e.html
      - title: HTC
        url: /ddbj/htc-e.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data-e.html
      - title: MGA
        url: /ddbj/mga-e.html
lang: en
---

DDBJ Center provides some services to search and to browse sequence data　that are included in patent applications.

Please note that DDBJ is not responsible for any issues that may arise　from use of sequence data.  
See also [sitepolicy and Disclaimer](/policies-e.html).

## Nucleotide sequence data <a name="nt"></a>

The nucleotide sequence data included in patent applications that are
collected and processed by [the Japan Patent Office](//www.jpo.go.jp/)
(JPO) and [the Korean Intellectual Property Office](//www.kipo.go.kr/)
(KIPO)<sup>*</sup> are imported into [the International Nucleotide
Sequence Database Collaboration](/insdc-e.html#insd) (INSD) via DDBJ and
are made available to the public.  
Similarly, the nucleotide sequence data collected by [the European
Patent Office](//www.epo.org/index.html) (EPO) and [the United States
Patent and Trademark Office](https://www.uspto.gov/) (USPTO) are
imported into INSD via EMBL-Bank/ENA and GenBank, respectively.  
\* The procedure to import KIPO sequence data into INSD through DDBJ was
started from February 2008.  
You can distinguish the nucleotide sequence data included in patent
applications by [prefix](/documents/prefix-e.html) of [accession
numbers](/documents/accessions-e.html).

The nucleotide sequence data included in patent applications can be
searched or browsed from the following DDBJ services. Please note that
these services do not differentiate data from JPO, KIPO, EPO, USPTO as
reference datasets.

[anonymous FTP](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/ddbj/)  
: iles containing "ddbjpat" in their names under the directory.

[getentry](http://getentry.ddbj.nig.ac.jp/top-e.html)  
: elect [DDBJ/GenBank/EMBL] from [DNA Database].

[ARSA](http://ddbj.nig.ac.jp/arsa/advanced_search?lang=en)  
: elect "PAT" in [Division] and "DNA", "RNA", "mRNA" and/or "rRNA"
in [Molecular Type] as needed, then you can search data targeted
to [PAT division](/ddbj/flat-file.html#Locus) in DDBJ/GenBank/EMBL.

[BLAST](http://blast.ddbj.nig.ac.jp/blastn?lang=en)  
: elect [DDBJ ALL (DDBJ periodical release + daily updates)], then
select [Patent] in [Other divisions].

## Amino acid sequence data <a name="aa"></a>

The amino acid sequence data included in patent applications that are
collected and processed by JPO and KIPO are made available through
DDBJ.  
Similarly, the amino acid sequence data collected by EPO and USPTO are
made available by EBI and NCBI, respectively.

The amino acid sequence data included in patent applications can be
searched and browsed from the following services at DDBJ:

[anonymous FTP](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/patent/)  
: Files under the directory, available only from JPO and KIPO.

[getentry](http://getentry.ddbj.nig.ac.jp/top-e.html)  
: Select [Patent] from [Protein Database], available only from JPO
and KIPO.

[ARSA](http://ddbj.nig.ac.jp/arsa/?lang=en)  
: Select "PAT" in [Division] and "PRT" in [Molecular Type],
available only from JPO and KIPO.

[BLAST](//blast.ddbj.nig.ac.jp/blastp?lang=en)  
: Select [Patent] from [Data Sets] and select JPO, KIPO, USPTO or
EPO as required.
