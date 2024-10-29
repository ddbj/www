---
layout: tabbed_indexed_content
title: Organism qualifier
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: en
related_pages:
  - title: DDBJ flat file format
    url: /ddbj/flat-file-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: Identifiers
    url: /ddbj/identifiers-e.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode-e.html
  - title: Protein Coding Sequence; CDS feature
    url: /ddbj/cds-e.html
  - title: Description Examples of Sequence Data
    url: /ddbj/example-e.html
---

Every value of /organism qualifier must be 
- a "scientific name" (not svnonym, equivalent name or others) 
- ranked as species or lower taxa (subspecies, variety, strain, etc.)    

on [taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy ).

## taxonomy database  {#taxonomy}
All organisms that are represented in the sequence data of DDBJ are registered to 
[the taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy ).    
For construction of the nucleotide sequence database, it is important to manage the organism names 
for the data and also necessary to unify the diverse names of the organisms.    
The taxonomy database is used as the reference database for the unified organism names.    

The primary purpose of the taxonomy database is to unify descriptions of organism names.    
Consequently, the taxonomy database is not an authoritative source for nomenclature or classification.    
A taxonomic name may differ from the submitter's proposal or widely used taxonomic name because only the organism name in the taxonomy database 
which is managed by GenBank can be used for the entry.    
Please refer to [description of the taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=howcite ).

DDBJ provides a web service called 
[TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en ) to retrieve organism names in the taxonomy database.    
This would be helpful as a reference of taxonomic names when you submit nucleotide sequences to DDBJ.    


## Quick guide to describe organism names  {#quick}

### In cases of the organism names existing in the taxonomy database  {#existing}
Please confirm and enter the name is ranked as "species" or other lower taxon (subspecies, variety, strain, etc.) 
and classified as "scientific name" (not svnonym, equivalent name or others).    
    
