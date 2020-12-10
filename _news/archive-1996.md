---
layout: indexed_content
title: News from 1996
category: news
lang: ja
---

<div class="news_post firstpost">
  <h2 class="news_title" id="wn961001"><a href="#wn961001">Non-redundant Databaseについて</a></h2>
  <div class="news_date">1996年10月01日</div>
  <div class="news_content">ＤＤＢＪでは、ネットワークサーバで提供しているータベースとして、 Non-redundant Database を９月２７日より公開しました。<br>これまでは、検索対象とするデータベースが定期リリースデータベースと定期リリース後の新着データベースを合わせたものであったため、一部のエントリーデータで重複が生じることがありました。<br>そこで、アクセッション番号に重複がない最新データベー スを毎日構築することにしました。<br>Non-redundant Databaseを提供しているサービスは以下の通りです。<br>SF-Gate：WWWから利用できます<p>「SFgateを使用したWAISデータ検索 」（日本語版と英語版があります）<br>Gopher：gopherサーバとWWWから利用できます<br>gopher server：gopher.nig.ac.jp<br>　　　search/ddbj<br>　　　dna/DNA_seq_index_search<br>WWW：gopher://gopher.nig.ac.jp/ </p><p>FASTA/BLAST：E-mail serverとWWWから利用できます<br>E-mail server：fasta@nig.ac.jp　blast@nig.ac.jp<br>WWW： 「FASTA/BLASTを使用した相同性検索」（日本語版と英語版があります）</p></div>
  <div class="news_category">
    <span class="service">サービス: ddbj</span>
    <span class="keyword">キーワード: </span>
  </div>
</div>
<div class="news_post_list">
  <h2 class="news_title" id="wn960705"><a href="#wn960705">ホスト計算機の名称変更・スーパーコンピュータの利用申請について</a></h2>
  <div class="news_date">1996年07月05日</div>
  <div class="news_content">国立遺伝学研究所・所外ＤＮＡデータベース等利用者各位　平成８年７月３日<br>平成８年３月に、国立遺伝学研究所にスーパーコンピュータを中心とした電子計算機システムが導入されました。 その後約４ヶ月間、仮運用を行って参りましたが、平成８年７月より本格運用を開始いたします。 これに伴い、次の点が変更になりますので、お知らせします。<ol><li>ホスト計算機の名称変更について<br>　平成８年７月８日から、ホスト計算機の名称を現状の「niguxp」から「supernig」に改めることになりました。 「niguxp」と「ddbj」の名称は、平成９年６月末までは並行して利用できますが、それ以後は利用できません。 したがって、「telnet」による接続を行う場合は、「telnet supernig.nig.ac.jp」とコマンドを入力して下さい。 また、プロンプトも「supernig」に変更になります。<br>これに伴い、皆様のメールアドレスは、「user@supernig.nig.ac.jp」（user の部分にはあなたのユーザーＩＤが入ります）に変更になります。 現在利用できるアドレス「user@ddbj.nig.ac.jp」は、同様に平成９年６月末をもって利用できなくなりますので、ご注意下さい。 なお、ＤＤＢＪの電子メールアドレス（問い合わせ：ddbj@ddbj.nig.ac.jp、<br>データ登録： ddbjsub@ddbj.nig.ac.jp、データ更新：ddbjupdt@ddbj.nig.ac.jp）には変更ありません。</li><li>スーパーコンピュータの利用申請について（国立遺伝学研究所所外の方が対象です）<br>　国立遺伝学研究所のスーパーコンピュータを、国立遺伝学研究所所外の皆様も利用できるようになります。 国立遺伝学研究所のスーパーコンピュータ（Fujitsu VPP500）は、40 CPUを持ち、理論性能 64 GFLOPS の高性能です。 今回新たに登録申請することにより、フロントエンドマシンである supernig から、スーパーコンピュータにジョブを投入することができるようになります。<br>ご希望の方は、申請用紙「国立遺伝学研究所スーパーコンピュータ利用申請書」にご記入の上（捺印のこと）、国立遺伝学研究所・日本ＤＮＡデータバンク宛にお送り下さい。 なお、「国立遺伝学研究所ＤＮＡデータベース等利用申請書」も別に申請する必要がありますのでご注意下さい。 利用方法などの詳細は、登録受付後にお知らせします。</li></ol><p>国立遺伝学研究所</p></div>
  <div class="news_category">
    <span class="service">サービス: ddbj</span>
    <span class="keyword">キーワード: </span>
  </div>
