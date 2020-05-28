---
layout: indexed_content
title: Trace Archive
pathname: submission
category: aboutdta
---

<div class="section book">

<div class="section chapter">

## Trace Archive の概要

[DDBJ Trace Archive (DTA)](index.html) は，配列決定プロジェクトからのシングルパスリードの DNA sequence chromatograms (traces), base calls, quality estimates のためのデータベースです。 Trace Archive は [International Nucleotide Sequence Database Collaboration (INSDC)](/insdc.html#insd) のメンバーとして，DDBJ，[NCBI](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) と [EBI](https://www.ebi.ac.uk/ena/) が国際協力して運営しています。[NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) が ID を発行管理しています。

DTA から登録された trace データは [NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) で検索，取得することができます。

trace データは [DDBJ Sequence Read Archive](/dra/submission.html#dra) で受付けています。特に理由がない限り DRA に登録してください。

</div>

<div class="section chapter">

## メタデータ

必要な項目は [STRATEGY](#STRATEGY) と [TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE) の組み合わせで決まります。 メタデータは [NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=retrieve&f=retrieve&m=obtain&s=search) で検索することができます。

必須項目は [Validation Table](/files/submission/field_matrix_current.xls) で確認してください。

必須<span class="required">\*</span>  
STRATEGY と TRACE\_TYPE\_CODE の組み合わせによっては必須 <span class="conditionally_required">\*</span>

<div class="news_post_container archive glossary dta">

<div class="section terms section">

### Metadata Field List

  - [ACCESSION](#ACCESSION)  
    DDBJ/EMBL/GenBank アクセッション番号 
    <span class="dta_type">Type: varchar(30)</span> 
    <span class="dta_example">Example: AC22227</span>
    <span class="dta_metadata">[ACCESSION](#ACCESSION)</span> は配列データを配列データベース (DDBJ/EMBL/GenBank) に登録することで割り振られます。いくつかの種類の trace (特に WGS) では記載できません。アクセッション番号により Trace Archive の１次配列データと配列データベースの２次配列データが結び付きます。

<!-- end list -->

  - [AMPLIFICATION\_FORWARD](#AMPLIFICATION_FORWARD)<span class="conditionally_required">\*</span>  
    テンプレートの増幅用フォワードプライマーの塩基配列 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: GGATTCTGACTAACGAGC</span>
    配列決定のために用いられたテンプレート増幅用プライマーの配列を記載します。次の場合に必須です:<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR or RT-PCR。

<!-- end list -->

  - [AMPLIFICATION\_REVERSE](#AMPLIFICATION_REVERSE)<span class="conditionally_required">\*</span>  
    テンプレートの増幅用リバースプライマーの塩基配列 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: GGATTCTGACTAACGAGC</span>
    配列決定のために用いられたテンプレート増幅用プライマーの配列を記載します。次の場合に必須です:<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR or RT-PCR。

<!-- end list -->

  - [AMPLIFICATION\_SIZE](#AMPLIFICATION_SIZE)  
    プライマーペアによる増幅断片長 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 500</span>
    <span class="dta_metadata">[AMPLIFICATION\_SIZE](#AMPLIFICATION_SIZE)</span> には<span class="dta_metadata">[AMPLIFICATION\_FORWARD](#AMPLIFICATION_FORWARD)</span> と<span class="dta_metadata">[AMPLIFICATION\_REVERSE](#AMPLIFICATION_REVERSE)</span>のプライマーペアによって増幅される断片の長さを塩基対数で記載します。<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR の場合はゲノム DNA，<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=RT-PCR の場合は転写産物を増幅した断片長になります。

<!-- end list -->

  - [ANONYMIZED\_ID](#ANONYMIZED_ID)  
    個人に対する匿名化された ID 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: 2222anonym</span>
    ドナーの匿名性を保護するプロジェクトで使用します。多くの場合 Trace Archive の匿名化された ID と表現型情報が得られた個人の ID とを結びつけるアクセスが制限されたデータベースが存在します。

<!-- end list -->

  - [ATTEMPT](#ATTEMPT)  
    センターによって試みられたプロジェクトの回数 and/or Trace Archive への登録回数
    <span class="dta_type">Type: tinyint(1-255)</span>
    <span class="dta_example">Example: 2</span>

<!-- end list -->

  - [BASE\_FILE](#BASE_FILE)  
    ベースコールが記載されたファイル名 
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example: ./mytraces/123clone.fasta</span>
    trace ファイルがベースコールを含んでいない場合，ベースコールが含まれた別のファイルを登録します。<span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> でファイルを指定します。trace (通常は scf) ファイル中のベースコール情報は <span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> のもので上書きされます。<span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> と trace ファイルのベースコールが同じ場合は BASE\_FILE を登録しないでください。<span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> と<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> の両方を登録する場合は，あわせて peak index 情報を<span class="dta_metadata">[PEAK\_FILE](#PEAK_FILE)</span> として別ファイルで登録します。

<!-- end list -->

  - [CENTER\_NAME](#CENTER_NAME)<span class="required">\*</span>  
    センター名の略称 
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: WUGSC</span> 
    DDBJ Trace Archive にデータを登録する前にセンター名の略称を登録します。この略称は <span class="dta_metadata">[CENTER\_NAME](#CENTER_NAME)</span> で使われます。登録されている <span class="dta_metadata">[CENTER\_NAME](#CENTER_NAME)</span> の一覧: [http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting\_centers](https://www.ncbi.n nih.gov/Traces/trace.cgi?view=submitting_centers) <span class="attention_text">Sequence Read Archive の center name とは別になります。</span>

<!-- end list -->

  - [CENTER\_PROJECT](#CENTER_PROJECT)<span class="required">\*</span>  
    センター独自のプロジェクト名 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: HBBB</span>
    <span class="dta_metadata">[CENTER\_PROJECT](#CENTER_PROJECT)</span>はシークエンスセンター内部で使用するプロジェクト名です。この項目は関連する trace をまとめるのに役立ちます。

<!-- end list -->

  - [CHEMISTRY](#CHEMISTRY)  
    シークエンス反応で使われたケミストリー 
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: BIGDYEV3.0</span>

<!-- end list -->

  - [CHEMISTRY\_TYPE](#CHEMISTRY_TYPE)  
    シークエンス反応で使われたケミストリーの種類 
    <span class="dta_type">Type: char(50)</span>
    <span class="dta_example">Example: P</span>
    <span class="dta_metadata">[CHEMISTRY\_TYPE](#CHEMISTRY_TYPE)</span> で使用可能な語句:  
    Primer  
    Terminator  
    p=primer  
    t=terminator

<!-- end list -->

  - [CHROMOSOME](#CHROMOSOME)  
    trace が由来する染色体 
    <span class="dta_type">Type: varchar(8)</span>
    <span class="dta_example">Example: 11</span>
    <span class="dta_metadata">[CHROMOSOME](#CHROMOSOME)</span> は trace が由来する染色体を示します。遺伝子名や cytogenetic position は染色体情報としては適していません。

<!-- end list -->

  - [CLIP\_QUALITY\_LEFT](#CLIP_QUALITY_LEFT)  
    信頼性評価に基づくリードの左クリップ位置 (塩基対数) 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 56</span>
    <span class="dta_metadata">[CLIP\_QUALITY\_LEFT](#CLIP_QUALITY_LEFT)</span>は信頼性が低いためクリップされるべきリードの始まりの部分です。ベースコールの信頼性が高い領域をその最初の塩基位置で示します。

<!-- end list -->

  - [CLIP\_QUALITY\_RIGHT](#CLIP_QUALITY_RIGHT)  
    信頼性評価に基づくリードの右クリップ位置 (塩基対数) 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 256</span>
    <span class="dta_metadata">[CLIP\_QUALITY\_RIGHT](#CLIP_QUALITY_RIGHT)</span>は信頼性が低いためクリップされるべきリードの終わりの部分です。ベースコールの信頼性が高い領域をその最後の塩基位置で示します。

<!-- end list -->

  - [CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)<span class="conditionally_required">\*</span>  
    ベクター配列に基づくリードの左クリップ位置 (塩基対数) 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 75</span>
    <span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span> はベクター配列に基づきクリップされるべきリードの始まりの部分です。非ベクター配列の最初の塩基の位置で示します。この項目はほとんど全ての <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です。   この情報は <span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span> が記載されている場合，もしくは，<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE span>=PCR orRT-PCR の場合には省略できます。

<!-- end list -->

  - [CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)<span class="conditionally_required">\*</span>  
    ベクター配列に基づくリードの右クリップ位置 (塩基対数) 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 275</span>
    <span class="dta_metadata">[CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)</span> はベクター配列に基づきクリップされるべきリードの終わりの部分です。非ベクター配列の最後の塩基の位置で示します 項目はほとんど全ての<span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です。   この情報は <span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span> が記載されている場合，もしくは，<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=PCR or RT-PCR の場合には省略できます。  
    注意: 多くのセンターではベクター配列解析と信頼性評価を一緒に行っており，１セットのクリップ情報しかない場合がありま の場合は<span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span>と<sp class="dta_metadata">[CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)</span> に値を記入します。

<!-- end list -->

  - [CLONE\_ID](#CLONE_ID)<span class="conditionally_required">\*</span>  
    trace が由来するクローン名 
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: RP23-1123F10</span>
    <span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span> は個々の BAC，PAC や cDNA クローンの ID です。クローンが Clone Registry
    ([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)) に登録されている場合はstandard clone registry nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))に従って記載します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=EST;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=ENCODE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN;PrimerWalk;
    CLONEEND  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=FINISHING;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [CLONE\_ID\_LIST](#CLONE_ID_LIST)<span class="conditionally_required">\*</span>  
    セミコロンで区切られたクローンのリスト (Strategy が PoolClone の場合)
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: RP23-200A2;RP23-500P1</span>
    <span class="dta_metadata">[CLONE\_ID\_LIST](#CLONE_ID_LIST)</span>は <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=PoolClone の場合にのみ必須です。この場合はセミコロンで区切ったクローンのリストを記載します。クローンが Clone Registry ([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)) に登録されている場合は standard cloneregistry nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clo content/overview/)) に従って記載します。  
    注意:リストに含まれるクローン数に制限はありませんが，個々のクローンのサイズは 30 バイトに制限されています。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:   <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=PoolClone;<span class="dta_metadat [TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [COLLECTION\_DATE](#COLLECTION_DATE)<span class="conditionally_required">\*</span>  
    環境サンプルが採取された日時 (例 Mar 2 2006 12:00AM) 
    <span class="dta_type">Type: datetime</span> 
    <span class="dta_example">Example: Mar 2 2006 12:00AM</span>
    <span class="dta_metadata">[COLLECTION\_DATE](#COLLECTION_DATE)</span>は環境サンプルが採取された日時を示します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Geo; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Host; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [CVECTOR\_ACCESSION](#CVECTOR_ACCESSION)  
    クローニングベクター配列の DDBJ/EMBL/GenBank アクセッション番号
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: AY451994</span>
    <span class="dta_metadata">[CVECTOR\_ACCESSION](#CVECTOR_ACCESSION)</span>は使用されたクローニングベクターのアクセッション番号です。この番号は<span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span> に記入されたベクターに対応します。

<!-- end list -->

  - [CVECTOR\_CODE](#CVECTOR_CODE)  
    センターがクローニングベクターに付けたコード 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: PBACE3.6</span>
    <span class="dta_metadata">[CVECTOR\_CODE](#CVECTOR_CODE)</span>には登録者がクローニングベクターに付けたコードを記入します。使われた全てのクローニングベクターの配列は DDBJ/EMBL/GenBank に登録することが推奨されます。

<!-- end list -->

  - [DEPTH](#DEPTH)  
    環境サンプルが採取された深度 (メーター) 
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 10M</span>
    <span class="dta_metadata">[DEPTH](#DEPTH)</span>は水圏や土壌から採取された環境サンプルで記載できます。この値が NULL のときはサンプルが環境の表面から採取されたものとみなされます。この項目は環境サンプルにのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [ELEVATION](#ELEVATION)  
    環境サンプルが採取された高度 (メーター) 
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 500</span> 
    この値が NULL のときはサンプルは海水位で取得されたものとみなされます。この項目はいくつかの環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [ENVIRONMENT\_TYPE](#ENVIRONMENT_TYPE)<span class="conditionally_required">\*</span>  
    環境サンプルが採取された環境の種類 
    <span class="dta_type">Type: varchar(250)</span>
    <span class="dta_example">Example: sea water</span>
    <span class="dta_metadata">[ENVIRONMENT\_TYPE](#ENVIRONMENT_TYPE)</span>では環境サンプルが取得された環境の種類を記載します。<span class="dta_metadata">[LATITUDE](#LATITUDE)</span> と <span class="dta_metadata">[LONGITUDE](#LONGITUDE)</span>で地理上の位置を示せますが，ある位置には 環境が存在し得ます (土壌，泥，木の根など)。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=PoolClone;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Geo; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [EXTENDED\_DATA](#EXTENDED_DATA)  
    EXTENDED\_DATA block 中の \<field\> タグのなかに記載された任意の追加情報
    <span class="dta_type">Type: varchar()</span>
    <span class="dta_example">Example:</span>

    <div class="ex1">
				&lt;extended_data&gt;<br>
				        &lt;field name='SamplingSiteMonthChlorophyllLevel'&gt;1.4 mg_mm&lt;/field&gt;<br>
				        &lt;field name='SamplingSiteYearlyChlorophyllLevel'&gt;1.12 mg_mm&lt;/field&gt;<br>
				        &lt;field name='SamplingSiteYearlyChlorophyllLevelStdError'&gt;0.19 mg_mm&lt;/field&gt;<br>
				&lt;/extended_data&gt;
				</div> <!-- .ex1 -->

    '=' と区切り文字の '|' は name とその値には使用できません。これらの記号の混入以外はチェックされません。

<!-- end list -->

  - [FEATURE\_ID\_FILE](#FEATURE_ID_FILE)  
    チップ上の feature とその位置を記載したファイル 
    <span class="dta_type">Type: varchar(200)</span> 
    <span class="dta_example">Example: ./mytraces/chip2.cdf</span>
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP"のとき <span class="dta_metadata">[FEATURE\_ID\_FILE](#FEATURE_ID_FILE)</span>でチップ上の feature の位置と配列を記載したファイルを指定します。

<!-- end list -->

  - [FEATURE\_ID\_FILE\_NAME](#FEATURE_ID_FILE_NAME)<span class="conditionally_required">\*</span>  
    共通の FEATURE\_ID\_FILE (先に登録します) へのリファレンス
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example:</span>  
    この項目は <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP" のときに必須です。

<!-- end list -->

  - [FEATURE\_SIGNAL\_FILE](#FEATURE_SIGNAL_FILE)  
    チップ上の feature のシグナルと分散が記載されたファイル 
    <span class="dta_type">Type: varchar(200)</span> 
    <span class="dta_example">Example: ./mytraces/chip2.signal</span>
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP"のときにチップ上の feature のシグナルと分散が記載されたファイルを <span class="dta_metadata">[FEATURE\_SIGNAL\_FILE](#FEATURE_SIGNAL_FILE)</span>で指定します。

<!-- end list -->

  - [FEATURE\_SIGNAL\_FILE\_NAME](#FEATURE_SIGNAL_FILE_NAME)<span class="conditionally_required">\*</span>  
    共通の FEATURE\_SIGNAL\_FILE (先に登録します) へのリファレンス
    <span class="dta_type">Type: varchar(200)</span>
    <span class="dta_example">Example:</span> 
    この項目は <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="CHIP" のときに必須です。

<!-- end list -->

  - [GENE\_NAME](#GENE_NAME)  
    遺伝子名や遺伝子の ID 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: transporter 1</span> 
    フリーテキスト。主に <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>='Re-sequencing' or'ENCODE' のときに使われます。研究対象の遺伝子を遺伝子名や何らかの ID で参照します。

<!-- end list -->

  - [HI\_FILTER\_SIZE](#HI_FILTER_SIZE)  
    環境サンプルを分取したフィルターで一番大きいサイズ 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: 50 micron</span>
    <span class="dta_metadata">[HI\_FILTER\_SIZE](#HI_FILTER_SIZE)</span>は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [HOST\_CONDITION](#HOST_CONDITION)  
    環境サンプルが採取されたホストの状態 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: HIV-positive</span>
    <span class="dta_metadata">[HOST\_CONDITION](#HOST_CONDITION)</span>は環境サンプルでのみ記載可能でホストのコンディション
    (healthy, sick など) を記載します。

<!-- end list -->

  - [HOST\_ID](#HOST_ID)<span class="conditionally_required">\*</span>  
    環境サンプルが取得されたホストに付けられた固有の ID 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: yerkes pedigree \#C0479 'Clint'</span>
    <span class="dta_metadata">[HOST\_ID](#HOST_ID)</span>は環境サンプルでのみ記載可能でホストを特定するのに利用されます。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Host; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [HOST\_LOCATION](#HOST_LOCATION)<span class="conditionally_required">\*</span>  
    環境サンプルが採取されたホスト上の特定の場所 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: rumen</span>
    <span class="dta_metadata">[HOST\_LOCATION](#HOST_LOCATION)</span>には環境サンプルが採取されたホスト上の特定の場所，例えば dental plaque，hindgut，root surfaces を記載します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Host; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [HOST\_SPECIES](#HOST_SPECIES)<span class="conditionally_required">\*</span>  
    環境サンプルが採取されたホスト 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: Pan troglodytes</span>
    <span class="dta_metadata">[HOST\_SPECIES](#HOST_SPECIES)</span>は環境サンプルでのみ記載可能です。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Host; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [INDIVIDUAL\_ID](#INDIVIDUAL_ID)  
    trace が由来する個人やサンプルの ID 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: NA12345</span>
    <span class="dta_metadata">[INDIVIDUAL\_ID](#INDIVIDUAL_ID)</span>は trace と個人とを結び付けるセンター独自の ID です。この項目は主に population を対象とした研究で使用します。

<!-- end list -->

  - [INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)<span class="conditionally_required">\*</span>  
    クローニング部位の左に隣接する塩基配列 <span class="dta_type">
    Type: varchar(100)</span>
    <span class="dta_example">Example: AAGGTGCGATGCAGTGGCAGTAGCAGTGTCGACGTGACGATTCGTCCGGA</span>
    <span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span> ではクローニング部位の左に隣接するリンカーを含む塩基配列 (50-100 塩基) を記入します。この情報によりユーザは独自にベクターをトリミングすることができます。この項目はほとんど全ての <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> で必須です。この項目は <span class="dta_metadata">[CLIP\_VECTOR\_LEFT](#CLIP_VECTOR_LEFT)</span> がある場合には省略できますが，<span class="dta_metadata">[INSERT\_FLANK\_LEFT](#INSERT_FLANK_LEFT)</span> への記入を推奨しています。クローニングステップがない場合は 'NONE' と記入します。

<!-- end list -->

  - [INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)<span class="conditionally_required">\*</span>  
    クローニング部位の右に隣接する塩基配列 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: AAGGCGCGATGCAGTGAGCGAGGCTGACGTCGGCTAGCGTCGCGTCGGGT</span>
    <span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span> ではクローニング部位の右に隣接するリンカーを含む塩基配列 (50-100 塩基)　を記入します。この情報によりユーザは独自にベクターをトリミングすることができます。この項目はほとんど全ての <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> で必須です。この項目は <span class="dta_metadata">[CLIP\_VECTOR\_RIGHT](#CLIP_VECTOR_RIGHT)</span> がある場合には省略できますが，<span class="dta_metadata">[INSERT\_FLANK\_RIGHT](#INSERT_FLANK_RIGHT)</span> への記入を推奨しています。クローニングステップがない場合は 'NONE' と記入します。

<!-- end list -->

  - [INSERT\_SIZE](#INSERT_SIZE)<span class="conditionally_required">\*</span>  
    インサートの平均塩基配列長 (TEMPLATE\_ID の値で参照されます) <span class="dta_type">Type:
    int</span> <span class="dta_example">Example: 2000</span>
    <span class="dta_metadata">[INSERT\_SIZE](#INSERT_SIZE)</span>は配列決定されるクローンの期待されるインサート長を示します。あるライブラリーに対して見積もられたインサートの平均長に基づいて記入します。この情報は全ゲノムアセンブリなどの実験にとって重要です。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WGS  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WCS  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND

<!-- end list -->

  - [INSERT\_STDEV](#INSERT_STDEV)<span class="conditionally_required">\*</span>  
    INSERT\_SIZE の標準偏差 <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 200</span>
    <span class="dta_metadata">[INSERT\_STDEV](#INSERT_STDEV)</span>はインサート長の標準偏差です。この値は概算値です。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>
    の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WGS  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;  
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WCS  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND

<!-- end list -->

  - [LATITUDE](#LATITUDE)<span class="conditionally_required">\*</span>  
    サンプル採取地点の緯度 (standard GPS notation に基づく)
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 54.736</span>
    環境サンプルの取得地点の緯度。緯度の範囲は　[-90,90] で，赤道を 0 とし，赤道より北を正の値で，南を負の値で表します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Geo;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [LIBRARY\_ID](#LIBRARY_ID)<span class="conditionally_required">\*</span>  
    CLONE\_ID に記載されたクローンのソースライブラリー 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: RP23</span>
    <span class="dta_metadata">[LIBRARY\_ID](#LIBRARY_ID)</span> にはクローンのソースライブラリーを記載します。多くのゲノムライブラリーはClone Registry ([http://www.ncbi.nlm.nih.gov/clone](https://www.ncbi.nlm.nih.gov/clone))に既に登録されており，これらのライブラリーについてはstandard nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))に従った名称を使用します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=cDNA;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=EST;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONEEND;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CLONEEND  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=CLONE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=ENCODE;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN;PrimerWalk;
    CLONEEND

<!-- end list -->

  - [LONGITUDE](#LONGITUDE)<span class="conditionally_required">\*</span>  
    サンプル採取地点の経度 (standard GPS notation に基づく)
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: -86.403</span>
    環境サンプルデータの取得地点の経度。グリニッジ子午線を 0° として，子午線よりも東は +180°，西は -180° です。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Env Sample-Geo; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [LO\_FILTER\_SIZE](#LO_FILTER_SIZE)  
    環境サンプルを分取したフィルターで一番小さいサイズ 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: 25 micron</span>
    <span class="dta_metadata">[LO\_FILTER\_SIZE](#LO_FILTER_SIZE)</span>は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [NCBI\_PROJECT\_ID](#NCBI_PROJECT_ID)  
    INSDC によって管理されている BioProject ID 
    <span class="dta_type">Type: int</span> 
    <span class="dta_example">Example: 7</span>
    <span class="dta_metadata">[NCBI\_PROJECT\_ID](#NCBI_PROJECT_ID)</span>は trace と [BioProject database](/bioproject/index.html) を結びつけ，プロジェクト単位でのデータ取得を可能にします。シークエンス拠点はゲノム配列データを登録する前に [DDBJ BioProject](/bioproject/index.html) にプロジェクトを登録することができます。プロジェクト登録の時点で配列データを登録する必要はありません。

<!-- end list -->

  - [ORGANISM\_NAME](#ORGANISM_NAME)<span class="conditionally_required">\*</span>  
    BARCODE プロジェクトにおいて trace が由来する生物種名 
    <span class="dta_type">Type: varchar(100)</span> <span class="dta_example">Example: Acanthocybium solandri</span>
    <span class="dta_metadata">[ORGANISM\_NAME](#ORGANISM_NAME)</span>は BARCODE データにおいてリードを生物種ごとに分類するのに使われます。生物種名は[Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/) に従って記載します。全ての BARCODE データでは<span class="dta_metadata">[SPECIES\_CODE](#SPECIES_CODE)</span>="BARCODESPECIES" になります。<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=BARCODE の場合に必須です。

<!-- end list -->

  - [PEAK\_FILE](#PEAK_FILE)  
    peak value が記載されたファイル 
    <span class="dta_type">Type: varchar(200)</span> <span class="dta_example">Example: ./mytraces/123clone.peak</span> 説明については
    <span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span>をご覧ください。

<!-- end list -->

  - [PH](#PH)  
    環境サンプルが採取された場所の pH 
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 7.2</span>
    <span class="dta_metadata">[PH](#PH)</span>は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [PICK\_GROUP\_ID](#PICK_GROUP_ID)  
    同じ時に取得された trace をまとめる ID 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 939065</span>

<!-- end list -->

  - [PLACE\_NAME](#PLACE_NAME)  
    生物学的サンプルが得られた地点の国名 and/or 一般に通用する名称 
    <span class="dta_type">Type:
    varchar(250)</span> <span class="dta_example">Example: Octopus
    Springs</span>
    <span class="dta_metadata">[PLACE\_NAME](#PLACE_NAME)</span>は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [PLATE\_ID](#PLATE_ID)  
    登録者が付けたプレート ID 
    <span class="dta_type">Type: varchar(32)</span>
    <span class="dta_example">Example: 203</span>
    <span class="dta_metadata">[PLATE\_ID](#PLATE_ID)</span>と<span class="dta_metadata">[WELL\_ID](#WELL_ID)</span>はシークエンステンプレートが保存された場所を指し示します(<span class="dta_metadata">[CLONE\_ID](#CLONE_ID)</span>
    に記載されたクローンの保存場所ではありません)。この情報はこぼれたり何かが混入したプレートを同定するのに役立ちます。プレートを使用しない実験の場合は
    '0' を記入します。

<!-- end list -->

  - [POPULATION\_ID](#POPULATION_ID)  
    登録者が trace (もしくは trace のグループ) が由来する population に付けた ID
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: CEPH</span>
    <span class="dta_metadata">[POPULATION\_ID](#POPULATION_ID)</span>は集団を特定するのに使われます。この情報は population study (通常 <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=SNP)　で使用されます。

<!-- end list -->

  - [PREP\_GROUP\_ID](#PREP_GROUP_ID)  
    同じ時に調整された trace をまとめる ID 
    <span class="dta_type">Type:
    varchar(30)</span> <span class="dta_example">Example: A2</span>

<!-- end list -->

  - [PRIMER](#PRIMER)  
    シークエンス反応で使われたプライマー配列 
    <span class="dta_type">Type:
    varchar(200)</span> <span class="dta_example">Example:
    GAATACCTACGATCGCC</span>
    <span class="dta_metadata">[PRIMER](#PRIMER)</span>にはシークエンスプライマーの塩基配列を記入します。センターが多種類のプライマーを使っている場合は<span class="dta_metadata">[PRIMER\_CODE](#PRIMER_CODE)</span> に primer code のリストを記載します。

<!-- end list -->

  - [PRIMER\_CODE](#PRIMER_CODE)  
    シークエンスプライマーに対するコード 
    <span class="dta_type">Type: varchar(30)</span>
    <span class="dta_example">Example: Sp6</span>

<!-- end list -->

  - [PRIMER\_LIST](#PRIMER_LIST)<span class="conditionally_required">\*</span>  
    マッピング実験 (例 AFLP) で使われた ';' で区切られたプライマーのリスト
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example:
    AAGGTCTGCGCGTGTC;AGCTGCGTACGTAATCG;</span>
    この項目は<span class="dta_metadata">[STRATEGY](#STRATEGY)</span>="AFLP" と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>="PCR" の組み合わせのときに必須です。

<!-- end list -->

  - [PROGRAM\_ID](#PROGRAM_ID)<span class="required">\*</span>  
    trace ファイルを作成するのに使われたプログラム 
    <span class="dta_type">Type: varchar(100)</span> 
    <span class="dta_example">Example: phred-19990722h</span>
    ベースコールに使われたプログラムをフリーテキストで記載します。プログラムの名前，バージョン番号や日付はとても有用です。  
    例:
      - phred-19980904e
      - abi-3.1
      - ATQA
      - TraceTuner
      - Licor
      - Megabase
      - Beckman

<!-- end list -->

  - [PROJECT\_NAME](#PROJECT_NAME)  
    異なるセンターからの trace をまとめる共通したプロジェクト名 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: New
    Project</span> シークエンス拠点は共通したプロジェクト名を用いることで，あるプロジェクトから産みだされる全ての trace をグループ化することができます。記載可能なプロジェクト名は制限されています。この項目を利用する場合は事前に DDBJ Trace Archive に連絡し，全てのプロジェクト参加者が同意しているプロジェクト名を伝えます。

<!-- end list -->

  - [QUAL\_FILE](#QUAL_FILE)  
    quality score を含んだファイル 
    <span class="dta_type">Type: varchar(200)</span> 
    <span class="dta_example">Example: ./mytraces/123clone.fasta.qs</span> 
    trace ファイルが quality score を含んでいない場合，quality score が含まれた別のファイルを登録します。<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> でファイルを指定します。trace (通常は scf) ファイル中の quality score は <span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> のもので上書きされます。<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> と trace ファイルの quality score が同じ場合は QUAL\_FILE を登録しないでください。<span class="dta_metadata">[BASE\_FILE](#BASE_FILE)</span> と<span class="dta_metadata">[QUAL\_FILE](#QUAL_FILE)</span> の両方を登録する場合は，あわせて peak index 情報を<span class="dta_metadata">[PEAK\_FILE](#PEAK_FILE)</span> として別ファイルで登録します。

<!-- end list -->

  - [REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)<span class="conditionally_required">\*</span>  
    リシークエンスプロジェクトで使用されるリファレンス配列のアクセッション番号 (配列を特定するためにバージョン番号も併記します)。 Comparative study の場合はプライマーデザインの情報も付け加えます。
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: NT\_029829.1</span> 
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing;Comparative <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=Any

<!-- end list -->

  - [REFERENCE\_ACC\_MAX](#REFERENCE_ACC_MAX)<span class="conditionally_required">\*</span>  
    リシークエンスや比較ゲノム解析における amplicon の終了位置 
    <span class="dta_type">Type: int</span> <span class="dta_example">Example: 30929</span>
    この項目は<span class="dta_metadata">[REFERENCE\_ACCESSIOxx(#REFERENCE_ACCESSION)</span>の accession.versionで特定されたリファレンス配列の終端の座標を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN; PCR;RT-PCR

<!-- end list -->

  - [REFERENCE\_ACC\_MIN](#REFERENCE_ACC_MIN)<span class="conditionally_required">\*</span>  
    リシークエンスや比較ゲノム解析における amplicon の開始位置 
    <span class="dta_type">Type: int</span> 
    <span class="dta_example">Example: 29829</span>
    この項目は<span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>の accession.versionで特定されたリファレンス配列の開始座標を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:   
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing;  <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN; PCR;RT-PCR

<!-- end list -->

  - [REFERENCE\_OFFSET](#REFERENCE_OFFSET)<span class="conditionally_required">\*</span>  
    リシークエンス解析でスタートの位置を決める REFERENCE\_ACCESSION　で指定された配列におけるオフセット値
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 1520899</span>
    この項目は<span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>の accession.versionで特定されたリファレンス配列の終端の座標を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Re-sequencing; <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=CHIP

<!-- end list -->

  - [REFERENCE\_SET\_MAX](#REFERENCE_SET_MAX)  
    リシークエンスされた領域全体の終了位置。この領域は複数の amplicon を含むことがあります
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 29829</span>
    この項目には<span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>の accession.versionで指定されたリシークエンスされた領域全体の終了位置を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。REFERENCE\_ACC\_[MIN|MAX] と REFERENCE\_SET\_[MIN|MAX]のセットは同じ REFERENCE\_ACC を参照する必要があります。

<!-- end list -->

  - [REFERENCE\_SET\_MIN](#REFERENCE_SET_MIN)  
    リシークエンスされた領域全体の開始位置。この領域は複数の amplicon を含むことがあります
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 29829</span>
    この項目には<span class="dta_metadata">[REFERENCE\_ACCESSION](#REFERENCE_ACCESSION)</span>の accession.versionで指定されたリシークエンスされた領域全体の開始位置を記入します。ス を (０ではなく) １とした塩基対座標で記入します。REFERENCE\_ACC\_[MIN|MAX] と REFERENCE\_SET\_[MIN|MAX]のセットは同じ REFERENCE\_ACC を参照する必要があります。

<!-- end list -->

  - [RUN\_DATE](#RUN_DATE)  
    シークエンス反応が行われた日付 
    <span class="dta_type">Type: datetime</span>
    <span class="dta_example">Example: 2000-10-28</span>

<!-- end list -->

  - [RUN\_GROUP\_ID](#RUN_GROUP_ID)  
    同じシークエンサーでランされた trace につける ID 
    <span class="dta_type">Type: varchar(30)</span> 
    <span class="dta_example">Example: group2</span>

<!-- end list -->

  - [RUN\_LANE](#RUN_LANE)  
    trace のレーン，もしくはキャピラリ 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 1</span>
    <span class="dta_metadata">[RUN\_LANE](#RUN_LANE)</span>には trace が得られたレーンやキャピラリを記入します。

<!-- end list -->

  - [RUN\_MACHINE\_ID](#RUN_MACHINE_ID)  
    trace が得られたシークエンサーの ID 
    <span class="dta_type">Type: varchar(30)</span> 
    <span class="dta_example">Example: machine2</span>

<!-- end list -->

  - [RUN\_MACHINE\_TYPE](#RUN_MACHINE_TYPE)  
    trace が得られたシークエンサーのモデル名 
    <span class="dta_type">Type: varchar(30)</span> 
    <span class="dta_example">Example: ABI 310</span>

<!-- end list -->

  - [SALINITY](#SALINITY)  
    環境サンプルが採取された場所の千分率で表された塩濃度 
    <span class="dta_type">Type: float</span>
    <span class="dta_example">Example: 20</span>
    <span class="dta_metadata">[SALINITY](#SALINITY)</span>は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [SEQ\_LIB\_ID](#SEQ_LIB_ID)<span class="conditionally_required">\*</span>  
    シークエンスに使用された M13/PUC ライブラリー 
    <span class="dta_type">Type: varchar(255)</span> 
    <span class="dta_example">Example: 22194</span>
    シークエンスに用いられた M13/PUC ベースのクローンに対してセンターが独自に付けた ID を記入します。この ID で trace を ligation event でまとめることができるようになります。  
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせで必須です:  
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=SHOTGUN   <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=WGS/WCS

<!-- end list -->

  - [SOURCE\_TYPE](#SOURCE_TYPE)<span class="required">\*</span>  
    DNA のソース 
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: GENOMIC DNA</span>
    <span class="dta_metadata">[SOURCE\_TYPE](#SOURCE_TYPE)</span>に記載可能なコードとその説明は以下です:
      - G=Genomic DNA (ゲノム DNA からの PCR 産物を含む)
      - N=Non Genomic DNA (EST, cDNA, RT-PCR, screenedlibraries)
      - VIRAL RNA=Viral RNA
      - SYNTHETIC=Synthetic DNA
      
    記載可能なコードは G，N，GENOMIC，NON GENOMIC，VIRAL RNA，SYNTHETIC です。

<!-- end list -->

  - [SPECIES\_CODE](#SPECIES_CODE)<span class="required">\*</span>  
    trace が得られた生物種 
    <span class="dta_type">Type: varchar(100)</span>
    <span class="dta_example">Example: Homo sapiens</span>
    <span class="dta_metadata">[SPECIES\_CODE](#SPECIES_CODE)</span>は分類学上の生物種名でリードを分類するのに使われます。この項目はコントロールされています。Trace Archive に含まれている生物種名のリスト:[http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat\&f=xml\_list\_species\&m=obtain\&s=species](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat&f=xml_list_species&m=obtain&s=species)リストに含まれていない生物を登録する場合は，データを投稿する前に DDBJ Trace Archive に連絡します。trace が由来する生物を分類できない場合は，環境サンプルには 'ENVIRONMENTAL SEQUENCE' を人工物には 'ARTIFICIAL SEQUENCE' を使用することができます。

<!-- end list -->

  - [STRAIN](#STRAIN)<span class="conditionally_required">\*</span>  
    trace が由来する strain 
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: C57BL/6J</span>
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>="SNP" のときに必須です。

<!-- end list -->

  - [STRATEGY](#STRATEGY)<span class="required">\*</span>  
    実験的な strategy 
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: MODEL VERIFY</span> 
    trace を得る上で採用された実験上の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>。値はコントロールされていますが，登録者はリストへの新しい用語の追加を申請することができます。  
      
    <span class="dta_metadata">記載可能な用語 (このリストは拡張され続けています):</span>
      - AFLP: Amplified Fragment Length Polymorphism
      - BARCODE: DNA sequence analysis of a uniform target gene toenable
        species identification
      - CCS: Concatenated cDNA sequencing
      - cDNA: Sequences generated in the process of sequencing
        cDNAclones
      - CF-S: Cot-filtered single/low-copy genomic DNA
      - CF-M: Cot-filtered moderately repetitive genomic DNA
      - CF-H: Cot-filtered highly repetitive genomic DNA
      - CF-T: Cot-filtered theoretical single-copy DNA
      - CLONE: Genomic clone based (hierarchical) sequencing
      - CLONEEND: Sequences generated from the end of a
        clone(BAC/PAC/Fosmid or cDNA)
      - Comparative: Sequences obtained using primers design fromrelated
        species
      - CTS: Concatenated Tag Sequencing
      - Env Sample-GEO: Geographically generated environmentalsample
      - Env Sample-Host: Environmental samples collected from aspecific
        host
      - EST: single pass sequencing of cDNA templates
      - FINISHING: a read specifically made for finishing, could
        beeither BAC finishing or Whole Genome Assembly (WGA) finishing
      - MODEL VERIFY: Sequences obtained to verify proposed genemodels
      - PoolClone: Pools of clones (BACs mostly)
      - SNP: Reads used for SNP identification
      - TARGETED LOCUS: Sequences obtained from templates generated
        byprimers designed to amplify a specific genetic locus
      - Re-sequencing: Re-sequencing of targeted genomic regions
      - RT-PCR: Sequences obtained using templates generated by
        ReverseTranscriptase Polymerase Chain Reaction
      - WGA: Whole Genome Assembly

<!-- end list -->

  - [SUBMISSION\_TYPE](#SUBMISSION_TYPE)<span class="required">\*</span>  
    submission の種類 <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: NEW</span> 
    記載可能な値:
      - NEW: 新しいデータを登録するとき
      - UPDATE:trace とメタデータを更新するとき。以前のデータは TI とともに保存され，更新された trace には新しい
        TI が付与され active になります。
      - UPDATEINFO:登録済みの trace を変えることなくメタデータのみを更新するとき
      - WITHDRAW:trace を withdraw するとき

<!-- end list -->

  - [SVECTOR\_ACCESSION](#SVECTOR_ACCESSION)  
    シークエンスベクターの DDBJ/EMBL/GenBank アクセッション番号 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: X52325</span>

<!-- end list -->

  - [SVECTOR\_CODE](#SVECTOR_CODE)  
    センターが独自にシークエンスベクターに付けたコード 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: pBluescript SK(+)</span>

<!-- end list -->

  - [TEMPERATURE](#TEMPERATURE)  
    環境サンプルが採取された地点の温度 (<sup>o</sup>C) 
    <span class="dta_type">Type: float</span> 
    <span class="dta_example">Example: 30</span>
    <span class="dta_metadata">[TEMPERATURE](#TEMPERATURE)</span>は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

  - [TEMPLATE\_ID](#TEMPLATE_ID)  
    登録者がシークエンスしたテンプレートに付けた ID 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: HBBBA2211</span>
    <span class="dta_metadata">[TEMPLATE\_ID](#TEMPLATE_ID)</span>は実際にシークエンスされたテンプレートを同定するのに使われます。この情報と TRACE\_END を組み合わせ，ある２つの trace が同じクローンの両側から得られた 'mate\_pairs' かどうか判断しています。

<!-- end list -->

  - [TRACE\_END](#TRACE_END)  
    リードに含まれるテンプレートの向き 
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: F</span>
    <span class="dta_metadata">[TRACE\_END](#TRACE_END)</span> は以下の値を持てます:
      - F: FORWARD
      - R: REVERSE
      - N: UNKNOWN

<!-- end list -->

  - [TRACE\_FILE](#TRACE_FILE)<span class="required">\*</span>  
    ルートからの trace ファイルまでの絶対パス 
    <span class="dta_type">Type: varchar(200)</span> 
    <span class="dta_example">Example: ./traces/TRACE001.scf</span>

<!-- end list -->

  - [TRACE\_FORMAT](#TRACE_FORMAT)<span class="required">\*</span>  
    trace のファイル形式 
    <span class="dta_type">Type: varchar(20)</span>
    <span class="dta_example">Example: scf</span>
    <span class="dta_metadata">[TRACE\_FORMAT](#TRACE_FORMAT)</span>は以下の値を持てます:
      - SCF - DNA シークエンス装置から出力される標準的なフォーマット
      - ABI - ABI-tracefile は trace データと塩基配列を含むバイナリーファイルです

<!-- end list -->

  - [TRACE\_NAME](#TRACE_NAME)<span class="required">\*</span>  
    登録者が trace に付ける名前 
    <span class="dta_type">Type: varchar(250)</span>
    <span class="dta_example">Example: HBBBA1U2211</span>
    <span class="dta_metadata">[TRACE\_NAME](#TRACE_NAME)</span>はセンター単位でユニークであればよく，センター間でユニークである必要はありません。Trace
    Archive では <span class="dta_metadata">[TRACE\_NAME](#TRACE_NAME)</span> と <span class="dta_metadata">[CENTER\_NAME](#CENTER_NAME)</span> の組み合わせがユニークなキーとして働きます。

<!-- end list -->

  - [TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)<span class="required">\*</span>  
    trace が取得されたシークエンス strategy 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: wgs</span>
    <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>
    には trace を得るのに使われたシークエンス strategy を記入します。  
      
    取り得る値:
      - CHIP: Sequences obtained using microarrays (also called DNAchips
        or gene chips)
      - CLONEEND: Sequences generated from the end of a large
        insert(BAC/PAC/Fosmid) or cDNA clone
      - EST: Single Pass Expressed Sequence Tag
      - HTP SELEX: High throughput SELEX
      - OTHER: Other than PCR, PrimerWalk, SHOTGUN or TRANSPOSON
        forFINISHING
        <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>
      - PCR: Sequences obtained using templates generated by
        genomicPolymerase Chain Reaction
      - PrimerWalk: Sequences generated through a primer walkingstep
      - RT-PCR: Sequences obtained using templates generated by
        ReverseTranscriptase Polymerase Chain Reaction
      - SHOTGUN: Shotgun sequencing of clones (genomic or cDNA)
      - TRANSPOSON: Sequences obtained using templates generated
        bytransposons
      - WCS: Whole Chromosome Shotgun
      - WGS: Whole Genome Shotgun

<!-- end list -->

  - [TRANSPOSON\_ACC](#TRANSPOSON_ACC)<span class="conditionally_required">\*</span>  
    シークエンステンプレートを生成するのに使われたトランスポゾンの DDBJ/EMBL/GenBank アクセッション番号
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: X00913</span> 
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせの時に必須です:
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=TRANSPOSON

<!-- end list -->

  - [TRANSPOSON\_CODE](#TRANSPOSON_CODE)<span class="conditionally_required">\*</span>  
    シークエンステンプレートを生成するのに使われたトランスポゾンにセンターが付けたコード
    <span class="dta_type">Type: varchar(50)</span>
    <span class="dta_example">Example: Mu transposon</span> 
    次の <span class="dta_metadata">[STRATEGY](#STRATEGY)</span> と <span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span> の組み合わせの時に必須です:
    <span class="dta_metadata">[STRATEGY](#STRATEGY)</span>=Any;<span class="dta_metadata">[TRACE\_TYPE\_CODE](#TRACE_TYPE_CODE)</span>=TRANSPOSON

<!-- end list -->

  - [WELL\_ID](#WELL_ID)  
    シークエンス反応が行われたウェルにセンターが付けた ID 
    <span class="dta_type">Type: varchar(50)</span> 
    <span class="dta_example">Example: A1</span>
    <span class="dta_metadata">[WELL\_ID](#WELL_ID)</span> は <span class="dta_metadata">[PLATE\_ID](#PLATE_ID)</span> と一緒にシークエンス反応が行われた場所を特定するのに利用されます
    (<span class="dta_metadata">[WELL\_ID](#PLATE_ID)</span> も参照)。通常シークエンス反応は標準的な 96 もしくは 384 穴プレートで行われます
    (下の標準的なウェルの配置図を参照)。  
    ![標準的な 96 穴プレートの配置](/images/submission/96well.jpg
    "標準的な 96 穴プレートの配置")  
    標準的な 96 穴プレートの配置  
    ![標準的な 384 穴プレートの配置](/images/submission/384well.jpg
    "標準的な 384 穴プレートの配置")  
    標準的な 384 穴プレートの配置

</div>

<div class="section terms section">

### Internal Fields List

  - [BASECALL\_LENGTH](#BASECALL_LENGTH)  
    trace の塩基長 <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 396</span>

<!-- end list -->

  - [BASES\_20](#BASES_20)  
    quality score が 20 を超える塩基数 
    <span class="dta_type">Type: smallint</span> 
    <span class="dta_example">Example: 50</span>
    注意:quality score がない登録がいくつか存在します。これは ABI ファイルだけが登録され， quality
    call が別ファイルで登録されなかったためです。

<!-- end list -->

  - [BASES\_40](#BASES_40)  
    quality score が 40 を超える塩基数 
    <span class="dta_type">Type: smallint</span> 
    <span class="dta_example">Example: 50</span>
    注意:quality score がない登録がいくつか存在します。これは ABI ファイルだけが登録され， quality call が別ファイルで登録されなかったためです。

<!-- end list -->

  - [BASES\_60](#BASES_60)  
    quality score が 60 を超える塩基数 
    <span class="dta_type">Type: smallint</span> 
    <span class="dta_example">Example: 50</span>
    注意:quality score がない登録がいくつか存在します。これは ABI ファイルだけが登録され， quality call が別ファイルで登録されなかったためです。

<!-- end list -->

  - [LOAD\_DATE](#LOAD_DATE)  
    データがロードされた日付 
    <span class="dta_type">Type: smalldatetime</span>
    <span class="dta_example">Example: Jan 8 2001 11:59AM</span>

<!-- end list -->

  - [MATE\_PAIR](#MATE_PAIR)  
    同じテンプレートの逆方向から得られたリードの TI 番号 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 203682255</span> MATE PAIR
    は同じテンプレートの両方向 (FORWARD と REVERSE) から得られたリード。

<!-- end list -->

  - [REPLACED\_BY](#REPLACED_BY)  
    "active" な TI を置き換えた TI 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 304753779</span>
    この項目は最新のデータセットを指し示します。trace が更新された場合<span class="dta_metadata">[REPLACED\_BY](#REPLACED_BY)</span> は新しい<span class="dta_metadata">[TI](#TI)</span>が入力されます。メタデータのみが更新された場合は
    replaced\_by=0 で表示されません。

<!-- end list -->

  - [STATE](#STATE)  
    trace の status 
    <span class="dta_type">Type: varchar</span>
    <span class="dta_example">Example: active</span> 
    取り得る値:
      - active
      - updated
      - withdrawn

<!-- end list -->

  - [TAXID](#TAXID)  
    NCBI Taxonomy ID 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 10090</span> 
    DDBJ Trace Archive と [NCBI Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?) とを結びつけます。

<!-- end list -->

  - [TI](#TI)  
    trace 固有のアクセッション番号 
    <span class="dta_type">Type: int</span>
    <span class="dta_example">Example: 304753779</span> 
    trace がデータベースにロードされた時点で TI が付与されます。どのようなレコードでも TI で取得できます。

<!-- end list -->

  - [UPDATE\_DATE](#UPDATE_DATE)  
    データが update/replace された日時 
    <span class="dta_type">Type: smalldatetime</span> 
    <span class="dta_example">Example: Jul 19 2001 3:48PM</span> 最後に更新された日時が記録されます。

</div>

</div>

</div>

<div class="section chapter">

## trace データの登録

<div id="human_subject" class="attention no_top">

  - ヒトを対象とした研究データの登録について  
    ヒトを対象とした全ての研究において DDBJ に送付するデータの由来である個人 (被験者)
    の情報・プライバシーは，適用されるべき法律，規定，登録者が所属している機関の方針に従い，登録者の責任において保護されている必要があります。  
    原則として，被験者を直接特定し得る参照情報は，登録データから取り除いてください。  
    ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)をご覧ください。

</div>

<div class="section section">

### TI 番号

[DDBJ Trace Archive (DTA)](index.html) への登録には[メタデータ](#metadata)と [trace](#TRACE_FORMAT) ファイルが必要です。 ユニークなアクセッション番号 ([TI 番号](#TI)) は trace データが [NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces) に登録されるときに割り振られます。 TI 番号が発行されたデータは即日公開されます。

<span class="attention_text"> TI 番号発行後，データは即日公開されます。 </span>

</div>

<div class="section section">

### 登録に必要なファイル

テキストファイル (TRACEINFO ファイル) に trace データに関するメタデータを記述し，trace ファイルの場所を指定します。 トップディレクトリを作成し，全てのメタデータファイルをトップディレクトリ下に配置します。 また trace ファイルは，トップディレクトリ下に１つ以上のディレクトリを作成し，その内に配置します。 trace ファイル ([SCF](#TRACE_FORMAT)，[ABI](#TRACE_FORMAT) フォーマットのどちらの場合 も) はトップレベルではなく，サブディレクトリのなかに配置されている必要があります。 サブディレクトリ名 は trace やプロジェクトの名前を使うことを推奨します。 さらにサブディレクトリを作成し trace をグループに分けることができます。

以下は登録ディレクトリの構成例です。

#### 登録ディレクトリの構成例

``` code break
TOP_DIRECTORY/
TOP_DIRECTORY/TRACEINFO
TOP_DIRECTORY/traces
TOP_DIRECTORY/traces/FLJ/
TOP_DIRECTORY/traces/FLJ/FLJA1U0001.scf
TOP_DIRECTORY/traces/FLJ/FLJA1U0002.scf
TOP_DIRECTORY/traces/FLJ/FLJA1U0003.scf
```

[メタデータ](#metadata)ファイルは XML かタブ区切りテキストファイル形式にします。 STRATEGY と TRACE\_TYPE\_CODE の組み合わせで必須になるメタデータ項目一覧は [Validation Table](/files/submission/field_matrix_current.xls) をご覧ください。どちらの形式のメタデータでも最初に共通項目のセクションを含めることができます。 このセクションには各 trace に共通する項目を記載します。

以下は TRACEINFO メタデータファイルの例です。

#### TRACEINFO xml ファイルの例

``` code break
<?xml version="1.0"?>
<trace_volume>
   <common_fields>
      <center_name>CENTER NAME ACRONYM IS HERE</center_name>
      <center_project>FLJ</center_project>
      <source_type>N</source_type>
      <species_code>HOMO SAPIENS</species_code>
      <strategy>EST</strategy>
      <submission_type>NEW</submission_type>
      <trace_format>SCF</trace_format>
      <trace_type_code>EST</trace_type_code>
   </common_fields>
   <trace>
      <trace_name>F-3NB691000020</trace_name>
      <trace_file>./traces/F-3NB691000020.scf</trace_file>
      <clone_id>3NB691000020</clone_id>
      <library_id>3NB691</library_id>
      <template_id>3NB691000020</template_id>
   </trace>
   <trace>
      <trace_name>F-3NB691000033</trace_name>
      <trace_file>./traces/F-3NB691000033.scf</trace_file>
      <clone_id>3NB691000033</clone_id>
      <library_id>3NB691</library_id>
      <template_id>3NB691000033</template_id>
   </trace>
     --- more information ---
</trace_volume>
```

#### TRACEINFO タブ区切りテキストファイルの例

``` code break
center_name = CENTER NAME ACRONYM IS HERE
center_project = FLJ
source_type = N
species_code = HOMO SAPIENS
strategy = EST
submission_type = NEW
trace_format = SCF
trace_type_code = EST
trace_name  clone_id    library_id  template_id trace_file
F-3NB691000020  3NB691000020    3NB691  3NB691000020    ./traces/F-3NB691000020.scf
F-3NB691000033  3NB691000033    3NB691  3NB691000033    ./traces/F-3NB691000033.scf
--- more information ---
```

</div>

<div class="section section">

### アカウントの取得

[DDBJ 登録用アカウント](/account.html)を取得します。

</div>

<div class="section section">

### 登録用ファイルのアップロード

[DTA チームに連絡](/contact.html)し，登録用ディレクトリの作成を依頼します。 [マニュアル](/dra/submission.html#upload-sequence-data)に従いファイルを SCP で転送します。

#### 登録ディレクトリの例

``` code
submission/submitter_id/dta/dta_submitter_id-0001
```

<span class="attention_text"> DTA の登録用ディレクトリは [DDBJ Sequence Read Archive](/dra/index.html) とは別になります。 </span>

</div>

<div class="section section">

### 登録の完了

登録の完了後，登録者が公開を指示するまで DTA はデータを非公開にします。 データ公開の指示があれば DTA は NCBI Trace Archive にデータをアップロードします。データが NCBI Trace Archive にロードされると TI 番号が発行されデータは公開されます。

<span class="attention_text">TI 番号の発行とデータ公開は同時になります。</span>

</div>

<div class="section section">

### データの更新

データを更新するときは [DTA チームまでご連絡ください](/contact.html)。

</div>

</div>

</div>
