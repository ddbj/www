---
layout: indexed_content
title: Organism qualifier
category: ddbj
current_tab: flat_file
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
related_pages:
  - title: DDBJ flat file format
    url: /ddbj/flat-file-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: Description of Location
    url: /ddbj/location-e.html
  - title: Protein Coding Sequence; CDS feature
    url: /ddbj/cds-e.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode-e.html
  - title: Codes Used in Sequence Description
    url: /ddbj/code-e.html
  - title: Example of Submission
    url: /ddbj/example-e.html
---

Every value of organism qualifier must be a "scientific name" ranked as
species or lower taxa in taxonomy database.

## taxonomy database <a name="taxonomy"></a>

All organisms that are represented in the sequence data of
DDBJ/EMBL-Bank/GenBank are registered to the taxonomy database.  
For construction of the nucleotide sequence database, it is important to
manage the organism names for the data and also necessary to unify the
diverse names of the organisms.

The taxonomy database is used as the reference database for the unified organism names.

The primary purpose of the taxonomy database is to unify descriptions of
organism names.  
Consequently, the taxonomy database is not an authoritative source for
nomenclature or classification.  
A taxonomic name may differ from the submitter's proposal or widely used
taxonomic name because only the organism name in the taxonomy database
which is managed by GenBank can be used for the entry.  
Please refer to [description of the taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=howcite).

