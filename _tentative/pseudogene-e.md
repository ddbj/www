---
layout: indexed_content
title: Controlled vocabulary for /pseudogene qualifier
pathname: pseudogene-e
category: tentative
---

# Controlled vocabulary for /pseudogene qualifier

The original site; [Controlled vocabulary for /pseudogene
qualifier](http://www.insdc.org/documents/pseudogene-qualifier-vocabulary)
2012.08.15 version

A new qualifier was introduced in version 10.1 (May 2012) of the Feature
table definitions: /pseudogene. This qualifier is used to annotate
pseudogenes only.

The text below outlines the format and the present list of allowed
controlled vocabulary.

```
Qualifier:          /pseudogene=
Definition:         indicates that this feature is a pseudogene of the 
                    element named by the feature key
Value format:       "TYPE"      
                    where TYPE is one of the following:
                    processed, unprocessed, unitary, allelic, unknown
Examples:           /pseudogene="processed"
                    /pseudogene="unprocessed"
                    /pseudogene="unitary"
                    /pseudogene="allelic"
                    /pseudogene="unknown"
```

Comment: TYPE is a term taken from the INSDC controlled vocabulary for
pseudogenes:


processed:  
: the pseudogene has arisen by reverse transcription of a mRNA into
cDNA, followed by reintegration into the genome. Therefore, it has
lost any intron/exon structure, and it might have a
pseudo-polyA-tail.

unprocessed:  
: the pseudogene has arisen from a copy of the parent gene by
duplication followed by accumulation of random mutation. The
changes, compared to their functional homolog, include insertions,
deletions, premature stop codons, frameshifts and a higher
proportion of non-synonymous versus synonymous substitutions.

unitary:  
: the pseudogene has no parent. It is the original gene, which is
functional in some species but disrupted in some way (indels,
mutation, recombination) in another species or strain.

allelic:  
: a (unitary) pseudogene that is stable in the population but
importantly it has a functional alternative allele also in the
population. i.e., one strain may have the gene, another strain may
have the pseudogene. MHC haplotypes have allelic pseudogenes.

unknown:  
: the submitter does not know the method of pseudogenisation.
