---
layout: indexed_content
title: SARS-CoV-2
lang: jp
---

## 毎月のシーケンスサンプル数

<script type="module" src="https://togostanza.github.io/metastanza/barchart.js" async></script>

<togostanza-barchart
  chart-type="stacked"
  data-url="https://raw.githubusercontent.com/ktym/covid19/main/output/freq/count_samples.tsv"
  data-type="tsv"
  category="month"
  value="count"
  group-by="location"
  category-title=""
  value-title=""
  legend-title=""
  custom-css-url=""
  width="400"
  height="300"
  padding="50"
  padding-inner="0.1"
  padding-outer="0.4"
  xaxis-placement="bottom"
  yaxis-placement="left"
  xgrid="false"
  ygrid="true"
  xtick="false"
  ytick="true"
  xlabel-max-width="200"
  ylabel-max-width="200"
  xlabel-angle="90"
  ylabel-angle="0"
  ylabel-angle="0"
  xlabel-padding="5"
  ylabel-padding="5"
  xlabel-alignment="left"
  ylabel-alignment="right"
  xtitle-padding="10"
  ytitle-padding="10"
  bar-width="0.8"
  legend="true"
  legend-padding="18"
></togostanza-barchart>

## Sタンパク部分の変異頻度

<script type="module" src="https://togostanza.github.io/metastanza/linechart.js" async></script>

<togostanza-linechart
  data-url="https://raw.githubusercontent.com/ktym/covid19/main/output/freq/domestic_S_freq.tsv"
  data-type="tsv"
  category="mutation"
  value="frequency"
  group-by="month"
  category-title=""
  value-title=""
  legend-title=""
  custom-css-url=""
  width="10000"
  height="200"
  padding="50"
  legend="true"
  xgrid="true"
  ygrid="true"
  xtick="false"
  ytick="true"
  xlabel-angle="90"
  ylabel-angle="0"
  xlabel-padding="30"
  ylabel-padding="5"
  xtitle-padding="10"
  ytitle-padding="10"
  xaxis-placement="bottom"
  yaxis-placement="left"
  togostanza-menu-placement="none"
></togostanza-linechart>

## 元ネタの表

<script type="module" src="https://togostanza.github.io/metastanza/pagination-table.js" async></script>

<togostanza-pagination-table
  data-url="https://raw.githubusercontent.com/ktym/covid19/main/output/freq/domestic.tsv"
  data-type="tsv"
  custom-css-url=""
  width=""
  fixed-columns="1"
  padding="0px"
  page-size-option="10,20,50,100"
  page-slider="true"
  columns="[   {&quot;id&quot;: &quot;Mutation&quot;, &quot;label&quot;: &quot;Mutation&quot;},   {&quot;id&quot;: &quot;position&quot;, &quot;label&quot;: &quot;position&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-01&quot;, &quot;label&quot;: &quot;2020-01&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-02&quot;, &quot;label&quot;: &quot;2020-02&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-03&quot;, &quot;label&quot;: &quot;2020-03&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-04&quot;, &quot;label&quot;: &quot;2020-04&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-05&quot;, &quot;label&quot;: &quot;2020-05&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-06&quot;, &quot;label&quot;: &quot;2020-06&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-07&quot;, &quot;label&quot;: &quot;2020-07&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-08&quot;, &quot;label&quot;: &quot;2020-08&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-09&quot;, &quot;label&quot;: &quot;2020-09&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-10&quot;, &quot;label&quot;: &quot;2020-10&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-11&quot;, &quot;label&quot;: &quot;2020-11&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2020-12&quot;, &quot;label&quot;: &quot;2020-12&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-01&quot;, &quot;label&quot;: &quot;2021-01&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-02&quot;, &quot;label&quot;: &quot;2021-02&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-03&quot;, &quot;label&quot;: &quot;2021-03&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-04&quot;, &quot;label&quot;: &quot;2021-04&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-05&quot;, &quot;label&quot;: &quot;2021-05&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-06&quot;, &quot;label&quot;: &quot;2021-06&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-07&quot;, &quot;label&quot;: &quot;2021-07&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;},   {&quot;id&quot;: &quot;2021-08&quot;, &quot;label&quot;: &quot;2021-08&quot;, &quot;type&quot;: &quot;number&quot;, &quot;align&quot;: &quot;right&quot;} ]"
></togostanza-pagination-table>

