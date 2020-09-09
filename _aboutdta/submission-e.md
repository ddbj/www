---
layout: indexed_content
title: Trace Archive
pathname: submission-e
category: aboutdta
lang: en
---

## Trace Archive overview <a name="overview"></a>

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

{::options parse_block_html="true" /}
<div class="attention red">
[DDBJ Sequence Read Archive](/dra/submission-e.html#dra)accepts trace
data. Please consider to submit trace data to DRA.
</div>

## Metadata <a id="metadata"></a> 

There are fields that are required for specific combinations of
[STRATEGY](#STRATEGY)and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE). You may
check requirements in the [Validation
Table](/files/submission/field_matrix_current.xls). Metadata can be
searched at the [NCBI Trace
Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=retrieve&f=retrieve&m=obtain&s=search).

[Trace Archive RFC](/files/specification/trace_rfc.pdf)

Required<span class="red">*</span>  
May be required, depending upon the trace type and strategy
employed<span class="conditionally_required">*</span>

### Metadata Field List <a name="Metadata-Field-List"></a>

[ACCESSION](#ACCESSION)<a name="ACCESSION"></a>   
: DDBJ/EMBL/Genbank accession number  

  &emsp; Type: varchar(30)  
  &emsp; Example: AC22227  

  The [ACCESSION](#ACCESSION) is assigned upon deposition to a public repository (DDBJ/EMBL/Genbank). This field will not be applicable to all trace types (primarily WGS). However, if this field contains a validaccession identifier correlation between the primary sequence data (in Trace) and the secondary sequence data (in the public repository) is facilitated.

<!-- end list -->

[AMPLIFICATION_FORWARD](#AMPLIFICATION_FORWARD)<a name="AMPLIFICATION_FORWARD"></a><span class="conditionally_required">*</span>  
: The forward amplification primer sequence  

  &emsp; Type: varchar(100)  
  &emsp; Example: GGATTCTGACTAACGAGC  

  The [AMPLIFICATION_FORWARD](#AMPLIFICATION_FORWARD) field is to allow submitters to define the primers used to amplify templates for sequencing. This field is required when [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR or RT-PCR.

<!-- end list -->

[AMPLIFICATION_REVERSE](#AMPLIFICATION_REVERSE)<a name="AMPLIFICATION_REVERSE"></a><span class="conditionally_required">*</span>  
: The reverse amplification primer sequence.  

  &emsp; Type: varchar(100)  
  &emsp; Example: GGATTCTGACTAACGAGC  

  The [AMPLIFICATION_REVERSE](#AMPLIFICATION_REVERSE) field is to allow submitters to define the primers used to amplify templates for sequencing. This field is required when [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR or RT-PCR.

<!-- end list -->

[AMPLIFICATION_SIZE](#AMPLIFICATION_SIZE)<a name="AMPLIFICATION_SIZE"></a>    
: The expected amplification size for a pair of primers.  

  &emsp; Type: int  
  &emsp; Example: 500  

  The [AMPLIFICATION_SIZE](#AMPLIFICATION_SIZE) field allows submitters to define the expected amplification size for a pair of primers (defined in the [AMPLIFICATION_FORWARD](#AMPLIFICATION_FORWARD) and [AMPLIFICATION_REVERSE](#AMPLIFICATION_REVERSE)fields). This number should be given in base pairs. If [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR, the amplification size is based on amplification of genomic DNA. If the [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=RT-PCR, then the amplification size is based on amplification of transcript.

<!-- end list -->

[ANONYMIZED_ID](#ANONYMIZED_ID)<a name="ANONYMIZED_ID"></a>  
: Anonymous ID for an individual.  

  &emsp; Type: varchar(100)  
  &emsp; Example:2222anonym  

  Used in projects to maintain the anonymity of donors. In many cases, there may be a controlled access database that can map many anonymized_ids in the trace archive to a single individual id for which phenotypic information may be available.

<!-- end list -->

[ATTEMPT](#ATTEMPT)<a name="ATTEMPT"></a>  
: Number of times the sequencing project has been attempted by the
center and/or submitted to the Trace Archive.  

  &emsp; Type: tinyint(1-255)  
  &emsp; Example: 2

<!-- end list -->

[BASE_FILE](#BASE_FILE)<a name="BASE_FILE"></a>  
: File name with base calls.   

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/123clone.fasta  

  Trace files which do not include the basecalls must provide this information in a separate file. The file designations are recorde din the [BASE_FILE](#BASE_FILE) field of the metadata file. If basecalls are provided in separate files the information in these files will overwrite any information in the trace (usually *.scf) file. If the base calls that would be provided in the [BASE_FILE](#BASE_FILE) are the same as the information in the trace file, DO NOT PROVIDE THE FILE. If the center provides the[BASE_FILE](#BASE_FILE) and[QUAL_FILE](#QUAL_FILE), then the peak index information should also be provided in a file called[PEAK_FILE](#PEAK_FILE).

<!-- end list -->

[CENTER_NAME](#CENTER_NAME)<a name="CENTER_NAME"></a><span class="red">*</span>  
: Name of the sequencing center.   

  &emsp; Type: varchar(50)  
  &emsp; Example: WUGSC  

  Sequencing centers wishing to submit data must contact the DDBJ Trace Archive administrators to determine a center abbreviation. This abbreviation issued in the [CENTER_NAME](#CENTER_NAME)field. This field has a controlled vocabulary. For the complete list of submitting centers see: [http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting_centers](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting_centers)

  <span class="red">These center names are controlled separately from those of the Sequence Read Archive</span>

<!-- end list -->

[CENTER_PROJECT](#CENTER_PROJECT)<a name="CENTER_PROJECT"></a><span class="red">*</span>  
: Center defined project name.  

  &emsp; Type: varchar(100)  
  &emsp; Example: HBBB  

  The [CENTER_PROJECT](#CENTER_PROJECT) reflects a sequencing center's internal designation for a specific sequencing project.This field can be useful for grouping related traces.

<!-- end list -->

[CHEMISTRY](#CHEMISTRY)<a name="CHEMISTRY"></a>  
: Description of the chemistry used in the sequencing reaction.  

  &emsp; Type: varchar(50)  
  &emsp; Example: BIGDYEV3.0  

<!-- end list -->

[CHEMISTRY_TYPE](#CHEMISTRY_TYPE)<a name="CHEMISTRY_TYPE"></a>  
: Type of chemistry used in the sequencing reaction.  

  &emsp; Type: char(50)  
  &emsp; Example: P  

  The [CHEMISTRY_TYPE](#CHEMISTRY_TYPE) uses a controlled list. <br>  Accepted values are:<br> PrimerTerminatorp=primer; t=terminator

<!-- end list -->

[CHROMOSOME](#CHROMOSOME)<a name="CHROMOSOME"></a>  
: Chromosome to which the trace is assigned.  

  &emsp; Type: varchar(8)  
  &emsp; Example: 11  

  The [CHROMOSOME](#CHROMOSOME)indicates to which chromosome a trace has been assigned. Gene names or cytogenetic positions are not appropriate substitutes for chromosome information.

<!-- end list -->

[CLIP_QUALITY_LEFT](#CLIP_QUALITY_LEFT)<a name="CLIP_QUALITY_LEFT"></a>  
: Left clip of the read, in base pairs, based on quality analysis.  

  &emsp; Type: int  
  &emsp; Example: 56  

  The [CLIP_QUALITY_LEFT](#CLIP_QUALITY_LEFT) field indicates the base at the beginning of the sequence at which the read should be clipped due to poor quality sequence. The given value would be the first base of the high quality region of the trace.

<!-- end list -->

[CLIP_QUALITY_RIGHT](#CLIP_QUALITY_RIGHT)<a name="CLIP_QUALITY_RIGHT"></a>  
: Right clip of the read, in base pairs, based on quality analysis.  

  &emsp; Type: int  
  &emsp; Example: 256  

  The [CLIP_QUALITY_RIGHT](#CLIP_QUALITY_RIGHT) field indicates the base at the end of the sequence at which the read should be clipped due to poor quality sequence. The given value would be the last base of the high quality region of the trace.

<!-- end list -->

[CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT)<a name="CLIP_VECTOR_LEFT"></a><span class="conditionally_required">*</span>  
: Left clip of the read, in base pairs, based on vector sequence.  

  &emsp; Type: int  
  &emsp; Example: 75  

  The [CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT) field indicates the base at the beginning of the sequence at which the read should be clipped due to vector sequence. The given value would be the first base of non-vector sequence. This field is required for almost all combinations of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE). This information can be omitted if the [INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) field is populated or [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) is PCR or RT-PCR.

<!-- end list -->

[CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT)<a name="CLIP_VECTOR_RIGHT"></a><span class="conditionally_required">*</span>  
: Right clip of the read, in base pairs, based on vector sequence.  

  &emsp; Type: int  
  &emsp; Example: 275  

  The [CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT) field indicates the base at the end of the sequence at which the read should be clipped due to vector sequence. The given value would be the last non-vector sequence. This field is required for almost all combinations of [STRATEGY](#STRATEGY)and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE). This information can be omitted if the [INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) field is populated or [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) is PCR or RT-PCR.NOTE: Many centers combine vector and quality analysis, and thus have only one set of clip values. Inthis case, the set of values should be placed in the [CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT)/[CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT) fields.

<!-- end list -->

[CLONE_ID](#CLONE_ID)<a name="CLONE_ID"></a><span class="conditionally_required">*</span>  
: The name of the clone from which the trace was derived.  

  &emsp; Type: varchar(30)  
  &emsp; Example: RP23-1123F10  

  The [CLONE_ID](#CLONE_ID) field issued to store the identifier related to an individual clone, for example a BAC clone, PAC clone or cDNA clone. If the clone is registered with the clone registry([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)), standard clone registry nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/)) should be used.<br>This field is required for the following combination of [STRATEGY](#STRATEGY)and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):<br>   [STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any<br>   [STRATEGY](#STRATEGY)=EST;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any<br>  [STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND <br>  [STRATEGY](#STRATEGY)=CLONE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any<br>   [STRATEGY](#STRATEGY)=ENCODE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN;<br>   PrimerWalk; CLONEEND [STRATEGY](#STRATEGY)=FINISHING;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[CLONE_ID_LIST](#CLONE_ID_LIST)<a name="CLONE_ID_LIST"></a><span class="conditionally_required">*</span>  
: Semi-colon delimited list of clones if the Strategy is PoolClone.  

  &emsp; Type: varchar(30)  
  &emsp; Example: RP23-200A2;RP23-500P1  

  The [CLONE_ID_LIST](#CLONE_ID_LIST)field is used only if [STRATEGY](#STRATEGY)=PoolClone.
  In this case, the list of clones is provided as a semicolon delimited list. If the clones are registered with the Clone Registry ([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)), standard clone registry nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/)) should be used (see [CLONE_ID](#CLONE_ID) field).Note: The list of clones is not limited, but the size of the individual clone within the list is limited to 30 bytes.  
  This field is required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):   [STRATEGY](#STRATEGY)=PoolClone;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[COLLECTION_DATE](#COLLECTION_DATE)<a name="COLLECTION_DATE"></a><span class="conditionally_required">*</span>  
: The full date, in "Mar 2 2006 12:00AM" format, on which an
environmental sample was collected.  

  &emsp; Type: datetime  
  &emsp; Example: Mar 2 2006 12:00AM  

  The [COLLECTION_DATE](#COLLECTION_DATE) field is used to define the date and time on which an environmental sample was collected.<br> This field is required for the following combination of [STRATEGY](#STRATEGY)and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE): <br> [STRATEGY](#STRATEGY)=Env Sample-Geo; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  <br> [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[CVECTOR_ACCESSION](#CVECTOR_ACCESSION)<a name="CVECTOR_ACCESSION"></a>  
: Repository (DDBJ/EMBL/Genbank) accession identifier for the cloning vector.  

  &emsp; Type: varchar(50)  
  &emsp; Example: AY451994  

  The [CVECTOR_ACCESSION](#CVECTOR_ACCESSION) field holds the accession number for the cloning vector used. This cloning vector relates to the clone named in the [CLONE_ID](#CLONE_ID) field.

<!-- end list -->

[CVECTOR_CODE](#CVECTOR_CODE)<a name="CVECTOR_CODE"></a>  
: Center defined code for the cloning vector.  

  &emsp; Type: varchar(50)  
  &emsp; Example: PBACE3.6  

  The [CVECTOR_CODE](#CVECTOR_CODE) field holds the user defined identifier for the cloning vector. Submitters are encouraged to submit all vector sequence information to public repositories.

<!-- end list -->

[DEPTH](#DEPTH)<a name="DEPTH"></a>  
: Depth (in meters) at which an environmental sample was collected.  

  &emsp; Type: float  
  &emsp; Example: 10M  

  The [DEPTH](#DEPTH) field is applicable to water samples and earth samples. If the value of this field is NULL, it is anticipated the sample was taken from the surface of the environment. While this field is only applicable to environmental samples, it is not required.

<!-- end list -->

[ELEVATION](#ELEVATION)<a name="ELEVATION"></a>  
: Elevation (in meters) at which an environmental sample was
collected.   

  &emsp; Type: float  
  &emsp; Example: 500  

  If the value of this field is NULL it is assumed the data were obtained at sea level. The field [ELEVATION](#ELEVATION) is only applicable to some environmental sample data, but is not a required field.

<!-- end list -->

[ENVIRONMENT_TYPE](#ENVIRONMENT_TYPE)<a name="ENVIRONMENT_TYPE"></a><span class="conditionally_required">*</span>  
: Type of environment from which an environmental sample was
collected.  

  &emsp; Type: varchar(250)  
  &emsp; Example: sea water  

  The [ENVIRONMENT_TYPE](#ENVIRONMENT_TYPE) field is used to describe the specific environment from which an environmental sample was taken. While the [LATITUDE](#LATITUDE) and [LONGITUDE](#LONGITUDE) fields describe the location many types of environmental types could exist at this location (for example, soil, sludge, tree roots, etc).  
  This field would be required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):   [STRATEGY](#STRATEGY)=Env Sample -Geo; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[EXTENDED_DATA](#EXTENDED_DATA)<a name="EXTENDED_DATA"></a>
: Extra ancillary information wrapped around in a EXTENDED_DATA
block, where actual values are provided with a special tag.  

  &emsp; Type: varchar()  
  &emsp; Example:  

  &lt;extended_data&gt;<br>
          &lt;field name='SamplingSiteMonthChlorophyllLevel'&gt;1.4 mg_mm&lt;/field&gt;<br>
          &lt;field name='SamplingSiteYearlyChlorophyllLevel'&gt;1.12 mg_mm&lt;/field&gt;<br>
          &lt;field name='SamplingSiteYearlyChlorophyllLevelStdError'&gt;0.19 mg_mm&lt;/field&gt;<br>
  &lt;/extended_data&gt;<br>
  The '=' sign and the field separator character '|' should be
  excluded from names and their values. No other validity checks will
  be performed on the data.

<!-- end list -->
[FEATURE_ID_FILE](#FEATURE_ID_FILE)<a name="FEATURE_ID_FILE"></a>  
: File describing the features and their locations on a chip.  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/chip2.cdf  

  The [FEATURE_ID_FILE](#FEATURE_ID_FILE) provides the location and sequence of the features for a given chip when [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP".

<!-- end list -->

[FEATURE_ID_FILE_NAME](#FEATURE_ID_FILE_NAME)<a name="FEATURE_ID_FILE_NAME"></a><span class="conditionally_required">*</span>  
: Reference to a common FEATURE_ID_FILE which should be submitted first.  

  &emsp; Type: varchar(200)  
  &emsp; Example:  

  This field is required when [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP".

<!-- end list -->

[FEATURE_SIGNAL_FILE](#FEATURE_SIGNAL_FILE)<a name="FEATURE_SIGNAL_FILE"></a>  
: File giving the signal and variance for features on a chip.  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/chip2.signal  

  The [FEATURE_SIGNAL_FILE](#FEATURE_SIGNAL_FILE) provides the signal and variance of signal for the features on a given chip when [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP".

<!-- end list -->

[FEATURE_SIGNAL_FILE_NAME](#FEATURE_SIGNAL_FILE_NAME)<a name="FEATURE_SIGNAL_FILE_NAME"></a><span class="conditionally_required">*</span>  
: Reference to a common FEATURE_SIGNAL_FILE which should be
submitted first.  

  &emsp; Type: varchar(200)  
  &emsp; Example:  

  This field is required when [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP".

<!-- end list -->

[GENE_NAME](#GENE_NAME)<a name="GENE_NAME"></a>
: Gene name or some other common identifier.  

  &emsp; Type: varchar(100)  
  &emsp; Example: transporter 1  

  Free text. Mainly this field would be for [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)='Re-sequencing' or'ENCODE'. When a group is analyzing a particular gene, they may want to refer to that gene by it's name or some other common identifier.

<!-- end list -->

[HI_FILTER_SIZE](#HI_FILTER_SIZE)<a name="HI_FILTER_SIZE"></a>
: The largest filter used to stratify an environmental sample.  

  &emsp; Type: varchar(50)  
  &emsp; Example: 50 micron  

  The [HI_FILTER_SIZE](#HI_FILTER_SIZE) field is applicable only to environmental sample data but is not a required field.

<!-- end list -->

[HOST_CONDITION](#HOST_CONDITION)<a name="HOST_CONDITION"></a>  
: The condition of the host from which an environmental sample was
obtained.  

  &emsp; Type: varchar(100)  
  &emsp; Example: HIV-positive  

  The [HOST_CONDITION](#HOST_CONDITION) field is only applicable to environmental sample data and is used to describe the condition (healthy, sick, etc) of the host from which a sample was taken.

<!-- end list -->

[HOST_ID](#HOST_ID)<a name="HOST_ID"></a><span class="conditionally_required">*</span>  
: Unique identifier for the specific host from which an environmental sample was taken.  

  &emsp; Type: varchar(100)  
  &emsp; Example: yerkes pedigree #C0479 'Clint'  

  The [HOST_IDENTIFIER](#HOST_IDENTIFIER) field is only applicable to environmental sample data and is used to capture the unique name for the specific host from which a sample was obtained.  <br>
  This field would be required for the following combination of[STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):   [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[HOST_LOCATION](#HOST_LOCATION)<a name="HOST_LOCATION"></a><span class="conditionally_required">*</span>  
: Specific location on the host from which an environmental sample was collected.  

  &emsp; Type: varchar(100)  
  &emsp; Example: rumen  

  The [HOST_LOCATION](#HOST_LOCATION) field is only applicable to environmental sample data and is used to describe the specific part of the host from which the sample was obtained, for &emsp; example: dental plaque, hindgut, root surfaces.<br>  This field would be required for the following combination of[STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):   [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[HOST_SPECIES](#HOST_SPECIES)<a name="HOST_SPECIES"></a><span class="conditionally_required">*</span>  
: The host from which an environmental sample was obtained.  

  &emsp; Type: varchar(100)  
  &emsp; Example: Pan troglodytes  

  The [HOST_SPECIES](#HOST_SPECIES) field is only applicable to environmental sample data. <br> 
  This field would be required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):   [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[INDIVIDUAL_ID](#INDIVIDUAL_ID)<a name="INDIVIDUAL_ID"></a>  
: Publicly available identifier to denote a specific individual or
sample from which a trace was derived.  

  &emsp; Type: varchar(100)  
  &emsp; Example: NA12345  

  The [INDIVIDUAL_ID](#INDIVIDUAL_ID)field provides a center specific unique id that can associate as pecific trace to an individual. This will be used primarily for population based studies.

<!-- end list -->

[INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT)<a name="INSERT_FLANK_LEFT"></a><span class="conditionally_required">*</span>  
: Flanking sequence at the cloning junction.  

  &emsp; Type: varchar(100)  
  &emsp; Example: AAGGTGCGATGCAGTGGCAGTAGCAGTGTCGACGTGACGATTCGTCCGGA   

  The [INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) field should provide from 50 up to 100 bases of sequence (including linkers) to the left of the cloning junction. This information will allow users to perform their own vector trimming of reads. This field is required for almost all combinations of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE). This field can be omitted if [CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT) is populated.However, [INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) is the preferred choice. If there was no cloning step involved in the sequencing, please populate the field with 'NONE'.

<!-- end list -->

[INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT)<a name="INSERT_FLANK_RIGHT"></a><span class="conditionally_required">*</span>  
: Flanking sequence at the cloning junction.  

  &emsp; Type: varchar(100)  
  &emsp; Example: AAGGCGCGATGCAGTGAGCGAGGCTGACGTCGGCTAGCGTCGCGTCGGGT  

  The [INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) field should provide from 50 up to 100 bases of sequence (including linkers) to the right of the cloning junction. This information will allow users to perform their own vector trimming of reads. This field is required for almost all combinations of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE). This field can be omitted if [CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT) is populated.However, [INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) is the preferred choice. If there was no cloning step involved in the sequencing, please populate the field with 'NONE'. It is anticipated that if [INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) is populated that [INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) will also be populated. It is not anticipated that a mixture of clip values and junction sequence will be specified. (i.e. [CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT) and[INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) populated for the same record.

<!-- end list -->

[INSERT_SIZE](#INSERT_SIZE)<a name="INSERT_SIZE"></a><span class="conditionally_required">*</span>  
: Expected size of the insert (referred to by the value in the
TEMPLATE_ID field) in base pairs  

  &emsp; Type: int  
  &emsp; Example: 2000  

  The [INSERT_SIZE](#INSERT_SIZE)field
  indicates the expected insert size of the clone that is sequenced.
  It is understood that this is an estimate based upon the average
  insert sizes found in a given library. However, this information is
  critical for certain experiments, such as whole genome assembly.<br>  
  This field would be required for the following combination of
  [STRATEGY](#STRATEGY)and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):  <br> [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WGS[STRATEGY](#STRATEGY)=Any;  <br> [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WCS[STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND[STRATEGY](#STRATEGY)=CLONEEND;  <br> [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND

<!-- end list -->

[INSERT_STDEV](#INSERT_STDEV)<a name="INSERT_STDEV"></a><span class="conditionally_required">*</span>  
: Approximate standard deviation of value in INSERT_SIZE field.  

  &emsp; Type: int  
  &emsp; Example: 200  

  The [INSERT_STDEV](#INSERT_STDEV)field reflects the approximate standard deviation of the insert size. It is understood that this information is an approximation and may change as better data is obtained. This field would be required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):  <br> [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WGS[STRATEGY](#STRATEGY)=Any;  <br> [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WCS[STRATEGY](#STRATEGY)=cDNA; <br>  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND[STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND

<!-- end list -->

[LATITUDE](#LATITUDE)<a name="LATITUDE"></a><span class="conditionally_required">*</span>  
The latitude measurement (using standard GPS notation) from which a
: sample was collected.  

  &emsp; Type: float   
  &emsp; Example: 54.736  

  The [LATITUDE](#LATITUDE) field is required to describe the collection of some environmental sample data. The latitude range is [-90,90] with the equator as 0 latitude and positive values of latitude are north of the equator. This field would be required for the following combination of[STRATEGY](#STRATEGY) and[TRACE_TYPE_CODE](#TRACE_TYPE_CODE):  <br> [STRATEGY](#STRATEGY)=Env Sample- Geo;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[LIBRARY_ID](#LIBRARY_ID)<a name="LIBRARY_ID"></a><span class="conditionally_required">*</span>  
: The source of the clone identified in the CLONE_ID field  

  &emsp; Type: varchar(100)   
  &emsp; Example: RP23  

  The [LIBRARY_ID](#LIBRARY_ID) field documents the source library of the archival clone resource. Many genomic libraries have been registered with the Clone Registry ([http://www.ncbi.nlm.nih.gov/clone](https://www.ncbi.nlm.nih.gov/clone)) and the standard nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/)) should be used for these libraries.  This field would be requiredfor the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):  <br> [STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any[STRATEGY](#STRATEGY)=EST;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  <br> [STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND[STRATEGY](#STRATEGY)=CLONE;  <br> [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any[STRATEGY](#STRATEGY)=ENCODE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN;PrimerWalk; CLONEEND

<!-- end list -->

[LONGITUDE](#LONGITUDE)<a name="LONGITUDE"></a><span class="conditionally_required">*</span>  
: The longitude measurement (using standard GPS notation) from which a sample was collected.  

  &emsp; Type: float  
  &emsp; Example: -86.403  

  The [LONGITUDE](#LONGITUDE) field is required to describe the collection of some environmental sample data. The longitude is ranging from 0° at the Prime Meridian to +180° eastward and -180° westward.  <br> This field would be required for the following combination of [STRATEGY](#STRATEGY)and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE): <br>  [STRATEGY](#STRATEGY)=Env Sample-Geo; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[LO_FILTER_SIZE](#LO_FILTER_SIZE)<a name="LO_FILTER_SIZE"></a>  
: The smallest filter size used to stratify an environmental sample.  

  &emsp; Type: varchar(50)  
  &emsp; Example: 25 micron  

  The [LO_FILTER_SIZE](#LO_FILTER_SIZE) field is only applicable to environmental sample data but is not a required field.

<!-- end list -->

[NCBI_PROJECT_ID](#NCBI_PROJECT_ID)<a name="NCBI_PROJECT_ID"></a>
: BioProject ID generated by the INSDC.  

  &emsp; Type: int  
  &emsp; Example: 7  

  [NCBI_PROJECT_ID](#NCBI_PROJECT_ID) field would allow to link traces to [BioProject database](/bioproject/index-e.html) and easily retrieve sets of traces from each Project. Genome sequencing centers may apply their project to the [DDBJ BioProject](/bioproject/index-e.html) prior the submission of genomic sequence data. Submitters need not submit sequencing data at the time they register their project.

<!-- end list -->

[ORGANISM_NAME](#ORGANISM_NAME)<a name="ORGANISM_NAME"></a><span class="conditionally_required">*</span>  
: Description of species for BARCODE project from which trace is
derived.  

  &emsp; Type: varchar(100)  
  &emsp; Example: Acanthocybium solandri  

  The [ORGANISM_NAME](#ORGANISM_NAME) field is used to classify the read by species for BARCODE data, using proper taxonomic name in accordance with [Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/). [SPECIES_CODE](#SPECIES_CODE)="BARCODESPECIES" for all traces from this project. This field would be required for the [STRATEGY](#STRATEGY)=BARCODE.

<!-- end list -->

[PEAK_FILE](#PEAK_FILE)<a name="PEAK_FILE"></a>
: Name of file that contains the list of peak values.  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/123clone.peak  

  Consult the [BASE_FILE](#BASE_FILE) field description for more information.

<!-- end list -->

[PH](#PH)<a name="PH"></a>
: The pH at which an environmental sample was collected.  

  &emsp; Type: float  
  &emsp; Example: 7.2  

  The [PH](#PH) field is only applicable to environmental sample data but is not a required field.

<!-- end list -->

[PICK_GROUP_ID](#PICK_GROUP_ID)<a name="PICK_GROUP_ID"></a>
: Id to group traces picked at the same time.  

  &emsp; Type: int  
  &emsp; Example: 939065  

<!-- end list -->

[PLACE_NAME](#PLACE_NAME)<a name="PLACE_NAME"></a>
: Country in which the biological sample was collected and/or common
name for a given location.  

  &emsp; Type: varchar(250)  
  &emsp; Example: Octopus Springs  

  The [PLACE_NAME](#PLACE_NAME) field is applicable to environmental sample data, but is not required.

<!-- end list -->

[PLATE_ID](#PLATE_ID)<a name="PLATE_ID"></a>
: Submitter defined plate id.  

  &emsp; Type: varchar(32)   
  &emsp; Example: 203  

  The [PLATE_ID](#PLATE_ID) and [WELL_ID](#WELL_ID) fields are intended to identify the storage location of the sequencing template (not the library well coordinate of an archival clone named in the[CLONE_ID](#CLONE_ID) field). This may enable flipped or contaminated trays to be easily identified. If a particular experiment did not require the use of a plate, please populate this field with '0'.

<!-- end list -->

[POPULATION_ID](#POPULATION_ID)<a name="POPULATION_ID"></a>
: Center provided id to designate a population from which a trace (or group of traces) was derived.  

  &emsp; Type: varchar(100)  
  &emsp; Example: CEPH  

  The [POPULATION_ID](#POPULATION_ID) field is used to capture center specific designations of groups of individuals. This will likely only be useful in population studies(usually [STRATEGY](#STRATEGY)=SNP).

<!-- end list -->

[PREP_GROUP_ID](#PREP_GROUP_ID)<a name="PREP_GROUP_ID"></a>
: ID that defines groups of traces prepared at the same time.  

  &emsp; Type: varchar(30)  
  &emsp; Example: A2  

<!-- end list -->

[PRIMER](#PRIMER)<a name="PRIMER"></a>
: The primer sequence (used in the sequencing reaction).  

  &emsp; Type: varchar(200)  
  &emsp; Example: GAATACCTACGATCGCC  

  The value of the [PRIMER](#PRIMER) field is the actual base sequence of the sequencing primer used. If a center uses a primer extensively, the primer sequence can be entered into the list of primer codes and the [PRIMER_CODE](#PRIMER_CODE) field can be used.

<!-- end list -->

[PRIMER_CODE](#PRIMER_CODE)<a name="PRIMER_CODE"></a>
: Identifier for the sequencing primer used.  

  &emsp; Type: varchar(30)  
  &emsp; Example: Sp6  

<!-- end list -->

[PRIMER_LIST](#PRIMER_LIST)<a name="PRIMER_LIST"></a><span class="conditionally_required">*</span>  
: A ';' delimited list of primers used in a mapping experiment (such
as AFLP).  

  &emsp; Type: varchar(100)  
  &emsp; Example: AAGGTCTGCGCGTGTC;AGCTGCGTACGTAATCG;  

  This field is required if [STRATEGY](#STRATEGY)="AFLP" and          [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="PCR".

<!-- end list -->

[PROGRAM_ID](#PROGRAM_ID)<a name="PROGRAM_ID"></a><span class="red">*</span> 
: The program used to create the trace file.  

  &emsp; Type: varchar(100)  
  &emsp; Example: phred-19990722h  

  The [PROGRAM_ID](#PROGRAM_ID) field is used to indicate the base calling program. This field is free text. Program name, version numbers or dates are very useful.  <br> 
  More example values:
    - phred-19980904e
    - abi-3.1
    - ATQA
    - TraceTuner
    - Licor
    - Megabase
    - Beckman

<!-- end list -->

[PROJECT_NAME](#PROJECT_NAME)<a name="PROJECT_NAME"></a>
: Term by which to group traces from different centers based on a
common project.  

  &emsp; Type: varchar(50)  
  &emsp; Example: New Project  

  In this way sequencing centers that are working on the same large project can group all of the traces for this project using a common term. This field has a controlled vocabulary. Sequencing centers wishing to submit data must contact the DDBJ Trace Archive to determine a name that all members of the project agree on.

<!-- end list -->

[QUAL_FILE](#QUAL_FILE)<a name="QUAL_FILE"></a>
: Name of file containing the quality scores.  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/123clone.fasta.qs  

  Trace files which do not include the quality scores must provide this information in a separate file. The file designations are recorded in the [QUAL_FILE](#QUAL_FILE) fields of the metadata file. The actual quality scores are stored in the file designated in the[QUAL_FILE](#QUAL_FILE) field. If quality scores are provided in separate files the information in these files will overwrite any information in the trace (usually *.scf) file. If the quality scores that would be provided in the [QUAL_FILE](#QUAL_FILE) are the same as the information in the trace file, DO NOT PROVIDE THE FILE. However, it is important to note that if some formats do not include the quality scores, then these values must be provided as ancillary information. If the center provides the[BASE_FILE](#BASE_FILE) and[QUAL_FILE](#QUAL_FILE), then the peak index information should also be provided in a file called[PEAK_FILE](#PEAK_FILE).

<!-- end list -->

[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)<a name="REFERENCE_ACCESSION"></a><span class="conditionally_required">*</span>  
: Reference accession (use accession and version to specify a
particular instance of a sequence) used as the basis for a
re-sequencing project. In case of Comparative strategy show the
basis for primers design.  

  &emsp; Type: varchar(50)  
  &emsp; Example: NT_029829.1  

  This field is required for the following combination of[STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE): <br> 
  [STRATEGY](#STRATEGY)=Re-sequencing;Comparative [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[REFERENCE_ACC_MAX](#REFERENCE_ACC_MAX)<a name="REFERENCE_ACC_MAX"></a><span class="conditionally_required">*</span>  
: Finish position for a particular amplicon in re-sequencing or
comparative projects.   

  &emsp; Type: int  
  &emsp; Example: 30929  

  This field points to the finishing coordinate of the accession.version described in the [REFERENCE_ACCESSION](#REFERENCE_ACCESSION) field. All coordinates should be in 1 base coordinates (i.e.sequences start at base 1, not base 0). This field is required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):<br>
  [STRATEGY](#STRATEGY)=Re-sequencing; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN; PCR;RT-PCR

<!-- end list -->

[REFERENCE_ACC_MIN](#REFERENCE_ACC_MIN)<a name="REFERENCE_ACC_MIN"></a><span class="conditionally_required">*</span>  
: Start position for a particular amplicon in re-sequencing or
comparative projects.  

  &emsp; Type: int  
  &emsp; Example: 29829  

  This field points to the starting coordinate of theaccession.version described in the[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)field. All coordinates should be in 1 base coordinates (i.e.sequences start at base 1, not base 0). This field is required forthe following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):<br>   [STRATEGY](#STRATEGY)=Re-sequencing; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN; PCR;RT-PCR

<!-- end list -->

[REFERENCE_OFFSET](#REFERENCE_OFFSET)<a name="REFERENCE_OFFSET"></a><span class="conditionally_required">*</span>  
: Sequence offset of accession specified in REFERENCE_ACCESSION field
to define the coordinate start position used as the basis for a
re-sequencing project.  

  &emsp; Type: int  
  &emsp; Example: 1520899  

  This field points to the starting coordinate of theaccession.version described in the[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)field. All coordinates should be in 1 base coordinates (i.e.sequences start at base 1, not base 0). This field is required forthe following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE): <br> 
  [STRATEGY](#STRATEGY)=Re-sequencing; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CHIP

<!-- end list -->

[REFERENCE_SET_MAX](#REFERENCE_SET_MAX)<a name="REFERENCE_SET_MAX"></a>
: Finish position for a entire re-sequencing region. This region may
include several amplicons.  

  &emsp; Type: int  
  &emsp; Example: 29829　　

  This field points to the starting coordinate of theaccession.version 
  described in the [REFERENCE_ACCESSION](#REFERENCE_ACCESSION) field for a 
  entire re-sequencing region. All coordinates should be in 1 base 
  coordinates (i.e. sequences start at base 1, not base 0).The REFERENCE_ACC_
  [MIN|MAX] and REFERENCE_SET_[MIN|MAX] should refer to the same 
  REFERENCE_ACC.

<!-- end list -->

[REFERENCE_SET_MIN](#REFERENCE_SET_MIN)<a name="REFERENCE_SET_MIN"></a>
: Start position for a entire re-sequencing region. This region may
include several amplicons.  

  &emsp; Type: int  
  &emsp; Example: 29829  

  This field points to the starting coordinate of theaccession.version 
  described in the [REFERENCE_ACCESSION](#REFERENCE_ACCESSION) field for a 
  entire re-sequencing region. All coordinates should be in 1 base 
  coordinates (i.e. sequences start at base 1, not base 0).The REFERENCE_ACC_
  [MIN|MAX] and REFERENCE_SET_[MIN|MAX] should refer to the same 
  REFERENCE_ACC.

<!-- end list -->

[RUN_DATE](#RUN_DATE)<a name="RUN_DATE"></a>
: Date the sequencing reaction was run.   

  &emsp; Type: datetime  
  &emsp; Example: 2000-10-28

<!-- end list -->

[RUN_GROUP_ID](#RUN_GROUP_ID)<a name="RUN_GROUP_ID"></a>
: ID used to group traces run on the same machine.  

  &emsp; Type: varchar(30)  
  &emsp; Example: group2

<!-- end list -->

[RUN_LANE](#RUN_LANE)<a name="RUN_LANE"></a>
: Lane or capillary of the trace.  

  &emsp; Type: int  
  &emsp; Example: 1  

  The [RUN_LANE](#RUN_LANE) documents the specific lane or capillary on which a trace was obtained.

<!-- end list -->

[RUN_MACHINE_ID](#RUN_MACHINE_ID)<a name="RUN_MACHINE_ID"></a>
: ID of the specific sequencing machine on which a trace was obtained.  

  &emsp; Type: varchar(30)  
  &emsp; Example: machine2

<!-- end list -->

[RUN_MACHINE_TYPE](#RUN_MACHINE_TYPE)<a name="RUN_MACHINE_TYPE"></a>
: Type or model of machine on which a trace was obtained.  

  &emsp; Type: varchar(30)  
  &emsp; Example: ABI 310

<!-- end list -->

[SALINITY](#SALINITY)<a name="SALINITY"></a>
: The salinity at which an environmental sample was collected measured
in parts per thousand units (promille).  

  &emsp; Type: float  
  &emsp; Example: 20  

The [SALINITY](#SALINITY) field is only applicable to environmental sample data but is not a required field.

<!-- end list -->

[SEQ_LIB_ID](#SEQ_LIB_ID)<a name="SEQ_LIB_ID"></a><span class="conditionally_required">*</span>  
: Center specified M13/PUC library that is actually sequenced.  

  &emsp; Type: varchar(255)   
  &emsp; Example: 22194  

  The [SEQ_LIB_ID](#SEQ_LIB_ID) field is the center identifier for the M13/PUC based clone that is actually sequenced. This will allow grouping of traces by the actual ligation event and is applicable to most projects. Thi svalue will be unique within a given center.   This field would be required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE): <br> [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN<br> [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WGS/WCS

<!-- end list -->

[SOURCE_TYPE](#SOURCE_TYPE)<a name="SOURCE_TYPE"></a><span class="red">*</span>  
: Source of the DNA.  

  &emsp; Type: varchar(50)  
  &emsp; Example: GENOMIC DNA  

  The [SOURCE_TYPE](#SOURCE_TYPE)field consists of a code. Possible values are:
    - G=Genomic DNA (includes PCR products from genomic DNA)
    - N=Non Genomic DNA (EST, cDNA, RT-PCR, screened libraries)
    - VIRAL RNA=Viral RNA
    - SYNTHETIC=Synthetic DNA  

  Accepted values are G, N, GENOMIC, NON GENOMIC, VIRAL RNA,SYNTHETIC

<!-- end list -->

[SPECIES_CODE](#SPECIES_CODE)<a name="SPECIES_CODE"></a><span class="red">*</span>  
: Description of species from which trace is derived.  

  &emsp; Type: varchar(100)  
  &emsp; Example: Homo sapiens  

  The [SPECIES_CODE](#SPECIES_CODE)field
  is used to classify the read by species, using proper taxonomic
  names where possible. This field currently is maintained as a
  controlled vocabulary. For a list of species currently contained
  within the Trace Archive, see:
  [http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat&f=xml_list_species&m=obtain&s=species](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat&f=xml_list_species&m=obtain&s=species)To
  submit a new species, please contact the DDBJ Trace Archive prior to
  submission. For cases in which it is unclear ofthe taxonomic origin
  of a specific trace the taxonomic classification 'ENVIRONMENTAL
  SEQUENCE' can be used in a case of environmental samples or
  'ARTIFICIAL SEQUENCE' in a case of artificial material.

<!-- end list -->

[STRAIN](#STRAIN)<a name="STRAIN"></a><span class="conditionally_required">*</span>  
: Strain from which a trace is derived.  

  &emsp; Type: varchar(50)   
  &emsp; Example: C57BL/6J　　

  [STRAIN](#STRAIN) is required for [STRATEGY](#STRATEGY)="SNP"

<!-- end list -->

[STRATEGY](#STRATEGY)<a name="STRATEGY"></a><span class="red">*</span>  
: Experimental STRATEGY.  

  &emsp; Type: varchar(50)  
  &emsp; Example: MODEL VERIFY 
  
  Experimental [STRATEGY](#STRATEGY) used when obtaining the trace. It is proposed that this would be a controlled vocabulary, but that submitters would contribute to this list as needed to define various experiments and projects.  
  
  Current values (this list would continually be expanding):
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

[SUBMISSION_TYPE](#SUBMISSION_TYPE)<a name="SUBMISSION_TYPE"></a><span class="red">*</span>  
: Type of submission.  

  &emsp; Type: varchar(50)  
  &emsp; Example: NEW  

  The [SUBMISSION_TYPE](#SUBMISSION_TYPE) field allowed values:
    - NEW: use to submit new data
    - UPDATE: use to renew traces and their ancillary information.
      Previous data will be saved with their TI's; new traces with the
      same trace_name's will receive new TI's and they will become
      active
    - UPDATEINFO: use to update or add ancillary information for
      already existing traces without re-submitting the entire package
      of data
    - WITHDRAW: use to withdraw traces

<!-- end list -->

[SVECTOR_ACCESSION](#SVECTOR_ACCESSION)<a name="SVECTOR_ACCESSION"></a>
: DDBJ/EMBL/Genbank accession of the sequencing vector.  

  &emsp; Type: varchar(50)  
  &emsp; Example: X52325  

<!-- end list -->

[SVECTOR_CODE](#SVECTOR_CODE)<a name="SVECTOR_CODE"></a>
: Center defined code for the sequencing vector.  

  &emsp; Type: varchar(50)  
  &emsp; Example: pBluescript SK(+)

<!-- end list -->

[TEMPERATURE](#TEMPERATURE)<a name="TEMPERATURE"></a>
: The temperature (in <sup>o</sup>C) at which an environmental sample was collected.  

  &emsp; Type: float  
  &emsp; Example: 30  

  The [TEMPERATURE](#TEMPERATURE)field
  is only applicable to environmental sample data but it is not a
  required field.

<!-- end list -->

[TEMPLATE_ID](#TEMPLATE_ID)<a name="TEMPLATE_ID"></a>
: Submitter defined identifier for the sequencing template.  

  &emsp; Type: varchar(50)    
  &emsp; Example: HBBBA2211  

  The [TEMPLATE_ID](#TEMPLATE_ID)field
  is used to uniquely identify the actual template that is sequenced.
  This field, in conjunction with the TRACE_END field, can be used to
  identify traces that should be marked as 'mate_pairs'because they
  come from opposite ends of the same clone.

<!-- end list -->

[TRACE_END](#TRACE_END)<a name="TRACE_END"></a>
: Defines the end of the template contained in the read.  

  &emsp; Type: varchar(50)  
  &emsp; Example: F  

  The [TRACE_END](#TRACE_END) field can have the following values:
    - F: FORWARD
    - R: REVERSE
    - N: UNKNOWN

<!-- end list -->

[TRACE_FILE](#TRACE_FILE)<a name="TRACE_FILE"></a><span class="red">*</span>  
: Filename with the trace, relative to the top of the volume.  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./traces/TRACE001.scf

<!-- end list -->

[TRACE_FORMAT](#TRACE_FORMAT)<a name="TRACE_FORMAT"></a><span class="red">*</span>  
: Format of the trace file.  

  &emsp; Type: varchar(20)  
  &emsp; Example: scf　　

  The [TRACE_FORMAT](#TRACE_FORMAT)field can have the following values:
    - SCF - A standard file format for data from DNA sequencing
      instruments.
    - ABI - A ABI-trace file is a binary file including the trace data
      and the sequence.

<!-- end list -->

[TRACE_NAME](#TRACE_NAME)<a name="TRACE_NAME"></a><span class="red">*</span>  
: Center defined trace identifier.   

  &emsp; Type: varchar(250)  
  &emsp; Example: HBBBA1U2211  

  The [TRACE_NAME](#TRACE_NAME) field
  must be unique within a center, but is not required to be unique
  between centers. The combination of
  [TRACE_NAME](#TRACE_NAME) and
  [CENTER_NAME](#CENTER_NAME) act
  as a unique key within the Trace Archive.

<!-- end list -->

[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)<a name="TRACE_TYPE_CODE"></a><span class="red">*</span>  
: Sequencing strategy by which the trace was obtained.  

  &emsp; Type: varchar(50)  
  &emsp; Example: wgs The field  

  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) reflects the sequencing [STRATEGY](#STRATEGY) used to obtain the trace.  
  
  Current values:
    - CHIP: Sequences obtained using microarrays (also called DNAchips
      or gene chips)
    - CLONEEND: Sequences generated from the end of a large
      insert(BAC/PAC/Fosmid) or cDNA clone
    - EST: Single Pass Expressed Sequence Tag
    - HTP SELEX: High throughput SELEX
    - OTHER: Other than PCR, PrimerWalk, SHOTGUN or TRANSPOSON for
      FINISHING
      [STRATEGY](#STRATEGY)
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

[TRANSPOSON_ACC](#TRANSPOSON_ACC)<a name="TRANSPOSON_ACC"></a><span class="conditionally_required">*</span>  
: DDBJ/EMBL/Genbank accession for transposon used in generating
sequencing template.  

  &emsp; Type: varchar(50)  
  &emsp; Example: X00913　　

  The [TRANSPOSON_ACC](#TRANSPOSON_ACC) would be required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE): <br> 
  [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=TRANSPOSON

<!-- end list -->

[TRANSPOSON_CODE](#TRANSPOSON_CODE)<a name="TRANSPOSON_CODE"></a><span class="conditionally_required">*</span>  
: Center defined code for transposon used in generating sequencing
template.   

  &emsp; Type: varchar(50)  
  &emsp; Example: Mu transposon  

  This [TRANSPOSON_CODE](#TRANSPOSON_CODE) field would be required for the following combination of [STRATEGY](#STRATEGY) and [TRACE_TYPE_CODE](#TRACE_TYPE_CODE):<br> [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=TRANSPOSON

<!-- end list -->

[WELL_ID](#WELL_ID)<a name="WELL_ID"></a>
: Center defined well identifier for the sequencing reaction.  

  &emsp; Type: varchar(50)  
  &emsp; Example: A1 The field  

  [WELL_ID](#WELL_ID) in
  combination with the field
  [PLATE_ID](#PLATE_ID), is used to
  define the storage location of the sequencing reaction (see note
  with the
  field[PLATE_ID](#PLATE_ID)).
  Typically,sequencing reactions are performed in standard microtiter
  dishes having either 96 or 384 wells (see standard configurations
  below).  
  ![Standard 96 well microtiter
  configuration]({{ site.baseurl }}/assets/images/submission/96well.jpg
  "Standard 96 well microtiter configuration")  
  Standard 96 well microtiter configuration  
  ![Standard 384 well microtiter
  configuration]({{ site.baseurl }}/assets/images/submission/384well.jpg
  "Standard 384 well microtiter configuration")  
  Standard 384 well microtiter configuration

### Internal Fields List <a name="Internal-Fields-List"></a>

[BASECALL_LENGTH](#BASECALL_LENGTH)<a name="BASECALL_LENGTH"></a>
: Length of the trace in base pairs.  

  &emsp; Type: int  
  &emsp; Example: 396

<!-- end list -->

[BASES_20](#BASES_20)<a name="BASES_20"></a>
: Number of base pairs for which quality score exceed 20.  

  &emsp; Type: smallint   
  &emsp; Example: 50  

  Warning: There are some
  depositions that do not have quality scores. This is likely due to
  the center submitting ABI files and not providing quality calls
  separately.

<!-- end list -->

[BASES_40](#BASES_40)<a name="BASES_40"></a>  
: Number of base pairs for which quality score exceed 40.  

  &emsp; Type: smallint   
  &emsp; Example: 50  

  Warning: There are some
  deposition sthat do not have quality scores. This is likely due to
  the center submitting ABI files and not providing quality calls
  separately.

<!-- end list -->

[BASES_60](#BASES_60)<a name="BASES_60"></a>  
: Number of base pairs for which quality score exceed 60.  

  &emsp; Type: smallint   
  &emsp; Example: 50  

  Warning: There are some
  depositions that do not have quality scores. This is likely due to
  the center submitting ABI files and not providing quality calls
  separately.

<!-- end list -->

[LOAD_DATE](#LOAD_DATE)<a name="LOAD_DATE"></a> 
: Date on which the data was loaded.  

  &emsp; Type: smalldatetime  
  &emsp; Example: Jan 8 2001 11:59AM

<!-- end list -->

[MATE_PAIR](#MATE_PAIR)<a name="MATE_PAIR"></a>  
: TI's of the reads obtained from the other end of the same template.  

  &emsp; Type: int   
  &emsp; Example: 203682255  

  MATE PAIR is the
  pair of reads obtained from two ends of the same template (FORWARD
  and REVERSE).

<!-- end list -->

[REPLACED_BY](#REPLACED_BY)<a name="REPLACED_BY"></a>  
: TI that replaced the current TI as "active".  

  &emsp; Type: int  
  &emsp; Example: 304753779  

  This field points to the more recent data set. If trace was updated then the
  [REPLACED_BY](#REPLACED_BY) field
  stores the[TI](#TI) for the new
  trace. If only ancillary information has been updated, then
  replaced_by=0 and is not shown.

<!-- end list -->

[STATE](#STATE)<a name="STATE"></a>  
: Indicates the status of the trace.  

  &emsp; Type: varchar  
  &emsp; Example: active  

  Possible values:
    - active
    - updated
    - withdrawn

<!-- end list -->

[TAXID](#TAXID)<a name="TAXID"></a>  
: NCBI Taxonomy ID.   

  &emsp; Type: int  
  &emsp; Example: 10090  

  This field links DDBJ Trace Archive with [NCBI Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?).

<!-- end list -->

[TI](#TI)<a name="TI"></a>  
: Trace unique internal Identifier.  

  &emsp; Type: int  
  &emsp; Example: 304753779  

  It is given for a record at the loading stage, and any record,or number of records can be obtain by their identifiers.

<!-- end list -->

[UPDATE_DATE](#UPDATE_DATE)<a name="UPDATE_DATE"></a>  
: Date on which the data was updated/replaced.  

  &emsp; Type: smalldatetime  
  &emsp; Example: Jul 19 2001 3:48PM  

  This field is used to store the date of the last update.

## Submit trace data <a name="trace-data-submission"></a>

{::options parse_block_html="true" /}
<div class="attention">
Data submission of human subjects research<br>
<span class="red">For all data from human subjects researches submitted to DDBJ, it is
submitter's responsibility to ensure that the privacy of participant
(human subject) is protected in accordance with all applicable laws,
regulations and policies of submitter's institute.  
In principle, make sure to remove any direct personal identifiers of
human subjects from your submissions.  
Before submitting data from human subjects researches, read the "[Data
submission of human subjects research](/policies-e.html#human)".</span>
</div>

### Create submission files <a name="create-submission-files"></a>

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

#### Submission directory hierarchy example <a name="Submission_directory_hierarchy_example"></a>

```
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
specific combinations of STRATEGY and TRACE_TYPE_CODE. Both types of
metadata files can contain common fields section at the beginning of it.
This section defines common for the submission values if any.

Below are examples of TRACEINFO metadata files.

#### TRACEINFO xml example <a name="TRACEINFO_xml_example"></a>

```
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

#### TRACEINFO tab-delimited text example <a name="TRACEINFO_tab-delimited_text_example"></a>

```
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


### Upload submission files <a name="upload-submission-files"></a>

DTA creates a directory for data submission. Please contact to [the DTA
team](/contact-e.html). Transfer files by SCP according to the
[manual](/dra/submission-e.html#upload-sequence-data).

#### Submission directory example <a name="Submission_directory_example"></a>

```
submission/submitter_id/dta/dta_submitter_id-0001
```

<span class="red">Directory for the DTA submission is
separated from those for the [DDBJ Sequence Read
Archive](/dra/index-e.html). </span>



### Completion of submission <a name="completion-submission"></a>

After submission files become complete, DTA can keep the data private
until the submitters instruct us to release the data. After instruction
of data release, DTA uploads the files to the NCBI Trace Archive. As
soon as the data are loaded to the NCBI Trace Archive, TI numbers are
assigned and the data become public.

<span class="red">Please note that TI number assignment and
data release are concurrent events. </span>


### Update <a name="update"></a>

To update the records, please contact to [the DTA
team](/contact-e.html).
