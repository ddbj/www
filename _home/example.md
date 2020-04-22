---
layout: indexed_content
title: 登録の見本
pathname: example
category: _home
---

# 登録の見本

<div class="section book">

登録の例としてご利用下さい。

<div class="section chapter">

## A: Ribosomal RNA, ITS, IGS

<div class="section section">

### A01) 16S rRNA gene

``` code flat-file
DEFINITION  Vibrio halioticoli IAM 14597 gene for 16S rRNA, partial sequence.
FEATURES             Location/Qualifiers
     source          1..1471
                     /mol_type="genomic DNA"
                     /organism="Vibrio halioticoli"
                     /strain="IAM 14597" 
     rRNA            <1..>1471
                     /product="16S ribosomal RNA" 
```

</div>

<div class="section section">

### A02) 18S rRNA gene including intron

``` code flat-file
DEFINITION  Sporobolomyces ruber JCM 6884 gene for 18S rRNA, partial sequence. 
FEATURES             Location/Qualifiers
     source          1..2072
                     /mol_type="genomic DNA"
                     /organism="Sporobolomyces ruber"
                     /strain="JCM 6884" 
     rRNA            join(<1..1144,1469..>2072)
                     /product="18S ribosomal RNA" 
     intron          1145..1468
```

</div>

<div class="section section">

### A03) ITS1, ITS2

``` code flat-file
DEFINITION  Microsphaera trifolii var. trifolii MUMH29s genes for 18S rRNA, 
            ITS1, 5.8S rRNA, ITS2, 28S rRNA, partial and complete sequence.
FEATURES             Location/Qualifiers
     source          1..597
                     /isolate="MUMH29s"
                     /mol_type="genomic DNA"
                     /organism="Microsphaera trifolii var. trifolii"
                     /host="Trifolium vulgaris"
                     /tissue_type="conidia"
                     /variety="trifolii" 
     rRNA            <1..4
                     /product="18S ribosomal RNA" 
     misc_RNA        5..224
                     /note="internal transcribed spacer 1" 
     rRNA            225..378
                     /product="5.8S ribosomal RNA" 
     misc_RNA        379..562
                     /note="internal transcribed spacer 2" 
     rRNA            563..>597
                     /product="28S ribosomal RNA" 
```

各 rRNA、ITS の境界が不明な場合は、以下の annotation を記載します。

``` code flat-file
FEATURES             Location/Qualifiers
     source          1..597
                     /isolate="MUMH29s"
                     /mol_type="genomic DNA"
                     /organism="Microsphaera trifolii var. trifo lii"
                     /host="Trifolium vulgaris"
                     /tissue_type="conidia"
                     /variety="trifolii" 
     misc_RNA        <1..>597
                     /note="contains 18S ribosomal RNA, internal transcribed
                     spacer 1, 5.8S ribosomal RNA, internal transcribed spacer
                     2, and 28S ribosomal RNA"
```

</div>

<div class="section section">

### A04) intergenic spacer, IGS

``` code flat-file
DEFINITION  Setaria italica cv. Shimokatsugi genes for 25S rRNA, IGS, 17S rRNA, 
            partial and complete sequence.
FEATURES             Location/Qualifiers
     source          1..2646
                     /clone="pSIR012"
                     /country="Japan"
                     /cultivar="Shimokatsugi"
                     /mol_type="genomic DNA"
                     /organism="Setaria italica" 
     rRNA            <1..493
                     /product="25S ribosomal RNA" 
     misc_feature    494..2484
                     /note="intergenic spacer, IGS" 
     rRNA            2485..>2646
                     /product="17S ribosomal RNA" 
```

</div>

</div>

　

<div class="section chapter">

## B: Protein-coding genes

<div class="section section">

### B01) CDS (mRNA)

``` code flat-file
DEFINITION  Homo sapiens AQP9 mRNA for aquaporin 9, complete cds. 
FEATURES             Location/Qualifiers
     source          1..2878
                     /mol_type="mRNA"
                     /organism="Homo sapiens"
                     /tissue_type="liver" 
     CDS             217..1104
                     /codon_start=1
                     /gene="AQP9"
                     /product="aquaporin 9"
                     /translation="--- omitted ---"
                     /transl_table=1 
```

