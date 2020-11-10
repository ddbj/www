---
layout: indexed_content
title: ARSA 
category: services
lang: ja
related_pages:
  - title: BLAST ヘルプ
    url: /services/blast.html
  - title: getentry ヘルプ
    url: /services/getentry.html
  - title: VecScreen ヘルプ
    url: /services/vecscreen.html
  - title: ClustalW ヘルプ
    url: /services/clustalw.html
  - title: TXSearch ヘルプ
    url: /services/txsearch.html
  - title: 過去のサービス
    url: /services/services/past-services.html
  - title: 関連論文
    url: /services/services/references.html
  - title: WABI (Web API for Biology)
    url: /services/services/wabi.html
  - title: WABI BLAST ヘルプ
    url: /services/wabi-blast.html
  - title: WABI ClustalW ヘルプ
    url: /services/wabi-clustalw.html
  - title: WABI VecScreen ヘルプ
    url: /services/wabi-vecscreen.html
  - title: WABI MAFFT ヘルプ
    url: /services/wabi-mafft.html
  - title: Pipeline ヘルプ
    url: /services/pipeline.html
---

## 検索対象データベース

ARSA では、以下が検索可能です

データベース名           | 備考    
----------------- | ------
DDBJ 最新リリースデータ    |   |     
DDBJ 新着データ        |       | 
JPO 経由のアミノ酸特許データ  |      |  
KIPO 経由のアミノ酸特許データ | 更新は不定期

* [WGS](/ddbj/wgs.html)(WGS Scaffold CON含), TSAの一部, [MGA](/ddbj/mga.html)　など、[アクセッション番号](/ddbj/flat-file.html#Accession)が通常データとは異なるものは ARSA では検索できません。
* [DRA](/dra/index.html)データ（次世代シークエンサからの出力データ）はARSA では検索できません。[DRA Search](http://ddbj.nig.ac.jp/DRASearch) をご利用ください。

## Quick Search

Quick Search 画面の使用例です。入力テキスト欄で論理演算子(AND, OR, NOT) を使用する場合には大文字で入力します。

AND 検索（検索キーワードをすべて記載するものを検索）
:	検索キーワードを列挙します。
:	[入力テキスト欄にlung cancerと入力して、「AND」を選択して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=lung+cancer&operator=AND)
:	例: DEFINITIONに「～ Human lung cancer associated ～」と記載されたもの  
:	例: REFERENCE TITLEに「～ National Cancer Institute ～」と記載されていて、かつFEATURESに「～ Lung Focal Fibrosis ～」と記載されたもの。

部分一致検索（単語の一部分に検索キーワードを含んでいる単語を記載するものを検索）
:	ワイルドカード * を含む検索キーワードを指定します
:	[入力テキスト欄に Hom* と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=Hom*&operator=AND)
:	例: SOURCE ORGANISM に「～ Hominidae; ～」と記載されたもの

フレーズ検索（検索キーワードを語順の通りに記載するものを検索）
:	検索キーワードを " で囲むと特殊な意味を持つ文字も、ただの検索キーワードとして検索します
:	[入力テキスト欄に "lung cancer" と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22lung+cancer%22&operator=AND)
:	例: DEFINITION に「～ Human lung cancer associated ～」と記載されたもの

OR 検索（検索キーワードのいずれかを記載するものを検索）
:	検索キーワードを OR で連結します。または、選択肢「OR」を指定します。
:	以下の２通りの検索方法は同じ結果を示します
:	[入力テキスト欄に "stomach cancer" OR "gastric cancer" と入力して、「AND」のままにして、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+OR+%22gastric+cancer%22&operator=AND)
:	[入力テキスト欄に "stomach cancer" "gastric cancer" と入力して、「OR」を選択して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+%22gastric+cancer%22&operator=OR)
:	例: DEFINITION に「～ Homo sapiens stomach cancer ～」と記載されたもの  
:	例: REFERENCE TITLE に「～ human gastric cancer ～」と記載されたもの

NOT 検索（検索キーワードを記載しないものを検索)
:	除外したい検索キーワードの前に NOT を付けます。
:	[入力テキスト欄に cancer NOT "Homo sapiens" と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=cancer+NOT+%22Homo+sapiens%22&operator=AND)
:	例: COMMENT に「～ Mouse Cancer Genetics ～」と記載されたもの。

検索フィールドを指定した検索（指定位置に検索キーワードを記載するものを検索)
:	検索キーワードの中に検索フィールド名を含める方法と、 Advanced Search 画面を利用する方法の二通りがあります。  
:	検索フィールドについての詳細は、後述します。  
:	Advanced Search 画面については、後述します。  
:	検索キーワードの前に検索フィールド名および : を付けます。

