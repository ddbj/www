---
layout: tabbed_indexed_content
title: Web版塩基配列登録システム (NSSS)
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: submission
lang: ja
related_pages:
  - title: DDBJ 塩基配列登録システム HELP
    url: /ddbj/web-submission-help.html
  - title: 塩基配列の登録
    url: /ddbj/submission.html
  - title: 登録の見本
    url: /ddbj/example.html
  - title: Feature key
    url: /ddbj/features.html
  - title: Qualifier key
    url: /ddbj/qualifiers.html
  - title: Organism qualifier に記載する生物名
    url: /ddbj/organism.html
  - title: タンパク質コード配列; CDS feature について
    url: /ddbj/cds.html
  - title: Location の記述法
    url: /ddbj/location.html
---

<div class="attention" markdown="1">

<span class="red">ヒトを対象とした研究データの登録について</span>

ヒトを対象とした全ての研究において DDBJ に送付するデータの由来である個人 (研究対象者)の尊厳及び人権は、適用されるべき法律、規定、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。  
原則として、研究対象者を直接特定し得る参照情報は、登録データから取り除いてください。  
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)をご覧ください。

</div>

## Web 版塩基配列登録システム  {#Web_版塩基配列登録システム}

Web 版塩基配列登録システム (DDBJ Nucleotide Sequence Submission System, 略称 NSSS) は、アノテーションをつけた塩基配列を Web 経由で登録できるシステムです。

### <span class="red">NSSS ではなく</span> MSS で登録すべきデータ {#MSS}

NSSS は、下記の配列データに対応できません。    
<span class="red">以下の何れかに該当する場合</span>、NSSS では対応できません。
[Mass Submission System (MSS)](/ddbj/mss.html) 経由で登録をお願いします。    
件数の多寡、長さ以外の点もご確認ください。

#### a) 種別、または、量が以下に該当する配列データ

<div class="attention" markdown="1">
- NSSS が対応していない登録 
   - [EST](/ddbj/est.html)、STS、[TSA](/ddbj/tsa.html)、[HTC](/ddbj/htc.html)、[GSS](/ddbj/gss.html)、[HTG](/ddbj/htg.html)、[WGS](/ddbj/wgs.html)、[CON](/ddbj/con.html)、[TLS](/ddbj/tls.html)
   - データ種別の詳細は、[登録データ種別](/documents/data-categories.html#division)をご確認ください。
- １配列が長い場合、目安は 500 kb 以上
- １配列あたりに多数の Feature がある場合、目安は 30 以上
- 登録する配列の数が多い場合、総計 100 を超えるとき
</div>

#### b) finished/draft の別を問わずレプリコン全長規模相当の配列データ

<div class="attention" markdown="1">
 - (核) ゲノム
 - 染色体
 - オルガネラゲノム
 - ウイルス・ファージのゲノム/segment
 - プラスミド
</div>

#### c) DBLINK に BioProject, BioSample の記載が必要な配列データ

BioProject/BioSample との連携のために [DBLINK](/ddbj/flat-file.html#DBLINK) への記載を必要とする場合、
以下を含みますが、下記で全てを網羅している訳ではありません。

<div class="attention" markdown="1">
- メタゲノム的解析、環境プロファイル解析全般
- 標的遺伝子を限定した配列データを相互に関連付ける場合
- 登録予定、または、登録済みの全長規模ゲノム配列と同一菌株 (strain) に由来する配列データ
    - 原核生物 16S rRNA 配列の報告義務がある場合
    - 他の標的遺伝子・クラスター領域を先行発表する場合
</div>



## 入力ガイド

  - [マニュアル (PDF)](/assets/files/pdf/ddbj/websubHelp_full.pdf)
  - [NSSS の紹介 (YouTube)](https://youtu.be/JTCV7bG_KJc)
  - [NSSS の紹介 (PDF)](https://drive.google.com/file/d/1KnEVC--SFglqdENRGLMehFP9NuQXyVrt)
  - [NSSS ヘルプページ](/ddbj/web-submission-help.html)

## 登録を開始する前に

  - はじめに、「[塩基配列の登録の前に](/ddbj/submission.html)」および「[登録前に必要な処理](/ddbj/sequence.html#process)」をご覧ください。
  - 本ツールで少件数の[TPA データ](/ddbj/tpa.html)のうち、TPA:experimental と TPA:inferential の登録が可能です。
  - 登録する配列からはベクターやアダプター等由来の配列を除いてください。[VecScreen](http://ddbj.nig.ac.jp/vecscreen/)で確認できます。

## 登録を再開するには

  - 各ページでNextボタンをクリック後ブックマークしてください。ブックマークから submission を再開できます。

## 推奨ブラウザ

  - [Chrome](https://www.google.com/chrome/browser/desktop/index.html) または [Firefox](https://www.mozilla.org/ja/firefox/all/) の使用を推奨します。

## 登録データの更新・お問い合わせ

  - Web版塩基配列登録システム では新規に登録するデータのみを受け付けております。修正用のデータを送らないでください。 
  - アクセッション番号を取得済のデータの修正については「[登録データの修正・更新](/ddbj/update.html#ddbj)」をご覧ください。
  - 入力途中でのトラブルは、"Submission ID" とともに、[「お問い合わせフォーム」](/contact-ddbj.html)よりご連絡ください。


<div class="start-button" markdown="1">

**[新規登録の開始](https://ddbj.nig.ac.jp/submission)**  
次ページで **[Create new submission\]** をクリックしてください。

</div>
