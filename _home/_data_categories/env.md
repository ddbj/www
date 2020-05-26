DDBJ/ENA/GenBank の ENV division は 環境サンプル (environmental sample) 由来の配列と
その付帯情報からなるデータです。  
よく混同されますが、<span class="red bold">環境サンプルとは「野生型」という意味ではありません</span>。  
環境サンプルとは、生物種が同定できない大量の環境DNAサンプルに由来した配列です。PCR、DGGE、あるいは、その他の方法で直接、分子を単離した場合などが該当します。  
環境サンプルには以下を含みますが、下記で全てを網羅している訳ではありません。

  - 土壌、海水などから、直接、分子を単離したサンプル
  - 臨床系サンプル、腸の内容物、表皮上、その他、特定宿主に関連すると推測される種を同定できない生物
  - 環境サンプル由来の混合培養系

ただし、特定宿主から確実に回収できる内部共生生物、多くの cyanobacteria
のように容易に同定可能であるが培養ができない生物、純粋培養は不可能でも罹患植物から確実に回収できる
phytoplasmas といった対象は環境サンプルとは扱いません。

  - 環境サンプルの登録における注意事項
    
      - 例外もありますが、原則、判明している範囲での lineage に "uncultured" を冠して「生物名」を記載します。
        詳しくは、[Organism Qualifier について 3.
        環境サンプル](/ddbj/organism.html#env)を ご参照ください。
      - [source](/ddbj/features.html#source) feature に
        [environmental\_sample](/ddbj/qualifiers.html#environmental_sample)
        qualifier の記載が必須です。
      - [source](/ddbj/features.html#source) feature に
        [isolation\_source](/ddbj/qualifiers.html#isolation_source)
        qualifier の記載してサンプルの由来の概略を示す必要があります。
      - [clone](/ddbj/qualifiers.html#clone) あるいは
        [isolate](/ddbj/qualifiers.html#isolate) qualifier に識別子の記載が必要です。
      - [strain](/ddbj/qualifiers.html#strain) qualifier を記載することはできません。

## DDBJ フォーマットの例

環境サンプル(ENV)の特徴

  - [LOCUS](#LocusB) 行に表示される DIVISION は、"ENV" です。
  - [KEYWORDS](#KeywordsB) 行には "ENV" が表示されます。
  - 例外もありますが、多くの場合、[ORGANISM](#OrganismB) 行の lineage には "environmental
    samples" が表示されます。

<!-- end list -->

``` code flat-file
LOCUS       AB000000              450 bp    mRNA    linear   ENV 16-DEC-2012
DEFINITION  Uncultured Acetobacter sp. gene for 16S ribosomal RNA, partial
            sequence, clone: M12-34.
ACCESSION   AB000000
VERSION     AB000000.1
KEYWORDS    ENV.
SOURCE      uncultured Acetobacter sp.
  ORGANISM  uncultured Acetobacter sp.
            Bacteria; Proteobacteria; Alphaproteobacteria; Rhodospirillales;
            Acetobacteraceae; Acetobacter; environmental samples.
REFERENCE   1  (bases 1 to 450)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (15-DEC-2012) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Phylogenetic Profile of Sediment in Japan
  JOURNAL   Env Biol 12, 34-36 (2013)
COMMENT
FEATURES             Location/Qualifiers
     source          1..450
                     /clone="M12-34"
                     /country="Japan:Osaka"
                     /db_xref="taxon:114714"
                     /environmental_sample
                     /isolation_source="PCR-derived sequence from sediment"
                     /mol_type="genomic DNA"
                     /organism="uncultured Acetobacter sp."
     rRNA            <1..>450
                     /product="16S ribosomal RNA"
BASE COUNT          199 a          223 c          198 g           230 t
ORIGIN
        1 agtcgcacga aggtttcggc cttagtggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
//
```

## FIELD COMMENTS

<div id="Locus">

</div>

<div id="LocusName">

</div>

<div id="SequenceLength">

</div>

<div id="MoleculeType">

</div>

<div id="MoleculeForm">

</div>

<div id="Division">

</div>

<div id="ModificationDate">

</div>

<div id="Definition">

</div>

<div id="Accession">

</div>

<div id="Version">

</div>

<div id="Keywords">

</div>

<div id="Source">

</div>

<div id="Organism">

</div>

<div id="Reference1">

</div>

<div id="Authors">

</div>

<div id="Title">

</div>

<div id="Journal">

</div>

<div id="Reference2">

</div>

<div id="Comment">

</div>

<div id="Features">

</div>

<div id="FeaturesSource">

</div>

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
