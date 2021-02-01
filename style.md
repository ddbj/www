---
layout: indexed_content
title: スタイル
lang: ja
---

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

[anchor link](#anchor)  

