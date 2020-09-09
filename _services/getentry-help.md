---
layout: indexed_content
lang: ja
title: getentry
category: services
lang: ja
related_pages:
  - title: ARSA ヘルプ
    url: services/arsa-help.html
  - title: BLAST ヘルプ
    url: services/blast-help.html
  - title: VecScreen ヘルプ
    url: services/vecscreen-help.html
  - title: ClustalW ヘルプ
    url: services/clustalw-help.html
  - title: TXSearch ヘルプ
    url: services/txsearch-help.html
  - title: 過去のサービス
    url: services/past-services.html
  - title: 関連論文
    url: services/references.html
  - title: WABI (Web API for Biology)
    url: services/wabi.html
  - title: WABI BLAST ヘルプ
    url: services/wabi_blast-help.html
  - title: WABI ClustalW ヘルプ
    url: services/wabi_clustalw-help.html
  - title: WABI VecScreen ヘルプ
    url: services/wabi_vecscreen-help.html
  - title: WABI MAFFT ヘルプ
    url: services/wabi_mafft-help.html
  - title: Pipeline ヘルプ
    url: services/pipeline-help.html
---

## getentryの機能について <a name="getentry_の機能について"></a>
- getentry は，アクセッション番号からの DDBJ フラットファイルの検索にご利用いただけます。
- getentry は webAPI として実装しており，入力フォームからだけでなく，プログラムなどから直接呼び出すことも可能です。
- データの変更履歴の検索は，webAPI プログラムの [gethistory](#ge_program) を用いて行うことができます。
- "DDBJ フラットファイルのキーワード検索" は [ARSA](http://ddbj.nig.ac.jp/arsa/) をご利用ください。
- DRA データの検索は getentry ではおこなうことができません。[DRA Search](https://ddbj.nig.ac.jp/DRASearch/) をご利用ください。

## 入力フォームによる検索 <a name="入力フォームによる検索"></a>
[http://getentry.ddbj.nig.ac.jp/top-j.html](http://getentry.ddbj.nig.ac.jp/top-j.html)からご利用下さい。

### デフォルト指定 <a name="デフォルト指定"></a>

<table>
  <tbody>
    <tr>
      <th>ID</th>
      <td>Accession 番号 </td>
    </tr>
    <tr>
      <th>データべ－ス</th>
      <td><a href="http://www.insdc.org/">DNA データベース:DDBJ/EMBL/GenBank </a></td>
    </tr>
    <tr>
      <th>出力形式</th>
      <td><a href="{{site.baseurl}}/services/flat-file.html">フラットファイル（DDBJ）</a></td>
    </tr>
    <tr>
      <th>取得方法</th>
      <td>html</td>
    </tr>
    <tr>
      <th>上限</th>
      <td>10</td>
    </tr>
  </tbody>
</table>

### ID <a name="ID_"></a>

Accession 番号 を入力します。入力には、複数 Accession 番号の指定、範囲指定、バージョン番号の指定が可能です。

<table>
  <tbody>
    <tr>
      <th>バージョン番号</th>
      <td>
        <ul class="disc">
          <li> 指定がない場合は，最新バージョンを検索します。</li>
          <li> 指定されている場合は，指定のバージョンを検索します。</li>
        </ul>
      </td>
      <td>AB669632.1<br>AB669632.2</td>
    </tr>
    <tr>
      <th>複数 Accession 番号
      </th>
<td>
        <ul class="disc">
          <li> ","区切りで複数の Accession 番号を指定できます。</li>
          <li> ","区切りで複数指定された場合，指定の順で出力されます。</li>
          <li> 二つの Accession 番号"-"で連結することにより範囲検索ができます。</li>
          <li> バージョン番号の指定もできます。</li>
        </ul>
      </td>
        <td>AB669632.1,AB669632.2,AB669633.1,AB669633.2<br>
          AK377101 - AK377200,AK377210,AK377211</td>
    </tr>
    <tr>
      <th>範囲指定
      </th>
<td>
        <ul class="disc">
          <li> 範囲指定の両端の Accession 番号は前方のみの不完全でも構いません。</li>
          <li> 範囲指定も "," 区切りで複数指定できます。</li>
          <li> バージョン番号を指定しても無視されます。</li>
        </ul>
      </td>
      <td>
        FY782000-FY7830<br>
        AK377101 - AK377200,AK377211- AK388100
      </td>
    </tr>
  </tbody>
</table>

### データベースと出力形式 <a name="データベースと出力形式"></a>

検索対象となるデータベースをひとつ指定します。 検索結果の出力形式は，エントリに対して，各データベースで定められている形式か FASTA 形式 のいずれかを以下の選択肢からひとつ指定します。

#### DNAデータベース <a name="DNAデータベース"></a>

検索対象データベース

<table>
  <tbody>
    <tr>
      <th>DDBJ/EMBL/GenBank </th>
      <td><a href="http://www.insdc.org/">国際塩基配列データベース（INSD）</a></td>
    </tr>
    <tr>
      <th>MGA</th>
      <td><a href="/ddbj/mga.html">Mass sequence for Genome Annotation(MGA)</a></td>
    </tr>
  </tbody>
</table>

DDBJ/EMBL/GenBank を選択すると、以下が検索対象となります。

* DDBJ 定期リリース
* DDBJ 定期リリース後の新着データ
* アルファベット４文字＋８桁の数字で構成されるアクセッション番号のデータ  
（[WGS(Whole Genome Shotgun)](/ddbj/wgs.html), [TSA(Transcriptome Shotgun Assembly)](/ddbj/tsa.html) の一部） 
* [TPA(Third Party Data)](/ddbj/tpa.html)

DDBJ リリース には、 TPA、 アルファベット４文字＋８桁の数字で構成されるアクセッション番号を持つデータ（WGS，TSA の一部） は含まれておりません。

MGA データの新規登録は受け付けておりません。

getentry で検索可能な各データベースのリリース番号や公開日等の最新の状況については、[現在公開されているリリースの情報]({{site.baseurl}}/statistics/relinfo.html) でご確認ください。


出力形式

<table>
  <tbody>
    <tr>
      <th>フラットファイル(DDBJ)</th>
      <td>
<a href="/ddbj/flat-file.html">DDBJ のデータ公開形式</a>で出力</td>
    </tr>
    <tr>
      <th>全塩基配列 FASTA </th>
      <td><a href="#nfasta">塩基配列の全長を FASTA 形式</a>で出力</td>
    </tr>
    <tr>
      <th>CDS アミノ酸配列 FASTA</th>
      <td><a href="#trans">各 CDS 領域のアミノ酸翻訳配列を FASTA 形式</a>で出力</td>
    </tr>
    <tr>
      <th>CDS 塩基配列 FASTA</th>
      <td>
<a href="#cdsfasta">各 CDS 領域の塩基配列を FASTA 形式</a>で出力</td>
    </tr>
    <tr>
      <th>INSD-XML_v1.4</th>
      <td>
<a href="#xml">INSD-XML_v1.4 形式</a>で出力</td>
    </tr>
  </tbody>
</table>

上記の5つ(FF, 全FASTA, CDSアミノ酸FASTA, CDS塩基FASTA, INSD-XML_v1.4) はDDBJ/EMBL/GenBank 指定時にのみ選択可能です。

検索対象データベースでMGA選択時は、FFのみ選択可能となります。

#### Protein データベース <a name="Protein_データベース"></a>

検索対象データベース

<table>
  <tbody>
    <tr>
      <th><a href="https://www.uniprot.org/">UniProt</a></th>
      <td>UniProt/Swiss-Prot とUniProt/TrEMBL を合わせたアミノ酸配列データベース</td>
    </tr>
    <tr>
      <th><a href="https://www.rcsb.org/pdb/">PDB</a></th>
      <td>タンパク質の立体構造データベース</td>
    </tr>
    <tr>
      <th><a href="{{site.baseurl}}/statistics/relnote.html">DAD</a></th>
      <td>DDBJ からアミノ酸翻訳配列データを抽出して作成したデータベース</td>
    </tr>
    <tr>
      <th>Patent</th>
      <td>
<a href="https://www.jpo.go.jp/index.html">JPO</a>，<a href="//www.kipo.go.kr">KIPO</a> に由来するアミノ酸配列</td>
    </tr>
  </tbody>
</table>

getentry で検索可能な各データベースのリリース番号や公開日等の最新の状況については、[現在公開されているリリースの情報]({{site.baseurl}}/statistics/relinfo.html) でご確認ください。

#### 出力形式 <a name="出力形式"></a>

<table>
  <tbody>
    <tr>
      <th colspan="2">default </th>
      <td>指定したデータベースの公開形式で出力</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="3" class="borderbtm">FASTA</th>
      <th><a href="#trans">アミノ酸配列FASTA </a></th>
      <td>アミノ酸配列をFASTA 形式 で出力</td>
      <td>UniProt, DAD, Patent で選択可能</td>
    </tr>
    <tr>
      <th><a href="#dadfasta">塩基配列FASTA (for DAD)</a></th>
      <td>アミノ酸配列をコードする塩基配列をFASTA 形式 で出力</td>
      <td>DAD のみ選択可能</td>
</tr>
    <tr>
      <th><a href="#seqres">seqres</a></th>
      <td>PDB アミノ酸 FASTA</td>
      <td>PDB のみ選択可能</td>
    </tr>
  </tbody>
</table>

選択データベースにより、出力形式は異なります。

### 取得方法 <a name="取得方法"></a>

<table>
  <tbody>
    <tr>
      <th>デフォルト</th>
      <td>html</td>
    </tr>
    <tr>
      <th>html</th>
      <td>HTMLファイル（ACCESSION, ORGANISM等 にリンクあり）</td>
    </tr>
    <tr>
      <th>text</th>
      <td>テキストファイル</td>
    </tr>
    <tr>
      <th>gz</th>
      <td> gz圧縮ファイル</td>
    </tr>
  </tbody>
</table>                      

gz圧縮ファイルのファイル名はformatの指定値によって以下のようになります。

| ---- | ---- | 
[DNA系]flatfile     | flatfile.txt.gz
[DNA系]xml          | insd.xml.gz    
[DNA系]fasta        | fasta_na.txt.gz
[DNA系]trans        | cds_aa.txt.gz  
[DNA系]cds          | cds_na.txt.gz  
[Protein系]flatfile | flatfile.txt.gz
[Protein系]fasta    | fasta_aa.txt.gz
[Protein系]cds      | cds_aa.txt.gz  

### 上限（最大表示件数） <a name="上限（最大表示件数）"></a>

| ---- | ---- |
デフォルト    | 10件   
任意の件数を指定 | 指定した件数
0 を指定    | 上限なし  

## WebAPI プログラムによる検索<a name="ge_program"></a> 

getentry は webAPI として実装しており，入力フォームからだけでなく，プログラムなどから直接呼び出すことも可能です。

### プログラム <a name="プログラム"></a>

getentry の web API は以下の２つのプログラムからなります。

<table>
  <tbody>
    <tr>
      <th>getentry </th>
      <td>アクセッション番号（データベース中のエントリの ID)を与えると，データを返します。</td>
    </tr>
    <tr>
      <th>gethistory</th>
      <td>アクセッション番号（データベース中のエントリの ID)を与えると，データの変更履歴を返します。<br>
        特許庁由来アミノ酸配列の更新履歴は今のところとっておりません。</td>
    </tr>
  </tbody>
</table>

### パラメータの指定方法 <a name="パラメータの指定方法"></a>

以下の２種類があります

| ---- | ---- |
通常の GET method | http://getentry.ddbj.nig.ac.jp/getentry?database=<span class="bold italic">データベース名</span>&accession_number=<span class="bold italic">アクセッション番号</span>&<span class="bold italic">追加のパラメーター（任意)</span>                                                                                                                                                                                                                                                                                                                                                                
smart URL      | http://getentry.ddbj.nig.ac.jp/getentry/<span class="bold italic">データベース名</span>/<span class="bold italic">アクセッション番号</span>  <br> http://getentry.ddbj.nig.ac.jp/getentry/<span class="bold italic">データベース名</span>/<span class="bold italic">アクセッション番号</span>/?<span class="bold italic">追加のパラメーター(任意)</span>  <br> http://getentry.ddbj.nig.ac.jp/getentry/<span class="bold italic">データベース名</span>/<span class="bold italic">アクセッション番号</span>/<span class="bold italic">リビジョン ID </span>/?<span class="bold italic">追加のパラメーター(任意)</span>


**入力例**

* 通常の GET method によるアクセッション番号 AB601234 の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=ddbj&amp;accession_number=AB601234](http://getentry.ddbj.nig.ac.jp/getentry?database=ddbj&amp;accession_number=AB601234)
* smart URL による特許庁由来アミノ酸配列 BD500001 の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001](http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001)

### getentry で指定可能なパラメータ <a name="parameter"></a>

#### accession 番号<span class="red">（必須）</span><span class="normal">：　検索対象の Accession 番号を指定します。</span> <a name="ge_accession"></a>

<table>
  <tbody>
    <tr>
      <th>バージョン番号</th>
      <td>
        <ul class="disc">
          <li> 指定がない場合は，最新バージョンを検索します。</li>
          <li> 指定されている場合は，指定のバージョンを検索します。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>複数 Accession 番号</th>
      <td>
        <ul class="disc">
          <li> ","区切りで複数の Accession 番号を指定できます。</li>
          <li> ","区切りで複数指定された場合，指定の順で出力されます。</li>
          <li> 二つの Accession 番号"-"で連結することにより範囲検索ができます。</li>
          <li> バージョン番号の指定もできます。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>範囲指定</th>
      <td>
        <ul class="disc">
          <li> 範囲指定の両端の Accession 番号は前方のみの不完全でも構いません。</li>
          <li> 範囲指定も "," 区切りで複数指定できます。</li>
          <li> バージョン番号を指定しても無視されます。</li>
        </ul>
      </td>
    </tr>
  </tbody>
<tbody>
</tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
対象の Accession 番号が存在しない，または表示できない場合，該当の Accession 番号に対する結果は何も表示されず，limit で上限が制限されているときの数にもカウントされません。

デフォルトでの表示件数が10件に設定されているため，それ以上の件数を指定する場合には "limit" で設定を変更して下さい。

件数が多い場合，表示に時間がかかる場合があります。また，ブラウザの性能により，全件表示できない場合があります。
</div>

**入力例**

* アクセッション番号AB055395 の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB055395](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB055395)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB055395](http://getentry.ddbj.nig.ac.jp/getentry/na/AB055395)
* 複数アクセッション番号の検索（複数指定&100件表示）  
[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AK377101 - AK377200,AK377210,AK377211- AK388100&limit=100](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AK377101%20-%20AK377200,AK377210,AK377211-%20AK388100&limit=100)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AK377101 - AK377200,AK377210,AK377211- AK388100?limit=100](http://getentry.ddbj.nig.ac.jp/getentry/na/AK377101%20-%20AK377200,AK377210,AK377211-%20AK388100?limit=100)
* 複数アクセッション番号の検索（範囲指定&1000件表示）<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FY782000-FY783000&limit=1000](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FY782000-FY783000&limit=1000)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/FY782000-FYFY783000?limit=1000](http://getentry.ddbj.nig.ac.jp/getentry/na/FY782000-FYFY783000?limit=1000)

* バージョン 番号指定の複数検索：指定したバージョンを検索します。<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB669632.1,AB669632.2,AB669633.1,AB669633.2,AB669634.1 ](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB669632.1,AB669632.2,AB669633.1,AB669633.2,AB669634.1 )<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB669632.1,AB669632.2,AB669633.1,AB66963.2,AB669634.1](http://getentry.ddbj.nig.ac.jp/getentry/na/AB669632.1,AB669632.2,AB669633.1,AB66963.2,AB669634.1)
* バージョン番号指定の範囲指定検索：バージョン番号の指定は無視され，最新バージョンを検索します。<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB669632.1-AB6696356.1](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB669632.1-AB6696356.1)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB669632.1-AB6696356.1
](http://getentry.ddbj.nig.ac.jp/getentry/na/AB669632.1-AB6696356.1
)

