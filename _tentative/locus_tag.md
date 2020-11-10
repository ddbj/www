---
layout: indexed_content
title: /locus_tag qualifier の記載法
pathname: locus_tag
category: tentative
lang: ja
---

## 背景 <a name="背景"></a>

/locus\_tag qualifier は、2003年に導入されました。その導入当初は、ゲノムプロジェクトが
その配列データを更新する際などに feature 継承をするための追跡用 ID として自由度の高い記載を可能としていました。

しかし、[The American Society for Microbiology](https://www.asm.org/) からの要請を受けて、[2005年の国際実務者会議](/activities/index.html#2005)において、/locus\_tag qualifier の用法が再検討されました。その結果、/locus\_tag qualifier を恒久的に一意な ID として維持していくことを目指して、配列データの登録時に当該ゲノム専用の prefix を割り当てることにより、/locus\_tag を記載するように規則が変更されました。

## ゲノム配列データの登録における /locus\_tag の適切な用法 <a name="ゲノム配列データの登録における_/locus_tag_の適切な用法"></a>

国際実務者会議 (International Collaborators Meeting) において、ゲノムプロジェクトを INSDC
に登録するように求めていく、と合意しています。各ゲノムプロジェクトに ID を割り当てることにより、複数の配列データを各ゲノムプロジェクトに関連付けることが可能になります。この Project ID は、[DDBJ フラットファイル](/ddbj/flat-file.html)においては [ACCESSION](/ddbj/flat-file.html#Accession) 行と [VERSION](/ddbj/flat-file.html#Version) 行の下に表示されます。ゲノムプロジェクトの登録は DDBJ, EMBL-Bank/EBI, GenBank/NCBI で行うことができます。登録者はゲノムプロジェクトの登録に際し、同時に /locus\_tag prefix の登録を行うことができます。

DDBJ においては、ゲノム配列データ登録用に [Mass Submission System](/ddbj/mss.html) をご用意しております。また、[Genome Project のデータ登録](/ddbj/genome.html)もご参照ください。[BioProject](/bioproject/index.html) の登録の際に、適宜、指定していただければ、/locus\_tag prefix 割り当てを検討いたします。

/locus\_tag はゲノム上の全ての gene に体系的に割り当てる識別子(identifier, ID)であり、生物学関連団体による遺伝子名に代わる ID になります。２組の異なるゲノムの登録者が全く異なる２つのゲノムにおいて全く異なる２つの遺伝子に同じ体系 拠る名称を用いたならば、混乱を招くことになるでしょう。このようなことが起こることを防ぐために INSD (DDBJ/EMBL/GenBank) では /locus\_tag prefix を登録する仕組みを作りました。真核生物でも原核生物でもゲノムの登録者は、そのゲノム登録に先立って prefix を登録してください。そして、複数の染色体、プラスミドといったプロジェクトの全ての構成要素に同じ /locus\_tag prefix を使用してください。

/locus\_tag の prefix には英数字のみを使用し、3 文字以上 12 文字以内でなければなりません。最初の1文字目は英字で始めますが、2 文字目以降は数字でも構いません (例: A1C)。prefixには "-" "\_" "\*" といったシンボル記号は使用しないでください。/locus\_tag においては prefix と tag の値はアンダースコア "\_" によって区切ります (例: A1C\_00001)。

/locus\_tags は、全てのタンパク質コード遺伝子とタンパク質をコードしない RNA 遺伝子に割り当ててください。/locus\_tag はゲノム配列の登録において [mRNA](/ddbj/features.html#mRNA), [CDS](/ddbj/features.html#cds), [5'UTR](/ddbj/features.html#5UTR), [3'UTR](/ddbj/features.html#3UTR), [intron](/ddbj/features.html#intron), [exon](/ddbj/features.html#exon), [tRNA](/ddbj/features.html#tRNA), [rRNA](/ddbj/features.html#rRNA), [ncRNA](/ddbj/features.html#ncRNA), [misc\_RNA](/ddbj/features.html#misc_RNA), などの feature に記載します。[repeat\_region](/ddbj/features.html#repeat_region) には /locus\_tag qualifier を記載しないでください。同じ値を持つ /locus\_tag は ある単一の gene の全ての構成要素に使用します。例えば、ある特定の gene を示す exon, CDS, mRNA といった全ての feature には同じ値を持つ /locus\_tag を記載します。また、１つの /locus\_tag には１つの [/gene](/ddbj/qualifiers.html#gene) qualifier が対応するようにしてください。すなわち、もし何れかの feature において ある /locus\_tag が ある [/gene](/ddbj/qualifiers.html#gene) qualifier と対応している場合は、その [/gene](/ddbj/qualifiers.html#gene) qualifier で示される遺伝子シンボルのみが、その /locus\_tag を含む他の全ての feature にも存在していなければな ません。

/locus\_tag はゲノム内の gene に体系的に記載してください。一般的には、ゲノム上での出現順序になることが期待されます。登録者がゲノム配列とその annotation を更新した場合、新規の gene は、[用例 1] その次に続く使用可能な locus\_tag、または、[用例2] 登録者は最初の locus\_tag 割り当ての際に予め gap を残しておくことも可能なので 新規annotationの際にこの gap を埋めるような値を記載すること、の何れかが可能です。

**用例 1:** /locus\_tag 削除と新規追加

```
       更新前の          更新後の
       登録データ        登録データ
        ABC_0022
                          ABC_4568 (new gene)
        ABC_0023          ABC_0023
```

**用例 2:** /locus\_tag に予め gap を残しておいた場合の挿入

```
       更新前の          更新後の
       登録データ        登録データ
        ABC_0020          ABC_0020
                          ABC_0021 (new gene)
        ABC_0030          ABC_0030
```

{::options parse_block_html="true" /}
<span class="red">**禁則:** 小数(バージョン類似表記) は行わないでください</span>

```
       更新前の          更新後の
       登録データ        登録データ
        ABC_0020          ABC_0020
                          ABC_0020.1 (new gene)
        ABC_0030          ABC_0030
```

プロジェクト内では、全ての locus\_tags の番号付けなどを、タンパク質コード遺伝子、RNA 産物、由来染色体の別などによらない記載方法とすることを推奨します。

しかしながら、登録者が染色体番号、RNA 種別などの情報を locus\_tag の値に含めることを希望する場合、prefix と underscore の後に それらの情報を加えても構いません:

```
        ABC_I00001 for gene 1, chromosome I
        ABC_II00001 for gene 1, chromosome II
        ABC_r1112 for ribosomal RNA genes
        ABC_t1113 for tRNA genes
```

登録者は GenBank/NCBI, ENA/EBI, DDBJ の何れか１つにおいて locus\_tag prefix と BioProject/BioSample の登録手続きを行うことができます。この手続きは、ゲノム配列データを登録するデータバンクにおいて行ってください。locus\_tag prefix 割り当てを申請した際には、他のプロジェクトとの重複がないか、などの確認を行います。問題なければ、登録者に locus\_tag prefix が割り当てられたことをお知らせします。重複した際は、その旨を登録者にお知らせしますので、別な重複しない prefix を再検討の上、ご連絡ください。

DDBJ においては、ゲノム配列データ登録用に [Mass Submission System](/ddbj/mss.html) をご用意しております。また、[Genome Project のデータ登録](/ddbj/genome.html)もご参照ください。[BioProject](/bioproject/index.html) の登録の際に、適宜、指定していただければ、/locus\_tag prefix 割り当てを検討いたします。

[NCBI](https://www.ncbi.nlm.nih.gov/genomes/locustag/Proposal.pdf) にも同様のガイドラインがありますので、ご参照ください。