</div>

<div class="section section">

### B02) CDS (DNA)

``` code flat-file
DEFINITION  Aspergillus oryzae RIB128 tglA gene for triacylglycerol lipase, 
            complete cds.
FEATURES             Location/Qualifiers
     source          1..1025
                     /mol_type="genomic DNA"
                     /organism="Aspergillus oryzae"
                     /strain="RIB128" 
     CDS             join(34..330,378..523,607..764,827..990)
                     /codon_start=1
                     /gene="tglA"
                     /product="triacylglycerol lipase"
                     /transl_table=1
                     /translation="--- omitted ---" 
```

</div>

<div class="section section">

### B03) premature mRNA

``` code flat-file
DEFINITION  Cynops pyrrhogaster CpTbx3 premature mRNA, partial cds.
FEATURES             Location/Qualifiers
     source          1..5170
                     /dev_stage="gastrula"
                     /mol_type="transcribed RNA"
                     /organism="Cynops pyrrhogaster"
                     /tissue_type="embryo" 
     intron          <1..359
     CDS             <360..2135
                     /codon_start=1
                     /gene="CpTbx3"
                     /note="T-box family member; T-box domain"
                     /transl_table=1
                     /translation="--- omitted ---" 
```

</div>

<div class="section section">

### B04) promoter region

``` code flat-file
DEFINITION  Mus musculus 129SVJ mNB-3 gene for neural recognition molecule NB-3,
            exon 1 and promoter region.
FEATURES             Location/Qualifiers
     source          1..1300
                     /dev_stage="4-8 weeks old"
                     /mol_type="genomic DNA"
                     /organism="Mus musculus"
                     /sex="female"
                     /strain="129SVJ" 
     regulatory      <1..1197
                     /regulatory_class="promoter"
     exon            1198..>1300
                     /gene="mNB-3"
                     /note="neural recognition molecule NB-3"
                     /number=1
```

</div>

<div class="section section">

### B05) 5' flanking region

``` code flat-file
DEFINITION  Mus musculus 129SV gene for membrane cofactor protein CD46, 5' 
            flanking region.
FEATURES             Location/Qualifiers
     source          1..1614
                     /mol_type="genomic DNA"
                     /organism="Mus musculus"
                     /strain="129SV" 
     misc_feature    1..1614
                     /note="5' flanking region"
                     /product="membrane cofactor protein CD46" 
```

</div>

<div class="section section">

### B06) pseudogene

``` code flat-file
DEFINITION  Homo sapiens pseudogene, necdin. 
FEATURES             Location/Qualifiers
     source          1..2285
                     /mol_type="genomic DNA"
                     /organism="Homo sapiens" 
     CDS             <1..1319
                     /note="pseudogene of necdin"
                     /pseudogene="processed" 
```

</div>

<div class="section section">

### B07) alternative splicing (mRNA)

``` code flat-file
[isoform 1]
DEFINITION  Homo sapiens BAP2 mRNA for BAI-associated protein 2 alpha, 
            complete cds. 
ACCESSION   XA000001 
FEATURES             Location/Qualifiers
     source          1..3168
                     /mol_type="mRNA"
                     /organism="Homo sapiens" 
     CDS             94..1659
                     /codon_start=1
                     /gene="BAP2"
                     /note="alternative splicing: see also Acc# XA000002.1"
                     /product="BAI-associated protein 2 alpha"
                     /transl_table=1
                     /translation="--- omitted ---" 

[isoform 2]
DEFINITION  Homo sapiens BAP2 mRNA for BAI-associated protein 2 beta, 
            complete cds. 
ACCESSION   XA000002 
FEATURES             Location/Qualifiers
     source          1..2129
                     /mol_type="mRNA"
                     /organism="Homo sapiens" 
     CDS             94..1659
                     /codon_start=1
                     /gene="BAP2"
                     /note="alternative splicing: see also Acc# XA000001.1"
                     /product="BAI-associated protein 2 beta"
                     /transl_table=1
                     /translation="--- omitted ---" 
```

</div>

<div class="section section">

### B08) alternative splicing (DNA)