#### database<span class="red">（任意）</span>：　検索対象のデータベースを指定します。 <a name="ge_db"></a>

<table>
  <tbody>
    <tr>
      <th rowspan="2">DNA系</th>
      <th>na</th>
      <td>DDBJ/EMBL/GenBank </td>
      <td>
<a href="http://www.insdc.org/">国際塩基配列データベース（INSD）</a>, <a href="/ddbj/wgs.html">WGS</a>, <a href="/ddbj/tpa.html">TPA</a>, <a href="/ddbj/tsa.html">TSA</a>
</td>
    </tr>
    <tr>
      <th>mga</th>
      <td>MGA</td>
      <td><a href="/ddbj/mga.html">Mass sequence for Genome Annotation(MGA)</a></td>
    </tr>
    <tr>
      <th rowspan="5" class="borderbtm">Protein系</th>
      <th>aa</th>
      <td>DAD, Patent, UniProt, PDB </td>
      <td>4つのデータベースをこの順番で検索
    </td>
</tr>
    <tr>
      <th>uniprot</th>
      <td>
<a href="https://www.uniprot.org/">UniProt</a> </td>
      <td>UniProt/Swiss-Prot とUniProt/TrEMBL を合わせたアミノ酸配列データベース</td>
    </tr>
    <tr>
      <th>pdb</th>
      <td><a href="https://www.rcsb.org/pdb/">PDB</a></td>
      <td>タンパク質の立体構造データベース</td>
    </tr>
    <tr>
      <th>dad</th>
      <td><a href="{{site.baseurl}}/statistics/relnote.html">DAD</a></td>
      <td>DDBJ からアミノ酸翻訳配列データを抽出して作成したデータベース</td>
    </tr>
    <tr>
      <th>patent_aa</th>
      <td>Patent</td>
      <td>
