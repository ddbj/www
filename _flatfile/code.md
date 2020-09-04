---
layout: indexed_content
title: 配列の記載に用いる略号
pathname: code
category: flatfile
lang: ja
related_pages:
  - title: The Genetic Codes
    url: /ddbj/geneticcode.html
  - title: The Genetic Codes
    url: /ddbj/codontable.html
  - title: DDBJ 公開形式 (Flat file)
    url: /ddbj/flat-file.html
  - title: Feature key
    url: /ddbj/features.html
  - title: Qualifier key
    url: /ddbj/qualifiers.html
  - title: Organism qualifier に記載する生物名
    url: /ddbj/organism.html
  - title: Location の記述法
    url: /ddbj/location.html
  - title: タンパク質コード配列; CDS feature について
    url: /ddbj/cds.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode-e.html
  - title: 登録の見本
    url: /ddbj/example.html
---

## 塩基 <a name="nucleotide"></a>

### Nucleotide Base Codes <a name="nucleotide-1"></a>

国際塩基配列データベースで使用する核酸コードは以下の通りです。  
全て小文字を使用します。大文字で登録された場合には、自動的に小文字に変換されます。

| シンボル | 意味           | 説明                           |
| ---- | ---------------- | ----------------------------- |
| a    | a                | adenine                       |
| c    | c                | cytosine                      |
| g    | g                | guanine                       |
| t    | t                | thymine in DNA; uracil in RNA |
| m    | a or c           | amino                         |
| r    | a or g           | purine                        |
| w    | a or t           |    空白                        |
| s    | c or g           |    空白                        |
| y    | c or t           | pyrimidine                    |
| k    | g or t           | keto                          |
| v    | a or c or g      | not t                         |
| h    | a or c or t      | not g                         |
| d    | a or g or t      | not c                         |
| b    | c or g or t      | not a                         |
| n    | a or c or g or t | any                           |