[入力テキスト欄に Keyword:HTG と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=Keyword%3AHTG&operator=AND)
:	例: KEYWORDS に「HTG」と記載されたもの。
:	[入力テキスト欄に ReferencePubmedID:1111111 と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=ReferencePubmedID%3A1111111&operator=AND)
:	例: REFERENCE PUBMED に「1111111」と記載されたもの
:	[入力テキスト欄に FeatureQualifier:"CDS /gene=DRB6" と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=FeatureQualifier%3A%22CDS+%2Fgene%3DDRB6%22&operator=AND)
:	例: FEATURES の CDS に「/gene="DRB6"」と記載されたもの。

正規表現による検索
:	いくつかの検索フィールドでは、正規表現形式の検索キーワードで検索できます。  
:	検索キーワードを / で囲みます。
:	[入力テキスト欄に PrimaryAccessionNumber:/AA[1-9]00000/ と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=PrimaryAccessionNumber%3A%2FAA%5B1-9%5D00000%2F&operator=AND)
:	例: ACCESSION の先頭に「AA100000」や「AA900000」と記載されたもの  
:	ACCESSION の先頭に「AA000000」と記載されたものは、検索条件に合致しません

範囲指定による検索
:	検索キーワードを [ と ] で囲んで、範囲を TO で連結します
:	[入力テキスト欄に SequenceLength:[* TO 500] と入力して、「Search」ボタンをクリックした場合の検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=SequenceLength%3A%5B*+TO+500%5D&operator=AND)
:	例: LOCUS の配列長が「500」以下のもの。

## Advanced Search

Advanced Search 画面の使用例です。

