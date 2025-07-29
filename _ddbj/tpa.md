---
layout: tabbed_indexed_content
title: TPA
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
related_pages:
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: Environmental sequence の登録
    url: /ddbj/environmental.html
  - title: Transcriptome Project のデータ登録
    url: /ddbj/transcriptome.html
---

<div class="attention" markdown="1">
[2025年1月以降、TPA-Exp および TPA-Inf の data type の新規登録を休止](/news/ja/2024-09-05.html )  
: TPA (Third Party Data) は、INSDC に既に登録されているエントリ (これをプライマリーエントリと呼びます) を元に、
第三者がアセンブル (assemble)、もしくは、(再)アノテーションを行ったデータのコレクションです。    
配列のアセンブルには、既存のプライマリーエントリの組み合わせのみで構成された場合と、新規に TPA の登録者が実験的に決定した配列を混在させた場合とが存在します。
INSDC では、既報のプライマリーエントリに記載されている配列に関する研究を公開するための手段として TPA 登録を受け入れています。

参考文献: [Cochrane,G. et al. (2006) OMICS,10(2): 105-113](https://www.liebertpub.com/doi/abs/10.1089/omi.2006.10.105)
</div>

## TPA におけるプライマリエントリの定義  
プライマリーエントリとは、当該配列データの登録者が実験的に配列決定を行ったデータとして、INSDC から取得可能なデータです。
TPA データが登録された時点において、そのプライマリーエントリが非公開である場合もありますが、TPA データの公開時には、取得 (閲覧) 可能な状態であることが必要です。

## TPA 配列データの受け入れ規則  
TPA は以下の４種類に分けて登録を受け付けます。    
    
[TPA 登録可能な配列の分類](/ddbj/tpa-table-e.html#table)をご覧ください。

|  [TPA:experimental](/ddbj/tpa-table-e.html#exp)  |  アセンブルされた配列、または、そのアノテーションを証明する根拠が生物学的な実験に基づいており、その内容が peer-reviewed journal に論文として記載され公開されていることを示します。  |
|  [TPA:inferential](/ddbj/tpa-table-e.html#inf)  |  アセンブルされた配列、そのアノテーションが生物学的な実験に基づかない解析(コンピューターでの解析など) により推測された内容であることを示します。アセンブルされた配列、または、そのアノテーションの推定根拠については peer-reviewed journal に論文として公開される必要があります。  |
|  [TPA:assembly](/ddbj/tpa-table-e.html#ass)  |  TPA:assembly で示される配列では、計算機的な推測や実験的解析の結果のどちらであるかにかかわらず、配列の生成が peer-review の対象である必要があります。annotation は記載しても記載しなくてもどちらでもよく、アノテーション自体は peer-review の一部である必要はありません。  |
|  [TPA:specialist\_db](/ddbj/tpa-table-e.html#spe)  |  認められたpeer-review出版物に報告があり、既存、かつ信頼のある public database から登録された配列で、INSDC 配列データを使用して構築された配列であることを示します。  |
       
[注]2005年まで INSDC では、生物学的な実験の根拠がない場合は TPA として受け入れておりませんでした。
2006年から、生物学的な実験根拠のない配列・アノテーションでも [TPA Submission Guidelines](/ddbj/tpa-table.html ) に従い TPA として登録を受け入れる方針となりました。    

 [Unacceptable records for TPA](/ddbj/tpa-table-e.html#nottpa) もご覧ください。


 以下に該当する場合は TPA 登録を受け付けることができません。
  - 複数の生物種から得られた consensus sequences は、受け付けることができません。
  - リピート(繰り返し)領域のみで他の feature を含まないアノテーションの場合。
  - 遺伝子予測ツール (GenMark、tRNAscan、ORFfinder など) から予測されたアノテーションで、実験的な証明が全くなされていない場合。 また、アノテーション結果が、論文の主要な内容ではない場合。
  - 生物学的実験に基づいた gene name もしくは product name が加えられていない、完全長ゲノム配列に代表されるような配列の場合。

## TPA 登録における注意事項    
  - 登録は、<a href="https://www.ddbj.nig.ac.jp/ddbj/mss.html">Mass Submission System (MSS) </a>を御利用下さい。登録の申し込みは <a href="https://mss.ddbj.nig.ac.jp">MSS form </a>から行います。
  - TPA データの登録には、引用する配列のアクセッション番号の記載が必須です。
  - TPA データの登録には、引用するプライマリーエントリの配列が既に INSDC の 'プライマリー(つまり TPA ではない)データ' として登録済である必要があります。
  - 登録予定の配列の中に、ご自身で配列決定を行った領域を含む場合には、先にその部分をプライマリーエントリとして登録してアクセッション番号を受領後、当該エントリを引用して TPA データ全長の登録を行なって下さい。
  - TPA データの公開には、アセンブルされた配列、または、アノテーションの根拠を証明する内容が、peer-reviewed journal に論文として公開されることが必須となります。
  - 全長規模のゲノムアセンブル配列 (TPA-WGS; Third Party Data- Whole Genome Shotgun, など) の登録では、TPAの登録に先立ち、<a href="/bioproject/index.html">BioProject Database</a> と <a href="/biosample/index.html">BioSample Database</a>の登録が必要です。全てのタンパク質コード遺伝子とタンパク質をコードしない RNA 遺伝子の記載を希望する場合には、BioSampleの登録時に <a href="/ddbj/locus_tag.html">locus_tag prefix</a> を申請して下さい。
  - サンプルアノテーション： <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit?pli=1&gid=123381270#gid=123381270">TPA-WGS annotation</a>

## TPA とプライマリーエントリの配列アラインメントに関する規則    
  - 引用する配列のアクセッション番号はCOMMENT行またはPRIMARYブロックに記載します。COMMENT行の場合は、引用したアクセッション番号をリストします。さらに、引用したプライマリーエントリにおける配列の領域と、結果としてアセンブルされた配列の領域との対応付けのための両者の位置情報を記載する場合には、（ページリンク）を参考にして、PRIMARYブロックに記載します。
  - プライマリーエントリに raw reads が含まれる場合には、raw reads の位置情報の記載は不要です。
  - 引用元となるプライマリーエントリが存在しない領域は 50bp より長い範囲であってはなりません。
  - TPA とプライマリーエントリの配列に 5% より大きい不一致が存在しないようにして下さい。
  - 挿入、欠失、置換など、TPA の配列に含まれる上記の不一致な部位（5% 以下）は引用元プライマリーエントリが存在しない領域、TPA の配列と引用元の配列が一致しない領域、双方を指します。
  - 上記は配列長と配列の類似度に適用されます。

## DDBJ フラットファイルにおける TPA の特徴
<dl>
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
non-TPA-assemblyエントリの例
: アクセッション番号 は アルファベット 2 文字と数字 6 桁 又はアルファベット 4 文字と数字 8 桁を基本とします。
  
<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">BR000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">1203 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">INV</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">24-OCT-2023</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  TPA_inf: Ladona fulva ELOVL9 mRNA for elongation of very 
            long chain fatty acids protein 9, complete cds
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   BR000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     BR000000.1
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    Third Party Data; TPA; TPA:inferential.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Ladona fulva (scarce chaser)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Ladona fulva
            Eukaryota; Metazoa; Ecdysozoa; Arthropoda; Hexapoda; 
            Insecta; Pterygota; Palaeoptera; Odonata; Epiprocta;
            Anisoptera; Libellulidae; Ladona.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 1203)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (08-SEP-2022)
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Molecular basis of wax-based color change and UV
            reflection in dragonflies
  JOURNAL   Elife 8, e43045 (2019)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>    THIRD PARTY DATABASE: This TPA record uses data from INSD 
           entry ********.*
<a id="PrimaryA" href="#PrimaryB">PRIMARY</a>     TPA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-211               ZZ000001.1         558648-558708 
            195-352             ZZ000012.1         465516-465706       c
            339-533             ZZ000101.1         465272-465352 
            526-789             ZZ123456.1         464731-464787       c
            754-1022            ZZ234567.1         462998-463103
            1005-1198           ZZ234568.1         462269-462405       c
            1002-1203           ZZ345679.1         460365-460532       c
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..1203</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:123851"
                     /<a href="/ddbj/qualifiers.html#geo_loc_name">geo_loc_name</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Ladona fulva"
     <a href="/ddbj/features.html#CDS">CDS</a>             <a href="/ddbj/location.html">join(25..259,361..786,821..960)</a> 
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="ELOVL9"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="elongation of very long chain fatty
                     acids protein 9"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="xxxxxxxxxx.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MAAIASQVVDKYFEFMETKSDPRTSEWFLMSGP
                     GPLVFVLVTYLYFCNKVGPQWMEKRKPYDLKPLLIAYNLIQVLFSVW
                     LVWEGLQGGWLHHYNLKCQPVDYSNDPVAIRMANACWWYFFCKLIEL
                     LDTVFFVLRKKNNQISFLHLYHHTLMPVCAWIGTKFLPGGHGTFLGV
                     INSFVHIIMYFYYMMSAMGPQYQKYIWWKKYLTTLQMVQFCMIFIHS
                     SQLLIYECNYPKTIIVLLGINALFFLGLFGNFYRKSYKARNMKVE
"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          214 a          156 c          174 g          257 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 atggcggcga tcgctagcca ggttgttgac aagtatttcg agttcatgga gaccaagagc
        
        -- The rest of sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
<br>

TPA-assemblyエントリの登録例
: アクセッション番号 は アルファベット 4 文字と数字 8 桁を基本とします。
  
<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">EZZZ01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">259680 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">VRT</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">24-OCT-2023</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  TPA_asm: Casuarius casuarius DNA, secondary_bubble21.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   EZZZ01000001 EZZZ01000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     EZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDB99999
            Sequence Read Archive:SRR9999990, SRR9999991, 
            SRR9999992, SRR9999993
            BioSample:SAMD99999999
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    WGS; Third Party Data; TPA; TPA:assembly.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Casuarius casuarius (southern cassowary)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Casuarius casuarius
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; 
            Euteleostomi; Archelosauria; Archosauria; Dinosauria;
            Saurischia; Theropoda; Coelurosauria; Aves;
            Palaeognathae; Casuariiformes; Casuariidae; Casuarius.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 259680)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (11-NOV-2022)
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Diploid genome assembly of Analysis of the Casuarius 
            casuarius.
  JOURNAL   Genome Biol Evol (2023)
  REMARK    Publication Status: Available-Online prior to print
            DOI:10.xxx/xxxx/xxxxxx
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>    
            ##Genome-Assembly-Data-START##
            Assembly Method       :: HGAP v. 1.0; Celera Assembler v. 7.0; 
                                     Quiver v. 1.4.0; Sequencher v. 5.1
            Assembly Name         :: MusC56 v1
            Genome Coverage       :: 238x
            Sequencing Technology :: PacBio RS, Illumina GAIIx
            ##Genome-Assembly-Data-END##
            
            Third party assembly of primary data, 
            SRR9999990-SRR9999993.
            This is a diploid assembly of female cassowary 
            individual. Thealternate pseudohaplotype (secondary 
            bubble) contigs are secondary_bubble21 - 
            secondary_bubble181348. The unassigned (non
            bubble hetero) contigs are non_bubble_hetero3148954 -
            non_bubble_hetero3150069.The homologous (non bubble 
            other) contigs are      
            non_bubble_other181349-non_bubble_other181377.
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..259680</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:8787"
                     /<a href="/ddbj/qualifiers.html#geo_loc_name">geo_loc_name</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid=</a>"secondary_bubble21"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Casuarius casuarius"
     <a href="/ddbj/features.html#CDS">CDS</a>             <a href="/ddbj/location.html">join(36..256,321..597,712..891)</a> 
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#locus_tag">locus_tag</a>="ABCDS_000010"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="hypothetical protein"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="xxxxxxxxxx.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MSKSIRNPIYPPVKGTVFDQLFYNRLYDYQTEM
                     ANIEHVLKTNFSKYSKGKYNQDIVSDIFGQGIFVVDGEKWKQQRKLA
                     SFFSTRVLRDFSCSVFRRNAFEISGATKSFDMQDILMRCTLDSIFKV
                     GFGIDLNCLEGSSKEGTAFMDPEENDTYLRDIILNFMIAGKDTSANT
                     LSWFLYMLCKNPLIQEKVAQEVRDVVGGQVGDPDELVANITDAALEK
                     MHYL"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location.html">921..1156</a> 
                     /<a href="/ddbj/qualifiers.html#estimated_length=">estimated_length</a>=236
                     /<a href="/ddbj/qualifiers.html#gap_type=">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html#linkage_evidence=">linkage_evidence</a>="paired_ends"

<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          54123 a          69116 c          62143 g          62168 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 aaaaaaagag gttaaaaaat ctgggagttg cttagctaca ctagactgat ccttgaggaa
        
        -- The rest of sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