</div>
<div class="news_post_list">
  <h2 class="news_title" id="wn960628"><a href="#wn960628">LOCUS名の新方式</a></h2>
  <div class="news_date">1996年06月28日</div>
  <div class="news_content">DDBJの各エントリの1行目にあるLOCUS名は、これまでは頭３文字で生物種名、残りで遺伝子名やプロダクト名などを示すような最大１０文字のアルファベットもしくは数字を用い、他のエントリとの重複を避けるように命名されてきました。<br>しかし、この方式で使用可能な文字列が残り少なくなってきたことから、７月１日以降登録される配列のLOCUS名は、原則的にAccession Noをそのまま用いることになりました。<br>GenBankでもすでに旧来の命名法を改め、ESTデータではDDBJの新方式と同様にAccession Noを、通常データでは頭２文字で生物種名＋Accession NoをLOCUS名として用いています。<br>この変更により従来のデータベース解析ソフトウエアを修正する必要や、検索方法を変える必要のある場合もありますので、ご配慮お願いします。<br>特に、LOCUS名で生物種を検索している方は、今後はそれができなくなりますので、ご注意ください。<br>生物種名はSOURCE欄に記載されていますので、そちらをご参照ください。 
<p>[旧方式]</p>
<pre class="highlight"><code>LOCUS       HUMNANIKA     777 bp ss-mRNA            HUM     01-JUL-1996DEFINITION  Human Brain 
mRNA for NANIKA protein, complete cds.ACCESSION   D99999KEYWORDS    NANIKA protein; 
sample entry.SOURCE      Homo sapiens Brain mRNA, clone:NANIKA7.1.  ORGANISM  Homo sapiens            
Eukaryota; Animalia; Chordata; Vertebrata; Mammalia; Theria;            Eutheria; Primates; Haplorhini; 
Catarrhini; Hominidae.REFERENCE   1  (bases 1 to 777)  :         :           :</code></pre>
<p>[新方式]</p>
<pre class="highlight"><code>LOCUS       D99999        777 bp ss-mRNA            HUM     01-JUL-1996DEFINITION  Human Brain 
mRNA for NANIKA protein, complete cds.ACCESSION   D99999KEYWORDS    NANIKA protein; 
sample entry.SOURCE      Homo sapiens Brain mRNA, clone:NANIKA7.1.  ORGANISM  Homo sapiens            
Eukaryota; Animalia; Chordata; Vertebrata; Mammalia; Theria;            Eutheria; Primates; Haplorhini; 
Catarrhini; Hominidae.REFERENCE   1  (bases 1 to 777)  :         :           :</code></pre></div>
  <div class="news_category">
    <span class="service">サービス: ddbj</span>
    <span class="keyword">キーワード: </span>
  </div>
</div>
<div class="news_post_list">
  <h2 class="news_title" id="wn960621"><a href="#wn960621">アクセッション番号の新方式</a></h2>
  <div class="news_date">1996年06月21日</div>
  <div class="news_content">現在、DDBJ/EMBL/GenBank国際DNAデータベースでは、登録された塩基配列の認識番号として「アクセッション番号」(accession number)を用いています。 現在使用されているアクセッション番号は、アルファベット１文字のあとに５桁の数字が並ぶ形式となっており（例：Ｄ１２３４５）、 欠番となっているアルファベットのOを除くと２５０万個のアクセッション番号を発行することができます。 しかし、このままでは現在のエントリー数の増加に対応できなくなることが明白であるため、１９９５年４月に行なわれた第８回国際DNAデータバンク実務者会議で 「アルファベット２文字のあとに６桁の数字」という方式の採用が決定されました。 続いて１９９６年４月に行なわれた第９回国際DNAデータバンク実務者会議で具体的な決定がなされました。 この方式によると６億２５００万個のアクセッション番号を発行することができます。<br>ＤＤＢＪでは現在のアクセッション番号（Ｄ番号）を使い尽くした後、ただちに「AB+６桁の数字」からなるアクセッション番号の発行を開始します。 また、「AA+６桁の数字」「AC+６桁の数字」「AD+６桁の数字」はGenBankが使用することがすでに決定しています。 この変更により従来のデータベース解析ソ フトウエアを修正する必要のある場合もありますので、ご注意下さい。</div>
  <div class="news_category">
    <span class="service">サービス: ddbj</span>
    <span class="keyword">キーワード: </span>
  </div>
</div>