<a href="https://www.jpo.go.jp/index.html">JPO</a>，<a href="//www.kipo.go.kr">KIPO</a> に由来するアミノ酸配列</td>
    </tr>
  </tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
データベース指定を省略すると、naを指定したものとみなして処理します。

DDBJ/EMBL/GenBank を選択すると、以下が検索対象となります。

* DDBJ 定期リリース
* DDBJ 定期リリース後の新着データ
* アルファベット４文字＋８桁の数字で構成されるアクセッション番号のデータ <br>（[WGS(Whole Genome Shotgun)](/ddbj/wgs.html), [TSA(Transcriptome Shotgun Assembly)](/ddbj/tsa.html) の一部）
* [TPA(Third Party Data)](/ddbj/tpa.html)

DDBJ リリース には、 TPA、 アルファベット４文字＋８桁の数字で構成されるアクセッション番号を持つデータ（WGS，TSA の一部） は含まれておりません。

MGA データの新規登録は受け付けておりません。

getentry で検索可能な各データベースのリリース番号や公開日等の最新の状況については、[現在公開されているリリースの情報]({{site.baseurl}}/statistics/relinfo.html) でご確認ください。
</div>

**入力例** <span class="normal">（上段はGET method , 下段は　smart URL ）</span>

* TSA( IAAA01000001) の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=IAAA01000001](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=IAAA01000001)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/IAAA01000001](http://getentry.ddbj.nig.ac.jp/getentry/na/IAAA01000001)

* WGS( BAET01000001) の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=BAET01000001](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=BAET01000001)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/BAET01000001
](http://getentry.ddbj.nig.ac.jp/getentry/na/BAET01000001
)
* MGA(AAAAA0000001) の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=mga&accession_number=AAAAA0000001](http://getentry.ddbj.nig.ac.jp/getentry?database=mga&accession_number=AAAAA0000001)<br>[http://getentry.ddbj.nig.ac.jp/getentry/mga/AAAAA0000001](http://getentry.ddbj.nig.ac.jp/getentry/mga/AAAAA0000001)
* 特許庁由来アミノ酸配列の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=patent_aa&accession_number=DI500001 ](http://getentry.ddbj.nig.ac.jp/getentry?database=patent_aa&accession_number=DI500001 )<br>[http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/DI500001](http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/DI500001)<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=BD500001](http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=BD500001  
)<br>[http://getentry.ddbj.nig.ac.jp/getentry/aa/BD500001
](http://getentry.ddbj.nig.ac.jp/getentry/aa/BD500001
)
* DAD の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=dad&accession_number=AB000714-1](http://getentry.ddbj.nig.ac.jp/getentry?database=dad&accession_number=AB000714-1)<br>[http://getentry.ddbj.nig.ac.jp/getentry/dad/AB000714-1](http://getentry.ddbj.nig.ac.jp/getentry/dad/AB000714-1)
* UniProt  の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=P06213](http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=P06213)<br>[http://getentry.ddbj.nig.ac.jp/getentry/aa/P06213](http://getentry.ddbj.nig.ac.jp/getentry/aa/P06213)<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=uniprot&accession_number=P06213](http://getentry.ddbj.nig.ac.jp/getentry?database=uniprot&accession_number=P06213)<br>[http://getentry.ddbj.nig.ac.jp/getentry/uniprot/P06213](http://getentry.ddbj.nig.ac.jp/getentry/uniprot/P06213)

#### revision<span class="red">（任意）</span>：　指定された revision 時点を検索します。 <a name="ge_revision"></a>

<table>
  <tbody>
    <tr>
      <th>通常</th>
      <td>yyyy-MM-dd hh:mm:ss</td>
    </tr>
    <tr>
      <th>リリース時</th>
      <td>yyyy-MM-dd hh:mm:ss release</td>
    </tr>
  </tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
バージョン番号と revision が同時に指定されているとき，revision が優先されます。
</div>

**入力例** （上段はGET method , 下段は　smart URL ）

* AB479935 の 2011-05-31 23:07:30 時点での結果を表示  
[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB479935&revision=2011-05-31 23:07:30](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB479935&revision=2011-05-31%2023:07:30)  
[http://getentry.ddbj.nig.ac.jp/getentry/na/AB479935?revision=2011-05-31 23:07:30](http://getentry.ddbj.nig.ac.jp/getentry/na/AB479935?revision=2011-05-31%2023:07:30)
* 変更履歴は　gethistory の機能でしらべることが可能です<br>[http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB479935](http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB479935)<br>[http://getentry.ddbj.nig.ac.jp/gethistory/na/AB479935](http://getentry.ddbj.nig.ac.jp/gethistory/na/AB479935)

#### format<span class="red">（任意）</span>：　結果の出力フォーマットを指定します。 <a name="ge_format"></a>

<table>
  <tbody>
    <tr>
      <th>デフォルト</th>
      <td>flatfile</td>
    </tr>
    <tr>
      <th>flatfile</th>
      <td><a href="/ddbj/flat-file.html">DDBJ フラットファイル形式</a></td>
    </tr>
    <tr>
      <th>xml</th>
      <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj_database/ddbj/xml/insdxml/v1.4/">INSDSeq-XML version 1.4 形式</a></td>
    </tr>
    <tr>
      <th rowspan="2">fasta</th>
      <td>[DNA 系] 全塩基配列 FASTA</td>
    </tr>
    <tr>
      <td>[Protein 系] アミノ酸配列 FASTA</td>
    </tr>
    <tr>
      <th>trans</th>
      <td>[DNA 系] CDS アミノ酸 FASTA</td>
    </tr>
    <tr>
      <th rowspan="2">cds</th>
      <td>[DNA 系] CDS 塩基配列 FASTA</td>
    </tr>
    <tr>
      <td>[DAD 限定] 塩基配列 FASTA (for DAD)</td>
    </tr>
    <tr>
      <th>seqres</th>
      <td>[Protein 系] PDB アミノ酸 FASTA</td>
    </tr>
  </tbody>
</table>

選択したデータベースでの有効な出力フォーマットの指定は以下の通りです。

|  DNAデータベース  
| ---- | ---- |
|  DDBJ / EMBL / GenBank / MGA  |  フラットファイル(DDBJ), <br> 全塩基配列FASTA, <br> CDS アミノ酸配列FASTA, <br>CDS 塩基配列FASTA, <br>INSD-XML_v1.4 |

|  Proteinデータベース
| ---- | ---- |
|  UniProt  |  default, アミノ酸配列FASTA  |
|  PDB  |  default, seqres  |
|  DAD  |  default, アミノ酸配列FASTA, 塩基配列FASTA  |
|  Patent  |  default, アミノ酸配列FASTA  |                                                       

**入力例** <span class="normal">（上段はGET method , 下段は　smart URL ）</span>

* アクセッション番号 AB628096 の検索のflatfile を表示<br>[http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB628096](http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB628096)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096
)

```
LOCUS       AB628096                 390 bp    RNA     linear   VRL 24-FEB-2012
DEFINITION  Human rhinovirus C gene for polyprotein, partial cds, strain:
        HRV/Yamaguchi/2010/89.
ACCESSION   AB628096
VERSION     AB628096.1
KEYWORDS    .
SOURCE      Human rhinovirus C
ORGANISM  Human rhinovirus C
        Viruses; ssRNA positive-strand viruses, no DNA stage;
        Picornavirales; Picornaviridae; Enterovirus.
REFERENCE   1  (bases 1 to 390)
AUTHORS   Kobayashi,M., Arakawa,M., Okamoto,R., Tsukagoshi,H., Ryo,A.,
        Mizuta,K., Hasegawa,S., Hirano,R., Wakiguchi,H., Kudo,K.,
        Tanaka,R., Morita,Y., Noda,M., Kozawa,K., Ichiyama,T., Shirabe,K.
        and Kimura,H.
TITLE     Direct Submission
JOURNAL   Submitted (06-MAY-2011) to the DDBJ/EMBL/GenBank databases.
        Contact:Miho Kobayashi
        Gunma Prefectural Institute of Public Health and Environmental
        Sciences; Kamiokimachi 378, Maebashi, Gunma 371-0052, Japan
REFERENCE   2  
AUTHORS   Arakawa,M., Okamoto-Nakagawa,R., Toda,S., Tsukagoshi,H.,
        Kobayashi,M., Ryo,A., Mizuta,K., Hasegawa,S., Hirano,R.,
        Wakiguchi,H., Kudo,K., Tanaka,R., Morita,Y., Noda,M., Kozawa,K.,
        Ichiyama,T., Shirabe,K. and Kimura,H.
TITLE     Molecular epidemiological study of human rhinovirus species A, B
        and C from patients with acute respiratory illnesses in Japan
JOURNAL   J. Med. Microbiol. 61, 410-419 (2012)
REMARK    DOI:10.1099/jmm.0.035006-0
COMMENT     
FEATURES             Location/Qualifiers
  source          1..390
                  /collection_date="14-Jan-2010"
                  /country="Japan:Yamaguchi"
                  /db_xref="taxon:463676"
                  /host="Homo sapiens"
                  /isolation_source="Nasopharyngeal swab"
                  /mol_type="genomic RNA"
                  /organism="Human rhinovirus C"
                  /strain="HRV/Yamaguchi/2010/89"
  CDS             1..>390
                  /codon_start=1
                  /product="polyprotein"
                  /protein_id="BAK22546.1"
                  /transl_table=1
                  /translation="MGAQVSKQNVGSHENSVSATGGSVIKYFNINYYKDSASSGLTKQ
                  DFSQDPSKFTQPLAEALTNPALMSPTVEACGMSDRLKQITIGNSTITTQDTLNSILAY
                  GEWPKYLSDLDASSVDKPTHPETSSDRF"
BASE COUNT          124 a           95 c           77 g           94 t
ORIGIN      
    1 atgggcgcac aggtgagcaa gcaaaatgtc ggctcgcacg aaaattcagt ctcagccacg
    61 ggtggatccg tgattaagta tttcaacatc aattactaca aggattctgc tagctctggc
  121 ttgactaaac aagatttttc ccaagaccca tcgaaattca cacaacctct agcagaagca
  181 cttacaaatc cagctttaat gtcaccaact gttgaagcat gtgggatgtc cgataggctt
  241 aaacaaatta ctatcgggaa ttccactata acaacacaag atacactaaa ctctatactg
  301 gcatatgggg agtggcccaa atacttgagt gacctggacg cttcctcagt ggataagcct
  361 acccacccag agacatcatc tgatagattt
//
```

* 特許庁由来アミノ酸配列の検索結果を アミノ酸配列FASTA 形式で表示<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=patent_aa&accession_number=BD500001&format=fasta](http://getentry.ddbj.nig.ac.jp/getentry?database=patent_aa&accession_number=BD500001&format=fasta)<br>[http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001?format=fasta](http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001?format=fasta)

```
>BD500001|JP 2000316586-A/3: Recombinant microorganism expressing small rubber particle-bound protein  (SRPP).  

MAEEVEEERLKYLDFVRAAGVYAVDSFSTLYLYAKDISGPLKPGVDTIENVVKTVVTPVY
YIPLEAVKFVDKTVDVSVTSLDGVVPPVIKQVSAQTYSVAQDAPRIVLDVASSVFNTGVQ
EGAKALYANLEPKAEQYAVITWRALNKLPLVPQVANVVVPTAVYFSEKYNDVVRGTTEQG
YRVSSYLPLLPTEKITKVFGDEAS
```


* アクセッション番号 AB601234 を塩基配列 FASTA 形式で表示<a name="nfasta"></a><br>[http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB601234&format=fasta](http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB601234&format=fasta)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234?format=fasta](http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234?format=fasta)


```
>AB601234|AB601234.1 Ainsliaea faurieana chs gene for chalcone synthase, partial cds, haplotype: 2.  

ggaccttgctaaaaacaataagggctcacatgtccttgttgtctgctctgagatcattgc
ttccatttttcgtagaccagataagaaccacattgtcagccaagctctctttggggatgg
agcttctgcgctcattgtgggttcagacccagacttctccaaggaacatccattattcaa
gattgtgtctacaactcagacaatcttacagaacactgaaagggcgatgaacttacaatt
gagggaagaagggttgaccattcacctgcacagggatgtaccccagatgacatcaaagaa
tatagaggaggcattagtgcacatatttttgccactgggcataagagactggaactcg
```


* アクセッション番号 AB601234 を塩基配列 xml 形式で表示<a name="xml"></a><br>
[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB601234&format=xml](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB601234&format=xml)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234/?format=xml](http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234/?format=xml
)

