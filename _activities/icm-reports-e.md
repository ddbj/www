---
layout: 年表
title: The Reports for International Collaborators Meetings
pathname: icm-reports-e
category: _activities
lang: en
---

## 2019 <a name="2019"></a>

<div>

### 32nd ICM: May 15-17 2019, Hinxton, UK

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ Center,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2019, the meeting was held at EBI, 15-17 May, to discuss practical
matters to maintain and update nucleotide sequence data archives;
[DDBJ](/index-e.html)、[ENA](//www.ebi.ac.uk/ena/)、[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html)
and Sequence Read Archive (SRA).  
The outcomes of the meeting are summarized below.

#### The Items Discussed and To Be Studied

  - Classification of metagenome data  
    The methods to assemble and to analyse metagenomic sequences have
    been developed, and the metagenomic data submissions are increasing.
    We classified metagenomic data into following three levels,
      - 1\) primary metagenome assemblies with environmental samples
      - 2\) binned metagenome assemblies with binned samples
      - 3\) MAGs with MIMAG samples (See [Nat. Biotechnol. 35:725-731
        (2017)](//www.nature.com/articles/nbt.3893))
    We will accept 1) and 2) into SRA Analysis objects and 3) into flat
    files.
  - "Organism name" for negative controls  
    For control experiment, submitters like to use non-organism for
    BioSample. So, we discuss to add "organism name” for non-organism.
  - Genome sequences with suspicious descriptions of origin species  
    We discussed how to deal with cases that Average Nucleotide Identity
    analysis indicates the correspondence between the genome sequence
    and the described species name is suspicious.

#### Discussion Items Related to SRA Data <a name="2019-sra"></a>

  - INSDC partners confirmed, in cases of analyses by single-cell
    sequencing or others, we can accept descriptions of a representative
    sample instead of huge numbers of individual descriptions for
    BioSample. Descriptions for individual samples are accepted into
    GEO, ArrayExpress, and GEA, if necessary.
  - In cases of genome submission using PacBio, we will ask submitters
    to provide motif summary files for methylation analyses.
  - Currently, SRA Analysis object is not always shared among INSDC
    members. We discussed how to share SRA Analysis object.

#### Forthcoming changes in The DDBJ/ENA/GenBank Feature Table: Definition <a name="2018-ft"></a>

