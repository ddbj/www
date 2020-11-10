---
layout: indexed_content
title: Description of Location
pathname: location-e
category: ddbj
lang: en
---

## Description of Location

Location, the region of the presented sequence where corresponds to a
feature, described with the International Nucleotide Sequence Database
is as follows.

| **Example of Location**           | **Meaning**                                                                                                                                                                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 340..565                          | Points to a continuous range of bases bounded by and including bases 340 and 565.                                                                                                                                                                            |
| complement(261..457)              | Points to a continuous range of bases bounded by and including bases 261 and 457 on complementary strand.                                                                                                                                                    |
| <345..500                        | Indicates that the location begins at some base previous to base 345 and continues to and includes base 500. The 5'-end point of a feature is not included in the presented sequence, or the exact lower 5'-end point of a feature than base 345 is unknown. |
| 345..>500                        | Indicates that the location begins and includes base 345 and continues to beyond base 500. The 3'-end point of a feature is not included in the presented sequence, or the exact higher 3'-end point of a feature than base 500 is unknown.                  |
| <345..>500                      | The both of 5'-end point and 3'-end point of a feature are not included in the presented sequence, or the both of exact 5'-end point and 3'-end point of a feature are unknown.                                                                              |
| join(12..78,134..202)             | Regions 12 to 78 and 134 to 202 should be joined to form one contiguous sequence                                                                                                                                                                             |
| complement(join(12..78,134..202)) | Regions 12 to 78 and 134 to 202 sequence on complementary strand should be joined to form one contiguous sequence.                                                                                                                                           |
| 467                               | Points to a single base 467 in the presented sequence.                                                                                                                                                                                                       |
| 123^124                           | Points to a site between bases 123 and 124                                                                                                                                                                                                                   |



The following description of location can not be entered on [Nucleotide
Sequence Submission System](/ddbj/web-submission-e.html).  
Please describe details at "Submission Information"; on Nucleotide
Sequence Submission System, or use [Mass Submission System](mss-e.html).



| **Example of Location**            | **Meaning**                                                                                                                                                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| join(AB000000.1:100..202,134..222) | Indicates that the regions 100 to 202 in the entry (in this database) with primary accession number 'AB000000' (its version number '1') and 134 to 222 in the presented sequence should be joined to form one contiguous sequence |



With the combination of list above, it is able to describe various ways
of indicating the sequence location.

For further information of the location, see [Feature Table　Definition](/ddbj/full_index-e.html) : [3.4　Location](/ddbj/full_index-e.html#3.4)

