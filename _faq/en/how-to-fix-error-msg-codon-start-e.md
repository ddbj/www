---
layout: simple
title: 'How to fix error message: "Value of [ codon_start ] is not 1, but [###..###] is 5&apos; complete type."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-06T16:30:25
lang: en
---

You may enter incorrect values for [Location](/ddbj/location-e.html)
and/or /[codon\_start](/ddbj/qualifiers-e.html#codon_start) of
[CDS](/ddbj/cds-e.html) feature.  
If the value of /codon\_start is either of "2" or "3", the location of
CDS feature should be 5' end not complete.

See [Description of Location](/ddbj/location-e.html) and modify the
location with flag for "5' end not complete", for an example, from
"1..300" to "\<1..300".  
When the CDS feature is started with an initiation codon, correct
/codon\_start with "1".

References
: [Offset of the frame at translation initiation by
    codon\_start](/ddbj/cds-e.html#frame)
: [How to fix error message: "First codon \[\*\*\*\] is not a start
    codon." / "Final codon \[\*\*\*\] is not a stop
    codon."?](/faq/en/how-to-fix-error-msg-first-codon.html)
: [How to fix error message: "Stop codon ‘\*’ is found in the
    range."?](/faq/en/how-to-fix-error-msg-stop-codon.html)
