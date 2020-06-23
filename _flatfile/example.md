---
layout: indexed_content
title: 登録の見本
pathname: example
category: flatfile
---

登録の例としてご利用下さい。

## A: Ribosomal RNA, ITS, IGS

### A01) 16S rRNA gene

<pre>DEFINITION  Vibrio halioticoli IAM 14597 gene for 16S rRNA, partial sequence.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1471</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Vibrio halioticoli"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="IAM 14597" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..&gt;1471</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="16S ribosomal RNA" 
</pre>

### A02) 18S rRNA gene including intron

<pre>DEFINITION  Sporobolomyces ruber JCM 6884 gene for 18S rRNA, partial sequence. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2072</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Sporobolomyces ruber"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="JCM 6884" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">join(&lt;1..1144,1469..&gt;2072)</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="18S ribosomal RNA" 
     <a href="/ddbj/features.html#intron">intron</a>          <a href="/ddbj/location.html">1145..1468</a>
</pre>

### A03) ITS1, ITS2

<pre>DEFINITION  Microsphaera trifolii var. trifolii MUMH29s genes for 18S rRNA, 
            ITS1, 5.8S rRNA, ITS2, 28S rRNA, partial and complete sequence.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..597</a>
                     /<a href="/ddbj/qualifiers.html#isolate">isolate</a>="MUMH29s"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Microsphaera trifolii var. trifolii"
                     /<a href="/ddbj/qualifiers.html#host">host</a>="Trifolium vulgaris"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="conidia"
                     /<a href="/ddbj/qualifiers.html#variety">variety</a>="trifolii" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..4</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="18S ribosomal RNA" 
     <a href="/ddbj/features.html#misc_RNA">misc_RNA</a>        <a href="/ddbj/location.html">5..224</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="internal transcribed spacer 1" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">225..378</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="5.8S ribosomal RNA" 
     <a href="/ddbj/features.html#misc_RNA">misc_RNA</a>        <a href="/ddbj/location.html">379..562</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="internal transcribed spacer 2" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">563..&gt;597</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="28S ribosomal RNA" 
</pre>

各 rRNA、ITS の境界が不明な場合は、以下の annotation を記載します。

<pre>FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..597</a>
                     /<a href="/ddbj/qualifiers.html#isolate">isolate</a>="MUMH29s"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Microsphaera trifolii var. trifo lii"
                     /<a href="/ddbj/qualifiers.html#host">host</a>="Trifolium vulgaris"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="conidia"
                     /<a href="/ddbj/qualifiers.html#variety">variety</a>="trifolii" 
     <a href="/ddbj/features.html#misc_RNA">misc_RNA</a>        <a href="/ddbj/location.html">&lt;1..&gt;597</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="contains 18S ribosomal RNA, internal transcribed
                     spacer 1, 5.8S ribosomal RNA, internal transcribed spacer
                     2, and 28S ribosomal RNA"
</pre>

### A04) intergenic spacer, IGS

<pre>DEFINITION  Setaria italica cv. Shimokatsugi genes for 25S rRNA, IGS, 17S rRNA, 
            partial and complete sequence.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2646</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="pSIR012"
                     /<a href="/ddbj/qualifiers.html#country">country</a>="Japan"
                     /<a href="/ddbj/qualifiers.html#cultivar">cultivar</a>="Shimokatsugi"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Setaria italica" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..493</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="25S ribosomal RNA" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    494..2484
                     /<a href="/ddbj/qualifiers.html#note">note</a>="intergenic spacer, IGS" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">2485..&gt;2646</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="17S ribosomal RNA" 
</pre>

## B: Protein-coding genes

### B01) CDS (mRNA)

<pre>DEFINITION  Homo sapiens AQP9 mRNA for aquaporin 9, complete cds. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2878</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="liver" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">217..1104</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="AQP9"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="aquaporin 9"
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1 
</pre>

### B02) CDS (DNA)

<pre>DEFINITION  Aspergillus oryzae RIB128 tglA gene for triacylglycerol lipase, 
            complete cds.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1025</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Aspergillus oryzae"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="RIB128" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">join(34..330,378..523,607..764,827..990)</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="tglA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="triacylglycerol lipase"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
