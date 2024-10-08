---
layout: tabbed_indexed_content
service_name: MetaboBank
title: mzB format
category: metabobank
current_tab: resource
lang: ja
---

MetaboBankは、質量分析の生データとして、登録時のデータフォーマットに加えて、mzBフォーマットに変換したファイルも提供しています。  

## 概要
mzBフォーマットはReifycs社の提唱するHive形式に準拠した質量分析データの共通フォーマットの一つです。MetaboBank は、ファイルサイズを小さくし、また専用のAPIにより高速にデータ処理ができようにするために、様々なベンダーの質量分析の生データファイル（Thermo RAW, Waters RAW, Shimadzu LCD、Shimadzu QGD、Agilent D, Bruker D, Sciex WIFF, Reifycs ABF, cdf、mzML, mzXML）を、独自のバイナリー形式であるこのフォーマットでも提供しています。  

このフォーマットを利用することで、MetaboBankの全生データ（135study、合計データサイズ：1240GB、2024年8月）は217GBになり、元のデータサイズの17.5％に減少しました。同様にイメージングMSの生データ（1study、合計データサイズ：95GB、2024年8月）においては4GBになり、元のデータサイズの4.3％に減少しました。  

## ツール
mzBフォーマットファイルを閲覧するためには、無料の[Data Checkerプログラム](https://www.reifycs.com/products/hive/baseapp-dl)が利用できます。現在のところ、Microsoft Windows版のみ提供されています。  

mzBフォーマットファイルに関するソフトウェアやAPIを開発するためには、無料の開発環境であるHive SDKはが利用できます。詳細は、[こちら](https://ja.reifycs.com/products/hive/)を参照しください。
