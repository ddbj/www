---
layout: simple
title: It’s taking a long time to run jobs, does this mean there is a problem?
category: faq
db:
  - pipeline
date: 2014-09-16T15:49:57
lang: en
---

## It’s taking a long time to run jobs, does this mean there is a problem?

If you are running denovoAssembly, (Velvet in particular) you may need several days for processing completion.<br><br>In most cases the processing time will be stretched proportional to the data load to be processed, but depending on the setting method in Options, the quality of the original data etc., processing may not be completed at all. In this situation, it’s most likely that the job has been hung-up, and since left as it is, this would cause resources to be wastefully monopolized, we may force quit on our side.