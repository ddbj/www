---
layout: indexed_content
title: ハードウェア
category: sc
lang: ja
current_tab: system
---

# ハードウェア構成

 
1.システム全体
  	ハードウェア諸元 	合計
計算ノード 	Thin計算ノード 	Type 1a

CPUにAMD EPYC 7501を搭載
	

ノード数: 136台
総CPUコア数: 8,704
合計演算性能: 139.264 TFLOPS
総メモリ容量 69.632 TB（コアあたり8GB）
	総CPUコア数: 15,424
合計演算性能 933.560 TFLOPS
(CPU: 434.360 TFLOPS, GPU: 499.2 TFLOPS)
総メモリ容量 153.088 TB
Type 1b

CPUにAMD EPYC 7702を搭載（2020年4月増設）
	

ノード数: 28台
総CPUコア数: 3,584
合計演算性能: 57.344 TFLOPS
総メモリ容量 14.336 TB（コアあた4GB）
Type 2a

CPUにIntel Xeonを搭載
	

ノード数: 52台
総CPUコア数: 1,664
合計演算性能 111.800 TFLOPS
総メモリ容量 19.968 TB (コアあたり12GB)
Type 2b

GPGPU搭載
	ノード数: 16台
総CPUコア数: 384
合計演算性能: 536.064 TFLOPS
(CPU: 36.864 TFLOPS, GPU: 499.2 TFLOPS)
総メモリ容量 6.144 TB (コアあたり16GB)
Medium計算ノード

3TBの共有メモリ搭載
	ノード数: 10台
総CPUコア数: 800
合計演算性能 61.440 TFLOPS
総メモリ容量 30.72 TB (コアあたり 38.4GB)
Fat計算ノード

2ノードを接続し12TBの共有メモリを構成
	ノード数 2台
総CPUコア数: 288
合計演算性能 27.648 TFLOPS
総メモリ容量 12.288 TB (コアあたり42.7GB)
ストレージ 	大容量高速ストレージ

解析用ストレージ領域(※1)
	Lustreファイルシステム
合計容量：13.8PB 	総ストレージ容量 43.8PB
大容量アーカイブストレージ

DB用ストレージ領域(※2)
	SpectrumScaleファイルシステム+テープ
合計容量：30PB (15PBディスク、15PBテープの階層ストレージ)
Thin計算ノード搭載NVMe SSD

解析用一時データ配置領域
	3.2TB/各Thin計算ノード 	複数ノードのNVMe SSDを束ねてLustre on Demand(Lustreファイルシステム)としても利用可能。
ノード間相互結合網 	InfiniBand 4×EDR 100Gbps fat tree (ストレージに対してはfull bi-section、計算ノードは上流SWへの接続帯域：下流SWへの接続帯域は1:4) 	同左

※1. 解析用ストレージ領域：一般解析区画および個人ゲノム解析区画におけるユーザホーム領域
※2. DB用ストレージ領域：DRA等のDDBJデータベースを格納している領域。データベースは一般解析区画から参照可能。

 
2.計算ノード
・計算ノードの種類とCPU

(Intel と AMD のホームページから引用)

計算ノード

プロセッサ名
	

Fat

Xeon Gold 6154
	

Medium

Xeon Gold 6148
	

Thin Type 1a

AMD EPYC7501
	

 

Thin Type 1b

AMD EPYC7702

(2020年4月増設)
	

Thin Type 2a

Xeon Gold 6130
	

Thin Type 2b

Xeon Gold 6136
コードネーム 	Skylake 	Skylake 	Naples 	Rome 	Skylake 	Skylake
リリース時期 	2017年第3四半期　　　 	2017年第3四半期　　　 	2017年第2四半期　　　 	2019年第2四半期 	2017年第3四半期　　　 	2017年第3四半期　　　
コア数 	18 	20 	32 	64 	16 	12
スレッド数 	36 	40 	64 	128 	32 	24
クロックスピード 	3.00GHz 	2.4GHz 	2.0GHz 	2.0GHz 	2.1GHz 	3.00GHz
理論演算性能(CPU当り) 	1728.0GFLOPS 	1536.0GFLOPS 	512.0GFLOPS 	2048.0GFLOPS 	1075.2GFLOPS 	1152.0GFLOPS
Turbo boost最大周波数 	3.70GHz 	3.70GHz 	3GHz 	3.35GHz 	3.70GHz 	3.70GHz
Cache 	24.75MB 	27.5MB 	64MB 	256MB 	21MB 	24.75MB

