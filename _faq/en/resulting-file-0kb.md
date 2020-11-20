---
layout: simple
title: The Preprocessing step completed without any problems, but the resulting file has size 0 kb
category: faq
db:
  - pipeline
date: 2015-04-28T14:01:18
lang: en
---

## The Preprocessing step completed without any problems, but the resulting file has size 0 kb

This is probably caused by an incorrect format specification for the Quality Score during execution of the Preprocessing step. Check the content of your query file and make sure that phred33 or phred64 is specified.