</pre>

### B03) premature mRNA

<pre>DEFINITION  Cynops pyrrhogaster CpTbx3 premature mRNA, partial cds.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..5170</a>
                     /<a href="/ddbj/qualifiers.html#dev_stage">dev_stage</a>="gastrula"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Cynops pyrrhogaster"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="embryo" 
     <a href="/ddbj/features.html#intron">intron</a>          <a href="/ddbj/location.html">&lt;1..359</a>
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">&lt;360..2135</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="CpTbx3"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="T-box family member; T-box domain"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
</pre>

### B04) promoter region

<pre>DEFINITION  Mus musculus 129SVJ mNB-3 gene for neural recognition molecule NB-3,
            exon 1 and promoter region.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1300</a>
                     /<a href="/ddbj/qualifiers.html#dev_stage">dev_stage</a>="4-8 weeks old"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#sex">sex</a>="female"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="129SVJ" 
     <a href="/ddbj/features.html#regulatory">regulatory</a>      <a href="/ddbj/location.html">&lt;1..1197</a>
                     /<a href="/ddbj/qualifiers.html#regulatory_class">regulatory_class</a>="promoter"
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">1198..&gt;1300</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="mNB-3"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="neural recognition molecule NB-3"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=1
</pre>

### B05) 5' flanking region

<pre>DEFINITION  Mus musculus 129SV gene for membrane cofactor protein CD46, 5' 
            flanking region.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1614</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="129SV" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    <a href="/ddbj/location.html">1..1614</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="5' flanking region"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="membrane cofactor protein CD46" 
</pre>

### B06) pseudogene

<pre>DEFINITION  Homo sapiens pseudogene, necdin. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2285</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">&lt;1..1319</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="pseudogene of necdin"
                     /<a href="/ddbj/qualifiers.html#pseudogene">pseudogene</a>="processed" 
</pre>

### B07) alternative splicing (mRNA)

<pre><strong>[isoform 1]</strong>
DEFINITION  Homo sapiens BAP2 mRNA for BAI-associated protein 2 alpha, 
            complete cds. 
ACCESSION   XA000001 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..3168</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">94..1659</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="BAP2"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="alternative splicing: see also Acc# XA000002.1"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="BAI-associated protein 2 alpha"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 

<strong>[isoform 2]</strong>
DEFINITION  Homo sapiens BAP2 mRNA for BAI-associated protein 2 beta, 
            complete cds. 
ACCESSION   XA000002 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2129</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">94..1659</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="BAP2"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="alternative splicing: see also Acc# XA000001.1"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="BAI-associated protein 2 beta"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
</pre>

### B08) alternative splicing (DNA)

<pre>DEFINITION  Homo sapiens KNP-I gene for KNP-I alpha protein, KNP-I beta
            protein, partial cds, alternative splicing. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..13051</a>
                     /<a href="/ddbj/qualifiers.html#cell_line">cell_line</a>="GM130B"
                     /<a href="/ddbj/qualifiers.html#cell_type">cell_type</a>="B-lymphoblastoid"
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="21"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="D6B5"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="21q22.3"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">2676..2884</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=1 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">join(2744..2884,3148..3200,5106..5219,6223..6342,9296..</a>
                     <a href="/ddbj/location.html">9388,12251..&gt;12407)</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="KNP-I alpha protein"
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">join(2744..2884,3148..3200,5106..5219,6223..6342,12251..</a>
                     <a href="/ddbj/location.html">&gt;12407)</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="alternative splicing"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="KNP-I beta protein"
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">3148..3200</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=2
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">5106..5219</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=3
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">6223..6342</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=4
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">9296..9388</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=5 
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">12251..12407</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="KNP-I"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=6 
</pre>

### B09) RNA editing