[参考文献]

  - Cornish-Bowden, A. Nucl Acid Res 13, 3021-3030 (1985)
  - [Feature Table Definition](/ddbj/full_index.html): [7.4.1 Nucleotide base codes (IUPAC)](/ddbj/full_index.html#7.4.1)

### Modified Base Abbreviations <a name="nucleotide-2"></a>

修飾塩基は、以下の例のように modified base を用いて記載します。

例

<pre><code>
      FEATURES             Location/Qualifiers
           <a href="/ddbj/features.html#modified_base">modified_base</a>   15
                           <a href="/ddbj/qualifiers.html#mod_base">/mod_base</a>="m2g"
    </code>
</pre>
<br>

| 省略形      | 修飾塩基                                                                 |
| -------- | -------------------------------------------------------------------- |
| ac4c     | 4-acetylcytidine                                                     |
| chm5u    | 5-(carboxyhydroxylmethyl)uridine                                     |
| cm       | 2'-O-methylcytidine                                                  |
| cmnm5s2u | 5-carboxymethylaminomethyl-2-thiouridine                             |
| cmnm5u   | 5-carboxymethylaminomethyluridine                                    |
| dhu      | dihydrouridine                                                       |
| fm       | 2'-O-methylpseudouridine                                             |
| gal q    | beta,D-galactosylqueuosine                                           |
| gm       | 2'-O-methylguanosine                                                 |
| i        | inosine                                                              |
| i6a      | N6-isopentenyladenosine                                              |
| m1a      | 1-methyladenosine                                                    |
| m1f      | 1-methylpseudouridine                                                |
| m1g      | 1-methylguanosine                                                    |
| m1i      | 1-methylinosine                                                      |
| m22g     | 2,2-dimethylguanosine                                                |
| m2a      | 2-methyladenosine                                                    |
| m2g      | 2-methylguanosine                                                    |
| m3c      | 3-methylcytidine                                                     |
| m4c      | N4-methylcytosine                                                    |
| m5c      | 5-methylcytidine                                                     |
| m6a      | N6-methyladenosine                                                   |
| m7g      | 7-methylguanosine                                                    |
| mam5u    | 5-methylaminomethyluridine                                           |
| mam5s2u  | 5-methoxyaminomethyl-2-thiouridine                                   |
| man q    | beta,D-mannosylqueuosine                                             |
| mcm5s2u  | 5-methoxycarbonylmethyl-2-thiouridine                                |
| mcm5u    | 5-methoxycarbonylmethyluridine                                       |
| mo5u     | 5-methoxyuridine                                                     |
| ms2i6a   | 2-methylthio-N6-isopentenyladenosine                                 |
| ms2t6a   | N-((9-beta-D-ribofuranosyl-2-methyltiopurin-6-yl)carbamoyl)threonine |
| mt6a     | N-((9-beta-D-ribofuranosylpurine-6-yl)N-methyl-carbamoyl)threonine   |
| mv       | uridine-5-oxyacetic acid methylester                                 |
| o5u      | uridine-5-oxyacetic acid (v)                                         |
| osyw     | wybutoxosine                                                         |
| p        | pseudouridine                                                        |
| q        | queuosine                                                            |
| s2c      | 2-thiocytidine                                                       |
| s2t      | 5-methyl-2-thiouridine                                               |
| s2u      | 2-thiouridine                                                        |
| s4u      | 4-thiouridine                                                        |
| m5u      | 5-methyluridine                                                      |
| t6a      | N-((9-beta-D-ribofuranosylpurine-6-yl)carbamoyl)threonine            |
| tm       | 2'-O-methyl-5-methyluridine                                          |
| um       | 2'-O-methyluridine                                                   |
| yw       | wybutosine                                                           |
| x        | 3-(3-amino-3-carboxypropyl)uridine, (acp3)u                          |
| OTHER    | Other ([/note](/ddbj/qualifiers.html#note) qualifier に修飾塩基を記載します)    |

[参考文献]

  - Sprinzl, M. and Gauss, D.H. Nucl Acid Res 10, r1 (1982).(note that
    in Cornish\_Bowden, A. Nucl Acid Res 13, 3021-3030 (1985)the
    IUPAC-IUB declined to recommend a set of abbreviations for modified
    nucleotides)
  - [Feature Table Definition](/ddbj/full_index.html): [7.4.2 Modified
    base abbreviations](/ddbj/full_index.html#7.4.2)

## アミノ酸 <a name="amino"></a>

### Amino Acid Codes<a name="amino-1"></a> 

国際塩基配列データベースで使用するアミノ酸コードは以下の通りです。  
[CDS feature](/ddbj/cds.html) の [/translation](/ddbj/qualifiers.html#translation) には以下の一文字表記で表されます。   
[/transl\_except](/ddbj/qualifiers.html#transl_except), [/anticodon](/ddbj/qualifiers.html#anticodon) に記載するアミノ酸は、以下の省略形を使用します。  
これ以外のアミノ酸を記載する場合には、[Modified and unusual Amino Acids](#amino-2)を参照して下さい。

| Abbreviation | 1 letter abbreviation | Amino acid name             |
| ------------ | --------------------- | --------------------------- |
| Ala          | A                     | Alanine                     |
| Arg          | R                     | Arginine                    |
| Asn          | N                     | Asparagine                  |
| Asp          | D                     | Aspartic acid               |
| Cys          | C                     | Cysteine                    |
| Gln          | Q                     | Glutamine                   |
| Glu          | E                     | Glutamic acid               |
| Gly          | G                     | Glycine                     |
| His          | H                     | Histidine                   |
| Ile          | I                     | Isoleucine                  |
| Leu          | L                     | Leucine                     |
| Lys          | K                     | Lysine                      |
| Met          | M                     | Methionine                  |
| Phe          | F                     | Phenylalanine               |
| Pro          | P                     | Proline                     |
| Pyl          | O                     | Pyrrolysine                 |
| Ser          | S                     | Serine                      |
| Sec          | U                     | Selenocysteine              |
| Thr          | T                     | Threonine                   |
| Trp          | W                     | Tryptophan                  |
| Tyr          | Y                     | Tyrosine                    |
| Val          | V                     | Valine                      |
| Asx          | B                     | Aspartic acid or Asparagine |
| Glx          | Z                     | Glutamic acid or Glutamine  |
| Xaa          | X                     | Any amino acid              |
| Xle          | J                     | Leucine or Isoleucine       |
| TERM         |                   | termination codon           |

[参考文献]

  - IUPAC-IUB Joint Commission on Biochemical Nomenclature.Nomenclature and Symbolism for Amino Acids and Peptides. Eur. J. Biochem. 138: 9-37 (1984).
  - [Feature Table Definition](/ddbj/full_index.html): [7.4.3 Amino acid abbreviations](/ddbj/full_index.html#7.4.3)

### Modified and Unusual Amino Acids<a name="amino-2"></a> 

[Amino Acid Codes](#amino-1) にないアミノ酸を記載する場合には以下の省略形を使用します。  
[CDS feature](/ddbj/cds.html) の [/translation](/ddbj/qualifiers.html#translation) にはいずれも "X" で表されます。

| 省略形   | アミノ酸                                                              |
| ----- | ----------------------------------------------------------------- |
| Aad   | 2-Aminoadipic acid                                                |
| bAad  | 3-Aminoadipic acid                                                |
| bAla  | beta-Alanine, beta-Aminoproprionic acid                           |
| Abu   | 2-Aminobutyric acid                                               |
| 4Abu  | 4-Aminobutyric acid, piperidinic acid                             |
| Acp   | 6-Aminocaproic acid                                               |
| Ahe   | 2-Aminoheptanoic acid                                             |
| Aib   | 2-Aminoisobutyric acid                                            |
| bAib  | 3-Aminoisobutyric acid                                            |
| Apm   | 2-Aminopimelic acid                                               |
| Dbu   | 2,4-Diaminobutyric acid                                           |
| Des   | Desmosine                                                         |
| Dpm   | 2,2'-Diaminopimelic acid                                          |
| Dpr   | 2,3-Diaminoproprionic acid                                        |
| EtGly | N-Ethylglycine                                                    |
| EtAsn | N-Ethylasparagine                                                 |
| Hyl   | Hydroxylysine                                                     |
| aHyl  | allo-Hydroxylysine                                                |
| 3Hyp  | 3-Hydroxyproline                                                  |
| 4Hyp  | 4-Hydroxyproline                                                  |
| Ide   | Isodesmosine                                                      |
| aIle  | allo-Isoleucine                                                   |
| MeGly | N-Methylglycine, sarcosine                                        |
| MeIle | N-Methylisoleucine                                                |
| MeLys | 6-N-Methyllysine                                                  |
| MeVal | N-Methylvaline                                                    |
| Nva   | Norvaline                                                         |
| Nle   | Norleucine                                                        |
| Orn   | Ornithine                                                         |
| OTHER | Other ([/note](/ddbj/qualifiers.html#note) qualifier にアミノ酸を記載します) |

[参考文献]

  - [Feature Table Definition](/ddbj/full_index.html): [7.4.4 Modified and unusual Amino Acids](/ddbj/full_index.html#7.4.4)