```

<?xml version="1.0"?>

<!DOCTYPE INSDSet SYSTEM "INSD_INSDSeq.dtd">
-<INSDSet>
-<INSDSeq> <INSDSeq_locus>AB601234</INSDSeq_locus>
<INSDSeq_length>358</INSDSeq_length>
<INSDSeq_moltype>DNA</INSDSeq_moltype>
<INSDSeq_topology>linear</INSDSeq_topology>
  <INSDSeq_division>PLN</INSDSeq_division>
  <INSDSeq_update-date>18-MAY-2011</INSDSeq_update-date>
    <INSDSeq_definition>Ainsliaea faurieana chs gene for chalcone ......
      <INSDSeq_primary-accession>AB601234</INSDSeq_primary-accession>
      <INSDSeq_accession-version>AB601234.1</INSDSeq_accession-version>
      <INSDSeq_source>Ainsliaea faurieana</INSDSeq_source>
        <INSDSeq_organism>Ainsliaea faurieana</INSDSeq_organism>
        <INSDSeq_taxonomy>Eukaryota; Viridiplantae; Streptophyta; .......
          -<INSDSeq_references>
          -<INSDReference>
          <INSDReference_reference>1</INSDReference_reference>
            <INSDReference_position>1..358</INSDReference_position>
            -<INSDReference_authors> <INSDAuthor>Mitsui,Y.</INSDAuthor>
              <INSDAuthor>Setoguchi,H.</INSDAuthor> </INSDReference_authors>
              <INSDReference_title>Direct Submission</INSDReference_title>
                <INSDReference_journal>Submitted (17-NOV-2010) to the DDBJ/.....
                -<INSDReference>

                                -------   以下略    -----
```