``` code flat-file
DEFINITION  Homo sapiens KNP-I gene for KNP-I alpha protein, KNP-I beta
            protein, partial cds, alternative splicing. 
FEATURES             Location/Qualifiers
     source          1..13051
                     /cell_line="GM130B"
                     /cell_type="B-lymphoblastoid"
                     /chromosome="21"
                     /clone="D6B5"
                     /map="21q22.3"
                     /mol_type="genomic DNA"
                     /organism="Homo sapiens" 
     exon            2676..2884
                     /gene="KNP-I"
                     /number=1 
     CDS             join(2744..2884,3148..3200,5106..5219,6223..6342,9296..
                     9388,12251..>12407)
                     /codon_start=1
                     /gene="KNP-I"
                     /product="KNP-I alpha protein"
                     /translation="--- omitted ---" 
     CDS             join(2744..2884,3148..3200,5106..5219,6223..6342,12251..
                     >12407)
                     /codon_start=1
                     /gene="KNP-I"
                     /note="alternative splicing"
                     /product="KNP-I beta protein"
                     /translation="--- omitted ---" 
     exon            3148..3200
                     /gene="KNP-I"
                     /number=2
     exon            5106..5219
                     /gene="KNP-I"
                     /number=3
     exon            6223..6342
                     /gene="KNP-I"
                     /number=4
     exon            9296..9388
                     /gene="KNP-I"
                     /number=5 
     exon            12251..12407
                     /gene="KNP-I"
                     /number=6 
```

</div>

<div class="section section">

### B09) RNA editing

``` code flat-file
DEFINITION  Beta vulgaris TK81-O mitochondrial nad4L gene for NADH 
            dehydrogenase subunit 4L, complete cds.
FEATURES             Location/Qualifiers
     source          1..400
                     /mol_type="genomic DNA"
                     /organelle="mitochondrion"
                     /organism="Beta vulgaris"
                     /strain="TK81-O" 
     CDS             71..373
                     /codon_start=1
                     /exception="RNA editing"
                     /gene="nad4L"
                     /note="initiation codon is created by RNA editing"
                     /product="NADH dehydrogenase subunit 4L"
                     /transl_table=1
                     /translation="--- omitted ---" 
     misc_feature    72
                     /note="C to U RNA editing" 
     misc_feature    117
                     /note="C to U RNA editing" 
     misc_feature    125
                     /note="C to U RNA editing" 
     misc_feature    180
                     /note="C to U RNA editing" 
     misc_feature    201
                     /note="C to U RNA editing" 
```

</div>

<div class="section section">

### B10) ribosomal frameshift in HIV1 complete genome

``` code flat-file
DEFINITION  Human immunodeficiency virus 1 95TNIH047 proviral DNA, complete 
            genome.
FEATURES             Location/Qualifiers
     source          1..9430
                     /country="Japan"
                     /isolate="95TNIH047"
                     /isolation_source="peripheral blood mononuclear 
                     cell of male patient"
                     /mol_type="genomic DNA"
                     /organism="Human immunodeficiency virus 1"
                     /proviral
     CDS             join(759..2049,2049..5059)
                     /codon_start=1
                     /gene="gag-pol"
                     /note="produced by ribosomal frameshift slip on tttttt 
                     slippery site"
                     /product="gag-pol fusion polyprotein"
                     /ribosomal_slippage
                     /translation="--- omitted ---"  
     CDS             759..2255
                     /codon_start=1
                     /gene="gag"
                     /product="Gag polyprotein precursor"
                     /transl_table=1
                     /translation="--- omitted ---"
     --- The rest is omitted --- 
```

</div>

<div class="section section">

### B11) partial TAA stop codon in mitochondrial genome

