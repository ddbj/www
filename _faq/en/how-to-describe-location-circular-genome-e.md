---
layout: simple
title: In a circular genome, when a feature is located in the base range joined from the last base to the first base, how to describe the location of the feature?
category: faq
db:
  - ddbj
tags: 
  - Submission
date: 2014-06-30T16:22:10
lang: en
---

For instance, when the length of sequence is 199035 bp and a CDS feature
is located in the range from 199001 to 100, you should describe the
location of CDS feature as  
join(199001..199035,1..100)  
See also [Description of Location](/ddbj/location-e.html) in detail.