<pre>DEFINITION  Beta vulgaris TK81-O mitochondrial nad4L gene for NADH 
            dehydrogenase subunit 4L, complete cds.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..400</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organelle">organelle=</a>"mitochondrion"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Beta vulgaris"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="TK81-O" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">71..373</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#exception">exception</a>="RNA editing"
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="nad4L"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="initiation codon is created by RNA editing"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="NADH dehydrogenase subunit 4L"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    <a href="/ddbj/location.html">72</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="C to U RNA editing" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    <a href="/ddbj/location.html">117</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="C to U RNA editing" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    <a href="/ddbj/location.html">125</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="C to U RNA editing" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    <a href="/ddbj/location.html">180</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="C to U RNA editing" 
     <a href="/ddbj/features.html#misc_feature">misc_feature</a>    <a href="/ddbj/location.html">201</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="C to U RNA editing" 
</pre>

### B10) ribosomal frameshift in HIV1 complete genome

<pre>DEFINITION  Human immunodeficiency virus 1 95TNIH047 proviral DNA, complete 
            genome.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..9430</a>
                     /<a href="/ddbj/qualifiers.html#country">country</a>="Japan"
                     /<a href="/ddbj/qualifiers.html#isolate">isolate</a>="95TNIH047"
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="peripheral blood mononuclear 
                     cell of male patient"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Human immunodeficiency virus 1"
                     /<a href="/ddbj/qualifiers.html#proviral">proviral</a>
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">join(759..2049,2049..5059)</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="gag-pol"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="produced by ribosomal frameshift slip on tttttt 
                     slippery site"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="gag-pol fusion polyprotein"
                     /<a href="/ddbj/qualifiers.html#ribosomal_slippage">ribosomal_slippage</a>
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---"  
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">759..2255</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="gag"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="Gag polyprotein precursor"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---"
     --- The rest is omitted --- 
</pre>

### B11) partial TAA stop codon in mitochondrial genome

<pre>DEFINITION  Mus musculus SAMP8 mitochondrial DNA, complete genome. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..16299</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organelle">organelle</a>="mitochondrion"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="SAMP8"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="liver"
     --- omitted --- 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">8607..9390</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="COX3"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="TAA stop codon is completed by the addition of 3' 
                     A residues to the mRNA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="cytochrome oxidase subunit 3"
                     /<a href="/ddbj/qualifiers.html#transl_except">transl_except</a>=(pos:9390,aa:TERM)
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=2
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#tRNA">tRNA</a>            <a href="/ddbj/location.html">9391..9458</a>
                     /<a href="/ddbj/qualifiers.html#anticodon">anticodon</a>=(pos:9421..9423,aa:Gly,seq:tcc)
                     /<a href="/ddbj/qualifiers.html#note">note</a>="codon recognized: GGA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="tRNA-Gly" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">9459..9806</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="ND3"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="NADH dehydrogenase subunit 3"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=2
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#tRNA">tRNA</a>            <a href="/ddbj/location.html">9808..9875</a>
                     /<a href="/ddbj/qualifiers.html#anticodon">anticodon</a>=(pos:9838..9840,aa:Arg,seq:tcg)
                     /<a href="/ddbj/qualifiers.html#note">note</a>="codon recognized: CGA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="tRNA-Arg"
  --- The rest is omitted --- 
</pre>

### B12) Major Histocompatibility Complex (MHC)

<pre>DEFINITION  Homo sapiens HLA-A gene for MHC class I antigen, partial cds,
            allele: HLA-A2(A*0201V3). 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..546</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="HLA-A2(A*0201V3)/24,B35/60,DRB1*1501/1202"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">&lt;1..&gt;546</a>
                     /<a href="/ddbj/qualifiers.html#allele">allele</a>="HLA-A2(A*0201V3)"
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=3
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="HLA-A"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="MHC class I antigen"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
</pre>

### B13) trans\_splicing

