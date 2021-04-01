---
layout: indexed_content
title: ハードウェア構成
category: sc
lang: ja
current_tab: system
---

# ハードウェア構成


  <div id="parent-fieldname-text" class=""><p> </p>
<h2>1.システム全体</h2>
<table>
<tbody>
<tr style="height: 16px;">
<td style="width: 288px; background-color: #e0d0d0; height: 16px;" colspan="3"> </td>
<td style="width: 267px; background-color: #e0d0d0; height: 16px;">ハードウェア諸元</td>
<td style="width: 216px; background-color: #e0d0d0; height: 16px;">合計</td>
</tr>
<tr style="height: 84.5167px;">
<td style="width: 95px; background-color: #e0d0d0; height: 381.517px;" rowspan="6">計算ノード</td>
<td style="width: 111px; background-color: #e0d0d0; height: 253.517px;" rowspan="4">Thin計算ノード</td>
<td style="width: 82px; background-color: #e0d0d0; height: 84.5167px;">Type 1a
<p style="color: crimson;">CPUにAMD EPYC 7501を搭載</p>
</td>
<td style="width: 267px; height: 84.5167px;">
<p>ノード数: 136台<br /> 総CPUコア数: 8,704<br /> 合計演算性能: 139.264 TFLOPS<br /> 総メモリ容量 69.632 TB（コアあたり8GB）</p>
</td>
<td style="width: 216px; height: 381.517px;" rowspan="6">総CPUコア数: 15,424<br /> 合計演算性能 933.560 TFLOPS<br /> (CPU: 434.360 TFLOPS, GPU: 499.2 TFLOPS)<br /> 総メモリ容量 153.088 TB</td>
</tr>
<tr style="height: 84.5167px;">
<td style="width: 82px; background-color: #e0d0d0; height: 84.5167px;">Type 1b
<p style="color: crimson;">CPUにAMD EPYC 7702を搭載（2020年4月増設）</p>
</td>
<td style="width: 267px; height: 84.5167px;">
<p>ノード数: 28台<br /> 総CPUコア数: 3,584<br /> 合計演算性能: 57.344 TFLOPS<br /> 総メモリ容量 14.336 TB（コアあた4GB）</p>
</td>
</tr>
<tr style="height: 74px;">
<td style="width: 82px; background-color: #e0d0d0; height: 74px;">Type 2a<br />
<p style="color: crimson;">CPUにIntel Xeonを搭載</p>
</td>
<td style="width: 267px; height: 74px;">
<p>ノード数: 52台<br /> 総CPUコア数: 1,664<br /> 合計演算性能 111.800 TFLOPS<br /> 総メモリ容量 19.968 TB (コアあたり12GB)</p>
</td>
</tr>
<tr style="height: 95px;">
<td style="width: 82px; background-color: #e0d0d0; height: 95px;">Type 2b
<p style="color: crimson;">GPGPU搭載</p>
</td>
<td style="width: 267px; height: 95px;">ノード数: 16台<br /> 総CPUコア数: 384<br /> 合計演算性能: 536.064 TFLOPS<br /> (CPU: 36.864 TFLOPS, GPU: 499.2 TFLOPS)<br /> 総メモリ容量 6.144 TB (コアあたり16GB)</td>
</tr>
<tr style="height: 64px;">
<td style="width: 193px; background-color: #e0d0d0; height: 64px;" colspan="2">Medium計算ノード
<p style="color: crimson;">3TBの共有メモリ搭載</p>
</td>
<td style="width: 267px; height: 64px;">ノード数: 10台<br /> 総CPUコア数: 800<br /> 合計演算性能 61.440 TFLOPS<br /> 総メモリ容量 30.72 TB (コアあたり 38.4GB)</td>
</tr>
<tr style="height: 64px;">
<td style="width: 193px; background-color: #e0d0d0; height: 64px;" colspan="2">Fat計算ノード
<p style="color: crimson;">2ノードを接続し12TBの共有メモリを構成</p>
</td>
<td style="width: 267px; height: 64px;">ノード数 2台 <br /> 総CPUコア数: 288<br /> 合計演算性能 27.648 TFLOPS<br /> 総メモリ容量 12.288 TB (コアあたり42.7GB)</td>
</tr>
<tr style="height: 42px;">
<td style="width: 95px; background-color: #e0d0d0; height: 126px;" rowspan="3">ストレージ</td>
<td style="width: 193px; background-color: #e0d0d0; height: 42px;" colspan="2">大容量高速ストレージ<br />
<p style="color: crimson;">解析用ストレージ領域(※1)</p>
</td>
<td style="width: 267px; height: 42px;">Lustreファイルシステム<br />合計容量：13.8PB</td>
<td style="width: 216px; height: 84px;" rowspan="2">総ストレージ容量 43.8PB</td>
</tr>
<tr style="height: 42px;">
<td style="width: 193px; background-color: #e0d0d0; height: 42px;" colspan="2">大容量アーカイブストレージ
<p style="color: crimson;">DB用ストレージ領域(※2)</p>
</td>
<td style="width: 267px; height: 42px;">SpectrumScaleファイルシステム+テープ<br />合計容量：30PB (15PBディスク、15PBテープの階層ストレージ)</td>
</tr>
<tr style="height: 42px;">
<td style="width: 193px; background-color: #e0d0d0; height: 42px;" colspan="2">Thin計算ノード搭載NVMe SSD
<p style="color: crimson;">解析用一時データ配置領域</p>
</td>
<td style="width: 267px; height: 42px;">3.2TB/各Thin計算ノード</td>
<td style="width: 267px; height: 42px;">複数ノードのNVMe SSDを束ねてLustre on Demand(Lustreファイルシステム)としても利用可能。</td>
</tr>
<tr style="height: 48px;">
<td style="width: 288px; background-color: #e0d0d0; height: 48px;" colspan="3">ノード間相互結合網</td>
<td style="width: 267px; height: 48px;">InfiniBand 4×EDR 100Gbps fat tree (ストレージに対してはfull bi-section、計算ノードは上流SWへの接続帯域：下流SWへの接続帯域は1:4)</td>
<td style="width: 216px; height: 48px;">同左</td>
</tr>
</tbody>
</table>
<p>※1. 解析用ストレージ領域：一般解析区画および個人ゲノム解析区画におけるユーザホーム領域<br /> ※2. DB用ストレージ領域：DRA等のDDBJデータベースを格納している領域。データベースは一般解析区画から参照可能。</p>
<p> </p>
<h2 id="link01">2.計算ノード</h2>
<h3>・計算ノードの種類とCPU</h3>
<p>(Intel と AMD のホームページから引用)</p>
<table border="1">
<thead>
<tr style="height: 78px;">
<th style="background-color: #e0d0d0; text-align: center; width: 134px; height: 78px;">
<p><strong>計算ノード</strong></p>
<p><strong>プロセッサ名</strong></p>
</th>
<th style="background-color: #e0d0d0; text-align: center;height: 78px;">
<p><strong>Fat</strong></p>
<p><strong>Xeon Gold 6154</strong></p>
</th>
<th style="background-color: #e0d0d0; text-align: center;height: 78px;">
<p><strong>Medium</strong></p>
<p><strong>Xeon Gold 6148</strong></p>
</th>
<th style="background-color: #e0d0d0; text-align: center;height: 78px;">
<p><strong>Thin Type 1a</strong></p>
<p><strong>AMD EPYC7501</strong></p>
</th>
<th style="background-color: #e0d0d0; text-align: center;height: 78px;">
<p> </p>
<p><strong>Thin Type 1b</strong></p>
<p><strong>AMD EPYC7702</strong></p>
<p><strong>(2020年4月増設)</strong></p>
</th>
<th style="background-color: #e0d0d0; text-align: center;height: 78px;">
<p><strong>Thin Type 2a</strong></p>
<p><strong>Xeon Gold 6130</strong></p>
</th>
<th style="background-color: #e0d0d0; text-align: center;height: 78px;">
<p>Thin Type 2b</p>
<p>Xeon Gold 6136</p>
</th>
</tr>
</thead>
<tbody>
<tr style="height: 16.2667px;">
<td class="item" style="height: 16.2667px;"><strong>コードネーム</strong></td>
<td class="num" style="height: 16.2667px;">Skylake</td>
<td class="num" style="height: 16.2667px;">Skylake</td>
<td class="num" style="height: 16.2667px;">Naples</td>
<td class="num" style="height: 16.2667px;">Rome</td>
<td class="num" style="height: 16.2667px;">Skylake</td>
<td class="num" style="height: 16.2667px;">Skylake</td>
</tr>
<tr style="height: 32px;">
<td class="item" style="width: 134px; height: 32px;"><strong>リリース時期</strong></td>
<td class="num" style="height: 32px;">2017年第3四半期　　　</td>
<td class="num" style="height: 32px;">2017年第3四半期　　　</td>
<td class="num" style="height: 32px;">2017年第2四半期　　　</td>
<td class="num" style="height: 32px;">2019年第2四半期</td>
<td class="num" style="height: 32px;">2017年第3四半期　　　</td>
<td class="num" style="height: 32px;">2017年第3四半期　　　</td>
</tr>
<tr style="height: 16px;">
<td class="item" style="height: 16px;"><strong>コア数</strong></td>
<td class="num" style="height: 16px;">18</td>
<td class="num" style="height: 16px;">20</td>
<td class="num" style="height: 16px;">32</td>
<td class="num" style="height: 16px;">64</td>
<td class="num" style="height: 16px;">16</td>
<td class="num" style="height: 16px;">12</td>
</tr>
<tr style="height: 16px;">
<td class="item" style="height: 16px;"><strong>スレッド数</strong></td>
<td class="num" style="height: 16px;">36</td>
<td class="num" style="height: 16px;">40</td>
<td class="num" style="height: 16px;">64</td>
<td class="num" style="height: 16px;">128</td>
<td class="num" style="height: 16px;">32</td>
<td class="num" style="height: 16px;">24</td>
</tr>
<tr style="height: 16px;">
<td class="item" style="height: 16px;"><strong>クロックスピード</strong></td>
<td class="num" style="height: 16px;">3.00GHz</td>
<td class="num" style="height: 16px;">2.4GHz</td>
<td class="num" style="height: 16px;">2.0GHz</td>
<td class="num" style="height: 16px;">2.0GHz</td>
<td class="num" style="height: 16px;">2.1GHz</td>
<td class="num" style="height: 16px;">3.00GHz</td>
</tr>
<tr style="height: 32px;">
<td class="item" style="height: 32px;"><strong>理論演算性能(CPU当り)</strong></td>
<td class="num" style="height: 32px;">1728.0GFLOPS</td>
<td class="num" style="height: 32px;">1536.0GFLOPS</td>
<td class="num" style="height: 32px;">512.0GFLOPS</td>
<td class="num" style="height: 32px;">2048.0GFLOPS</td>
<td class="num" style="height: 32px;">1075.2GFLOPS</td>
<td class="num" style="height: 32px;">1152.0GFLOPS</td>
</tr>
<tr style="height: 32px;">
<td class="item" style="height: 32px;"><strong>Turbo boost最大周波数</strong></td>
<td class="num" style="height: 32px;">3.70GHz</td>
<td class="num" style="height: 32px;">3.70GHz</td>
<td class="num" style="height: 32px;">3GHz</td>
<td class="num" style="height: 32px;">3.35GHz</td>
<td class="num" style="height: 32px;">3.70GHz</td>
<td class="num" style="height: 32px;">3.70GHz</td>
</tr>
<tr style="height: 16px;">
<td class="item" style="height: 16px;"><strong>Cache</strong></td>
<td class="num" style="height: 16px;">24.75MB</td>
<td class="num" style="height: 16px;">27.5MB</td>
<td style="height: 16px;">64MB</td>
<td style="height: 16px;">256MB</td>
<td style="height: 16px;">21MB</td>
<td style="height: 16px;">24.75MB</td>
</tr>
</tbody>
</table>
<p>計算内容が主に整数演算の場合AMD EPYCが有利、浮動小数点演算の場合Intel Xeonが有利です。</p>
<p>AMD製CPU EPYC7501は1CPU32コア、EPCY7702は1CPU64コアを有することが特徴です。メモリも8チャネルあり大容量のメモリを搭載可能です。今回は512GB/nodeのメモリを搭載しています。</p>
<p>Intel製CPUはskylake世代を導入しています。新しい拡張命令セットであるIntel AVX-512をサポートしており、利用することにより演算幅が従来の2倍となり、 浮動小数点演算については従来プロセッサに対して大幅な性能向上を実現しています。AVX-512に対応しているソフトウェアについてはIntel製CPU搭載のThinノードを利用して頂いたほうが有利です。</p>
<p> </p>
<p> </p>
<h3>・Thin計算ノード Type 1a (HPE ProLiant DL385 Gen10; 136台)</h3>
<p>CPUとしてAMD EPYC 7501プロセッサを搭載した計算ノードです。</p>
<table>
<tbody>
<tr style="height: 34px;">
<td style="width: 226px; height: 232px;" rowspan="6">
<p> </p>
<p><img src="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/screen-shot-2019-04-12-at-15-55-55.png/@@images/6455537d-6b2a-4b46-a8d6-1b1f5a3db1c1.png" data-linktype="image" title="thin_type1.png" data-val="21b4984afaa343f9a557ea19e5af3867" data-scale="mini" alt="HPE ProLiant DL385 Gen10" class="image-inline" /></p>
<p>HPE ProLiant DL385 Gen10</p>
<p> </p>
<p>(ホスト名: at001 -- at136)</p>
</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">構成要素</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">型番</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">員数</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">ノードあたりの性能など</td>
</tr>
<tr style="height: 38px;">
<td style="width: 81px; height: 38px;">CPU</td>
<td style="width: 215px; height: 38px;">
<p>AMD EPYC 7501 (32 cores)</p>
<p>Base 2.0GHz, Max 3.0GHz</p>
</td>
<td style="width: 50px; height: 38px;">2基</td>
<td style="width: 247px; height: 38px;">
<p>合計64 cores</p>
<p> </p>
</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">Memory</td>
<td style="width: 215px; height: 41px;">32GB DDR4-2666</td>
<td style="width: 50px; height: 41px;">16枚</td>
<td style="width: 247px; height: 41px;">合計 512GB (CPUコアあたり 8GB)</td>
</tr>
<tr style="height: 39px;">
<td style="width: 81px; height: 77px;" rowspan="2">Storage</td>
<td style="width: 215px; height: 39px;">1.6TB NVMe SSD</td>
<td style="width: 50px; height: 39px;">1基</td>
<td style="width: 247px; height: 39px;"> </td>
</tr>
<tr style="height: 38px;">
<td style="width: 215px; height: 38px;">3.2TB NVMe SSD</td>
<td style="width: 50px; height: 38px;">1基</td>
<td style="width: 247px; height: 38px;"> </td>
</tr>
<tr style="height: 42px;">
<td style="width: 81px; height: 42px;">Network</td>
<td style="width: 215px; height: 42px;">InfiniBand 4xEDR</td>
<td style="width: 50px; height: 42px;">1本</td>
<td style="width: 247px; height: 42px;">100Gbps</td>
</tr>
</tbody>
</table>
<p> </p>
<h3>・Thin計算ノード Type 1b (DELL PowerEdge R6525; 28台)</h3>
<p>CPUとしてAMD EPYC 7702プロセッサを搭載した計算ノードです。</p>
<table>
<tbody>
<tr style="height: 34px;">
<td style="width: 226px; height: 232.367px;" rowspan="6">
<p> </p>
<p> </p>
<p> </p>
<p><img src="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/paint-1.png/@@images/9bb1143b-5998-4204-a23e-85f54996fefa.png" data-linktype="image" title="thin_type1b.png" data-val="1dd006168af5434f8d0df710759bfe19" height="33" width="215" alt="thin_type1b.png" data-scale="large" class="image-inline" /></p>
<p> </p>
<p>DELL PowerEdge R6525</p>
<p> </p>
<p>(ホスト名: at137 -- at164)</p>
<p> </p>
</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">構成要素</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">型番</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">員数</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">ノードあたりの性能など</td>
</tr>
<tr style="height: 38.3667px;">
<td style="width: 81px; height: 38.3667px;">CPU</td>
<td style="width: 215px; height: 38.3667px;">
<p>AMD EPYC 7702 (64 cores)</p>
<p>Base 2.0GHz, Max 3.35GHz</p>
</td>
<td style="width: 50px; height: 38.3667px;">2基</td>
<td style="width: 247px; height: 38.3667px;">
<p>合計128 cores</p>
<p> </p>
</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">Memory</td>
<td style="width: 215px; height: 41px;">32GB DDR4-3200</td>
<td style="width: 50px; height: 41px;">16枚</td>
<td style="width: 247px; height: 41px;">合計 512GB (CPUコアあたり 4GB)</td>
</tr>
<tr style="height: 39px;">
<td style="width: 81px; height: 77px;" rowspan="2">Storage</td>
<td style="width: 215px; height: 39px;">1.6TB NVMe SSD</td>
<td style="width: 50px; height: 39px;">2基</td>
<td style="width: 247px; height: 39px;"> </td>
</tr>
<tr style="height: 38px;">
<td style="width: 215px; height: 38px;">
<p>900GB SAS HDD</p>
</td>
<td style="width: 50px; height: 38px;">1基</td>
<td style="width: 247px; height: 38px;"> </td>
</tr>
<tr style="height: 42px;">
<td style="width: 81px; height: 42px;">Network</td>
<td style="width: 215px; height: 42px;">InfiniBand 4xEDR</td>
<td style="width: 50px; height: 42px;">1本</td>
<td style="width: 247px; height: 42px;">100Gbps</td>
</tr>
</tbody>
</table>
<p> </p>
<h3>・Thin計算ノード Type 2a (HPE Apollo 2000 Gen10; 52台)</h3>
<p>CPUとしてIntel Xeonプロセッサを搭載した計算ノードです。</p>
<table>
<tbody>
<tr style="height: 34px;">
<td style="width: 226px; height: 232px;" rowspan="6">
<p> </p>
<p><img src="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/screen-shot-2019-04-12-at-16-25-17.png/@@images/e9a09936-1f3b-49e0-a29f-ba0bd81958a1.png" data-linktype="image" title="thin_type2a.png" data-val="e80806a77fd14790af5fee18ad2b2622" data-scale="mini" alt="thin_type2a.png" class="image-inline" /></p>
<p>HPE Apollo 2000 Gen10</p>
<p> </p>
<p>(ホスト名: it001 -- it052)</p>
</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">構成要素</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">型番</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">員数</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">ノードあたりの性能など</td>
</tr>
<tr style="height: 38px;">
<td style="width: 81px; height: 38px;">CPU</td>
<td style="width: 215px; height: 38px;">
<p>Intel Xeon Gold 6130 (16 cores)</p>
<p>Base 2.1GHz, Max 3.7GHz</p>
</td>
<td style="width: 50px; height: 38px;">2基</td>
<td style="width: 247px; height: 38px;">
<p>合計32 cores</p>
<p> </p>
</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">Memory</td>
<td style="width: 215px; height: 41px;">32GB DDR4-2666 DIMM</td>
<td style="width: 50px; height: 41px;">12枚</td>
<td style="width: 247px; height: 41px;">合計 384GB (CPUコアあたり 12GB)</td>
</tr>
<tr style="height: 39px;">
<td style="width: 81px; height: 77px;" rowspan="2">Storage</td>
<td style="width: 215px; height: 39px;">1.6TB NVMe SSD</td>
<td style="width: 50px; height: 39px;">1基</td>
<td style="width: 247px; height: 39px;"> </td>
</tr>
<tr style="height: 38px;">
<td style="width: 215px; height: 38px;">3.2TB NVMe SSD</td>
<td style="width: 50px; height: 38px;">1基</td>
<td style="width: 247px; height: 38px;"> </td>
</tr>
<tr style="height: 42px;">
<td style="width: 81px; height: 42px;">Network</td>
<td style="width: 215px; height: 42px;">InfiniBand 4xEDR</td>
<td style="width: 50px; height: 42px;">1本</td>
<td style="width: 247px; height: 42px;">100Gbps</td>
</tr>
</tbody>
</table>
<p> </p>
<h3>・Thin計算ノード Type 2b (HPE Apollo 6500 Gen10; 16台)</h3>
<p>NVIDIA Tesla V100 GPUを各ノードに4基搭載した計算ノードです。</p>
<table>
<tbody>
<tr style="height: 34px;">
<td style="width: 226px; height: 273.267px;" rowspan="7">
<p><img src="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/screen-shot-2019-04-12-at-16-35-57.png/@@images/f379b3d0-ac16-4a2e-a4df-c4f5f67296b8.png" data-linktype="image" title="thin_type2b.png" data-val="539e1bcf6ab84fcb8f6d36ba7512c6dc" data-scale="mini" alt="thin_type2b.png" class="image-inline" /></p>
<p>HPE Apollo 6500 Gen10</p>
<p> </p>
<p>(ホスト名: igt001 -- igt016)</p>
</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">構成要素</td>
<td style="width: 215px; height: 34px; background-color: #e0d0d0;">型番</td>
<td style="width: 50px; height: 34px; background-color: #e0d0d0;">員数</td>
<td style="width: 247px; height: 34px; background-color: #e0d0d0;">ノードあたりの性能など</td>
</tr>
<tr style="height: 38.2667px;">
<td style="width: 81px; height: 38.2667px;">CPU</td>
<td style="width: 215px; height: 38.2667px;">
<p>Intel Xeon Gold 6136 (12 cores)</p>
<p>Base 3.0GHz, Max 3.7GHz</p>
</td>
<td style="width: 50px; height: 38.2667px;">2基</td>
<td style="width: 247px; height: 38.2667px;">
<p>合計24 cores</p>
<p> </p>
</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">Memory</td>
<td style="width: 215px; height: 41px;">32GB DDR4-2666 DIMM</td>
<td style="width: 50px; height: 41px;">12枚</td>
<td style="width: 247px; height: 41px;">合計 384GB (CPUコアあたり 16GB)</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">GPU</td>
<td style="width: 215px; height: 41px;">NVIDIA Tesla V100 SXM2</td>
<td style="width: 50px; height: 41px;">4基</td>
<td style="width: 247px; height: 41px;"> </td>
</tr>
<tr style="height: 39px;">
<td style="width: 81px; height: 77px;" rowspan="2">Storage</td>
<td style="width: 215px; height: 39px;">1.6TB NVMe SSD</td>
<td style="width: 50px; height: 39px;">1基</td>
<td style="width: 247px; height: 39px;"> </td>
</tr>
<tr style="height: 38px;">
<td style="width: 215px; height: 38px;">3.2TB NVMe SSD</td>
<td style="width: 50px; height: 38px;">1基</td>
<td style="width: 247px; height: 38px;"> </td>
</tr>
<tr style="height: 42px;">
<td style="width: 81px; height: 42px;">Network</td>
<td style="width: 215px; height: 42px;">InfiniBand 4xEDR</td>
<td style="width: 50px; height: 42px;">1本</td>
<td style="width: 247px; height: 42px;">100Gbps</td>
</tr>
</tbody>
</table>
<p> </p>
<h4>(参考）GPUの仕様</h4>
<table border="1">
<tbody>
<tr>
<td class="item"><strong>名称</strong></td>
<td class="item"><strong>NVIDIA Tesla V100 SXM2 (GPGPU)　　　　</strong></td>
</tr>
<tr>
<td class="item"><strong>コア数(個)</strong></td>
<td class="num">640</td>
</tr>
<tr>
<td class="item"><strong>クロック速度</strong></td>
<td class="num">1,455MHz</td>
</tr>
<tr>
<td class="item"><strong>単精度浮動小数点演算ピーク性能</strong></td>
<td class="num">15TFLOPS</td>
</tr>
<tr>
<td class="item"><strong>倍精度浮動小数点演算ピーク性能</strong></td>
<td class="num">7.5TFLOPS</td>
</tr>
<tr>
<td class="item"><strong>単体コア理論性能</strong></td>
<td class="num">1.3GLOPS</td>
</tr>
<tr>
<td class="item"><strong>メモリサイズ</strong></td>
<td class="num">6GB(GDDR5)</td>
</tr>
<tr>
<td class="item"><strong>メモリバンド幅</strong></td>
<td class="num">900GB/sec</td>
</tr>
<tr>
<td class="item"><strong>1GFLOPS毎のメモリバンド幅</strong></td>
<td class="num">266GB/sec</td>
</tr>
<tr>
<td class="item"><strong>接続帯域</strong></td>
<td class="num">8 (PCIe2.0 x16)GB/sec</td>
</tr>
</tbody>
</table>
<p> </p>
<h3>・Medium計算ノード (HPE ProLiant DL560 Gen10; 10台)</h3>
<p>3TBの物理メモリを搭載した80コアを搭載した計算ノードです。De novoアセンブラなど大規模なメモリを必要とするようなプログラムを実行するのに向いています。UGE配下のためジョブ投入により利用可能です。</p>
<table>
<tbody>
<tr style="height: 34px;">
<td style="width: 226px; height: 195px;" rowspan="5">
<p> </p>
<p><img src="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/screen-shot-2019-04-12-at-17-01-57.png/@@images/afc16f97-b3b5-47b2-b57c-2000b2ede03d.png" data-linktype="image" title="medium.png" data-val="6eb1ce5dfc40477cadb57b7194edfb39" data-scale="mini" alt="medium.png" class="image-inline" /></p>
<p>HPE ProLiant DL560 Gen10</p>
<p> </p>
<p>(ホスト名: m01 -- m10)</p>
</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">構成要素</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">型番</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">員数</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">ノードあたりの性能など</td>
</tr>
<tr style="height: 38px;">
<td style="width: 81px; height: 38px;">CPU</td>
<td style="width: 215px; height: 38px;">
<p>Intel Xeon Gold 6148 (20 cores)</p>
<p>Base 2.4GHz, Max 3.7GHz</p>
</td>
<td style="width: 50px; height: 38px;">4基</td>
<td style="width: 247px; height: 38px;">
<p>合計80 cores</p>
<p> </p>
</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">Memory</td>
<td style="width: 215px; height: 41px;">64GB DDR4-2666 DIMM</td>
<td style="width: 50px; height: 41px;">48枚</td>
<td style="width: 247px; height: 41px;">合計 3,072GB (CPUコアあたり 38.4GB)</td>
</tr>
<tr style="height: 40px;">
<td style="width: 81px; height: 40px;">Storage</td>
<td style="width: 215px; height: 40px;">1TB SATA HDD</td>
<td style="width: 50px; height: 40px;">2基 (RAID1)</td>
<td style="width: 247px; height: 40px;">合計1TB (RAID1)</td>
</tr>
<tr style="height: 42px;">
<td style="width: 81px; height: 42px;">Network</td>
<td style="width: 215px; height: 42px;">InfiniBand 4xEDR</td>
<td style="width: 50px; height: 42px;">1本</td>
<td style="width: 247px; height: 42px;">100Gbps</td>
</tr>
</tbody>
</table>
<p> </p>
<h3>・Fat計算ノード (HPE Superdome Flex; 1台)</h3>
<p>複数の計算ノードを接続して大規模な共有メモリー型の計算機の構築が可能なNUMA(Non Uniformed Memory Access)アーキテクチャの計算ノードです。 <br />FATノードはUGE配下ではなく、申請制での利用となります。</p>
<table>
<tbody>
<tr style="height: 34px;">
<td style="width: 226px; height: 195px;" rowspan="5">
<p> </p>
<p><img src="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/screen-shot-2019-04-12-at-17-02-56.png/@@images/f851b733-d8a2-4b88-8104-58e7201ce84d.png" data-linktype="image" title="fat.png" data-val="11639d72b1c44672a185cd69ad714e4e" data-scale="mini" alt="HPE superdome flex" class="image-inline" /></p>
<p>HPE Superdome Flex</p>
<p> </p>
<p>(ホスト名: fat1, fat2)</p>
</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">構成要素</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">型番</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">員数</td>
<td style="width: 81px; height: 34px; background-color: #e0d0d0;">ノードあたりの性能など</td>
</tr>
<tr style="height: 38px;">
<td style="width: 81px; height: 38px;">CPU</td>
<td style="width: 215px; height: 38px;">
<p>Intel Xeon Gold 6148 (18 cores)</p>
<p>Base 3.0GHz, Max 3.7GHz</p>
</td>
<td style="width: 50px; height: 38px;">16基</td>
<td style="width: 247px; height: 38px;">
<p>合計288 cores</p>
</td>
</tr>
<tr style="height: 41px;">
<td style="width: 81px; height: 41px;">Memory</td>
<td style="width: 215px; height: 41px;">64GB DDR4-2666 DIMM</td>
<td style="width: 50px; height: 41px;">192枚</td>
<td style="width: 247px; height: 41px;">
<p>合計 12,288GB (CPUコアあたり 42.7GB)</p>
</td>
</tr>
<tr style="height: 40px;">
<td style="width: 81px; height: 40px;">Storage</td>
<td style="width: 215px; height: 40px;">1.2TB SAS HDD</td>
<td style="width: 50px; height: 40px;">2基 (RAID1)</td>
<td style="width: 247px; height: 40px;">合計1.2TB (RAID1)</td>
</tr>
<tr style="height: 42px;">
<td style="width: 81px; height: 42px;">Network</td>
<td style="width: 215px; height: 42px;">InfiniBand 4xEDR</td>
<td style="width: 50px; height: 42px;">1本</td>
<td style="width: 247px; height: 42px;">100Gbps</td>
</tr>
</tbody>
</table>
<p> </p>
<h2> </h2>
<h2 id="link05">3. ストレージ</h2>
<p>ストレージでは、性能と用途で大別して以下のディスク領域を提供しています。</p>
<table border="1">
<thead>
<tr style="height: 48px;" bgcolor="#c0c0c0">
<th style="height: 48px; width: 115px;">ストレージ種別(ファイルシステム)</th>
<th style="height: 48px; width: 79.6667px;">マウントディレクトリ</th>
<th style="height: 48px; width: 112px;">利用可能な計算ノード</th>
<th style="height: 48px; width: 114px;">アクセス速度</th>
<th style="height: 48px; width: 303px;">主な用途、備考</th>
</tr>
</thead>
<tbody>
<tr style="height: 64px;">
<td class="item" style="height: 64px; width: 115px;">大容量高速ストレージ<br />(Lustre)</td>
<td style="height: 64px; width: 79.6667px;">/lustre6 - /lustre8</td>
<td style="height: 64px; width: 112px;">すべての種別の計算ノードからアクセス可能</td>
<td style="height: 64px; width: 114px;">高い。<br />複数ノードからの高並列での書き込みに対応。</td>
<td style="height: 64px; width: 303px;">ユーザホーム領域、及びジョブの出力用スクラッチエリア</td>
</tr>
<tr style="height: 64px;">
<td class="item" style="height: 64px; width: 115px;">ローカルNVMe SSD</td>
<td style="height: 64px; width: 79.6667px;">/data1</td>
<td style="height: 64px; width: 112px;">Thin計算ノードで利用可能</td>
<td style="height: 64px; width: 114px;">非常に高い。</td>
<td style="height: 64px; width: 303px;">ジョブのスクラッチデータ置き場（再起動で削除）但しノード間で共有はできない。<br />複数ノードのNVMeSSDを組み合わせてLustre(Lustre on Demand)を構成することでノード間の共有も可能。</td>
</tr>
<tr style="height: 64.6834px;">
<td class="item" style="height: 64.6834px; width: 115px;">大容量アーカイブストレージ<br />(Spectrum Scale)</td>
<td style="height: 64.6834px; width: 79.6667px;">/gpfs1 - /gpfs3</td>
<td style="height: 64.6834px; width: 112px;">すべての種別の計算ノードからアクセス可能。ただし参照専用。</td>
<td style="height: 64.6834px; width: 114px;">高い。<br />複数ノードからの高並列での書き込みに対応。</td>
<td style="height: 64.6834px; width: 303px;">
<p>業務用途。<br />DRA等のDDBJデータベースを格納しており、計算ノードから参照可能。</p>
</td>
</tr>
<tr style="height: 32px;">
<td class="item" style="height: 32px; width: 115px;">大容量アーカイブストレージ<br />(Tape領域)</td>
<td style="height: 32px; width: 79.6667px;">
<p>-</p>
</td>
<td style="height: 32px; width: 112px;">研究用途ノードでは通常無し</td>
<td style="height: 32px; width: 114px;">低い。</td>
<td style="height: 32px; width: 303px;">データバックアップとして利用。<br />Spectrum Scaleとの階層ストレージとしても利用。</td>
</tr>
</tbody>
</table>
<h3> </h3>
<h3>・大容量高速ストレージ(Lustre)</h3>
<h4><strong>※詳細や使い方については「<a data-val="dd5f5ca6f48248e1adb2da13b427be18" href="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/lustre/c54021" data-linktype="internal">Lustreについて</a>」をご参照ください。</strong></h4>
<p>高速並列ファイルシステムであるLustre File System(Lustre)により構成しています。Lustreは、複数ノードからの大容量の並列IOに対して高い性能を持つファイルシステムであり、ユーザのホームディレクトリ領域兼ジョブ出力の出力先として利用しています。</p>
<p> </p>
<table><caption>遺伝研スーパーコンピュータが提供するLustreファイルシステム一覧</caption>
<tbody>
<tr style="height: 17.92px;" bgcolor="#c0c0c0">
<td style="width: 90px;">ファイルシステム名称</td>
<td style="width: 61px;">アクセスパス</td>
<td style="width: 41.2167px;">実効容量</td>
<td style="width: 334.783px;">利用用途</td>
<td style="width: 79px;">最大性能値</td>
<td style="width: 167px;">構成</td>
</tr>
<tr style="height: 16px;">
<td style="width: 90px;">Lustre6</td>
<td style="width: 61px;">/lustre6</td>
<td style="width: 41.2167px;">3.8PB</td>
<td style="width: 334.783px; color: crimson;">
<p>前スパコンのユーザーデータ置き場</p>
<p>DDBJのデータベース構築用</p>
</td>
<td style="width: 79px;">35GB/sec</td>
<td style="width: 167px;">DDN SFA14KXE+SS8462, DDN 1U server, DDN SFA7700X</td>
</tr>
<tr style="height: 16px;">
<td style="width: 90px;">Lustre7</td>
<td style="width: 61px;">/lustre7</td>
<td style="width: 41.2167px;">5.0PB</td>
<td style="width: 334.783px; color: crimson;">
<p>一般解析区画のホーム領域用（Quota設定）</p>
</td>
<td style="width: 79px;">35GB/sec以上</td>
<td style="width: 167px;">DDN SFA14KXE+SS9012, DDN 1U server, DDN SFA7700X</td>
</tr>
<tr style="height: 16px;">
<td style="width: 90px;">Lustre8</td>
<td style="width: 61px;">/lustre8</td>
<td style="width: 41.2167px;">5.0PB</td>
<td style="width: 334.783px; color: crimson;">個人ゲノム解析区画のホーム領域用</td>
<td style="width: 79px;">35GB/sec以上</td>
<td style="width: 167px;">DDN SFA14KXE+SS9012, DDN 1U server, DDN SFA7700X</td>
</tr>
</tbody>
</table>
<p><br />標準では自身のホーム領域が存在するLustreにおいて1TBのquotaが設定されています。<a data-val="d81f780ee8b4463bbade5c1253952d0c" href="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/storages" data-linktype="internal">計算機リソース拡張申し込み</a>を行うことで、quota制限を希望値まで拡張することが 可能です。必要な方は申し込みを行って下さい。</p>
<p> </p>
<h3>・大容量アーカイブストレージ</h3>
<h4><strong>※詳細や使い方については「<a data-val="001a5f4d3b234e729e712c94f90c17f8" href="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/spectrum-scale-and-tapes" data-linktype="internal">Spectrum Scaleおよびテープについて</a>」をご参照ください。</strong></h4>
<p>業務用途に主に利用しており、現時点では一般ユーザのジョブから直接書き込みが可能なワーク領域としては公開していません。DRA等のDDBJデータベースを格納しています。格納しているデータベースは<a href="ftp://ftp.ddbj.nig.ac.jp" data-val="ftp://ftp.ddbj.nig.ac.jp" data-linktype="external">FTP</a>として公開している他、計算ノードから直接参照が可能です。</p>
<p> </p>
<table><caption>大容量アーカイブストレージ構成</caption>
<tbody>
<tr style="height: 16px;">
<td style="width: 306px; height: 16px;">項目</td>
<td style="width: 306px; height: 16px;">用途</td>
<td style="width: 428px; height: 16px;">製品名</td>
<td style="width: 95px; height: 16px;">員数</td>
<td style="width: 223.367px; height: 16px;">総容量</td>
</tr>
<tr style="height: 32px;">
<td style="width: 306px; height: 32px;">大容量ディスクシステム</td>
<td style="width: 306px; height: 32px;">Spectrum Scaleストレージ</td>
<td style="width: 428px; height: 32px;">IBM Elastic Storage Server GL6S</td>
<td style="width: 95px; height: 32px;">4</td>
<td style="width: 223.367px; height: 32px;">12.9PB</td>
</tr>
<tr style="height: 16px;">
<td style="width: 306px; height: 48.3px;" rowspan="3">大容量テープシステム</td>
<td style="width: 306px; height: 16px;">テープライブラリ</td>
<td style="width: 428px; height: 16px;">IBM TS4500テープライブラリ</td>
<td style="width: 95px; height: 16px;">1</td>
<td style="width: 223.367px; height: 16px;" rowspan="3">15PB(非圧縮時)</td>
</tr>
<tr style="height: 16px;">
<td style="width: 306px; height: 16px;">テープカートリッジ</td>
<td style="width: 428px; height: 16px;">IBM 3592JDカートリッジ</td>
<td style="width: 95px; height: 16px;">1,000</td>
</tr>
<tr style="height: 16.3px;">
<td style="width: 306px; height: 16.3px;">テープドライブ</td>
<td style="width: 428px; height: 16.3px;">IBM TS1155</td>
<td style="width: 95px; height: 16.3px;">8</td>
</tr>
<tr style="height: 16px;">
<td style="width: 306px; height: 16px;" rowspan="2">階層ストレージ管理システム</td>
<td style="width: 306px; height: 16px;">SpectrumScaleサーバ</td>
<td style="width: 428px; height: 16px;">HPE ProLiant DL360 Gen10</td>
<td style="width: 95px; height: 16px;">4</td>
<td style="width: 223.367px; height: 16px;" rowspan="2">-</td>
</tr>
<tr style="height: 16px;">
<td style="width: 306px; height: 16px;">Spectrum Protect DB用ディスク</td>
<td style="width: 428px; height: 16px;">IBM V5030</td>
<td style="width: 95px; height: 16px;">1</td>
</tr>
</tbody>
</table>
<p> </p>
<h3>・Thin計算ノード上のSSDについて</h3>
<h4><strong>※詳細や使い方については「<a data-val="48226a986bcd4429ba3ffa3bb2cf9901" href="https://sc.ddbj.nig.ac.jp/ja/guide/hardware/nvme-ssd-come-with-thin-compute-node" data-linktype="internal">Thin計算ノード搭載NVMe SSDについて</a>」をご参照ください。</strong></h4>
<p>Thin計算ノードはOS領域以外に、ジョブにおける一時ファイルをおくスクラッチエリアとしてNVMe SSD(3.2TB)を搭載しています。NVMe SSDには/data1というパスでアクセス可能です。大量の小ファイルを参照したり書き込んだりするジョブの場合は非常に有利です。</p>
<p>また、Thin計算ノードのNVMe SSDを複数台束ねて利用者専用のLustreファイルシステムを構成することが可能です(Lustre on Demand)。</p>
<p> </p>
<table><caption>Thin計算ノード搭載NVMe SSDの機器詳細</caption>
<tbody>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">型番</td>
<td style="width: 547.6px; height: 16px;">HPE 3.2TB　nvme x4 Lanes Mixed Use SFF(2.5in) SCN 3yr Wty Digitally Singned Firmware SSD</td>
</tr>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">容量</td>
<td style="width: 547.6px; height: 16px;">3.2TB</td>
</tr>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">接続インタフェース</td>
<td style="width: 547.6px; height: 16px;">NVMe</td>
</tr>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">最大シーケンシャルread</td>
<td style="width: 547.6px; height: 16px;">3,200 MB/sec</td>
</tr>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">最大シーケンシャルwrite</td>
<td style="width: 547.6px; height: 16px;">2,000 MB/sec</td>
</tr>
<tr style="height: 16.8px;">
<td style="width: 225.4px; height: 16.8px;">最大ランダムread IOPS(4KiB)</td>
<td style="width: 547.6px; height: 16.8px;">675,000@Q256</td>
</tr>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">最大ランダムwrite IOPS(4KiB)</td>
<td style="width: 547.6px; height: 16px;">240,000@Q16</td>
</tr>
<tr style="height: 16px;">
<td style="width: 225.4px; height: 16px;">書き込み耐性(DWPD)</td>
<td style="width: 547.6px; height: 16px;">ランダムWrite時 2.9DWPD</td>
</tr>
</tbody>
</table>
<p> </p>
<h2 id="link04">4. ノード間相互結合網</h2>
<p>2019年導入のThin計算ノードはInfiniBand 4×EDR ×1を搭載し、各計算ノード間はInfiniBand 4×EDR スイッチにより接続されています。InfiniBandスイッチはSpine-Leaf構成となっており、上流への接続帯域：下流への接続帯域は1:4となっています。InfiniBandスイッチ間、InfiniBandコアスイッチとスーパーコンピュータ用ファイアウォール間は 10GbE×4で接続されています。</p>
<p> </p>
<p> </p>
<p> </p></div>


       
<!-- 1.システム全体

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

 
 
1. ストレージ

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

2019年導入のThin計算ノードはInfiniBand 4×EDR ×1を搭載し、各計算ノード間はInfiniBand 4×EDR スイッチにより接続されています。InfiniBandスイッチはSpine-Leaf構成となっており、上流への接続帯域：下流への接続帯域は1:4となっています。InfiniBandスイッチ間、InfiniBandコアスイッチとスーパーコンピュータ用ファイアウォール間は 10GbE×4で接続されています。 -->
