---
layout: indexed_content
title: DDBJ 公開形式 Flat file
pathname: flat-file
category: flatfile
---

「DDBJ/EMBL-Bank/GenBank 国際塩基配列データベース」は、全世界の研究者が実験によって決定したDNA (または RNA)
の塩基配列データ <span class="red">\*</span> を、DDBJ/EMBL-Bank/GenBank 国際 DNA
データバンクが、三者間で定めたデータ構築規範に沿って収集・編集することにより構築されています。（<span class="red">\*</span>旧運用では, 論文に記載されていた塩基配列を取り込む journal scan 方式の塩基配列データ収集も実施していました。）

また、データベースの中には、日本の[Japan Patent Office (JPO)](//www.jpo.go.jp/index.html)、韓国の [Korean Intellectual Property Office (KIPO)](//www.kipo.go.kr/) 、欧州の [European Patent Office (EPO)](//www.epo.org/)、米国の [United States Patent and Trademark Office (USPTO)](https://www.uspto.gov/) が収集・処理した塩基配列データも含まれています。

塩基配列データベースは、データの単位である「エントリ」の集合として構成されています。 DDBJ に登録されたそれぞれのエントリは、DDBJ
の定めるフォーマットにしたがった「フラットファイル」 (flat file) の形式で公開されています。
フラットファイルには、塩基配列のほか、配列の登録者、関連文献、由来生物種、Feature 情報などが表示されています。 Feature 情報とは、その塩基配列のもつ生物学的特徴や遺伝子の機能、特性等に関する情報を記述したもので、記述形式は、 [The DDBJ/ENA/GenBank Feature Table Definition](/ddbj/full_index.html) (国際塩基配列データベースが定める記述形式) によって定められています。

## DDBJ フォーマットの例

<pre class="code flat-file"><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">HUM</a> <a id="ModificationDateA" href="#ModificationDateB">01-JUN-2009</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, partial cds.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    .
<a id="SourceA" href="#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
  JOURNAL   Unpublished (2009)
<a id="CommentA" href="#CommentB">COMMENT</a>     Human cDNA sequencing project.
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..450</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="12"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="GT200015"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="lambda gt11 human liver cDNA (GeneTech.
                     No.20)"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="12p13"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="liver"
     <a id="CDSA" href="#CDSB">CDS</a>             <a href="/ddbj/location.html">86..&gt;450</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="BAA12345.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          102 a          119 c          131 g           98 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 cccacgcgtc cggtcgcatc gcacttgtag ctctcgaccc ccgcatctca tccctcctct
       61 cgcttagttc agatcgaaat cgcaaatggc gaagattaag atcgggatca atgggttcgg
      121 gaggatcggg aggctcgtgg ccagggtggc cctgcagagc gacgacgtcg agctcgtcgc
      181 cgtcaacgac cccttcatca ccaccgacta catgacatac atgttcaagt atgacactgt
      241 gcacggccag tggaagcatc atgaggttaa ggtgaaggac tccaagaccc ttctcttcgg
      301 tgagaaggag gtcaccgtgt tcggctgcag gaaccctaag gagatcccat ggggtgagac
      361 tagcgctgag tttgttgtgg agtacactgg tgttttcact gacaaggaca aggccgttgc
      421 tcaacttaag ggtggtgcta agaaggtctg
<a id="EndA" href="#EndB">//</a></pre>

フラットファイルは登録者から提供される情報に基づいて、一定の形式に則って作成されています。
登録者の研究上の着眼点の違いなどにより、配列が類似している登録の場合でもフラットファイルに記載される内容は異なることがあります。
検索結果を参照される際にはご注意下さい。

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

<div id="Dblink">

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

<div id="CDS">

</div>

<div id="End">

</div>