計算内容が主に整数演算の場合AMD EPYCが有利、浮動小数点演算の場合Intel Xeonが有利です。

AMD製CPU EPYC7501は1CPU32コア、EPCY7702は1CPU64コアを有することが特徴です。メモリも8チャネルあり大容量のメモリを搭載可能です。今回は512GB/nodeのメモリを搭載しています。

Intel製CPUはskylake世代を導入しています。新しい拡張命令セットであるIntel AVX-512をサポートしており、利用することにより演算幅が従来の2倍となり、 浮動小数点演算については従来プロセッサに対して大幅な性能向上を実現しています。AVX-512に対応しているソフトウェアについてはIntel製CPU搭載のThinノードを利用して頂いたほうが有利です。

 

 
・Thin計算ノード Type 1a (HPE ProLiant DL385 Gen10; 136台)

CPUとしてAMD EPYC 7501プロセッサを搭載した計算ノードです。

 

HPE ProLiant DL385 Gen10

HPE ProLiant DL385 Gen10

 

(ホスト名: at001 -- at136)
	構成要素 	型番 	員数 	ノードあたりの性能など
CPU 	

AMD EPYC 7501 (32 cores)

Base 2.0GHz, Max 3.0GHz
	2基 	

合計64 cores

 
Memory 	32GB DDR4-2666 	16枚 	合計 512GB (CPUコアあたり 8GB)
Storage 	1.6TB NVMe SSD 	1基 	 
3.2TB NVMe SSD 	1基 	 
Network 	InfiniBand 4xEDR 	1本 	100Gbps

 
・Thin計算ノード Type 1b (DELL PowerEdge R6525; 28台)

CPUとしてAMD EPYC 7702プロセッサを搭載した計算ノードです。

 

 

 

thin_type1b.png

 

DELL PowerEdge R6525

 

(ホスト名: at137 -- at164)

 
	構成要素 	型番 	員数 	ノードあたりの性能など
CPU 	

AMD EPYC 7702 (64 cores)

Base 2.0GHz, Max 3.35GHz
	2基 	

合計128 cores

 
Memory 	32GB DDR4-3200 	16枚 	合計 512GB (CPUコアあたり 4GB)
Storage 	1.6TB NVMe SSD 	2基 	 

900GB SAS HDD
	1基 	 
Network 	InfiniBand 4xEDR 	1本 	100Gbps

 
・Thin計算ノード Type 2a (HPE Apollo 2000 Gen10; 52台)

CPUとしてIntel Xeonプロセッサを搭載した計算ノードです。

 

thin_type2a.png

HPE Apollo 2000 Gen10

 

(ホスト名: it001 -- it052)
	構成要素 	型番 	員数 	ノードあたりの性能など
CPU 	

Intel Xeon Gold 6130 (16 cores)

Base 2.1GHz, Max 3.7GHz
	2基 	

合計32 cores

 
Memory 	32GB DDR4-2666 DIMM 	12枚 	合計 384GB (CPUコアあたり 12GB)
Storage 	1.6TB NVMe SSD 	1基 	 
3.2TB NVMe SSD 	1基 	 
Network 	InfiniBand 4xEDR 	1本 	100Gbps

 
・Thin計算ノード Type 2b (HPE Apollo 6500 Gen10; 16台)

NVIDIA Tesla V100 GPUを各ノードに4基搭載した計算ノードです。

thin_type2b.png

HPE Apollo 6500 Gen10

 

(ホスト名: igt001 -- igt016)
	構成要素 	型番 	員数 	ノードあたりの性能など
CPU 	

Intel Xeon Gold 6136 (12 cores)

Base 3.0GHz, Max 3.7GHz
	2基 	

