---
layout: indexed_content
title: Codes Used in Sequence Description
pathname: code-e
category: ddbj
lang: en
related_pages:
  - title: DDBJ flat file format
    url: /ddbj/flat-file-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: Organism qualifier
    url: /ddbj/organism-e.html
  - title: Description of Location
    url: /ddbj/location-e.html
  - title: Protein Coding Sequence; CDS feature
    url: /ddbj/cds-e.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode-e.html
  - title: Example of Submission
    url: /ddbj/example-e.html
---

## Nucleotide <a name="nucleotide"></a>

### Nucleotide Base Codes <a name="nucleotide-1"></a>

The nucleotide base codes that are used with the International
Nucleotide Sequence Database is as follows.  
Sequence data is expressed with small letters only. Capital letter will
be automatically converted to small letter.

| Symbol | Meaning          | Explanation                   |
| ------ | ---------------- | ----------------------------- |
| a      | a                | adenine                       |
| c      | c                | cytosine                      |
| g      | g                | guanine                       |
| t      | t                | thymine in DNA; uracil in RNA |
| m      | a or c           | amino                         |
| r      | a or g           | purine                        |
| w      | a or t           |                               |
| s      | c or g           |                               |
| y      | c or t           | pyrimidine                    |
| k      | g or t           | keto                          |
| v      | a or c or g      | not t                         |
| h      | a or c or t      | not g                         |
| d      | a or g or t      | not c                         |
| b      | c or g or t      | not a                         |
| n      | a or c or g or t | any                           |


