---
layout: simple
title: I cultured and sequenced a bacterial strain distributed from a culture collection. How should I describe the location and time?
category: faq
db:
  - biosample
  - ddbj
tags:
  - spatiotemporal
date: 2023-09-10T12:39:51
lang: en
---

Enter the collection code and ID in [culture_collection](/biosample/attribute-e.html#culture_collection), and provide original location and date recorded in the collection. If original information is not known, use "not collected" of [missing values](/biosample/submission-e.html#missing-value-reporting).
If the strain has been subcultured for a long term and its nature is changed, provide the date of sampling for sequencing. If the laboratory location is not appropriate for reporting, use "missing: lab stock" of [exemption terms](/biosample/submission-e.html#missing-value-reporting). In this case, describe the fact that "nature of the strain was changed by long-term subculture at the laboratory" in description.

Example:
[Arthrospira platensis NIES-39 strain](https://mcc.nies.go.jp/strainList.do?strainId=37&strainNumberEn=NIES-39) of the Microbial Culture Collection at the National Institute for Environmental Studies (NIES Collection). Collected at Lake Chad but the date is not recorded.

* geo_loc_name (or /country) = Chad: Lake Chad
* collection date = not collected