基本的な検索例 検索したいフィールドの入力欄に検索キーワードを入力
:	[「Definition」欄に human と入力して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
:	例: DEFINITION に「～ Human parvovirus ～」と記載されたもの

単一の検索フィールドに対する OR 検索 検索したいフィールドの入力欄に検索キーワードを列挙
:	[「Definition」欄に stomach gastric と入力して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=stomach+gastric&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
:	例: DEFINITION に「～ human gastric lipase ～」と記載されたもの
:	例:	DEFINITION に「～ related to stomach cancer ～」と記載されたもの

単一の検索フィールドに対する AND 検索 検索したいフィールドの入力欄に検索キーワードを AND で連結
:	[「Definition」欄に stomach AND gastric と入力して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=stomach+AND+gastric&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
:	例: DEFINITION に「～ male stomach cDNA ～ polypeptide, gastric specific ～」と記載されたもの

複数の検索フィールドに対する OR 検索 選択肢 OR を選んで検索
:	[「Definition」欄に human と入力して、「Reference Title」欄に human と入力して、「Combine Searches with」で OR を選択して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=human&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=OR)
:	例: DEFINITION に「～ Human metapneumovirus ～」と記載されたもの
:	例: REFERENCE TITLE に「～ human cDNA project ～」と記載されたもの

複数の検索フィールドに対する AND 検索 選択肢 AND を選んで検索
:	[「Definition」欄に human と入力して、「Reference Title」欄に human と入力して、「Combine Searches with」で AND を選択して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=human&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
:	例: DEFINITION に「～ Human glucocerebrosidase ～」と記載されていて、かつ REFERENCE TITLE に「～ expression of human ～」と記載されたもの。

Feature/Qualifier の部分一致検索 Feature Key 、 Qualifier Name 、 Qualifier Value を指定して検索
:	[「Features」の「Feature Key」欄に CDS と入力、「Qualifier Name」欄に translation と入力、「Qualifier Value」欄に AAA*CC と入力して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=CDS&fq%5B0%5D.qualifierName=translation&fq%5B0%5D.qualifierValue=AAA&lowast;CC&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
:	例: FEATURES の CDS に「/translation="～AAA～CC～"」と記載されたもの
:	[Features」の「Feature Key」欄に CDS と入力、「Qualifier Name」欄に gene と入力、「Qualifier Value」欄に p53 と入力して、「Search」ボタンをクリックした場合の 検索結果例](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=CDS&fq%5B0%5D.qualifierName=gene&fq%5B0%5D.qualifierValue=p53&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
:	例: FEATURES の CDS に「/gene="p53"」と記載されたもの
:	例: FEATURES の CDS に「/gene="p53R2"」と記載されたもの


## 検索フィールドの詳細

参考: [「Available Fields」](http://ddbj.nig.ac.jp/arsa/quick_search?lang=ja)

<table>
        <caption>※正規表現検索可（<span>AllText</span>を除く）</caption>
        <thead>
          <tr>
            <th>検索フィールド名</th>
            <th>略称</th>
            <th>説明</th>
            <th>例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>PrimaryAccessionNumber</span></td>
            <td><span>pa</span></td>
            <td><a href="/ddbj/flat-file.html#Accession"><span>ACCESSION</span> の先頭に記載された「Accession 番号」</a></td>
            <td><span>AB999999</span></td>
          </tr>
          <tr>
            <td><span>AccessionNumber</span></td>
            <td><span>an</span></td>
            <td><a href="/ddbj/flat-file.html#Accession"><span>ACCESSION</span> に記載された「Accession 番号」</a></td>
            <td><span>AB999999, AB888888, AB777777</span></td>
          </tr>
          <tr>
            <td><span>Division</span></td>
            <td><span>dv</span></td>
            <td><a href="/ddbj/flat-file.html#Division"><span>LOCUS</span> に記載された「Division」</a></td>
            <td><span>HUM</span></td>
          </tr>
          <tr>
            <td><span>SequenceLength</span></td>
            <td><span>sl</span></td>
            <td><a href="/ddbj/flat-file.html#SequenceLength"><span>LOCUS</span> に記載された「配列長」</a></td>
            <td><span>450</span></td>
          </tr>
          <tr>
            <td><span>MolecularType</span></td>
            <td><span>mt</span></td>
            <td>
<a href="/ddbj/flat-file.html#MoleculeType"><span>LOCUS</span> に記載された「塩基配列の分子タイプ」</a><br>
                <a href="/activities/patent.html#4">PRT はJPO, KIPO 経由のアミノ酸特許配列データ</a>
</td>
            <td><span>mRNA</span></td>
          </tr>
          <tr>
            <td><span>MolecularForm</span></td>
            <td><span>mf</span></td>
            <td><a href="/ddbj/flat-file.html#MoleculeForm"><span>LOCUS</span> に記載された「塩基配列の分子形態」</a></td>
            <td><span>linear</span></td>
          </tr>
          <tr>
            <td><span>Date</span></td>
            <td><span>dt</span></td>
            <td><a href="/ddbj/flat-file.html#ModificationDate"><span>LOCUS</span> に記載された「データの最終公開日」</a></td>
            <td><span>01-JUN-2009</span></td>
          </tr>
          <tr>
            <td><span>Definition</span></td>
            <td><span>df</span></td>
            <td><a href="/ddbj/flat-file.html#Definition"><span>DEFINITION</span> に記載されたテキスト</a></td>
            <td><span>Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate<br>
              dehydrogenase, partial cds.</span></td>
          </tr>
          <tr>
            <td><span>Comment</span></td>
            <td><span>cm</span></td>
            <td><a href="/ddbj/flat-file.html#Comment"><span>COMMENT</span> に記載されたテキスト</a></td>
            <td><span>Human cDNA sequencing project.</span></td>
          </tr>
          <tr>
            <td><span>Keyword</span></td>
            <td><span>kw</span></td>
            <td><a href="/ddbj/flat-file.html#Keywords"><span>KEYWORDS</span> に記載されたテキスト</a></td>
            <td><span>HTC, HTC_FLI, oligo capping</span></td>
          </tr>
          <tr>
            <td><span>Organism</span></td>
            <td><span>og</span></td>
            <td><a href="/ddbj/flat-file.html#Organism"><span>ORGANISM</span> に記載された「由来生物名」</a></td>
            <td><span>Homo sapiens</span></td>
          </tr>
          <tr>
            <td><span>Lineage</span></td>
            <td><span>ln</span></td>
            <td><a href="/ddbj/flat-file.html#Organism"><span>ORGANISM</span> に記載された「生物学的分類」</a></td>
            <td><span>Eukaryota, Metazoa, ..., Hominidae, Homo</span></td>
          </tr>
          <tr>
            <td><span>ReferenceAuthor</span></td>
            <td><span>ra</span></td>
            <td><a href="/ddbj/flat-file.html#Reference1"><span>REFERENCE</span> の <span>AUTHORS</span> に記載されたテキスト</a></td>
            <td><span>Mishima,H. , Shizuoka,T. , Fuji,I.</span></td>
          </tr>
          <tr>
            <td><span>ReferenceTitle</span></td>
            <td><span>rt</span></td>
            <td><a href="/ddbj/flat-file.html#Reference1"><span>REFERENCE</span> の <span>TITLE</span> に記載されたテキスト</a></td>
            <td><span>Direct Submission , Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver</span></td>
          </tr>
          <tr>
            <td><span>ReferenceJournal</span></td>
            <td><span>rj</span></td>
            <td><a href="/ddbj/flat-file.html#Reference1"><span>REFERENCE</span> の <span>JOURNAL</span> に記載されたテキスト</a></td>
            <td><span>Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.<br>
              Contact:Hanako Mishima<br>
              National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,<br>
              Mishima, Shizuoka 411-8540, Japan , Unpublished (2009)</span></td>
          </tr>
          <tr>
            <td><span>ReferencePubmedID</span></td>
            <td><span>rp</span></td>
            <td>
<span>REFERENCE</span> の <span>PUBMED</span> に記載されたテキスト</td>
            <td><span>1111111</span></td>
          </tr>
          <tr>
            <td><span>Feature</span></td>
            <td><span>fe</span></td>
            <td><a href="/ddbj/flat-file.html#Features"><span>FEATURES</span> に記載された「Feature 単位のテキスト」</a></td>
            <td><pre><code>source 1..450
/chromosome="12" 
/clone="GT200015" 
/clone_lib="lambda gt11 human liver cDNA (GeneTech.
No.20)" 
/db_xref="taxon:9606" 
/map="12p13" 
/mol_type="mRNA" 
/organism="Homo sapiens" 
/tissue_type="liver"
CDS 86..&gt;450
/codon_start=1
/gene="GAPD" 
/product="glyceraldehyde-3-phosphate dehydrogenase" 
/protein_id="BAA12345.1" 
/transl_table=1
/translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
VFTDKDKAVAQLKGGAKKV" </code></pre></td>
          </tr>
          <tr>
            <td><span>FeatureQualifier</span></td>
            <td><span>fq</span></td>
            <td><a href="/ddbj/flat-file.html#Features"><span>FEATURES</span> に記載された「Qualifier 単位のテキスト」</a></td>
            <td><pre><code>source 1..450
source /chromosome=12
CDS /translation=MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
VFTDKDKAVAQLKGGAKKV</code></pre></td>
          </tr>
           <tr>
            <td><span>AllText</span></td>
            <td><span>at</span></td>
            <td><a href="/ddbj/flat-file.html">フラットファイルに記載された全テキスト</a></td>
            <td><span>LOCUS ～ //</span></td>
          </tr>
        </tbody>
      </table>

※正規表現検索可（AllTextを除く）

    LOCUS       AB000000              450 bp    mRNA    linear   HUM 01-JUN-2009
    DEFINITION  Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate dehydrogenase, partial cds.
    ACCESSION   AB999999 AB888888 AB777777
    VERSION     AB000000.1
    KEYWORDS    HTC; HTC_FLI; oligo capping.
    SOURCE      Homo sapiens (human)
      ORGANISM  Homo sapiens
                Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
                Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
                Catarrhini; Hominidae; Homo.
    REFERENCE   1  (bases 1 to 450)
      AUTHORS   Mishima,H. and Shizuoka,T.
      TITLE     Direct Submission
      JOURNAL   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
                Contact:Hanako Mishima
                National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
                Mishima, Shizuoka 411-8540, Japan
       PUBMED   1111111
    REFERENCE   2
      AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
      TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
      JOURNAL   Unpublished (2009)
    COMMENT     Human cDNA sequencing project.
    FEATURES             Location/Qualifiers
         source          1..450
                         /chromosome="12" 
                         /clone="GT200015" 
                         /clone_lib="lambda gt11 human liver cDNA (GeneTech.
                         No.20)" 
                         /db_xref="taxon:9606" 
                         /map="12p13" 
                         /mol_type="mRNA" 
                         /organism="Homo sapiens" 
                         /tissue_type="liver" 
         CDS             86..&gt;450
                         /codon_start=1
                         /gene="GAPD" 
                         /product="glyceraldehyde-3-phosphate dehydrogenase" 
                         /protein_id="BAA12345.1" 
                         /transl_table=1
                         /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                         YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                         VFTDKDKAVAQLKGGAKKV" 
    BASE COUNT          102 a          119 c          131 g           98 t
    ORIGIN
            1 cccacgcgtc cggtcgcatc gcacttgtag ctctcgaccc ccgcatctca tccctcctct
           61 cgcttagttc agatcgaaat cgcaaatggc gaagattaag atcgggatca atgggttcgg
          121 gaggatcggg aggctcgtgg ccagggtggc cctgcagagc gacgacgtcg agctcgtcgc
          181 cgtcaacgac cccttcatca ccaccgacta catgacatac atgttcaagt atgacactgt
          241 gcacggccag tggaagcatc atgaggttaa ggtgaaggac tccaagaccc ttctcttcgg
          301 tgagaaggag gtcaccgtgt tcggctgcag gaaccctaag gagatcccat ggggtgagac
          361 tagcgctgag tttgttgtgg agtacactgg tgttttcact gacaaggaca aggccgttgc
          421 tcaacttaag ggtggtgcta agaaggtctg
    //

## 検索キーワードの書式

検索フィールドの指定
:	(検索フィールド名 または 略称) + ':' + (検索キーワード)

論理演算子 (AND, OR, NOT 検索)
:	(検索キーワード) + ' AND ' + (検索キーワード)  
:	(検索キーワード) + ' && ' + (検索キーワード)  
:	(検索キーワード) + ' +' + (検索キーワード)
:	(検索キーワード) + ' OR ' + (検索キーワード)  
:	(検索キーワード) + ' &#124;&#124; ' + (検索キーワード)
:	(検索キーワード) + ' NOT ' + (検索キーワード)  
:	(検索キーワード) + ' -' + (検索キーワード)

グループ化
:	'(' + (検索キーワード) + (論理演算子) + (検索キーワード) + ')'

範囲検索
:	(検索フィールド名 または 略称) + ':[' + (開始値 または '*') + ' TO ' + (終了値 または '*') + ']'  
:	開始値、終了値を含む検索
:	(検索フィールド名 または 略称) + ':{' + (開始値 または '*') + ' TO ' + (終了値 または '*') + '}'  
:	開始値、終了値を含まない検索

ワイルドカード検索
:	(検索キーワード) + '*'
:	'*' + (検索キーワード)
:	(検索キーワード) + '*' + (検索キーワード)  
:	'*' は、 0 文字以上の任意テキストにマッチ
:	(検索キーワード) + '?' + (検索キーワード)  
:	'?' は、任意の 1 文字にマッチ

フレーズ検索
:	検索キーワードを、順序通りに検索する場合。または、特殊な意味を持つ文字を検索する場合  
:	"' + (検索キーワード) + '"'

正規表現検索
:	'/' + (検索キーワード) + '/'

正規表現の例
:	. (任意の 1 文字) <br>例: /Homini.ae/ は、 'Hominidae', 'Homininae' 等に合致します。
:	\* (直前の文字が 0 個以上)<br>例: /AB0*/ は、 'AB', 'AB0', 'AB00', 'AB000', ... 等に合致します。
:	.* (任意の文字列。長さ 0 の空文字列も含む。)<br>例: /AB.*/ は、 'AB', 'AB0', 'AB789', 'ABXYZ' 等に合致します。
:	? (直前の文字が 1 個または 0 個)<br>例: /AB?00000/ は、 'AB000000' および 'A000000' に合致します。
:	\+ (直前の文字が 1 個以上)<br>例: /AB0+/ は、 'AB0', 'AB00', 'AB000', ... 等に合致しますが、 'AB' には合致しません。
:	[abc] (文字 'a' , 'b' または 'c')<br>例: /Homini[dn]ae/ は、 'Hominidae' および 'Homininae' に合致します。
:	[^abc] (文字 'a' , 'b' , 'c' 以外)<br>例: /Homini[^d]ae/ は、 'Homininae' には合致しますが、 'Hominidae' には合致しません。
:	[a-z0-9] (文字 'a' ～ 'z' または '0' ～ '9')<br>例: /AA[0-9]00000/ は、 'AA100000' などに合致します。
: { n } (直前の文字が n 個)<br>例: /AB0{2}/ は、 'AB00' に合致しますが、'AB0' や 'AB000'には合致しません。
:	{ n ,} (直前の文字が n 個以上)<br>例: /AB0{2,}/ は、 'AB00' , 'AB000' , ... 等に合致しますが、 'AB0' には合致しません。
:	{ n , m } (直前の文字が n 個以上、 m 個以下)<br>例: /AB0{2,4}/ は、 'AB00' , 'AB0000' 等に合致しますが、 'AB0' や 'AB00000' には合致しません。

あいまい検索 (Fuzzy Search)
:	検索キーワードに類似した綴りの単語を検索<br>':' + (検索キーワード) + '~' + (検索語の距離。 0.0 以上 1.0 未満の数値。 1 に近いほど検索キーワードに近い)

近接検索 (Proximity Search)
:	フレーズに含まれる単語同士が近くに記載されているものを検索します。<br>':' + (フレーズ) + '~' + (検索語の距離。単語数。)

重み付け検索
:	(検索キーワード) + '^' + (相対的な重み。正の数値。デフォルトでは 1.0 )

特殊な意味を持つ文字
:	これらの文字は、特殊な意味を持つ<br>\+ \- && &#124;&#124; \! \( \) \{ \} \[ \] ^ " ~ \* ? : /

これらの文字を検索する場合には、フレーズ検索を行なうか、または '' を前置して特殊意味を打ち消してください。

## 検索結果の取得

検索結果のファイル形式

<table>
  <tbody>
    <tr>
      <th>FlatFile</th>
      <td>DDBJ FlatFile 形式</td>
    </tr>
    <tr>
      <th>FASTA</th>
      <td>FASTA形式</td>
    </tr>
    <tr>
      <th>XML</th>
      <td>INSD-XML 形式</td>
    </tr>
  </tbody>
</table>

画面で閲覧
:	検索結果画面のアクセッション番号をクリックすると、該当エントリの Flatfile が閲覧できます。
:	検索結果画面のチェックボックスを選択して、ファイル形式を指定して「View selected」ボタンをクリックすることで、選択されているエントリを指定した形式で閲覧できます。（上限値　10,000 件）
:	検索結果件数が上限値を超える場合には、検索条件を調整して、絞り込んでください。

ダウンロード
:	ファイル形式を指定して「Download All」ボタンをクリックすることで、検索条件に合致した全てのエントリを指定した形式でダウンロードすることができます。（ダウンロード可能な最大数 3,000 件）
:	ファイル形式を指定して検索結果画面のチェックボックスを選択し「Download selected」ボタンをクリックすることで、選択されているエントリを指定した形式でダウンロードすることができます。

[注意]
* エラー無くダウンロードするには、最大でも3,000件以下に検索結果を絞ってください。ただしサーバー負荷状況に依存するため最大数は少なくなる場合があります。例えば Date を追加指定することで絞り込みすることができます。
```
    Advanced Search     Date  20180101 to 20180630
    Quick Search        Date:[20180101 TO 20180630]
```
* XMLダウンロードを行った場合で検索結果件数が多い場合、一つのファイル内に複数のXML宣言行が含まれます。利用時に適宜ファイル分割やXML開始行の判断を行ってください。

検索結果のフィルター
:	検索結果画面の「Facet」をクリックして、検索結果をフィルターすることができます。

フィルターの種類
* Division
* 生物種

## その他の検索条件など

Advanced Search 画面の「Search Settings」をクリックすると、他にも幾つかの検索条件を指定できます。

ソート条件
:	ソート対象として、検索スコア、または検索フィールドを指定

検索結果の表示フィールド
:	検索結果ページに表示する検索フィールドを指定
