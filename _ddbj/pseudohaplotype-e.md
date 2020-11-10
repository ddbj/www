---
layout: indexed_content
title: Pseudohaplotype
pathname: pseudohaplotype-e
category: ddbj
lang: en
---

Historically, whole-genome sequencing generated a single consensus sequence without distinguishing between alleles on homologous chromosomes. Long-read sequencing technologies can identify haploid chromosomes (called “pseudohaplotype” in INSDC). Because two genome sequences are produced from single sample in pseudohaplotype sequencing, INSDC establishes the guideline for pseudohaplotype sequence submission.

## pseudohaplotype <a name="pseudohaplotype"></a>

This page describes a typical case of the pseudohaplotype sequence submission. To distinguish pseudohaplotype assemblies, name one of the assemblies as “Principal” and another as “Alternate”. There is no absolute criteria, however, please name them based on their sequence length or sequencing accuracy. Because each pseudohaplotype assembly is derived from the same sample, both assemblies share the same BioSample. Because INSDC manages a genome assembly by unique combination of BioProject and BioSample, create separate BioProject for each principal and alternate pseudohaplotype to make the combination unique. Create an umbrella BioProject to group these projects.

If the raw DRA sequencing data contain both pseudohaplotypes, create a BioProject for DRA apart from those for assemblies. If the DRA data are derived from the same sample for the assemblies, use the same BioSample.

{::nomarkdown}
{% include image.html url="submission/pseudohaplotype.jpg" caption="Pseudohaplotype data submission" class="w600" %}
{:/}

### BioProject <a name="bioproject"></a>

Create separate BioProject for each principal and alternate pseudohaplotype and an umbrella BioProject to group these projects.

  - BioProject 1: Principal
      - Add phasing information in the title. For example, Principal
        pseudohaplotype or Primary haplotype.
  - BioProject 2: Alternate
      - Add phasing information in the title. For example, Alternate
        pseudohaplotype or Alternate haplotype.
  - Umbrella BioProject
      - For grouping BioProject 1, 2 and the other related BioProjects
        (BioProject 3 for DRA in the figure).

### BioSample <a name="biosample"></a>

Because the sample is shared by pseudohaplotypes, create single BioSample.

  - Select [MIGS](/biosample/submission-e.html#Genomic_Sequences_Sample)
    package.
  - Create a common BioSample for principal and alternate
    pseudohaplotype.
  - If you add gene annotations to the pseudohaplotype sequences, enter
    a [locus tag prefix](/ddbj/locus_tag-e.html) you want to use for the
    principal and the alternate pseudohaplotype in the
    locus\_tag\_prefix attribute. The locus tag prefix is shared by the
    principal and the alternate pseudohaplotypes, loci can be
    distinguished by tags, for example, A1C\_p00001 (principal) and
    A1C\_a00001 (alternate).

### DDBJ <a name="ddbj"></a>

Submit the principal and the alternate pseudohaplotype sequences.

  - Principal pseudohaplotype
      - Reference the BioProject 1 (Principal) in
        [DBLINK](”/ddbj/file-format-e.html#dblink”).
      - Add the pre-defined comment in
        [ST\_COMMENT](”/ddbj/file-format-e.html#comment”).  
        Genome-Assembly-Data ST\_COMMENT: Diploid :: Principal
        Pseudohaplotype
  - Alternate pseudohaplotype
      - Reference the BioProject 2 (Alternate) in
        [DBLINK](”/ddbj/file-format-e.html#dblink”).
      - Add the pre-defined comment in
        [ST\_COMMENT](”/ddbj/file-format-e.html#comment”).  
        Genome-Assembly-Data ST\_COMMENT: Diploid :: Alternate
        Pseudohaplotype

### Real-world examples <a name="real-examples"></a>

#### Common <a name="common"></a>

  - BioProject: [PRJDB10054
    (Umbrella)](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10054)
  - BioSample:
    [SAMD00229903](https://www.ncbi.nlm.nih.gov/biosample/SAMD00229903)

#### Principal pseudohaplotype <a name="principal"></a>

  - BioProject:
    [PRJDB10055](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10055)
  - DDBJ:
    [BLYA01000001-BLYA01003780](https://www.ncbi.nlm.nih.gov/nuccore/BLYA00000000)

#### Alternate pseudohaplotype <a name="alternate"></a>

  - BioProject:
    [PRJDB10056](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10056)
  - DDBJ:
    [BLYB01000001-BLYB01003780](https://www.ncbi.nlm.nih.gov/nuccore/BLYB00000000)

#### DRA <a name="dra"></a>

  - BioProject:
    [PRJDB9979](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB9979)
  - DRA: [DRX222432-DRX222163,
    DRR231909-DRR231923](https://www.ncbi.nlm.nih.gov/sra?term=DRP006217)