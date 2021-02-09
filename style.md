---
layout: indexed_content
title: スタイル
lang: ja
---

## 参考 {#ref}

[kramdown syntax](https://kramdown.gettalong.org/syntax.html)

## パラグラフ {#paragraph}

前後に空行を入れる。途中の改行は無視される。

```

以下の unaligned bam ファイルの登録をサポートしています。1 Run に 1 bamファイルを指定してください。
unaligned bamの場合、リファレンス配列や対応表の指定は必要ありません。

```

以下の unaligned bam ファイルの登録をサポートしています。1 Run に 1 bamファイルを指定してください。
unaligned bamの場合、リファレンス配列や対応表の指定は必要ありません。


パラグラフ内で改行する場合、半角空白二個を入れる。

```
以下の unaligned bam ファイルの登録をサポートしています。1 Run に 1 bamファイルを指定してください。    
unaligned bamの場合、リファレンス配列や対応表の指定は必要ありません。
```

以下の unaligned bam ファイルの登録をサポートしています。1 Run に 1 bamファイルを指定してください。    
unaligned bamの場合、リファレンス配列や対応表の指定は必要ありません。

## 見出し {#heading}

```
## 見出し2
### 見出し3
#### 見出し4
```

## 見出し2
### 見出し3
#### 見出し4

### id 付き見出し

```
## 見出し2 {#id2}
### 見出し3 {#id3}
#### 見出し4 {#id4}
```

## 見出し2 {#id2}
### 見出し3 {#id3}
#### 見出し4 {#id4}


id 属性値のルール

* 内容を簡潔に表す英語。日本語が URL に含まれるのは好ましくないため日本語要素にも英語で付ける
* a-z0-9- のみ
* a-z で始める
* 全て小文字
* 意味的な区切りを - で入れる。termsofuse → terms-of-use

[Google HTML/CSS Style Guide - ID and Class Naming](https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Naming)

数字で始まる値は (例 {#454}) は属性として処理されないため name 要素を使う。

```
## 見出し 数字 id <a name="454"></a>
```

## 見出し 数字 id <a name="454"></a>

## リスト {#list}

### リスト

入れ子は半角空白4個を前に入れる。

```
- リスト1
    - ネストリスト1
    - ネストリスト2
- リスト2
```

- リスト1
    - ネストリスト1
    - ネストリスト2
- リスト2

### 数字リスト

リスト追加時の番号振り直しを避けるため全て 1. とする。

```
1. リスト1
    1. ネストリスト1
    1. ネストリスト2
1. リスト2
```

1. リスト1
    1. ネストリスト1
    1. ネストリスト2
1. リスト2

## 画像 {#image}

```
![](/assets/images/parts/tsv.png)
```

![](/assets/images/parts/tsv.png)

class 付き

```
![](/assets/images/parts/tsv.png){:.tsv}
```

![](/assets/images/parts/tsv.png){:.tsv}

## figure {#figure} 

[Jekyll includes](https://jekyllrb-ja.github.io/docs/includes/) で記載。class 属性で幅を指定

```
{% include image.html url="books/datamodel1.jpg" caption="三つの菌株のゲノム配列を登録" class="w450" %}
```

{% include image.html url="books/datamodel1.jpg" caption="三つの菌株のゲノム配列を登録" class="w450" %}

## リンク

内部リンク

```
[DRA](/dra/index.html)
```

[DRA](/dra/index.html)

外部リンク

```
[NCBI](https://www.ncbi.nlm.nih.gov/)
```

[NCBI](https://www.ncbi.nlm.nih.gov/)

## pre {#pre}

\`\`\`<br>
puts "Hello"<br>
\`\`\`<br>

```
puts "Hello"
```

## 強調 {#bold}

```
**強調**
```

**強調**

## Table {#table}

### ヘッダーあり

```
| Default aligned | Left aligned | Center aligned | Right aligned|
|---|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | **strong** | baz|
| Third line |quux | baz | bar|
```

| Default aligned | Left aligned | Center aligned | Right aligned|
|---|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | **strong** | baz|
| Third line |quux | baz | bar|

### ヘッダーあり・寄せ

```
| Default aligned | Left aligned | Center aligned | Right aligned|
|---|:---|:---:|---:|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | **strong** | baz|
| Third line |quux | baz | bar|
```

| Default aligned | Left aligned | Center aligned | Right aligned|
|---|:---|:---:|---:|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | **strong** | baz|
| Third line |quux | baz | bar|

### ヘッダーなし

```
| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|
```

| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|

### ヘッダーなし・寄せ

```
|---|:---|:---:|---:|
| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|
```

|---|:---|:---:|---:|
| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|

table に class 属性を付与。例1

```
{:.test}
| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|
```

{:.test}
| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|

table に class 属性を付与。例2

```
| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|
{:.test}
```

| Default aligned | Left aligned | Center aligned | Right aligned|
| First body part | Second cell | Third cell | fourth cell|
| Second line |foo | strong | baz|
| Third line |quux | baz | bar|
{:.test}

## 定義リスト {#definition}

```
c. 三名法などで記載する場合  
: Category は "Valid subspecies or variety not registered in taxonomy database" となりますので、メニューから選択してください。<br>下記、生物名記載の各論より、[三名法](#trinominal)について ご参照の上、scientific name 入力ボックスには subspecies、variety または、それに準ずる strain などを含めて生物名を記載してください。
```

c. 三名法などで記載する場合  
: Category は "Valid subspecies or variety not registered in taxonomy database" となりますので、メニューから選択してください。<br>下記、生物名記載の各論より、[三名法](#trinominal)について ご参照の上、scientific name 入力ボックスには subspecies、variety または、それに準ずる strain などを含めて生物名を記載してください。


## ページ内リンク {#anchor}

```
[anchor link](#anchor)  
```

[anchor link](#anchor)  

## HTML タグ内 kramdown {#kramdown-in-html}

HTML タグ内を kramdown として処理させる場合、markdown="1" を付加。

```
<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)を熟読してください。</span>
</div>
```

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)を熟読してください。</span>
</div>

markdown="1" が無いと HTML タグ内の markdown が処理されない。

```
<div class="attention">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)を熟読してください。</span>
</div>
```

<div class="attention">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)を熟読してください。</span>
</div>