``` code flat-file
DEFINITION  Mus musculus SAMP8 mitochondrial DNA, complete genome. 
FEATURES             Location/Qualifiers
     source          1..16299
                     /mol_type="genomic DNA"
                     /organelle="mitochondrion"
                     /organism="Mus musculus"
                     /strain="SAMP8"
                     /tissue_type="liver"
     --- omitted --- 
     CDS             8607..9390
                     /codon_start=1
                     /gene="COX3"
                     /note="TAA stop codon is completed by the addition of 3' 
                     A residues to the mRNA"
                     /product="cytochrome oxidase subunit 3"
                     /transl_except=(pos:9390,aa:TERM)
                     /transl_table=2
                     /translation="--- omitted ---" 
     tRNA            9391..9458
                     /anticodon=(pos:9421..9423,aa:Gly,seq:tcc)
                     /note="codon recognized: GGA"
                     /product="tRNA-Gly" 
     CDS             9459..9806
                     /codon_start=1
                     /gene="ND3"
                     /product="NADH dehydrogenase subunit 3"
                     /transl_table=2
                     /translation="--- omitted ---" 
     tRNA            9808..9875
                     /anticodon=(pos:9838..9840,aa:Arg,seq:tcg)
                     /note="codon recognized: CGA"
                     /product="tRNA-Arg"
  --- The rest is omitted --- 
```

</div>

<div class="section section">

### B12) Major Histocompatibility Complex (MHC)

``` code flat-file
DEFINITION  Homo sapiens HLA-A gene for MHC class I antigen, partial cds,
            allele: HLA-A2(A*0201V3). 
FEATURES             Location/Qualifiers
     source          1..546
                     /mol_type="genomic DNA"
                     /note="HLA-A2(A*0201V3)/24,B35/60,DRB1*1501/1202"
                     /organism="Homo sapiens" 
     CDS             <1..>546
                     /allele="HLA-A2(A*0201V3)"
                     /codon_start=3
                     /gene="HLA-A"
                     /product="MHC class I antigen"
                     /transl_table=1
                     /translation="--- omitted ---" 
```

</div>

<div class="section section">

### B13) trans\_splicing

``` code flat-file
DEFINITION  Psilotum nudum Kingyoku chloroplast DNA, complete genome.
FEATURES             Location/Qualifiers
     source          1..138829
                     /cultivar="Kingyoku"
                     /mol_type="genomic DNA"
                     /organelle="plastid:chloroplast"
                     /organism="Psilotum nudum"
     ---- omitted ----
     CDS             join(complement(68922..69035),133880..134137)
                     /codon_start=1
                     /note="trans splicing of 5'rps12 exon and 3'rps12 exon"
                     /product="ribosomal protein S12"
                     /protein_id="BAB84240.1"
                     /trans_splicing
                     /transl_table=11
                     /translation="MPTIQQLIRNARQPIRSRTKSPALRG CPQRRGVCIRVYTTTPK
                     KPNSALRKVARVRLTSGFEITAYIPGIGHNLQEHSVVSVRGGRVKDLPGVRYHIVRGT
                     LDAVGVKDRKQGRSRYGVKKPK" 
     exon            complement(68922..69035)
                     /gene="rps12"
                     /note="5'rps12 exon, trans splicing"
                     /number=1
                     /product="ribosomal protein S12"
     ---- omitted ----
     exon            133880..134137
                     /gene="rps12"
                     /note="3'rps12 exon, trans splicing"
                     /number=2
                     /product="ribosomal protein S12"
                     ---- omitted ---- 
```

</div>

<div class="section section">

### B14) preproprotein

``` code flat-file
DEFINITION  Homo sapiens NMS mRNA for prepro-neuromedin S, complete cds.
FEATURES             Location/Qualifiers
     source          1..485
                     /mol_type="mRNA"
                     /organism="Homo sapiens"
     CDS             8..469
                     /codon_start=1
                     /gene="NMS"
                     /product="prepro-neuromedin S"
                     /transl_table=1
                     /translation="--- omitted ---"
     sig_peptide     8..88
                     /gene="NMS"
     propeptide      89..466
                     /gene="NMS"
                     /product="pro-neuromedin S"
     mat_peptide     332..430
                     /gene="NMS"
                     /product="neuromedin S"
```

</div>

<div class="section section">

### B15) polyprotein