<pre>DEFINITION  Psilotum nudum Kingyoku chloroplast DNA, complete genome.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..138829</a>
                     /<a href="/ddbj/qualifiers.html#cultivar">cultivar</a>="Kingyoku"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organelle">organelle</a>="plastid:chloroplast"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Psilotum nudum"
     ---- omitted ----
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">join(complement(68922..69035),133880..134137)</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#note">note</a>="trans splicing of 5'rps12 exon and 3'rps12 exon"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="ribosomal protein S12"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="BAB84240.1"
                     /<a href="/ddbj/qualifiers.html#trans_splicing">trans_splicing</a>
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MPTIQQLIRNARQPIRSRTKSPALRG CPQRRGVCIRVYTTTPK
                     KPNSALRKVARVRLTSGFEITAYIPGIGHNLQEHSVVSVRGGRVKDLPGVRYHIVRGT
                     LDAVGVKDRKQGRSRYGVKKPK" 
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">complement(68922..69035)</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="rps12"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="5'rps12 exon, trans splicing"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=1
                     /<a href="/ddbj/qualifiers.html#product">product</a>="ribosomal protein S12"
     ---- omitted ----
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">133880..134137</a>
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="rps12"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="3'rps12 exon, trans splicing"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=2
                     /<a href="/ddbj/qualifiers.html#product">product</a>="ribosomal protein S12"
                     ---- omitted ---- 
</pre>

### B14) preproprotein

<pre>DEFINITION  Homo sapiens NMS mRNA for prepro-neuromedin S, complete cds.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..485</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">8..469</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#q_gene">gene</a>="NMS"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="prepro-neuromedin S"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---"
     <a href="/ddbj/features.html#sig_peptide">sig_peptide</a>     <a href="/ddbj/location.html">8..88</a>
                     /<a href="/ddbj/qualifiers.html#q_gene">gene</a>="NMS"
     <a href="/ddbj/features.html#propeptide">propeptide</a>      <a href="/ddbj/location.html">89..466</a>
                     /<a href="/ddbj/qualifiers.html#q_gene">gene</a>="NMS"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="pro-neuromedin S"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">332..430</a>
                     /<a href="/ddbj/qualifiers.html#q_gene">gene</a>="NMS"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="neuromedin S"
</pre>

### B15) polyprotein

<pre>DEFINITION  Dengue virus 2 DR123 genomic RNA, complete genome.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..10723</a>
                     /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="2001"
                     /<a href="/ddbj/qualifiers.html#country">country</a>="Dominican Republic"
                     /<a href="/ddbj/qualifiers.html#host">host</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic RNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Dengue virus 2"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="DR123"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">97..10272</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#product">product</a>="polyprotein"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">97..438</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="anchored capsid protein C"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">439..936</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="membrane glycoprotein precursor M"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">937..2421</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="envelope protein E"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">2422..3477</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="nonstructural protein NS1"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">3478..4131</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="nonstructural protein NS2A"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">4132..4518</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="nonstructural protein NS2B"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">4519..6375</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="nonstructural protein NS3"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">6376..6825</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="nonstructural protein NS4A"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">6826..7569</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="nonstructural protein NS4B"
     <a href="/ddbj/features.html#mat_peptide">mat_peptide</a>     <a href="/ddbj/location.html">7570..10269</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="RNA-dependent RNA polymerase"
</pre>

## C: EST, GSS, STS

### C01) EST (Expressed Sequence Tag)

[EST の説明](/ddbj/est.html)もご参照ください。

<pre>DEFINITION  Mus musculus cDNA, clone: 2310009B01, 3' end sequence, expressed
            in tongue. 
KEYWORDS    EST; 3'-end sequence (3'-EST).
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..267</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="2310009B01"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="RIKEN full-length enriched mouse tongue cDNA 
                     library A502"
                     /<a href="/ddbj/qualifiers.html#dev_stage">dev_stage</a>="adult"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#sex">sex</a>="male"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="tongue" 
</pre>

### C02) GSS (Genome Survey Sequence)

[GSS の説明](/ddbj/gss.html)もご参照ください。

<pre>DEFINITION  Arabidopsis thaliana Columbia DNA, YAC clone: CIC5D1, left end,
            chromosome 1 between mi303 and mi259.
KEYWORDS    GSS.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..532</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="YAC clone CIC5D1"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="between mi303 and mi259"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Arabidopsis thaliana"
                     /<a href="/ddbj/qualifiers.html#ecotype">ecotype</a>="Columbia" 
</pre>

### C03) STS (Sequence Tagged Site)

<pre>DEFINITION  Sus scrofa DNA, STS on chromosome 1, clone:AA12345, 
            sequence tagged site. 