When you have any objections against the description status of the taxonomy database, see [here](#objection).    


### In cases of the organism names not found in the taxonomy database  {#not_existing}
To submit nucleotide sequence data to DDBJ or to search taxonomy database, 
<span class="red">please enter the organism name without any misspells. </span>    

- [In case of unidentified species names](#unidentified)
    - [The species not to be identified](#not-to-be-identified)
    - [New species (sp. nov.), genus (gen. nov.), or the like](#novel)
    - [Environmental samples](#env)
- [Validly identified the scientific name of species](#unregistered)
    - [In cases of valid names but not reported with any sequence data](#unregistered)
    - [When you have any objections against the description status of the taxonomy database](#objection) # including comb. nov.  
- [Artificially constructed sequences](#syn)


## General rule to describe organism names  {#policy}
In general, an organism should be called its scientific name of species, however, when the species is not identified or not defined, 
it would be some tentative name instead of the scientific name of the species.    

So, <span class="red">do NOT inappropriately select any organism name existing in taxonomy database. </span>    
Only when you can identify organism name from which your sequence has been obtained with no doubt AND 
the organism name has been already registered to taxonomy database, 
you can select the organism name existing in taxonomy database.    

In general, sequence similarity of marker gene is not the only-one nor the best method to classify organisms and to identify species.  
When you classify and identify species, you should consider comprehensive perspectives;    
morphology, anatomy, physiology, behavior, molecular biology, culture condition, collection site, morphology, biochemical assessment and so on.    

It is totally responsibility of its submitter for the contents of sequence data.    

- The name of "unidentified organism" or "novel species" should be described with a tentative one
- They are totally different things, "Sequences of a gene are identical" and "Samples are derived from the same species"  
- Sequence similarity of a marker gene is <span class="red">NOT</span> absolute benchmark in phylogenetic relationship.
- The current standard for prokaryotic species identification is ANI (Average Nucleotide Identity) 
 or dDDH (digital DNA-DNA hybridization) by using whole genome sequences


If the organism name that you submit is not in the database, 
the name should be newly registered to the taxonomy database through DDBJ.    
Such new organism names will be open to the public on taxonomy database 
after the release of corresponding sequence data from DDBJ.    

Before the release of corresponding sequence data from DDBJ, the organism name can not be available on taxonomy database.    
Please do not hesitate to contact us when you like to update the organism name of your sequence data, once submitted to taxonomy database.    
See also the page, [Data Updates/Correction: after getting your accession number](/ddbj/update-e.html), when you like to update your data.    
    
In principle, the organism name is required to be one of "scientific name" in taxonomy database.    
When you have any objections against the description status of the taxonomy database, see [here](#objection).    


## "Category" of organism name  {#deasy}
During submission through [Nucleotide Sequence Submission System](/ddbj/web-submission-e.html) you have to select "Category" of organism name.    
Here shows a flowchart for judging "Category" of organism on Nucleotide Sequence Submission System

<img src="/assets/images/ddbj/organism-e.png" alt="" title="" class="w600">

### a. artificial constructed or synthesized sequence  {#syn_D}
Select "Artificially constructed or synthesized sequence" in the menu of [Category].     
After referring to [4. Artificially constructed sequence](#syn), enter the name in the value of [Scientific name], appropriately.    

### b. virus  {#virus_D}
After finding the organism name from which your sequence was obtained, please select the name.    
Please include the values of corresponding qualifiers, 
[/isolate](/ddbj/qualifiers-e.html#isolate) (or [/strain](/ddbj/qualifiers-e.html#strain)), 
[/serotype](/ddbj/qualifiers-e.html#serotype), 
[/collection_date](/ddbj/qualifiers-e.html#collection_date),
[/geo_loc_name](/ddbj/qualifiers-e.html#geo_loc_name), 
[/host](/ddbj/qualifiers-e.html#host) etc., respectively.    
See also the [virus](#virus) section.     
In cases of pathogenic viruses, select "Pathogenic viruses" in the menu box of [Category].    


### c. trinominal name  {#trinominal_D}
Select "Valid subspecies or variety not registered in taxonomy database" in the menu box of [Category].    
After referring to [trinominal name](#trinominal), please include subspecies, variety, or strain etc. in the value of [Scientific name].    


### d. found in taxonomy database  {#existing_D}
After finding the organism name from which your sequence was obtained, please select the name.    
You do not have to select any of [Category].     


### e. direct molecular isolation from a bulk environmental DNA sample  {#env_D}
Select "Obtained by direct molecular isolation from environmental sample" in the menu box of [Category].     
After referring to [3. Environmental samples](#env), enter an organism name in the [Scientific name] box, appropriately.    
Please include the values of corresponding qualifiers, 
[/isolation_source](/ddbj/qualifiers-e.html#isolation_source), 
[/isolate](/ddbj/qualifiers-e.html#isolate) (or [/clone](/ddbj/qualifiers-e.html#clone), 
[/collection_date](/ddbj/qualifiers-e.html#collection_date), 
[/geo_loc_name](/ddbj/qualifiers-e.html#geo_loc_name), 
[/host](/ddbj/qualifiers-e.html#host) etc., respectively.    


### f. unidentified organism or novel species in proposing state  {#unidentified_D}
In case of a tentative name for an unidentified organism, select "Species is not identified".    
In case of a novel species in proposing state, select "Species is not identified" in the menu box of [Category].    
After referring to [2. In case of unidentified species names](#unidentified), enter an organism name in the [Scientific name] box, appropriately.    


### g. not found in taxonomy database, but already submitted other sequence data of the organism  {#private_D}
Select "The name is valid but not registered in taxonomy database" in the menu box of [Category].    
<span class="red">**Please input the same organism name as previously submitted (scientific name or tentative name) in the meantime before the valid publication of the species.**</span>    


### h. not found in taxonomy database, but validly identified the scientific name of species   {#unregistered_D}
Select "The name is valid but not registered in taxonomy database" in the menu box of [Category].    
After referring to [1. For identified species](#species), enter an organism name in the [Scientific name] box, appropriately.    
See [In cases of valid scientific names but not reported with any sequence data](#unregistered)


## Details to describe organism names  {#organism_name}
Though there are still some exceptions, followings are how to describe organism names for DDBJ submission.    
If the application of the organism name to taxonomy database is required, during your sequence submission, 
please let us know [reference information](#items).    


## 1. For identified species  {#species} 
In principle, "organism name" is required to be a binomial name, i.e. the genus name and the species epithet, from which the sequence is obtained.    
The species name should be described following international code of nomenclatures, 
such as International Code of Zoological Nomenclature (ICZN), 
International Code of Botanical Nomenclature (ICBN), 
International Code of Nomenclature of Bacteria.    

**Example**
<pre><code>Homo sapiens</code></pre>


### trinomial name  {#trinominal}
In cases of using trinomial name or the like, the name of subspecies, variety, serotype or strain should be included in the organism name, if necessary.    

**Examples**
<pre><code>Pan troglodytes troglodytes
Zea mays subsp. mays
Brassica oleracea var. alboglabra
Oryza sativa Japonica Group
Escherichia coli K-12</code></pre>

Also, the qualifier corresponding to 
[/sub_species](/ddbj/qualifiers-e.html#sub_species),
[/variety](/ddbj/qualifiers-e.html#variety),
[/serotype](/ddbj/qualifiers-e.html#serotype) or
[/strain](/ddbj/qualifiers-e.html#strain) is required for the source feature.

<pre><code>                    /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Pan troglodytes troglodytes"
                    /<a href="/ddbj/qualifiers-e.html#sub_species">sub_species</a>="troglodytes"
</code></pre> 


### microbial genome  {#genome}
Previously, a strain name or some other lower taxon was required for the organism name of whole genomic scale sequences from microorganisms.    
However, currently, the value of organism qualifier should be just a scientific name, in principle, even though for microbial genomes.    
Describe a strain name in the [/strain](/ddbj/qualifiers-e.html#strain) qualifier.

<pre><code>                    /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Candida albicans"
                    /<a href="/ddbj/qualifiers-e.html#strain">strain</a>="WO-1"
</code></pre>  


### virus  {#virus}
For viruses, basically, we also accept scientific names, following [the International Committee on Taxonomy of Viruses](https://talk.ictvonline.org/ ).    
See also the virus section on [Identifiers](/ddbj/identifiers-e.html#virus).     
<span class="red">By 2017, we used informal names for frequently submitted pathogenic viruses including their strain names and serotypes in the description of organism name. 
However, the rule has been discontinued for the future submissions.</span>    

**Example**
- Influenza A virus

The qualifiers corresponding to 
[/collection_date](/ddbj/qualifiers-e.html#collection_date),
[/geo_loc_name](/ddbj/qualifiers-e.html#geo_loc_name), 
[/host](/ddbj/qualifiers-e.html#host), 
[/isolate](/ddbj/qualifiers-e.html#isolate) (or [/strain](/ddbj/qualifiers-e.html#strain)) and 
[/serotype](/ddbj/qualifiers-e.html#serotype) are required for the source feature.

Please describe them with appropriate qualifiers as below example.

<pre><code>                   /<a href="/ddbj/qualifiers-e.html#collection_date">collection_date</a>="2007-11-01"
                   /<a href="/ddbj/qualifiers-e.html#geo_loc_name">geo_loc_name</a>="Japan:Tokyo"
                   /<a href="/ddbj/qualifiers-e.html#host">host</a>="Gallus gallus"
                   /<a href="/ddbj/qualifiers-e.html#isolate">isolate</a>="A/chicken/Tokyo/2007"
                   /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="viral cRNA"
                   /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Influenza A virus"
                   /<a href="/ddbj/qualifiers-e.html#serotype">serotype</a>="H7N7"
</code></pre>


### hybrid  {#hybrid}
In cases of hybrids, the scientific names would be like as follows;    

**Examples**
<pre><code>Rosa alba x Rosa corymbifera
Malus x domestica
Lilium hybrid division I</code></pre>


### Not found in taxonomy database  {#unregistered}
**In cases of valid scientific names but not reported with any sequence data**    
In principle, you can submit nucleotide sequence data with the organism name.    
<span class="red">Please enter the organism name without any misspells. </span>    

If the name of genus or other upper taxa is not available on taxonomy database, 
please tell us the lineage information of the organism.    
As far as possible , please tell us the valid publication of the species.    
    
Please note, even though the organism name has already been registered into the taxonomy database, 
when the data with the organism name have not yet been open to the public, you can not retrieve the name in the taxonomy database.     
    
<span class="red">Notice)</span> During submission via Nucleotide Sequence Submission System, 
please select "Not found in taxonomy database, but already registered in other sequence data " for 
["Category" of organism name](#deasy) to [indicate corresponding to the case](#private_D).    

Please tell us any of following items during your sequence submission.

---
**Useful items for application of organism names to taxonomy database**

- [taxonomic lineage](#lineage)
- [valid publication for species](#ref)
- [already issued accession number](#acc)


---

**Any objections against the description status of the taxonomy database**<a name="objection"></a>    
If you find any mistakes in the taxonomy database, please [contact us](/contact-ddbj-e.html#to-ddbj) to correct it. 
In case of misspelling of the organism name, it will be easily corrected.    
    
If you are preparing to intend reclassification of a series of organisms, so-called "combinatio nova", the names on the taxonomy database can not be corrected before publishing your paper to claim the new classiffication.    
So, in the meantime, please use the current names in the taxonomy database.  
After published your paper, contact us to change/correct the scientific name. Then, we will check it again.    
    
When you have any questions, objections, or comments for the classification of "scientific name", "synonyms", lineages, etc. on the taxonomy database, 
DDBJ can ask managers of taxonomy database any modification based on evidence papers or references from you.    
So, as far as possible, please provide the citation information that support your opinions and your comment on how it should be, because it often be highly technical content.    
Please note, regarding issues such as interpretating  phylogenetic lineages, the taxonomy database has a policy of adopting one of the theories to ensure the uniqueness of the data.  
So, we may not be able to meet your request.    
See also [the description of the taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=howcite ) in detail.    
    
Please tell us any of following items during your sequence submission.

---
**Useful items for application of organism names to taxonomy database**

- [taxonomic lineage](#lineage)
- [valid publication for species](#ref)


---


## 2. In case of unidentified species names  {#unidentified} 

### 2-1. In case of species not to be identified  {#not-to-be-identified} 
If the scientific name is unclear and/or unidentified, we adopt a tentative name for the organism.    
The tentative name is made up with the lineage (in many cases, genus names) that as far as submitters could specify.    

**For prokaryotes**    

**Format**
- \<genus name> sp. # prokaryotes
- \<family (or upper) name> bacterium
- \<family (or upper) name> archaeon

**Examples**
<pre><code>Acetobacter sp.
Acetobacteraceae bacterium
Methanomicrobiales archaeon</code></pre>

**For eukaryotes**    

**Format**
- \<genus (or upper) name> sp. # eukaryotes

**Example**
<pre><code>Aspergillaceae sp.
</code></pre>

The qualifier corresponding to [identifier](/ddbj/identifiers-e.html), such as 
[/strain](/ddbj/qualifiers-e.html#strain), 
[/isolate](/ddbj/qualifiers-e.html#isolate) etc., is required for the source feature.

<pre><code>                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Acetobacter sp."
                     /<a href="/ddbj/qualifiers-e.html#strain">strain</a>="ITDI2.1"</code></pre>  

In cases of **whole genomic scale sequences** from unicellular microorganisms, 
some [identifier](/ddbj/identifiers-e.html), strain name or some other lower taxon, is required to include in the organism name.  
The tentative name is made up with the lineage (in many cases, genus names) that as far as submitters could specify 
and the lower taxon (in many cases, strain names).  
Even included in the organism name, you should describe the [identifier](/ddbj/identifiers-e.html) in the 
[/strain](/ddbj/qualifiers-e.html#strain) or some other corresponding qualifier.

<pre><code>                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Euglena sp. CR123"
                     /<a href="/ddbj/qualifiers-e.html#strain">strain</a>="CR123"</code></pre>  

<span class="red">**Please use the same tentative name, when you submit any other data derived from the same organism.**</span>    


### 2-2. In case of proposing a novel species  {#novel}
In cases of viruses, you can use the novel species name, as is, without the valid publication of the species that is named after [The International Code of Virus Classification and Nomenclature (ICVCN)](https://ictv.global/about/code ).    
However, in case of the virus named based on recent binominal ones and before valid publication, please use a tentative name in the following format.    

**Format**
- \<genus name\> sp. '\<candidate of species epithet\>'    

For other than viruses, <span class="red">**no name confusable with the formal scientific name is acceptable before the valid publication.**</span>    
In principle, during the stage proposing a novel scientific name, a tentative name like as unidentified cases is required 
to keep unique correspondence between the organism and sequence data until established a new scientific name.    

If you are to propose a novel species, in the mean time, we adopt an unique tentative name for the organism.    
The tentative name is made up with the lineage (in many cases, genus names) 
that as far as submitters could specify and the [identifier](/ddbj/identifiers-e.html) (in many cases, strain names).    
      
In cases of **prokaryotes**, a tentative name should be assigned to every strain.     

**Format**
- \<genus name> sp. \<strain name> # prokaryotes
- \<family (or upper) name> bacterium \<strain name>
- \<family (or upper) name> archaeon \<strain name>

**Examples**
<pre><code>Acetobacter sp. ITDI2.1
Acetobacteraceae bacterium ITDI2.1</code></pre>


In cases of **eukaryotes**, a tentative name should be assigned to every species candidate (operational taxonomic unit, OTU),
or, as the case may be, every strain/isolate.     

**Format**
- \<genus (or upper) name> sp. \<OTU ID> # eukaryotes

**Example**
<pre><code>Oscinella sp. 1-AB-2020
</code></pre>


Because we have to avoid some confusions, for example, two different organisms are mixed up.    
Therefore, if you have any other sequence data derived from the same species candidate, 
<span class="red">**please use the same tentative name in the meantime before the valid publication of the species.**</span>    
This is only a procedure to manage the submitted data to us, so, it is a different issue from any names that you use in the preparing paper and so on.    

The tentative name in the taxonomy database is to be changed to the formal scientific name, after the valid publication of the species.    
When the valid pulication, i.e. the paper to report a novel species, is published, please contact us to update the paper information (reference), the organism name and so on, and to release your sequence data.    
See [Data Updates/Corrections after Receiving Accession Number](/ddbj/update-e.html) for your update request.    

Also, the qualifiers corresponding to the [identifier](/ddbj/identifiers-e.html) (such as
[/strain](/ddbj/qualifiers-e.html#strain) etc.) are required for the source feature to submit your sequence.  

<pre><code>                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Acetobacter sp. ITDI2.1"
                     /<a href="/ddbj/qualifiers-e.html#strain">strain</a>="ITDI2.1"</code></pre>  

Please tell us any of following items during your sequence submission.

---
**Useful items for application of organism names to taxonomy database**

- [taxonomic lineage](#lineage)
- [proposing name for novel species](#propose)
- [already issued accession number](#acc)
- [process of sampling and/or sequencing](#isolate)


---


## 3. Environmental samples  {#env} 

Environmental samples are sequences derived by direct molecular isolation from a bulk environmental DNA sample 
(by PCR, DGGE, or other anonymous methods) with no reliable identification of the source organism.  
Though frequently confused, <span class="red">the term, 'environmental samples', does not mean "wild type".</span>  
Please refer to [environmental samples](/ddbj/env-e.html) in detail.  
<span class="red">Mixed culture derived from an environmental sample is also processed as a kind of environmental samples. </span>


### 3-1 Environmental profile {#profile}

For environmental sample, the organism name should be the lineage that as far as 
you can specify with the header "uncultured".

**Format**
- uncultured bacterium  # prokaryotes 
- uncultured \<genus name> sp. # prokaryotes 
- uncultured \<family (or upper) name> bacterium # prokaryotes
- uncultured \<genus (or upper) name> # eukaryotes

**Examples**
<pre><code>uncultured bacterium
uncultured Acetobacter sp.
uncultured alpha proteobacterium
uncultured Bacillaceae bacterium
uncultured Aspergillus
uncultured Aspergillaceae</code></pre>

In cases of environmental samples, the qualifier, 
[/environmental_sample](/ddbj/qualifiers-e.html#environmental_sample), is required for source feature.     
Also, [/isolation_source](/ddbj/qualifiers-e.html#isolation_source) and some other qualifiers should be used to describe the process and conditions of sample isolation.    
The qualifiers, [/collection_date](/ddbj/qualifiers-e.html#collection_date), 
[/geo_loc_name](/ddbj/qualifiers-e.html#geo_loc_name) and 
[/host](/ddbj/qualifiers-e.html#host) 
are also useful.    
For the [identifier](/ddbj/identifiers-e.html), use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier.    
When you cloned the sample sequence, use [/clone](/ddbj/qualifiers-e.html#clone) qualifier, instead of /isolate qualifier.    

<pre><code>                     /<a href="/ddbj/qualifiers-e.html#clone">clone</a>="4-11"
                     /<a href="/ddbj/qualifiers-e.html#collection_date">collection_date</a>="2007"
                     /<a href="/ddbj/qualifiers-e.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers-e.html#geo_loc_name">geo_loc_name</a>="Japan: Shizuoka"
                     /<a href="/ddbj/qualifiers-e.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="uncultured Acetobacter sp."</code></pre>

If the name is not available on taxonomy database 
([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en )), please tell us
any of following items during your sequence submission. 

---
**Useful items for application of organism names to taxonomy database**

- [taxonomic lineage](#lineage)
- [process of sampling and/or sequencing](#isolate)


---


### 3-2 Metagenome Assembly  {#MAG}
: When you submit sequences of [Metagenome-Assembled Genome (MAG)](/ddbj/metagenome-assembly-e.html), 
some single taxa can be assigned by the software tools, 
so use the names of species or lower ranks (ex. Agrobacterium tumefaciens) for the /organism qualifiers.    

If the scientific name of MAG is unclear and/or unidentified, we adopt a tentative name for the organism.    
The tentative name is made up with the lineage (in many cases, genus names) that as far as submitters could specify.    

**Format**
- \<genus name> sp. # prokaryotes
- \<family (or upper) name> bacterium
- \<family (or upper) name> archaeon
- \<genus (or upper) name> sp. # eukaryotes

**Examples**
<pre><code>Agrobacterium sp.
Rhizobiaceae bacterium
Methanomicrobiales archaeon
Aspergillaceae sp.</code></pre>

In case of MAG, the qualifiers, 
[/environmental_sample](/ddbj/qualifiers-e.html#environmental_sample), 
[/isolation_source](/ddbj/qualifiers-e.html#isolation_source), and 
[/isolate](/ddbj/qualifiers-e.html#isolate) (as an [identifier](/ddbj/identifiers-e.html)), 
are required for source feature like as other environmental samples.  
Additionally, the [/metagenome_source](/ddbj/qualifiers-e.html#metagenome_source) qualifier is also required for source feature of MAG.  
For [/metagenome_source](/ddbj/qualifiers-e.html#metagenome_source) qualifier, please input some of operative 
[metagenome taxonomy nodes](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169 ) reflecting the resource of the environmental sample, e.g. "soil metagenome" .  
See [NCBI site](https://www.ncbi.nlm.nih.gov/biosample/docs/organism/#metagenomes ) about usages of metagenome names. 

---
**Useful items for application of organism names to taxonomy database**

- [taxonomic lineage](#lineage)
- [process of sampling and/or sequencing](#isolate)

---


## 4. Artificially constructed sequences  {#syn} 

In general, artificially constructed sequences are uniformly named "synthetic construct" or "eukaryotic synthetic construct".    
Sometimes, vector names or something like that are described 'as is' in the organism name.    
When you like to submit sequences of only some specific genes, use "synthetic construct" or "eukaryotic synthetic construct".    
If you like to submit complete sequences of vectors or the likes, please give some name to them.    
To distiguish with natural plasmids. do not use the word, "plasmid ".    


**Examples**
<pre><code>Cloning vector pAP3neo
Expression vector pAMP</code></pre>

If the name is not available on taxonomy database
([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en )), please tell us
any of following items during your sequence submission.

---
**Useful items for application of organism names to taxonomy database**

- [expected usage](/ddbj/organism-e.html#usage)


## Useful items for application of organism names to taxonomy database  {#items} 

If the organism name that you submit with your sequence data is not in the database, 
it must be newly registered to the taxonomy database through DDBJ.    


**taxonomic lineage**<a name="lineage"></a>    
Please tell us the taxonomic lineage of the organism from which your sequence has been obtained, as far as inferable.    
    

**valid publication for species**<a name="ref"></a>    
If the scientific name of species has been publicized in papers,
please tell us the references for the species.    
    

**proposing name for novel species**<a name="propose"></a>    
If it is really novel species and not yet published, please tell us proposing name for the novel species 
for the tracking purpose at taxonomy database. In addition, please send E-mail to DDBJ update, 
<img src="/assets/images/ddbj/ad_updt1.gif" alt="ad_updt" title="" class="life-size">, 
when it is published or particularly if the name changes.    
    

**already issued accession number**<a name="acc"></a>    
If you have already submitted other sequence data to INSDC (DDBJ/ENA/GenBank or BioSample) 
derived from the same organism of present submission and 
the previous data has not yet been published, 
please tell us the accession number(s) of your previous data.     
    

**process of sampling and/or sequencing**<a name="isolate"></a>    
It would be helpful if you tell us some information such as process of sampling, sequencing and so on.    
    

**expected usage**<a name="usage"></a>    
In cases of artificial constructed sequences, please tell us how to use them.    
    

