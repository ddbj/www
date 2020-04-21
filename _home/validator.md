# validator エラーメッセージ

ここでは DDBJ に登録される配列データをチェックするためのツールから出力されるエラーメッセージについて概説しています。  
エラーメッセージごとに必要な対処方法が異なりますので、適宜、対処をお願いいたします。  
問題、不明点などがございましたら、エラーメッセージを添えて [ご連絡](/contact.html) ください。

### Parser

#### 出力フォーマット

[コード番号\]:[Level\]:[Type\]:[File\]:[エラー位置\]:[メッセージ本文\]

|  コード番号  |  コード番号を示します。  |    |
| ---- | ---- | ---- |
|  Level  |  エラーのレベルを示します。  |    |
|  ^  |  ER1  |  通常のファイル構文に関するエラーです。修正が必要です。  |
|  ^  |  ER2  |  通常のファイル構文に関するエラーです。修正が必要です。  |
|  ^  |  FAT  |  実行環境に関するエラーです。  |
|  ^  |  WAR  |  警告です。修正が必要な場合があります。  |
|  ^  |  MES  |  他のエラーに関連する参考メッセージです。  |
|  Type  |  エラーの種別を示します。  |    |
|  ^  |  STX  |  構文  |
|  ^  |  SYS  |  実行関連  |
|  ^  |  LOC  |  配列とlocation の比較関連  |
|  File  |  エラーが検出されたファイルを示します。  |    |
|  ^  |  ANN  |  アノテーション  |
|  ^  |  SEQ  |  配列  |
|  ^  |  AxS  |  アノテーションと配列の比較  |
|  エラー位置  |  エラーが検出された位置を行番号、または、エントリ名で示します。  |    |
|  メッセージ本文  |  エラーの個別内容を示します。  |    |

#### エラーメッセージ

メッセージ中で括弧( [ と \] )で括られている \#
で始まる語・数値は、実際のエラーメッセージでは、登録において使用されている値などに置換されます。

メッセージ中で、括弧( [ と \] )で括られている \# で始まっていない語は予約語です。

[Parser
エラーメッセージ一覧](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=1311635655)

-----

<div id="Parser-rule">

</div>

-----

### transChecker

#### フォーマット

[コード番号\]:[Level\]: [メッセージ本文\]

|  コード番号  |  コード番号を示します。  |    |
| ---- | ---- | ---- |
|  Level  |  エラーのレベルを示します。  |    |
|  ^  |  ER2  |  通常のファイル構文に関するエラーです。修正が必要です。  |
|  ^  |  FAT  |  実行環境に関するエラーです。  |
|  ^  |  WAR  |  警告です。修正が必要な場合があります。  |
|  メッセージ本文  |  エラーの個別内容を示します。  |    |

**例**

``` code
>entry1.1 <1..>366
TC0020:WAR: [codon_start] qualifier should be selected. The value is automatically set 1. 
TC0020:WAR: [transl_table] qualifier should be selected. The value is automatically set 1. 
//
>entry2.3 4315..4997
TC0017:ER2: First codon [cct] is not a start codon.
TC0018:ER2: Final codon [cat] is not a stop codon.
TC0019:ER2: Stop codon is found in mid of CDS location.
//
```

#### エラーメッセージ

メッセージ中で括弧( **[** と **\]** )で括られている **\#** で始まる語・数値は、実際のエラーメッセージでは、登録において使用されている値などに置換されます。

メッセージ中で、括弧( **[** と **\]** )で括られている \# で始まっていない語は予約語です。

[transChecker
エラーメッセージ一覧](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=215659657)

-----

<div id="transChecker-rule">

</div>

-----

### AGP Parser

#### フォーマット

[コード番号\]:[Level\]:[エラー位置\]:[メッセージ本文\] or [コード番号\]:[Level\]:[メッセージ本文\]

|  コード番号  |  コード番号を示します。  |    |
| ---- | ---- | ---- |
|  Level  |  エラーのレベルを示します。  |    |
|  ^  |  FAT  |  実行環境に関するエラーです。  |
|  ^  |  ER1  |  通常のファイル構文に関するエラーです。修正が必要です。  |
|  ^  |  ER2  |  通常のファイル構文に関するエラーです。修正が必要です。  |
|  ^  |  WAR  |  警告です。修正が必要な場合があります。  |
|  エラー位置  |  エラーが検出された位置を行番号、または、object 名で示します。  |    |
|  メッセージ本文  |  エラーの個別内容を示します。  |    |

#### エラーメッセージ

メッセージ中で括弧( **[** と **\]** )で括られている **\#** で始まる語・数値は、実際のエラーメッセージでは、登録において使用されている値などに置換されます。

[AGP Parser
エラーメッセージ一覧](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=2134091722)

-----

<div id="AgpParser-rule">

</div>

-----