KEYWORDS    STS.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..200</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="AA12345"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Sus scrofa"
     <a href="/ddbj/features.html#primer_bind">primer_bind</a>     <a href="/ddbj/location.html">1..20</a>
                     /<a href="/ddbj/qualifiers.html#PCR_conditions">PCR_conditions</a>="30 cycles 94degC 30 sec, 
                     56degC 30 sec and 72degC 30 sec" 
     <a href="/ddbj/features.html#primer_bind">primer_bind</a>     <a href="/ddbj/location.html">complement(180..200)</a>
</pre>

## D: Repeat

### D01.1) microsatellite, recommended annotation

ゲノムマッピングを目的とした microsatellite は STS division に分類します。

<pre>DEFINITION  Bos taurus DNA, microsatellite: 3456P. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..300</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="11"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="11p"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Bos taurus" 
     <a href="/ddbj/features.html#primer_bind">primer_bind</a>     <a href="/ddbj/location.html">20..40</a>
                     /<a href="/ddbj/qualifiers.html#PCR_conditions">PCR_conditions</a>="denaturation 94degC 2 min; 30 cycles
                     94degC 30 sec, 56degC 1 min, 72degC 1 min; final
                     extention 72degC 1 min" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">60..200</a>
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=tandem
                     /<a href="/ddbj/qualifiers.html#rpt_unit_seq">rpt_unit_seq</a>="ta" 
                     /<a href="/ddbj/qualifiers.html#satellite">satellite</a>="microsatellite: 3456P"
     <a href="/ddbj/features.html#primer_bind">primer_bind</a>     <a href="/ddbj/location.html">complement(210..230)</a>
</pre>

### D01.2) microsatellite, minimal annotation

<pre>DEFINITION  Paralichthys olivaceus DNA, microsatellite: Poli1TUF.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..222</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Paralichthys olivaceus" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">25..94</a>
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=tandem
                     /<a href="/ddbj/qualifiers.html#rpt_unit_seq">rpt_unit_seq</a>="ca"
                     /<a href="/ddbj/qualifiers.html#satellite">satellite</a>="microsatellite: Poli1TUF"
</pre>

### D02) transposon

<pre>DEFINITION  Escherichia coli transposon Tn2000 DNA, complete sequence. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..5000</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Escherichia coli" 
     <a href="/ddbj/features.html#mobile_element">mobile_element</a>  <a href="/ddbj/location.html">1..5000</a>
                     /<a href="/ddbj/qualifiers.html#mobile_element_type">mobile_element_type</a>="transposon:Tn2000" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">1..100</a>
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=inverted 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">146..1576</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#product">product</a>="transposase"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">2785..3585</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#product">product</a>="streptomycin phosphotransferase"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">4900..5000</a>
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=inverted 
</pre>

### D03) insertion sequence

<pre>DEFINITION  Streptomyces coelicolor A456 insertion sequence IS123 DNA, complete 
            sequence.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2000</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Streptomyces coelicolor"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="A456" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">44..48</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>=target sequence
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=flanking 
     <a href="/ddbj/features.html#mobile_element">mobile_element</a>  <a href="/ddbj/location.html">49..1166</a>
                     /<a href="/ddbj/qualifiers.html#mobile_element_type">mobile_element_type</a>="insertion sequence:IS123" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">49..78</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="30nt perfect inverted repeat"
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=inverted 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">271..1110</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="tnpA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="transposase"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">1137..1166</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="30nt perfect inverted repeat"
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=inverted 
     <a href="/ddbj/features.html#repeat_region">repeat_region</a>   <a href="/ddbj/location.html">1167..1171</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="target sequence"
                     /<a href="/ddbj/qualifiers.html#rpt_type">rpt_type</a>=flanking 
</pre>

## E: Particular resources

### E01) environmental sample sequence

[環境サンプルの説明](/ddbj/env.html)もご参照ください。

<pre>DEFINITION  Uncultured bacterium 4-11 gene for 16S rRNA, partial sequence.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1475</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="4-11"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="solid waste compost"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured bacterium" 
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..&gt;1475</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="16S rRNA" 
</pre>

### E02) organism name with sp. (unidentified species)

