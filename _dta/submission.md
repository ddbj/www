---
layout: indexed_content
title: Trace Archive
pathname: submission
category: dta
lang: ja
---

## Trace Archive の概要 <a name="overview"></a>

[DDBJ Trace Archive (DTA)](index.html) は，配列決定プロジェクトからのシングルパスリードの DNA sequence chromatograms (traces), base calls, quality estimates のためのデータベースです。 Trace Archive は [International Nucleotide Sequence Database Collaboration (INSDC)](/insdc.html#insd) のメンバーとして，DDBJ，[NCBI](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) と [EBI](https://www.ebi.ac.uk/ena/) が国際協力して運営しています。[NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) が ID を発行管理しています。
DTA から登録された trace データは [NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) で検索，取得することができます。

{::options parse_block_html="true" /}
<div class="attention red">
trace データは [DDBJ Sequence Read Archive](/dra/submission.html#dra) で受付けています。特に理由がない限り DRA に登録してください。
</div>

## メタデータ <a id="metadata"></a> 

必要な項目は [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで決まります。 メタデータは [NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=retrieve&f=retrieve&m=obtain&s=search) で検索することができます。

必須項目は [Validation Table]({{ site.baseurl }}/assets/files/submission/field_matrix_current.xls) で確認してください。

必須<span class="red">*</span>  
STRATEGY と TRACE_TYPE_CODE の組み合わせによっては必須 <span class="conditionally_required">*</span>

### Metadata Field List <a name="Metadata-Field-List"></a>

[ACCESSION](#ACCESSION)<a name="ACCESSION"></a>  
: DDBJ/EMBL/GenBank アクセッション番号  

  &emsp; Type: varchar(30)  
  &emsp; Example: AC22227  

  [ACCESSION](#ACCESSION) は配列データを配列データベース (DDBJ/EMBL/GenBank) に登録することで割り振られます。いくつかの種類の trace (特に WGS) では記載できません。アクセッション番号により Trace Archive の１次配列データと配列データベースの２次配列データが結び付きます。

<!-- end list -->

[AMPLIFICATION_FORWARD](#AMPLIFICATION_FORWARD)<a name="AMPLIFICATION_FORWARD"></a><span class="conditionally_required">*</span>
: テンプレートの増幅用フォワードプライマーの塩基配列  

  &emsp; Type: varchar(100)  
  &emsp; Example: GGATTCTGACTAACGAGC  

  配列決定のために用いられたテンプレート増幅用プライマーの配列を記載します。次の場合に必須です:[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR or RT-PCR。

<!-- end list -->

[AMPLIFICATION_REVERSE](#AMPLIFICATION_REVERSE)<a name="AMPLIFICATION_REVERSE"></a><span class="conditionally_required">*</span>
: テンプレートの増幅用リバースプライマーの塩基配列  

  &emsp; Type: varchar(100)  
  &emsp; Example: GGATTCTGACTAACGAGC  

  配列決定のために用いられたテンプレート増幅用プライマーの配列を記載します。次の場合に必須です:[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR or RT-PCR。

<!-- end list -->

[AMPLIFICATION_SIZE](#AMPLIFICATION_SIZE)<a name="AMPLIFICATION_SIZE"></a>  
: プライマーペアによる増幅断片長  

  &emsp; Type: int  
  &emsp; Example: 500  

  [AMPLIFICATION_SIZE](#AMPLIFICATION_SIZE) には[AMPLIFICATION_FORWARD](#AMPLIFICATION_FORWARD) と[AMPLIFICATION_REVERSE](#AMPLIFICATION_REVERSE)のプライマーペアによって増幅される断片の長さを塩基対数で記載します。[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR の場合はゲノム DNA，[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=RT-PCR の場合は転写産物を増幅した断片長になります。

<!-- end list -->

[ANONYMIZED_ID](#ANONYMIZED_ID)<a name="ANONYMIZED_ID"></a>  
: 個人に対する匿名化された ID  

  &emsp; Type: varchar(100)  
  &emsp; Example: 2222anonym  

  ドナーの匿名性を保護するプロジェクトで使用します。多くの場合 Trace Archive の匿名化された ID と表現型情報が得られた個人の ID とを結びつけるアクセスが制限されたデータベースが存在します。

<!-- end list -->

[ATTEMPT](#ATTEMPT)<a name="ATTEMPT"></a>  
: センターによって試みられたプロジェクトの回数 and/or Trace Archive への登録回数  

  &emsp; Type: tinyint(1-255)  
  &emsp; Example: 2  

<!-- end list -->

[BASE_FILE](#BASE_FILE)<a name="BASE_FILE"></a>  
: ベースコールが記載されたファイル名  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/123clone.fasta  

  trace ファイルがベースコールを含んでいない場合，ベースコールが含まれた別のファイルを登録します。[BASE_FILE](#BASE_FILE) でファイルを指定します。trace (通常は scf) ファイル中のベースコール情報は [BASE_FILE](#BASE_FILE) のもので上書きされます。[BASE_FILE](#BASE_FILE) と trace ファイルのベースコールが同じ場合は BASE_FILE を登録しないでください。[BASE_FILE](#BASE_FILE) と[QUAL_FILE](#QUAL_FILE) の両方を登録する場合は，あわせて peak index 情報を[PEAK_FILE](#PEAK_FILE) として別ファイルで登録します。

<!-- end list -->

[CENTER_NAME](#CENTER_NAME)<a name="CENTER_NAME"></a><span class="red">*</span>  
: センター名の略称  

  &emsp; Type: varchar(50)  
  &emsp; Example: WUGSC  

  DDBJ Trace Archive にデータを登録する前にセンター名の略称を登録します。この略称は [CENTER_NAME](#CENTER_NAME) で使われます。登録されている [CENTER_NAME](#CENTER_NAME) の一覧:<br>
  [http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting_centers](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?view=submitting_centers)<br>
  <span class="red">Sequence Read Archive の center name とは別になります。</span>

<!-- end list -->

[CENTER_PROJECT](#CENTER_PROJECT)<a name="CENTER_PROJECT"></a><span class="red">*</span>  
: センター独自のプロジェクト名  

  &emsp; Type: varchar(100)  
  &emsp; Example: HBBB  

  [CENTER_PROJECT](#CENTER_PROJECT)はシークエンスセンター内部で使用するプロジェクト名です。この項目は関連する trace をまとめるのに役立ちます。

<!-- end list -->

[CHEMISTRY](#CHEMISTRY)<a name="CHEMISTRY"></a>  
: シークエンス反応で使われたケミストリー  

  &emsp; Type: varchar(50)  
  &emsp; Example: BIGDYEV3.0  

<!-- end list -->

[CHEMISTRY_TYPE](#CHEMISTRY_TYPE)<a name="CHEMISTRY_TYPE"></a>  
: シークエンス反応で使われたケミストリーの種類  

  &emsp; Type: char(50)  
  &emsp; Example: P  

  [CHEMISTRY_TYPE](#CHEMISTRY_TYPE)で使用可能な語句:  
  Primer  
  Terminator  
  p=primer  
  t=terminator

<!-- end list -->

[CHROMOSOME](#CHROMOSOME)<a name="CHROMOSOME"></a>  
: trace が由来する染色体  

  &emsp; Type: varchar(8)  
  &emsp; Example: 11  

  [CHROMOSOME](#CHROMOSOME)は trace が由来する染色体を示します。遺伝子名や cytogenetic position は染色体情報としては適していません。

<!-- end list -->

[CLIP_QUALITY_LEFT](#CLIP_QUALITY_LEFT)<a name="CLIP_QUALITY_LEFT"></a>  
: 信頼性評価に基づくリードの左クリップ位置 (塩基対数)  

  &emsp; Type: int  
  &emsp; Example: 56  

  [CLIP_QUALITY_LEFT](#CLIP_QUALITY_LEFT)は信頼性が低いためクリップされるべきリードの始まりの部分です。ベースコールの信頼性が高い領域をその最初の塩基位置で示します。

<!-- end list -->

[CLIP_QUALITY_RIGHT](#CLIP_QUALITY_RIGHT)<a name="CLIP_QUALITY_RIGHT"></a>  
: 信頼性評価に基づくリードの右クリップ位置 (塩基対数)  

  &emsp; Type: int  
  &emsp; Example: 256  

  [CLIP_QUALITY_RIGHT](#CLIP_QUALITY_RIGHT)は信頼性が低いためクリップされるべきリードの終わりの部分です。ベースコールの信頼性が高い領域をその最後の塩基位置で示します。

<!-- end list -->

[CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT)<a name="CLIP_VECTOR_LEFT"></a><span class="conditionally_required">*</span>  
: ベクター配列に基づくリードの左クリップ位置 (塩基対数)  

  &emsp; Type: int  
  &emsp; Example: 75  

  [CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT) はベクター配列に基づきクリップされるべきリードの始まりの部分です。非ベクター配列の最初の塩基の位置で示します。この項目はほとんど全ての [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です。   この情報は [INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) が記載されている場合，もしくは，[TRACE_TYPE_CODE](#TRACE_TYPE_CODE span>=PCR orRT-PCR の場合には省略できます。

<!-- end list -->

[CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT)<a name="CLIP_VECTOR_RIGHT"></a><span class="conditionally_required">*</span>  
: ベクター配列に基づくリードの右クリップ位置 (塩基対数)  

  &emsp; Type: int  
  &emsp; Example: 275  

  [CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT) はベクター配列に基づきクリップされるべきリードの終わりの部分です。非ベクター配列の最後の塩基の位置で示します 項目はほとんど全ての[STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です。<br>この情報は [INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) が記載されている場合，もしくは，[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=PCR or RT-PCR の場合には省略できます。<br>注意: 多くのセンターではベクター配列解析と信頼性評価を一緒に行っており，１セットのクリップ情報しかない場合がありま の場合は[CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT)と[CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT) に値を記入します。

<!-- end list -->

[CLONE_ID](#CLONE_ID)<a name="CLONE_ID"></a><span class="conditionally_required">*</span>  
: trace が由来するクローン名  

  &emsp; Type: varchar(30)  
  &emsp; Example: RP23-1123F10  

  [CLONE_ID](#CLONE_ID) は個々の BAC，PAC や cDNA クローンの ID です。クローンが Clone Registry
  ([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)) に登録されている場合はstandard clone registry nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))に従って記載します。  
  次の [STRATEGY](#STRATEGY)と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=EST;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND  
  [STRATEGY](#STRATEGY)=CLONE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=ENCODE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN;PrimerWalk;
  CLONEEND  
  [STRATEGY](#STRATEGY)=FINISHING;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[CLONE_ID_LIST](#CLONE_ID_LIST)<a name="CLONE_ID_LIST"></a><span class="conditionally_required">*</span>  
: セミコロンで区切られたクローンのリスト (Strategy が PoolClone の場合)  

  &emsp; Type: varchar(30)  
  &emsp; Example: RP23-200A2;RP23-500P1  

  [CLONE_ID_LIST](#CLONE_ID_LIST)は [STRATEGY](#STRATEGY)=PoolClone の場合にのみ必須です。この場合はセミコロンで区切ったクローンのリストを記載します。クローンが Clone Registry ([http://www.ncbi.nlm.nih.gov/clone/](https://www.ncbi.nlm.nih.gov/clone/)) に登録されている場合は standard cloneregistry nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clo content/overview/)) に従って記載します。  
  注意:リストに含まれるクローン数に制限はありませんが，個々のクローンのサイズは 30 バイトに制限されています。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:   [STRATEGY](#STRATEGY)=PoolClone;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[COLLECTION_DATE](#COLLECTION_DATE)<a name="COLLECTION_DATE"></a><span class="conditionally_required">*</span>  
: 環境サンプルが採取された日時 (例 Mar 2 2006 12:00AM)  

  &emsp; Type: datetime  
  &emsp; Example: Mar 2 2006 12:00AM  

  [COLLECTION_DATE](#COLLECTION_DATE)は環境サンプルが採取された日時を示します。  
  次の [STRATEGY](#STRATEGY)と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Env Sample-Geo; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any[STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[CVECTOR_ACCESSION](#CVECTOR_ACCESSION)<a name="CVECTOR_ACCESSION"></a>  
: クローニングベクター配列の DDBJ/EMBL/GenBank アクセッション番号  

  &emsp; Type: varchar(50)  
  &emsp; Example: AY451994  

  [CVECTOR_ACCESSION](#CVECTOR_ACCESSION)は使用されたクローニングベクターのアクセッション番号です。この番号は[CLONE_ID](#CLONE_ID)に記入されたベクターに対応します。

<!-- end list -->

[CVECTOR_CODE](#CVECTOR_CODE)<a name="CVECTOR_CODE"></a>  
: センターがクローニングベクターに付けたコード  

  &emsp; Type: varchar(50)  
  &emsp; Example: PBACE3.6  

  [CVECTOR_CODE](#CVECTOR_CODE)には登録者がクローニングベクターに付けたコードを記入します。使われた全てのクローニングベクターの配列は DDBJ/EMBL/GenBank に登録することが推奨されます。

<!-- end list -->

[DEPTH](#DEPTH)<a name="DEPTH"></a>  
: 環境サンプルが採取された深度 (メーター)  

  &emsp; Type: float  
  &emsp; Example: 10M  

  [DEPTH](#DEPTH)は水圏や土壌から採取された環境サンプルで記載できます。この値が NULL のときはサンプルが環境の表面から採取されたものとみなされます。この項目は環境サンプルにのみ記載可能ですが必須ではありません。

<!-- end list -->

[ELEVATION](#ELEVATION)<a name="ELEVATION"></a>  
: 環境サンプルが採取された高度 (メーター)  

  &emsp; Type: float  
  &emsp; Example: 500  

  この値が NULL のときはサンプルは海水位で取得されたものとみなされます。この項目はいくつかの環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[ENVIRONMENT_TYPE](#ENVIRONMENT_TYPE)<a name="ENVIRONMENT_TYPE"></a><span class="conditionally_required">*</span>  
: 環境サンプルが採取された環境の種類  

  &emsp; Type: varchar(250)  
  &emsp; Example: sea water  

  [ENVIRONMENT_TYPE](#ENVIRONMENT_TYPE)では環境サンプルが取得された環境の種類を記載します。[LATITUDE](#LATITUDE) と [LONGITUDE](#LONGITUDE)で地理上の位置を示せますが，ある位置には 環境が存在し得ます (土壌，泥，木の根など)。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=PoolClone;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=Env Sample-Geo; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[EXTENDED_DATA](#EXTENDED_DATA)<a name="EXTENDED_DATA"></a>
: EXTENDED_DATA block 中の\<field>タグのなかに記載された任意の追加情報<br>

  &emsp; Type: varchar()<br>
  &emsp; Example:  

  &lt;extended_data&gt;<br>
          &lt;field name='SamplingSiteMonthChlorophyllLevel'&gt;1.4 mg_mm&lt;/field&gt;<br>
          &lt;field name='SamplingSiteYearlyChlorophyllLevel'&gt;1.12 mg_mm&lt;/field&gt;<br>
          &lt;field name='SamplingSiteYearlyChlorophyllLevelStdError'&gt;0.19 mg_mm&lt;/field&gt;<br>
  &lt;/extended_data&gt;<br>
  '=' と区切り文字の '|' は name とその値には使用できません。これらの記号の混入以外はチェックされません。

<!-- end list -->

[FEATURE_ID_FILE](#FEATURE_ID_FILE)<a name="FEATURE_ID_FILE"></a>  
: チップ上の feature とその位置を記載したファイル  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/chip2.cdf  

  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP"のとき [FEATURE_ID_FILE](#FEATURE_ID_FILE)でチップ上の feature の位置と配列を記載したファイルを指定します。

<!-- end list -->

[FEATURE_ID_FILE_NAME](#FEATURE_ID_FILE_NAME)<a name="FEATURE_ID_FILE_NAME"></a><span class="conditionally_required">*</span>  
: 共通の FEATURE_ID_FILE (先に登録します) へのリファレンス  

  &emsp; Type: varchar(200)  
  &emsp; Example:  

  この項目は [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP" のときに必須です。

<!-- end list -->

[FEATURE_SIGNAL_FILE](#FEATURE_SIGNAL_FILE)<a name="FEATURE_SIGNAL_FILE"></a>  
: チップ上の feature のシグナルと分散が記載されたファイル  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/chip2.signal  

  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP"のときにチップ上の feature のシグナルと分散が記載されたファイルを [FEATURE_SIGNAL_FILE](#FEATURE_SIGNAL_FILE)で指定します。

<!-- end list -->

[FEATURE_SIGNAL_FILE_NAME](#FEATURE_SIGNAL_FILE_NAME)<a name="FEATURE_SIGNAL_FILE_NAME"></a><span class="conditionally_required">*</span>  
: 共通の FEATURE_SIGNAL_FILE (先に登録します) へのリファレンス  

  &emsp; Type: varchar(200)  
  &emsp; Example:  

  この項目は [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="CHIP" のときに必須です。

<!-- end list -->

[GENE_NAME](#GENE_NAME)<a name="GENE_NAME"></a>  
: 遺伝子名や遺伝子の ID  

  &emsp; Type: varchar(100)  
  &emsp; Example: transporter 1  

  フリーテキスト。主に [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)='Re-sequencing' or'ENCODE' のときに使われます。研究対象の遺伝子を遺伝子名や何らかの ID で参照します。

<!-- end list -->

[HI_FILTER_SIZE](#HI_FILTER_SIZE)<a name="HI_FILTER_SIZE"></a>  
: 環境サンプルを分取したフィルターで一番大きいサイズ  

  &emsp; Type: varchar(50)  
  &emsp; Example: 50 micron  

  [HI_FILTER_SIZE](#HI_FILTER_SIZE)は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[HOST_CONDITION](#HOST_CONDITION)<a name="HOST_CONDITION"></a>  
: 環境サンプルが採取されたホストの状態  

  &emsp; Type: varchar(100)  
  &emsp; Example: HIV-positive  

  [HOST_CONDITION](#HOST_CONDITION)は環境サンプルでのみ記載可能でホストのコンディション
  (healthy, sick など) を記載します。

<!-- end list -->

[HOST_ID](#HOST_ID)<a name="HOST_ID"></a><span class="conditionally_required">*</span>  
: 環境サンプルが取得されたホストに付けられた固有の ID  

  &emsp; Type: varchar(100)  
  &emsp; Example: yerkes pedigree #C0479 'Clint'  

  [HOST_ID](#HOST_ID)は環境サンプルでのみ記載可能でホストを特定するのに利用されます。  
  次の [STRATEGY](#STRATEGY)と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[HOST_LOCATION](#HOST_LOCATION)<a name="HOST_LOCATION"></a><span class="conditionally_required">*</span>  
: 環境サンプルが採取されたホスト上の特定の場所  

  &emsp; Type: varchar(100)  
  &emsp; Example: rumen  

  [HOST_LOCATION](#HOST_LOCATION)には環境サンプルが採取されたホスト上の特定の場所，例えば dental plaque，hindgut，root surfaces を記載します。  
  次の [STRATEGY](#STRATEGY)と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[HOST_SPECIES](#HOST_SPECIES)<a name="HOST_SPECIES"></a><span class="conditionally_required">*</span>  
: 環境サンプルが採取されたホスト  

  &emsp; Type: varchar(100)  
  &emsp; Example: Pan troglodytes  

  [HOST_SPECIES](#HOST_SPECIES)は環境サンプルでのみ記載可能です。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Env Sample-Host; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[INDIVIDUAL_ID](#INDIVIDUAL_ID)<a name="INDIVIDUAL_ID"></a>  
: trace が由来する個人やサンプルの ID  

  &emsp; Type: varchar(100)  
  &emsp; Example: NA12345  

  [INDIVIDUAL_ID](#INDIVIDUAL_ID)は trace と個人とを結び付けるセンター独自の ID です。この項目は主に population を対象とした研究で使用します。

<!-- end list -->

[INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT)<a name="INSERT_FLANK_LEFT"></a><span class="conditionally_required">*</span>  
: クローニング部位の左に隣接する塩基配列  

  &emsp; Type: varchar(100)  
  &emsp; Example: AAGGTGCGATGCAGTGGCAGTAGCAGTGTCGACGTGACGATTCGTCCGGA  

  [INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) ではクローニング部位の左に隣接するリンカーを含む塩基配列 (50-100 塩基) を記入します。この情報によりユーザは独自にベクターをトリミングすることができます。この項目はほとんど全ての [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) で必須です。この項目は [CLIP_VECTOR_LEFT](#CLIP_VECTOR_LEFT) がある場合には省略できますが，[INSERT_FLANK_LEFT](#INSERT_FLANK_LEFT) への記入を推奨しています。クローニングステップがない場合は 'NONE' と記入します。

<!-- end list -->

[INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT)<a name="INSERT_FLANK_RIGHT"></a><span class="conditionally_required">*</span>  
: クローニング部位の右に隣接する塩基配列  

  &emsp; Type: varchar(100)  
  &emsp; Example: AAGGCGCGATGCAGTGAGCGAGGCTGACGTCGGCTAGCGTCGCGTCGGGT  

  [INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) ではクローニング部位の右に隣接するリンカーを含む塩基配列 (50-100 塩基)　を記入します。この情報によりユーザは独自にベクターをトリミングすることができます。この項目はほとんど全ての [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) で必須です。この項目は [CLIP_VECTOR_RIGHT](#CLIP_VECTOR_RIGHT) がある場合には省略できますが，[INSERT_FLANK_RIGHT](#INSERT_FLANK_RIGHT) への記入を推奨しています。クローニングステップがない場合は 'NONE' と記入します。

<!-- end list -->

[INSERT_SIZE](#INSERT_SIZE)<a name="INSERT_SIZE"></a><span class="conditionally_required">*</span>  
: インサートの平均塩基配列長 (TEMPLATE_ID の値で参照されます)  

  &emsp; Type:int  
  &emsp; Example: 2000  

  [INSERT_SIZE](#INSERT_SIZE)は配列決定されるクローンの期待されるインサート長を示します。あるライブラリーに対して見積もられたインサートの平均長に基づいて記入します。この情報は全ゲノムアセンブリなどの実験にとって重要です。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WGS  
  [STRATEGY](#STRATEGY)=Any;  
  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WCS  
  [STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND  
  [STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND

<!-- end list -->

[INSERT_STDEV](#INSERT_STDEV)<a name="INSERT_STDEV"></a><span class="conditionally_required">*</span>  
: INSERT_SIZE の標準偏差  

  &emsp; Type: int  
  &emsp; Example: 200  

  [INSERT_STDEV](#INSERT_STDEV)はインサート長の標準偏差です。この値は概算値です。  
  次の [STRATEGY](#STRATEGY) と
  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)
  の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WGS  
  [STRATEGY](#STRATEGY)=Any;  
  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WCS  
  [STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND  
  [STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND

<!-- end list -->

[LATITUDE](#LATITUDE)<a name="LATITUDE"></a><span class="conditionally_required">*</span>  
: サンプル採取地点の緯度 (standard GPS notation に基づく)  

  &emsp; Type: float  
  &emsp; Example: 54.736  

  環境サンプルの取得地点の緯度。緯度の範囲は　[-90,90] で，赤道を 0 とし，赤道より北を正の値で，南を負の値で表します。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Env Sample-Geo;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[LIBRARY_ID](#LIBRARY_ID)<a name="LIBRARY_ID"></a><span class="conditionally_required">*</span>  
: CLONE_ID に記載されたクローンのソースライブラリー  

  &emsp; Type: varchar(100)  
  &emsp; Example: RP23  

  [LIBRARY_ID](#LIBRARY_ID) にはクローンのソースライブラリーを記載します。多くのゲノムライブラリーはClone Registry ([http://www.ncbi.nlm.nih.gov/clone](https://www.ncbi.nlm.nih.gov/clone))に既に登録されており，これらのライブラリーについてはstandard nomenclature ([http://www.ncbi.nlm.nih.gov/clone/content/overview/](https://www.ncbi.nlm.nih.gov/clone/content/overview/))に従った名称を使用します。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=cDNA;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=EST;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=CLONEEND;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CLONEEND  
  [STRATEGY](#STRATEGY)=CLONE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any  
  [STRATEGY](#STRATEGY)=ENCODE;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN;PrimerWalk;
  CLONEEND

<!-- end list -->

[LONGITUDE](#LONGITUDE)<a name="LONGITUDE"></a><span class="conditionally_required">*</span>  
: サンプル採取地点の経度 (standard GPS notation に基づく)  

  &emsp; Type: float  
  &emsp; Example: -86.403  

  環境サンプルデータの取得地点の経度。グリニッジ子午線を 0° として，子午線よりも東は +180°，西は -180° です。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Env Sample-Geo; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[LO_FILTER_SIZE](#LO_FILTER_SIZE)<a name="LO_FILTER_SIZE"></a>  
: 環境サンプルを分取したフィルターで一番小さいサイズ  

  &emsp; Type: varchar(50)  
  &emsp; Example: 25 micron  

  [LO_FILTER_SIZE](#LO_FILTER_SIZE)は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[NCBI_PROJECT_ID](#NCBI_PROJECT_ID)<a name="NCBI_PROJECT_ID"></a>  
: INSDC によって管理されている BioProject ID  

  &emsp; Type: int  
  &emsp; Example: 7  

  [NCBI_PROJECT_ID](#NCBI_PROJECT_ID)は trace と [BioProject database](/bioproject/index.html) を結びつけ，プロジェクト単位でのデータ取得を可能にします。シークエンス拠点はゲノム配列データを登録する前に [DDBJ BioProject](/bioproject/index.html) にプロジェクトを登録することができます。プロジェクト登録の時点で配列データを登録する必要はありません。

<!-- end list -->

[ORGANISM_NAME](#ORGANISM_NAME)<a name="ORGANISM_NAME"></a><span class="conditionally_required">*</span>  
: BARCODE プロジェクトにおいて trace が由来する生物種名  

  &emsp; Type: varchar(100)  
  &emsp; Example: Acanthocybium solandri  

  [ORGANISM_NAME](#ORGANISM_NAME)は BARCODE データにおいてリードを生物種ごとに分類するのに使われます。生物種名は[Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/) に従って記載します。全ての BARCODE データでは[SPECIES_CODE](#SPECIES_CODE)="BARCODESPECIES" になります。[STRATEGY](#STRATEGY)=BARCODE の場合に必須です。

<!-- end list -->

[PEAK_FILE](#PEAK_FILE)<a name="PEAK_FILE"></a>  
: peak value が記載されたファイル  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/123clone.peak 説明については  

  [BASE_FILE](#BASE_FILE)をご覧ください。

<!-- end list -->

[PH](#PH)<a name="PH"></a>  
: 環境サンプルが採取された場所の pH  

  &emsp; Type: float  
  &emsp; Example: 7.2  

  [PH](#PH)は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[PICK_GROUP_ID](#PICK_GROUP_ID)<a name="PICK_GROUP_ID"></a>  
: 同じ時に取得された trace をまとめる ID  

  &emsp; Type: int  
  &emsp; Example: 939065  

<!-- end list -->

[PLACE_NAME](#PLACE_NAME)<a name="PLACE_NAME"></a>  
: 生物学的サンプルが得られた地点の国名 and/or 一般に通用する名称  

  &emsp; Type: varchar(250)  
  &emsp; Example: Octopus  

  Springs
  [PLACE_NAME](#PLACE_NAME)は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[PLATE_ID](#PLATE_ID)<a name="PLATE_ID"></a>  
: 登録者が付けたプレート ID  

  &emsp; Type: varchar(32)  
  &emsp; Example: 203  

  [PLATE_ID](#PLATE_ID)と[WELL_ID](#WELL_ID)はシークエンステンプレートが保存された場所を指し示します([CLONE_ID](#CLONE_ID)
  に記載されたクローンの保存場所ではありません)。この情報はこぼれたり何かが混入したプレートを同定するのに役立ちます。プレートを使用しない実験の場合は
  '0' を記入します。

<!-- end list -->

[POPULATION_ID](#POPULATION_ID)<a name="POPULATION_ID"></a>  
: 登録者が trace (もしくは trace のグループ) が由来する population に付けた ID  

  &emsp; Type: varchar(100)  
  &emsp; Example: CEPH  

  [POPULATION_ID](#POPULATION_ID)は集団を特定するのに使われます。この情報は population study (通常 [STRATEGY](#STRATEGY)=SNP)　で使用されます。

<!-- end list -->

[PREP_GROUP_ID](#PREP_GROUP_ID)<a name="PREP_GROUP_ID"></a>  
: 同じ時に調整された trace をまとめる ID  

  &emsp; Type:varchar(30)  
  &emsp; Example: A2

<!-- end list -->

[PRIMER](#PRIMER)<a name="PRIMER"></a>  
: シークエンス反応で使われたプライマー配列  

  &emsp; Type: varchar(200)  
  &emsp; Example:GAATACCTACGATCGCC  

  [PRIMER](#PRIMER)にはシークエンスプライマーの塩基配列を記入します。センターが多種類のプライマーを使っている場合は[PRIMER_CODE](#PRIMER_CODE) に primer code のリストを記載します。

<!-- end list -->

[PRIMER_CODE](#PRIMER_CODE)<a name="PRIMER_CODE"></a>  
: シークエンスプライマーに対するコード  

  &emsp; Type: varchar(30)  
  &emsp; Example: Sp6

<!-- end list -->

[PRIMER_LIST](#PRIMER_LIST)<a name="PRIMER_LIST"></a><span class="conditionally_required">*</span>  
: マッピング実験 (例 AFLP) で使われた ';' で区切られたプライマーのリスト  

  &emsp; Type: varchar(100)  
  &emsp; Example:AAGGTCTGCGCGTGTC;AGCTGCGTACGTAATCG;  

  この項目は[STRATEGY](#STRATEGY)="AFLP" と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)="PCR" の組み合わせのときに必須です。

<!-- end list -->

[PROGRAM_ID](#PROGRAM_ID)<a name="PROGRAM_ID"></a><span class="red">*</span>  
: trace ファイルを作成するのに使われたプログラム  

  &emsp; Type: varchar(100)  
  &emsp; Example: phred-19990722h  

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

[PROJECT_NAME](#PROJECT_NAME)<a name="PROJECT_NAME"></a>  
: 異なるセンターからの trace をまとめる共通したプロジェクト名  

  &emsp; Type: varchar(50)  
  &emsp; Example: New  

  Project シークエンス拠点は共通したプロジェクト名を用いることで，あるプロジェクトから産みだされる全ての trace をグループ化することができます。記載可能なプロジェクト名は制限されています。この項目を利用する場合は事前に DDBJ Trace Archive に連絡し，全てのプロジェクト参加者が同意しているプロジェクト名を伝えます。

<!-- end list -->

[QUAL_FILE](#QUAL_FILE)<a name="QUAL_FILE"></a>  
: quality score を含んだファイル  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./mytraces/123clone.fasta.qs  

  trace ファイルが quality score を含んでいない場合，quality score が含まれた別のファイルを登録します。[QUAL_FILE](#QUAL_FILE) でファイルを指定します。trace (通常は scf) ファイル中の quality score は [QUAL_FILE](#QUAL_FILE) のもので上書きされます。[QUAL_FILE](#QUAL_FILE) と trace ファイルの quality score が同じ場合は QUAL_FILE を登録しないでください。[BASE_FILE](#BASE_FILE) と[QUAL_FILE](#QUAL_FILE) の両方を登録する場合は，あわせて peak index 情報を[PEAK_FILE](#PEAK_FILE) として別ファイルで登録します。

<!-- end list -->

[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)<a name="REFERENCE_ACCESSION"></a><span class="conditionally_required">*</span>  
: リシークエンスプロジェクトで使用されるリファレンス配列のアクセッション番号 (配列を特定するためにバージョン番号も併記します)。 Comparative study の場合はプライマーデザインの情報も付け加えます。  

  &emsp; Type: varchar(50)  
  &emsp; Example: NT_029829.1  

  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Re-sequencing;Comparative [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=Any

<!-- end list -->

[REFERENCE_ACC_MAX](#REFERENCE_ACC_MAX)<a name="REFERENCE_ACC_MAX"></a><span class="conditionally_required">*</span>  
: リシークエンスや比較ゲノム解析における amplicon の終了位置  

  &emsp; Type: int  
  &emsp; Example: 30929  

  この項目は[REFERENCE_ACCESSIOxx(#REFERENCE_ACCESSION)の accession.versionで特定されたリファレンス配列の終端の座標を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Re-sequencing; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN; PCR;RT-PCR

<!-- end list -->

[REFERENCE_ACC_MIN](#REFERENCE_ACC_MIN)<a name="REFERENCE_ACC_MIN"></a><span class="conditionally_required">*</span>  
: リシークエンスや比較ゲノム解析における amplicon の開始位置  

  &emsp; Type: int  
  &emsp; Example: 29829  

  この項目は[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)の accession.versionで特定されたリファレンス配列の開始座標を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:   
  [STRATEGY](#STRATEGY)=Re-sequencing;  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN; PCR;RT-PCR

<!-- end list -->

[REFERENCE_OFFSET](#REFERENCE_OFFSET)<a name="REFERENCE_OFFSET"></a><span class="conditionally_required">*</span>  
: リシークエンス解析でスタートの位置を決める REFERENCE_ACCESSION　で指定された配列におけるオフセット値  

  &emsp; Type: int  
  &emsp; Example: 1520899  

  この項目は[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)の accession.versionで特定されたリファレンス配列の終端の座標を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Re-sequencing; [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=CHIP

<!-- end list -->

[REFERENCE_SET_MAX](#REFERENCE_SET_MAX)<a name="REFERENCE_SET_MAX"></a>  
: リシークエンスされた領域全体の終了位置。この領域は複数の amplicon を含むことがあります  

  &emsp; Type: int  
  &emsp; Example: 29829  

  この項目には[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)の accession.versionで指定されたリシークエンスされた領域全体の終了位置を記入します。スタートを (０ではなく) １とした塩基対座標で記入します。
  REFERENCE_ACC_[MIN|MAX] と REFERENCE_SET_[MIN|MAX]のセットは同じ REFERENCE_ACC を参照する必要があります。

<!-- end list -->

[REFERENCE_SET_MIN](#REFERENCE_SET_MIN)<a name="REFERENCE_SET_MIN"></a>  
: リシークエンスされた領域全体の開始位置。この領域は複数の amplicon を含むことがあります  

  &emsp; Type: int  
  &emsp; Example: 29829  

  この項目には[REFERENCE_ACCESSION](#REFERENCE_ACCESSION)の accession.versionで指定されたリシークエンスされた領域全体の開始位置を記入します。
  スタート を (０ではなく) １とした塩基対座標で記入します。REFERENCE_ACC_[MIN|MAX] と REFERENCE_SET_[MIN|MAX]のセットは同じ REFERENCE_ACC を参照する必要があります。

<!-- end list -->

[RUN_DATE](#RUN_DATE)<a name="RUN_DATE"></a>  
: シークエンス反応が行われた日付  

  &emsp; Type: datetime  
  &emsp; Example: 2000-10-28  

<!-- end list -->

[RUN_GROUP_ID](#RUN_GROUP_ID)<a name="RUN_GROUP_ID"></a>  
: 同じシークエンサーでランされた trace につける ID  

  &emsp; Type: varchar(30)  
  &emsp; Example: group2

<!-- end list -->

[RUN_LANE](#RUN_LANE)<a name="RUN_LANE"></a>  
: trace のレーン，もしくはキャピラリ  

  &emsp; Type: int  
  &emsp; Example: 1  
  [RUN_LANE](#RUN_LANE)には trace が得られたレーンやキャピラリを記入します。

<!-- end list -->

[RUN_MACHINE_ID](#RUN_MACHINE_ID)<a name="RUN_MACHINE_ID"></a>  
: trace が得られたシークエンサーの ID  

  &emsp; Type: varchar(30)  
  &emsp; Example: machine2

<!-- end list -->

[RUN_MACHINE_TYPE](#RUN_MACHINE_TYPE)<a name="RUN_MACHINE_TYPE"></a>  
: trace が得られたシークエンサーのモデル名  

  &emsp; Type: varchar(30)  
  &emsp; Example: ABI 310

<!-- end list -->

[SALINITY](#SALINITY)<a name="SALINITY"></a>  
: 環境サンプルが採取された場所の千分率で表された塩濃度  

  &emsp; Type: float  
  &emsp; Example: 20  
  [SALINITY](#SALINITY)は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[SEQ_LIB_ID](#SEQ_LIB_ID)<a name="SEQ_LIB_ID"></a><span class="conditionally_required">*</span>  
: シークエンスに使用された M13/PUC ライブラリー  

  &emsp; Type: varchar(255)  
  &emsp; Example: 22194  

  シークエンスに用いられた M13/PUC ベースのクローンに対してセンターが独自に付けた ID を記入します。この ID で trace を ligation event でまとめることができるようになります。  
  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせで必須です:  
  [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=SHOTGUN   <br>[STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=WGS/WCS

<!-- end list -->

[SOURCE_TYPE](#SOURCE_TYPE)<a name="SOURCE_TYPE"></a><span class="red">*</span>  
: DNA のソース  

  &emsp; Type: varchar(50)  
  &emsp; Example: GENOMIC DNA  

  [SOURCE_TYPE](#SOURCE_TYPE)に記載可能なコードとその説明は以下です:
    - G=Genomic DNA (ゲノム DNA からの PCR 産物を含む)
    - N=Non Genomic DNA (EST, cDNA, RT-PCR, screenedlibraries)
    - VIRAL RNA=Viral RNA
    - SYNTHETIC=Synthetic DNA
    
  記載可能なコードは G，N，GENOMIC，NON GENOMIC，VIRAL RNA，SYNTHETIC です。

<!-- end list -->

[SPECIES_CODE](#SPECIES_CODE)<a name="SPECIES_CODE"></a><span class="red">*</span>  
: trace が得られた生物種  

  &emsp; Type: varchar(100)  
  &emsp; Example: Homo sapiens  

  [SPECIES_CODE](#SPECIES_CODE)は分類学上の生物種名でリードを分類するのに使われます。この項目はコントロールされています。<br>Trace Archive に含まれている生物種名のリスト:[http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat&f=xml_list_species&m=obtain&s=species](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=stat&f=xml_list_species&m=obtain&s=species)リストに含まれていない生物を登録する場合は，データを投稿する前に DDBJ Trace Archive に連絡します。trace が由来する生物を分類できない場合は，環境サンプルには 'ENVIRONMENTAL SEQUENCE' を人工物には 'ARTIFICIAL SEQUENCE' を使用することができます。

<!-- end list -->

[STRAIN](#STRAIN)<a name="STRAIN"></a><span class="conditionally_required">*</span>  
: trace が由来する strain  

  &emsp; Type: varchar(50)  
  &emsp; Example: C57BL/6J  

  [STRATEGY](#STRATEGY)="SNP" のときに必須です。

<!-- end list -->

[STRATEGY](#STRATEGY)<a name="STRATEGY"></a><span class="red">*</span>  
: 実験的な strategy  

  &emsp; Type: varchar(50)  
  &emsp; Example: MODEL VERIFY  

  trace を得る上で採用された実験上の [STRATEGY](#STRATEGY)。値はコントロールされていますが，登録者はリストへの新しい用語の追加を申請することができます。  
    
  記載可能な用語 (このリストは拡張され続けています):
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

[SUBMISSION_TYPE](#SUBMISSION_TYPE)<a name="SUBMISSION_TYPE"></a><span class="red">*</span>  
: submission の種類  

  &emsp; Type: varchar(50)  
  &emsp; Example: NEW  

  記載可能な値:  
    - NEW: 新しいデータを登録するとき
    - UPDATE:trace とメタデータを更新するとき。以前のデータは TI とともに保存され，更新された trace には新しい
      TI が付与され active になります。
    - UPDATEINFO:登録済みの trace を変えることなくメタデータのみを更新するとき
    - WITHDRAW:trace を withdraw するとき

<!-- end list -->

[SVECTOR_ACCESSION](#SVECTOR_ACCESSION)<a name="SVECTOR_ACCESSION"></a>  
: シークエンスベクターの DDBJ/EMBL/GenBank アクセッション番号  

  &emsp; Type: varchar(50)  
  &emsp; Example: X52325

<!-- end list -->

[SVECTOR_CODE](#SVECTOR_CODE)<a name="SVECTOR_CODE"></a>  
: センターが独自にシークエンスベクターに付けたコード  

  &emsp; Type: varchar(50)  
  &emsp; Example: pBluescript SK(+)

<!-- end list -->

[TEMPERATURE](#TEMPERATURE)<a name="TEMPERATURE"></a>  
: 環境サンプルが採取された地点の温度 (<sup>o</sup>C)  

  &emsp; Type: float  
  &emsp; Example: 30  

  [TEMPERATURE](#TEMPERATURE)は環境サンプルでのみ記載可能ですが必須ではありません。

<!-- end list -->

[TEMPLATE_ID](#TEMPLATE_ID)<a name="TEMPLATE_ID"></a>  
: 登録者がシークエンスしたテンプレートに付けた ID  

  &emsp; Type: varchar(50)  
  &emsp; Example: HBBBA2211  

  [TEMPLATE_ID](#TEMPLATE_ID)は実際にシークエンスされたテンプレートを同定するのに使われます。この情報と TRACE_END を組み合わせ，ある２つの trace が同じクローンの両側から得られた 'mate_pairs' かどうか判断しています。

<!-- end list -->

[TRACE_END](#TRACE_END)<a name="TRACE_END"></a>  
: リードに含まれるテンプレートの向き  

  &emsp; Type: varchar(50)  
  &emsp; Example: F  

  [TRACE_END](#TRACE_END) は以下の値を持てます:
    - F: FORWARD
    - R: REVERSE
    - N: UNKNOWN

<!-- end list -->

[TRACE_FILE](#TRACE_FILE)<a name="TRACE_FILE"></a><span class="red">*</span>  
: ルートからの trace ファイルまでの絶対パス  

  &emsp; Type: varchar(200)  
  &emsp; Example: ./traces/TRACE001.scf

<!-- end list -->

[TRACE_FORMAT](#TRACE_FORMAT)<a name="TRACE_FORMAT"></a><span class="red">*</span>  
: trace のファイル形式  

  &emsp; Type: varchar(20)  
  &emsp; Example: scf  

  [TRACE_FORMAT](#TRACE_FORMAT)は以下の値を持てます:
    - SCF - DNA シークエンス装置から出力される標準的なフォーマット
    - ABI - ABI-tracefile は trace データと塩基配列を含むバイナリーファイルです

<!-- end list -->

[TRACE_NAME](#TRACE_NAME)<a name="TRACE_NAME"></a><span class="red">*</span>  
: 登録者が trace に付ける名前  

  &emsp; Type: varchar(250)  
  &emsp; Example: HBBBA1U2211  

  [TRACE_NAME](#TRACE_NAME)はセンター単位でユニークであればよく，センター間でユニークである必要はありません。Trace
  Archive では [TRACE_NAME](#TRACE_NAME) と [CENTER_NAME](#CENTER_NAME) の組み合わせがユニークなキーとして働きます。

<!-- end list -->

[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)<a name="TRACE_TYPE_CODE"></a><span class="red">*</span>  
: trace が取得されたシークエンス strategy  

  &emsp; Type: varchar(50)  
  &emsp; Example: wgs  

  [TRACE_TYPE_CODE](#TRACE_TYPE_CODE)
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
      [STRATEGY](#STRATEGY)
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

[TRANSPOSON_ACC](#TRANSPOSON_ACC)<a name="TRANSPOSON_ACC"></a><span class="conditionally_required">*</span>  
: シークエンステンプレートを生成するのに使われたトランスポゾンの DDBJ/EMBL/GenBank アクセッション番号  

  &emsp; Type: varchar(50)  
  &emsp; Example: X00913  

  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせの時に必須です:
  [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=TRANSPOSON

<!-- end list -->

[TRANSPOSON_CODE](#TRANSPOSON_CODE)<a name="TRANSPOSON_CODE"></a><span class="conditionally_required">*</span>  
: シークエンステンプレートを生成するのに使われたトランスポゾンにセンターが付けたコード  

  &emsp; Type: varchar(50)  
  &emsp; Example: Mu transposon  

  次の [STRATEGY](#STRATEGY) と [TRACE_TYPE_CODE](#TRACE_TYPE_CODE) の組み合わせの時に必須です:
  [STRATEGY](#STRATEGY)=Any;[TRACE_TYPE_CODE](#TRACE_TYPE_CODE)=TRANSPOSON

<!-- end list -->

[WELL_ID](#WELL_ID)<a name="WELL_ID"></a>  
: シークエンス反応が行われたウェルにセンターが付けた ID  

  &emsp; Type: varchar(50)  
  &emsp; Example: A1  

  [WELL_ID](#WELL_ID) は [PLATE_ID](#PLATE_ID) と一緒にシークエンス反応が行われた場所を特定するのに利用されます
  ([WELL_ID](#PLATE_ID) も参照)。通常シークエンス反応は標準的な 96 もしくは 384 穴プレートで行われます
  (下の標準的なウェルの配置図を参照)。  
  ![標準的な 96 穴プレートの配置]({{ site.baseurl }}/assets/images/submission/96well.jpg
  "標準的な 96 穴プレートの配置")  
  標準的な 96 穴プレートの配置  
  ![標準的な 384 穴プレートの配置]({{ site.baseurl }}/assets/images/submission/384well.jpg
  "標準的な 384 穴プレートの配置")  
  標準的な 384 穴プレートの配置

### Internal Fields List <a name="Internal-Fields-List"></a>

[BASECALL_LENGTH](#BASECALL_LENGTH)<a name="BASECALL_LENGTH"></a>  
: trace の塩基長  

  &emsp; Type: int  
  &emsp; Example: 396

<!-- end list -->

[BASES_20](#BASES_20)<a name="BASES_20"></a>  
: quality score が 20 を超える塩基数  

  &emsp; Type: smallint  
  &emsp; Example: 50  

  注意:quality score がない登録がいくつか存在します。これは ABI ファイルだけが登録され， quality
  call が別ファイルで登録されなかったためです。

<!-- end list -->

[BASES_40](#BASES_40)<a name="BASES_40"></a>  
: quality score が 40 を超える塩基数  

  &emsp; Type: smallint  
  &emsp; Example: 50  

  注意:quality score がない登録がいくつか存在します。これは ABI ファイルだけが登録され， quality call が別ファイルで登録されなかったためです。

<!-- end list -->

[BASES_60](#BASES_60)<a name="BASES_60"></a>  
: quality score が 60 を超える塩基数  

  &emsp; Type: smallint  
  &emsp; Example: 50  

  注意:quality score がない登録がいくつか存在します。これは ABI ファイルだけが登録され， quality call が別ファイルで登録されなかったためです。

<!-- end list -->

[LOAD_DATE](#LOAD_DATE)<a name="LOAD_DATE"></a>  
: データがロードされた日付  

  &emsp; Type: smalldatetime  
  &emsp; Example: Jan 8 2001 11:59AM

<!-- end list -->

[MATE_PAIR](#MATE_PAIR)<a name="MATE_PAIR"></a>  
: 同じテンプレートの逆方向から得られたリードの TI 番号  

  &emsp; Type: int  
  &emsp; Example: 203682255 MATE PAIR  

  は同じテンプレートの両方向 (FORWARD と REVERSE) から得られたリード。

<!-- end list -->

[REPLACED_BY](#REPLACED_BY)<a name="REPLACED_BY"></a>  
: "active" な TI を置き換えた TI  

  &emsp; Type: int  
  &emsp; Example: 304753779  

  この項目は最新のデータセットを指し示します。trace が更新された場合[REPLACED_BY](#REPLACED_BY) は新しい[TI](#TI)が入力されます。メタデータのみが更新された場合は
  replaced_by=0 で表示されません。

<!-- end list -->

[STATE](#STATE)<a name="STATE"></a>  
: trace の status  

  &emsp; Type: varchar  
  &emsp; Example: active  

  取り得る値:
    - active
    - updated
    - withdrawn

<!-- end list -->

[TAXID](#TAXID)<a name="TAXID"></a>  
: NCBI Taxonomy ID  

  &emsp; Type: int  
  &emsp; Example: 10090  

  DDBJ Trace Archive と [NCBI Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?) とを結びつけます。

<!-- end list -->

[TI](#TI)<a name="TI"></a>  
: trace 固有のアクセッション番号  

  &emsp; Type: int  
  &emsp; Example: 304753779  

  trace がデータベースにロードされた時点で TI が付与されます。どのようなレコードでも TI で取得できます。

<!-- end list -->

[UPDATE_DATE](#UPDATE_DATE)<a name="UPDATE_DATE"></a>  
: データが update/replace された日時  

  &emsp; Type: smalldatetime  
  &emsp; Example: Jul 19 2001 3:48PM   

  最後に更新された日時が記録されます。

## trace データの登録 <a name="trace-data-submission"></a>

{::options parse_block_html="true" /}
<div class="attention">
ヒトを対象とした研究データの登録について<br>
<span class="red">ヒトを対象とした全ての研究において DDBJ に送付するデータの由来である個人 (被験者)
の情報・プライバシーは，適用されるべき法律，規定，登録者が所属している機関の方針に従い，登録者の責任において保護されている必要があります。  
原則として，被験者を直接特定し得る参照情報は，登録データから取り除いてください。  
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)をご覧ください。</span>
</div>

### TI 番号 <a name="ti-number"></a>

[DDBJ Trace Archive (DTA)](index.html) への登録には[メタデータ](#metadata)と [trace](#TRACE_FORMAT) ファイルが必要です。 ユニークなアクセッション番号 ([TI 番号](#TI)) は trace データが [NCBI Trace Archive](https://www.ncbi.nlm.nih.gov/Traces) に登録されるときに割り振られます。 TI 番号が発行されたデータは即日公開されます。

<span class="red"> TI 番号発行後，データは即日公開されます。 </span>

### 登録に必要なファイル <a name="create-submission-files"></a>

テキストファイル (TRACEINFO ファイル) に trace データに関するメタデータを記述し，trace ファイルの場所を指定します。 トップディレクトリを作成し，全てのメタデータファイルをトップディレクトリ下に配置します。 また trace ファイルは，トップディレクトリ下に１つ以上のディレクトリを作成し，その内に配置します。 trace ファイル ([SCF](#TRACE_FORMAT)，[ABI](#TRACE_FORMAT) フォーマットのどちらの場合 も) はトップレベルではなく，サブディレクトリのなかに配置されている必要があります。 サブディレクトリ名 は trace やプロジェクトの名前を使うことを推奨します。 さらにサブディレクトリを作成し trace をグループに分けることができます。

以下は登録ディレクトリの構成例です。

#### 登録ディレクトリの構成例 <a name="登録ディレクトリの構成例"></a>

```
TOP_DIRECTORY/
TOP_DIRECTORY/TRACEINFO
TOP_DIRECTORY/traces
TOP_DIRECTORY/traces/FLJ/
TOP_DIRECTORY/traces/FLJ/FLJA1U0001.scf
TOP_DIRECTORY/traces/FLJ/FLJA1U0002.scf
TOP_DIRECTORY/traces/FLJ/FLJA1U0003.scf
```

[メタデータ](#metadata)ファイルは XML かタブ区切りテキストファイル形式にします。 STRATEGY と TRACE_TYPE_CODE の組み合わせで必須になるメタデータ項目一覧は [Validation Table]({{ site.baseurl }}/assets/files/submission/field_matrix_current.xls) をご覧ください。どちらの形式のメタデータでも最初に共通項目のセクションを含めることができます。 このセクションには各 trace に共通する項目を記載します。

以下は TRACEINFO メタデータファイルの例です。

#### TRACEINFO xml ファイルの例 <a name="TRACEINFO_xml_ファイルの例"></a>

```
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

#### TRACEINFO タブ区切りテキストファイルの例 <a name="TRACEINFO_タブ区切りテキストファイルの例"></a>

```
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

### アカウントの取得 <a name="create-account"></a>

[DDBJ 登録用アカウント](/account.html)を取得します。

### 登録用ファイルのアップロード <a name="upload-submission-files"></a>

[DTA チームに連絡](/contact-ddbj.html)し，登録用ディレクトリの作成を依頼します。 [マニュアル](/dra/submission.html#upload-sequence-data)に従いファイルを SCP で転送します。

#### 登録ディレクトリの例 <a name="登録ディレクトリの例">

```
submission/submitter_id/dta/dta_submitter_id-0001
```

<span class="red"> DTA の登録用ディレクトリは [DDBJ Sequence Read Archive](/dra/index.html) とは別になります。 </span>

### 登録の完了 <a name="completion-submission"></a>

登録の完了後，登録者が公開を指示するまで DTA はデータを非公開にします。 データ公開の指示があれば DTA は NCBI Trace Archive にデータをアップロードします。データが NCBI Trace Archive にロードされると TI 番号が発行されデータは公開されます。

<span class="red">TI 番号の発行とデータ公開は同時になります。</span>

### データの更新 <a name="update"></a>

データを更新するときは [DTA チームまでご連絡ください](/contact-ddbj.html)。
