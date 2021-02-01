---
layout: indexed_content
title: スタイル
lang: ja
---


## 参考 {#ref}

[kramdown syntax](https://kramdown.gettalong.org/syntax.html)

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

## pre

```
\`\`\`
puts "Hello"
\`\`\`
```

```
puts "Hello"
```

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

## ページ内リンク {#anchor}

```
[anchor link](#anchor)  
```

[anchor link](#anchor)  

## HTML タグ内 kramdown {#kramdown-in-html}

HTML タグ内を kramdown として処理させる場合、markdown="1" を付加。

```
<div markdown="1">
This is the first part of a para, which is continued here.
</div>
```

<div markdown="1">
This is the first part of a para, which is continued here.
</div>