Some parts of applied in advance to
[/gap\_type](/ddbj/qualifiers-e.html#gap_type) and
[/linkage\_evidence](/ddbj/qualifiers-e.html#linkage_evidence)
qualifiers, [AGP
Specification](//www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/)
will be revised to [version
2.1](//www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/proposed-version-2-1/).
Related to the revision, controlled vocabularies (CV) for
[/linkage\_evidence](/ddbj/qualifiers-e.html#linkage_evidence) qualifier
will be modified. 'proximity ligation' will be added to CV and 'strobe'
will be no longer used.  
The modifications will be applied after October 2019 with the next
revision of [Feature Table Definition](/ddbj/full_index-e.html).

#### Data Access Policy

  - Preprint and data publication  
    Recently, many researchers disclose their results via preprint
    servers and INSDC accession numbers are often described in
    preprints. INSDC members agreed to release the sequence data when
    INSDC accession numbers are found in preprints. Related to this, we
    revised [INSDC Status Document](/insdc-status-e.html).
  - Access and Benefit-Sharing (ABS)  
    The UN has established a Preparatory Committee that is active in
    developing a resolution around Biodiversity Beyond National
    Jurisdiction ([BBNJ](//www.un.org/bbnj/)). This committee will
    investigate about systems for ABS. INSDC members have also been
    asked for their opinions from various people concerned. Related to
    the issue on [2018](#2018), the Conference of the Parties Convention
    on Biological Diversity 14 (COP14) and Nagoya protocol, INSDC will
    state about importance of [our policy](/insdc-e.html#policy), free
    and unrestricted access to all of the data records.
  - NCBI shifting SRA data to cloud  
    We discussed the handling tasks regarding the policy of [NCBI
    shifting SRA data to
    cloud](//www.nih.gov/news-events/news-releases/nih-makes-strides-accelerate-discoveries-cloud).

</div>

## 2018 <a name="2018"></a>

<div>

### 31st ICM: May 15-17 2018, Bethesda, USA

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ Center,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2018, the meeting was held at NCBI, 15-17 May, to discuss practical
matters to maintain and update nucleotide sequence data archives;
[DDBJ](/index-e.html)、[ENA](//www.ebi.ac.uk/ena/)、[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html)
and Sequence Read Archive (SRA).  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - Format expansions for accession numbers and for /protein\_id.  
    By the end of 2018, INSDC will expand the accession number formats
    as follows;
      - For bulk sequence data, [WGS](/ddbj/wgs-e.html),
        [TSA](/ddbj/tsa-e.html) and [TLS](/ddbj/tls-e.html), currently
        using a "4+2+6/7/8" format ( four-letter prefix and two digits
        for set version followed by six digits), the new format will be
        a six-letter prefix and a two-digit set version number followed
        by 7, 8, or 9 digits ("6+2+7/8/9" format); for example,
        AAAAAA020000001.
      - For conventional sequence data, currently using a "2+6" format
        (two-letter prefix followed by six digits) and a "1+5" format,
        the new format will be two-letter prefix followed by eight
        digits ("2+8" format).
      - For /protein\_id, currently using a "3+5" format (three-letter
        prefix followed by five digits), the new format will be
        three-letter prefix followed by seven digits ("3+7" format).
  - International Protein Nomenclature Guidelines are introduced.  
    INSDC agreed to recommend [the international protein nomenclature
    guidelines](//www.ncbi.nlm.nih.gov/genome/doc/internatprot_nomenguide/)
    to submitters of DDBJ, ENA and GenBank. The guidelines were revised
    and reorganized from previous guidelines of
    [UniProt](//insideuniprot.blogspot.com/2018/07/new-guidelines-to-help-with-protein.html)t
    and NCBI by NCBI, EBI, the Protein Information Resource and the
    Swiss Institute for Bioinformatics. The guidelines are exclusively
    focused on nomenclature. The future changes of guidelines can be
    tracked in
    [GitHub](https://github.com/ncbi/International-Protein-Nomenclature-Guidelines).See
    also [NCBI
    Insights](//ncbiinsights.ncbi.nlm.nih.gov/2018/08/01/new-international-protein-naming-guidelines-promote-clarity-consistency/)
    and [Inside
    UniProt](//insideuniprot.blogspot.com/2018/07/new-guidelines-to-help-with-protein.html).
  - Increasing metagenomic data  
    Assembling/analyzing methods for metagenomic approaches are
    progressed and data submissions of them are increased. We discussed
    to accommodate with metagenomic data. Both BioSample and flatfile
    will be expanded to deal with minimum information about a single
    amplified genome (MISAG) and a metagenome-assembled genome (MIMAG)
    as requested by the Genomic Standards Consortium.  
    See [Nat. Biotechnol. 35:725-731
    (2017)](//www.nature.com/articles/nbt.3893) about MIMAG and MISAG in
    detail.

#### Forthcoming changes in The DDBJ/ENA/GenBank Feature Table: Definition <a name="2018-ft"></a>

The following items will be applied after October 2018 with the next
revision of [Feature Table Definition](/ddbj/full_index-e.html), if not
otherwise specified.

  - A new qualifier,
    [/metagenome\_source](/ddbj/qualifiers-e.html#metagenome_source),
    will be available for [source](/ddbj/features-e.html#source)
    feature.  
    In cases of metagenomic data, the /metagenome\_source is mandatory
    when [/organism](/ddbj/qualifiers-e.html#organism) does not show
    ”xxx metagenome” or the like. The /metagenome\_source must contain
    [the word "metagenome" and must exist in the taxonomy
    database](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169).  
    /metagenome\_source requires
    [/environmental\_sample](/ddbj/qualifiers-e.html#environmental_sample)
    qualifiers.
  - Definition of [/EC\_number](/ddbj/qualifiers-e.html#EC_number)
    qualifier qualifier will be slightly changed.

#### Data Access Policy

  - For COP14 and the Nagoya Protocol  
    DDBJ reported the results of the Conference of the Parties
    Convention on Biological Diversity 14 (COP14) for their opinion on
    whether “digital sequence information” should be included in the
    Nagoya Protocol. [The Science Council of
    Japan](http://www.scj.go.jp/ja/info/kohyo/pdf/kohyo-24-t258e.pdf)
    and [the International Chamber of
    Commerce](https://cdn.iccwbo.org/content/uploads/sites/3/2017/10/ICC-digital-sequence-information-and-the-nagoya-protocol.pdf)
    do not favor this action.  
    We, INSDC, have [an existing
    policy](http://www.insdc.org/policy.html) of free and unrestricted
    access to all of the data records.
  - For GDPR  
    In May 2018, the European General Data Protection Regulations (GDPR)
    have come into force. ENA presented the work and the changes that
    arise from these with respect to ENA operations.
  - NGS Quality Scores  
    Most of SRA storage is taken up by quality scores, however, the
    sequencing technologies are going to natural progression and
    precisions of base calling do not impact to assemblies or analyses.
    Besides, to save storage of users during analyses and to transfer
    SRA data from submitters and to users more easier, we consider that
    it is preferable to remove quality scores from SRA data. We would
    like to discuss about how to accept future NGS data with major
    research communities including vendors, tool maintainers and users.

</div>

## 2017 <a name="2017"></a>

<div>

### 30th ICM: May 24-26 2017, Mishima, Japan

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year  
In 2017, the meeting was held at DDBJ, 24-26 May, to discuss practical
matters to maintain and update nucleotide sequence data archives;
[DDBJ](/index-e.html), [ENA](//www.ebi.ac.uk/ena/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive.  
We also hold [a symposium](/files/pdf/30th/NIG_and_DDBJ_Symposium-e.pdf)
commemorating the 30th anniversary.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - Changes for organism names
    
      - Unidentified bacteria or fungi  
        In cases of sequence submissions derived from unidentified
        bacteria or fungi, we mainly requested to describe organism
        names (/organism qualifier) in the format, "\[genus name\] sp.
        \[ID\]" (e.g. "Acetobacter sp. ITDI2.1"). For the future
        submissions, describe in the simple format, "\[genus name\] sp."
        (e.g. "Acetobacter sp.").  
        In this regard, however, for whole genomes or proposing new
        species, describe organism names in the format, "\[genus name\]
        sp. \[ID\]", ongoingly.  
        See also [here](/ddbj/organism-e.html#unidentified) in detail.
      - Influenza viruses  
        In cases of sequence submissions derived from influenza viruses,
        we requested to describe virus names (/organism qualifiers) in
        the format, "Influenza \[A/B/C/D\] virus (\[strain
        name\](\[serotype\]))" (e.g. "Influenza A virus
        (A/chicken/Tokyo/2007(H7N7))").After January 2018, we accept
        them as "Influenza \[A/B/C/D\] virus" (e.g. "Influenza A
        virus").  
        See also [here](/ddbj/organism-e.html#virus) in detail.

  - Targeted Locus Study (TLS) data  
    Since [2016](/activities/icm-reports-e.html#2016), INSDC has started
    to accept [TLS](/ddbj/tls-e.html) data.  
    After discussion about some practical issues at the meeting, DDBJ
    will start accepting TLS data submission.

  - Targets of SRA storage  
    We confirmed each other the ways to accept data accompanied with
    read sequences, such as BioNano mapping data, methylation,
    antibiogram and so on.

  - INSDC annotation  
    We will start discussion to sort out relationship between annotation
    using features/qualifiers in INSDC and general format using
    [Sequence
    Ontology](http://www.sequenceontology.org/)/[GFF3](//github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md).

  - [Assembly](//www.ncbi.nlm.nih.gov/assembly/) (Genome Collection)  
    To enhance the collaboration with Assembly since
    [2012](/activities/icm-reports-e.html#2012), we discussed some
    practical issues.  
    Related to this, we confirmed that we should caution during sequence
    submissions when the sizes of genome sequences were deviated from
    the closely related species.

#### Forthcoming Changes in The DDBJ/ENA/GenBank Feature Table: Definition <a name="2016-ft"></a>

The following items were proposed to be applied for [Feature Table
Definition](/ddbj/full_index-e.html) from the next revision.

  - A new qualifier for [source](/ddbj/features.html#source) feature,
    [/submitter\_seqid](/ddbj/qualifiers-e.html#submitter_seqid) will be
    available.
  - Addition of two controlled vocabularies, "scaRNA" and "pre\_miRNA",
    for [/ncRNA\_class](/ddbj/qualifiers-e.html#ncRNA_class) qualifier.
  - Addition of a controlled vocabulary, "contamination", for
    [/gap\_type](/ddbj/qualifiers-e.html#gap_type) qualifier.
  - Addition of some controlled vocabularies for
    [/type\_material](/ddbj/full_index-e.html#type_material) qualifier.

</div>

## 2016 <a name="2016"></a>

<div>

### 29th ICM: May 16-18 2016, Hinxton, UK

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2016, the meeting was held at EBI, 16-18 May, to discuss practical
matters to maintain and update nucleotide sequence data archives;
[DDBJ](/index-e.html), [ENA](//www.ebi.ac.uk/ena/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - NGS Quality Scores  
    Currently, 70-80% of SRA storage is for quality scores, however,
    most of bioinformatic tools do not use them. For the long haul, we,
    INSDC, prefer to round down (i.e. binning or 8 binning) or to throw
    away quality scores for inhibition of SRA data increasing. But, the
    needs for quality scores might be different depending on research
    areas. We would like to discuss about how to accept future NGS data
    with major research communities, broadly.
  - SRA Objects VS BioProject/BioSample  
    The relationships between SRA study object and BioProject and
    between SRA sample object and BioSample were considered.
  - Introduction of Targeted Locus Study (TLS) data  
    GenBank has started to accept submissions of bulk sequence data
    including 16S rRNA or some other targeted loci to be clustered into
    operational taxonomic unit as TLS data with four-letter prefix
    accession numbers like as [WGS](/ddbj/wgs-e.html).
  - INSDC Data Status  
    We discussed practical procedures about data exchange among
    databanks, especially, [INSDC status](/insdc-status-e.html) for bulk
    data like [WGS](/ddbj/wgs-e.html) and [TSA](/ddbj/tsa-e.html) and
    also for SRA, BioProject and BioSample records.
  - [Assembly](//www.ncbi.nlm.nih.gov/assembly/) (Genomic Collection)  
    To enhance the collaboration with Assembly since
    [2012](/activities/icm-reports-e.html#2012), we discussed some
    practical issues.

#### Forthcoming Changes in The DDBJ/ENA/GenBank Feature Table: Definition <a name="2016-ft"></a>

The following items were proposed to be applied for [Feature Table
Definition](/ddbj/full_index-e.html) from the next revision or later.

For [rep\_origin](/ddbj/features-e.html#rep_origin) feature, the
[/function](/ddbj/qualifiers-e.html#function) qualifier will be
available.

Expansion of definition of
[regulatory](/ddbj/features-e.html#regulatory) feature to describe
regulation of replication.

Addition of some controlled vocabularies for
[/regulatory\_class](/ddbj/qualifiers-e.html#regulatory_class)
qualifier.

Addition of one feature key and one qualifier key to clarify current
descriptions of miscellaneous features.

  - propeptide feature to describe intermediate of peptide maturation
  - /recombination\_class qualifier for
    [misc\_recomb](/ddbj/full_index-e.html#misc_recomb) feature

</div>

## 2015 <a name="2015"></a>

<div>

### 28th ICM: May 19-21 2015, Bethesda, USA

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2015, the meeting was held at NCBI, 19-21 May, to discuss practical
matters to maintain and update nucleotide sequence data archives;
[DDBJ](/index-e.html), [ENA](//www.ebi.ac.uk/ena/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - Handling Human Data  
    Following kind introduction of recent activities at
    [NIH](//www.nih.gov/); [HeLa
    access](//grants.nih.gov/grants/guide/notice-files/NOT-OD-14-080.html),
    [Genomic Data Sharing (GDS)](http://gds.nih.gov/) policy, [data
    analysis on cloud
    computing](//grants.nih.gov/grants/guide/notice-files/NOT-OD-15-086.html)
    and so on, we discussed how to treat data submissions derived from
    human subjects at each databank.
  - INSDC Data Status  
    We discussed practical procedures about data exchange among
    databanks, especially, [INSDC status](/insdc-status-e.html),
    [replaced](/insdc-status-e.html#replaced) data between databanks and
    [suppressed](/insdc-status-e.html#suppressed) data of SRA.
  - [Assembly](//www.ncbi.nlm.nih.gov/assembly/) (Genomic Collection)  
    To enhance the collaboration with Assembly since
    [2012](/activities/icm-reports-e.html#2012), we discussed some
    practical issues.
  - Rapid Growth of SRA Data  
    To accommodate rapid increase of SRA data, NCBI and EBI introduced
    their frameworks of data compression; cSRA ([compressed
    SRA](//ftp.ncbi.nlm.nih.gov/sra/doc/csra-fileformat.ppsx)) and
    [CRAM](//www.ebi.ac.uk/ena/software/cram-toolkit), respectively.  
    We discussed how to apply lossy/lossless compression appropriately.
  - Misidentification of Species of Microorganism Genomes  
    Following an academic paper, [Federhen S
    (2015)](//nar.oxfordjournals.org/content/43/D1/D1086), and [GenBank
    microbial genomic taxonomy workshop (12-13 May
    2015)](//standardsingenomics.biomedcentral.com/articles/10.1186/s40793-016-0134-1),
    we discussed how to resolve the problem of misidentified genomes.

#### Forthcoming changes in The DDBJ/EMBL/GenBank Feature Table: Definition <a name="2011-ft"></a>

The following items will be applied from October 2015 with the next
revision of [Feature Table Definition](/ddbj/full_index-e.html), if not
otherwise specified.

  - The definition of [unsure](/ddbj/features-e.html#unsure) feature
    will be updated to distinguish clearly from sequencing gap.
  - We are discussing to add some terms for controlled vocabulary of
    /[rpt\_type](/ddbj/qualifiers-e.html#rpt_type) qualifier.  
    Accompanied with this modification, LTR feature will be merged into
    [repeat\_region](/ddbj/features-e.html#repeat_region) feature.
  - [Since 2013](/activities/icm-reports-e.html#2013), a new qualifier,
    /type\_material, is considered to specify type strains, type
    specimens and so on.  
    It is not decided in details and officially applicable period of the
    qualifier at DDBJ.

</div>

## 2014 <a name="2014"></a>

<div>

### 27th ICM: May 20-22 2014, Mishima, Japan

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2014, the meeting was [held at DDBJ](/news/en/wn140520-e.html), 20-22
May, to discuss practical matters to maintain and update nucleotide
sequence data archives; [DDBJ](/index-e.html),
[ENA](//www.ebi.ac.uk/ena/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - BioSample database  
    The BioSample database contains descriptions of biological source
    materials used in experimental assays.  
    DDBJ has also started accepting [BioSample](/biosample/index-e.html)
    submissions in early 2014.  
    Following the meetings on
    [2012](/activities/icm-reports-e.html#2012) and
    [2013](/activities/icm-reports-e.html#2013), we discussed action
    items to collect and to share BioSample data at INSDC.

  - Issues about lots of genome submissions, [WGS](/ddbj/wgs-e.html) and
    so on
    
      - Data Exchange  
        We discussed new data formats and an effective way to exchange
        data each other.
      - [Assembly](//www.ncbi.nlm.nih.gov/assembly/) (Genomic
        Collection)  
        Following the meeting on
        [2012](/activities/icm-reports-e.html#2012), we continues
        collaboration with Assembly activities to collect genome
        sequences.
      - About /[protein\_id](/ddbj/qualifiers-e.html#protein_id)  
        Currently, we have so many submissions of similar genomes
        derived from multiple strains of a species etc. In those cases,
        there are many orthologs in CDS features, so, many /protein\_ids
        seem to be redundantly assigned for them. We discussed
        possibilities about new ways of /protein\_id assignment.

#### Changes in SRA XML schema

SRA XML schema version 2.0 continues to be discussed for refactoring SRA
metadata with [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html) data.

#### Forthcoming changes in The DDBJ/EMBL/GenBank Feature Table: Definition <a name="2011-ft"></a>

The following items will be applied from October 2014 with the next
revision of [Feature Table Definition](/ddbj/full_index-e.html), if not
otherwise specified.

  - A new feature, [regulatory](/ddbj/features-e.html#regulatory), and a
    new qualifier,
    /[regulatory\_class](/ddbj/qualifiers-e.html#regulatory_class), will
    be available from December 2014.  
    Following features will be replaced by the new feature; -35\_signal,
    -10\_signal, CAAT\_signal, GC\_signal, TATA\_signal, polyA\_signal,
    attenuator, terminator, promoter, enhancer, RBS.
  - A base code for 'dihydrouridine' of [Modified Base
    Abbreviations](/ddbj/code-e.html#nucleotide-2) and
    /[mod\_base](/ddbj/qualifiers-e.html#mod_base) qualifier, "d" will
    be replaced by "dhu".
  - To be sure using
    [prim\_transcript](/ddbj/full_index-e.html#prim_transcript) and
    [precursor\_RNA](/ddbj/full_index-e.html#precursor_RNA) for RNA
    transcripts other than mRNA, their definitions will be updated
    appropriately.
  - [Since 2013](?page=2013), a new qualifier, /type\_material, is
    considered to specify type strains, type specimens and so on.  
    It is not decided in details and applicable period of the qualifier.

</div>

## 2013 <a name="2013"></a>

<div>

### 26th: May 21-23 2013, Hinxton, UK

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2013, the meeting was held at EBI in UK, 21-23 May, to discuss
practical matters to maintain and update nucleotide sequence data
archives; [DDBJ](/index-e.html), [EMBL-Bank](//www.ebi.ac.uk/embl/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - BioSample database  
    The BioSample database contains descriptions of biological source
    materials used in experimental assays. The purpose of the BioSample
    database is to provide unified storage and access to information
    about biological samples. These samples may have investigation
    information stored in other databases (e.g. nucleotide sequence,
    expression).  
    [Following the meeting on
    2012](/activities/icm-reports-e.html#2012), we discussed action
    items to collect and to share BioSample data at INSDC.  
    DDBJ started to accept [BioSample](/biosample/index-e.html)
    submissions in 2014.
  - Strain level taxonomy ID assignment for microorganism genome
    submission  
    All [organism names](/ddbj/organism-e.html) that are represented in
    the sequence data of INSDC are registered to the taxonomy
    database.  
    [Since 2009](/activities/icm-reports-e.html#2009), taxonomy database
    has considered to terminate assignment of strain level taxonomy ID
    for microorganism genomes.  
    From 2014, we will provide BioSample data instead of strain level
    taxonomy ID, and will terminate to assign strain level taxonomy ID
    for microorganism genomes  
    We reported in detail about this issue in [an academic
    paper](http://standardsingenomics.org/index.php/sigen/article/view/sigs.4851102)

#### Changes related to INSDC submission

  - Relaxation rules to accept [WGS](/ddbj/wgs-e.html) and scaffold
    data  
    Heretofore, INSDC accepted sequences of overlapping reads (not
    including any sequencing gaps) as [WGS](/ddbj/wgs-e.html) entries
    and accepted [AGP
    format](//www.ncbi.nlm.nih.gov/projects/genome/assembly/agp/AGP_Specification.shtml)
    to indicate scaffolds (including sequencing gaps) as
    [CON](/ddbj/con-e.html) entries.  
    Recently, the policy seemed to be out of date, because some of
    software tools for genome assemble support to output scaffold only
    in sequences, not in AGP format. So, we decided to accept sequences
    of scaffolds with gap n's.  
    See also [INSDC standards for genome assembly
    submission](/ddbj/assembly-e.html)
  - Accepting submission of scaffolded [TSA](/ddbj/tsa-e.html) data  
    Recently, paired-end sequencing is fairly common not only for
    genomes but also for transcriptomes and some of the RNAseq assembly
    software packages have added scaffolding. So, we started accepting
    these scaffolded assemblies as TSA records with
    [assembly\_gap](/ddbj/features-e.html#assembly_gap) features and
    /[linkage\_evidence](/ddbj/qualifiers-e.html#linkage_evidence)="paired-ends"
    or some.
  - Update guidelines for [TPA](/ddbj/tpa-e.html) submission  
    Guidelines for TPA submission will be updated to cope with the
    current status of data submission.See also [TPA Submission
    Guidelines](/ddbj/tpa-table-e.html).  
    Major modification points are follows;
      - 1\) TPA is renamed from "Third Party Annotation" to "Third Party
        Data".
      - 2\) Specify to accept not only annotation but also assemble for
        TPA.
      - 3\) A new subcategory, "TPA:specialist\_db" will be added in TPA
        to accept submissions from expert databases.

#### Changes in SRA XML schema

[SRA XML schema version
1.5](//www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA_1-5/) has been
applied. The modification points are elimination and consolidation of
redundant description items.

SRA XML schema version 2.0 continues to be discussed for refactoring SRA
metadata with [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html) data.

We decided to allow SRA accessions to have variable lengths after 6
digits have been used up, e.g. SRR1000000 would follow SRR999999.

#### Forthcoming changes in the DDBJ/EMBL/GenBank Feature Table: Definition <a name="2013-ft"></a>

The following items will be applied from October 2013 with the revision
of [Feature Table Definition](/ddbj/full_index-e.html), if not otherwise
specified.

  - It is reconfirmed that [5'UTR](/ddbj/features-e.html#5UTR) and
    [3'UTR](/ddbj/features.html#3UTR) features can be used for RNA viral
    genome. Their definitions will be updated appropriately
  - It is reconfirmed that [5'UTR](/ddbj/features-e.html#5UTR) and
    [3'UTR](/ddbj/features.html#3UTR) features can be used for RNA viral
    genome.  
    <span class="red">It will be applied from December 2013</span>
      - 1\) Time (with time zone): in [the ISO standard
        format](//www.w3.org/TR/NOTE-datetime)  
        i.e. "2007-04-05T14:30Z
      - 2\) Range: in the format delimited by "/"  
        i.e. "2007-03-01T13:00Z/2008-05-11T15:30Z""
  - A new value, "lncRNA", will be legal for
    /[ncRNA\_class](/ddbj/qualifiers-e.html#ncRNA_class) qualifier.
  - The qualifier,
    /[estimated\_length](/ddbj/qualifiers-e.html#estimated_length), will
    be modified to allow different lengths for unknown length gaps.
  - A new qualifier, /type\_material, will be considered to specify type
    strains, type specimens and so on.  
    It is not decided in details and applicable period of the qualifier.

</div>

## 2012 <a name="2012"></a>

<div>

### 25th ICM: June 11-13 2012, Bethesda, USA

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2012, the meeting was held at NCBI in USA, 11-13 June, to discuss
practical matters to maintain and update nucleotide sequence data
archives; [DDBJ](/index-e.html), [EMBL-Bank](//www.ebi.ac.uk/embl/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - BioSample database  
    The BioSample database contains descriptions of biological source
    materials used in experimental assays. The purpose of the BioSample
    database is to provide unified storage and access to information
    about biological samples. These samples may have investigation
    information stored in other databases (e.g. nucleotide sequence,
    expression).
    Both EBI and NCBI have already been independently collecting
    [BioSample at NCBI](//www.ncbi.nlm.nih.gov/biosample) and
    [BioSamples at EBI](//www.ebi.ac.uk/biosamples/). Including DDBJ, we
    discussed how to collect and share BioSample data collaboratively as
    an INSDC activity.
    The format of BioSample accession number is SAM\[D|E|N\]+ 8 digits;
    e.g. D=DDBJ; E=EBI; N=NCBI;  
    for example: SAMD01234567
  - Strain level taxonomy ID assignment for microorganism genome
    submission  
    All [organism names](/ddbj/organism-e.html) that are represented in
    the sequence data of INSDC are registered to the taxonomy database.
    [Since 2009](/activities/icm-reports-e.html#2009), taxonomy database
    has considered to terminate assignment of strain level taxonomy ID
    for microorganism genomes.
    However, taxonomy database agreed not to stop assigning strain-level
    taxonomy IDs for prokaryotic strains with sequenced genomes until at
    least 2013. The change to the current practice will not be made
    until BioSamples has reached maturity and sample content is
    exchanged, and so the change may not take place until later in 2013
    or beyond.
  - Genome scale submissions  
    Both submitters and users require INSDC to collect genome data
    varied in samples and study goals.
    Especially in bulk (re)sequenced cases, INSDC should ask data
    providers to submit at least one set of assembled/annotated
    reference genome data, to accept only raw reads to SRA for other
    genomes with BAM, VCF, GFF in analysis object; i.e. without draft
    assembles of WGS and scaffold CON data.
    While, in cases of genomes sequenced/assembled to finished level,
    i.e. possibly treated as a reference genome, INSDC should not label
    'complete genome' in [KEYWORDS](/ddbj/flat-file-e.html#Keywords) for
    genome data without feature annotation. We should support submitters
    to annotate their sequences by providing tools and help documents
    for the minimal standards/requirements
    NCBI introduced one of its activities,
    [Assembly](//www.ncbi.nlm.nih.gov/genome/assembly/) (Genome
    Collection) database. The Genome Collection database has information
    about the structure of assembled genomes as represented in an AGP
    file or as a collection of completely sequenced chromosomes. INSDC
    agreed to collaborate with this activity.

#### Changes related to INSDC submission

  - Termination of accepting new submission of MGA data  
    Since 2004, we have accepted the submission of [MGA
    data](/ddbj/mga-e.html). However, along with the popularization of
    new sequencing platforms, this data model seemed to be out of date.
    So, we decided to terminate accepting new submission of MGA data.
    For new submissions, please conact to [DDBJ Sequence Read Archive
    (DRA)](/dra/index-e.html) and [DDBJ Omics Archive
    (DOR)](/dor/index-e.html).

#### Changes in SRA XML schema

[SRA XML schema version
1.4](//www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA_1-4/) has
already been applied for SRA data since July 2012.

SRA XML schema version 1.5 will be applied in the near future. The
modification points would be elimination and consolidation of redundant
description items.

SRA SRA XML schema version 2.0 continues to be discussed for refactoring
SRA metadata with [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html)

#### Forthcoming changes in The DDBJ/EMBL/GenBank Feature Table: Definition <a name="2011-ft"></a>

The following items will be applied from October 2012 with the revision
of [Feature Table Definition](/ddbj/full_index-e.html), if not otherwise
specified.

  - Value format of /[anticodon](/ddbj/qualifiers-e.html#anticodon)
    qualifier will be modified to include its sequence.

  - A new value, "pcr", will be legal for
    /[linkage\_evidence](/ddbj/qualifiers-e.html#linkage_evidence)

  - The /[frequency](/ddbj/qualifiers-e.html#frequency) qualifier will
    be no more legal for [source](/ddbj/features-e.html#source) feature.

  - A new /[altitude](/ddbj/qualifiers-e.html#altitude) qualifier will
    be legal for [source](/ddbj/features-e.html#source) feature.

  - The controlled vocabularies for qualifier values will be reposited
    on [INSDC web site](http://www.insdc.org/) to revise them more
    frequent than every 6 months, revision of [Feature Table
    Definition](/ddbj/full_index-e.html).

  - Since controlled values of
    /[mobile\_element\_type](/ddbj/qualifiers-e.html#mobile_element_type)
    qualifier are not systematic and could not well cover some
    instances, INSDC will discuss to improve the controlled values. It
    will be revised in 2013.

  - To represent nonfunctional genes,
    /[pseudo](/ddbj/qualifiers-e.html#pseudo) qualifier will be legal
    again.  
    In [ICM2011](/activities/icm-reports-e.html#2011), INSDC adopted the
    new qualifier /[pseudogene](/ddbj/qualifiers-e.html#pseudogene) and
    deprecated the older /[pseudo](/ddbj/qualifiers-e.html#pseudo). The
    use of the /[pseudogene](/ddbj/qualifiers-e.html#pseudogene)
    qualifier indicates that the feature is a pseudogene of the type
    listed in the value.
    
    However, researchers still need to represent nonfunctional genes
    that are not formally described as pseudogenes. So, INSDC concluded
    to continue using /[pseudo](/ddbj/qualifiers-e.html#pseudo)
    qualifier in parallel to
    /[pseudogene](/ddbj/qualifiers-e.html#pseudogene) qualifier would
    allow this.

</div>

## 2011 <a name="2011"></a>

<div>

### 24th ICM: May 23-27 2011, Osaka, Japan

[International Nucleotide Sequence Database Collaboration
(INSDC)](http://www.insdc.org/), consisted of DDBJ,
[EBI](//www.ebi.ac.uk/) and [NCBI](//www.ncbi.nlm.nih.gov/), hold the
international collaborators meeting every year.  
In 2011, the meeting was held at Osaka in Japan, 23-27 May, to discuss
practical matters to maintain and update nucleotide sequence data
archives; [DDBJ](/index-e.html), [EMBL-Bank](//www.ebi.ac.uk/embl/),
[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html), Sequence Read
Archive (SRA) and Trace Archive.  
Though there were still aftermaths of the Great East Japan Earthquake,
DDBJ could host ICM2011 with understanding and cooperation of NCBI and
EBI.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - NCBI continues SRA and Trace Archive repositories after October 1,
    2011.  
    Recently, NCBI announced that due to budget constraints, it would be
    discontinuing its SRA and Trace Archive repositories for
    high-throughput sequence data. However, NIH has since committed
    interim funding for SRA in its current form until October 1, 2011.
    In addition, NCBI has been working with staff from other NIH
    Institutes and NIH grantees to develop an approach to continue
    archiving a widely used subset of next generation sequencing data
    after October 1, 2011.  
    In addition, NCBI will continue to provide access to existing SRA
    and Trace Archive data for the foreseeable future. NCBI is also
    continuing to discuss with NIH Institutes approaches for handling
    other next-generation sequencing data associated with specific
    large-scale studies.
  - BioProject database  
    [Since 2005](/activities/icm-reports-e.html#2005), INSDC has
    discussed project ID assignment as a flag to specify not only
    genomic and metagenomic sequencing projects but also many kinds of
    biological projects with considerable modifications.  
    In 2011, the schema of BioProject is introduced. See also [DDBJ
    BioProject Database](/bioproject/index-e.html).  
    A BioProject is a collection of biological data related to a single
    initiative, originating from a single organization or from a
    consortium. A BioProject record provides users a single place to
    find links to the diverse data types generated for that project.  
    The format of BioProject accession numbers is
    PRJ\[D|E|N\]\[A-Z\]+integer; e.g. D=DDBJ; E=EBI; N=NCBI;  
    for example: PRJNA38683

#### Changes related to INSDC submission

INSDC agreed with definitions of its common entry statuses in the
following table;

<div class="main_table format">

<table>
<caption> <span class="red">*</span> specific deadlines are available from INSDC partner.</caption>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Status name</th>
<th>Causes</th>
<th>Implications</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Public</td>
<td>Data are submitted with no request for confidential hold prior to publication or have reached an owner-agreed public release date.</td>
<td>Data are fully available</td>
</tr>
<tr class="even">
<td>Confidential</td>
<td>Data owner requires and indicates to INSDC staff that confidentiality is required until a release date or publication in the literature, whichever comes earlier.</td>
<td>Data are not available publicly through any means.<br />
<br />
A data release date is recorded for the data, which are subsequently and automatically released as <span class="bold">Public</span> on reaching this date or being cited in a publication prior to this date. In the event that a release date must be extended, data owners are required to contact the INSDC partner responsible for the submission with sufficient notice<span class="red">*</span>.</td>
</tr>
<tr class="odd">
<td>Suppressed</td>
<td><ul>
<li>(1) Data are found by the owner to be incorrectly annotated or contaminated with no opportunity on the part of the owner to be updated.</li>
<li>(2) Data owners realise after sequences have been released that they failed to request a confidential status, either at the time of submission, or within the period between completion of submission processing and the date on which the submission is normally made available to the public (this time period can vary among the INSDC members).</li>
</ul></td>
<td>Data are removed where possible from INSDC partner direct search tools (such as text and sequence similarity search) but remain available by accession number.</td>
</tr>
<tr class="even">
<td>Replaced</td>
<td>Data owners generate new data under new accession identifiers that directly replace existing data; this expected to be rare since replacement data normally use the existing accession identifiers for the records that they replace.</td>
<td>Data are removed where possible from INSDC partner direct search tools (such as text and sequence similarity search) but remain available by accession number. Where possible, look-up by original accession identifiers leads to a re-direct to new records available under the new accession identifiers.</td>
</tr>
<tr class="odd">
<td>Killed</td>
<td><ul>
<li>(1)The submitter has requested a <strong>Confidential</strong> status or an extension to an existing release date, but the INSDC partner, or their submissions brokering collaborator, has failed to apply the appropriate release date correctly.</li>
<li>(2) Data are found to have been submitted to the databases without the permission of the rightful owner; this is expected to be extremely rare and requires formal institutional contact with the submitting institution.</li>
</ul></td>
<td>Data are not directly available publicly from INSDC partners <strong>through any means.</strong> However, because the data will have been distributed previously as <span class="bold">Public</span>, the INSDC partners cannot exercise any control on the resultant use of the data by third parties.</td>
</tr>
</tbody>
</table>

</div>

For submissions of [CON division](/ddbj/con-e.html), [AGP
format](//www.ncbi.nlm.nih.gov/projects/genome/assembly/agp/AGP_Specification.shtml)
version 2.0 will be applied from December 2011.

#### Changes in SRA XML schema

  - [SRA XML schema version
    1.3](//www.ncbi.nlm.nih.gov/viewvc/v1/trunk/sra/doc/SRA_1-3c/) has
    already been applied for SRA data since June 2011.
  - SRA XML schema version 2.0 will be discussed.

#### Forthcoming changes in The DDBJ/EMBL/GenBank Feature Table: Definition <a name="2011-ft"></a>

  - Two new feature keys, [centromere](/ddbj/features-e.html#centromere)
    and [telomere](/ddbj/features-e.html#telomere), will be legal from
    October 2011.

  - A new feature key, assembly\_gap, will be legal from December
    2011.  
    The feature key is closely related to [the modification of AGP
    format](#agp). With version up of AGP format, sequencing gaps of
    [CON](/ddbj/con-e.html) records will be described with assembly\_gap
    features; i.e. not [gap](/ddbj/features-e.html#gap) features.

  - Value format of /[anticodon](/ddbj/qualifiers-e.html#anticodon)
    qualifier will be modified on April 2012.

  - Improvement of pseudogene annotation  
    As mentioned in [ICM2010
    report](/activities/icm-reports-e.html#2010), Prokaryotic Annotation
    Workshop requested INSDC to improve its pseudogene annotation. Also,
    to solve [a problem of /pseudo qualifier usage in
    ICM2009](/activities/icm-reports-e.html#2009), we discussed and
    decided following modification; A new qualifier key, /pseudogene,
    will be legal from April 2012, and an old qualifier key,
    /[pseudo](/ddbj/qualifiers-e.html#pseudo), will be no longer
    accepted in future submissions. The /pseudogene qualifier will be
    legal for only pseudogenes.

  - Implementation of /whole\_replicon was cancelled.  
    At [ICM2010](/activities/icm-reports-e.html#2010), we were to flag
    entries oriented to sequence whole replicon with /whole\_replicon
    qualifier. However, we reconsidered that BioProject records would be
    more helpful to store representatives of whole genome data. INSDC
    will include a new item in [BioProject](#bioproject) records to flag
    representative data of 'genomic molecule' instead of addition to
    /whole\_replicon qualifier.
    
    Subsequent to this discussion, INSDC partners agreed to the
    following definition of the INSDC meaning of 'genomic molecule'
    
    ``` flat-file code
    The submitter of a genomic assembly defines his/her INSDC sequence record as a 'genomic molecule', 
    meaning a chromosome, plasmid or linkage group, when it is the submitter's intention to use 
    that sequence record permanently as that biological molecule and the sequence is the current 
    reasonable model of the biological molecule. Whether the record shows a complete representation 
    of the molecule or not is not necessarily a factor under consideration for this submitter-declared 
    'genomic molecule'."
    ```

</div>

## 2010 <a name="2010"></a>

<div>

### 23rd ICM: May 19-21 2010, Hinxton, UK

International Nucleotide Sequence Database Collaboration (INSDC),
consisted of DDBJ, EBI and NCBI, hold the international collaborators
meeting every year.  
In 2010, the meeting was held at EBI in UK, 19-21 May, to discuss
practical matters to maintain and update nucleotide sequence data
archives; DDBJ, EMBL-Bank, GenBank, Sequence Read Archive and Trace
Archive. As a result of travel disruptions relating to the Icelandic
volcano, the meeting was shorter than expected. Despite these
difficulties, we believe that we made significant progress at the
meeting. The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - Current movements related to sequence data submission and
    standardized description formats for sampling information
    
      - Sampling information for genome scale data  
        According to the request from [Genomic Standards Consortium
        (GSC)](http://gensc.org/), INSDC has discussed to include
        sampling information of genome scale data in complying with
        [Minimum Information about a (Meta)Genome Sequence
        (MIGS/MIMS)](http://wiki.gensc.org/index.php?title=MIGS/MIMS)
        and Minimum Information about an Environmental Sequence (MIENS)
        in sequence data records, [since
        2005](/activities/icm-reports-e.html#2005)  
        [Since 2009](/activities/icm-reports-e.html#2009), DDBJ,
        EMBL-Bank and GenBank have been using structured COMMENT/CC
        lines to describe this kind of extended metadata. However,
        making reference database for extensible metadata has some
        advantages; to maintain and to update independently; to reduce
        redundancy of contents. So, INSDC should consider to provide
        extensible metadata by some reference database  
        See also [Genomic Standards Consortium on
        Wikipedia](//en.wikipedia.org/wiki/Genomic_Standards_Consortium)
      - Minimal submission requirements for INSDC  
        INSDC will register its minimal submission requirements into
        [Minimum Information for Biological and Biomedical
        Investigations
        (MIBBI)](http://mibbi.sourceforge.net/legacy.shtml). MIBBI is a
        project to synthesize reporting guidelines from various
        communities into a suite of orthogonal standards.
      - Prokaryotic Annotation Workshop  
        Researchers participated [Prokaryotic Annotation
        Workshop](//www.ncbi.nlm.nih.gov/genomes/AnnotationWorkshop.html),
        hosted by [NCBI](//www.ncbi.nlm.nih.gov/), requested to INSDC
        some modifications for the description rules of features and
        qualifiers. The requests were mainly from [J. Craig Venter
        Institute (JCVI)](//www.jcvi.org/).INSDC mainly discussed how to
        cite references for annotated features and a guideline for
        protein nomenclature for values of [/product
        qualifiers](/ddbj/cds-e.html#product) in [CDS
        features](/ddbj/cds-e.html).

  - BioProject database  
    [Since 2005](/activities/icm-reports-e.html#2005), INSDC has
    discussed project ID assignment as a flag to specify many kinds of
    large scale sequencing projects with considerable modifications.  
    In 2010, the schema for project ID will be largely modified to
    extend its targets to many kinds of biological data other than
    nucleotide sequence, such as array, mass spectrometry, and so on.
    The database was renamed to BioProject database. BioProject database
    will be provided from NCBI near future.

  - Strain level taxonomy ID assignment for microorganism genome
    submission  
    All [organism names](/ddbj/organism-e.html) that are represented in
    the sequence data of INSDC are registered to the taxonomy
    database.  
    [Since 2009](/activities/icm-reports-e.html#2009), taxonomy database
    has considered to terminate assignment of strain level taxonomy ID
    for microorganism genomes. However, since many institutes have
    already cited those strain level IDs, we will continue to add strain
    level taxids for prokaryotes at least for one more year.

  - European Nucleotide Archive (ENA) launched at EBI  
    From May 2010 at UK, [the European Nucleotide Archive
    (ENA)](//www.ebi.ac.uk/ena/) has been launched, consolidating three
    major sequence resources in Europe, EMBL Nucleotide Sequence
    Database (EMBL-Bank), Trace Archive and Sequence Read Archive, to
    become Europe's primary access point to globally comprehensive
    nucleotide sequence information.

#### Names for activities of INSDC

[Since 2009](/activities/icm-reports-e.html#2009), new collaborators
have joined to INSDC. So, some INSDC documents about policies and
activities should be updated

  - INSDC is the official name for the entirety of the collaboration,
    including traditional sequence databases (DDBJ, EMBL-Bank and
    GenBank), the next-gen sequence databases and Trace Archive.
  - We agreed to call the international activities to archive raw
    sequencing data from next-generation sequencers "Sequence Read
    Archive". After the agreement, DRA has been renamed from "DDBJ Read
    Archive" to "[DDBJ Sequence Read Archive](/dra/index-e.html)".
  - The operations of INSDC to archive sequence chromatograms (traces)
    is named "Trace Archive".

#### Sequence Read Archive (SRA)

  - A paper for SRA introduction  
    We will prepare a joint SRA paper with details about the data model.
  - Dealing with data from new sequencing platforms  
    SRA schema will be updated to support new sequencing platforms;
      - Complete Genomics
      - Helicos
      - Pacific BioSciences
      - Ion Torrent

#### Changes in future revisions of the Feature Table Document: Features and Qualifiers <a name="2010-ft"></a>

The following items will be applied from October 2010 with the revision
of [Feature Table Definition](/ddbj/full_index-e.html), if not otherwise
specified.

  - The conflict feature will be no longer used.  
    <span class="red">For data submitted to DDBJ, the conflict feature
    can be no longer used. </span>

  - Three qualifiers, /codon, /label and /partial will be no longer
    used.  
    <span class="red">For data submitted to DDBJ, the conflict feature
    can be no longer used.</span>

  - The /[gene\_synonym](/ddbj/qualifiers-e.html#gene_synonym) qualifier
    will be legal when either /[gene](/ddbj/qualifiers-e.html#gene) or
    /[locus\_tag](/ddbj/qualifiers-e.html#locus_tag) is used in a
    feature.

  - The description rule for transposable element will be changed.  
    [Since 2006](/activities/icm-reports-e.html#2006), transposable
    element has been described with
    [repeat\_region](/ddbj/features-e.html#repeat_region) feature and
    /mobile\_element qualifier.
    [mobile\_element](/ddbj/features-e.html#mobile_element) feature and
    /[mobile\_element\_type](/ddbj/qualifiers-e.html#mobile_element_type)
    qualifier will be added and used to describe transposable element.  
    <span class="red">This modification will be applied in December
    2010. </span>

  - A new qualifier, /whole\_replicon, will be legal for
    [source](/ddbj/features-e.html#source) feature.  
    To flag entries oriented to sequence whole replicon, we will use
    /whole\_replicon qualifier.  
    <span class="red">Time course for this addition has not yet been
    specified.</span>

  - Improvement of format for
    /[artificial\_location](/ddbj/qualifiers-e.html#artificial_location)
    qualifier.  
    [Since 2009](/activities/icm-reports-e.html#2009),
    /[artificial\_location](/ddbj/qualifiers-e.html#artificial_location)
    qualifier has been introduced as a valueless qualifier. To classify
    the reasons of its usages, the qualifier will have either of two
    controlled values; "heterogenous population sequenced" or
    "low-quality sequence region".

  - Improvement of formats for
    /[experiment](/ddbj/qualifiers-e.html#experiment) and
    /[inference](/ddbj/qualifiers-e.html#inference) qualifiers.  
    On the basis of [requests from Prokaryotic Annotation
    Workshop](#jcvi), formats for /experiment and /inference qualifiers
    will be improved mainly to cite its support evidence in a feature.
    
      - header "COORDINATES", "DESCRIPTION", "EXISTS" による分類
      - description of PubMed ID (PMID) and Digital Object Identifier
        (DOI) to indicate cited publications
    
    Examples
    
    ``` flat-file code
                /experiment="COORDINATES: N-terminus verified by Edman degradation
                [PMID: 8096212]"
                /inference="DESCRIPTION: similar to AA sequence: INSDC: AAF23014.2"
    ```

  - How to improve pseudogene annotation?  
    As mentioned above, [Prokaryotic Annotation Workshop](#jcvi)
    requested to improve description rules of features and qualifiers.
    One of their requests is improvement of pseudogene annotation. Also,
    to solve [a problem of /pseudo qualifier usage in
    ICM2009](/activities/icm-reports-e.html#2009), we discussed this
    issue. However, we could not reach any agreement in the meeting,
    mainly because of difficulties to keep integrity with existing
    records.  
    <span class="red">This issue will be reconsidered.</span>

</div>

## 2009 <a name="2009"></a>

<div>

### 22nd ICM: May 12-15 2009, Bethesda, USA

International Nucleotide Sequence Database Collaboration (INSDC), the
three data banks; DDBJ, EMBL-Bank/EBI, GenBank/NCBI hold the
international collaborators meeting every year.  
In 2009, the meeting was held at NCBI in USA, 12-13 May.

DDBJ, EMBL-Bank, GenBank reported each bank activities in the last year,
discussed practical matters to maintain and update INSDC.

Also, since this year (2009), INSDC has added a coraborative meeting to
deal with mass sequence data produced by the next generation sequencers
(Short Read Archive) and traces produced by traditional sequencers
(Trace Archive).  
The first meeting for this collaboration was held at NCBI in USA, 14-15
May 2009.

  - Short Read Archive
    
      - [DRA; DDBJ Read Archive](/dra/index-e.html)
      - [ERA; European Read Archive
        (EBI)](//www.ebi.ac.uk/embl/Documentation/ENA-Reads.html)
      - [Short Read Archive
        (NCBI)](//www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?)

  - Trace Archive
    
      - DTA; DDBJ Trace Archive
      - Ensembl Trace Server (EBI)
      - [Trace Archive (NCBI)](//www.ncbi.nlm.nih.gov/Traces/trace.cgi?)

The outcomes of the two meetings are summarized below.

#### The Items; Discussed and To Be Studied

  - Sequence data from the next generation sequencers  
    As mentioned above, the databases collecting outputs from the next
    generation sequencers have joined INSDC since 2009.NSDC will request
    major scientific journals that DRA/ERA/SRA accession numbers for
    corresponding sequence data should be included in paper
    submissions.  
    DDBJ/EMBL-Bank/GenBank reject submissions of EST sequence data
    produced by 454 sequencers (GS-20, GS-FLX, etc.).In principle, only
    DRA/ERA/SRA should accept those kinds of EST data.
  - the database for project ID  
    [Since 2005](/activities/icm-reports-e.html#2005), INSDC has started
    to discuss project ID assignment as a flag to specify genome
    projects, and how to indicate project ID on [flat
    files](/ddbj/flat-file-e.html).
    [In 2008](/activities/icm-reports-e.html#2008), INSDC decided to use
    project ID, not only for genome/metegenome projects, but also many
    kinds of large scale sequencing projects including transcriptomes.  
    DDBJ and GenBank indicate project ID at
    [DBLINK](/ddbj/flat-file-e.html#Dblink) line on flat files.
    EMBL-Bank indicate project IDs in PR line on flat files. For the
    genome/metagenome projects, we have almostly completed to assign
    project IDs.
    DDBJ/EMBL-Bank/GenBank require to describe project IDs for [TSA
    submissions](/ddbj/tsa-e.html) and thier [primary
    entries](/ddbj/tsa-e.html#primary)
  - Termination of strain level taxonomy ID assignment for microorganism
    genome submission  
    All [organism names](/ddbj/organism-e.html) that are represented in
    the sequence data of DDBJ/EMBL-Bank/GenBank are registered to the
    taxonomy database.Taxonomy database assigned strain level taxonomy
    IDs for whole genome scale submissions of microorganisms, to flag
    those genome projects.  
    Since INSDC provided project IDs as a solution to index genome
    projects, we discussed to terminate assignment of strain level
    taxonomy ID for microorganism genomes. However, since many
    institutes have already cited those strain level IDs, we should
    carefully considrer that the policy change would cause confusion.
  - Frame mismatched candidates of protein coding regions of
    high-throughput sequence data  
    Increasing submissions of large scale draft sequence data,
    submitters often want to annotate frame mismatched candidates of
    protein coding regions with [CDS](/ddbj/cds-e.html) features
    avoiding translation errors by operatively joined location.  
    To distinguish these kinds of CDS features, we will prepare a new
    qualifier,
    /[artificial\_location](/ddbj/qualifiers-e.html#artificial_location)
    qualifier as a flag. In this regard, however DDBJ/EMBL-Bank/GenBank
    will accept only submissions from whole genome scaleprojects
    including large scale transcriptomes.
  - Structured COMMENT/CC line to capture metadata  
    Recently, GenBank started to use structured COMMENT approach to
    capture metadata related to a biological sample that has been
    sequenced.  
    The concept behind structured COMMENT is to provide submitters with
    a mechanism that allows them to supply a set of tag/value data
    elements that currently are not supported by the [Feature
    Table](/ddbj/full_index-e.html).  
    DDBJ/EMBL-Bank/GenBank will discuss the format of structured
    COMMENT/CC line to use it in a formalized way.

#### Changes to the Feature Table Document: Features and Qualifiers <a name="2005-ft"></a>

The following items will be applied from October 2009 with the revision
of [Feature Table Definition](/ddbj/full_index-e.html), if not otherwise
specified.

  - Should /pseudo qualifier be renamed?
    
    "The word "pseudo" is likely to be associated with "pseudogene" but
    it is used for both putative pseudogenes and non-functional forms,
    so, the /pseudo qualifier should be separated and/or renamed to
    reflect their actual usages.  
    <span class="red">This issue will be reconsidered. </span>

  - The value, "annotated by transcript or proteomic data", will be
    legal for /[exception](/ddbj/qualifiers-e.html#exception) qualifier

  - A new qualifier, /[haplogroup](/ddbj/qualifiers-e.html#haplogroup),
    will be legal for [source](/ddbj/features-e.html#source) feature.

  - For the /[strain](/ddbj/qualifiers-e.html#strain) qualifier, it is
    no more legal to describe multiple equivalent names.
    
    Previously (before May 2009), DDBJ accepted the sequence data with
    description of multiple-names in a /strain qualifier;
    
    ``` flat-file code
          /strain="ATCC #### (= JCM ### = NBRC ###)"
    ```
    
    To describe equivalent strain names, appropriate usage of
    /[note](/ddbj/qualifiers-e.html#note) qualifier is recommended.
    
    ``` flat-file code
          /note="strain coidentity: JCM ### = NBRC ###" <a name=""></a>
          /strain="ATCC ####"
    ```

  - [A new qualifier,
    /](#frame)[artificial\_location](/ddbj/qualifiers-e.html#artificial_location),
    will be legal for [CDS](/ddbj/cds-e.html) and
    [mRNA](/ddbj/features-e.html#mRNA) features, [as mentioned
    above](#frame).
    
    <span class="red">The modification will be applied in December 2009.
    </span>

  - Improvement of the format of
    /[inference](/ddbj/qualifiers-e.html#inference) qualifier
    
    In order to describe inferential supports more effectively, format
    /inference qualifier will be improved.  
    The discussion has been continued since 2008.

</div>

## 2008 <a name="2008"></a>

<div>

### 21st ICM: May 20-22 2008, Mishima, Japan

International Nucleotide Sequence Database Collaboration (INSDC), the
three data banks; DDBJ, EMBL-Bank/EBI, GenBank/NCBI hold the
international collaborators meeting every year.  
In 2008, [the meeting was held at DDBJ in Japan, 20-22
May](/news/en/wn080509-e.html).

DDBJ, EMBL-Bank, GenBank reported each bank activities in the last year,
discussed some practical matters to maintain and develop INSDC.

#### The Items; Discussed and To Be Studied

  - A new division, TSA (Transcriptome Shotgun Assembly)  
    From June 2008, INSDC introduce a new division for assembled mRNA
    sequences, TSA. Note that it is required that the TSA submission
    with the original sequence data of primary transcripts is classified
    into the [EST division](/ddbj/flat-file-e.html#Division) of INSDC,
    [Trace Archive](//www.ncbi.nlm.nih.gov/Traces/trace.cgi), or [Short
    Read Archive](//www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi). More
    information about how to submit the TSA entry will be provided via
    DDBJ website.
  - Sequence data from next generation sequencing  
    In principle, raw reads from next generation sequencing should be
    registered to [Short Read
    Archive](//www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi). Following the
    workshop on MINSEQE (Minimal Information about a High Throughput
    Sequencing Experiment), data from next generation sequencing not
    initially intended for INSD submissions might result in discoveries
    of variation or re-annotation that could be submitted to INSDC as
    TPA or TSA entries. The number of TPA entries is not expected to
    grow rapidly.
  - Representative submissions of identical sequences for variation
    studies  
    INSDC basically accept all sequence data, regardless of source and
    sequence identity. However, in order to take advantage of
    normalisation for variation studies, a single submission to
    represent multiple identical sequences is also acceptable [with
    frequency and total sample number](#freq) described by /frequency
    qualifier of source feature.
  - Removal of the frag for electronic publication, "(er)", in
    REFERENCE/JOURNAL lines  
    The electronic publication token in REFERENCE/JOURNAL lines, "(er)",
    will be removed. Old records will be retrofitted to conventional
    article citations where possible.

#### Changes to the Feature Table Document: Features and Qualifiers <a name="2005-ft"></a>

The following items will be applied from October 2008 with the revision
of [Feature Table Definition](/ddbj/full_index-e.html), if not otherwise
specified.

  - Modification of controlled vocabulary for
    /[mol\_type](/ddbj/qualifiers-e.html#mol_type) qualifier
    
    The /mol\_type qualifier is used to indicate in vivo, synthetic or
    hypothetical molecule type in [source](/ddbj/features-e.html#source)
    feature. The vocabrary list for /mol\_type qualifier will be
    modified as follows;
    
      - Addition: "transcribed RNA"
      - Removal: "snoRNA", "snRNA", "scRNA", "pre-RNA" and "tmRNA"

  - The value, "chromatophore", will be legal for
    /[organelle](/ddbj/qualifiers-e.html#organelle) qualifier

  - Modification of controlled vocabulary for
    /[ncRNA\_class](/ddbj/qualifiers-e.html#ncRNA_class) qualifier
    
    The [ncRNA](/ddbj/features-e.html#ncRNA) feature utilizes a
    /ncRNA\_class qualifier with a controlled vocabulary to indicate
    what type of non-protein-coding feature is being represented. The
    list for controlled vocabulary of /ncRNA\_class qualifier will be
    modified as follows;
    
      - Addition: "6S/SsrS", "SraD RNA", "DsrA RNA", "SroC", "ribozyme"
    
    See also [Controlled vocabulary for ncRNA
    classes](http://www.insdc.org/rna_vocab.html).

  - A new qualifier, /[satellite](/ddbj/qualifiers-e.html#satellite),
    will be legal for
    [repeat\_region](/ddbj/features-e.html#repeat_region) feature.
    
    Format "\<satellite\_type\>\[:\<class\>\]\[ \<identifier\>\]"  
    where satellite\_type is one of the following;  
    "satellite", "microsatellite", "minisatellite"  
    
    ``` flat-file code
    Example
             /satellite="satellite: S1a"
             /satellite="satellite: gamma III"
             /satellite="minisatellite"
             /satellite="microsatellite: DC130"
    ```

  - 
    
    <div id="freq">
    
    Improvement of the format of the
    /[frequency](/ddbj/qualifiers-e.html#frequency) qualifier
    
    In order to represent a sample size, following descriptions will
    also be legal for the value formats of the /frequency qualifier in
    addition to decimal fractions;  
    "\[m\] in \[n\]" or "\[m\] / \[n\]".
    
    ``` flat-file code
    Example
             /frequency="23/108"
             /frequency="1 in 12"
    ```
    
    </div>

  - /specific\_host qualifier will become
    /[host](/ddbj/qualifiers-e.html#host) qualifier.
    
    Both /host and /[lab\_host](/ddbj/qualifiers-e.html#lab_host) should
    be described with a binominal scientific name, if possible.
    
    ``` flat-file code
    Example
             /lab_host="Gallus gallus"
             /lab_host="Gallus gallus embryo"
             /lab_host="Escherichia coli strain DH5 alpha"
             /lab_host="Homo sapiens HeLa cells"
    ```

  - Removal of /virion qualifier
    
    Note: The /[proviral](/ddbj/qualifiers-e.html#proviral) qualifier
    will remain in use.

  - Removal of /cons\_splice qualifier

  - Improvement of validation for both
    /[rearranged](/ddbj/qualifiers-e.html#rearranged) and
    /[germline](/ddbj/qualifiers-e.html#germline) qualifiers
    
    Basically, both /rearranged and /germline qualifiers should be used
    to indicate if the sequence has undergone somatic rearrangement as
    part of an adaptive immune response or not. However, since many of
    them have been wrongly used, we will correct them.

  - A new qualifier,
    /[gene\_synonym](/ddbj/qualifiers-e.html#gene_synonym), will be
    legal for features that can use
    /[gene](/ddbj/qualifiers-e.html#gene) qualifier.
    
    We also expect further minor changes in the usage of /gene
    qualifier. Details of changes will be made available shortly

  - Improvement of the format of
    /[inference](/ddbj/qualifiers-e.html#inference) qualifier
    
    In order to describe inferential supports more effectively, format
    /inference qualifier will be improved. Details of changes will be
    made available shortly

  - A new qualifier,
    /[mating\_type](/ddbj/qualifiers-e.html#mating_type), will be legal
    for source feature.
    
    The /[sex](/ddbj/qualifiers-e.html#sex) qualifier will also remain
    in use. Guidelines of descriptions for both /mating\_type and /sex
    will be made available shortly.

</div>

## 2007 <a name="2007"></a>

<div>

### 20th ICM: May 21-23 2007, Hinxton, UK

International Nucleotide Sequence Database Collaboration (INSDC), the
three data banks; DDBJ, EMBL-Bank/EBI, GenBank/NCBI hold the
international collaborators meeting every year.  
In 2007, the meeting was held at EMBL-Bank/EBI in UK, 21-23 May.

DDBJ, EMBL-Bank, GenBank reported each bank activities in the last year,
discussed practical matters to maintain and to update INSDC. The
outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - INSDC web site  
    The three banks agree with that we are to add some samples for
    standardized submissions as the contents of the [INSDC web
    site](http://www.insdc.org)
  - Alternative assemblies  
    With large amount of reads of draft sequences available in the
    public, scientists are asking if they can submit assemblies of the
    reads to INSDC. We need to develop a policy for who can submit
    alternative assemblies and what we would do with the data once it is
    submitted i.e. would we start a [TPA](/ddbj/tpa-e.html) -like
    database for alternative assemblies? Three banks would ask to the
    advisors meeting.
  - GSC and MIGS  
    The Genomic Standards Consortium (GSC) is to support the
    community-based development of a standard datasets of information
    about complete genomes and metagenomic ones. It is currently working
    together towards the 'Minimal Information about a Genome
    Sequence(MIGS)' specification. Overall, the three banks agreed that
    a cooperative approach to GSC activities was preferred over a
    competitive approach.
  - EST/GSS clone library ID  
    A registration system to assign unique IDs for both academic and
    commercial EST and GSS libraries will be studied.
  - Controlled vocabulary in KEYWORDS line  
    The three banks agree to use following three keywords in common.
      - Two terms to describe the direction and location of EST  
        "5'-end sequence (5'-EST)"  
        "3'-end sequence (3'-EST)"
      - A term to indicate an entry belonging to a full length insert
        cDNA project  
        "FLI\_CDNA"

#### Changes to the Feature Table Document: Features and Qualifiers <a name="2005-ft"></a>

The following items will be applied from October 2007 with the revision
of [Feature Table Definition](/ddbj/full_index-e.html), if not otherwise
specified.

  - New [ncRNA](/ddbj/features-e.html#ncRNA) feature
    
    A variety of new types of RNA transcripts, "miRNA", "siRNA", and so
    on, have been introduced in recent years. Because the number of non
    protein coding RNA families is quite likely to continue to expand, a
    new ncRNA feature that can flexibly accommodate them will be
    introduced.  
    Furthermore, snRNA, snoRNA, and scRNA features are merged into ncRNA
    feature by December 2007.

  - New /[ncRNA\_class](/ddbj/qualifiers-e.html#ncRNA_class) qualifier
    
    The new feature, ncRNA, will utilize a new qualifier called
    /ncRNA\_class, with a controlled vocabulary to indicate what type of
    non-protein-coding feature is being represented
    
    Format: /ncRNA\_class="\<ncRNA\_class\_TYPE\>"  
    Example: /ncRNA\_class="miRNA"  
    \<ncRNA\_class\_TYPE\> should be selected from the following list;
    
    ``` flat-file code
    antisense_RNA", "autocatalytically_spliced_intron", "telomerase_RNA", 
    "hammerhead_ribozyme", "RNase_P_RNA", "RNase_MRP_RNA", "guide_RNA", 
    "rasiRNA", "scRNA", "siRNA", "miRNA", "snoRNA", "snRNA", "SRP_RNA", 
    "vault_RNA", "Y_RNA", "other" 
    ```

  - New [tmRNA](/ddbj/features-e.html#tmRNA) feature
    
    To support a class of RNA transcripts that have dual tRNA-like and
    mRNA-like behaviors, a new tmRNA feature will belegal. See
    [tmRDB](http://www.ag.auburn.edu/mirror/tmRDB/) that provide some
    background information about the tmRNAs.

  - New /[tag\_peptide](/ddbj/qualifiers-e.html#tag_peptide) qualifier
    
    To indicate the nucleotide region encoding the proteolysis tag
    peptide of tmRNA, a new qualifier, /tag\_peptide, will be used for
    the tmRNA feature.
    
    Format: /tag\_peptide=\<base\_range\>  
    Example: /tag\_peptide=90..122

  - "tmRNA" is added to the specified values for the
    /[mol\_type](/ddbj/qualifiers-e.html#mol_type) qualifier that
    indicates molecule type of the sequence in vivo on the
    [source](/ddbj/features-e.html#source) feature.

  - The value of
    /[specimen\_voucher](/ddbj/qualifiers-e.html#specimen_voucher)
    qualifier will be become structured, consisting of an institution
    code, a collection code, and a specimen identifier, as well as the
    existing unstructured values.
    
    ``` flat-file code
    Format:
          /specimen_voucher="[<institution_code>:[<collection_code>:]]<specimen_id>"
          There are three forms of specimen_voucher qualifiers; 
          <specimen_id>
          <institution_code>:<specimen_id>
          <institution_code>:<collection_code>:<specimen_id>
    ```
    
    If the value of includes one or more colons, ":", it is
    'structured'. Structured vouchers include institution\_codes (and
    optional collection\_codes) taken from a controlled vocabulary that
    denote the museum or herbarium collection where the specimen resides
    
    ``` flat-file code
    Example:
             /specimen_voucher="UAM:Mamm:52179"
             /specimen_voucher="AMCC:101706"
             /specimen_voucher="USNM:field series 8798"
             /specimen_voucher="personal collection:Dan Janzen:99-SRNP-2003"
             /specimen_voucher="99-SRNP-2003"
    ```

  - The two new qualifiers,
    /[culture\_collection](/ddbj/qualifiers-e.html#culture_collection)
    and /[bio\_material](/ddbj/qualifiers-e.html#bio_material), will be
    legal for the [source](/ddbj/features-e.html#source) feature.
    
    These qualifiers will utilize the same format as
    /[specimen\_voucher](/ddbj/qualifiers-e.html#specimen_voucher).  
    culture\_collection; Institution code and identifier for the culture
    from which the nucleic acid sequenced was obtained.
    
    ``` flat-file code
    Format: 
            /culture_collection="<institution_code>:[<collection_code>:]<culture_id>"
    Example: 
            /culture_collection="ATCC:26370"
    ```
    
    bio\_material; Identifier for the biological material from which the
    nucleic acid sequenced was obtained
    
    ``` flat-file code
    Format:  
            /bio_material="[<institution_code>:[<collection_code&'gt;:]]<material_id>"
    
    Example: 
            /bio_material="CGC:CB3912" 
                CGC; Caenorhabditis Genetics Center
    ```

  - The feature, old\_sequence will be illegal for new entries.

  - At DDBJ, the two features, repeat\_unit and satellite, will be
    illegal for new entries
    
    Both repeat\_unit and satellite features will be merged into
    [repeat\_reigon](/ddbj/features-e.html#repeat_region) feature.

  - The two features, 5'clip and 3'clip will be no longer used.

  - The /[organism](/ddbj/qualifiers-e.html#organism) qualifier will be
    no longer used for misc\_recomb.

  - The /[operon](/ddbj/qualifiers-e.html#operon) qualifier will be
    legal on the [protein\_bind](/ddbj/features-e.html#protein_bind)
    feature.

  - The term, "alignment", will be legal for \[TYPE\] of the
    /[inference](/ddbj/qualifiers-e.html#inference) qualifier

</div>

## 2006 <a name="2006"></a>

<div>

### 19th ICM: May 15-17 2006, Bethesda, USA

International Nucleotide Sequence Database Collaboration (INSDC), the
three data banks; DDBJ, EMBL-Bank/EBI, GenBank/NCBI hold the
international collaborators meeting every year.  
In 2006, the meeting was held at GenBank in Bethesda, Maryland, USA,
15-17 May.

DDBJ, EMBL-Bank and GenBank reported each bank activities in the last
year, discussed practical matters to maintain and to update INSDC.  
The outcomes of the meeting are summarized below.

#### The Items; Discussed and To Be Studied

  - No restriction for using INSDC data  
    INSDC confirmed that we should not accept any submissions with
    restrictions in free public access.
  - Non-submission of data to INSDC  
    There are sequence and annotation data, although published, but not
    available at INSD. We will be in touch with authors and editors to
    remind them of the importance of submitting sequences and annotation
    to the databases.
  - INSDC homepage  
    Since 2005, INSDC has made public its web site;
    [//www.insdc.org/](http://www.insdc.org/).The three banks agreed
    with that we are to add more contents for the web site.
  - INSDSeq-XML  
    Since 2003, we have discussed the schema of this common XML
    description named INSDSeq-XML. Since 2005, three banks have trially
    exchanged data in INSDSeq-XML format. Thoroughly reviewing of the
    trial, we discussed some improvement of INSDSeq-XML to provide it as
    common XML description among three banks.
  - locus\_tag  
    Since 2003, the /[locus\_tag](/ddbj/qualifiers-e.html#locus_tag)
    qualifier has been used as the identifier for the tracking purpose
    by many genome projects. In the past, we allowed submitters to use
    the flexible prefixes for their locus\_tag. Since 2005, to keep
    uniquness through INSDC, we have disccused to manage and to assign
    prefixes of locus\_tag.The framework to assign the locus\_tag
    prefixes will be available in the near future

#### Changes to the Feature Table Document: Features and Qualifiers <a name="2005-ft"></a>

  - New amino acid abbreviations, "J" and "O"
    
      - 1\) Pyl (O); Pyrrolysine  
        The 22nd naturally encoded amino acid, pyrrolysine was
        discovered.  
        The JCBN IUBMB-IUPAC (the Joint Commission on Biochemical
        Nomenclature of IUBMB and IUPAC) has agreed that Pyl (the
        three-letter abbreviation), O (the one-letter abbreviation) will
        be recommended for this amino acid.
      - 2\) Xle (J); Leucine or Isoleucine  
        The residue abbreviations, Xle (the three-letter abbreviation)
        and J (the one-letter abbreviation) are reserved for the case
        that cannot experimentally distinguish leucine from
        isoleucine.  
        So, we are to add the following abbreviations;
        <div class="main_table format">
        | Abbreviation | 1 letter abbreviation | Amino acid name       |
        | ------------ | --------------------- | --------------------- |
        | Xle          | J                     | Leucine or Isoleucine |
        | Pyl          | O                     | Pyrrolysine           |
        </div>
        INSDC will use "J" and "O" for the [amino
        acid](/ddbj/code-e.html#amino-1) sequences of
        /[translation](/ddbj/cds-e.html#translation) qualifiers in
        [CDS](/ddbj/cds-e.html) features.

  - Two old qualifiers, /transposon and /insertion\_seq, will be
    integrated into a new qualifier,
    /[mobile\_element](/ddbj/qualifiers-e.html#mobile_element). The
    qualifier will be legal on only
    [repeat\_region](/ddbj/features-e.html#repeat_region) feature as
    below;
    
    ``` flat-file code
    Format:
              /mobile_element="<mobile_element_type>[:<mobile_element_name>]"
    Example:
              /mobile_element="transposon:Tnp9"
    ```
    
    The specified value for \<mobile\_element\_type\> is either of
    followings;
    
      - transposon
      - retrotransposon
      - integron
      - insertion sequence
      - non-LTR retrotransposon
      - SINE
      - MITE
      - LINE
      - other

  - "viral cRNA" is added to the specified values for the qualifier,
    /[mol\_type](/ddbj/qualifiers-e.html#mol_type) that indicates
    molecule type of the sequence *in vivo* on the
    [source](/ddbj/features-e.html#source) feature.
    
    Definition of "viral cRNA"  
    cRNA is a plus-strand copy of a minus strand RNA genome which serves
    as a template to make viral progeny genomes

  - The /[operon](/ddbj/qualifiers-e.html#operon) qualifier will be
    legal on [rRNA](/ddbj/features-e.html#rRNA) feature.

  - /[EC\_number](/ddbj/qualifiers-e.html#EC_number) should be more
    controlled.
    
    Furthermore, we will accept the symbol "n" (initial of "new") to
    indicate that the code is not available now and will be assigned
    later.

  - For the values of
    /[PCR\_primers](/ddbj/qualifiers-e.html#PCR_primers) qualifier,
    modified base codes.
    
    Modified base codes (i.e. "i"; inosine) are required to be described
    with enclosing in the brackets; "\<" and "\>" for the values of
    /PCR\_primers.
    
    ``` flat-file code
    Example:
              /PCR_primer="fwd_name; hoge1, fwd_seq;cgkgtgtatcttact
              rev_name; hoge2, rev_seq;cg<i>gtgtatcttact"
    ```

  - [The rules for the description of location](/ddbj/location-e.html)
    will be slightly changed.
    
    The use of range "(m.n)" descriptor will be discontinued.

</div>

## 2005 <a name="2005"></a>

<div>

### 18th ICM: May 16-18 2005, Mishima, Japan

To operate and implement the collaborative construction of the
international nucleotide sequence database, the three data banks; DDBJ,
EMBL-Bank/EBI, GenBank/NCBI hold the international collaborators meeting
every year.In 2005, the meeting was held at DDBJ in Mishima, 16-18 May.

DDBJ, EMBL-Bank, GenBank reported each databank activities in the last
year, discussed practical matters to maintain and to update the
nucleotide sequence database. The outcomes of the meeting are summarized
below.

#### The Items; Discussed and To Be Studied

The international nucleotide sequence database constructed by the
collaboration among DDBJ, EMBL-Bank and GenBank was agreed to be
calledINSDC; International Nucleotide Sequence Database Collaboration.
INSDC has made public its web site;
[//www.insdc.org/](http://www.insdc.org/)

Since 2003, we have discussed the format of INSDSeq-XML.DDBJ has made
the trial data in INSDSeq-XML format available at its FTP site and its
retrival tool, getentry, in advance of EMBL-Bank and GenBank

Since 2004, we have accepted the submission of [MGA
data](/ddbj/mga-e.html). We reconsidered the rules for acceptance and
the format for distribution.

Since 2002, we have accepted [TPA submission](/ddbj/tpa-e.html). In the
past, some biological evidence was required for the TPA submission. Now,
we are planning to accept the inferred sequences by non-experimental
evidence. We will continue to discuss the guideline for acceptance and
classification of TPA submissions.

Since 2003, the /[locus\_tag](/ddbj/qualifiers-e.html#locus_tag)
qualifier has been used as the identifier for the tracking purpose by
many genome projects. In the past, we allowed submitters to use the
flexible prefixes for their locus\_tag. However, since we are afraid
that it would cause some disruption in the future, we will manage and
assign prefixes of locus\_tag to keep uniquness through the whole
database. In association with it, we will improve our flat file format
to include the project ID that can be utilized to specify the project
(mainly for genome projects).

Relating to their strandness and partiality, rRNA sequences are not
consistently annotated in the database. It was agreed that we should
check them,and also that the same preference for plus stranded
annotation should be applied to other single feature.

#### Changes to the Feature Table Document: Features and Qualifiers <a name="2005-ft"></a>

For features, especially [CDS](/ddbj/cds-e.html), the database users
demand the information if the feature description is based on some
biological experiment or only inference based on sequence similarity or
so.  
To make the evidence information available, evidence qualifier will be
split into two new qualifiers,
/[experiment](/ddbj/qualifiers-e.html#experiment) and
/[inference](/ddbj/qualifiers-e.html#inference);

  - a) An argument of the feature based on some biological experiment
    
      - instead of /evidence=experimental
      - /experiment="free text" (less than 1000 letters)

  - b) An argument of the feature not based on any biological experiment
    
      - instead of /evidence=not\_experimental
      - /inference="\[TYPE\]( same species):\[evidence basis\]"
      - The values of \[TYPE\] will be controlled by the list.

  - \- note -  
    The old qualifier, /evidence=experimental or not\_experimental, will
    be replaced by folowings, respectively;
    
      - /experiment="experimental evidence, no additional details
        recorded"
      - /inference="non-experimental evidence, no additional details
        recorded"

Recently, the number of the entries for the research of environmental
sampling and divergence of the life (e.g. the BARCODE project) is
significantly increased. For these submission, it is important to
describe the information on specification of the specimen from which the
sequence is obtained. So, five new qualifiers will become legal on the
[source](/ddbj/features-e.html#source) feature;

  - /[collection\_date](/ddbj/qualifiers-e.html#collection_date)="DD MMM
    YYYY", "MMM YYYY" or "YYYY"
      - DD ; two-digit for the date,
      - MMM ; three letter for the month abbreviation
      - YYYY; four-digit for the year
  - /[lat\_lon](/ddbj/qualifiers-e.html#lat_lon)="\#\#\#.\#\# \[N or
    S\], \#\#\#.\#\# \[E or W\]"
  - /[collected\_by](/ddbj/qualifiers-e.html#collected_by)="\[Name of
    the person who collected the specimen.\]""
  - /[identified\_by](/ddbj/qualifiers-e.html#identified_by)="\[Name of
    the person who identified the specimen.\]"
  - /[PCR\_primers](/ddbj/qualifiers-e.html#PCR_primers)="fwd\_name:\[name\],fwd\_seq:\[sequence\],rev\_name:\[name\],
    rev\_seq:\[sequence\]"

The /pseudo qualifier will be legal on
[intron](/ddbj/features-e.html#intron) and
[misc\_RNA](/ddbj/features-e.html#misc_RNA) features.

The /rpt\_unit qualifier will be split into two new qualifiers;
/rpt\_unit\_range and
/[rpt\_unit\_seq](/ddbj/qualifiers-e.html#rpt_unit_seq) will be
introduced.

Two new qualifiers,
/[ribosomal\_slippage](/ddbj/qualifiers-e.html#ribosomal_slippage) and
/[trans\_splicing](/ddbj/qualifiers-e.html#trans_splicing) will be valid
on the [CDS](/ddbj/features-e.html#cds) feature.

"hydrogenosome" will be added to the list of legal values for the
/[organelle](/ddbj/qualifiers-e.html#organelle) qualifier.

#### Changes to Other Items

[The rules for the description of location](/ddbj/location-e.html) will
be changed;

Combinations of "join" and "order" operators in one location will be
illegal.

The use of two identical location construction operators within one
location will be illegal.  
i.e. "100..100" will be illegal.

The usage of "^" will be restricted to adjacent nucleotides  
i.e. "100^200" will be illegal.

The use of range (m.n) descriptor within location spans will be
illegal.  
i.e. "(5.10)..100" will be illegal.

</div>
