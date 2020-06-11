---
layout: indexed_content
title: Trace Archive
pathname: submission-e
category: aboutdta
---

<div id="page" class="top">

<div id="header" class="clearfix">

<div id="header-top">

[![](/images/parts/ddbj-logo-white.svg)](/index-e.html "DNA Data Bank of Japan")

<div id="header-top-left">

<span class="resources-btn">Services**</span>

</div>

<div id="header-top-right">

  - [Login & Submit](https://ddbj.nig.ac.jp/D-way)
  - [Policies and Disclaimers](/policies-e.html)
  - [Contact](/contact-e.html)
  - [Japanese](/dta/submission.html)

</div>

</div>

<div class="resources-contents">

<div class="boxContainer">

<div class="resources-box">

  - ### ![](/images/logos/service-org.svg)Search

  - [getentry](http://getentry.ddbj.nig.ac.jp/top-e.html "Retrieve sequence records by accession numbers")

  - [ARSA](http://ddbj.nig.ac.jp/arsa/ "Retrieve sequence and annotation by keywords")

  - [DRA
    Search](http://ddbj.nig.ac.jp/DRASearch "Search and retrieve sequencing data.")

  - [TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en "Search unified taxonomy database")

  - [BLAST](http://blast.ddbj.nig.ac.jp/blastn?lang=en "Search nucleotide sequences by sequence similarity")

<!-- end list -->

  - ### ![](/images/logos/wrench.svg)Analysis

  - [Vector Screening
    System](http://ddbj.nig.ac.jp/vecscreen/ "Screen vector sequences")

  - [ClustalW](http://clustalw.ddbj.nig.ac.jp/index.php?lang=en "Multiple alignment and tree-making")

  - [WABI (Web API for
    Biology)](/search/help/wabi/wabi-e.html "Web API for using the search services of DDB")

  - [DDBJ FTP
    Site](ftp://ftp.ddbj.nig.ac.jp/ "Download public data by ftp")

</div>

<div class="resources-box">

  - ### ![](/images/logos/database-org.svg)Databases

  - [Annotated/Assembled Sequences
    (DDBJ)](/ddbj/index-e.html "Annotated/Assembled Sequences (DDBJ)")

  - [Sequence Read Archive
    (DRA)](/dra/index-e.html "Sequence Read Archive")

  - [Genomic Expression Archive
    (GEA)](/gea/index-e.html "Genomic Expression Archive")

  - [BioProject](/bioproject/index-e.html "BioProject")

  - [BioSample](/biosample/index-e.html "BioSample")

  - [Japanese Genotype-phenotype Archive
    (JGA)](/jga/index-e.html "Japanese Genotype-phenotype Archive")

  - [Submission portal
    D-way](https://ddbj.nig.ac.jp/D-way "Submission portal D-way")

<!-- end list -->

  - ### ![](/images/logos/sc-org.svg)NIG SuperComputer

  - [NIG
    SuperComputer](https://sc.ddbj.nig.ac.jp/en "NIG SuperComputer")

</div>

<div class="resources-box dbcls">

  - ### ![](/images/logos/dbcls-s.svg)DBCLS Services

  - [AOE](http://aoe.dbcls.jp/en "Statistics and trends of gene expression data")

  - [CRISPRdirect](https://crispr.dbcls.jp/ "Designing CRISPR/Cas9 guide RNA with reduced off-target sites")

  - [DBCLS
    SRA](http://sra.dbcls.jp/ "Statistics and trends of SRA data")

  - [Gendoo](http://gendoo.dbcls.jp/ "Functional profiling of gene and disease features for omics analysis")

  - [GGGenome](https://gggenome.dbcls.jp/en/ "A ultrafast sequence search")

  - [GGRNA](https://ggrna.dbcls.jp/en/ "A Google-like, ultrafast search engine for genes and transcripts")

  - [RefEx](http://refex.dbcls.jp/index.php?lang=en "A web tool for a comfortable search of reference data for gene expression analysis")

</div>

</div>

</div>

<div id="header-middle" class="clearfix">

<div class="page-title">

[Trace Archive](/dta/index-e.html)

</div>

<div class="search-box">

<div id="search-box-flex">

<div class="search-options-wrapper">

BI-DDBJ Web Sites Annotated/Assembled Sequences Sequence Read Archive

</div>

</div>

</div>

</div>

<div id="header-bottom">

  - [Home](/dta/index-e.html)
  - [Submission](/dta/submission-e.html)
  - [Downloads](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dta/)
  - [About DTA](/dta/about-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/dta/index-e.html "DDBJ Trace Archive top page")
  - \>
  - Trace Archive

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# Trace Archive

<div class="section book">

<div class="section chapter">

## Trace Archive overview

[DDBJ Trace Archive (DTA)](/index-e.html)is a permanent repository of
DNA sequence chromatograms (traces), base calls, and quality estimates
for single-pass reads from various large-scale sequencing projects. DTA
is a member of the [International Nucleotide Sequence Database
Collaboration (INSDC)](/insdc-e.html)and collects the data in a
collaboration with
[NCBI](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi)and
[EBI](https://www.ebi.ac.uk/ena/). [NCBI Trace
Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi)issues and
manages IDs.

Released data can be searched and retrieved at the [NCBI Trace
Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi).

[DDBJ Sequence Read Archive](/dra/submission-e.html#dra)accepts trace
data. Please consider to submit trace data to DRA.

</div>

<div class="section chapter">

## Metadata

There are fields that are required for specific combinations of
[STRATEGY](#STRATEGY)and [TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE). You may
check requirements in the [Validation
Table](/files/submission/field_matrix_current.xls). Metadata can be
searched at the [NCBI Trace
Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=retrieve&f=retrieve&m=obtain&s=search).

[Trace Archive RFC](/files/specification/trace_rfc.pdf)

Required<span class="required">\*</span>  
May be required, depending upon the trace type and strategy
employed<span class="conditionally_required">\*</span>

<div class="news_post_container archive glossary dta">

<div class="section terms section">

### Metadata Field List

  - [ACCESSION](#ACCESSION)  
    DDBJ/EMBL/Genbank accession number <span class="dta_type">Type:
    varchar(30)</span> <span class="dta_example">Example: AC22227</span>
    The <span class="dta_metadata">[ACCESSION](#ACCESSION)</span> is
    assigned upon deposition to a public repository (DDBJ/EMBL/Genbank).
    This field will not be applicable to all trace types (primarily
    WGS). However, if this field contains a validaccession identifier
    correlation between the primary sequence data (in Trace) and the
    secondary sequence data (in the public repository) is facilitated.

<!-- end list -->

  - [AMPLIFICATION\_FORWARD](#AMPLIFICATION_FORWARD)<span class="conditionally_required">\*</span>  
    The forward amplification primer sequence
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: GGATTCTGACTAACGAGC</span> The
    <span class="dta_metadata">[AMPLIFICATION\_FORWARD](#AMPLIFICATION_FORWARD)</span>
    field is to allow submitters to define the primers used to amplify
    templates for sequencing. This field is required when
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR
    or RT-PCR.

<!-- end list -->

  - [AMPLIFICATION\_REVERSE](#AMPLIFICATION_REVERSE)<span class="conditionally_required">\*</span>  
    The reverse amplification primer sequence.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: GGATTCTGACTAACGAGC</span> The
    <span class="dta_metadata">[AMPLIFICATION\_REVERSE](#AMPLIFICATION_REVERSE)</span>
    field is to allow submitters to define the primers used to amplify
    templates for sequencing. This field is required when
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR
    or RT-PCR.

<!-- end list -->

  - [AMPLIFICATION\_SIZE](#AMPLIFICATION_SIZE)  
    The expected amplification size for a pair of primers.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 500</span> The
    <span class="dta_metadata">[AMPLIFICATION\_SIZE](#AMPLIFICATION_SIZE)</span>
    field allows submitters to define the expected amplification size
    for a pair of primers (defined in the
    <span class="dta_metadata">[AMPLIFICATION\_FORWARD](#AMPLIFICATION_FORWARD)</span>
    and
    <span class="dta_metadata">[AMPLIFICATION\_REVERSE](#AMPLIFICATION_REVERSE)</span>fields).
    This number should be given in base pairs. If
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR,
    the amplification size is based on amplification of genomic DNA. If
    the
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=RT-PCR,
    then the amplification size is based on amplification of transcript.

<!-- end list -->

  - [ANONYMIZED\_ID](#ANONYMIZED_ID)  
    Anonymous ID for an individual. <span class="dta_type">Type:
    varchar(100)</span> <span class="dta_example">Example:
    2222anonym</span> Used in projects to maintain the anonymity of
    donors. In many cases, there may be a controlled access database
    that can map many anonymized\_ids in the trace archive to a single
    individual id for which phenotypic information may be available.

<!-- end list -->

  - [ATTEMPT](#ATTEMPT)  
    Number of times the sequencing project has been attempted by the
    center and/or submitted to the Trace Archive.
    <span class="dta_type">Type: tinyint(1-255)</span>
    <span class="dta_example">Example: 2</span>

<!-- end list -->

  - [BASE\_FILE](#BASE_FILE)  
    File name with base calls. <span class="dta_type">Type:
    varchar(200)</span> <span class="dta_example">Example:
    ./mytraces/123clone.fasta</span> Trace files which do not include
    the basecalls must provide this information in a separate file. The
    file designations are recorde din the
    <span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> field of
    the metadata file. If basecalls are provided in separate files the
    information in these files will overwrite any information in the
    trace (usually \*.scf) file. If the base calls that would be
    provided in the
    <span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> are the
    same as the information in the trace file, DO NOT PROVIDE THE FILE.
    If the center provides
    the<span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span>
    and<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span>, then
    the peak index information should also be provided in a file
    called<span class="dta_metadata">[PEAK\_FILE](#PEAK_FILE)</span>.

<!-- end list -->

  - [CENTER\_NAME](#CENTER_NAME)<span class="required">\*</span>  
    Name of the sequencing center. <span class="dta_type">Type:
    varchar(50)</span> <span class="dta_example">Example: WUGSC</span>
    Sequencing centers wishing to submit data must contact the DDBJ
    Trace Archive administrators to determine a center abbreviation.
    This abbreviation issued in the
    <span class="dta_metadata">[CENTER\_NAME](#CENTER_NAME)</span>field.
    This field has a controlled vocabulary. For the complete list of
    submitting centers see:
    [http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting\_centers](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting_centers)
    
    <span class="attention_text">These center names are controlled
    separately from those of the Sequence Read Archive</span>

<!-- end list -->

  - [CENTER\_PROJECT](#CENTER_PROJECT)<span class="required">\*</span>  
    Center defined project name. <span class="dta_type">Type:
    varchar(100)</span> <span class="dta_example">Example: HBBB</span>
    The
    <span class="dta_metadata">[CENTER\_PROJECT](#CENTER_PROJECT)</span>
    reflects a sequencing center's internal designation for a specific
    sequencing project.This field can be useful for grouping related
    traces.

<!-- end list -->

  - [CHEMISTRY](#CHEMISTRY)  
    Description of the chemistry used in the sequencing reaction.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: BIGDYEV3.0</span>

<!-- end list -->

  - [CHEMISTRY\_TYPE](#CHEMISTRY_TYPE)  
    Type of chemistry used in the sequencing reaction.
    <span class="dta_type">Type: char(50)</span>
    <span class="dta_example">Example: P</span> The
    <span class="dta_metadata">[CHEMISTRY\_TYPE](#CHEMISTRY_TYPE)</span>
    uses a controlled list.  
    Accepted values are:  
    PrimerTerminatorp=primer; t=terminator

<!-- end list -->

  - [CHROMOSOME](#CHROMOSOME)  
    Chromosome to which the trace is assigned.
    <span class="dta_type">Type: varchar(8)</span>
    <span class="dta_example">Example: 11</span> The
    <span class="dta_metadata">[CHROMOSOME](#CHROMOSOME)</span>indicates
    to which chromosome a trace has been assigned. Gene names or
    cytogenetic positions are not appropriate substitutes for chromosome
    information.

<!-- end list -->

  - [CLIP\_QUALITY\_LEFT](#CLIP_QUALITY_LEFT)  
    Left clip of the read, in base pairs, based on quality analysis.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 56</span> The
    <span class="dta_metadata">[CLIP\_QUALITY\_LEFT](#CLIP_QUALITY_LEFT)</span>
    field indicates the base at the beginning of the sequence at which
    the read should be clipped due to poor quality sequence. The given
    value would be the first base of the high quality region of the
    trace.

<!-- end list -->

  - [CLIP\_QUALITY\_RIGHT](#CLIP_QUALITY_RIGHT)  
    Right clip of the read, in base pairs, based on quality analysis.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 256</span> The
    <span class="dta_metadata">[CLIP\_QUALITY\_RIGHT](#CLIP_QUALITY_RIGHT)</span>
    field indicates the base at the end of the sequence at which the
    read should be clipped due to poor quality sequence. The given value
    would be the last base of the high quality region of the trace.

<!-- end list -->

  - [CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)<span class="conditionally_required">\*</span>  
    Left clip of the read, in base pairs, based on vector sequence.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 75</span> The
    <span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span>
    field indicates the base at the beginning of the sequence at which
    the read should be clipped due to vector sequence. The given value
    would be the first base of non-vector sequence. This field is
    required for almost all combinations of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>.
    This information can be omitted if the
    <span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span>
    field is populated or
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>
    is PCR or RT-PCR.

<!-- end list -->

  - [CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)<span class="conditionally_required">\*</span>  
    Right clip of the read, in base pairs, based on vector sequence.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 275</span> The
    <span class="dta_metadata">[CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)</span>
    field indicates the base at the end of the sequence at which the
    read should be clipped due to vector sequence. The given value would
    be the last non-vector sequence. This field is required for almost
    all combinations of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>.
    This information can be omitted if the
    <span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span>
    field is populated or
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>
    is PCR or RT-PCR.<span class="warning">NOTE:</span> Many centers
    combine vector and quality analysis, and thus have only one set of
    clip values. Inthis case, the set of values should be placed in the
    <span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span>/<span class="dta_metadata">[CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)</span>
    fields.

<!-- end list -->

  - [CLONE\_ID](#CLONE_ID)<span class="conditionally_required">\*</span>  
    The name of the clone from which the trace was derived.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: RP23-1123F10</span> The
    <span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span> field
    issued to store the identifier related to an individual clone, for
    example a BAC clone, PAC clone or cDNA clone. If the clone is
    registered with the clone
    registry([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)),
    standard clone registry nomenclature
    ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))
    should be used.  
    This field is required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=EST;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=ENCODE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN;  
    PrimerWalk; CLONEEND
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=FINISHING;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [CLONE\_ID\_LIST](#CLONE_ID_LIST)<span class="conditionally_required">\*</span>  
    Semi-colon delimited list of clones if the Strategy is PoolClone.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: RP23-200A2;RP23-500P1</span> The
    <span class="dta_metadata">[CLONE\_ID\_LIST](#CLONE_ID_LIST)</span>field
    is used only if
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=PoolClone.
    In this case, the list of clones is provided as a semicolon
    delimited list. If the clones are registered with the Clone Registry
    ([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)),
    standard clone registry nomenclature
    ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))
    should be used (see
    <span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span>
    field).Note: The list of clones is not limited, but the size of the
    individual clone within the list is limited to 30 bytes.  
    This field is required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=PoolClone;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [COLLECTION\_DATE](#COLLECTION_DATE)<span class="conditionally_required">\*</span>  
    The full date, in "Mar 2 2006 12:00AM" format, on which an
    environmental sample was collected. <span class="dta_type">Type:
    datetime</span> <span class="dta_example">Example: Mar 2 2006
    12:00AM</span> The
    <span class="dta_metadata">[COLLECTION\_DATE](#COLLECTION_DATE)</span>
    field is used to define the date and time on which an environmental
    sample was collected.  
    This field is required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env
    Sample-Geo;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env
    Sample-Host;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [CVECTOR\_ACCESSION](#CVECTOR_ACCESSION)  
    Repository (DDBJ/EMBL/Genbank) accession identifier for the cloning
    vector. <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: AY451994</span> The
    <span class="dta_metadata">[CVECTOR\_ACCESSION](#CVECTOR_ACCESSION)</span>
    field holds the accession number for the cloning vector used. This
    cloning vector relates to the clone named in the
    <span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span> field.

<!-- end list -->

  - [CVECTOR\_CODE](#CVECTOR_CODE)  
    Center defined code for the cloning vector.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: PBACE3.6</span> The
    <span class="dta_metadata">[CVECTOR\_CODE](#CVECTOR_CODE)</span>
    field holds the user defined identifier for the cloning vector.
    Submitters are encouraged to submit all vector sequence information
    to public repositories.

<!-- end list -->

  - [DEPTH](#DEPTH)  
    Depth (in meters) at which an environmental sample was collected.
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 10M</span> The
    <span class="dta_metadata">[DEPTH](#DEPTH)</span> field is
    applicable to water samples and earth samples. If the value of this
    field is NULL, it is anticipated the sample was taken from the
    surface of the environment. While this field is only applicable to
    environmental samples, it is not required.

<!-- end list -->

  - [ELEVATION](#ELEVATION)  
    Elevation (in meters) at which an environmental sample was
    collected. <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 500</span> If the value of this
    field is NULL it is assumed the data were obtained at sea level. The
    field <span class="dta_metadata">[ELEVATION](#ELEVATION)</span> is
    only applicable to some environmental sample data, but is not a
    required field.

<!-- end list -->

  - [ENVIRONMENT\_TYPE](#ENVIRONMENT_TYPE)<span class="conditionally_required">\*</span>  
    Type of environment from which an environmental sample was
    collected. <span class="dta_type">Type: varchar(250)</span>
    <span class="dta_example">Example: sea water</span> The
    <span class="dta_metadata">[ENVIRONMENT\_TYPE](#ENVIRONMENT_TYPE)</span>
    field is used to describe the specific environment from which an
    environmental sample was taken. While the
    <span class="dta_metadata">[LATITUDE](#LATITUDE)</span> and
    <span class="dta_metadata">[LONGITUDE](#LONGITUDE)</span> fields
    describe the location many types of environmental types could exist
    at this location (for example, soil, sludge, tree roots, etc).  
    This field would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample
    -Geo;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [EXTENDED\_DATA](#EXTENDED_DATA)  
    Extra ancillary information wrapped around in a EXTENDED\_DATA
    block, where actual values are provided with a special \<field\>
    tag. <span class="dta_type">Type: varchar()</span>
    <span class="dta_example">Example:</span>
    <div class="ex1">
    \<extended\_data\>  
    \<field name='SamplingSiteMonthChlorophyllLevel'\>1.4
    mg\_mm\</field\>  
    \<field name='SamplingSiteYearlyChlorophyllLevel'\>1.12
    mg\_mm\</field\>  
    \<field name='SamplingSiteYearlyChlorophyllLevelStdError'\>0.19
    mg\_mm\</field\>  
    \</extended\_data\>
    </div>
    The '=' sign and the field separator character '|' should be
    excluded from names and their values. No other validity checks will
    be performed on the data.

<!-- end list -->

  - [FEATURE\_ID\_FILE](#FEATURE_ID_FILE)  
    File describing the features and their locations on a chip.
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example: ./mytraces/chip2.cdf</span> The
    <span class="dta_metadata">[FEATURE\_ID\_FILE](#FEATURE_ID_FILE)</span>
    provides the location and sequence of the features for a given chip
    when
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP".

<!-- end list -->

  - [FEATURE\_ID\_FILE\_NAME](#FEATURE_ID_FILE_NAME)<span class="conditionally_required">\*</span>  
    Reference to a common FEATURE\_ID\_FILE which should be submitted
    first. <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example:</span> This field is required
    when
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP".

<!-- end list -->

  - [FEATURE\_SIGNAL\_FILE](#FEATURE_SIGNAL_FILE)  
    File giving the signal and variance for features on a chip.
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example: ./mytraces/chip2.signal</span>
    The
    <span class="dta_metadata">[FEATURE\_SIGNAL\_FILE](#FEATURE_SIGNAL_FILE)</span>
    provides the signal and variance of signal for the features on a
    given chip when
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP".

<!-- end list -->

  - [FEATURE\_SIGNAL\_FILE\_NAME](#FEATURE_SIGNAL_FILE_NAME)<span class="conditionally_required">\*</span>  
    Reference to a common FEATURE\_SIGNAL\_FILE which should be
    submitted first. <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example:</span> This field is required
    when
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP".

<!-- end list -->

  - [GENE\_NAME](#GENE_NAME)  
    Gene name or some other common identifier.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: transporter 1</span> Free text.
    Mainly this field would be for
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>='Re-sequencing'
    or'ENCODE'. When a group is analyzing a particular gene, they may
    want to refer to that gene by it's name or some other common
    identifier.

<!-- end list -->

  - [HI\_FILTER\_SIZE](#HI_FILTER_SIZE)  
    The largest filter used to stratify an environmental sample.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: 50 micron</span> The
    <span class="dta_metadata">[HI\_FILTER\_SIZE](#HI_FILTER_SIZE)</span>
    field is applicable only to environmental sample data but is not a
    required field.

<!-- end list -->

  - [HOST\_CONDITION](#HOST_CONDITION)  
    The condition of the host from which an environmental sample was
    obtained. <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: HIV-positive</span> The
    <span class="dta_metadata">[HOST\_CONDITION](#HOST_CONDITION)</span>
    field is only applicable to environmental sample data and is used to
    describe the condition (healthy, sick, etc) of the host from which a
    sample was taken.

<!-- end list -->

  - [HOST\_ID](#HOST_ID)<span class="conditionally_required">\*</span>  
    Unique identifier for the specific host from which an environmental
    sample was taken. <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: yerkes pedigree \#C0479
    'Clint'</span> The
    <span class="dta_metadata">[HOST\_IDENTIFIER](#HOST_IDENTIFIER)</span>
    field is only applicable to environmental sample data and is used to
    capture the unique name for the specific host from which a sample
    was obtained.  
    This field would be required for the following combination
    of<span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env
    Sample-Host;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [HOST\_LOCATION](#HOST_LOCATION)<span class="conditionally_required">\*</span>  
    Specific location on the host from which an environmental sample was
    collected. <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: rumen</span> The
    <span class="dta_metadata">[HOST\_LOCATION](#HOST_LOCATION)</span>
    field is only applicable to environmental sample data and is used to
    describe the specific part of the host from which the sample was
    obtained, for example: dental plaque, hindgut, root surfaces.  
    This field would be required for the following combination
    of<span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env
    Sample-Host;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [HOST\_SPECIES](#HOST_SPECIES)<span class="conditionally_required">\*</span>  
    The host from which an environmental sample was obtained.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: Pan troglodytes</span> The
    <span class="dta_metadata">[HOST\_SPECIES](#HOST_SPECIES)</span>
    field is only applicable to environmental sample data.  
    This field would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env
    Sample-Host;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [INDIVIDUAL\_ID](#INDIVIDUAL_ID)  
    Publicly available identifier to denote a specific individual or
    sample from which a trace was derived. <span class="dta_type">Type:
    varchar(100)</span> <span class="dta_example">Example:
    NA12345</span> The
    <span class="dta_metadata">[INDIVIDUAL\_ID](#INDIVIDUAL_ID)</span>field
    provides a center specific unique id that can associate as pecific
    trace to an individual. This will be used primarily for population
    based studies.

<!-- end list -->

  - [INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)<span class="conditionally_required">\*</span>  
    Flanking sequence at the cloning junction.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example:
    AAGGTGCGATGCAGTGGCAGTAGCAGTGTCGACGTGACGATTCGTCCGGA</span> The
    <span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span>
    field should provide from 50 up to 100 bases of sequence (including
    linkers) to the left of the cloning junction. This information will
    allow users to perform their own vector trimming of reads. This
    field is required for almost all combinations of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>.
    This field can be omitted if
    <span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span>
    is populated.However,
    <span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span>
    is the preferred choice. If there was no cloning step involved in
    the sequencing, please populate the field with 'NONE'.

<!-- end list -->

  - [INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)<span class="conditionally_required">\*</span>  
    Flanking sequence at the cloning junction.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example:
    AAGGCGCGATGCAGTGAGCGAGGCTGACGTCGGCTAGCGTCGCGTCGGGT</span> The
    <span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span>
    field should provide from 50 up to 100 bases of sequence (including
    linkers) to the right of the cloning junction. This information will
    allow users to perform their own vector trimming of reads. This
    field is required for almost all combinations of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>.
    This field can be omitted if
    <span class="dta_metadata">[CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)</span>
    is populated.However,
    <span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span>
    is the preferred choice. If there was no cloning step involved in
    the sequencing, please populate the field with 'NONE'. It is
    anticipated that if
    <span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span>
    is populated that
    <span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span>
    will also be populated. It is not anticipated that a mixture of clip
    values and junction sequence will be specified. (i.e.
    <span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span>
    and<span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span>
    populated for the same record.

<!-- end list -->

  - [INSERT\_SIZE](#INSERT_SIZE)<span class="conditionally_required">\*</span>  
    Expected size of the insert (referred to by the value in the
    TEMPLATE\_ID field) in base pairs <span class="dta_type">Type:
    int</span> <span class="dta_example">Example: 2000</span> The
    <span class="dta_metadata">[INSERT\_SIZE](#INSERT_SIZE)</span>field
    indicates the expected insert size of the clone that is sequenced.
    It is understood that this is an estimate based upon the average
    insert sizes found in a given library. However, this information is
    critical for certain experiments, such as whole genome assembly.  
    This field would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WGS<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WCS<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND

<!-- end list -->

  - [INSERT\_STDEV](#INSERT_STDEV)<span class="conditionally_required">\*</span>  
    Approximate standard deviation of value in INSERT\_SIZE field.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 200</span> The
    <span class="dta_metadata">[INSERT\_STDEV](#INSERT_STDEV)</span>field
    reflects the approximate standard deviation of the insert size. It
    is understood that this information is an approximation and may
    change as better data is obtained. This field would be required for
    the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WGS<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WCS<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND

<!-- end list -->

  - [LATITUDE](#LATITUDE)<span class="conditionally_required">\*</span>  
    The latitude measurement (using standard GPS notation) from which a
    sample was collected. <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 54.736</span> The
    <span class="dta_metadata">[LATITUDE](#LATITUDE)</span> field is
    required to describe the collection of some environmental sample
    data. The latitude range is \[-90,90\] with the equator as 0
    latitude and positive values of latitude are north of the equator.
    This field would be required for the following combination
    of<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>
    and<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-
    Geo;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [LIBRARY\_ID](#LIBRARY_ID)<span class="conditionally_required">\*</span>  
    The source of the clone identified in the CLONE\_ID field
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: RP23</span> The
    <span class="dta_metadata">[LIBRARY\_ID](#LIBRARY_ID)</span> field
    documents the source library of the archival clone resource. Many
    genomic libraries have been registered with the Clone Registry
    ([http://www.ncbi.nlm.nih.gov/clone](https://www.ncbi.nlm.nih.gov/clone))
    and the standard nomenclature
    ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))
    should be used for these libraries.  
    This field would be requiredfor the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=EST;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONE;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=ENCODE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN;PrimerWalk;
    CLONEEND

<!-- end list -->

  - [LONGITUDE](#LONGITUDE)<span class="conditionally_required">\*</span>  
    The longitude measurement (using standard GPS notation) from which a
    sample was collected. <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: -86.403</span> The
    <span class="dta_metadata">[LONGITUDE](#LONGITUDE)</span> field is
    required to describe the collection of some environmental sample
    data. The longitude is ranging from 0° at the Prime Meridian to
    +180° eastward and -180° westward.  
    This field would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env
    Sample-Geo;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [LO\_FILTER\_SIZE](#LO_FILTER_SIZE)  
    The smallest filter size used to stratify an environmental sample.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: 25 micron</span> The
    <span class="dta_metadata">[LO\_FILTER\_SIZE](#LO_FILTER_SIZE)</span>
    field is only applicable to environmental sample data but is not a
    required field.

<!-- end list -->

  - [NCBI\_PROJECT\_ID](#NCBI_PROJECT_ID)  
    BioProject ID generated by the INSDC. <span class="dta_type">Type:
    int</span> <span class="dta_example">Example: 7</span>
    <span class="dta_metadata">[NCBI\_PROJECT\_ID](#NCBI_PROJECT_ID)</span>
    field would allow to link traces to [BioProject
    database](/bioproject/index-e.html) and easily retrieve sets of
    traces from each Project. Genome sequencing centers may apply their
    project to the [DDBJ BioProject](/bioproject/index-e.html) prior the
    submission of genomic sequence data. Submitters need not submit
    sequencing data at the time they register their project.

<!-- end list -->

  - [ORGANISM\_NAME](#ORGANISM_NAME)<span class="conditionally_required">\*</span>  
    Description of species for BARCODE project from which trace is
    derived. <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: Acanthocybium solandri</span> The
    <span class="dta_metadata">[ORGANISM\_NAME](#ORGANISM_NAME)</span>
    field is used to classify the read by species for BARCODE data,
    using proper taxonomic name in accordance with [Taxonomy
    Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/).
    <span class="dta_metadata">[SPECIES\_CODE](#SPECIES_CODE)</span>="BARCODESPECIES"
    for all traces from this project. This field would be required for
    the <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=BARCODE.

<!-- end list -->

  - [PEAK\_FILE](#PEAK_FILE)  
    Name of file that contains the list of peak values.
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example: ./mytraces/123clone.peak</span>
    Consult the
    <span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> field
    description for more information.

<!-- end list -->

  - [PH](#PH)  
    The pH at which an environmental sample was collected.
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 7.2</span> The
    <span class="dta_metadata">[PH](#PH)</span> field is only applicable
    to environmental sample data but is not a required field.

<!-- end list -->

  - [PICK\_GROUP\_ID](#PICK_GROUP_ID)  
    Id to group traces picked at the same time.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 939065</span>

<!-- end list -->

  - [PLACE\_NAME](#PLACE_NAME)  
    Country in which the biological sample was collected and/or common
    name for a given location. <span class="dta_type">Type:
    varchar(250)</span> <span class="dta_example">Example: Octopus
    Springs</span> The
    <span class="dta_metadata">[PLACE\_NAME](#PLACE_NAME)</span> field
    is applicable to environmental sample data, but is not required.

<!-- end list -->

  - [PLATE\_ID](#PLATE_ID)  
    Submitter defined plate id. <span class="dta_type">Type:
    varchar(32)</span> <span class="dta_example">Example: 203</span> The
    <span class="dta_metadata">[PLATE\_ID](#PLATE_ID)</span> and
    <span class="dta_metadata">[WELL\_ID](#WELL_ID)</span> fields are
    intended to identify the storage location of the sequencing template
    (not the library well coordinate of an archival clone named in
    the<span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span> field).
    This may enable flipped or contaminated trays to be easily
    identified. If a particular experiment did not require the use of a
    plate, please populate this field with '0'.

<!-- end list -->

  - [POPULATION\_ID](#POPULATION_ID)  
    Center provided id to designate a population from which a trace (or
    group of traces) was derived. <span class="dta_type">Type:
    varchar(100)</span> <span class="dta_example">Example: CEPH</span>
    The
    <span class="dta_metadata">[POPULATION\_ID](#POPULATION_ID)</span>
    field is used to capture center specific designations of groups of
    individuals. This will likely only be useful in population
    studies(usually
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=SNP).

<!-- end list -->

  - [PREP\_GROUP\_ID](#PREP_GROUP_ID)  
    ID that defines groups of traces prepared at the same time.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: A2</span>

<!-- end list -->

  - [PRIMER](#PRIMER)  
    The primer sequence (used in the sequencing reaction).
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example: GAATACCTACGATCGCC</span> The
    value of the <span class="dta_metadata">[PRIMER](#PRIMER)</span>
    field is the actual base sequence of the sequencing primer used. If
    a center uses a primer extensively, the primer sequence can be
    entered into the list of primer codes and the
    <span class="dta_metadata">[PRIMER\_CODE](#PRIMER_CODE)</span> field
    can be used.

<!-- end list -->

  - [PRIMER\_CODE](#PRIMER_CODE)  
    Identifier for the sequencing primer used.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: Sp6</span>

<!-- end list -->

  - [PRIMER\_LIST](#PRIMER_LIST)<span class="conditionally_required">\*</span>  
    A ';' delimited list of primers used in a mapping experiment (such
    as AFLP). <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example:
    AAGGTCTGCGCGTGTC;AGCTGCGTACGTAATCG;</span> This field is required if
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>="AFLP" and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="PCR".

<!-- end list -->

  - [PROGRAM\_ID](#PROGRAM_ID)<span class="required">\*</span>  
    The program used to create the trace file.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: phred-19990722h</span> The
    <span class="dta_metadata">[PROGRAM\_ID](#PROGRAM_ID)</span> field
    is used to indicate the base calling program. This field is free
    text. Program name, version numbers or dates are very useful.  
    More example values:
      - phred-19980904e
      - abi-3.1
      - ATQA
      - TraceTuner
      - Licor
      - Megabase
      - Beckman

<!-- end list -->

  - [PROJECT\_NAME](#PROJECT_NAME)  
    Term by which to group traces from different centers based on a
    common project. <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: New Project</span> In this way
    sequencing centers that are working on the same large project can
    group all of the traces for this project using a common term. This
    field has a controlled vocabulary. Sequencing centers wishing to
    submit data must contact the DDBJ Trace Archive to determine a name
    that all members of the project agree on.

<!-- end list -->

  - [QUAL\_FILE](#QUAL_FILE)  
    Name of file containing the quality scores.
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example:
    ./mytraces/123clone.fasta.qs</span> Trace files which do not include
    the quality scores must provide this information in a separate file.
    The file designations are recorded in the
    <span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> fields of
    the metadata file. The actual quality scores are stored in the file
    designated in
    the<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> field.
    If quality scores are provided in separate files the information in
    these files will overwrite any information in the trace (usually
    \*.scf) file. If the quality scores that would be provided in the
    <span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> are the
    same as the information in the trace file, DO NOT PROVIDE THE FILE.
    However, it is important to note that if some formats do not include
    the quality scores, then these values must be provided as ancillary
    information. If the center provides
    the<span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span>
    and<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span>, then
    the peak index information should also be provided in a file
    called<span class="dta_metadata">[PEAK\_FILE](#PEAK_FILE)</span>.

<!-- end list -->

  - [REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)<span class="conditionally_required">\*</span>  
    Reference accession (use accession and version to specify a
    particular instance of a sequence) used as the basis for a
    re-sequencing project. In case of Comparative strategy show the
    basis for primers design. <span class="dta_type">Type:
    varchar(50)</span> <span class="dta_example">Example:
    NT\_029829.1</span> This field is required for the following
    combination
    of<span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing;Comparative
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [REFERENCE\_ACC\_MAX](#REFERENCE_ACC_MAX)<span class="conditionally_required">\*</span>  
    Finish position for a particular amplicon in re-sequencing or
    comparative projects. <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 30929</span> This field points to
    the finishing coordinate of the
    <span class="dta_metadata">accession.version</span> described in the
    <span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>
    field. All coordinates should be in 1 base coordinates
    (i.e.sequences start at base 1, not base 0). This field is required
    for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN;
    PCR;RT-PCR

<!-- end list -->

  - [REFERENCE\_ACC\_MIN](#REFERENCE_ACC_MIN)<span class="conditionally_required">\*</span>  
    Start position for a particular amplicon in re-sequencing or
    comparative projects. <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 29829</span> This field points to
    the starting coordinate of
    the<span class="dta_metadata">accession.version</span> described in
    the<span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>field.
    All coordinates should be in 1 base coordinates (i.e.sequences start
    at base 1, not base 0). This field is required forthe following
    combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN;
    PCR;RT-PCR

<!-- end list -->

  - [REFERENCE\_OFFSET](#REFERENCE_OFFSET)<span class="conditionally_required">\*</span>  
    Sequence offset of accession specified in REFERENCE\_ACCESSION field
    to define the coordinate start position used as the basis for a
    re-sequencing project. <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 1520899</span> This field points
    to the starting coordinate of
    the<span class="dta_metadata">accession.version</span> described in
    the<span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>field.
    All coordinates should be in 1 base coordinates (i.e.sequences start
    at base 1, not base 0). This field is required forthe following
    combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing;
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CHIP

<!-- end list -->

  - [REFERENCE\_SET\_MAX](#REFERENCE_SET_MAX)  
    Finish position for a entire re-sequencing region. This region may
    include several amplicons. <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 29829</span> This field points to
    the starting coordinate of
    the<span class="dta_metadata">accession.version</span> described in
    the
    <span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>
    field for a entire re-sequencing region. All coordinates should be
    in 1 base coordinates (i.e. sequences start at base 1, not base
    0).The REFERENCE\_ACC\_\[MIN|MAX\] and REFERENCE\_SET\_\[MIN|MAX\]
    should refer to the same REFERENCE\_ACC.

<!-- end list -->

  - [REFERENCE\_SET\_MIN](#REFERENCE_SET_MIN)  
    Start position for a entire re-sequencing region. This region may
    include several amplicons. <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 29829</span> This field points to
    the starting coordinate of
    the<span class="dta_metadata">accession.version</span> described in
    the
    <span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>
    field for a entire re-sequencing region. All coordinates should be
    in 1 base coordinates (i.e. sequences start at base 1, not base
    0).The REFERENCE\_ACC\_\[MIN|MAX\] and REFERENCE\_SET\_\[MIN|MAX\]
    should refer to the same REFERENCE\_ACC.

<!-- end list -->

  - [RUN\_DATE](#RUN_DATE)  
    Date the sequencing reaction was run. <span class="dta_type">Type:
    datetime</span> <span class="dta_example">Example: 2000-10-28</span>

<!-- end list -->

  - [RUN\_GROUP\_ID](#RUN_GROUP_ID)  
    ID used to group traces run on the same machine.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: group2</span>

<!-- end list -->

  - [RUN\_LANE](#RUN_LANE)  
    Lane or capillary of the trace. <span class="dta_type">Type:
    int</span> <span class="dta_example">Example: 1</span> The
    <span class="dta_metadata">[RUN\_LANE](#RUN_LANE)</span> documents
    the specific lane or capillary on which a trace was obtained.

<!-- end list -->

  - [RUN\_MACHINE\_ID](#RUN_MACHINE_ID)  
    ID of the specific sequencing machine on which a trace was obtained.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: machine2</span>

<!-- end list -->

  - [RUN\_MACHINE\_TYPE](#RUN_MACHINE_TYPE)  
    Type or model of machine on which a trace was obtained.
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: ABI 310</span>

<!-- end list -->

  - [SALINITY](#SALINITY)  
    The salinity at which an environmental sample was collected measured
    in parts per thousand units (promille). <span class="dta_type">Type:
    float</span> <span class="dta_example">Example: 20</span> The
    <span class="dta_metadata">[SALINITY](#SALINITY)</span> field is
    only applicable to environmental sample data but is not a required
    field.

<!-- end list -->

  - [SEQ\_LIB\_ID](#SEQ_LIB_ID)<span class="conditionally_required">\*</span>  
    Center specified M13/PUC library that is actually sequenced.
    <span class="dta_type">Type: varchar(255)</span>
    <span class="dta_example">Example: 22194</span> The
    <span class="dta_metadata">[SEQ\_LIB\_ID](#SEQ_LIB_ID)</span> field
    is the center identifier for the M13/PUC based clone that is
    actually sequenced. This will allow grouping of traces by the actual
    ligation event and is applicable to most projects. Thi svalue will
    be unique within a given center.  
    This field would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WGS/WCS

<!-- end list -->

  - [SOURCE\_TYPE](#SOURCE_TYPE)<span class="required">\*</span>  
    Source of the DNA. <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: GENOMIC DNA</span> The
    <span class="dta_metadata">[SOURCE\_TYPE](#SOURCE_TYPE)</span>field
    consists of a code. Possible values are:
      - G=Genomic DNA (includes PCR products from genomic DNA)
      - N=Non Genomic DNA (EST, cDNA, RT-PCR, screened libraries)
      - VIRAL RNA=Viral RNA
      - SYNTHETIC=Synthetic DNA
    Accepted values are G, N, GENOMIC, NON GENOMIC, VIRAL RNA,SYNTHETIC

<!-- end list -->

  - [SPECIES\_CODE](#SPECIES_CODE)<span class="required">\*</span>  
    Description of species from which trace is derived.
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: Homo sapiens</span> The
    <span class="dta_metadata">[SPECIES\_CODE](#SPECIES_CODE)</span>field
    is used to classify the read by species, using proper taxonomic
    names where possible. This field currently is maintained as a
    controlled vocabulary. For a list of species currently contained
    within the Trace Archive, see:
    [http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat\&f=xml\_list\_species\&m=obtain\&s=species](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat&f=xml_list_species&m=obtain&s=species)To
    submit a new species, please contact the DDBJ Trace Archive prior to
    submission. For cases in which it is unclear ofthe taxonomic origin
    of a specific trace the taxonomic classification 'ENVIRONMENTAL
    SEQUENCE' can be used in a case of environmental samples or
    'ARTIFICIAL SEQUENCE' in a case of artificial material.

<!-- end list -->

  - [STRAIN](#STRAIN)<span class="conditionally_required">\*</span>  
    Strain from which a trace is derived. <span class="dta_type">Type:
    varchar(50)</span> <span class="dta_example">Example:
    C57BL/6J</span> <span class="dta_metadata">[STRAIN](#STRAIN)</span>
    is required for
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>="SNP"

<!-- end list -->

  - [STRATEGY](#STRATEGY)<span class="required">\*</span>  
    Experimental STRATEGY. <span class="dta_type">Type:
    varchar(50)</span> <span class="dta_example">Example: MODEL
    VERIFY</span> Experimental
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> used when
    obtaining the trace. It is proposed that this would be a controlled
    vocabulary, but that submitters would contribute to this list as
    needed to define various experiments and projects.  
      
    <span class="dta_metadata">Current values (this list would
    continually be expanding):</span>
      - AFLP: Amplified Fragment Length Polymorphism
      - BARCODE: DNA sequence analysis of a uniform target gene to
        enable species identification
      - CCS: Concatenated cDNA sequencing
      - cDNA: Sequences generated in the process of sequencing cDNA
        clones
      - CF-S: Cot-filtered single/low-copy genomic DNA
      - CF-M: Cot-filtered moderately repetitive genomic DNA
      - CF-H: Cot-filtered highly repetitive genomic DNA
      - CF-T: Cot-filtered theoretical single-copy DNA
      - CLONE: Genomic clone based (hierarchical) sequencing
      - CLONEEND: Sequences generated from the end of a
        clone(BAC/PAC/Fosmid or cDNA)
      - Comparative: Sequences obtained using primers design from
        related species
      - CTS: Concatenated Tag Sequencing
      - Env Sample-GEO: Geographically generated environmental sample
      - Env Sample-Host: Environmental samples collected from a specific
        host
      - EST: single pass sequencing of cDNA templates
      - FINISHING: a read specifically made for finishing, could be
        either BAC finishing or Whole Genome Assembly (WGA) finishing
      - MODEL VERIFY: Sequences obtained to verify proposed gene models
      - PoolClone: Pools of clones (BACs mostly)
      - SNP: Reads used for SNP identification
      - TARGETED LOCUS: Sequences obtained from templates generated by
        primers designed to amplify a specific genetic locus
      - Re-sequencing: Re-sequencing of targeted genomic regions
      - RT-PCR: Sequences obtained using templates generated by Reverse
        Transcriptase Polymerase Chain Reaction
      - WGA: Whole Genome Assembly

<!-- end list -->

  - [SUBMISSION\_TYPE](#SUBMISSION_TYPE)<span class="required">\*</span>  
    Type of submission. <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: NEW</span> The
    <span class="dta_metadata">[SUBMISSION\_TYPE](#SUBMISSION_TYPE)</span>
    field allowed values:
      - NEW: use to submit new data
      - UPDATE: use to renew traces and their ancillary information.
        Previous data will be saved with their TI's; new traces with the
        same trace\_name's will receive new TI's and they will become
        active
      - UPDATEINFO: use to update or add ancillary information for
        already existing traces without re-submitting the entire package
        of data
      - WITHDRAW: use to withdraw traces

<!-- end list -->

  - [SVECTOR\_ACCESSION](#SVECTOR_ACCESSION)  
    DDBJ/EMBL/Genbank accession of the sequencing vector.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: X52325</span>

<!-- end list -->

  - [SVECTOR\_CODE](#SVECTOR_CODE)  
    Center defined code for the sequencing vector.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: pBluescript SK(+)</span>

<!-- end list -->

  - [TEMPERATURE](#TEMPERATURE)  
    The temperature (in <sup>o</sup>C) at which an environmental sample
    was collected. <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 30</span> The
    <span class="dta_metadata">[TEMPERATURE](#TEMPERATURE)</span>field
    is only applicable to environmental sample data but it is not a
    required field.

<!-- end list -->

  - [TEMPLATE\_ID](#TEMPLATE_ID)  
    Submitter defined identifier for the sequencing template.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: HBBBA2211</span> The
    <span class="dta_metadata">[TEMPLATE\_ID](#TEMPLATE_ID)</span>field
    is used to uniquely identify the actual template that is sequenced.
    This field, in conjunction with the TRACE\_END field, can be used to
    identify traces that should be marked as 'mate\_pairs'because they
    come from opposite ends of the same clone.

<!-- end list -->

  - [TRACE\_END](#TRACE_END)  
    Defines the end of the template contained in the read.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: F</span> The
    <span class="dta_metadata">[TRACE\_END](#TRACE_END)</span> field can
    have the following values:
      - F: FORWARD
      - R: REVERSE
      - N: UNKNOWN

<!-- end list -->

  - [TRACE\_FILE](#TRACE_FILE)<span class="required">\*</span>  
    Filename with the trace, relative to the top of the volume.
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example: ./traces/TRACE001.scf</span>

<!-- end list -->

  - [TRACE\_FORMAT](#TRACE_FORMAT)<span class="required">\*</span>  
    Format of the trace file. <span class="dta_type">Type:
    varchar(20)</span> <span class="dta_example">Example: scf</span> The
    <span class="dta_metadata">[TRACE\_FORMAT](#TRACE_FORMAT)</span>field
    can have the following values:
      - SCF - A standard file format for data from DNA sequencing
        instruments.
      - ABI - A ABI-trace file is a binary file including the trace data
        and the sequence.

<!-- end list -->

  - [TRACE\_NAME](#TRACE_NAME)<span class="required">\*</span>  
    Center defined trace identifier. <span class="dta_type">Type:
    varchar(250)</span> <span class="dta_example">Example:
    HBBBA1U2211</span> The
    <span class="dta_metadata">[TRACE\_NAME](#TRACE_NAME)</span> field
    must be unique within a center, but is not required to be unique
    between centers. The combination of
    <span class="dta_metadata">[TRACE\_NAME](#TRACE_NAME)</span> and
    <span class="dta_metadata">[CENTER\_NAME](#CENTER_NAME)</span> act
    as a unique key within the Trace Archive.

<!-- end list -->

  - [TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)<span class="required">\*</span>  
    Sequencing strategy by which the trace was obtained.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: wgs</span> The field
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>
    reflects the sequencing
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> used to
    obtain the trace.  
      
    <span class="dta_metadata">Current values:</span>
      - CHIP: Sequences obtained using microarrays (also called DNAchips
        or gene chips)
      - CLONEEND: Sequences generated from the end of a large
        insert(BAC/PAC/Fosmid) or cDNA clone
      - EST: Single Pass Expressed Sequence Tag
      - HTP SELEX: High throughput SELEX
      - OTHER: Other than PCR, PrimerWalk, SHOTGUN or TRANSPOSON for
        FINISHING
        <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>
      - PCR: Sequences obtained using templates generated by genomic
        Polymerase Chain Reaction
      - PrimerWalk: Sequences generated through a primer walkingstep
      - RT-PCR: Sequences obtained using templates generated by Reverse
        Transcriptase Polymerase Chain Reaction
      - SHOTGUN: Shotgun sequencing of clones (genomic or cDNA)
      - TRANSPOSON: Sequences obtained using templates generated
        bytransposons
      - WCS: Whole Chromosome Shotgun
      - WGS: Whole Genome Shotgun

<!-- end list -->

  - [TRANSPOSON\_ACC](#TRANSPOSON_ACC)<span class="conditionally_required">\*</span>  
    DDBJ/EMBL/Genbank accession for transposon used in generating
    sequencing template. <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: X00913</span> The
    <span class="dta_metadata">[TRANSPOSON\_ACC](#TRANSPOSON_ACC)</span>
    would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=TRANSPOSON

<!-- end list -->

  - [TRANSPOSON\_CODE](#TRANSPOSON_CODE)<span class="conditionally_required">\*</span>  
    Center defined code for transposon used in generating sequencing
    template. <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: Mu transposon</span> This
    <span class="dta_metadata">[TRANSPOSON\_CODE](#TRANSPOSON_CODE)</span>
    field would be required for the following combination of
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> and
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=TRANSPOSON

<!-- end list -->

  - [WELL\_ID](#WELL_ID)  
    Center defined well identifier for the sequencing reaction.
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: A1</span> The field
    <span class="dta_metadata">[WELL\_ID](#WELL_ID)</span> in
    combination with the field
    <span class="dta_metadata">[PLATE\_ID](#PLATE_ID)</span>, is used to
    define the storage location of the sequencing reaction (see note
    with the
    field<span class="dta_metadata">[PLATE\_ID](#PLATE_ID)</span>).
    Typically,sequencing reactions are performed in standard microtiter
    dishes having either 96 or 384 wells (see standard configurations
    below).  
    ![Standard 96 well microtiter
    configuration](/images/submission/96well.jpg
    "Standard 96 well microtiter configuration")  
    Standard 96 well microtiter configuration  
    ![Standard 384 well microtiter
    configuration](/images/submission/384well.jpg
    "Standard 384 well microtiter configuration")  
    Standard 384 well microtiter configuration

</div>

<div class="section terms section">

### Internal Fields List

  - [BASECALL\_LENGTH](#BASECALL_LENGTH)  
    Length of the trace in base pairs. <span class="dta_type">Type:
    int</span> <span class="dta_example">Example: 396</span>

<!-- end list -->

  - [BASES\_20](#BASES_20)  
    Number of base pairs for which quality score exceed 20.
    <span class="dta_type">Type: smallint</span>
    <span class="dta_example">Example: 50</span> Warning: There are some
    depositions that do not have quality scores. This is likely due to
    the center submitting ABI files and not providing quality calls
    separately.

<!-- end list -->

  - [BASES\_40](#BASES_40)  
    Number of base pairs for which quality score exceed 40.
    <span class="dta_type">Type: smallint</span>
    <span class="dta_example">Example: 50</span> Warning: There are some
    deposition sthat do not have quality scores. This is likely due to
    the center submitting ABI files and not providing quality calls
    separately.

<!-- end list -->

  - [BASES\_60](#BASES_60)  
    Number of base pairs for which quality score exceed 60.
    <span class="dta_type">Type: smallint</span>
    <span class="dta_example">Example: 50</span> Warning: There are some
    depositions that do not have quality scores. This is likely due to
    the center submitting ABI files and not providing quality calls
    separately.

<!-- end list -->

  - [LOAD\_DATE](#LOAD_DATE)  
    Date on which the data was loaded. <span class="dta_type">Type:
    smalldatetime</span> <span class="dta_example">Example: Jan 8 2001
    11:59AM</span>

<!-- end list -->

  - [MATE\_PAIR](#MATE_PAIR)  
    TI's of the reads obtained from the other end of the same template.
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 203682255</span> MATE PAIR is the
    pair of reads obtained from two ends of the same template (FORWARD
    and REVERSE).

<!-- end list -->

  - [REPLACED\_BY](#REPLACED_BY)  
    TI that replaced the current TI as "active".
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 304753779</span> This field
    points to the more recent data set. If trace was updated then the
    <span class="dta_metadata">[REPLACED\_BY](#REPLACED_BY)</span> field
    stores the<span class="dta_metadata">[TI](#TI)</span> for the new
    trace. If only ancillary information has been updated, then
    replaced\_by=0 and is not shown.

<!-- end list -->

  - [STATE](#STATE)  
    Indicates the status of the trace. <span class="dta_type">Type:
    varchar</span> <span class="dta_example">Example: active</span>
    <span class="dta_metadata">Possible values:</span>
      - active
      - updated
      - withdrawn

<!-- end list -->

  - [TAXID](#TAXID)  
    NCBI Taxonomy ID. <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 10090</span> This field links
    DDBJ Trace Archive with [NCBI Taxonomy
    Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?).

<!-- end list -->

  - [TI](#TI)  
    Trace unique internal Identifier. <span class="dta_type">Type:
    int</span> <span class="dta_example">Example: 304753779</span> It is
    given for a record at the loading stage, and any record,or number of
    records can be obtain by their identifiers.

<!-- end list -->

  - [UPDATE\_DATE](#UPDATE_DATE)  
    Date on which the data was updated/replaced.
    <span class="dta_type">Type: smalldatetime</span>
    <span class="dta_example">Example: Jul 19 2001 3:48PM</span> This
    field is used to store the date of the last update.

</div>

</div>

</div>

<div class="section chapter">

## Submit trace data

<div id="human_subject" class="attention no_top">

  - Data submission of human subjects research

For all data from human subjects researches submitted to DDBJ, it is
submitter's responsibility to ensure that the privacy of participant
(human subject) is protected in accordance with all applicable laws,
regulations and policies of submitter's institute.  
In principle, make sure to remove any direct personal identifiers of
human subjects from your submissions.  
Before submitting data from human subjects researches, read the "[Data
submission of human subjects research](/policies-e.html#human)".

</div>

<div class="section section">

### Create submission files

The metadata file (TRACEINFO file) describes the submitted data as well
as points to the location of the chromatograms. All submissions when
extracted should have a top directory. All metadata files should be
placed under that directory. In case when the submission should contain
trace files at least one more directory should be introduced to the top
directory and all trace files should be placed under that directory. The
trace files (either in [SCF](#TRACE_FORMAT)or in
[ABI](#TRACE_FORMAT)format) should not appear in the top level
directory, but rather should be in a subdirectory. It is suggested to
use the name of the traces or the name of the project for
subdirectories. There may be subdirectories within and this is
encouraged to group traces. Below are examples of the submission
directory hierarchy.

#### Submission directory hierarchy example

``` code break
TOP_DIRECTORY/
TOP_DIRECTORY/TRACEINFO
TOP_DIRECTORY/traces
TOP_DIRECTORY/traces/FLJ/
TOP_DIRECTORY/traces/FLJ/FLJA1U0001.scf
TOP_DIRECTORY/traces/FLJ/FLJA1U0002.scf
TOP_DIRECTORY/traces/FLJ/FLJA1U0003.scf
```

The [metadata](#metadata)file can be either in XML or in tab-delimited
format. The metadata requirements are in the [Validation Table
(spreadsheet format)](/files/submission/field_matrix_current.xls)for
specific combinations of STRATEGY and TRACE\_TYPE\_CODE. Both types of
metadata files can contain common fields section at the beginning of it.
This section defines common for the submission values if any.

Below are examples of TRACEINFO metadata files.

#### TRACEINFO xml example

``` code break
<?xml version="1.0"?>
<trace_volume>
   <common_fields>
      <center_name>CENTER NAME ACRONYM IS HERE</center_name>
      <center_project>FLJ</center_project>
      <source_type>N</source_type>
      <species_code>HOMO SAPIENS</species_code>
      <strategy>EST</strategy>
      <submission_type>NEW</submission_type>
      <trace_format>SCF</trace_format>
      <trace_type_code>EST</trace_type_code>
   </common_fields>
   <trace>
      <trace_name>F-3NB691000020</trace_name>
      <trace_file>./traces/F-3NB691000020.scf</trace_file>
      <clone_id>3NB691000020</clone_id>
      <library_id>3NB691</library_id>
      <template_id>3NB691000020</template_id>
   </trace>
   <trace>
      <trace_name>F-3NB691000033</trace_name>
      <trace_file>./traces/F-3NB691000033.scf</trace_file>
      <clone_id>3NB691000033</clone_id>
      <library_id>3NB691</library_id>
      <template_id>3NB691000033</template_id>
   </trace>
     --- more information ---
</trace_volume>
```

#### TRACEINFO tab-delimited text example

``` code break
center_name = CENTER NAME ACRONYM IS HERE
center_project = FLJ
source_type = N
species_code = HOMO SAPIENS
strategy = EST
submission_type = NEW
trace_format = SCF
trace_type_code = EST
trace_name  clone_id    library_id  template_id trace_file
F-3NB691000020  3NB691000020    3NB691  3NB691000020    ./traces/F-3NB691000020.scf
F-3NB691000033  3NB691000033    3NB691  3NB691000033    ./traces/F-3NB691000033.scf
--- more information ---            
```

</div>

<div class="section">

### Upload submission files

DTA creates a directory for data submission. Please contact to [the DTA
team](/contact-e.html). Transfer files by SCP according to the
[manual](/dra/submission-e.html#upload-sequence-data).

#### Submission directory example

``` code
submission/submitter_id/dta/dta_submitter_id-0001
```

<span class="attention_text">Directory for the DTA submission is
separated from those for the [DDBJ Sequence Read
Archive](/dra/index-e.html). </span>

</div>

<div class="section">

### Completion of submission

After submission files become complete, DTA can keep the data private
until the submitters instruct us to release the data. After instruction
of data release, DTA uploads the files to the NCBI Trace Archive. As
soon as the data are loaded to the NCBI Trace Archive, TI numbers are
assigned and the data become public.

<span class="attention_text">Please note that TI number assignment and
data release are concurrent events. </span>

</div>

<div class="section">

### Update

To update the records, please contact to [the DTA
team](/contact-e.html).

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook submission">

<div id="in_this_page">

## In this page

</div>

</div>

</div>

</div>

<div id="footer_original" class="clearfix">

  - [Policies and
    Disclaimers](/policies-e.html "Policies and Disclaimers")
  - [News](/news/en/index-e.html "News archives")
  - [FAQs](/faq/en/index-e.html "Frequently asked questions")
  - [Sitemap](/sitemap-e.html "Sitemap")
  - [Calendar](/calendar-e.html "DDBJ Center Calendar")
  - [Address](/access-e.html "DDBJ Center address")
  - [Contact](/contact-e.html "Contact to DDBJ Center")
  - Last modified: 2018-05-09

</div>

</div>