``` code flat-file
DEFINITION  Dengue virus 2 DR123 genomic RNA, complete genome.
FEATURES             Location/Qualifiers
     source          1..10723
                     /collection_date="2001"
                     /country="Dominican Republic"
                     /host="Homo sapiens"
                     /mol_type="genomic RNA"
                     /organism="Dengue virus 2"
                     /strain="DR123"
     CDS             97..10272
                     /codon_start=1
                     /product="polyprotein"
                     /transl_table=1
                     /translation="--- omitted ---"
     mat_peptide     97..438
                     /product="anchored capsid protein C"
     mat_peptide     439..936
                     /product="membrane glycoprotein precursor M"
     mat_peptide     937..2421
                     /product="envelope protein E"
     mat_peptide     2422..3477
                     /product="nonstructural protein NS1"
     mat_peptide     3478..4131
                     /product="nonstructural protein NS2A"
     mat_peptide     4132..4518
                     /product="nonstructural protein NS2B"
     mat_peptide     4519..6375
                     /product="nonstructural protein NS3"
     mat_peptide     6376..6825
                     /product="nonstructural protein NS4A"
     mat_peptide     6826..7569
                     /product="nonstructural protein NS4B"
     mat_peptide     7570..10269
                     /product="RNA-dependent RNA polymerase"
```

</div>

</div>

　

<div class="section chapter">

## C: EST, GSS, STS

<div class="section section">

### C01) EST (Expressed Sequence Tag)

[EST の説明](/ddbj/est.html)もご参照ください。

``` code flat-file
DEFINITION  Mus musculus cDNA, clone: 2310009B01, 3' end sequence, expressed
            in tongue. 
KEYWORDS    EST; 3'-end sequence (3'-EST).
FEATURES             Location/Qualifiers
     source          1..267
                     /clone="2310009B01"
                     /clone_lib="RIKEN full-length enriched mouse tongue cDNA 
                     library A502"
                     /dev_stage="adult"
                     /mol_type="mRNA"
                     /organism="Mus musculus"
                     /sex="male"
                     /tissue_type="tongue" 
```

</div>

<div class="section section">

### C02) GSS (Genome Survey Sequence)

[GSS の説明](/ddbj/gss.html)もご参照ください。

``` code flat-file
DEFINITION  Arabidopsis thaliana Columbia DNA, YAC clone: CIC5D1, left end,
            chromosome 1 between mi303 and mi259.
KEYWORDS    GSS.
FEATURES             Location/Qualifiers
     source          1..532
                     /chromosome="1"
                     /clone="YAC clone CIC5D1"
                     /map="between mi303 and mi259"
                     /mol_type="genomic DNA"
                     /organism="Arabidopsis thaliana"
                     /ecotype="Columbia" 
```

</div>

<div class="section section">

### C03) STS (Sequence Tagged Site)

``` code flat-file
DEFINITION  Sus scrofa DNA, STS on chromosome 1, clone:AA12345, 
            sequence tagged site. 
KEYWORDS    STS.
FEATURES             Location/Qualifiers
     source          1..200
                     /chromosome="1"
                     /clone="AA12345"
                     /mol_type="genomic DNA"
                     /organism="Sus scrofa"
     primer_bind     1..20
                     /PCR_conditions="30 cycles 94degC 30 sec, 
                     56degC 30 sec and 72degC 30 sec" 
     primer_bind     complement(180..200)
```

</div>

</div>

　

<div class="section chapter">

## D: Repeat

<div class="section section">

### D01.1) microsatellite, recommended annotation

ゲノムマッピングを目的とした microsatellite は STS division に分類します。

``` code flat-file
DEFINITION  Bos taurus DNA, microsatellite: 3456P. 
FEATURES             Location/Qualifiers
     source          1..300
                     /chromosome="11"
                     /map="11p"
                     /mol_type="genomic DNA"
                     /organism="Bos taurus" 
     primer_bind     20..40
                     /PCR_conditions="denaturation 94degC 2 min; 30 cycles
                     94degC 30 sec, 56degC 1 min, 72degC 1 min; final
                     extention 72degC 1 min" 
     repeat_region   60..200
                     /rpt_type=tandem
                     /rpt_unit_seq="ta" 
                     /satellite="microsatellite: 3456P"
     primer_bind     complement(210..230)
```

</div>

<div class="section section">

### D01.2) microsatellite, minimal annotation

``` code flat-file
DEFINITION  Paralichthys olivaceus DNA, microsatellite: Poli1TUF.
FEATURES             Location/Qualifiers
     source          1..222
                     /mol_type="genomic DNA"
                     /organism="Paralichthys olivaceus" 
     repeat_region   25..94
                     /rpt_type=tandem
                     /rpt_unit_seq="ca"
                     /satellite="microsatellite: Poli1TUF"
```