<pre>DEFINITION  Eirene sp. EML1 GAPDH mRNA for glyceraldehyde-3-phosphate 
            dehydrogenase, partial cds. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..245</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Eirene sp. EML1"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="EML1" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">&lt;1..&gt;245</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=3
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="GAPDH"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
</pre>

### E03) natural plasmid

<pre>DEFINITION  Rhodococcus rhodochrous IFO 3338 plasmid pRC4 repA, repB genes for 
            replication protein, DNA-binding replication protein, complete 
            cds.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2582</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Rhodococcus rhodochrous"
                     /<a href="/ddbj/qualifiers.html#plasmid">plasmid</a>="pRC4"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="IFO 3338" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">1142..2062</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="repA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="replication protein"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">2052..2333</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="repB"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="DNA-binding replication protein"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
</pre>

### E04) cloning vector

<pre>DEFINITION  Cloning vector pAP3neo DNA, complete sequence. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source </a>         <a href="/ddbj/location.html">1..5350</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="other DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Cloning vector pAP3neo" 
     <a href="/ddbj/features.html#rep_origin">rep_origin</a>      <a href="/ddbj/location.html">572..1452</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="ColE1-derived plasmid replication origin" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">complement(1513..2373)</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="Amp"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="beta-lactamase"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#rep_origin">rep_origin</a>      <a href="/ddbj/location.html">2504..2959</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="phage f1 region" 
     <a href="/ddbj/features.html#regulatory">regulatory</a>      <a href="/ddbj/location.html">3290..3485</a>
                     /<a href="/ddbj/qualifiers.html#note">note=</a>"SV40 early promoter"
                     /<a href="/ddbj/qualifiers.html#regulatory_class">regulatory_class</a>="promoter"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">3596..4390</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="neo"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="neomycin phosphotransferase"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#regulatory">regulatory</a>      <a href="/ddbj/location.html">4788..4983</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="SV40 early promoter" 
                     /<a href="/ddbj/qualifiers.html#regulatory_class">regulatory_class</a>="promoter"
     <a href="/ddbj/features.html#regulatory">regulatory</a>      <a href="/ddbj/location.html">5188..5207</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="T7 promoter" 
                     /<a href="/ddbj/qualifiers.html#regulatory_class">regulatory_class</a>="promoter"
     <a href="/ddbj/features.html#regulatory">regulatory</a>      <a href="/ddbj/location.html">5302..5321</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="T3 promoter" 
                     /<a href="/ddbj/qualifiers.html#regulatory_class">regulatory_class</a>="promoter"
</pre>

### E05) synthetic construct

<pre>DEFINITION  Synthetic construct gene for Rai-chu 101, complete cds. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2223</a>
                     /<a href="/ddbj/qualifiers.html#focus">focus</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="other DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="synthetic construct" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">1..2223</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="Rai-chu 101"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="fusion protein, Ras and interacting protein 
                     chimeric unit 101"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="Rai-chu 101"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=11
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">724..1239</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>=other DNA""
                     /<a href="/ddbj/qualifiers.html#note">note</a>="derived from human H-Ras cDNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1258..1500</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>=other DNA""
                     /<a href="/ddbj/qualifiers.html#note">note</a>="derived from human Raf cDNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
</pre>

### E06.1) miRNA mature transcript

<pre>DEFINITION  Arabidopsis thaliana miR840 miRNA.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..21</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Arabidopsis thaliana"
     <a href="/ddbj/features.html#ncRNA">ncRNA</a>           <a href="/ddbj/location.html">1..21</a>
                     /<a href="/ddbj/qualifiers.html#ncRNA_class">ncRNA_class</a>="miRNA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="miR840"
</pre>

### E06.2) miRNA precursor transcript

<pre>DEFINITION  Arabidopsis thaliana miR840-843 polycistronic noncoding RNA.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..2223</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Arabidopsis thaliana"
     <a href="/ddbj/features.html#precursor_RNA">precursor_RNA</a>   <a href="/ddbj/location.html">1..1342</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="miR840-843 polycistronic noncoding RNA"
     <a href="/ddbj/features.html#ncRNA">ncRNA</a>           <a href="/ddbj/location.html">98..119</a>
                     /<a href="/ddbj/qualifiers.html#ncRNA_class">ncRNA_class</a>="miRNA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="miR840"
     <a href="/ddbj/features.html#ncRNA">ncRNA</a>           <a href="/ddbj/location.html">1177..1197</a>
                     /<a href="/ddbj/qualifiers.html#ncRNA_class">ncRNA_class</a>="miRNA"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="miR843" 
