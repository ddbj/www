---
layout: indexed_content
title: DDBJ Data Analysis Challenge
pathname: training-ddbj-challenge-e
category: activities
lang: en
---

"DDBJ Data Analysis Challenge" is a machine learning competition using
"'International Nucleotide Sequence Database' data", which is one of the
life science big data provided by DDBJ. Participants need to submit
their generated machine learning models to a collaborative website,
[UnivOfBigData](http://universityofbigdata.net/?lang=en). Even college
students and/or researchers outside of life science field, can get an
opportunity of studying "Machine Learning and Data Mining", through this
Challenge. And, to join this Challenge more easily, DDBJ provides [NIG
Supercomputer System](https://sc.ddbj.nig.ac.jp/en) as your computer
resources.

## DDBJ Data Analysis Challenge 2016 <a name="2016"></a>

|  Date  |  Content  |
| ---- | ---- |
|  Jun 27, 2016	  |  Start Accepting Applications:<br/>NIG Supercomputer System application<br/>NIG Supercomputer System OSS Installation request  |
|  Jul 6, 2016	  |  Start Date  |
|  Aug 21, 2016	  |  Deadline for Applications:<br/>NIG Supercomputer System application<br/>NIG Supercomputer System OSS Installation request  |
|  Aug 31, 2016  |  End Date  |
|  Sep 30, 2016  |  Result  |

### Challenge Task <a name="task-2016"></a>

DNA Data Bank of Japan (DDBJ) supports a big data resource called by
[DDBJ Sequence Read Archive (DDBJ SRA)](/dra/index.html), which contains
DNA sequences genearated from high-throughput DNA sequencers. The
secondary analytical database, ChIP-Atlas database (Dr.Oki of Kyushu
Univ.) provides the annotation data of chromatin feature regions on
genome sequences.

At this challenge task, please predict whether genomic regions
corresponding to input DNA sequences includes chromatin feature regions.
Chromatin feature region is related to on-off function of gene
expression, and corresponds to peak regions on a genome sequence of the
ChIP-Atlas database.

Challenge's target species is a plant. The number of conditions for the
target plant is often over 100. The number of conditions in the
challenge is reduced and composed of eight conditions for saving time of
try and error on data modelling.

\------------------------------------  
Input training data: 60,000 DNA sequence  
Input test data: 10,000 DNA sequence  
Output training data: 8 conditions correct answer sets  
\-------------------------------------

\[Input\]  
One input sequence is composed of 200 bases, that is a ACGT sequence
fragment with 200 length,  
where the sequence is encoded as 01 code \[Example: AATGC ... =
10001000000100100100 ...\] so that  
the length of a sequence is 800 digits.  
Corresponding code: A = 1000, C = 0100, G = 0010, T = 0001, Other
exceptions = 0000

\[Output\]  
Output correct answer sets of 8 conditions is also encoded as 01 code.  
True answer is one, which means that the input DNA sequence contains
chromatin feature regions.  
Likewise zero is false answer so that it does not include the chromatin
feature region.

\[Subject\]  
On the submit stage, please submit the probability of true prediction
with 10,000 rows (test axis) and 8 columns (condition axis) in BigData
University website.

### Award <a name="winners-2016"></a>

|  1st Prize of DDBJ Challenge Awards 2016  |  Information and Mathematical Science and Bioinformatics Co., Ltd.<br/>MOCHIZUKI Masahiro  |
|  2nd Prize of DDBJ Challenge Awards 2016  |  RIKEN ACCC Bioinformatics Research Unit<br/>MATSUMOTO Hirotaka(representative*), OZAKI Haruka(*)<br/>*They participated in this Challenge as a team.  |
|  3rd Prize of DDBJ Challenge Awards 2016  |  BITS Co., Ltd.<br/>OKAYAMA Toshitsugu  |
|  Student Prize of DDBJ Challenge Awards 2016  |  Master's Degree Program 1, Graduate School of Information Science and Technology, The University of Tokyo<br/>KATO Takuya  |

#### Result <a name="result-2016"></a>

|  DDBJ<br>Challenge<br>Award  |  AUC  |  Model Design  |  Tool Version  |
| ---- | ---- | ---- | ---- |
|  1st Prize  |  0.94564  |  *2 Classifiers(Extremely Randomized Trees, CNN)<br/>*Ensemble Learning(Stacking)<br/>*External Data(Genomic Position, Gene Structure Annotation)  |  python=3.5<br/>scikit-learn=0.17.1<br/>chainer=1.10.0  |
|  2nd Prize  |  0.89859  |  *2 Classifiers(CNN, Product of Genomic Distance Decay Parameter and Nearest Training Data Output<br>*Ensemble Learning(Averaged)<br/>*External Data(Genomic Position)  |  julia=0.4.6<br/>python=2.7.10<br/>skflow(tensorflow=0.8.0)  |
|  3rd Prize  |  0.85428  |  *7 Classifiers(<span class="st">Naive Bayes for Multivariate Bernoulli Models</span>, Logistic Regression, Random Forest, Gradient Boosting, <span class="st">Extremely Randomized Trees</span>, eXtreme Gradient Boosting, CNN<br>*Ensemble Learning (Stacking)  |  python=2.7.11<br/>numpy=1.10.4<br/>scikit-learn=0.17<br/>chainer=1.11.0<br/>xgboost=0.4a30 |
|  Student Prize  |  0.84318  |  *3 Classifiers(LeNet like CNN, DeepBind like CNN, Variable filter DeepBind like CNN)<br/>*Ensemble Learning(Soft Voting)  |  python=2.7<br/>lasagne=0.2.dev1  |

#### Citation <a name="citation"></a>

  - <span class="title">[DDBJ Data Analysis Challenge: a machine
    learning competition to predict Arabidopsis chromatin feature
    annotations from DNA
    sequences.](https://www.ncbi.nlm.nih.gov/pubmed/32213716)</span>
    <span class="authors">Kaminuma E, Baba Y, Mochizuki M, Matsumoto H,
    Ozaki H, Okayama T, Kato T, Oki S, Fujisawa T, Nakamura Y et
    al</span> <span class="pub-info"> <span class="journal">Genes Genet
    Syst</span> <span class="bib-info">2020 Mar 26;():.</span>
    <span class="pubmed-id">Pubmed:
    [32213716](https://www.ncbi.nlm.nih.gov/pubmed/32213716)</span>
    </span>

## DDBJ Challenge Committee <a name="committee"></a>

  - DDBJ Challenge Committee  
    Eli Kaminuma, PhD : Center for Information Biology, National
    Institute of Genetics, Assistant Professor
    Hisashi Kashima, PhD : Department of Intelligence Science and
    Technology, Kyoto University, Professor
    Toshihisa Takagi, PhD : Center for Information Biology, National
    Institute of Genetics, Professor

DDBJ Data Analysis Challenge has been approved ethical review by NIG
Institutional Review Board (IRB).
