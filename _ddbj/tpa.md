---
layout: tabbed_indexed_content
title: TPA
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
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
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: WGS
    url: /ddbj/wgs.html
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
---

TPA (Third Party Data) は、DDBJ/ENA/GenBank、[Trace
Archive](//www.ncbi.nlm.nih.gov/Traces/trace.cgi)、[SRA](//www.ncbi.nlm.nih.gov/sra)
で構成される国際塩基配列データベース (INSDC) に既に登録されているエントリ
(これをプライマリーエントリと呼びます)
を元に、第三者がアセンブル (assemble)、もしくは、(再)アノテーションを行ったデータのコレクションです。
配列のアセンブルには、既存のプライマリーエントリの組み合わせのみで構成された場合と、新規に
TPA の登録者が実験的に決定した配列を混在させた場合とが存在します。INSDC
では、既報のプライマリーエントリに記載されている配列に関する研究を公開するための手段として
TPA 登録を受け入れています。

参考文献: [Cochrane,G. et al. (2006) OMICS,10(2):
105-113](//www.liebertonline.com/doi/abs/10.1089/omi.2006.10.105)

TPA におけるプライマリーエントリの定義  
: プライマリーエントリとは、当該配列データの登録者が実験的に配列決定を行ったデータとして、INSDC から取得可能なデータです。
: TPA データが登録された時点において、そのプライマリーエントリが非公開である場合もありますが、TPA データの公開時には、取得 (閲覧) 可能な状態であることが必要です。

TPA 配列データ受け入れ規則  
: TPA は以下の４種類に分けて登録を受け付けます。<br>[TPA 登録可能な配列の分類](/ddbj/tpa-table-e.html#table)をご覧ください。
:        
  |  [TPA:experimental](/ddbj/tpa-table-e.html#exp)  |  アセンブルされた配列、または、そのアノテーションを証明する根拠が生物学的な実験に基づいており、その内容が peer-reviewed journal に論文として記載され公開されていることを示します。  |
  |  [TPA:inferential](/ddbj/tpa-table-e.html#inf)  |  アセンブルされた配列、そのアノテーションが生物学的な実験に基づかない解析(コンピューターでの解析など) により推測された内容であることを示します。アセンブルされた配列、または、そのアノテーションの推定根拠については peer-reviewed journal に論文として公開される必要があります。  |
  |  [TPA:assembly](/ddbj/tpa-table-e.html#ass)  |  TPA:assembly で示される配列では、計算機的な推測や実験的解析の結果のどちらであるかにかかわらず、配列の生成が peer-review の対象である必要があります。annotation は記載しても記載しなくてもどちらでもよく、アノテーション自体は peer-review の一部である必要はありません。  |
  |  [TPA:specialist\_db](/ddbj/tpa-table-e.html#spe)  |  認められたpeer-review出版物に報告があり、既存、かつ信頼のある public database から登録された配列で、INSDC 配列データを使用して構築された配列であることを示します。  |
:       
  \[注\]2005年まで INSDC では、生物学的な実験の根拠がない場合は TPA として受け入れておりませんでした。2006年から、生物学的な実験根拠のない配列・アノテーションでも [TPA Submission Guidelines](/ddbj/tpa-table.html) に従い TPA として登録を受け入れる方針となりました。

以下に該当する場合は TPA 登録を受け付けることができません。
:     
  - リピート(繰り返し)領域のみで他の feature を含まないアノテーションの場合。
  - 遺伝子予測ツール (GenMark、tRNAscan、ORFfinder など) から予測されたアノテーションで、実験的な証明が全くなされていない場合。 また、アノテーション結果が、論文の主要な内容ではない場合。
  - 生物学的実験に基づいた gene name もしくは product name が加えられていない、完全長ゲノム配列に代表されるような配列の場合。
: [こちらもご覧ください](/ddbj/tpa-table-e.html#nottpa)

TPA 登録における注意事項
:     
  - 複数の生物種から得られた consensus sequences は、受け付けることができません。
  - TPA データの登録には、引用するプライマリーエントリの配列が既に INSDC の 'プライマリー(つまり TPA ではない)データ' として登録済である必要があります。
  - 登録予定の配列の中に、ご自身で配列決定を行った領域を含む場合には、先にその部分をプライマリーエントリとして登録した後に、引用して TPA データ全長の登録を行なって下さい。
  - TPA データの公開には、アセンブルされた配列、または、アノテーションの根拠を証明する内容が、peer-reviewed journal に論文として公開されることが必須となります。
  - 引用したプライマリーエントリにおける配列の領域と、結果としてアセンブルされた配列の領域との対応付けのために、両者の位置情報が必要となります。

TPA とプライマリーエントリの配列アラインメントに関する規則
:     
  - 引用元となるプライマリーエントリが存在しない領域は 50bp より長い範囲であってはなりません。
  - TPA とプライマリーエントリの配列に 5% より大きい不一致が存在しないようにして下さい。
  - 挿入、欠失、置換など、TPA の配列に含まれる上記の不一致な部位（5% 以下）は引用元プライマリーエントリが存在しない領域、TPA の配列と引用元の配列が一致しない領域、双方を指します。
  - 上記は配列長と配列の類似度に適用されます。

<dl>
  <dt>DDBJ フラットファイルにおける TPA の特徴</dt>
    <dd>
      <ul>
        <li><a href="#LocusA">LOCUS</a> 行には、生物名に依存した taxonomic division が表示されますが、CON、または、TSA の場合もあります。</li>
        <li><a href="#DefinitionA">DEFINITION</a> 行 の先頭 がTPA_exp: (TPA:experimental の場合)、TPA_inf: (TPA:inferential の場合)、TPA_asm: (TPA:assembly の場合)、TPA: (TPA:specialist_db の場合)、で始まります。</li>
        <li><a href="#KeywordsA">KEYWORDS</a> 行には次のいずれかが表示されます。
            <table>
              <tbody>
                <tr>
                  <td><a href="/ddbj/tpa-table-e.html#exp">TPA:experimental</a> の場合</td>
                  <td>Third Party Data; TPA; TPA:experimental.</td>
                </tr>
                <tr>
                  <td><a href="/ddbj/tpa-table-e.html#inf">TPA:inferential</a> の場合</td>
                  <td>Third Party Data; TPA; TPA:inferential.</td>
                </tr>
                <tr>
                  <td><a href="/ddbj/tpa-table-e.html#ass">TPA:assembly</a> の場合</td>
                  <td>Third Party Data; TPA; TPA:assembly.</td>
                </tr>
                <tr>
                  <td><a href="/ddbj/tpa-table-e.html#spe">TPA:specialist_db</a> の場合</td>
                  <td>Third Party Data; TPA; TPA:specialist_db.</td>
                </tr>
              </tbody>
            </table>
        </li>
        <li><a href="#PrimaryA">PRIMARY</a> ブロックには、引用されたプライマリーエントリの配列領域と、これに対応する TPA 配列の領域が記載されます。</li>
      </ul>
    </dd>
</dl>

## TPA フラットファイルの例  {#TPA_フラットファイルの例}

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">BR000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">2000 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">HUM</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">17-SEP-2006</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  TPA_exp: Homo sapiens GAPD gene for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   BR000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     BR000000.1
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    Third Party Data; TPA; TPA:experimental.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 2000)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-NOV-2005) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase of human
  JOURNAL   TPA Biol Chem 10, 50-59 (2006)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>             
<a id="PrimaryA" href="#PrimaryB">PRIMARY</a>     TPA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-1000              ZZ000001.1         50001-51000
            101-200             ZZ000003.1         1-100
            501-600             ZZ000003.1         101-200
            901-2000            ZZ000002.1         25001-26100         c
            1451-1550           ZZ000003.1         201-300
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..2000</a> 
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
     <a href="/ddbj/features.html#CDS">CDS</a>             <a href="/ddbj/location.html">join(153..200,501..600,1451..1500)</a> 
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="FAA00000.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     NNSQLNLIVDLIYNFYINWSK"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          522 a          493 c          524 g          461 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