</pre>

## F: Variation

### F01) polymorphism and variation

[多型関連研究における同一配列の代表データ登録](/ddbj/represent.html)もご参照ください。

<pre>DEFINITION  Homo sapiens IGF1R mRNA for insulin-like growth factor I receptor,
            partial cds. 
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1000</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">&lt;1..&gt;1000</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=2
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="IGF1R"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="insulin-like growth factor I recep tor"
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#variation">variation</a>       <a href="/ddbj/location.html">100</a>
                     /<a href="/ddbj/qualifiers.html#note">note</a>="polymorphism"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="This substitution causes an amino acid 
                     substitution from Ala to Thr."
                     /<a href="/ddbj/qualifiers.html#compare">compare</a>="AB000000.1"
                     /<a href="/ddbj/qualifiers.html#replace">replace</a>="a" 
</pre>

### F02) candidates of polymorphism found by direct sequencing of diploid genome

<pre>
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..426</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
     <a href="/ddbj/features.html#variation">variation</a>       <a href="/ddbj/location.html">260</a>
                     /<a href="/ddbj/qualifiers.html#experiment">experiment</a>="heterozygous SNP detection from direct
                     sequencing"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="putative SNP, T/C"
     <a href="/ddbj/features.html#variation">variation</a>       <a href="/ddbj/location.html">342</a>
                     /<a href="/ddbj/qualifiers.html#experiment">experiment</a>="heterozygous SNP detection from direct
                     sequencing"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="putative SNP, T/C"
BASE COUNT          164 a           55 c           55 g          150 t
ORIGIN      
        1 gagccacatc aagatcacca tatttcagcg gatcatcagc tttctcccct actatagtat
       61 cctcagataa agagaccatt gagattatag acctagctaa gaaagattta gagaagctga
      121 aaagaaaaga aaagaagaag aaaaaaaggt agtgttataa aatcactttt atatgaatct
      181 ctattcttct cacttttaag gatattttaa tttgcagttg caatgagtat atataacctc
      241 atttttaaaa atgaaatgt<font color="#ff0000">y</font> atttaacata gattataatt atatattttt aaagatttat
      301 ctcttcctta tatgtaaaaa attaaattaa ttacaataat a<font color="#ff0000">y</font>ggtagtga attttattta
      361 gactatgata aggtaaaatt actattagaa attattttat tatttcttca actagctgcc
      421 tttgca
//
</pre>

## G: Sequencing gap

### G01) entry with unknown gaps

<pre>DEFINITION  Homo sapiens HLA-A gene for MHC class I antigen, partial cds,
            allele: HLA-A*2601V1.
FEATURES             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..1022</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#note">note</a>="HLA-A*2601V1/2402,B*4001/4002,DRB1*0901/1401,
                     TBC191371"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens" 
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">join(&lt;1..270,371..646,747..&gt;1022)</a>
                     /<a href="/ddbj/qualifiers.html#allele">allele</a>="HLA-A*2601V1"
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=3
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="HLA-A"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="MHC class I antigen"
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="--- omitted ---" 
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">1..270</a>
                     /<a href="/ddbj/qualifiers.html#allele">allele</a>="HLA-A*2601V1"
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="HLA-A"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=2 
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">271..370</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">371..646</a>
                     /<a href="/ddbj/qualifiers.html#allele">allele</a>="HLA-A*2601V1"
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="HLA-A"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=3 
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">647..746</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#exon">exon</a>            <a href="/ddbj/location.html">747..1022</a>
                     /<a href="/ddbj/qualifiers.html#allele">allele</a>="HLA-A*2601V1"
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="HLA-A"
                     /<a href="/ddbj/qualifiers.html#number">number</a>=4 
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
//</pre>