* アクセッション番号 HE963104 をCDS塩基配列FASTA形式で表示<a name="cdsfasta"></a><br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number= HE963104&format=cds](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=%20HE963104&format=cds)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/HE963104/?format=cds
](http://getentry.ddbj.nig.ac.jp/getentry/na/HE963104/?format=cds
)

```

>HE963104-1|CCJ27876.1|111|<1..111|Streptococcus thermophilus|predicted.....
gggttgtcctgtgatgagggaatgctggcagtaggaggacttggtgctgtaggtggcccg
tggggagctgtcggtggggtgttagtaggtgcagccttatactgtttctaa

>HE963104-2|CCJ27877.1|201|130..330|Streptococcus thermophilus|hypothetical.....
atgaataataaacaacttgaaagatttaaaaaactggatacaaatgcattgtctaatgta
agtggtcaaggctatggtgctcaatgtgttattggtactgccggaatgacgattgtcggt
gcagctttctttggcatcgcaggtgcaggagctggatttgcaggcggtagcacagcattt
tgttatggtacagctgaataa

>HE963104-3|CCJ27878.1|219|686..>904|Streptococcus thermophilus|.....
atggcaactcaaacaattgaaaactttaacacccttaacctcgaaacacttgctagtgtt
gaaggaggtggatgtggttggagaggcgcaggtggagcgactgttcaaggagctatcggg
ggagcgtttggaggtaatgtagttttaccagttgtaggctcagttcctggttatctagct
ggtggtgttctaggtggtgcaggtggtactgttgcctat

```

