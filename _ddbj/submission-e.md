---
layout: tabbed_indexed_content
title: Nucleotide Sequence Submission
category: ddbj
current_tab: submission
lang: en
related_pages:
  - title: Description Examples of Sequence Data
    url: /ddbj/example-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: Organism qualifier
    url: /ddbj/organism-e.html
  - title: Protein Coding Sequence; CDS feature
    url: /ddbj/cds-e.html
  - title: Description of Location
    url: /ddbj/location-e.html
---

## Before Nucleotide Sequence Submission  {#responsibility}

### Purpose and Significance of Nucleotide Sequence Submission  {#purpose}

In many scientific journals, it is required to assign and to describe 
[INSDC accession number](/documents/accessions-e.html) 
for a nucleotide sequence on the research paper. DDBJ is a member of 
[International Nucleotide Sequence Database Collaboration (INSDC)](http://www.insdc.org/ ).

When you wish to publicize your sequence through DDBJ, and your sequence is 
[acceptable](/documents/data-categories-e.html) 
for DDBJ, you can submit your sequence to DDBJ, 
even if you have no plan to publication of any research paper related to the sequence.

Once released, the nucleotide sequences submitted to INSDC including DDBJ are 
[available for everyone](/about/insdc-e.html#policy ).

If you submit nucleotide sequences to DDBJ, you can get 
[NO priority for patent](/policies-e.html#priority ).


### New Submission or Update?  {#update}

When you wonder your sequence data should be newly submitted or your
previous entry should be modified, do not hesitate to contact us at
[Contact form](/ddbj/update-form-e.html ) "Data updates / Corrections".

[Nucleotide Sequence Submission System](/ddbj/web-submission-e.html) is a tool only for new submission, 
so, do not use Nucleotide Sequence Submission System to send your update request. 
If you need to modify your previousentry, see 
[the link for update request](/ddbj/update-e.html ), and contact us at 
[Application Form for Data Update Requests](/ddbj/update-form-e.html ).


### Rights and Duties of Submitter {#right} 

For sequence submission to DDBJ, it is required for submitters 
to provide not only nucleotide sequence but also address of 
[submitters and contact person](#submitter ), reference(s) (including 
[primary citation](#pcite )), names of source organisms, function, 
natures of genes, and so on (collectively means "**registration information**" of the entry).  

DDBJ releases its data in 
[the DDBJ flat file format](/ddbj/flat-file-e.html ). 
Submitter(s) and contact person of the entry are indicated in the 
[REFERENCE 1](/ddbj/flat-file-e.html#Reference1 ) of DDBJ flat file, in principle.  

Following the progress of research, personnel change, and/or correction of some error, 
[submitters of the entry can revise and/or update](/ddbj/update-e.html ) 
their own nucleotide sequence and registration information.  

As mentioned above and 
[the page to explain dataflow](#data_flow ), the nucleotide sequences released 
from DDBJ are available for everyone.  
When a user other than the submitter of the entry points out some error(s) in
the entry, DDBJ will inform it to contact person of the entry. 
Since <span class="red">only submitters of the entry can revise and/or update the entry</span>, 
it depends on the submitters of the entry if the entry is modified following user's claim or not.  

Basically, it is required for the submitters to response user's inquiry about their own entry.  
When you wish to contact to the submitter(s) of an entry of your interest, please contact us through 
[the inquiry form](/contact-ddbj-e.html#to-submitter ) with reasons briefly, 
then we will forward your message to the submitter(s).  
So, [do not block E-mails from DDBJ](/precautions-e.html ).

When there is a disagreement between users and submitters on registration information of an entry, 
DDBJ keeps to be neutral to either opinion.  


### Releases of Primary Citation and Sequence Data  {#citation}

During preparation/submission of [primary citation](#pcite ), 
DDBJ can store your registration information privately in the meantime.  
If necessary, submitters have to include a 
[hold date](/ddbj/submission.html#holddate ) in their registration information.  
Then, the entry with a hold date is stored privately at DDBJ.  
DDBJ must maintain registration information as confidential until publication of the entry.  

The hold data will be open to the public according to 
[principle of data release](/documents/data-release-policy-e.html ).

In principle, [even submitters cannot remove their own
entry](/ddbj/update-e.html#q9) if the entry has already been released
and/or the accession number is publicized in Journal etc.

However, DDBJ can suppress the entry in many of its services following
the submitter's request.

Reference;

  - [Overview of International Nucleotide Sequence Databases Policies](/about/insdc-e.html#policy )


## Required items for nucleotide sequence submission  {#item}

### Submitters  {#submitters}

The items, affiliation, postal address and phone number of 
[contact person](#contact ) and all names of 
[submitters](#submitter ) submitters are required.  
Some of those items will be indicated in 
[REFERENCE 1](/ddbj/flat-file-e.html#Reference1 ) 
on the flat files of the entries.  
After 2008, none of E-mail address, phone or fax number of 
the contact person is displayed without disclosing request from submitters.

Notice: Submitter should not be only one person.  
: Submitter of the entry is the person who have responsibility to the submitted data in the entry.  
We accept updating requests only from the original submitter of the entry.  
Basically, we strongly recommend to describe joint submitters more than two persons, 
e.g. at least a true worker and an adviser, to avoid lost communication in future.  
In principle, we cannot accept any sequence data from a student without whose advisers in names of submitter.


### Date of data release to the public  {#hold-date}

Submitters can select the status of their data, either "immediately release" or "hold until published".  
"hold date" is the date to start the distribution of the entry.  
Submitter can specify the date, if necessary  
If you selected "hold until published", it is required to specify the "hold date" of your data.  
Reference: [Principle of "Hold-Until-Published" data release](/documents/data-release-policy-e.html )


### Number of sequences  {#number}

If you would like to have consecutive accession numbers, 
you should fix the number of entries before your submission.

Even if your sequence is identical to previously reported sequence(s), 
on the condition that the sequence is independently determined, 
you can submit it as a "new" entry.  
Basically, DDBJ accepts all sequence data that are independently determined, 
even though sequences are identical each other.  
However, for variation studies, DDBJ also accepts submissions of 
multiple identical sequences with frequency and total sample number.  
DDBJ recommends to normalize research data for variation studies by appropriate set of entries; 
basically, the number of entries should be equal to multiplication of numbers of sequence polymorphisms and sampled populations.  
See also [representative submissions of identical sequences for variation studies](/ddbj/representative-sequence-e.html ), in detail.


### Scientific paper, REFERENCE  {#reference}

You have to describe authors and title of the main paper for the sequence, as a 
[primary citation](#pcite ). Even though you have no plan to submit any paper for you sequence, 
please enter authors and title, formally.

You can describe just referred papers which does not describe about the submitting sequence, if necessary.


### Biological knowledge related to nucleotide sequence  {#bio-inf}

Whether the species is identified or not, it is required to describe the relevant information on the biological origin of your sequence with
[organism name](/ddbj/organism-e.html ) etc.

As annotation for your sequence, 
[feature](/ddbj/features-e.html ) should be described, if at all possible.  
You should describe features such as
[protein coding sequences (CDS)](/ddbj/cds-e.html ),
[rRNA](/ddbj/features-e.html#rRNA ), 
[tRNA](/ddbj/features-e.html#tRNA ),
[ncRNA](/ddbj/features-e.html#ncRNA ) and so on with their
[location](/ddbj/location-e.html ). 
Please also describe qualifiers, such as [product](/ddbj/qualifiers-e.html#product ),
[gene](/ddbj/qualifiers-e.html#gene ) and so on, arbitrarily.

Notice: protein coding sequence; CDS feature should have gene and product.  
: See also the guideline of 
[gene nomenclature at DDBJ](/ddbj/cds-e.html#product ) before your submission.


### Nucleotide sequences  {#sequence}

In general, we accept sequences to share the data enough to believe 'as is' in nature.    
It is incorrect to submit the sequencer output 'as is' without scrutinizing it.    

See [Nucleotide Sequences](/ddbj/sequence-e.html ) in detail.


## Workflow of the data submission to DDBJ  {#workflow}

### 1 Data Submission  {#accept}

#### (A) Nucleotide Sequence Submission System (NSSS) 
DDBJ generally recommends you to use [Nucleotide Sequence Submission System](/ddbj/web-submission-e.html).

#### (B) Mass Submission System (MSS)    

NSSS cannot accept the following sequence data.    
The nucleotide sequence data belonging to <span class="red">either of the following cases</span> should be submitted via [MSS](/ddbj/mss-e.html).    
Please note the points other than number or length of your sequences.  

**a) Either of the following categories or amounts of sequence data**    

- [EST](/ddbj/est-e.html ), [TSA](/ddbj/tsa-e.html ),
  [HTC](/ddbj/htc-e.html ), [GSS](/ddbj/gss-e.html ),
  [HTG](/ddbj/htg-e.html ), [WGS](/ddbj/wgs-e.html ),
  [TLS](/ddbj/tls-e.html )
    - See [Categories for Sequence Data](/documents/data-categories-e.html#division ) in detail.
- Submission with long sequences, greater than 500 kb in its length 
- Complex submission containing many features for one sequence, more than 30 features 
- Submission consists of large number of sequences, greater than 100 in total 

**b) Regardless finished or draft level, sequence data of whole-length scale replicons**    

- (Nuclear) genome
- Organelle genome
- Chromosome
- Virus/Phage genome/segments
- Plasmid

**c) Sequence data to be described BioProject or BioSample in DBLINK**    

When you need to use [DBLINK](/ddbj/flat-file-e.html#DBLINK ) to link BioProject or BioSample, the following cases are included, but not limited to them.    

- Sequence data from metagenome analyses, environmental profilings, and so on 
- Sequence data of targeted genes to be linked each other
- When you are planning to submit or have submitted whole genome scale data obtained from the same samples. 
    - Required to submit prokaryotic 16S rRNA gene for phylogenic report  
    - Advanced paper submission of any other targeted gene(s)/cluster region(s) 


### 2 Annotation  {#annotation}

We annotate in accordance with our rules and the international rules
agreed upon by the DDBJ/ENA/GenBank consortium. In the annotation
process, we may contact the Contact Person to make inquiry about the
data.


### 3 Assignment and Notification of Accession Number  {#accession_number}

We start the curation work and inform the problems until 7 working days after we receive the submission. Accession numbers are notified to the contact person's email address after the problems have been corrected.


### 4 Report of Data Releasing  {#releasing}

We notify data release to the Contact Person by E-mail. 
Once the data are released, please confirm the data by one of the retrieval tools accessible 
from the DDBJ homepage (e.g., [getentry](http://getentry.ddbj.nig.ac.jp/top-e.html)).

If you would like to update your data, please send a request mail from
[Application Form for Data Update Requests](/ddbj/update-form-e.html ) 
with the necessary information. Please refer to
[Updates/Correction](/ddbj/update-e.html ) (after getting your accession number) for details.


### 5 General Information  {#information}

<table>
  <tbody>
    <tr>
      <th>For general inquiry on DDBJ</th>
      <td><a href="/contact-ddbj-e.html#to-ddbj">Contact form</a></td>
    </tr>
    <tr>
      <th>For data submission</th>
      <td><a href="/contact-ddbj-e.html#to-ddbj">Contact form</a></td>
    </tr>
    <tr>
      <th>For updating submitted data</th>
      <td><a href="/ddbj/update-form-e.html">Application Form for Data Update Requests</a></td>
    </tr>            
  </tbody>
</table>


## Sequence Data Transition {#data_flow} 

Following figure shows the dataflow from new submission to release and update at DDBJ.

<img src="{{site.baseurl}}/assets/images/ddbj/workflow.gif" alt="配列データの遷移" title="" class="w400">

<ol>
  <li class="decrement">
    Article Submission<br>
    It is now the usual practice for authors to acquire accession numbers from DDBJ(, ENA, or GenBank) to their sequences when they submit articles to journals.
      <span class="red">* You can submit your sequences to DDBJ, even if you have no plan to publication of article related to the sequences.</span>
    </li>
  <li>
    Nucleotide Sequence Submission<br>
    Basically, DDBJ accepts nucleotide sequence submissions via <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System</a> or <a href="/ddbj/mss-e.html">Mass Submission System</a>. DDBJ issues an accession number for each sequence after processing submitted data.
    </li>
  <li>
    Hold until Publication<br>
    During sequence submission, the submitter can specify that the data can be made available to the public through DDBJ immediately or not. If the submitter wishes to hold the data until publication, submitter has to specify a <a href="#holddate">hold date</a>.
    </li>
  <li>
    Release of Sequence Data<br>
    DDBJ releases the submitted data that specified to be open to the public immediately, as soon as possible after processing. The submitted entry that is specified to hold until publication will be released according to <a href="/documents/data-release-policy-e.html">principle of data release</a>. When the accession number of the hold entry is published, the entry will be released with no exception and no permission from the submitter. Everyone can request DDBJ to release the unpublished data whose accession numbers are on the published papers.
    </li>
  <li>
    Availability of Released Data<br>
    At first, the data released from DDBJ are available via <a href="http://getentry.ddbj.nig.ac.jp/top-e.html">getentry</a> and <a href="https://ddbj.nig.ac.jp/public/">anonymous FTP</a>. The data are forwarded to GenBank and ENA, and the data are available also via GenBank and ENA. The data are also expanded into services provided from DDBJ, Search and Analysis, <a href="http://ddbj.nig.ac.jp/arsa/quick_search?lang=en">ARSA</a> and so on. Basically, the data released from DDBJ are <a href="/about/insdc-e.html#policy"></a>available for everyone.
    </li>
  <li>
    Citation of Released Data<br>
    Released data from DDBJ/ENA/GenBank are cited many biological databases.
  </li>
  <li>
    Feed back for Released Data<br>
    If you have comments or questions for released data, please contact the submitters of each entry. If you can not directly contact the submitters, please contact us through <a href="/contact-ddbj-e.html">the inquiry form</a> with reasons
  </li>
  <li>
    <a href="#right">Only submitters of the entry can update and modify the entry</a>. After data madification, the submitter of the entry can also specify either of immediate release or hold until publication. However, in principle, if the entry have already been open to the public, the entry can not restore hold.
  </li>
</ol>

## Terms {#terms} 

Submitter <a name="submitter"></a>
: Submitter of the [entry](#entry) is the person who have
responsibility to the submitted data in the entry, in principle.  
Only submitter can update his/her entry. Basically, submitter takes
responsibility to reply inquiry from DDBJ or DDBJ users about
his/her data.
In principle, submitter is indicated in the [REFERENCE
1](/ddbj/flat-file-e.html#Reference1) of DDBJ flat file.

Contact person <a name="contact"></a>
: "Contact person" is the person who is responsible about the
descriptions of the [entry](#entry) and has a duty as a
representative to correspond with DDBJ and its users.
  - "Contact person" has to be one of the submitters, in principle.
  - "Contact person" is the person who will make contact with DDBJ
    and its users about the entry, in principle. So, [do not block
    E-mails from DDBJ](/precautions-e.html).
  - In principle, Contact person is indicated in the [REFERENCE
    1](/ddbj/flat-file-e.html#Reference1) of [DDBJ flat
    file](/ddbj/flat-file-e.html).
When you wishes to contact to the submitter(s) of an entry of your
interest, please contact us with [the inquiry
form](/contact-ddbj-e.html#to-submitters) with reasons briefly, then we
will forward your message to the submitter(s).

Accept date <a name="acceptdate"></a>
: "Accept date" is the date that DDBJ gets the original data enough to
assign accession number, in principle.

Hold date  <a name="holddate"></a>
: "Hold date" is the date to start the distribution of the entry.
Submitter can specify the date, if necessary  
Reference: [Principle of "Hold-Until-Published" data
release](/documents/data-release-policy-e.html)

Working day <a name="working-day"></a>
: DDBJ Center takes days off not only every Saturday and Sunday but
also [Japanese national
holidays](//eco.mtk.nao.ac.jp/koyomi/faq/holiday.html.en), year-end
and new year holidays (from December 29th to January 3rd) and summer
holidays of [the Research Organization of Information and
Systems](https://www.rois.ac.jp/en/index.html) (two days in August).
See also DDBJ Calendar.

Flat file <a name="flatfile"></a>
: "Flat file" is the DDBJ format for distribution.  
Reference: [Explanation of DDBJ flat file
Format](/ddbj/flat-file-e.html)]

Entry <a name="entry"></a>
: "Entry" is the unit of the data of DDBJ and INSDC. The database is a
collection of entry.  
Reference: [Explanation of DDBJ flat file
Format](/ddbj/flat-file-e.html)

Primary entry <a name="primary_entry">
: "Primary entry" is publicly available in the DDBJ/ENA/GenBank
databases and the sequence of primary entry has been experimentally
determined by submitter.  
Confer: [TPA (Third Party Data)](/ddbj/tpa-e.html)

Primary citation <a name="pcite"> </a>
: "Primary citation" is the main paper for the sequence of the
entry.  
In principle, primary citation is indicated in the [REFERENCE
2](/ddbj/flat-file-e.html#Reference2) of [DDBJ flat
file](/ddbj/flat-file-e.html).  
Since REFERENCE 2 indicates the publication status of the sequence,
the reference which does not describe about the submitting sequence
is indicated as REFERENCE 3 or after, not as REFERENCE 2.
