---
layout: indexed_content
title: ClustalW 
category: services
---

ClustalW is a general purpose multiple sequence alignment program for
DNA or proteins.  
DDBJ provides both the latest version and the DDBJ original version
(Version 1.83, Modified by Dr. Kirill Kryukov).

<div class="section chapter">

## Version

Select "2.1" (Latest version) or "1.83" (DDBJ original, modified by Dr.
Kirill Kryukov). Default is **Latest version**.  
In the "1.83", you can specify the detailed option parameters for Tree
calculation and Boostrap.

</div>

<div class="section chapter">

## Sequences

<div class="section section">

### Sequence Type

Select Protein or DNA to align. Default value is **Protein**.

</div>

<div class="section section">

### Sequence Input

Enter or paste a set of sequences, or upload a file in any format
(NBRF-PIR，EMBL-SWISSPROT, Pearson (Fasta), Clustal (\*.aln), GCG-MSF
(Pileup), GCG9-RSF, and GDE).

  - [Available sequence
    formats](//www.ebi.ac.uk/Tools/msa/clustalw2/help/index.html#step1)  
    NBRF-PIR
    
    EMBL-SWISSPROT
    
    Pearson (Fasta)
    
    Clustal (\*.aln)
    
    GCG-MSF (Pileup)
    
    GCG9-RSF
    
    GDE

  - Example (FASTA-Pearson format)
    
    ``` code
     
    >my_query_sequence_1
    CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
    GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
    GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
    >my_query_sequence_2
    GGCCAGGGCACCCAGTCTGAGAACAGCTGCACCCGCTTCCCAGGCAACCTGCCTCACATG
    CTTCGAGACCTCCGAGATGCCTTCAGCAGAGTGAAGACTTTCTTTCAAATGAAGGATCAG
    CTGGACAACATATTGTTAAAGGAGTCCTTGCTGGAGGACTTTAAG
    >my_query_sequence_3
    ATGGGTCTCACCTCCCAACTGCTTCCCCCTCTGTTCTTCCTGCTAGCATGTGCCGGCAAC
    TTTGCCCACGGACACAACTGCCATATCGCCTTACGGGAGATCATCGAAACTCTGAACAGC
    CTCACAGAGCAGAAGACTCTGTGCACCAAGTTGACCATAACGGAC
          
    ```
    
    Each sequence needs the unique identifier, which starts from the
    character following after "\>" and ends at the first space. If you
    do not use any space and/or tab, whole line is defined as the
    identifier.  
    The duplicate identifier causes the error.

</div>

</div>

<div class="section chapter">

## Pairwise Alignment Options

<div class="section section">

### Alignment Type

The alignment method used to perform the pairwise alignments used to
generate the guide tree. Default value is **slow**.

<div class="main_table format">

| Type |                                                                        |
| ---- | ---------------------------------------------------------------------- |
| slow | fine for short sequences but will be very SLOW for many long sequences |
| fast | FAST, but approximate                                                  |

</div>

</div>

<div class="section section">

### Slow/Fast Pairwise Alignment Options

  - DNA /Protein Weight Matrix  
    Slow pairwise alignment DNA/Protein sequence comparison matrix
    series used to score alignment.
    <div class="main_table format">
    Protein Weight Matrix
    </div>
    <div class="main_table format">
    DNA Weight Matrix (Default value is IUB)
    </div>
  - GAP OPEN  
    Gap opening penalty for Slow Pairwise Alignment. Default value is
    **10.0**.
  - GAP EXTENSION  
    Gap extension penalty for Slow Pairwise Alignment. Default value is
    **0.1**.
  - KTUP (WORD SIZE)  
    Size of exactly matching fragment that is used. Increase for speed,
    decrease for sensitivity. Default value is **1**.
  - WINDOW LENGTH  
    Number of diagonals around each of the 'best' diagonals that will be
    used. Decrease for speed; increase for sensitivity. Default value is
    **5**.
  - SCORE TYPE  
    Score type to output. Default value is **percent**.
  - TOPDIAG  
    Number of k-tuple matches on each diagonal. Decrease for speed;
    increase for sensitivity. Default value is **5**.
  - PAIRGAP  
    Fast pairwise alignment gap penalty for each gap created. Default
    value is **3**.

</div>

</div>

<div class="section chapter">

## Multiple Sequence Alignment Options

<div class="section section">

### Alignment Options

  - DNA /Protein Weight Matrix  
    塩基置換行列表/アミノ酸置換行列表を指定します。デフォルトは Protein の場合は **Gonnet** ， DNA の場合は
    **IUB** です。
    <div class="main_table format">
    Protein Weight Matrix
    </div>
    <div class="main_table format">
    DNA Weight Matrix
    </div>
  - GAP OPEN  
    Multiple alignment gap opening penalty. Default value is **10.0**.
  - GAP EXTENSION  
    Multiple alignment gap extension penalty. Default value is **0.2**.
  - GAP DISTANCES  
    Multiple alignment gaps that are closer together than this distance
    are penalised. Default value is **5**.
  - NO END GAPS  
    Multiple alignment disable the gap seperation penalty when scoring
    gaps the ends of the alignment. Default value is **no**.
    <div class="main_table format">
    | Type | Description |
    | ---- | ----------- |
    | no   | false       |
    | yes  | true        |
    </div>
  - ITERATION  
    This can be used to improve the final alignment or improve the
    alignment at each stage of the progressive alignment. Default value
    is **none**.
    <div class="main_table format">
    | Type      | Description                                 |
    | --------- | ------------------------------------------- |
    | none      | No iteration                                |
    | tree      | Iteration at each step of alignment process |
    | alignment | Iteration only on final alignment           |
    </div>
  - NUMITER  
    Maximum number of iterations to perform. Default value is **1**.
  - CLUSTERING  
    Clustering type. Default value is **NJ**.
    <div class="main_table format">
    | Type  | Description                                              |
    | ----- | -------------------------------------------------------- |
    | NJ    | Neighbour-joining (Saitou and Nei 1987) method           |
    | UPGMA | Unweighted Pair-Group Method with Arithmatic mean method |
    </div>

</div>

<div class="section section">

### Output Options

  - Format  
    Format for generated multiple sequence alignment. Default value is
    **Aln w/numbers**.
  - Order  
    Control the order of the sequences in the output alignments. Default
    value is **aligned**.
    <div class="main_table format">
    | Type    | Description                                                                                    |
    | ------- | ---------------------------------------------------------------------------------------------- |
    | aligned | Corresponds to the order in which the sequences were aligned (from the guide tree-dendrogram). |
    | input   | Same order as the input sequences.                                                             |
    </div>

</div>

</div>

<div class="section chapter">

## DDBJ Original version (Version 1.83, Modified by Dr. Kirill Kryukov) options

<div class="section section">

### Tree calculation/BOOTSTRAP options

  - Distance  
    Specify the correction format. Default value is **Kimura**. Only
    Kimura and p-distance can be specified for PROTEIN. The options
    marked <span class="red">＊</span> are DDBJ's original option
    formats.

  - [Method of phylogenetic tree](#tree)
    
    <div class="main_table format">
    
    Method
    
    </div>

  - TOSSGAPS  
    Specify ignore positions with gaps. Default is **ON**.

  - OUTPUTTREE  
    Specify the output format (options are phylip, nj and plylip
    distance). Default is **phylip**.

  - COUNT  
    Specify number of bootstraps. Default:**1000** Range:1-10000

  - SEED  
    Specify seed number for bootstrap. Defalut:**111** Range:1-1000

  - Method of phylogenetic tree  
    Methods for constructing the phylogenetic tree using the nucleotide
    or amino acid sequences may largely be classified into the
    distance-matrix methods and the character-state methods. In the
    distance-matrix method, the distance matrix, which consists of
    evolutionary distances (number of nucleotide or amino acid
    substitutions) between all possible pairs of sequences analyzed, is
    generated, and the phylogenetic tree fittest to the matrix is
    chosen. On the other hand, in the character-state method, the
    sequences are compared directly, and the phylogenetic tree fittest
    to the assumed pattern of nucleotide or amino acid substitution is
    chosen.
    
    In CLUSTALW, the phylogenetic tree is constructed by using the
    neighbor-joining (NJ) method, which belongs to the distance-matrix
    method. When the nucleotide sequences are analyzed, the p distance
    method, Kimura method, Tamura method, Tajima-Nei method,
    Gojobori-Ishii-Nei method, Tamura-Nei method, and so on, are
    available for estimating the number of nucleotide substitutions
    between sequences. These methods are different in the pattern
    (model) of nucleotide substitution assumed for estimating the
    evolutionary distance.
    
    Generally, the bases T (U) and C have a pyrimidine, and A and G have
    a purine in their chemical structure, and the physicochemical
    properties are similar within each group. In fact, the rates of
    nucleotide substitution between T and C and between A and G
    (transitions) are empirically known to be greater than those of the
    other types of substitutions (transversions). In addition, since the
    equilibrium frequencies of T, C, A, and G are usually different in a
    genome, the rate of nucleotide substitution appears to be dependent
    on the frequency of the base to which the original base is
    substituting. Another mechanisms are also considered to make the
    rate of each nucleotide substitution (T -\> C, A -\> G, etc.)
    different.
    
    These arguments suggest that assuming complex patterns of nucleotide
    substitution allows for accurate estimation of the numbers of
    nucleotide substitutions. However, the more complex models contain a
    greater number of parameters to be estimated, and the variances
    (standard errors) of the estimates become larger as the number of
    parameters increases. Since the parameter values are estimated from
    the sequence data analyzed, the accuracy of the estimates depends on
    the number of sequences, sequence length, and sequence divergence,
    etc. Therefore, the pattern of nucleotide substitution suitable for
    the analysis of sequences depends on the sequence data analyzed, and
    some methods are available for finding the fittest model for given
    sequence data.
    
    In CLUSTALW, the default method used for estimating the number of
    nucleotide substitutions is the Kimura method, because this method
    is one of the most widely used methods. However, if the fittest
    model to the sequence data analyzed is different from the Kimura
    model, it is possible that incorrect results are obtained. In such
    cases, it may be useful to try another models in the analysis.
    
    Similarly, the p distance method and Kimura method are available for
    estimating the number of amino acid substitutions between sequences
    in CLUSTALW. (Here the Kimura method for estimating the number of
    amino acid substitutions is totally different from the Kimura method
    for estimating the number of nucleotide substitutions.) The default
    method is the Kimura method, but the p distance method may also be
    useful for some data.

</div>

</div>

<div class="section chapter">

## How to see the result screen

<div class="section section">

### ClustalW analysis result

  - (１) Result  
    ![解析結果](/images/help/clustalw_01-e.gif)
  - (２) Multiple Alignment  
    ![Multiple Alignment の結果](/images/help/clustalw_02-e.gif)
  - (３) Guide Tree  
    ![Guide Tree](/images/help/clustalw_03-e.gif)
  - (４) Bootstrap analysis  
    ![BOOTSTRAP 計算結果](/images/help/clustalw_04-e.gif)
    **(Note)** Since April 2012, in the ClustalW ver.2.1, BOOTSTRAP is
    calculated automatically and ".phb" download file is placed, except
    for the following combination of \[FORMAT\] and \[Clustering\]
    options.
    <div class="main_table format">
    | \[FORAMT\] | \[CLUSTERING\] |
    | ---------- | -------------- |
    | PHYLIP     | NJ             |
    | NEXUS      | NJ             |
    | PHYLIP     | UPGMA          |
    | NEXUS      | UPGMA          |
    </div>
  - (5) Phylogenetic Tree Construction  
    Please use phylogenetic tree visualization program (e.g. TreeView X,
    MEGA etc.) to construct a phylogenetic tree by using the output
    file.

</div>

<div class="section section">

### How to view the results after closing the window

Using the Request ID, ClustalW analysis result is available by the
following URL.  
Request ID is shown in the screen after submitting the query.  
Please note that whoever knows Request ID can view the result.

//clustalw.ddbj.nig.ac.jp/cgi-bin/clustalwr.cgi?id=**Request
ID**\&output=aln1

</div>

</div>

<div class="section chapter">

## About ClustalW

This program is : ClustalW2.1

References

  - Larkin MA, Blackshields G, Brown NP, Chenna R, McGettigan PA,
    McWilliam H, Valentin F, Wallace IM, Wilm A, Lopez R, Thompson JD,
    Gibson TJ, Higgins DG. (2007). Clustal W and Clustal X version 2.0.
    Bioinformatics, 23, 2947-2948.
  - Chenna R, Sugawara H, Koike T, Lopez R, Gibson TJ, Higgins DG,
    Thompson JD. (2003) Multiple sequence alignment with the Clustal
    series of programs. Nucleic Acids Res. 31(13):3497-500.
  - Thompson JD, Higgins DG, Gibson TJ. (1994) CLUSTAL W: improving the
    sensitivity of progressive multiple sequence alignment through
    sequence weighting, position-specific gap penalties and weight
    matrix choice. Nucleic Acids Res. 22(22):4673-80.

</div>
