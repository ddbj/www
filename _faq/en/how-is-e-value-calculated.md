---
layout: indexed_content
title: Regarding the E value displayed in the BLAST analysis results： How is this value calculated?
category: faq
db:
  - blast
tags: 
  - Analysis
date: 2015-06-01T17:00:35
lang: en
---

## Regarding the E value displayed in the BLAST analysis results： How is this value calculated?

<html>The E value is computed using the following formula, in which l denotes the length of the query string, n denotes the number of strings stored in the database, and S is a score that measures the homology between nucleic acids or between amino acids. Note that k and m are positive constants.E=k*l*n*exp^(－mS)If the BLAST output results computed using this formula are displayed in the form 1E-X, this means that the quantity has the value 10<sup>-X</sup>.</html>