</div>

<div class="section section">

### D02) transposon

``` code flat-file
DEFINITION  Escherichia coli transposon Tn2000 DNA, complete sequence. 
FEATURES             Location/Qualifiers
     source          1..5000
                     /mol_type="genomic DNA"
                     /organism="Escherichia coli" 
     mobile_element  1..5000
                     /mobile_element_type="transposon:Tn2000" 
     repeat_region   1..100
                     /rpt_type=inverted 
     CDS             146..1576
                     /codon_start=1
                     /product="transposase"
                     /transl_table=11
                     /translation="--- omitted ---" 
     CDS             2785..3585
                     /codon_start=1
                     /product="streptomycin phosphotransferase"
                     /transl_table=11
                     /translation="--- omitted ---" 
     repeat_region   4900..5000
                     /rpt_type=inverted 
```

</div>

<div class="section section">

### D03) insertion sequence

``` code flat-file
DEFINITION  Streptomyces coelicolor A456 insertion sequence IS123 DNA, complete 
            sequence.
FEATURES             Location/Qualifiers
     source          1..2000
                     /mol_type="genomic DNA"
                     /organism="Streptomyces coelicolor"
                     /strain="A456" 
     repeat_region   44..48
                     /note=target sequence
                     /rpt_type=flanking 
     mobile_element  49..1166
                     /mobile_element_type="insertion sequence:IS123" 
     repeat_region   49..78
                     /note="30nt perfect inverted repeat"
                     /rpt_type=inverted 
     CDS             271..1110
                     /codon_start=1
                     /gene="tnpA"
                     /product="transposase"
                     /transl_table=11
                     /translation="--- omitted ---" 
     repeat_region   1137..1166
                     /note="30nt perfect inverted repeat"
                     /rpt_type=inverted 
     repeat_region   1167..1171
                     /note="target sequence"
                     /rpt_type=flanking 
```

</div>

</div>

　

<div class="section chapter">

## E: Particular resources

<div class="section section">

### E01) environmental sample sequence

[環境サンプルの説明](/ddbj/env.html)もご参照ください。

``` code flat-file
DEFINITION  Uncultured bacterium 4-11 gene for 16S rRNA, partial sequence.
FEATURES             Location/Qualifiers
     source          1..1475
                     /clone="4-11"
                     /environmental_sample
                     /isolation_source="solid waste compost"
                     /mol_type="genomic DNA"
                     /organism="uncultured bacterium" 
     rRNA            <1..>1475
                     /product="16S rRNA" 
```

</div>

<div class="section section">

### E02) organism name with sp. (unidentified species)

``` code flat-file
DEFINITION  Eirene sp. EML1 GAPDH mRNA for glyceraldehyde-3-phosphate 
            dehydrogenase, partial cds. 
FEATURES             Location/Qualifiers
     source          1..245
                     /mol_type="mRNA"
                     /organism="Eirene sp. EML1"
                     /strain="EML1" 
     CDS             <1..>245
                     /codon_start=3
                     /gene="GAPDH"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /translation="--- omitted ---" 
```

</div>

<div class="section section">

### E03) natural plasmid

``` code flat-file
DEFINITION  Rhodococcus rhodochrous IFO 3338 plasmid pRC4 repA, repB genes for 
            replication protein, DNA-binding replication protein, complete 
            cds.
FEATURES             Location/Qualifiers
     source          1..2582
                     /mol_type="genomic DNA"
                     /organism="Rhodococcus rhodochrous"
                     /plasmid="pRC4"
                     /strain="IFO 3338" 
     CDS             1142..2062
                     /codon_start=1
                     /gene="repA"
                     /product="replication protein"
                     /transl_table=11
                     /translation="--- omitted ---" 
     CDS             2052..2333
                     /codon_start=1
                     /gene="repB"
                     /product="DNA-binding replication protein"
                     /transl_table=11
                     /translation="--- omitted ---" 
```

</div>

<div class="section section">

### E04) cloning vector