* アクセッション番号 JQ677812 をCDSアミノ酸FASTA  形式で表示<a name="trans"></a><br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=JQ677812&format=trans](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=JQ677812&format=trans)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/JQ677812/?format=trans](http://getentry.ddbj.nig.ac.jp/getentry/na/JQ677812/?format=trans)

```

>JQ677812-1|AFN26948.1|74|Triticum aestivum (bread wheat) HKT1;5
HLAGYSLMLVYLSVVSGARAVLTGKRISLHTFSVFTVVSTFANCGFVPNNEAMIAFRSFP
GLLLLVMPHVLLGI

```

* DAD (AB000714-1) 塩基配列 FASTA形式で表示<a name="dadfasta"></a><br>
[http://getentry.ddbj.nig.ac.jp/getentry?database=dad&accession_number=AB000714-1&format=cds](http://getentry.ddbj.nig.ac.jp/getentry?database=dad&accession_number=AB000714-1&format=cds)<br>[http://getentry.ddbj.nig.ac.jp/getentry/dad/AB000714-1/?format=cds](http://getentry.ddbj.nig.ac.jp/getentry/dad/AB000714-1/?format=cds
)

```

>AB000714-1|BAA22986.1|663|199..861|Homo sapiens|RVP1
atgtccatgggcctggagatcacgggcaccgcgctggccgtgctgggctggctgggcacc
atcgtgtgctgcgcgttgcccatgtggcgcgtgtcggccttcatcggcagcaacatcatc
acgtcgcagaacatctgggagggcctgtggatgaactgcgtggtgcagagcaccggccag
atgcagtgcaaggtgtacgactcgctgctggcactgccacaggaccttcaggcggcccgc
gccctcatcgtggtggccatcctgctggccgccttcgggctgctagtggcgctggtgggc
gcccagtgcaccaactgcgtgcaggacgacacggccaaggccaagatcaccatcgtggca
ggcgtgctgttccttctcgccgccctgctcaccctcgtgccggtgtcctggtcggccaac
accattatccgggacttctacaaccccgtggtgcccgaggcgcagaagcgcgagatgggc
gcgggcctgtacgtgggctgggcggccgcggcgctgcagctgctggggggcgcgctgctc
tgctgctcgtgtcccccacgcgagaagaagtacacggccaccaaggtcgtctactccgcg
ccgcgctccaccggcccgggagccagcctgggcacaggctacgaccgcaaggactacgtc
taa

```

* PDBの検索結果を PDBアミノ酸FASTA 形式 で表示<a name="seqres"></a><br>
[http://getentry.ddbj.nig.ac.jp/getentry?database=pdb&accession_number=0-Z&format=seqres&limit=5](http://getentry.ddbj.nig.ac.jp/getentry?database=pdb&accession_number=0-Z&format=seqres&limit=5)<br>[http://getentry.ddbj.nig.ac.jp/getentry/pdb/0-Z/?format=seqres&limit=5
](http://getentry.ddbj.nig.ac.jp/getentry/pdb/0-Z/?format=seqres&limit=5)

```

>100d_A mol:na length:10  DNA/RNA (5'-R(*CP*)-D(*CP*GP*GP*CP*GP*CP*CP*G
CCGGCGCCGG
>100d_B mol:na length:10  DNA/RNA (5'-R(*CP*)-D(*CP*GP*GP*CP*GP*CP*CP*G
CCGGCGCCGG
>101d_A mol:na length:12  DNA (5'-D(*CP*GP*CP*GP*AP*AP*TP*TP*(CBR)P*GP*
CGCGAATTCGCG
>101d_B mol:na length:12  DNA (5'-D(*CP*GP*CP*GP*AP*AP*TP*TP*(CBR)P*GP*
CGCGAATTCGCG
>101m_A mol:protein length:154  MYOGLOBIN
<center>----（以下略）----</center>

```

#### filetype<span class="red">（任意）</span>：　出力のファイルタイプを指定します。 <a name="ge_filetype"></a>

<table>
  <tbody>
    <tr>
      <th>デフォルト</th>
      <td>text</td>
    </tr>
    <tr>
      <th>html</th>
      <td>HTMLファイル（ACCESSION, ORGANISM等 にリンクあり）</td>
    </tr>
    <tr>
      <th>text</th>
      <td>テキストファイル</td>
    </tr>
    <tr>
      <th>gz</th>
      <td>gz圧縮ファイル</td>
    </tr>
  </tbody>
</table>                    

gz圧縮ファイルのファイル名はformatの指定値によって以下のようになります。

| ---- | ---- |
[DNA系]flatfile    |  flatfile.txt.gz
[DNA系]xml          | insd.xml.gz    
[DNA系]fasta        | fasta_na.txt.gz
[DNA系]trans        | cds_aa.txt.gz  
[DNA系]cds          | cds_na.txt.gz  
[Protein系]flatfile | flatfile.txt.gz
[Protein系]fasta    | fasta_aa.txt.gz
[Protein系]cds      | cds_aa.txt.gz  

**入力例** （上段はGET method , 下段は　smart URL ）

* AK377185-AK378194（1000エントリ）を gzファイルでダウンロード<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AK377185-AK378194&filetype=gz&limit=1000](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AK377185-AK378194&filetype=gz&limit=1000)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AK377185-AK378194?filetype=gz&limit=1000](http://getentry.ddbj.nig.ac.jp/getentry/na/AK377185-AK378194?filetype=gz&limit=1000)

次ような画面が表示されます。

![getentry-gz]({{ site.baseurl }}/assets/images/help/getentry-gz.gif)

* アクセッション番号 FW383979を html 表示<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FW383979&filetype=html](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FW383979&filetype=html)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234/?filetype=html](http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234/?filetype=html
)

