---
layout: simple
title: The number of search results shown is too small! (I receive the message “No hit found.”)
category: faq
db:
  - blast
tags: 
  - Analysis
date: 2015-06-01T17:07:03
lang: en
---



If the number of search results shown is fewer than the number specified for the options “Number of Search Results to Display” and “Number of Alignments to Display,” you may increase the number of displayed results by increasing the value of the “Expectation value” under the “Advanced settings” field. In such a case, try setting the expectation value to an extremely large number such as 10,000. Note that, if the string is too short (a sequence length of 10 or so), BLAST will frequently be unable to find matches.