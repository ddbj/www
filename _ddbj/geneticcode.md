---
layout: indexed_content
title: The Genetic Codes
pathname: geneticcode
category: ddbj
current_tab: flat_file
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
related_pages:
  - title: Location の記述法
    url: /ddbj/location.html
  - title: タンパク質コード配列; CDS feature について
    url: /ddbj/cds.html
  - title: 登録の見本
    url: /ddbj/example.html
  - title: 配列の記載に用いる略号
    url: /ddbj/code.html
  - title: Organism qualifier に記載する生物名
    url: /ddbj/organism.html
  - title: Feature key
    url: /ddbj/features.html
  - title: Qualifier key
    url: /ddbj/qualifiers.html
  - title: The Genetic Codes
    url: /ddbj/codontable.html
---

## Defiition of /transl\_table qualifier <a name="Defiition_of_/transl_table_qualifier"></a>

``` 
Qualifier       /transl_table=
Definition      definition of genetic code table used if other than universal
                genetic code table. 
Value format    <integer; 1=universal table 1;2=non-universal table 2;...
Example         /transl_table=4
```

## Genetic code table <a name="Genetic_code_table"></a>

Compiled by Andrzej (Anjay) Elzanowski and Jim Ostell  
National Center for Biotechnology Information (NCBI), Bethesda, Maryland, U.S.A.  

The original site; [The Genetic Codes](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=cgencodes) 2020.02.12 version

NCBI takes great care to ensure that the translation for each coding sequence (CDS) present in GenBank records is correct. Central to this effort is careful checking on the taxonomy of each record and assignment of the correct genetic code (shown as a /transl\_table qualifier on the CDS in the flat files) for each organism and record. This page summarizes and references this work.

