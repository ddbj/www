---
layout: indexed_content
title: ENV
pathname: env
category: datacategories
---

DDBJ/ENA/GenBank の ENV division は 環境サンプル (environmental sample) 由来の配列と
その付帯情報からなるデータです。  
よく混同されますが、<span class="red">**環境サンプルとは「野生型」という意味ではありません**</span>。  
環境サンプルとは、生物種が同定できない大量の環境DNAサンプルに由来した配列です。PCR、DGGE、あるいは、その他の方法で直接、分子を単離した場合などが該当します。  
環境サンプルには以下を含みますが、下記で全てを網羅している訳ではありません。

  - 土壌、海水などから、直接、分子を単離したサンプル
  - 臨床系サンプル、腸の内容物、表皮上、その他、特定宿主に関連すると推測される種を同定できない生物
  - 環境サンプル由来の混合培養系

ただし、特定宿主から確実に回収できる内部共生生物、多くの cyanobacteria
のように容易に同定可能であるが培養ができない生物、純粋培養は不可能でも罹患植物から確実に回収できる
phytoplasmas といった対象は環境サンプルとは扱いません。

環境サンプルの登録における注意事項
:   
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

<pre><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">ENV</a> <a id="ModificationDateA" href="#ModificationDateB">16-DEC-2012</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Uncultured Acetobacter sp. gene for 16S ribosomal RNA, partial
            sequence, clone: M12-34.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    ENV.
<a id="SourceA" href="#SourceB">SOURCE</a>      uncultured Acetobacter sp.
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  uncultured Acetobacter sp.
            Bacteria; Proteobacteria; Alphaproteobacteria; Rhodospirillales;
            Acetobacteraceae; Acetobacter; environmental samples.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (15-DEC-2012) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Phylogenetic Profile of Sediment in Japan
  JOURNAL   Env Biol 12, 34-36 (2013)
<a id="CommentA" href="#CommentB">COMMENT</a>
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..450</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="M12-34"
                     /<a href="/ddbj/qualifiers.html#country">country</a>="Japan:Osaka"
                     /db_xref="taxon:114714"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured Acetobacter sp."
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..&gt;450</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="16S ribosomal RNA"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          199 a          223 c          198 g           230 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 agtcgcacga aggtttcggc cttagtggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></pre>