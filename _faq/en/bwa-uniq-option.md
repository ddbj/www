---
layout: indexed_content
title: This question pertains to the BWA uniq option in the [Set Optional Parameters window]. What are the differences between the four possible choices for “Please choose uniq mode.”?
category: faq
db:
  - pipeline
date: 2015-04-28T14:50:42
lang: en
---

## This question pertains to the BWA uniq option in the [Set Optional Parameters window]. What are the differences between the four possible choices for “Please choose uniq mode.”?

<ol>
  <li>Do not remove any read.Do not take any steps to ensure uniqueness.</li>
  <li>Retain pairs when both reads mapped uniquely or one of reads mapped uniquely, and Discard other pairs.Retain a pair if either one or both of the two reads mapped uniquely. (The pair will be discarded if both reads yielded multiple hits.)</li>
  <li>Retain pairs when both reads mapped uniquely, and Discard other pairs.Retain a pair only if both reads mapped uniquely. (The pair will be discarded if either or both of the reads yielded multiple hits.)</li>
  <li>Retain uniquely mapped reads and discard multiply mapped reads.Retain only uniquely mapped reads irrespective of pairing.The optimal setting for this option depends on the circumstances, but option 3 is the most stringent, option 2 is the most lenient, and option 4 is somewhat intermediate between these two options.</li>
</ol>