``` code flat-file
DEFINITION  Cloning vector pAP3neo DNA, complete sequence. 
FEATURES             Location/Qualifiers
     source          1..5350
                     /mol_type="other DNA"
                     /organism="Cloning vector pAP3neo" 
     rep_origin      572..1452
                     /note="ColE1-derived plasmid replication origin" 
     CDS             complement(1513..2373)
                     /codon_start=1
                     /gene="Amp"
                     /product="beta-lactamase"
                     /transl_table=11
                     /translation="--- omitted ---" 
     rep_origin      2504..2959
                     /note="phage f1 region" 
     regulatory      3290..3485
                     /note="SV40 early promoter"
                     /regulatory_class="promoter"
     CDS             3596..4390
                     /codon_start=1
                     /gene="neo"
                     /product="neomycin phosphotransferase"
                     /transl_table=11
                     /translation="--- omitted ---" 
     regulatory      4788..4983
                     /note="SV40 early promoter" 
                     /regulatory_class="promoter"
     regulatory      5188..5207
                     /note="T7 promoter" 
                     /regulatory_class="promoter"
     regulatory      5302..5321
                     /note="T3 promoter" 
                     /regulatory_class="promoter"
```

</div>

<div class="section section">

### E05) synthetic construct

``` code flat-file
DEFINITION  Synthetic construct gene for Rai-chu 101, complete cds. 
FEATURES             Location/Qualifiers
     source          1..2223
                     /focus
                     /mol_type="other DNA"
                     /organism="synthetic construct" 
     CDS             1..2223
                     /codon_start=1
                     /gene="Rai-chu 101"
                     /note="fusion protein, Ras and interacting protein 
                     chimeric unit 101"
                     /product="Rai-chu 101"
                     /transl_table=11
                     /translation="--- omitted ---" 
     source          724..1239
                     /mol_type=other DNA""
                     /note="derived from human H-Ras cDNA"
                     /organism="Homo sapiens" 
     source          1258..1500
                     /mol_type=other DNA""
                     /note="derived from human Raf cDNA"
                     /organism="Homo sapiens" 
```

</div>

<div class="section section">

### E06.1) miRNA mature transcript

``` code flat-file
DEFINITION  Arabidopsis thaliana miR840 miRNA.
FEATURES             Location/Qualifiers
     source          1..21
                     /mol_type="transcribed RNA"
                     /organism="Arabidopsis thaliana"
     ncRNA           1..21
                     /ncRNA_class="miRNA"
                     /product="miR840"
```

</div>

<div class="section section">

### E06.2) miRNA precursor transcript

``` code flat-file
DEFINITION  Arabidopsis thaliana miR840-843 polycistronic noncoding RNA.
FEATURES             Location/Qualifiers
     source          1..2223
                     /mol_type="transcribed RNA"
                     /organism="Arabidopsis thaliana"
     precursor_RNA   1..1342
                     /product="miR840-843 polycistronic noncoding RNA"
     ncRNA           98..119
                     /ncRNA_class="miRNA"
                     /product="miR840"
     ncRNA           1177..1197
                     /ncRNA_class="miRNA"
                     /product="miR843" 
```

</div>

</div>

　

<div class="section chapter">

## F: Variation

<div class="section section">

### F01) polymorphism and variation

[多型関連研究における同一配列の代表データ登録](/ddbj/represent.html)もご参照ください。

``` code flat-file
DEFINITION  Homo sapiens IGF1R mRNA for insulin-like growth factor I receptor,
            partial cds. 
FEATURES             Location/Qualifiers
     source          1..1000
                     /mol_type="mRNA"
                     /organism="Homo sapiens" 
     CDS             <1..>1000
                     /codon_start=2
                     /gene="IGF1R"
                     /product="insulin-like growth factor I recep tor"
                     /translation="--- omitted ---" 
     variation       100
                     /note="polymorphism"
                     /note="This substitution causes an amino acid 
                     substitution from Ala to Thr."
                     /compare="AB000000.1"
                     /replace="a" 
```

</div>

<div class="section section">

### F02) candidates of polymorphism found by direct sequencing of diploid genome