```
LOCUS       FW383979                2675 bp    DNA     linear   PAT 14-OCT-2010
DEFINITION  JP 2006521812-A/1: GENETIC POLYMORPHISMS ASSOCIATED WITH RHEUMATOID
        ARTHRITIS, METHODS OF DETECTION AND USES THEREOF.
ACCESSION   [FW383979](http://getentry.ddbj.nig.ac.jp/getentry/na/FW383979)
VERSION     FW383979.1
KEYWORDS    JP 2006521812-A/1.
SOURCE      Homo sapiens (human)
ORGANISM  Homo sapiens
        Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
        Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
        Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 2675)
AUTHORS   Alexander,H.C., Bigobikku,A.B. and Kagiru,M.
TITLE     GENETIC POLYMORPHISMS ASSOCIATED WITH RHEUMATOID
        ARTHRITIS, METHODS 
        OF DETECTION AND USES THEREOF 
JOURNAL   Patent: JP 2006521812-A 1 28-Sep-2006;
        APLERA CORPORATION
COMMENT     OS   Homo sapiens
        PN   JP 2006521812-A/1
        PD   28-Sep-2006
```

#### show_suppressed<span class="red">（任意）</span>：　suppressed　データを表示します。 <a name="ge_show_suppressed"></a>

<table>
  <tbody>
    <tr>
      <th>true</th>
      <td>suppressed データを表示</td>
    </tr>
    <tr>
      <th>false</th>
      <td>suppressed データを表示しない</td>
    </tr>
  </tbody>
</table>

**入力例** （上段はGET method , 下段は　smart URL ）