DDBJ provides a web service called
[TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en) to retrieve
organism names in the taxonomy database. This would be helpful as a
reference of taxonomic names when you submit nucleotide sequences to
DDBJ.  
Please note, even though the organism name has already been registered
into the taxonomy database, when the data with the organism name have
not yet been open to public, you can not retrieve the name at
TXSearch.  
<span class="red">Notice)</span> During submission via Nucleotide
Sequence Submission System, please select "Not found in taxonomy
database, but already registered in other sequence data " for
["Category" of organism name](#deasy) to [indicate corresponding to the case](#private).

To submit nucleotide sequence data to DDBJ or to search taxonomy
database, <span class="red">please make sure that the organism name has no misspelling. </span>

## General rule to describe organism names <a name="rule"></a>

In general, an organism should be called its scientific name of species,
however, when the species is not identified or not defined, it would be
some tentative name instead of the scientific name of the species.

So, <span class="red">do NOT inappropriately select any organism name　existing in taxonomy database. </span> Only when you can identify
organism name from which your sequence has been obtained with no doubt
AND the organism name has been already registered to taxonomy database,
you can select the organism name existing in taxonomy database

  - The name of "unidentified organism" or "novel species" should be
    described as a tentative name
  - Sequence similarity of a marker gene is not absolute benchmark in
    phylogenetic relationship.
  - Identical sequences does NOT mean that they are derived from same
    species.

If the organism name that you submit is not in the database, the name
should be newly registered to the taxonomy database through DDBJ.  
Such new organism names will be open to the public on taxonomy database
after the release of corresponding sequence data from DDBJ.  

<a name="private"></a>
Before the release of corresponding sequence data from DDBJ, the
organism name can not be available on taxonomy database.  
Please do not hesitate to contact us when you like to update the
organism name of your sequence data, once submitted to taxonomy
database.  
See also the page, [Data Updates/Correction: after getting your
accession number](/ddbj/update-e.html), when you like to update your data.

In principle, the organism name is required to be one of "scientific
name" in taxonomy database. If you have any questions or comments for
the classification of "scientific name", "synonyms", lineages, etc. on
the taxonomy database, DDBJ can ask managers of taxonomy database any
modification based on evidence papers or references from you. In this
regard, however, in case of different opinions in phylogenetic lineages,
the claim would be often rejected. When you find misspelled name in
taxonomy database, do not hesitate to [contact us](/contact-ddbj-e.html#to-ddbj) to correct it.

## "Category" of organism name <a name="deasy"></a>

During submission through [Nucleotide Sequence Submission System](/ddbj/web-submission-e.html) you have to select "Category" of organism
name. Here shows a flowchart for judging "Category" of organism on Nucleotide Sequence Submission System

![]({{ site.baseurl }}/assets/images/ddbj/organism-e.png){:.w600}

a. artificial constructed or synthesized sequence  
: Select "Artificially constructed or synthesized sequence" in the
menu of [Category]. After referring to [4. Artificially
constructed sequence](#syn), enter the name in the value of
[Scientific name], appropriately.

b. virus  
: After finding the organism name from which your sequence was
obtained, please select the name.  
In cases of [pathogenic virus](#virus) , select "Pathogenic viruses"
in the menu box of [Category].  
Please include strain, serotype, collection_date, country
(collection site), host etc. in the values of corresponding
qualifiers, respectively.

c. trinominal name  
: Select "Valid subspecies or variety not registered in taxonomy
database" in the menu box of [Category].  
After referring to [trinominal name](#trinominal), please include
subspecies, variety, or strain etc. in the value of [Scientific
name].

d. found in taxonomy database  
: After finding the organism name from which your sequence was
obtained, please select the name.  
You do not have to select any of [Category].

e. direct molecular isolation from a bulk environmental DNA : sample  
: Select "Obtained by direct molecular isolation from environmental
sample" in the menu box of [Category].  
After referring to [3. Environmental samples](#env), enter an
organism name in the [Scientific name] box, appropriately.

f. unidentified organism or novel species in proposing state  
: In case of a tentative name for an unidentified organism, select
"Species is not identified".  
In case of a novel species in proposing state, select "Species is
not identified" in the menu box of [Category].  
After referring to [2. In case of unidentified species
names](#unidentified), enter an organism name in the [Scientific
name] box, appropriately.

g. not found in taxonomy database, but already submitted other
: sequence data of the organism  
Select "The name is valid but not registered in taxonomy database"
in the menu box of [Category].  
Enter the same organism name as previously submitted in the
[Scientific name] box.

h. not found in taxonomy database, but validly identified the
: scientific name of species  
Select "The name is valid but not registered in taxonomy database"
in the menu box of [Category]. After referring to [1. For
identified species](#species), enter an organism name in the
[Scientific name] box, appropriately.

## Details to describe organism names <a name="organism_name"></a>

Though there are still some exceptions, followings are how to describe
organism names for DDBJ submission. If the application of the organism
name to taxonomy database is required, during your sequence submission,
please let us know [reference information](#items)

### 1. For identified species <a name="species"></a> 

In principle, "organism name" is required to be a binomial name, i.e.
the genus name and the species epithet, from which the sequence is
obtained.  
The species name should be described following international code of
nomenclatures, such as International Code of Zoological Nomenclature
(ICZN), International Code of Botanical Nomenclature (ICBN),
International Code of Nomenclature of Bacteria.

Example

  - Homo sapiens

#### trinomial name <a name="trinominal"></a>

In cases of using trinomial name or the like, the name of subspecies,
variety, serotype or strain should be included in the organism name, if
necessary.

Examples

  - Pan troglodytes troglodytes
  - Zea mays subsp. mays
  - Brassica oleracea var. alboglabra
  - Oryza sativa Japonica Group
  - Escherichia coli K-12

Also, the qualifier corresponding to
[sub_species](/ddbj/qualifiers-e.html#sub_species),
[variety](/ddbj/qualifiers-e.html#variety),
[serotype](/ddbj/qualifiers-e.html#serotype) or
[strain](/ddbj/qualifiers-e.html#strain) is required for the source
feature.

<pre><code>                    /<a href="/ddbj/qualifiers.html#organism">organism</a>="Pan troglodytes troglodytes"
                     /<a href="/ddbj/qualifiers.html#sub_species">sub_species</a>="troglodytes"
</code></pre> 

#### microbial genome <a name="genome"></a>

Previously, a strain name or some other lower taxon was required for the
organism name of whole genomic scale sequences from microorganisms.  
However, currently, the value of organism qualifier should be just a
scientific name, in principle, even though for microbial genomes.  
Describe a strain name in the [strain](/ddbj/qualifiers-e.html#strain)
qualifier.

<pre><code>                    /<a href="/ddbj/qualifiers.html#organism">organism</a>="Candida albicans"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="WO-1"
</code></pre>  

#### virus <a name="virus"></a>

For viruses, basically, we also accept scientific names, following [the International Committee on Taxonomy of Viruses](https://talk.ictvonline.org/).  
<span class="red bold">By 2017, we used informal names for frequently submitted pathogenic viruses including their strain names and serotypes in the description of organism name. However, the rule has been discontinued for the future submissions. </span>

Example

  - Influenza A virus

The qualifiers corresponding to
[collection_date](/ddbj/qualifiers-e.html#collection_date),
[country](/ddbj/qualifiers-e.html#country),
[host](/ddbj/qualifiers-e.html#host),
[strain](/ddbj/qualifiers-e.html#strain) and
[serotype](/ddbj/qualifiers-e.html#serotype) are required for the source feature.

Please describe them with appropriate qualifiers as below example.

<pre><code>                  /<a href="/ddbj/qualifiers.html#country">country</a>="Japan:Tokyo"
                   /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="2007-11-01"
                   /<a href="/ddbj/qualifiers.html#host">host</a>="Gallus gallus"
                   /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="viral cRNA"
                   /<a href="/ddbj/qualifiers.html#organism">organism</a>="Influenza A virus"
                   /<a href="/ddbj/qualifiers.html#serotype">serotype</a>="H7N7"
                   /<a href="/ddbj/qualifiers.html#strain">strain</a>="A/chicken/Tokyo/2007"
</code></pre>  

#### hybrid <a name="hybrid"></a>

In cases of hybrids, the scientific names would be like as follows;

Examples

  - Rosa alba x Rosa corymbifera
  - Malus x domestica
  - Lilium hybrid division I

#### not found in taxonomy database <a name="novel"></a>

If the name is not available on taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en)), please tell us
any of following items during your sequence submission.

Useful items for application of organism names to taxonomy database

  - [taxonomic lineage](#lineage)
  - [valid publication for species](#ref)
  - [already issued accession number](#acc)
  - [process of sampling and/or sequencing](#isolate)

### 2. In case of unidentified species names <a name="unidentified"></a> 

#### 2-1. In case of species not to be identified <a name="2-1._In_case_of_species_not_to_be_identified"></a>

If the scientific name is unclear and/or unidentified, we adopt a
tentative name for the organism. The tentative name is made up with the
lineage (in many cases, genus names) that as far as submitters could
specify.

Format

```
"<genus name> sp."
"<family (or upper) name> bacterium"
```

Example

  - Acetobacter sp.
  - Acetobacteraceae bacterium

The qualifiers corresponding to the lower rank such as
[strain](/ddbj/qualifiers-e.html#strain),
[isolate](/ddbj/qualifiers-e.html#isolate) etc. are required for the
source feature.

<pre><code>                    /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp."
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

In case of whole genomic scale sequences from microorganisms, or in case
of eukaryote sequences (except unicellular fungi), a strain name or some
other lower taxon is required for the organism name.  
The tentative name is made up with the lineage (in many cases, genus
names) that as far as submitters could specify and the lower taxon (in many cases, strain names).  
Also, describe a strain name in the
[strain](/ddbj/qualifiers-e.html#strain) qualifier.

<pre><code>                    /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp. ITDI2.1"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

#### 2-2. In case of proposing a novel species <a name="new"></a>

If you are to propose a novel species, in the mean time, we adopt an
unique tentative name for the organism. The tentative name is made up
with the lineage (in many cases, genus names) that as far as submitters
could specify and the lower taxon (in many cases, strain names). Because
we have to avoid some confusions; for example, two different organisms
are mixed up.

Format

```
"<genus name> sp. <strain name>"
"<family (or upper) name> bacterium <strain name>"
```

Example

  - Acetobacter sp. ITDI2.1
  - Acetobacteraceae bacterium ITDI2.1

Also, the qualifiers corresponding to the lower rank such as
[strain](/ddbj/qualifiers-e.html#strain) etc. are required for the
source feature.

<pre><code>                    /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp. ITDI2.1"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

If the name is not available on taxonomy database
([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en)), please tell us
any of following items during your sequence submission.

Useful items for application of organism names to taxonomy database

  - [taxonomic lineage](#lineage)
  - [proposing name for novel species](/ddbj/organism-e.html#propose)
  - [already issued accession number](#acc)
  - [process of sampling and/or sequencing](#isolate)

### 3. Environmental samples <a name="env"></a> 

Environmental samples are sequences derived by direct molecular
isolation from a bulk environmental DNA sample (by PCR, DGGE, or other
anonymous methods) with no reliable identification of the source
organism.  
Though frequently confused, <span class="red">the term, 'environmental
samples', does not mean "wild type".</span>  
Please refer to [environmental samples](/ddbj/env-e.html) in detail.  
<span class="red">Mixed culture derived from an environmental sample is also processed as a kind of environmental samples. </span>

For environmental sample, we assign the lineage that as far as
submitters could specify is used for the description of organism name
with the header "uncultured".

Format

```
"uncultured <genus name> sp."
  "uncultured <family (or upper) name>" or "uncultured <family (or upper) name> bacterium"
```

Examples

  - uncultured Acetobacter sp.
  - uncultured alpha proteobacterium
  - uncultured Bacillaceae bacterium

In cases of environmental samples, the qualifier,
[environmental_sample](/ddbj/qualifiers-e.html#environmental_sample),
is required for source feature. Also,
[isolation_source](/ddbj/qualifiers-e.html#isolation_source) and some
other qualifiers should be used to describe the process and conditions
of sample isolation.

<pre><code>                    /<a href="/ddbj/qualifiers.html#clone">clone</a>="4-11"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured Acetobacter sp."</code></pre>

If the name is not available on taxonomy database
([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en)), please tell us
any of following items during your sequence submission.

Useful items for application of organism names to taxonomy database

  - [taxonomic lineage](#lineage)
  - [process of sampling and/or sequencing](#isolate)

### 4. Artificially constructed sequences <a name="syn"></a> 

In many cases, artificially constructed sequences are uniformly named
"synthetic construct", or, "eukaryotic synthetic construct". Sometimes,
vector names or something like that are described 'as is' in the
organism name.

Examples

  - Cloning vector pAP3neo
  - Expression vector pAMP

If the name is not available on taxonomy database
([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en)), please tell us
any of following items during your sequence submission.

Useful items for application of organism names to taxonomy database

  - [expected usage](/ddbj/organism-e.html#usage)

## Useful items for application of organism names to taxonomy database <a name="items"></a> 

If the organism name that you submit with your sequence data is not in
the database, it must be newly registered to the taxonomy database
through DDBJ.

taxonomic lineage<a name="lineage"></a>
: Please tell us the taxonomic lineage of the organism from which your
sequence has been obtained, as far as inferable.

valid publication for species<a name="ref"></a>  
: If the scientific name of species has been publicized in papers,
please tell us the references for the species.

proposing name for novel species<a name="propose"></a>
: If it is really novel species and not yet published, please tell us
proposing name for the novel species for the tracking purpose at
taxonomy database. In addition, please send E-mail to DDBJ update,
![]({{ site.baseurl }}/assets/images/ddbj/ad_updt1.gif "ad_updt"){:.life-size}, when it is published or
particularly if the name changes.

already issued accession number<a name="acc"></a> 
: If you have already submitted other sequence data derived from the
same organism of present submission and the previous data has not
yet been published, please tell us the accession number(s) of your
previous data.

process of sampling and/or sequencing<a name="isolate"></a>  
: It would be helpful if you tell us some information such as process
of sampling, sequencing and so on.

expected usage<a name="usage"></a> 
: In cases of artificial constructed sequences, please tell us how to use them.