``` code flat-file
FEATURES             Location/Qualifiers
     source          1..426
                     /mol_type="mRNA"
                     /organism="Homo sapiens"
     variation       260
                     /experiment="heterozygous SNP detection from direct
                     sequencing"
                     /note="putative SNP, T/C"
     variation       342
                     /experiment="heterozygous SNP detection from direct
                     sequencing"
                     /note="putative SNP, T/C"
BASE COUNT          164 a           55 c           55 g          150 t
ORIGIN      
        1 gagccacatc aagatcacca tatttcagcg gatcatcagc tttctcccct actatagtat
       61 cctcagataa agagaccatt gagattatag acctagctaa gaaagattta gagaagctga
      121 aaagaaaaga aaagaagaag aaaaaaaggt agtgttataa aatcactttt atatgaatct
      181 ctattcttct cacttttaag gatattttaa tttgcagttg caatgagtat atataacctc
      241 atttttaaaa atgaaatgty atttaacata gattataatt atatattttt aaagatttat
      301 ctcttcctta tatgtaaaaa attaaattaa ttacaataat ayggtagtga attttattta
      361 gactatgata aggtaaaatt actattagaa attattttat tatttcttca actagctgcc
      421 tttgca
//
```

</div>

</div>

　

<div class="section chapter">

## G: Sequencing gap

<div class="section section">

### G01) entry with unknown gaps

``` code flat-file
DEFINITION  Homo sapiens HLA-A gene for MHC class I antigen, partial cds,
            allele: HLA-A*2601V1.
FEATURES             Location/Qualifiers
     source          1..1022
                     /mol_type="genomic DNA"
                     /note="HLA-A*2601V1/2402,B*4001/4002,DRB1*0901/1401,
                     TBC191371"
                     /organism="Homo sapiens" 
     CDS             join(<1..270,371..646,747..>1022)
                     /allele="HLA-A*2601V1"
                     /codon_start=3
                     /gene="HLA-A"
                     /product="MHC class I antigen"
                     /translation="--- omitted ---" 
     exon            1..270
                     /allele="HLA-A*2601V1"
                     /gene="HLA-A"
                     /number=2 
     gap             271..370
                     /estimated_length=unknown
     exon            371..646
                     /allele="HLA-A*2601V1"
                     /gene="HLA-A"
                     /number=3 
     gap             647..746
                     /estimated_length=unknown
     exon            747..1022
                     /allele="HLA-A*2601V1"
                     /gene="HLA-A"
                     /number=4 
BASE COUNT          166 a          249 c          288 g           119 t
ORIGIN
        1 gctcccactc catgaggtat ttctacacct ccgtgtcccg gcccggccgc ggggagcccc 
       61 gcttcatcgc cgtgggctac gtggacgaca cgcagttcgt gcggttcgac agcgacgccg 
      121 cgagccagag gatggagccg cgggcgccgt ggatagagca ggaggggccg gagtattggg 
      181 accggaacac acggaatgtg aaggcccact cacagactga ccgagcgaac ctggggaccc 
      241 tgcgcggcta ctacaaccag agcgaggacg nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn 
      301 nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn 
      361 nnnnnnnnnn gttctcacac cgtccagagg atgtatggct gcgacgtggg gccggacggg 
      421 cgcttcctcc gcgggtacca gcaggacgct tacgacggca aggattacat cgccctgaac 
      481 gaggacctgc gctcttggac cgcggcggac atggcggctc agatcaccca gcgcaagtgg 
      541 gagacggccc atgaggcgga gcagtggaga gcctacctgg agggccggtg cgtggagtgg 
      601 ctccgcagat acctggagaa cgggaaggag acgctgcagc gcacggnnnn nnnnnnnnnn 
      661 nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn nnnnnnnnnn 
      721 nnnnnnnnnn nnnnnnnnnn nnnnnnacgc ccccaagacg catatgactc accacgctgt 
      781 ctctgaccat gaggccaccc tgaggtgctg ggccctgagc ttctaccctg cggagatcac 
      841 actgacctgg cagcgggatg gggaggacca gacccaggac acggagctcg tggagaccag 
      901 gcctgcaggg gatgggacct tccagaagtg ggcgtctgtg gtggtgcctt ctggacagga 
      961 gcagagatac acctgccatg tgcagcatga gggtctgccc aagcccctca ccctgagatg 
     1021 gg
//
```

</div>

</div>

　

</div>