* アクセッション番号 HE602933  (suppressed)の検索<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=HE602933&show_suppressed=true](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=HE602933&show_suppressed=true)<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/HE602933?show_suppressed=true](http://getentry.ddbj.nig.ac.jp/getentry/na/HE602933?show_suppressed=true)


#### limit<span class="red">（任意）</span>：　データの取得上限を設定します。 <a name="ge_limit"></a>

<table>
  <tbody>
    <tr>
      <th>デフォルト</th>
      <td>10件</td>
    </tr>
    <tr>
      <th>任意の件数を指定</th>
      <td>指定した件数</td>
    </tr>
    <tr>
      <th>0を指定</th>
      <td>無制限</td>
    </tr>
  </tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
件数が多い場合，表示に時間がかかる場合があります。また，ブラウザの性能により，全件表示できない場合があります。
</div>

**入力例** （上段はGET method , 下段は　smart URL ）

* アクセッション番号 FY736910 - FY762881( 25,972 entries)の検索  
[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FY736910 - FY762881&limit=0](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FY736910%20-%20FY762881&limit=0)  
[http://getentry.ddbj.nig.ac.jp/getentry/na/FY736910 - FY762881?limit=0](http://getentry.ddbj.nig.ac.jp/getentry/na/FY736910%20-%20FY762881?limit=0)

#### trace<span class="red">（任意）</span>：　Secondary Accession が指定された場合に，Primary への転送を設定します。 <a name="ge_trace"></a>

<table>
  <tbody>
    <tr>
      <th>true</th>
      <td>primary データを表示</td>
    </tr>
    <tr>
      <th>false</th>
      <td>primary データを表示しない</td>
    </tr>
  </tbody>
</table>

**入力例** （上段はGET method , 下段は　smart URL ）

* アクセッション番号 AB233943(primary)-AF530906(secondary) の検索でprimary を表示<br>[http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AF530906&format=flatfile&trace=true](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AF530906&format=flatfile&trace=true )<br>[http://getentry.ddbj.nig.ac.jp/getentry/na/AF530906/?format=flatfile&trace=true](http://getentry.ddbj.nig.ac.jp/getentry/na/AF530906/?format=flatfile&trace=true)


### gethistory で指定可能なパラメータ <a name="gethistory"></a>

#### accession 番号<span class="red">（必須）</span>：検索対象のAccession番号を指定します。指定方法は getentry と同じです。 <a name="gh_accession"></a>

{::options parse_block_html="true" /}
<div class="attention">
特許庁由来アミノ酸配列の履歴はありません
</div>

**入力例** （上段はGET method , 下段は　smart URL ）

* アクセッション番号 AB628096 の履歴検索  
http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB628096  
[http://getentry.ddbj.nig.ac.jp/gethistory/na/AB628096 ](http://getentry.ddbj.nig.ac.jp/gethistory/na/AB628096)

```
AB628096
1 2012-05-25 12:00:00 release 2012-05-25 12:00:00 release live
1 2012-02-24 07:02:55         2012-02-24 07:02:55         live
1 2011-11-25 11:27:22 release 2011-11-25 11:27:22 release live
1 2011-10-22 23:01:47         2011-10-22 23:01:47         live
1 2011-08-26 10:33:50 release 2011-08-26 10:33:50 release live
1 2011-05-27 12:38:45 release 2011-05-27 12:38:45 release live
1 2011-05-11 23:09:49         2011-05-11 23:09:49         live
```

#### database<span class="red">（任意）</span>： 検索対象のデータベースを指定します。 <a name="gh_db"></a>

<table>
  <tbody>
    <tr>
      <th>デフォルト</th>
      <td>na</td>
    </tr>
    <tr>
      <th>DNA 系</th>
      <td>na</td>
    </tr>
  </tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
指定したデータベースが履歴管理に対応していない場合は，空の結果を返します。
</div>

**入力例** （上段はGET method , 下段は　smart URL ）

* WGS( BAET01000001) の履歴検索<br>[http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=BAET01000001](http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=BAET01000001)<br>[http://getentry.ddbj.nig.ac.jp/gethistory/na/BAET01000001](http://getentry.ddbj.nig.ac.jp/gethistory/na/BAET01000001)


```
BAET01000001   BAET01000001 
1 2015-09-15 16:20:47 2015-09-15 16:20:47 live   
1 2014-06-28 09:14:29 2014-06-28 09:14:29 live   
1 2012-06-07 07:05:36 2012-06-07 07:05:36 live   
1 2012-06-01 07:05:51 2012-06-01 07:05:51 live   
1 2012-03-10 07:10:00 2012-03-10 07:10:00 live   
1 2012-03-10 07:03:37 2012-03-10 07:03:37 live   
1 2012-02-21 07:03:15 2012-02-21 07:03:15 live   
```

#### filetype<span class="red">（任意）</span>：　出力のファイルタイプを指定します。 <a name="gh_filetype"></a>

<table>
  <tbody>
    <tr>
      <th>デフォルト</th>
      <td>text</td>
    </tr>
    <tr>
      <th>html</th>
      <td>HTMLファイル（revision 時点のフラットファイルにリンク）</td>
    </tr>
    <tr>
      <th>text</th>
      <td>テキストファイル</td>
    </tr>
  </tbody>
</table>

**入力例** （上段はGET method , 下段は　smart URL ）

* アクセッション番号 AB628096 の履歴検索の結果を html で表示  
http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB628096&filetype=html  
[http://getentry.ddbj.nig.ac.jp/gethistory/na/AB628096/?filetype=html ](http://getentry.ddbj.nig.ac.jp/gethistory/na/AB628096/?filetype=html)

accession                                                                                                                                                                          | version                     | revision                                                                                                                                                                           | change                      | state
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -----
AB628096                                                                                                                                                                           | 1                           | [2015-05-29 18:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2015-05-29+18%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2015-05-29 18:00:00 release | live 
 |  | [2015-02-27 14:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2015-02-27+14%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2015-02-27 14:00:00 release | live                                                                                                                                                                              
 |  | [2014-11-25 13:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-11-25+13%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2014-11-25 13:00:00 release | live                                                                                                                                                                              
 |  | [2014-08-29 21:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-08-29+21%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2014-08-29 21:00:00 release | live                                                                                                                                                                              
 |  | [2014-05-30 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-05-30+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2014-05-30 12:00:00 release | live                                                                                                                                                                              
 |  | [2014-02-21 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-02-21+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2014-02-21 12:00:00 release | live                                                                                                                                                                              
 |  | [2013-11-29 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-11-29+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2013-11-29 12:00:00 release | live                                                                                                                                                                              
 |  | [2013-08-30 07:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-08-30+07%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2013-08-30 07:00:00 release | live                                                                                                                                                                              
 |  | [2013-05-24 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-05-24+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2013-05-24 12:00:00 release | live                                                                                                                                                                              
 |  | [2013-02-22 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-02-22+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2013-02-22 12:00:00 release | live                                                                                                                                                                              
 |  | [2012-11-22 15:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-11-22+15%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2012-11-22 15:00:00 release | live                                                                                                                                                                              
 |  | [2012-08-24 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-08-24+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2012-08-24 12:00:00 release | live                                                                                                                                                                              
 |  | [2012-05-25 12:00:00 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-05-25+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2012-05-25 12:00:00 release | live                                                                                                                                                                              
 |  | [2012-02-24 07:17:46](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-02-24+07%3A17%3A46/?format=flatfile&filetype=text&trace=false&show_suppressed=true)                 | 2012-02-24 07:17:46         | live                                                                                                                                                                              
 |  | [2012-02-24 07:02:55](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-02-24+07%3A02%3A55/?format=flatfile&filetype=text&trace=false&show_suppressed=true)                 | 2012-02-24 07:02:55         | live                                                                                                                                                                              
 |  | [2011-11-25 11:27:22 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-11-25+11%3A27%3A22+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2011-11-25 11:27:22 release | live                                                                                                                                                                              
 |  | [2011-10-22 23:01:47](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-10-22+23%3A01%3A47/?format=flatfile&filetype=text&trace=false&show_suppressed=true)                 | 2011-10-22 23:01:47         | live                                                                                                                                                                              
 |  | [2011-08-26 10:33:50 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-08-26+10%3A33%3A50+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2011-08-26 10:33:50 release | live                                                                                                                                                                              
 |  | [2011-05-27 12:38:45 release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-05-27+12%3A38%3A45+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true) | 2011-05-27 12:38:45 release | live                                                                                                                                                                              
 |  | [2011-05-11 23:09:49](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-05-11+23%3A09%3A49/?format=flatfile&filetype=text&trace=false&show_suppressed=true)                 | 2011-05-11 23:09:49         | live                                                                                                                                                                              


## DDBJ エントリへのリンク設定方法 <a name="ge_createlinks"></a>
------------------

DDBJ の個々のエントリに対して，以下の方法でリンクを設定することができます。

http://getentry.ddbj.nig.ac.jp/getentry?database=データベース名&accession_number=アクセッション番号&追加のパラメーター（任意)  
http://getentry.ddbj.nig.ac.jp/getentry/データベース名/アクセッション番号  
http://getentry.ddbj.nig.ac.jp/getentry/データベース名/アクセッション番号/?追加のパラメーター(任意)


例えば，アクセッション番号が AB000001 であるエントリは  
http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB000001  
http://getentry.ddbj.nig.ac.jp/getentry/na/AB000001


アクセッション番号が BD500001 である特許庁由来アミノ酸配列のエントリは，  
http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=BD500001   
http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001


上記の指定すると，該当のエントリが表示されます。  
試しに次のアクセッション番号をクリックしてみて下さい。
[AB000001](http://getentry.ddbj.nig.ac.jp/getentry/na/AB000001)  
[BD500001](http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001)

{::options parse_block_html="true" /}
<div class="attention">
DRA は getentry の検索対象外のため、リンク設定方法は上記の方法とは異なります。[DRA のホームページ](/dra/index.html)をご参照下さい。
</div>
