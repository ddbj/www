---
layout: indexed_content
title: スタイル
lang: ja
---

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

リスト。入れ子は半角空白4個を前に入れる。

```
- リスト1
    - ネストリスト2
- リスト3
```

- リスト1
    - ネストリスト2
- リスト3

数字リスト。リスト追加時の番号振り直しを避けるため全て 1. とする。

```
1. リスト1
    1. ネストリスト2
1. リスト3
```

1. リスト1
    1. ネストリスト2
1. リスト3

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

