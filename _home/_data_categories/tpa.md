TPA (Third Party Data) は、DDBJ/ENA/GenBank、[Trace
Archive](//www.ncbi.nlm.nih.gov/Traces/trace.cgi)、[SRA](//www.ncbi.nlm.nih.gov/sra)
で構成される国際塩基配列データベース (INSDC) に既に登録されているエントリ
(これを[プライマリーエントリ](#definition_of_primary)と呼びます)
を元に、第三者がアセンブル (assemble)、もしくは、(再)アノテーションを行ったデータのコレクションです。
配列のアセンブルには、既存の[プライマリーエントリ](#definition_of_primary)の組み合わせのみで構成された場合と、新規に
TPA の登録者が実験的に決定した配列を混在させた場合とが存在します。INSDC
では、既報の[プライマリーエントリ](#definition_of_primary)に記載されている配列に関する研究を公開するための手段として
TPA 登録を受け入れています。

参考文献: [Cochrane,G. et al. (2006) OMICS,10(2):
105-113](//www.liebertonline.com/doi/abs/10.1089/omi.2006.10.105)

  - TPA におけるプライマリーエントリの定義  
    プライマリーエントリとは、当該配列データの登録者が実験的に配列決定を行ったデータとして、INSDC から取得可能なデータです。
    
    TPA データが登録された時点において、そのプライマリーエントリが非公開である場合もありますが、TPA データの公開時には、取得
    (閲覧) 可能な状態であることが必要です。

  - TPA 配列データ受け入れ規則  
    TPA は以下の４種類に分けて登録を受け付けます。  
    [TPA 登録可能な配列の分類](/ddbj/tpa-table-e.html#table)をご覧ください。
    
    <div class="news_post_container glossary">
    
    |                                                  |                                                                                                                                                               |
    | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | [TPA:experimental](/ddbj/tpa-table-e.html#exp)   | アセンブルされた配列、または、そのアノテーションを証明する根拠が生物学的な実験に基づいており、その内容が peer-reviewed journal に論文として記載され公開されていることを示します。                                                          |
    | [TPA:inferential](/ddbj/tpa-table-e.html#inf)    | アセンブルされた配列、そのアノテーションが生物学的な実験に基づかない解析(コンピューターでの解析など) により推測された内容であることを示します。アセンブルされた配列、または、そのアノテーションの推定根拠については peer-reviewed journal に論文として公開される必要があります。         |
    | [TPA:assembly](/ddbj/tpa-table-e.html#ass)       | TPA:assembly で示される配列では、計算機的な推測や実験的解析の結果のどちらであるかにかかわらず、配列の生成が peer-review の対象である必要があります。annotation は記載しても記載しなくてもどちらでもよく、アノテーション自体は peer-review の一部である必要はありません。 |
    | [TPA:specialist\_db](/ddbj/tpa-table-e.html#spe) | 認められたpeer-review出版物に報告があり、既存、かつ信頼のある public database から登録された配列で、INSDC 配列データを使用して構築された配列であることを示します。                                                            |
    

    </div>
    
    \[注\]2005年まで INSDC では、生物学的な実験の根拠がない場合は TPA
    として受け入れておりませんでした。2006年から、生物学的な実験根拠のない配列・アノテーションでも
    [TPA Submission Guidelines](/ddbj/tpa-table-e.html) に従い TPA
    として登録を受け入れる方針となりました。

  - 以下に該当する場合は TPA 登録を受け付けることができません。
    
      - リピート(繰り返し)領域のみで他の feature を含まないアノテーションの場合。
      - 遺伝子予測ツール (GenMark、tRNAscan、ORFfinder など)
        から予測されたアノテーションで、実験的な証明が全くなされていない場合。
        また、アノテーション結果が、論文の主要な内容ではない場合。
      - 生物学的実験に基づいた gene name もしくは product name
        が加えられていない、完全長ゲノム配列に代表されるような配列の場合。
    
    [こちらもご覧ください](/ddbj/tpa-table-e.html#nottpa)

  - TPA 登録における注意事項
    
      - 複数の生物種から得られた consensus sequences は、受け付けることができません。
      - TPA データの登録には、引用する[プライマリーエントリ](#definition_of_primary)の配列が既に
        INSDC の 'プライマリー(つまり TPA ではない)データ' として登録済である必要があります。
      - 登録予定の配列の中に、ご自身で配列決定を行った領域を含む場合には、先にその部分を[プライマリーエントリ](#edefinition_of_primary)として登録した後に、引用して
        TPA データ全長の登録を行なって下さい。
      - TPA データの公開には、アセンブルされた配列、または、アノテーションの根拠を証明する内容が、peer-reviewed
        journal に論文として公開されることが必須となります。
      - 引用した[プライマリーエントリ](#definition_of_primary)における配列の領域と、結果としてアセンブルされた配列の領域との対応付けのために、両者の位置情報が必要となります。

  - TPA とプライマリーエントリの配列アラインメントに関する規則
    
      - 引用元となるプライマリーエントリが存在しない領域は 50bp より長い範囲であってはなりません。
      - TPA とプライマリーエントリの配列に 5% より大きい不一致が存在しないようにして下さい。
      - 挿入、欠失、置換など、TPA の配列に含まれる上記の不一致な部位（5%
        以下）は引用元プライマリーエントリが存在しない領域、TPA
        の配列と引用元の配列が一致しない領域、双方を指します。
      - 上記は配列長と配列の類似度に適用されます。

  - DDBJ フラットファイルにおける TPA の特徴
    
      - [LOCUS](#LocusA) 行には、生物名に依存した taxonomic division
        が表示されますが、CON、または、TSA の場合もあります。
      - [DEFINITION](#DefinitionA) 行 の先頭 がTPA\_exp: (TPA:experimental
        の場合)、TPA\_inf: (TPA:inferential の場合)、TPA\_asm:
        (TPA:assembly の場合)、TPA: (TPA:specialist\_db の場合)、で始まります。
      - [KEYWORDS](#KeywordA) 行には次のいずれかが表示されます。
        <div class="news_post_container glossary">
        |                                                      |                                            |
        | ---------------------------------------------------- | ------------------------------------------ |
        | [TPA:experimental](/ddbj/tpa-table-e.html#exp) の場合   | Third Party Data; TPA; TPA:experimental.   |
        | [TPA:inferential](/ddbj/tpa-table-e.html#inf) の場合    | Third Party Data; TPA; TPA:inferential.    |
        | [TPA:assembly](/ddbj/tpa-table-e.html#ass) の場合       | Third Party Data; TPA; TPA:assembly.       |
        | [TPA:specialist\_db](/ddbj/tpa-table-e.html#spe) の場合 | Third Party Data; TPA; TPA:specialist\_db. |
        </div>
      - [PRIMARY](#PrimaryA) ブロックには、引用されたプライマリーエントリの配列領域と、これに対応する TPA
        配列の領域が記載されます。

## TPA フラットファイルの例

``` code flat-file
LOCUS       BR000000              2000 bp    mRNA    linear   HUM 17-SEP-2006
DEFINITION  TPA_exp: Homo sapiens GAPD gene for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
ACCESSION   BR000000
VERSION     BR000000.1
KEYWORDS    Third Party Data; TPA; TPA:experimental.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 2000)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-NOV-2005) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase of human
  JOURNAL   TPA Biol Chem 10, 50-59 (2006)
COMMENT             
PRIMARY     TPA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-1000              ZZ000001.1         50001-51000
            101-200             ZZ000003.1         1-100
            501-600             ZZ000003.1         101-200
            901-2000            ZZ000002.1         25001-26100         c
            1451-1550           ZZ000003.1         201-300
FEATURES             Location/Qualifiers
     source          1..2000 
                     /db_xref="taxon:9606"
                     /mol_type="genomic DNA"
                     /organism="Homo sapiens"
     CDS             join(153..200,501..600,1451..1500) 
                     /codon_start=1
                     /gene="GAPD"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /protein_id="FAA00000.1"
                     /transl_table=1
                     /translation="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     NNSQLNLIVDLIYNFYINWSK"
BASE COUNT          522 a          493 c          524 g          461 t
ORIGIN
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of sequence is omitted --
        :
//
```

## FIELD COMMENTS

<div id="Locus">

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

<div id="Reference1">

</div>

<div id="Reference2">

</div>

<div id="Comment">

</div>

<div id="Primary">

</div>

<div id="Features">

</div>

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