The synopsis presented below is based primarily on the reviews by [Osawa _et al_.](https://www.ncbi.nlm.nih.gov/pubmed/1579111) (1992) and [Jukes and Osawa](https://www.ncbi.nlm.nih.gov/pubmed/8281749) (1993).  
Listed in square brackets \[\] (under **Systematic Range**) are tentative assignments of a particular code based on sequence homology and/or phylogenetic relationships.

The print-form ASN.1 version of this document, which includes all the genetic codes outlined below, is also available [here](ftp://ftp.ncbi.nih.gov/entrez/misc/data/gc.prt). Detailed information on codon usage can be found at the [Codon Usage
Database](//www.kazusa.or.jp/codon).

GenBank format by historical convention displays mRNA sequences using the DNA alphabet. Thus, for the convenience of people reading GenBank records, the genetic code tables shown here use T instead of U. The initiator codon - whether it is AUG, CTG, TTG or something else, - is by default translated as methionine (Met, M). The possible intiator codons are marked as 'M' in the second ('Starts') row of the translation tables.

Currently, genetic codes can be set independently for nucleus, mitochondria, plastids and hydrogenosomes. The current settings for each of these on the taxonomic tree can be viewed by the four buttons directly underneath the following code list.

The following genetic codes are described here:

  - [1. The Standard Code](#1)
  - [2. The Vertebrate Mitochondrial Code](#2)
  - [3. The Yeast Mitochondrial Code](#3)
  - [4. The Mold, Protozoan, and Coelenterate Mitochondrial Code and the
    Mycoplasma/Spiroplasma Code](#4)
  - [5. The Invertebrate Mitochondrial Code](#5)
  - [6. The Ciliate, Dasycladacean and Hexamita Nuclear Code](#6)
  - [9. The Echinoderm and Flatworm Mitochondrial Code](#9)
  - [10. The Euplotid Nuclear Code](#10)
  - [11. The Bacterial, Archaeal and Plant Plastid Code](#11)
  - [12. The Alternative Yeast Nuclear Code](#12)
  - [13. The Ascidian Mitochondrial Code](#13)
  - [14. The Alternative Flatworm Mitochondrial Code](#14)
  - [16. Chlorophycean Mitochondrial Code](#16)
  - [21. Trematode Mitochondrial Code](#21)
  - [22. Scenedesmus obliquus Mitochondrial Code](#22)
  - [23. Thraustochytrium Mitochondrial Code](#23)
  - [24. Pterobranchia Mitochondrial Code](#24)
  - [25. Candidate Division SR1 and Gracilibacteria Code](#25)
  - [26. Pachysolen tannophilus Nuclear Code](#26)
  - [26. Pachysolen tannophilus Nuclear Code](#26)
  - [27. Karyorelict Nuclear Code](#27)
  - [28. Condylostoma Nuclear Code](#28)
  - [29. Mesodinium Nuclear Code](#29)
  - [30. Peritrich Nuclear Code](#30)
  - [31. Blastocrithidia Nuclear Code](#31)
  - [33. Cephalodiscidae Mitochondrial UAA-Tyr Code](#33)

## 1\. The Standard Code (transl\_table=1)<a name="1"></a>

By default all transl\_table in flatfiles are equal to id 1, and this is **not** shown. When transl\_table is not equal to id 1, it is shown as a qualifier on the CDS feature.

``` 
    AAs  = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ---M------**--*----M---------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#1)

### Initiation Codon:

AUG

### Alternative Initiation Codons:

In rare cases, translation in eukaryotes can be initiated from codons other than AUG. A well documented case (including direct protein sequencing) is the GUG start of a ribosomal P protein of the fungus [_Candida albicans_](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Candida+albicans) ([Abramczyk _et al_.](https://www.ncbi.nlm.nih.gov/pubmed/12961752)) and the GUG initiation in mammalian NAT1 ([Takahashi _et al_. 2005](https://www.ncbi.nlm.nih.gov/pubmed/15718103)). Other examples can be found in the following references: [Peabody 1989](https://www.ncbi.nlm.nih.gov/pubmed/2538469); [Prats _et al_. 1989](https://www.ncbi.nlm.nih.gov/pubmed/2538817); [Hann _et al_. 1992](https://www.ncbi.nlm.nih.gov/pubmed/3277717); [Sugihara _et al_. 1990](https://www.ncbi.nlm.nih.gov/pubmed/2123874). The standard code currently allows initiation from UUG and CUG in addition to AUG.

## 2\. The Vertebrate Mitochondrial Code (transl\_table=2)<a name="2"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNKKSS**VVVVAAAADDEEGGGG
  Starts = ----------**--------------------MMMM----------**---M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#2)

### Differences from the Standard Code:

``` 
        Code 2          Standard
 AGA    Ter  *          Arg  R
 AGG    Ter  *          Arg  R
 AUA    Met  M          Ile  I
 UGA    Trp  W          Ter  *
```

### Alternative Initiation Codons:

**_Bos_**: AUA  
**_Homo_**: AUA, AUU  
**_Mus_**: AUA, AUU, AUC  
**_Coturnix_**,
**_Gallus_**: also GUG ([Desjardins and Morais, 1991](https://www.ncbi.nlm.nih.gov/pubmed/1706782))

### Systematic Range:

Vertebrata

### Comments:

AGA and AGG were thought to have become mitochondrial stop codons early in vertebrate evolution ([Osawa, Ohama, Jukes & Watanabe 1989](https://www.ncbi.nlm.nih.gov/pubmed/2506356)). However, at least in humans it has now been shown that AGA and AGG sequences are not recognized as termination codons. A -1 mitoribosome frameshift occurs at the AGA and AGG codons predicted to terminate the CO1 and ND6 ORFs, and consequently both ORFs terminate in the standard UAG codon ([Temperley _et al_. 2010](https://www.ncbi.nlm.nih.gov/pubmed/20075246)).

Mitochondrial genes in some vertebrate (including humans) have incomplete stop codons ending in U or UA, which become complete termination codons (UAA) upon subsequent polyadenylation ([Hou _et al_. 2006](https://www.ncbi.nlm.nih.gov/pubmed/17205108); [Oh _et al_. 2007](https://www.ncbi.nlm.nih.gov/pubmed/17541835); [Ki _et al_. 2010](https://www.ncbi.nlm.nih.gov/pubmed/19757186); [Temperley R J _et al_ 2010](https://www.ncbi.nlm.nih.gov/pubmed/20211597)).

## 3\. The Yeast Mitochondrial Code (transl\_table=3)<a name="3"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWTTTTPPPPHHQQRRRRIIMMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------**----------------------MM---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#3)

### Differences from the Standard Code:

``` 
        Code 3          Standard
 AUA    Met  M          Ile  I
 CUU    Thr  T          Leu  L
 CUC    Thr  T          Leu  L
 CUA    Thr  T          Leu  L
 CUG    Thr  T          Leu  L
 UGA    Trp  W          Ter  *
```

### Systematic Range:

_Saccharomyces cerevisiae_, _Candida glabrata_, _Hansenula saturnus_, and _Kluyveromyces thermotolerans_ ([Clark-Walker and Weiller, 1994](https://www.ncbi.nlm.nih.gov/pubmed/8083884))

### Comments:

GUG (GTG) is used as a start codon for a few proteins in some Saccharomyces species ([Sulo _et al_. 2017](https://www.ncbi.nlm.nih.gov/pubmed/28992063)). The remaining CGN codons are rare in Saccharomyces cerevisiae and absent in _Candida glabrata_ (= _Torulopsis glabrata_).

The AUA codon is common in the gene var1 coding for the single mitochondrial ribosomal protein, but rare in genes encoding the enzymes.

The coding assignments of the AUA (Met or Ile) and CUU (possibly Leu, not Thr) are uncertain in _Hansenula saturnus_.

The coding assignment of Thr to CUN is uncertain in _Kluyveromyces thermotolerans_ ([Clark-Walker and Weiller, 1994](https://www.ncbi.nlm.nih.gov/pubmed/8083884)).

## 4\. The Mold, Protozoan, and Coelenterate Mitochondrial Code and the Mycoplasma/Spiroplasma Code (transl\_table=4)<a name="4"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = --MM------**-------M------------MMMM---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#4)

### Differences from the Standard Code:

``` 
        Code 4         Standard
 UGA    Trp  W          Ter  *
```

### Alternative Initiation Codons:

**_Trypanosoma_**: UUA, UUG, CUG  
**_Leishmania_**: AUU, AUA  
**_Tertrahymena_**: AUU, AUA, AUG  
**_Paramecium_**: AUU, AUA, AUG, AUC, GUG,
GUA(?)  
([Pritchard _et al_., 1990](https://www.ncbi.nlm.nih.gov/pubmed/2308823))  

### Systematic Range:

**_Bacteria_**: The code is used in　_Entomoplasmatales_　and　_Mycoplasmatales_ ([Bove　_et al_　.1989](https://www.ncbi.nlm.nih.gov/pubmed/7691196)). The situation in the _Acholeplasmatales_ is unclear. Based on a study of ribosomal protein genes, it had been concluded that UGA does not code for tryptophan in plant-pathogenic mycoplasma-like organisms (MLO) and the _Acholeplasmataceae_ ([Lim and Sears, 1992](https://www.ncbi.nlm.nih.gov/pubmed/1556079)) and there seems to be only a single tRNA-CCA for tryptophan in _Acholeplasma laidlawii_ ([Tanaka _et al_. 1989](https://www.ncbi.nlm.nih.gov/pubmed/2762159)). In contrast, in a study of codon usage in _Phytoplasmas_, it was found that 30 out of 78 ORFs analyzed translated better with code 4 (UGA for tryptophan) than with code 11 while the remainder showed no differences between the two codes ([Melamed _et al_. 2003](https://www.ncbi.nlm.nih.gov/pubmed/14594823)). In addition, the coding reassignment of UGA Stop --\> Trp can be found in an alpha-proteobacterial symbiont of cicadas: _Candidatus Hodgkinia cicadicola_ ([McCutcheon _et al_. 2009](https://www.ncbi.nlm.nih.gov/pubmed/19609354)).

**_Fungi_**: _Emericella nidulans_, _Neurospora crassa_, _Podospora anserina_, _Acremonium_ ([Fox, 1987](https://www.ncbi.nlm.nih.gov/pubmed/3327473)), _Candida parapsilosis_ ([Guelin _et al_., 1991](https://www.ncbi.nlm.nih.gov/pubmed/1826652)), _Trichophyton rubrum_ ([de Bievre and Dujon, 1992](https://www.ncbi.nlm.nih.gov/pubmed/1326416)), _Dekkera/Brettanomyces, Eeniella_ ([Hoeben _et al_., 1993](https://www.ncbi.nlm.nih.gov/pubmed/8387113)), and probably _Ascobolus immersus_,_Aspergillus amstelodami_,_Claviceps purpurea_, and_Cochliobolus heterostrophus_. **Other Eukaryotes** :_Gigartinales_ among the red algae ([Boyen _et al_ . 1994](https://www.ncbi.nlm.nih.gov/pubmed/8190631)), and the protozoa_Trypanosoma brucei_,_Leishmania tarentolae_,_Paramecium tetraurelia_,_Tetrahymena pyriformis_ and probably_Plasmodium gallinaceum_ ([Aldritt _et al_ ., 1989](https://www.ncbi.nlm.nih.gov/pubmed/2779560)).

**Metazoa**: _Coelenterata_ (Ctenophora and Cnidaria)

### Comments:

This code is also used for the kinetoplast DNA (maxicircles, minicircles).   Kinetoplasts are modified mitochondria (or their parts).

## 5\. The Invertebrate Mitochondrial Code (transl\_table=5)<a name="5"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNKKSSSSVVVVAAAADDEEGGGG
  Starts = ---M------**--------------------MMMM---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#5)

### Comment:

The codon AGG is absent in _Drosophila_.

### Differences from the Standard Code:

``` 
        Code 5          Standard
 AGA    Ser  S          Arg  R
 AGG    Ser  S          Arg  R
 AUA    Met  M          Ile  I
 UGA    Trp  W          Ter  *
```

### Alternative Initiation Codons:

AUA, AUU  
AUC: _Apis_ ([Crozier and Crozier, 1993](https://www.ncbi.nlm.nih.gov/pubmed/8417993))  
GUG: _Polyplacophora_ ([Boore and Brown, 1994](https://www.ncbi.nlm.nih.gov/pubmed/7828825) Accession Number: [U09810](http://getentry.ddbj.nig.ac.jp/getentry/na/U09810/?filetype=html))  
UUG: _Ascaris_, _Caenorhabditis_  

### Systematic Range:

**_Nematoda_**:_Ascaris_, _Caenorhabditis_;  
**_Mollusca_**: _Bivalvia_ ([Hoffmann _et al_., 1992](https://www.ncbi.nlm.nih.gov/pubmed/1386586));
_Polyplacophora_ ([Boore and Brown, 1994](https://www.ncbi.nlm.nih.gov/pubmed/7828825))  
**_Arthropoda/Crustacea_**: _Artemia_ ([Batuecas _et al_., 1988](https://www.ncbi.nlm.nih.gov/pubmed/3135541));  
**_Arthropoda/Insecta_**: _Drosophila_ [_Locusta migratoria_ (migratory locust), _Apis mellifera_ (honeybee)\]  

### Comments:

Several arthropods translate the codon AGG as lysine instead of serine (as in the invertebrate mitochondrial genetic code) or arginine (as in the standard genetic code) ([Abascal _et al_., 2006](https://www.ncbi.nlm.nih.gov/pubmed/16620150)).

GUG may possibly function as an initiator in _Drosophila_ ([Clary and Wolstenholme, 1985](https://www.ncbi.nlm.nih.gov/pubmed/6314262); [Gadaleta _et al_., 1988](https://www.ncbi.nlm.nih.gov/pubmed/3399396)). AUU is not used as an initiator in _Mytilus_ ([Hoffmann _et al_., 1992](https://www.ncbi.nlm.nih.gov/pubmed/1386586)).

"An exceptional mechanism must operate for initiation of translation of the cytochrome oxidase subunit I mRNA in both _D. melanogaster_ ([de Bruijn, 1983](https://www.ncbi.nlm.nih.gov/pubmed/6408489)) and D. yakuba ([Clary and Wolstenholme 1983](https://www.ncbi.nlm.nih.gov/pubmed/6314262)), since its only plausible initiation codon, AUA, is out of frame with the rest
of the gene. Initiation appears to require the "reading" of of an AUAA quadruplet, which would be equivalent to initiation at AUA followed immediately by a specific ribosomal frameshift. Another possible mechanism ... is that the mRNA is "edited" to bring the AUA initiation into frame." ([Fox, 1987](https://www.ncbi.nlm.nih.gov/pubmed/3327473))

## 6\. The Ciliate, Dasycladacean and Hexamita Nuclear Code (transl\_table=6)<a name="6"></a>

``` 
    AAs  = FFLLSSSSYYQQCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = --------------*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#6)

### Differences from the Standard Code:

``` 
          Code 6       Standard
 UAA      Gln  Q        Ter  *
 UAG      Gln  Q        Ter  *
```

### Systematic Range:

**_Ciliata_**: _Oxytricha_ and _Stylonychia_ ([Hoffman _et al_. 1995](https://www.ncbi.nlm.nih.gov/pubmed/7753617)), _Paramecium_, _Tetrahymena_, Oxytrichidae and probably _Glaucoma chattoni_.   **_Dasycladaceae_**: _Acetabularia_ ([Schneider _et al_., 1989](https://www.ncbi.nlm.nih.gov/pubmed/2573818)) and **_Batophora_** ([Schneider and de Groot, 1991](https://www.ncbi.nlm.nih.gov/pubmed/1934113)).   **_Diplomonadida_**:   
Scope: _Hexamita inflata_, _Diplomonadida_ ATCC50330, and ATCC50380.   Ref.: [Keeling, P.J. and Doolittle, W.F. 1996.](https://www.ncbi.nlm.nih.gov/pubmed/8641293) A non-canonical genetic code in an early diverging eukaryotic lineage. The EMBO Journal 15, 2285-2290.

### Comment:

The ciliate macronuclear code has not been determined completely. The codon UAA is known to code for Gln only in the _Oxytrichidae_.

## 9\. The Echinoderm and Flatworm Mitochondrial Code (transl\_table=9)<a name="9"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNNKSSSSVVVVAAAADDEEGGGG
  Starts = ----------**-----------------------M---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#9)

### Differences from the Standard Code:

``` 
          Code 9        Standard
 AAA      Asn  N        Lys K
 AGA      Ser  S        Arg R
 AGG      Ser  S        Arg R
 UGA      Trp  W        Ter *
```

### Systematic Range:

**_Asterozoa_** (starfishes) ([Himeno _et al_., 1987](https://www.ncbi.nlm.nih.gov/pubmed/3678836))   **_Echinozoa_** (sea urchins) ([Jacobs _et al_., 1988](https://www.ncbi.nlm.nih.gov/pubmed/3172215); [Cantatore _et al_., 1989](https://www.ncbi.nlm.nih.gov/pubmed/2544576))   **_Rhabditophora_** among the _Platyhelminthes_ ([Telford _et al_. 2000](https://www.ncbi.nlm.nih.gov/pubmed/11027335))

## 10\. The Euplotid Nuclear Code (transl\_table=10)<a name="10"></a>

``` 
    AAs  = FFLLSSSSYY**CCCWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------**-----------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#10)

### Differences from the Standard Code:

``` 
          Code 10     Standard
 UGA      Cys  C        Ter  *
```

### Systematic Range:

**_Ciliata_**: _Euplotidae_ ([Hoffman _et al_. 1995](https://www.ncbi.nlm.nih.gov/pubmed/7753617)).

## 11\. The Bacterial, Archaeal and Plant Plastid Code (transl\_table=11)<a name="11"></a>

``` 
    AAs  = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ---M------**--*----M------------MMMM---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#11)

### Systematic Range and Comments:

Table 11 is used for _Bacteria_, _Archaea_, prokaryotic viruses and chloroplast proteins. As in the standard code, initiation is most efficient at AUG. In addition, GUG and UUG starts are documented in _Archaea_ and _Bacteria_ ([Kozak 1983](https://www.ncbi.nlm.nih.gov/pubmed/6343825), [Fotheringham _et al_. 1986](https://www.ncbi.nlm.nih.gov/pubmed/3521591), [Golderer _et al_. 1995](https://www.ncbi.nlm.nih.gov/pubmed/7592355), [Nolling _et al_. 1995](https://www.ncbi.nlm.nih.gov/pubmed/7730278), [Sazuka & Ohara 1996](https://www.ncbi.nlm.nih.gov/pubmed/8946162), [Genser _et al_. 1998](https://www.ncbi.nlm.nih.gov/pubmed/9821671), [Wang _et al_. 2003](https://www.ncbi.nlm.nih.gov/pubmed/14633098)). In _E. coli_, UUG is estimated to serve as initiator for about 3% of the bacterium's proteins ([Blattner _et al_. 1997](https://www.ncbi.nlm.nih.gov/pubmed/9278503)). CUG is known to function as an initiator for one plasmid-encoded protein (RepA) in _Escherichia coli_ ([Spiers and Bergquist, 1992](https://www.ncbi.nlm.nih.gov/pubmed/1447126)). In addition to the NUG initiations, in rare cases _Bacteria_ can initiate translation from an AUU codon as e.g. in the case of poly(A) polymerase PcnB and the InfC gene that codes for translation initiation factor IF3 ([Polard _et al_. 1991](https://www.ncbi.nlm.nih.gov/pubmed/1660923), [Liveris _et al_. 1993](https://www.ncbi.nlm.nih.gov/pubmed/8405963), [Sazuka & Ohara 1996](https://www.ncbi.nlm.nih.gov/pubmed/8946162), [Binns & Masters 2002](https://www.ncbi.nlm.nih.gov/pubmed/12068810)). The internal assignments are the same as in the standard code though UGA codes at low efficiency for Trp in _Bacillus subtilis_ and, presumably, in _Escherichia coli_ ([Hatfiled and Diamond, 1993](https://www.ncbi.nlm.nih.gov/pubmed/8488562)).

## 12\. The Alternative Yeast Nuclear Code (transl\_table=12)<a name="12"></a>

``` 
    AAs  = FFLLSSSSYY**CC*WLLLSPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------**--*----M---------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#12)

### Differences from the Standard Code:

``` 
           Code 12      Standard
 CUG       Ser          Leu
```

### Alternative Initiation Codons:

CAG may be used in _Candida albicans_ ([Santos _et al_., 1993](https://www.ncbi.nlm.nih.gov/pubmed/8440250)).

### Systematic Range:

**_Endomycetales_** (yeasts): _Candida albicans_, _Candida cylindracea_, _Candida melibiosica_, _Candida parapsilosis_, and _Candida rugosa_ ([Ohama _et al_., 1993](https://www.ncbi.nlm.nih.gov/pubmed/8371978)).

### Comment:

However, other yeast, including _Saccharomyces cerevisiae_, _Candida azyma_, _Candida diversa_, _Candida magnoliae_, _Candida rugopelliculosa_, _Yarrowia lipolytica_, and _Zygoascus hellenicus_, definitely use the standard (nuclear) code ([Ohama _et al_., 1993](https://www.ncbi.nlm.nih.gov/pubmed/8371978)).

## 13\. The Ascidian Mitochondrial Code (transl\_table=13)<a name="13"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNKKSSGGVVVVAAAADDEEGGGG
  Starts = ---M------**----------------------MM---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#13)

### Differences from the Standard Code:

``` 
          Code 13     Standard
 AGA      Gly  G        Arg  R
 AGG      Gly  G        Arg  R
 AUA      Met  M        Ile  I
 UGA      Trp  W        Ter  *
```

### Systematic range and Comments:

There is evidence from a phylogenetically diverse sample of tunicates (_Urochordata_) that AGA and AGG code for glycine. In other organisms, AGA/AGG code for either arginine or serine and in vertebrate mitochondria they code a STOP. Evidence for glycine translation of AGA/AGG has been found in _Pyura stolonifera_ ([Durrheim _et al_. 1993](https://www.ncbi.nlm.nih.gov/pubmed/8393993)), _Halocynthia roretzi_ ([Kondow _et al_. 1999](https://www.ncbi.nlm.nih.gov/pubmed/10352185),[Yokobori _et al_., 1993](https://www.ncbi.nlm.nih.gov/pubmed/8381878), [Yokobori _et al_. 1999](https://www.ncbi.nlm.nih.gov/pubmed/10581290)) and _Ciona savignyi_ ([Yokobori _et al_. 2003](https://www.ncbi.nlm.nih.gov/pubmed/14738316)). In addition, the _Halocynthia roretzi_ mitochondrial genome encodes an additional tRNA gene with the anticodon U\*CU that is thought to enable the use of AGA or AGG codons for glycine and the gene has been shown to be transcribed in vivo ([Kondow _et al_. 1999](https://www.ncbi.nlm.nih.gov/pubmed/10352185), [Yokobori _et al_. 1999](https://www.ncbi.nlm.nih.gov/pubmed/10581290)).

### Alternative initiation codons:

ATA, GTG and TTG ([Yokobori _et al_. 1999](https://www.ncbi.nlm.nih.gov/pubmed/10581290)). ATT is the start codon for the CytB gene in _Halocynthia roretzi_ ([Gissi and Pesole, 2003](https://www.ncbi.nlm.nih.gov/pubmed/12915488)).

## 14\. The Alternative Flatworm Mitochondrial Code (transl\_table=14)<a name="14"></a>

``` 
    AAs  = FFLLSSSSYYY*CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNNKSSSSVVVVAAAADDEEGGGG
  Starts = -----------*-----------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#14)

### Differences from the Standard Code:

``` 
          Code 14      Standard
 AAA      Asn  N       Lys  K
 AGA      Ser  S       Arg  R
 AGG      Ser  S       Arg  R
 UAA      Tyr  Y       Ter  *
 UGA      Trp  W       Ter  *
```

### Systematic Range:

**_Platyhelminthes_ (flatworms)** and **_Nematoda_ (roundworms)**

### Comments:

Code 14 differs from code 9 only by translating UAA to Tyr rather than STOP. A recent study ([Telford _et al_. 2000](https://www.ncbi.nlm.nih.gov/pubmed/11027335)) has found no evidence that the codon UAA codes for Tyr in the flatworms but other opinions exist. There are very few GenBank records that are translated with code 14 but a test translation shows that retranslating these records with code 9 can cause premature terminations. More recently, UAA has been found to code for tyrosine in the nematodes _Radopholus similis_ and _Radopholus arabocoffeae_ ([Jacob _et al_. 2009](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2761399/)).

## 16\. Chlorophycean Mitochondrial Code (transl\_table=16)<a name="16"></a>

``` 
    AAs  = FFLLSSSSYY*LCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------*---*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#16)

### Differences from the Standard Code:

``` 
          Code 16       Standard
TAG       Leu  L        STOP
```

### Systematic Range:

**_Chlorophyceae_** ([Hayashi-Ishimaru _et al_. 1996](https://www.ncbi.nlm.nih.gov/pubmed/8662206). UAG is a sense codon in several chlorophycean mitochondria) and the chytridiomycete fungus **_Spizellomyces punctatus_** ([Laforest _et al_. 1997](https://www.ncbi.nlm.nih.gov/pubmed/9016605). Mitochondrial tRNAs in the lower fungus _Spizellomyces punctatus_: tRNA editing and UAG 'stop' codons recognized as leucine).

## 21\. Trematode Mitochondrial Code (transl\_table=21)<a name="21"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNNKSSSSVVVVAAAADDEEGGGG
  Starts = ----------**-----------------------M---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#21)

### Differences from the Standard Code:

``` 
          Code 21       Standard
TGA       Trp  W        STOP
ATA       Met  M        Ile
AGA       Ser  S        Arg
AGG       Ser  S        Arg
AAA       Asn  N        Lys 
```

### Systematic Range:

**_Trematoda_**: [Ohama, T, S. Osawa, K. Watanabe, T.H. Jukes, 1990. J. Molec Evol. 30](https://www.ncbi.nlm.nih.gov/pubmed/2111847)   [Garey, J.R. and D.R. Wolstenholme, 1989. J. Molec. Evol. 28: 374-387 329-332.](https://www.ncbi.nlm.nih.gov/pubmed/2545889)

## 22\. Scenedesmus obliquus Mitochondrial Code (transl\_table=22)<a name="22"></a>

``` 
    AAs  = FFLLSS*SYY*LCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ------*---*---*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#22)

### Differences from the Standard Code:

``` 
          Code 22       Standard
TCA       STOP *        Ser
TAG       Leu  L        STOP
```

### Systematic Range:

**_Scenedesmus obliquus_**: [Nedelcu A, Lee RW, Lemieux C, Gray MW and Burger G. "The complete mitochondrial DNA sequence of _Scenedesmus obliquus_ reflects an intermediate stage in the evolution of the green algal mitochondrial genome."](https://www.ncbi.nlm.nih.gov/pubmed/10854413) Genome Res. 2000 Jun;10(6):819-31.

## 23\. Thraustochytrium Mitochondrial Code (transl\_table=23)<a name="23"></a>

``` 
    AAs  = FF*LSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = --*-------**--*-----------------M--M---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#23)

This code has been created for the mitochondrial genome of the labyrinthulid _Thraustochytrium aureum_ sequenced by the The Organelle Genome Megasequencing Program ([OGMP](http://megasun.bch.umontreal.ca/ogmpproj.html)).

It is the similar to the bacterial code ([trans\_table 11](#11)) but it contains an additional stop codon (TTA) and also has a different set of start codons.

## 24\. Pterobranchia Mitochondrial Code (transl\_table=24)<a name="24"></a>

``` 
    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSSKVVVVAAAADDEEGGGG
  Starts = ---M------**-------M---------------M---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#24)

### Differences from the Standard Code:

``` 
          Code 24        Standard
AGA       Ser S          Arg  R
AGG       Lys K          Arg  R
UGA       Trp W          STOP *
```

Code 24 has been created for the mitochondrial genome of _Rhabdopleura compacta_ _(Pterobranchia)_. The _Pterobranchia_ are one of the two groups in the _Hemichordata_ which together with the _Echinodermata_ and _Chordata_ form the three major lineages of deuterostomes. AUA translates to isoleucine in _Rhabdopleura_ as it does in the _Echinodermata_ and _Enteropneusta_ while AUA encodes methionine in the _Chordata_. The assignment of AGG to Lys is not found elsewhere in deuterostome mitochondria but it occurs in some taxa of _Arthropoda_ ([Perseke _et al_. 2011](https://www.ncbi.nlm.nih.gov/pubmed/21599892)). Code 24 shares with many other mitochondrial codes the reassignment of the UGA STOP to Trp, and AGG and AGA to an amino acid other than Arg. The initiation codons in _Rhabdopleura compacta_ are ATG and GTG ([Perseke _et al_. 2011](https://www.ncbi.nlm.nih.gov/pubmed/21599892)).

## 25\. Candidate Division SR1 and Gracilibacteria Code (transl\_table=25)<a name="25"></a>

``` 
    AAs  = FFLLSSSSYY**CCGWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ---M------**-----------------------M---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#25)

### Differences from the Standard Code:

``` 
          Code 25        Standard
UGA       Gly            STOP *
```

### Initiation Codons:

AUG, GUG, UUG

### Systematic Range:

**Candidate Division SR1**, **_Gracilibacteria_**

### Comments:

Code 25 is used in two groups of (so far) uncultivated _Bacteria_ found in marine and fresh-water environment and in the intestines and oral cavities of mammals among others. The difference to the standard and the bacterial code is that UGA represents an additional glycine codon and does not code for termination ([Campbell _et al_. 2013](https://www.ncbi.nlm.nih.gov/pubmed/23509275)).

## 26\. Pachysolen tannophilus Nuclear Code (transl\_table=26)<a name="26"></a>

``` 
    AAs  = FFLLSSSSYY**CC*WLLLAPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------**--*----M---------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#26)

### Differences from the Standard Code:

``` 
          Code 26        Standard
CUG       Ala            Leu
```

### Initiation Codons:

AUG, GUG, UUG

### Systematic Range:

**_Pachysolen tannophilus_**

### Comments:

Code 26 is used so far only for the ascomycete fungus _Pachysolen tannophilus_. The only difference to the standard code is the translation of CUG as alanine (as opposed to leucine). ([Muhlhausen _et al_. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27197221)).

## 27\. Karyorelict Nuclear Code (transl\_table=27)<a name="27"></a>

``` 
    AAs  = FFLLSSSSYYQQCCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = --------------*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#27)

### Differences from the Standard Code:

``` 
          Code 27        Standard
UAG       Gln              STOP
UAA       Gln              STOP
UGA       STOP or Trp      STOP
```

### Initiation Codons:

AUG

### Systematic Range:

**the karyorelictid ciliate Parduczia**

### Comments:

Code 27 reassigns the UAG and UAA stops to glutamine while UGA can function as either STOP or tryptophan. Code 27 is used for the karyorelictid ciliate Parduczia sp. ([Swart et al. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27426948)).

## 28\. Condylostoma Nuclear Code (transl\_table=28)<a name="28"></a>

``` sample
    AAs  = FFLLSSSSYYQQCCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------**--*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#28)

### Differences from the Standard Code:

``` 
          Code 28          Standard
UAA      Gln or STOP        STOP
UAG      Gln or STOP        STOP
UGA      Trp or STOP        STOP
```

### Initiation Codons:

AUG

### Systematic Range:

**_Condylostoma magnum_**

### Comments:

Code 28 is used in Condylostoma magnum. The difference to the standard code is that the three stop codons can also be translated as glutamine (UAA, UAG) or tryptophan (UGA), respectively([Swart et al. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27426948), [Heaphy et al. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27501944)).

## 29\. Mesodinium Nuclear Code (transl\_table=29)<a name="29"></a>

``` 
    AAs  = FFLLSSSSYYYYCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = --------------*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#29)

### Differences from the Standard Code:

``` 
          Code 29        Standard
UAA       Tyr            STOP
UAG       Tyr            STOP
```

### Initiation Codons:

AUG

### Systematic Range:

**the mesodiniid ciliates Mesodinium and Myrionecta**

### Comments:

Code 29 is used for the haptorid ciliates Mesodinium and Myrionecta. It differs from the standard code in reassigning the stop codons UAA and UAG to Tyrosine. ([Heaphy et al. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27501944)).

## 30\. Peritrich Nuclear Code (transl\_table=30)<a name="30"></a>

``` 
    AAs  = FFLLSSSSYYEECC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = --------------*--------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#30)

### Differences from the Standard Code:

``` sample
          Code 30        Standard
UAA       Glu            STOP
UAG       Glu            STOP
```

### Initiation Codons:

AUG

### Systematic Range:

**the peritrich ciliate Carchesium**

### Comments:

Code 30 is used in the peritrich ciliate Carchesium. The stop codons UAA and UAG are reassigned to Glutamine. ([Sanchez-Silva et al. 2003](https://www.ncbi.nlm.nih.gov/pubmed/12620196)).

## 31\. Blastocrithidia Nuclear Code (transl\_table=31)<a name="31"></a>

``` 
    AAs  = FFLLSSSSYYEECCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Starts = ----------**-----------------------M----------------------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#31)

### Differences from the Standard Code:

``` 
          Code 31          Standard
UGA        Trp             STOP
UAG        Glu or STOP     STOP
UAA        Glu or STOP     STOP
```

### Initiation Codons:

AUG

### Systematic Range:

**_Blastocrithidia_ sp.**

### Comments:

Code 31 is used for the trypanosome Blastocrithidia sp. UGA encodes trytophan and UAG and UAA encode glutamate and also serve as termination codons. ([Zahonova et al. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27593378)).

## 33\. Cephalodiscidae Mitochondrial UAA-Tyr Code (transl\_table=33)<a name="33"></a>

``` 
    AAs  = FFLLSSSSYYY*CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSSKVVVVAAAADDEEGGGG
  Starts = ---M-------*-------M---------------M---------------M------------
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
```

[Click here to change format](/ddbj/codontable.html#33)

### Differences from the Standard Code:

``` 
     Code 33     Standard
UAA  Tyr         STOP
UGA  Trp         STOP
AGA  Ser         Arg
AGG  Lys         Arg
```

### Systematic Range:

**_Cephalodiscidae_ (_Hemichordata_)**

### Comments:

Code 33 is very similar to the mitochondrial code 24 for the _Pterobranchia_, which also belong to the _Hemichordata_, except that it uses UAA for tyrosine rather than as a stop codon ([Li Y, Kocot KM, Tassia MG, Cannon JT, Bernt M, Halanych KM. Mitogenomics Reveals a Novel Genetic Code in Hemichordata. Genome Biol Evol. 2019 Jan 1;11(1):29-40.](https://www.ncbi.nlm.nih.gov/pubmed/30476024))
