---
layout: indexed_content
title: Representative submissions of identical sequences for variation studies
pathname: represent-e
category: tentative
---


# Representative submissions of identical sequences for variation studies

Recently, variation studies related to re-sequencing projects are
increased, so the sequence data from these projects are also increasd.
<span class="red">DDBJ (INSDC) basically accepts all sequence data,
regardless of source and sequence identity</span>, however, if the
policy is strictly applied, some of data would be very redundant.

In order to take advantage of normalisation for variation studies, a
single submission to represent multiple identical sequences is also
acceptable with frequency and total sample number described by
/[frequency](/ddbj/qualifiers-e.html#frequency) qualifier of
[](/ddbj/features-e.html#variation)variation feature.

The way of representative submission for variation studies is NOT to
mean that all identical (or similar) sequences derived from same species
would be represented by a single sequence data. To evaluate research
data properly, DDBJ recommends to normalise research data for variation
studies by appropriate set of entries; basically, the number of entries
should be equal to multiplication of numbers of sequence polymorphisms
and sampled populations.

sequence polymorphism  
: a unit of sequence variations that can keep unique descriptions of
[haplotype](/ddbj/qualifiers-e.html#haplotype),
[allele](/ddbj/qualifiers-e.html#allele) and/or some other
qualifiers.

sampled population  
: a unit of obserbed samples that can keep unique descriptions of
[country](/ddbj/qualifiers-e.html#country),
[lat\_lon](/ddbj/qualifiers-e.html#lat_lon),
[host](/ddbj/qualifiers-e.html#host) and/or some other qualifiers.

For example, a study of a locus on cat genomes comparing Japan with USA
shows that there are three haplotypes of sequence polymorphism indicated
by below table, and within each haplotype, sequences are identical. DDBJ
can accept these results as a submission of 231 sequence data for all
indivisuals, however, the set of sequence data seem to be very redundant
for both submitters and users.

<table>
  <thead>
    <tr>
      <th>polymorphism(haplotype)</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>total</th>                
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Japan</th>
      <td>75</td>
      <td>38</td>
      <td>0</td>
      <td>113</td>        
    </tr>
    <tr>
      <th>USA</th>
      <td>26</td>
      <td>32</td>
      <td>60</td>
      <td>118</td>        
    </tr>
    <tr>
      <th>totla</th>
      <td>101</td>
      <td>60</td>
      <td>70</td>
      <td>231</td>        
    </tr>      
  </tbody>
</table>

Since observed identical sequences are three types, it would be possible
for the publication of this study to submit only three representative
sequence data to DDBJ. However, if so, it would be difficult for users
to understand what kind of samples were used for this study. Therefore,
it is strongly recommended to submit five representative data (There are
6 patterns; i.e. 3 haplotypes x 2 countries, but haplotype C is not
observed in Japan.) to DDBJ in following descriptions for source
features, respectively.

```
    source        1..365
                  /country="Japan"
                  /haplotype="A"
                  /mol_type="genomic DNA"
                  /organism="Felis catus"
    variation     124
                  /compare="AB012345.1"
                  /frequency="75 in 113"
                  /replace="t"
```