---
layout: indexed_content
title: Feature key
pathname: features
category: flatfile
---

DDBJ への新規登録において使用を推奨する feature key の定義を以下に挙げています。  
INSDC において運用している feature key に関する詳細は、Feature Table Definition の [7.2 Appendix II: Feature keys reference](/ddbj/full_index.html#7.2) をご参照ください。

## Feature/Qualifier 対応

Feature/Qualifier 対応一覧表には、DDBJ へ登録を推奨する feature と qualifier の組み合わせを示しています。

[Feature/Qualifier対応一覧表![]({{ site.baseurl }}/assets/images/parts/pdf.png){:.pdficon}](/files/pdf/ddbj/fq-j.pdf)(2016.11.09)

INSDC において記載可能な feature と qualifier の組み合わせに関しましては、[Feature Table Definition](/ddbj/full_index.html) の [7.2 Appendix II: Feature keys reference](/ddbj/full_index.html#7.2) をご参照ください。

## Feature key の定義

assembly\_gap<span class="FT">[Feature Table Definition](/ddbj/full_index.html#assembly_gap)</span>  
: [genome](/ddbj/genome-j.html) または [transcriptome](/ddbj/transcriptome-j.html) assembly の一部において、2つの構成要素の間に位置する sequencing gap

C\_region<span class="FT">[Feature Table Definition](/ddbj/full_index.html#C_region)</span>  
: 免疫グロブリン重・軽鎖, T-cell receptor アルファ・ベータ・ガンマ鎖の定常部位
  
CDS<span class="FT">[Feature Table Definition](/ddbj/full_index.html#fCDS)</span>  
: タンパク質 (ペプチド) のアミノ酸 (終止コドンを含む) をコードする配列 [CDS feature の解説](/ddbj/cds-j.html)もご一読ください。

centromere<span class="FT">[Feature Table Definition](/ddbj/full_index.html#centromere)</span>  
: 生物学的な観点から実験的に centromere と同定された領域

D-loop<span class="FT">[Feature Table Definition](/ddbj/full_index.html#D-loop)</span>  
: displacement loop; ミトコンドリアDNA内の２本鎖の一方に相同な配列の１本鎖が対合をなす領域。 RecA タンパク質に触媒される反応において外来の１本鎖によって２本鎖DNAの一方が置換する部位の記述にも用いる。

D\_segment<span class="FT">[Feature Table Definition](/ddbj/full_index.html#D_segment)</span>  
: 免疫グロブリン重鎖, T-cell receptor ベータ鎖の多様性セグメント

exon<span class="FT">[Feature Table Definition](/ddbj/full_index.html#exon)</span>  
: エクソン; RNAスプライシング後の [mRNA](/ddbj/full_index.html#mRNA), [rRNA](/ddbj/full_index.html#rRNA), または, [tRNA](/ddbj/full_index.html#tRNA) をコードする部位

gap<span class="FT">[Feature Table Definition](/ddbj/full_index.html#gap)</span>  
: sequencing gap

intron<span class="FT">[Feature Table Definition](/ddbj/full_index.html#intron)</span>  
: イントロン; [exon](/ddbj/full_index.html#exon) と隣接しRNAに転写されるが, スプライシングによって除かれるセグメント

J\_segment<span class="FT">[Feature Table Definition](/ddbj/full_index.html#J_segment)</span>  
: 免疫グロブリン重・軽鎖, T-cell receptor アルファ・ベータ・ガンマ鎖の接合セグメント

mat\_peptide<span class="FT">[Feature Table Definition](/ddbj/full_index.html#mat_peptide)</span>  
: 翻訳後修飾を受けて成熟したペプチド, あるいは, タンパク質の最終産物をコードする配列 ([CDS](/ddbj/full_index.html#fCDS)と違い終止コドンを含まない)

misc\_binding<span class="FT">[Feature Table Definition](/ddbj/full_index.html#misc_binding)</span>  
: [primer\_bind](/ddbj/full_index.html#primer_bind), [protein\_bind](/ddbj/full_index.html#protein_bind) に該当しない結合サイト

misc\_difference<span class="FT">[Feature Table Definition](/ddbj/full_index.html#misc_difference)</span>  
: 下記に該当しない当該エントリーと異なる配列 (人工的な変異など) [variation](/ddbj/full_index.html#variation), [modified\_base](/ddbj/full_index.html#modified_base)

misc\_feature<span class="FT">[Feature Table Definition](/ddbj/full_index.html#misc_feature)</span>  
: 他の feature に該当しない生物学的に重要な部位

misc\_RNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#misc_RNA)</span>  
: 下記に該当しないRNA転写産物 (internal transcribed spacer など)<br>[prim\_transcript](/ddbj/full_index.html#prim_transcript), [precursor\_RNA](/ddbj/full_index.html#precursor_RNA), [mRNA](/ddbj/full_index.html#mRNA), [5'UTR](/ddbj/full_index.html#5UTR), [3'UTR](/ddbj/full_index.html#3UTR), [exon](/ddbj/full_index.html#exon), [CDS](/ddbj/full_index.html#fCDS), [sig\_peptide](/ddbj/full_index.html#sig_peptide), [transit\_peptide](/ddbj/full_index.html#transit_peptide), [mat\_peptide](/ddbj/full_index.html#mat_peptide), [intron](/ddbj/full_index.html#intron), [polyA\_site](/ddbj/full_index.html#polyA_site), [ncRNA](/ddbj/full_index.html#ncRNA), [rRNA](/ddbj/full_index.html#rRNA), [tRNA](/ddbj/full_index.html#tRNA), [tmRNA](/ddbj/full_index.html#tmRNA)

misc\_structure<span class="FT">[Feature Table Definition](/ddbj/full_index.html#misc_structure)</span>  
: [stem\_loop](/ddbj/full_index.html#stem_loop), [D-loop](/ddbj/full_index.html#D-loop) に該当しない核酸の二次構造, 三次構造, コンフォメーション

mobile\_element<span class="FT">[Feature Table Definition](/ddbj/full_index.html#mobile_element)</span>  
: mobile\_element を含むゲノム配列部位

modified\_base<span class="FT">[Feature Table Definition](/ddbj/full_index.html#modified_base)</span>  
: 修飾されるヌクレオチドの位置を示す (置換される塩基は qualifier で示す)

mRNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#mRNA)</span>  
: 成熟した messenger RNA; [5'UTR](/ddbj/full_index.html#5UTR), [CDS](/ddbj/full_index.html#fCDS), [exon](/ddbj/full_index.html#exon), [3'UTR](/ddbj/full_index.html#3UTR) などが含まれるが、[intron](/ddbj/full_index.html#intron)は含まれない

ncRNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#ncRNA)</span>  
: [rRNA](/ddbj/full_index.html#rRNA), [tRNA](/ddbj/full_index.html#tRNA) を除いたタンパク質をコードしないRNA転写産物としての機能性分子

operon<span class="FT">[Feature Table Definition](/ddbj/full_index.html#operon)</span>  
: 同じ生物学的経路に属し、同じ調節配列・promoter の制御下にある遺伝子クラスターを含む多シストロン性転写産物とその調節配列を含む領域

oriT<span class="FT">[Feature Table Definition](/ddbj/full_index.html#oriT)</span>  
: 伝達開始点; 接合, または, 移動の過程において伝達の開始されるＤＮＡ分子の部位

precursor\_RNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#precursor_RNA)</span>  
: RNA前駆体; あらゆる未成熟なRNA産物を示す

primer\_bind<span class="FT">[Feature Table Definition](/ddbj/full_index.html#primer_bind)</span>  
: 複製, 転写, あるいは逆転写の開始のためのプライマー結合サイト

propeptide<span class="FT">[Feature Table Definition](/ddbj/full_index.html#propeptide)</span>  
: propeptide をコードする配列; 成熟タンパク質産物を形成するために切断される proprotein のドメインをコードする配列

protein\_bind<span class="FT">[Feature Table Definition](/ddbj/full_index.html#protein_bind)</span>  
: タンパク質結合サイト

regulatory<span class="FT">[Feature Table Definition](/ddbj/full_index.html#regulatory)</span>  
: 転写、または、翻訳の調節において機能する配列領域

2014 年 12 月から以下の feature を統合して置き換えました。
- attenuator --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="attenuator"
- CAAT_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="CAAT_signal"
- enhancer --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="enhancer"
- GC_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="GC_signal"
- -35_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="minus_35_signal"
- -10_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="minus_10_signal"
- polyA_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="polyA_signal_sequence"
- promoter --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="promoter"
- RBS --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="ribosome_binding_site"
- TATA_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="TATA_box"
- terminator --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="terminator"
- misc_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers.html#regulatory_class)="other"


repeat\_region<span class="FT">[Feature Table Definition](/ddbj/full_index.html#repeat_region)</span>  
: 繰り返し配列を含むゲノム上の部位

rep\_origin<span class="FT">[Feature Table Definition](/ddbj/full_index.html#rep_origin)</span>  
: 複製開始点

rRNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#rRNA)</span>  
: 成熟したリボソーマルRNA; リボソームのRNA成分

sig\_peptide<span class="FT">[Feature Table Definition](/ddbj/full_index.html#sig_peptide)</span>  
: シグナルペプチドをコードする配列 (リーダー配列) ; 分泌タンパク質のアミノ末端ドメインをコードする配列。<br>新生ペプチドが膜に吸着する際に関与するドメイン。

source<span class="FT">[Feature Table Definition](/ddbj/full_index.html#source)</span>  
: 配列の生物学的な由来を示す

stem\_loop<span class="FT">[Feature Table Definition](/ddbj/full_index.html#stem_loop)</span>  
: hairpin; １本鎖のDNA, または, RNAが近隣の相補性のある配列間で対合することによって二重らせんを形成する部位

telomere<span class="FT">[Feature Table Definition](/ddbj/full_index.html#telomere)</span>  
: 生物学的な観点から実験的に telomere と同定された領域

tmRNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#tmRNA)</span>  
: transfer messenger RNA; tmRNA は最初に tRNA として作用し, 次にペプチドタグをコードする mRNA としてはたらく。<br>この mRNA 様領域がリボソームで転写され翻訳終結しないタンパク質のカルボキシル末端にペプチドタグを付加する。<br>タグを付加されたタンパク質は, その後, 分解される。

transit\_peptide<span class="FT">[Feature Table Definition](/ddbj/full_index.html#transit_peptide)</span>  
: 細胞内輸送のシグナルとなるペプチドをコードする配列。<br>核にコードされるオルガネラのタンパク質のアミノ末端ドメインをコードする配列。<br>このドメインは翻訳後にタンパク質がオルガネラ内へ輸送される過程に関与する。

tRNA<span class="FT">[Feature Table Definition](/ddbj/full_index.html#tRNA)</span>  
: 成熟したトランスファーRNA; 75～85 bpの小さいRNA分子でアミノ酸翻訳を媒介する

unsure<span class="FT">[Feature Table Definition](/ddbj/full_index.html#unsure)</span>  
: 通常 10 塩基以下の長さの小さい領域で、塩基同定の信頼度が低い部位

V\_region<span class="FT">[Feature Table Definition](/ddbj/full_index.html#V_region)</span>  
: 免疫グロブリン重鎖・軽鎖, T-cell receptor アルファ・ベータ・ガンマ鎖の可変部位 V\_segment, D\_segment, N\_region, J\_segment からなる

V\_segment<span class="FT">[Feature Table Definition](/ddbj/full_index.html#V_segment)</span>  
: 免疫グロブリン重鎖・軽鎖, T-cell receptor アルファ・ベータ・ガンマ鎖の可変セグメント V\_region のほとんどとリーダーペプチドの最後の数個のアミノ酸からなる]

variation<span class="FT">[Feature Table Definition](/ddbj/full_index.html#variation)</span>  
: 関連する系統において安定な変異により異なる配列が存在する部位

3'UTR  
: 1)  成熟したmRNAのタンパク質に翻訳されない終止コドンを除く3'末端部位<span class="FT">[Feature Table Definition](/ddbj/full_index.html#3UTR)</span><br>2)  RNA ウイルスゲノムのタンパク質に翻訳されない終止コドンを除く3'末端部位

5'UTR<span class="FT">[Feature Table Definition](/ddbj/full_index.html#5UTR)</span>  
: 1)  成熟したmRNAのタンパク質に翻訳されない5'末端部位;<br>2)  RNA ウイルスゲノムののタンパク質に翻訳されない5'末端部位