[References]

  - Cornish-Bowden, A. Nucl Acid Res 13, 3021-3030 (1985)
  - [Feature Table Definition](/ddbj/full_index-e.html): [7.4.1
    Nucleotide base codes (IUPAC)](/ddbj/full_index-e.html#7.4.1)

### Modified Base Abbreviations <a name="nucleotide-2"></a>

An example for description of the modified base in FEATURES line.

Example

 <pre><code>
      FEATURES             Location/Qualifiers
           <a href="/ddbj/features-e.html#modified_base">modified_base</a>   15
                           <a href="/ddbj/qualifiers-e.html#mod_base">/mod_base</a>="m2g"
</code></pre>   
<br>

| Abbreviation | Modified base description                                            |
| ------------ | -------------------------------------------------------------------- |
| ac4c         | 4-acetylcytidine                                                     |
| chm5u        | 5-(carboxyhydroxylmethyl)uridine                                     |
| cm           | 2'-O-methylcytidine                                                  |
| cmnm5s2u     | 5-carboxymethylaminomethyl-2-thiouridine                             |
| cmnm5u       | 5-carboxymethylaminomethyluridine                                    |
| dhu          | dihydrouridine                                                       |
| fm           | 2'-O-methylpseudouridine                                             |
| gal q        | beta,D-galactosylqueuosine                                           |
| gm           | 2'-O-methylguanosine                                                 |
| i            | inosine                                                              |
| i6a          | N6-isopentenyladenosine                                              |
| m1a          | 1-methyladenosine                                                    |
| m1f          | 1-methylpseudouridine                                                |
| m1g          | 1-methylguanosine                                                    |
| m1i          | 1-methylinosine                                                      |
| m22g         | 2,2-dimethylguanosine                                                |
| m2a          | 2-methyladenosine                                                    |
| m2g          | 2-methylguanosine                                                    |
| m3c          | 3-methylcytidine                                                     |
| m4c          | N4-methylcytosine                                                    |
| m5c          | 5-methylcytidine                                                     |
| m6a          | N6-methyladenosine                                                   |
| m7g          | 7-methylguanosine                                                    |
| mam5u        | 5-methylaminomethyluridine                                           |
| mam5s2u      | 5-methoxyaminomethyl-2-thiouridine                                   |
| man q        | beta,D-mannosylqueuosine                                             |
| mcm5s2u      | 5-methoxycarbonylmethyl-2-thiouridine                                |
| mcm5u        | 5-methoxycarbonylmethyluridine                                       |
| mo5u         | 5-methoxyuridine                                                     |
| ms2i6a       | 2-methylthio-N6-isopentenyladenosine                                 |
| ms2t6a       | N-((9-beta-D-ribofuranosyl-2-methyltiopurin-6-yl)carbamoyl)threonine |
| mt6a         | N-((9-beta-D-ribofuranosylpurine-6-yl)N-methyl-carbamoyl)threonine   |
| mv           | uridine-5-oxyacetic acid methylester                                 |
| o5u          | uridine-5-oxyacetic acid (v)                                         |
| osyw         | wybutoxosine                                                         |
| p            | pseudouridine                                                        |
| q            | queuosine                                                            |
| s2c          | 2-thiocytidine                                                       |
| s2t          | 5-methyl-2-thiouridine                                               |
| s2u          | 2-thiouridine                                                        |
| s4u          | 4-thiouridine                                                        |
| m5u          | 5-methyluridine                                                      |
| t6a          | N-((9-beta-D-ribofuranosylpurine-6-yl)carbamoyl)threonine            |
| tm           | 2'-O-methyl-5-methyluridine                                          |
| um           | 2'-O-methyluridine                                                   |
| yw           | wybutosine                                                           |
| x            | 3-(3-amino-3-carboxypropyl)uridine, (acp3)u                          |
| OTHER        | Other ([/note](/ddbj/qualifiers-e.html#note) qualifier に修飾塩基を記載します)  |



[References]

  - Sprinzl, M. and Gauss, D.H. Nucl Acid Res 10, r1 (1982).(note that
    in Cornish_Bowden, A. Nucl Acid Res 13, 3021-3030 (1985)the
    IUPAC-IUB declined to recommend a set of abbreviations for modified
    nucleotides)
  - [Feature Table Definition](/ddbj/full_index-e.html): [7.4.2 Modified
    base abbreviations](/ddbj/full_index-e.html#7.4.2)



## Amino Acid <a name="amino"></a>


### Amino Acid Codes <a name="amino-1"></a>

The amino acid code that is used with the International Nucleotide
Sequence Database is as follows.  
These amino acids are described with one letter abbreviation in
[/translation](/ddbj/qualifiers-e.html#translation) qualifier of [CDS
feature](/ddbj/cds-e.html).  
The listed amino acid abbreviations are legal values for qualifiers
[/transl_except](/ddbj/qualifiers-e.html#transl_except) and
[/anticodon](/ddbj/qualifiers-e.html#anticodon).  
Those that are not included in "Amino acid codes", please refer to
[Modified and unusual Amino Acids](#amino-2).


| Abbreviation | 1 letter abbreviation | Amino acid name             |
| ------------ | --------------------- | --------------------------- |
| Ala          | A                     | Alanine                     |
| Arg          | R                     | Arginine                    |
| Asn          | N                     | Asparagine                  |
| Asp          | D                     | Aspartic acid               |
| Cys          | C                     | Cysteine                    |
| Gln          | Q                     | Glutamine                   |
| Glu          | E                     | Glutamic acid               |
| Gly          | G                     | Glycine                     |
| His          | H                     | Histidine                   |
| Ile          | I                     | Isoleucine                  |
| Leu          | L                     | Leucine                     |
| Lys          | K                     | Lysine                      |
| Met          | M                     | Methionine                  |
| Phe          | F                     | Phenylalanine               |
| Pro          | P                     | Proline                     |
| Pyl          | O                     | Pyrrolysine                 |
| Ser          | S                     | Serine                      |
| Sec          | U                     | Selenocysteine              |
| Thr          | T                     | Threonine                   |
| Trp          | W                     | Tryptophan                  |
| Tyr          | Y                     | Tyrosine                    |
| Val          | V                     | Valine                      |
| Asx          | B                     | Aspartic acid or Asparagine |
| Glx          | Z                     | Glutamic acid or Glutamine  |
| Xaa          | X                     | Any amino acid              |
| Xle          | J                     | Leucine or Isoleucine       |
| TERM         |                       | termination codon           |


[References]

  - IUPAC-IUB Joint Commission on Biochemical Nomenclature.Nomenclature
    and Symbolism for Amino Acids and Peptides. Eur. J. Biochem. 138:
    9-37 (1984).
  - [Feature Table Definition](/ddbj/full_index-e.html): [7.4.3 Amino
    acid abbreviations](/ddbj/full_index-e.html#7.4.3)


### Modified and Unusual Amino Acids <a name="amino-2"></a>

For other amino acids, those that are not included in [Amino Acid
Codes](#amino-1), abbreviation listed below is used. All of these amino
acids are described with one letter abbreviation "X" in
[/translation](/ddbj/qualifiers-e.html#translation) qualifier of [CDS
feature](/ddbj/cds-e.html).


| Abbreviation | Amino acid name                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Aad          | 2-Aminoadipic acid                                                                                                 |
| bAad         | 3-Aminoadipic acid                                                                                                 |
| bAla         | beta-Alanine, beta-Aminoproprionic acid                                                                            |
| Abu          | 2-Aminobutyric acid                                                                                                |
| 4Abu         | 4-Aminobutyric acid, piperidinic acid                                                                              |
| Acp          | 6-Aminocaproic acid                                                                                                |
| Ahe          | 2-Aminoheptanoic acid                                                                                              |
| Aib          | 2-Aminoisobutyric acid                                                                                             |
| bAib         | 3-Aminoisobutyric acid                                                                                             |
| Apm          | 2-Aminopimelic acid                                                                                                |
| Dbu          | 2,4-Diaminobutyric acid                                                                                            |
| Des          | Desmosine                                                                                                          |
| Dpm          | 2,2'-Diaminopimelic acid                                                                                           |
| Dpr          | 2,3-Diaminoproprionic acid                                                                                         |
| EtGly        | N-Ethylglycine                                                                                                     |
| EtAsn        | N-Ethylasparagine                                                                                                  |
| Hyl          | Hydroxylysine                                                                                                      |
| aHyl         | allo-Hydroxylysine                                                                                                 |
| 3Hyp         | 3-Hydroxyproline                                                                                                   |
| 4Hyp         | 4-Hydroxyproline                                                                                                   |
| Ide          | Isodesmosine                                                                                                       |
| aIle         | allo-Isoleucine                                                                                                    |
| MeGly        | N-Methylglycine, sarcosine                                                                                         |
| MeIle        | N-Methylisoleucine                                                                                                 |
| MeLys        | 6-N-Methyllysine                                                                                                   |
| MeVal        | N-Methylvaline                                                                                                     |
| Nva          | Norvaline                                                                                                          |
| Nle          | Norleucine                                                                                                         |
| Orn          | Ornithine                                                                                                          |
| OTHER        | Other ( (Amino acid not found in this list should be described in [/note](/ddbj/qualifiers-e.html#note) qualifier) |


[References]

  - [Feature Table Definition](/ddbj/full_index-e.html): [7.4.4 Modified and unusual Amino Acids](/ddbj/full_index-e.html#7.4.4)