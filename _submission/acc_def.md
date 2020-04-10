---
layout: indexed_content
title: 国際塩基配列データベースのアクセッション番号
service_link: https://www.ddbj.nig.ac.jp/acc_def.html
category: _submission
---

国際塩基配列データベースのアクセッション番号
============================================

定義 {#definition}
----

[INSD](/insdc.html#insd) (the International Nucleotide Sequence
Databases; 国際塩基配列データベース)
とは、全世界の研究者が実験によって決定した塩基配列データ、または、その
[TPA](/ddbj/tpa.html) データを DDBJ，ENA，NCBI
が定めたデータ構築規範に沿って収集・編集した上で、提供するものを指します。

INSD が正式に発行する**アクセッション番号**は、データに対して固有な ID
として割り振られます。

INSD アクセッション番号の書式 {#format}
-----------------------------

INSD アクセッション番号は アルファベット＋数字 で構成されています。\
アルファベットの部分を[プレフィックス](/prefix.html)と呼びます。\
アクセッション番号の書式は [登録データ種別](/data-categories.html)
によって、以下のように異なります。

Annotated/Assembled Data

::: {.main_table .format}
  ------------------------------------------------- -----------------------------------
  conventional                                      アルファベット１文字＋５桁の数字:
                                                    例 A12345\
                                                    アルファベット２文字＋６桁の数字:
                                                    例 AB123456\
                                                    アルファベット２文字＋８桁の数字:
                                                    例 AB12345678

  bulk\                                             アルファベット４文字 ([For Large
  [WGS](/ddbj/wgs.html), [TSA](/ddbj/tsa.html),     Scale Data](/prefix.html#large))
  [TLS](/ddbj/tls.html)                             ＋８～１０ 桁の数字: 例
                                                    ABCD01012345\
                                                    アルファベット６文字 ([For Large
                                                    Scale Data](/prefix.html#large))
                                                    ＋８～１０ 桁の数字: 例
                                                    ABCDEF01012345

  [MGA](/ddbj/mga.html)                             アルファベット５文字＋７
                                                    桁以上の数字: 例 ABCDE1234567

  [protein\_id](/ddbj/qualifiers.html#protein_id)   アルファベット３文字 ([protein\_id
                                                    prefix list](/prefix.html#protein))
                                                    ＋５桁の数字: 例 ABC12345\
                                                    アルファベット３文字 ([protein\_id
                                                    prefix list](/prefix.html#protein))
                                                    ＋７桁の数字: 例 ABC1234567
  ------------------------------------------------- -----------------------------------
:::

シークエンサ出力データ

::: {.main_table .format}
  ----------------------------------------- --------------------------------------------------------------------------------------------
  [Trace Archive](/dta/index.html)          アルファベット２文字 (TI のみ) ＋１ 桁以上の数字: 例 TI12345678
  [Sequece Read Archive](/dra/index.html)   アルファベット３文字 ([SRA prefix list](/prefix.html#dra)) ＋６ 桁以上の数字: 例 DRA000001
  ----------------------------------------- --------------------------------------------------------------------------------------------
:::

研究プロジェクト・サンプル

::: {.main_table .format}
  -------------------------------------- ------------------------------------------------------------------------------------------------------
  [BioProject](/bioproject/index.html)   アルファベット５文字 ([BioProject prefix list](/prefix.html#project)) ＋１ 桁以上の数字: 例 PRJDA123
  [BioSample](/biosample/index.html)     アルファベット４文字 ([BioSample prefix](/prefix.html#sample)) ＋８桁の数字: 例 SAMD00000001
  -------------------------------------- ------------------------------------------------------------------------------------------------------
:::

アクセッション番号と混同されるもの {#confuse}
----------------------------------

下記は混同されることが多いのですが、INSD
のアクセッション番号ではありません。

INSD 以外のデータベースにおいて発行される ID
:   RefSeq numbers: 例 NC\_123456, NM\_123456
:   Ensembl numbers: 例 ENSG00000139618
:   UniProt accession numbers: 例 P12345, Q01234