合計24 cores

 
Memory 	32GB DDR4-2666 DIMM 	12枚 	合計 384GB (CPUコアあたり 16GB)
GPU 	NVIDIA Tesla V100 SXM2 	4基 	 
Storage 	1.6TB NVMe SSD 	1基 	 
3.2TB NVMe SSD 	1基 	 
Network 	InfiniBand 4xEDR 	1本 	100Gbps

 
(参考）GPUの仕様
名称 	NVIDIA Tesla V100 SXM2 (GPGPU)　　　　
コア数(個) 	640
クロック速度 	1,455MHz
単精度浮動小数点演算ピーク性能 	15TFLOPS
倍精度浮動小数点演算ピーク性能 	7.5TFLOPS
単体コア理論性能 	1.3GLOPS
メモリサイズ 	6GB(GDDR5)
メモリバンド幅 	900GB/sec
1GFLOPS毎のメモリバンド幅 	266GB/sec
接続帯域 	8 (PCIe2.0 x16)GB/sec

 
・Medium計算ノード (HPE ProLiant DL560 Gen10; 10台)

3TBの物理メモリを搭載した80コアを搭載した計算ノードです。De novoアセンブラなど大規模なメモリを必要とするようなプログラムを実行するのに向いています。UGE配下のためジョブ投入により利用可能です。

 

medium.png

HPE ProLiant DL560 Gen10

 

(ホスト名: m01 -- m10)
	構成要素 	型番 	員数 	ノードあたりの性能など
CPU 	

Intel Xeon Gold 6148 (20 cores)

Base 2.4GHz, Max 3.7GHz
	4基 	

合計80 cores

 
Memory 	64GB DDR4-2666 DIMM 	48枚 	合計 3,072GB (CPUコアあたり 38.4GB)
Storage 	1TB SATA HDD 	2基 (RAID1) 	合計1TB (RAID1)
Network 	InfiniBand 4xEDR 	1本 	100Gbps

 
・Fat計算ノード (HPE Superdome Flex; 1台)

複数の計算ノードを接続して大規模な共有メモリー型の計算機の構築が可能なNUMA(Non Uniformed Memory Access)アーキテクチャの計算ノードです。
FATノードはUGE配下ではなく、申請制での利用となります。

 

HPE superdome flex

HPE Superdome Flex

 

(ホスト名: fat1, fat2)
	構成要素 	型番 	員数 	ノードあたりの性能など
CPU 	

Intel Xeon Gold 6148 (18 cores)

Base 3.0GHz, Max 3.7GHz
	16基 	

合計288 cores
Memory 	64GB DDR4-2666 DIMM 	192枚 	

合計 12,288GB (CPUコアあたり 42.7GB)
Storage 	1.2TB SAS HDD 	2基 (RAID1) 	合計1.2TB (RAID1)
Network 	InfiniBand 4xEDR 	1本 	100Gbps

 
 
3. ストレージ

ストレージでは、性能と用途で大別して以下のディスク領域を提供しています。
ストレージ種別(ファイルシステム) 	マウントディレクトリ 	利用可能な計算ノード 	アクセス速度 	主な用途、備考
大容量高速ストレージ
(Lustre) 	/lustre6 - /lustre8 	すべての種別の計算ノードからアクセス可能 	高い。
複数ノードからの高並列での書き込みに対応。 	ユーザホーム領域、及びジョブの出力用スクラッチエリア
ローカルNVMe SSD 	/data1 	Thin計算ノードで利用可能 	非常に高い。 	ジョブのスクラッチデータ置き場（再起動で削除）但しノード間で共有はできない。
複数ノードのNVMeSSDを組み合わせてLustre(Lustre on Demand)を構成することでノード間の共有も可能。
大容量アーカイブストレージ
(Spectrum Scale) 	/gpfs1 - /gpfs3 	すべての種別の計算ノードからアクセス可能。ただし参照専用。 	高い。
複数ノードからの高並列での書き込みに対応。 	

業務用途。
DRA等のDDBJデータベースを格納しており、計算ノードから参照可能。
大容量アーカイブストレージ
(Tape領域) 	

-
	研究用途ノードでは通常無し 	低い。 	データバックアップとして利用。
Spectrum Scaleとの階層ストレージとしても利用。
 
・大容量高速ストレージ(Lustre)
※詳細や使い方については「Lustreについて」をご参照ください。

高速並列ファイルシステムであるLustre File System(Lustre)により構成しています。Lustreは、複数ノードからの大容量の並列IOに対して高い性能を持つファイルシステムであり、ユーザのホームディレクトリ領域兼ジョブ出力の出力先として利用しています。

 
遺伝研スーパーコンピュータが提供するLustreファイルシステム一覧 ファイルシステム名称 	アクセスパス 	実効容量 	利用用途 	最大性能値 	構成
Lustre6 	/lustre6 	3.8PB 	

前スパコンのユーザーデータ置き場

DDBJのデータベース構築用
	35GB/sec 	DDN SFA14KXE+SS8462, DDN 1U server, DDN SFA7700X
Lustre7 	/lustre7 	5.0PB 	

一般解析区画のホーム領域用（Quota設定）
	35GB/sec以上 	DDN SFA14KXE+SS9012, DDN 1U server, DDN SFA7700X
Lustre8 	/lustre8 	5.0PB 	個人ゲノム解析区画のホーム領域用 	35GB/sec以上 	DDN SFA14KXE+SS9012, DDN 1U server, DDN SFA7700X


標準では自身のホーム領域が存在するLustreにおいて1TBのquotaが設定されています。計算機リソース拡張申し込みを行うことで、quota制限を希望値まで拡張することが 可能です。必要な方は申し込みを行って下さい。

 
・大容量アーカイブストレージ
※詳細や使い方については「Spectrum Scaleおよびテープについて」をご参照ください。

業務用途に主に利用しており、現時点では一般ユーザのジョブから直接書き込みが可能なワーク領域としては公開していません。DRA等のDDBJデータベースを格納しています。格納しているデータベースはFTPとして公開している他、計算ノードから直接参照が可能です。

 
大容量アーカイブストレージ構成 項目 	用途 	製品名 	員数 	総容量
大容量ディスクシステム 	Spectrum Scaleストレージ 	IBM Elastic Storage Server GL6S 	4 	12.9PB
大容量テープシステム 	テープライブラリ 	IBM TS4500テープライブラリ 	1 	15PB(非圧縮時)
テープカートリッジ 	IBM 3592JDカートリッジ 	1,000
テープドライブ 	IBM TS1155 	8
階層ストレージ管理システム 	SpectrumScaleサーバ 	HPE ProLiant DL360 Gen10 	4 	-
Spectrum Protect DB用ディスク 	IBM V5030 	1

 
・Thin計算ノード上のSSDについて
※詳細や使い方については「Thin計算ノード搭載NVMe SSDについて」をご参照ください。

Thin計算ノードはOS領域以外に、ジョブにおける一時ファイルをおくスクラッチエリアとしてNVMe SSD(3.2TB)を搭載しています。NVMe SSDには/data1というパスでアクセス可能です。大量の小ファイルを参照したり書き込んだりするジョブの場合は非常に有利です。

また、Thin計算ノードのNVMe SSDを複数台束ねて利用者専用のLustreファイルシステムを構成することが可能です(Lustre on Demand)。

 
Thin計算ノード搭載NVMe SSDの機器詳細 型番 	HPE 3.2TB　nvme x4 Lanes Mixed Use SFF(2.5in) SCN 3yr Wty Digitally Singned Firmware SSD
容量 	3.2TB
接続インタフェース 	NVMe
最大シーケンシャルread 	3,200 MB/sec
最大シーケンシャルwrite 	2,000 MB/sec
最大ランダムread IOPS(4KiB) 	675,000@Q256
最大ランダムwrite IOPS(4KiB) 	240,000@Q16
書き込み耐性(DWPD) 	ランダムWrite時 2.9DWPD

 
4. ノード間相互結合網

2019年導入のThin計算ノードはInfiniBand 4×EDR ×1を搭載し、各計算ノード間はInfiniBand 4×EDR スイッチにより接続されています。InfiniBandスイッチはSpine-Leaf構成となっており、上流への接続帯域：下流への接続帯域は1:4となっています。InfiniBandスイッチ間、InfiniBandコアスイッチとスーパーコンピュータ用ファイアウォール間は 10GbE×4で接続されています。
