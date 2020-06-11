---
layout: indexed_content
title: ARSA 
category: services
---

## Searchable DataBases

ARSA retrieves the following databases.

<div class="main_table format">

| Database                                            | Note                     |
| --------------------------------------------------- | ------------------------ |
| DDBJ Release                                        |                          |
| DDBJ New (daily updates)                            |                          |
| Amino Acid Patent Sequence data submitted from JPO  |                          |
| Amino Acid Patent Sequence data submitted from KIPO | Update is not periodical |

</div>

Entries whose accession number is assigned in a different rules from
[general data](/ddbj/flat-file-e.html#Accession), such as
[WGS](/ddbj/wgs-e.html)(including WGS Scaffold CON), some TSA entries,
[MGA](/ddbj/mga-e.html)　are not searchable in ARSA.

<div class="section chapter">

## Quick Search

These are search options and examples. If you click "Search Condition"
at the Result page, you can check your entered keyword.  
When you use the boolean operators (AND, OR, NOT) in the text box,
please write in capitals.

"AND" search <span class="normal">（Searchs that contain all search
keywords）</span>

Enter all keywords into the text box, separating each word with a space.

[Example: Example: Enter <span class="tool_code">lung cancer</span> to
the text box, and select "AND" as a boolean
operator.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=lung+cancer&operator=AND)

The result contains for example,  
"\~ Human lung cancer associated \~" in the
<span class="tool_code">DEFINITION</span>  
"\~ Lung Focal Fibrosis \~" in the
<span class="tool_code">FEATURES</span>, and "\~ National Cancer
Institute \~" in the <span class="tool_code">REFERENCE TITLE</span>.

Partial match search <span class="normal">（Searchs that contains the
search keyword in a part of a word）</span>

Specify the search keyword containing the wild card \*.

[Example: Enter
<span class="tool_code">Hom\*</span>.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=Hom*&operator=AND)

The result contains for example,  
"\~ Hominidae; \~" in the <span id="tool_code">SOURCE ORGANISM</span>.  
"\~ higher homolog of \~" in the <span id="tool_code">REFERENCE
TITLE</span>.

Phrase search <span class="normal">（Searchs keyword in a word
order）</span>

Enclose the phrase into double quotation( " ). A character with a
special meaning is also searched as a free search keyword.

[Example: Enter "<span class="tool_code">lung
cancer</span>"](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+OR+%22gastric+cancer%22&operator=AND)

The result contains for example,  
"\~ Human lung cancer associated \~" in the
<span id="tool_code">DEFINITION</span>.

"OR" search <span class="normal">（Searchs that contains either of the
search keyword）</span>

Connect a search keyword by OR in the text box, or select "OR" in the
operator box.

The same results are obtained in the either case.

[Example: Enter <span class="tool_code">"stomach cancer" OR "gastric
cancer"</span>](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+OR+%22gastric+cancer%22&operator=AND)

[Example: Enter <span class="tool_code">"stomach cancer" "gastric
cancer"</span> into the text box, and select "OR" in the operator
box.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+%22gastric+cancer%22&operator=OR)

"\~ Homo sapiens stomach cancer \~" in the
<span class="tool_code">DEFINITION</span>  
"\~ human gastric cancer \~" in the <span class="tool_code">REFERENCE
TITLE</span>

"NOT" search <span class="normal">（Searchs what does not include the
keyword after NOT.)</span>

[Example: Enter <span class="tool_code">cancer NOT "Homo
sapiens"</span>.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=cancer+NOT+%22Homo+sapiens%22&operator=AND)

The result contains for example,  
"\~ Mouse Cancer Genetics \~" in the
<span class="tool_code">COMMENT</span>.

Search that specifies the search field<span class="normal">（Searchs that
a search keyword is present in the specified field)</span>

There are two ways in this method.  
Include the search field name in the search keywords.  
Use the Advanced Search.  
The details about the search fieldand Advanced Search are mentioned
later.  
Note:A search field name and : shold be placed before a search keyword.

[Example: Enter <span class="tool_code">Keyword:HTG </span> into the
text
column.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=Keyword%3AHTG&operator=AND)

The result contains for example,  
"HTG" in the <span class="tool_code">KEYWORDS</span>

[Example: Enter
<span class="tool_code">ReferencePubmedID:1111111</span>](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=ReferencePubmedID%3A1111111&operator=AND)

The result contains for example,  
"1111111" in the <span class="tool_code">REFERENCE PUBMED</span>

[Example: Enter <span class="tool_code">FeatureQualifier:"CDS
/gene=DRB6"</span>](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=FeatureQualifier%3A%22CDS+%2Fgene%3DDRB6%22&operator=AND)

The result contains for example,  
"/gene="DRB6"" to <span class="tool_code">FEATURES</span>.

Search by the regular expression

In some search fields, you can use the regular expression in the search
keyword.  
You should enclose the search keyword in /.

[Example: Enter
<span class="tool_code">PrimaryAccessionNumber:/AA\[1-9\]00000/</span>](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=PrimaryAccessionNumber%3A%2FAA%5B1-9%5D00000%2F&operator=AND)

The result contains for example,  
Like as "AA100000" and "AA900000", top of the numerical part ranges from
1 to 9, at the head of <span class="tool_code">ACCESSION</span>.  
"AA000000" at the head of <span class="tool_code">ACCESSION</span> does
not match the search criteria.

Search by the range specification

Search keywords connected by <span class="tool_code">TO</span> are
enclosed in \[ \].

[Example: Enter <span class="tool_code">SequenceLength:\[\* TO
500\]</span>.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=SequenceLength%3A%5B*+TO+500%5D&operator=AND)

The result contains for example,  
Sequence length of <span class="tool_code">LOCUS</span> include the 500
or less.

</div>

<div class="section chapter">

## Advanced Search

Basic search <span class="normal">Enter the search keyword to the search
box of the field which you want to search.</span>

[Example: Enter <span class="tool_code">human</span> into "Definition"
column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)

The result contains for example,　  
"\~ Human parvovirus \~" in <span class="tool_code">DEFINITION</span>

"OR" search for the single search field <span class="normal">Search
keywords should be connected by a space.</span>

[Example: Enter <span class="tool_code">stomach gastric</span> into
"Definition"
column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=stomach+gastric&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)

The result contains for example,  
"\~ human gastric lipase \~" to
<span class="tool_code">DEFINITION</span> "\~ related to stomach cancer
\~" to <span class="tool_code">DEFINITION</span>

"AND" search for the single search field <span class="normal">Enter the
keywords to the search box of the field which you want to search.
Keywords are connected by AND.</span>

[Example: Enter <span class="tool_code">stomach AND gastric</span> into
"Definition"
column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=stomach+AND+gastric&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)

The result contains for example,  
"\~ male stomach cDNA \~ polypeptide, gastric specific \~" to
<span class="tool_code">DEFINITION</span>

"OR" search for the plural search fields <span class="normal">Search by
selecting the OR.</span>

[Example:Enter <span class="tool_code">human</span> into "Definition"
column, Enter <span class="tool_code">human</span> into "Reference
Title" column, and choose "OR" at "Combine Searches with", the result is
obtained.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=human&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=OR)

The result contains for example,  
"\~ Human metapneumovirus \~" to
<span class="tool_code">DEFINITION</span> "\~ human cDNA project \~" to
<span class="tool_code">REFERENCE</span>

"AND" search for the plural search fields <span class="normal">Search by
selecting the AND</span>

[Example:Enter <span class="tool_code">human</span> into "Definition"
column, Enter<span class="tool_code">human</span> into "Reference Title"
column, and choose "AND" at "Combine Searches with", The result is
obtained.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=human&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)

The result contains for example,  
"\~ Human glucocerebrosidase \~" to the
<span class="tool_code">DEFINITION</span> "\~ expression of human \~" in
the <span class="tool_code">REFERENCE TITLE</span>

Partial match search of Feature/Qualifier <span class="normal">Search by
Feature Key, Qualifier Name,Qualifier Value.</span>

[Example:Enter CDS into "Feature Key" column in "Features",
<span class="tool_code">translation</span> "Qualifier Name" column, and
AAA\*CC into "Qualifier Value"
column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=CDS&fq%5B0%5D.qualifierName=translation&fq%5B0%5D.qualifierValue=AAA*CC&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)

The result contains for example,  
"/translation="～AAA～CC～"" to CDS of
<span class="tool_code">FEATURES</span>

[Example: Enter CDS into "Feature Key" column in
"Features",<span class="tool_code">gene</span> "Qualifier Name" column,
and p53 into "Qualifier Value"
column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=CDS&fq%5B0%5D.qualifierName=gene&fq%5B0%5D.qualifierValue=p53&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)

The result contains for example,  
One which has been described as "/gene="p53"" to CDS of
<span class="tool_code">FEATURES</span> One which has been described as
"/gene="p53R2"" to CDS of <span class="tool_code">FEATURES</span>

</div>

<div class="section chapter">

## Details of the search field

Reference: ['Available
Fields'](http://ddbj.nig.ac.jp/arsa/quick_search?lang=en)

<div class="main_table format">

<table>
<caption>※regexp search: Yes（except for <span class="tool_code">AllText</span>）</caption>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th>Search field name</th>
<th>Short<br />
name</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><span class="tool_code">PrimaryAccessionNumber</span></td>
<td><span class="tool_code">pa</span></td>
<td><a href="/ddbj/flat-file-e.html#Accession">"Accession number" that is described at the head of<span class="tool_code">ACCESSION</span></a></td>
<td><span class="tool_code">AB999999</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">AccessionNumber</span></td>
<td><span class="tool_code">an</span></td>
<td><a href="/ddbj/flat-file-e.html#Accession">"Accession number" in <span class="tool_code">ACCESSION</span></a></td>
<td><span class="tool_code">AB999999, AB888888, AB777777</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">Division</span></td>
<td><span class="tool_code">dv</span></td>
<td><a href="/ddbj/flat-file-e.html#Locus">"Division" in <span class="tool_code">LOCUS</span></a></td>
<td><span class="tool_code">HUM</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">SequenceLength</span></td>
<td><span class="tool_code">sl</span></td>
<td><a href="/ddbj/flat-file-e.html#Locus">"Sequence length" in <span class="tool_code">LOCUS</span></a></td>
<td><span class="tool_code">450</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">MolecularType</span></td>
<td><span class="tool_code">mt</span></td>
<td><a href="/ddbj/flat-file-e.html#Locus">"Molecular type" in <span class="tool_code">LOCUS</span></a></td>
<td><span class="tool_code">mRNA</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">MolecularForm</span></td>
<td><span class="tool_code">mf</span></td>
<td><a href="/ddbj/flat-file-e.html#Locus">"Molecular form" in <span class="tool_code">LOCUS</span></a></td>
<td><span class="tool_code">linear</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">Date</span></td>
<td><span class="tool_code">dt</span></td>
<td><a href="/ddbj/flat-file-e.html#Locus">"Last published date"in <span class="tool_code">LOCUS</span></a></td>
<td><span class="tool_code">01-JUN-2009</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">Definition</span></td>
<td><span class="tool_code">df</span></td>
<td><a href="/ddbj/flat-file-e.html#Definition">Text in <span class="tool_code">DEFINITION</span></a></td>
<td><span class="tool_code">Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate<br />
dehydrogenase, partial cds.</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">Comment</span></td>
<td><span class="tool_code">cm</span></td>
<td><a href="/ddbj/flat-file-e.html#Comment">Text in <span class="tool_code">COMMENT</span></a></td>
<td><span class="tool_code">Human cDNA sequencing project.</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">Keyword</span></td>
<td><span class="tool_code">kw</span></td>
<td><a href="/ddbj/flat-file-e.html#Keywords">Text in <span class="tool_code">KEYWORDS</span></a></td>
<td><span class="tool_code">HTC, HTC_FLI, oligo capping</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">Organism</span></td>
<td><span class="tool_code">og</span></td>
<td><a href="/ddbj/flat-file-e.html#Source">ORGANISM in <span class="tool_code">ORGANISM</span></a></td>
<td><span class="tool_code">Homo sapiens</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">Lineage</span></td>
<td><span class="tool_code">ln</span></td>
<td><a href="/ddbj/flat-file-e.html#Source">"Lineage" in <span class="tool_code">ORGANISM</span></a></td>
<td><span class="tool_code">Eukaryota, Metazoa, ..., Hominidae, Homo</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">ReferenceAuthor</span></td>
<td><span class="tool_code">ra</span></td>
<td><a href="/ddbj/flat-file-e.html#Reference1">Text in <span class="tool_code">AUTHORS</span> of <span class="tool_code">REFERENCE</span></a></td>
<td><span class="tool_code">Mishima,H. , Shizuoka,T. , Fuji,I.</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">ReferenceTitle</span></td>
<td><span class="tool_code">rt</span></td>
<td><a href="/ddbj/flat-file-e.html#Reference1">Text in <span class="tool_code">TITLE</span> of <span class="tool_code">REFERENCE</span></a></td>
<td><span class="tool_code">Direct Submission , Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">ReferenceJournal</span></td>
<td><span class="tool_code">rj</span></td>
<td><a href="/ddbj/flat-file-e.html#Reference1">Text in <span class="tool_code">JOURNAL</span> of <span class="tool_code">REFERENCE</span></a></td>
<td><span class="tool_code">Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.<br />
Contact:Hanako Mishima<br />
National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,<br />
Mishima, Shizuoka 411-8540, Japan , Unpublished (2009)</span></td>
</tr>
<tr class="even">
<td><span class="tool_code">ReferencePubmedID</span></td>
<td><span class="tool_code">rp</span></td>
<td>Text in <span class="tool_code">PUBMED</span> of <span class="tool_code">REFERENCE</span></td>
<td><span class="tool_code">1111111</span></td>
</tr>
<tr class="odd">
<td><span class="tool_code">Feature</span></td>
<td><span class="tool_code">fe</span></td>
<td><a href="/ddbj/flat-file-e.html#Features">"Text of Feature" in <span class="tool_code">FEATURES</span></a></td>
<td><pre class="code scroll"><code>source 1..450
/chromosome=&quot;12&quot; 
/clone=&quot;GT200015&quot; 
/clone_lib=&quot;lambda gt11 human liver cDNA (GeneTech.
No.20)&quot; 
/db_xref=&quot;taxon:9606&quot; 
/map=&quot;12p13&quot; 
/mol_type=&quot;mRNA&quot; 
/organism=&quot;Homo sapiens&quot; 
/tissue_type=&quot;liver&quot;
CDS 86..&gt;450
/codon_start=1
/gene=&quot;GAPD&quot; 
/product=&quot;glyceraldehyde-3-phosphate dehydrogenase&quot; 
/protein_id=&quot;BAA12345.1&quot; 
/transl_table=1
/translation=&quot;MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
VFTDKDKAVAQLKGGAKKV&quot; </code></pre></td>
</tr>
<tr class="even">
<td><span class="tool_code">FeatureQualifier</span></td>
<td><span class="tool_code">fq</span></td>
<td><a href="/ddbj/flat-file-e.html#Features">"Text of Qualifier" in <span class="tool_code">FEATURES</span></a></td>
<td><pre class="code scroll"><code>source 1..450
source /chromosome=12
CDS /translation=MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
VFTDKDKAVAQLKGGAKKV</code></pre></td>
</tr>
<tr class="odd">
<td><span class="tool_code">AllText</span></td>
<td><span class="tool_code">at</span></td>
<td><a href="/ddbj/flat-file-e.html">Full text that is described in the flat file.</a></td>
<td><span class="tool_code">LOCUS ～ //</span></td>
</tr>
</tbody>
</table>

</div>

``` code
LOCUS       AB000000              450 bp    mRNA    linear   HUM 01-JUN-2009
DEFINITION  Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, partial cds.
ACCESSION   AB999999 AB888888 AB777777
VERSION     AB000000.1
KEYWORDS    HTC; HTC_FLI; oligo capping.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 450)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
   PUBMED   1111111
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
  JOURNAL   Unpublished (2009)
COMMENT     Human cDNA sequencing project.
FEATURES             Location/Qualifiers
     source          1..450
                     /chromosome="12" 
                     /clone="GT200015" 
                     /clone_lib="lambda gt11 human liver cDNA (GeneTech.
                     No.20)" 
                     /db_xref="taxon:9606" 
                     /map="12p13" 
                     /mol_type="mRNA" 
                     /organism="Homo sapiens" 
                     /tissue_type="liver" 
     CDS             86..>450
                     /codon_start=1
                     /gene="GAPD" 
                     /product="glyceraldehyde-3-phosphate dehydrogenase" 
                     /protein_id="BAA12345.1" 
                     /transl_table=1
                     /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV" 
BASE COUNT          102 a          119 c          131 g           98 t
ORIGIN
        1 cccacgcgtc cggtcgcatc gcacttgtag ctctcgaccc ccgcatctca tccctcctct
       61 cgcttagttc agatcgaaat cgcaaatggc gaagattaag atcgggatca atgggttcgg
      121 gaggatcggg aggctcgtgg ccagggtggc cctgcagagc gacgacgtcg agctcgtcgc
      181 cgtcaacgac cccttcatca ccaccgacta catgacatac atgttcaagt atgacactgt
      241 gcacggccag tggaagcatc atgaggttaa ggtgaaggac tccaagaccc ttctcttcgg
      301 tgagaaggag gtcaccgtgt tcggctgcag gaaccctaag gagatcccat ggggtgagac
      361 tagcgctgag tttgttgtgg agtacactgg tgttttcact gacaaggaca aggccgttgc
      421 tcaacttaag ggtggtgcta agaaggtctg
//
```

</div>

<div class="section chapter">

## Format of the search keyword

Specification of the search field

(Search field name or Short name) + ':' + (Search keyword)

Boolean operator ("AND", "OR", "NOT" search)

(Search keyword) + ' AND ' + (Search keyword)  
(Search keyword) + ' && ' + (Search keyword)  
(Search keyword) + ' +' + (Search keyword)

(Search keyword) + ' OR ' + (Search keyword)  
(Search keyword) + ' || ' + (Search keyword)

(Search keyword) + ' NOT ' + (Search keyword)  
(Search keyword) + ' -' + (Search keyword)

Grouping

'(' + (Search keyword) + (Logical operator) + (Search keyword) + ')'

Range search

(Search field name or Short name) + ':\[' + (Start value or '\*') + ' TO
' + (End value or '\*') + '\]'  
Including start value, end value

(Search field name or Short name) + ':{' + (Start value or '\*') + ' TO
' + (End value or '\*') + '}'  
Not including start value, end value

Wild card search

(Search keyword) + '\*'

'\*' + (Search keyword)

(Search keyword) + '\*' + (Search keyword)  
'\*' matches any texts more than 0 characters

(Search keyword) + '?' + (Search keyword)  
'?' match in any one character

Phrase search

Search in sequence the search keyword. Or search characters that have
special meaning.  
"' + (Search keyword) + '"'

Regular expression search

'/' + (Search keyword) + '/'

Example of the regular expression

. (any single character)  
example :<span class="tool_code"> /Homini.ae/</span> matches the for
example <span class="tool_code">'Hominidae'</span> and
<span class="tool_code">'Homininae'</span>.

\* (a letter more than 0)  
example : /<span class="tool_code">AB0\*</span>/ matches the for example
<span class="tool_code">'AB'</span>,
<span class="tool_code">'AB0'</span>,
<span class="tool_code"><span class="tool_code">'AB00'</span>,
<span class="tool_code">'AB000'</span></span>

.\* (zero or more of the preceding element)  
example : /<span class="tool_code">AB.\*</span>/ matches the for example
<span class="tool_code">'AB'</span>,
<span class="tool_code">'AB0'</span>,
<span class="tool_code">'AB789'</span>,
<span class="tool_code">'ABXYZ</span>'

?(Previous character is 0 or 1)  
example : /<span class="tool_code">AB?00000</span>/ matches
<span class="tool_code">'AB000000'</span> and
<span class="tool_code">'A000000'</span>

\+ (Previous character is 1 or more)  
example : /<span class="tool_code">AB0+</span>/ matches the for example
<span class="tool_code">'AB0'</span>,
<span class="tool_code">'AB00'</span>,
<span class="tool_code">'AB000'</span>, , but does not match
<span class="tool_code">'AB'</span>

\[<span class="tool_code">abc\]</span> (character
<span class="tool_code">'a'</span> , <span class="tool_code">'b'</span>
or <span class="tool_code">'c'</span>)  
example : /<span class="tool_code">Homini\[dn\]ae</span>/ matches
<span class="tool_code">'Hominidae'</span> and
<span class="tool_code">'Homininae'</span>

\[<span class="tool_code">^abc</span>\] (except character
<span class="tool_code">'a'</span> , <span class="tool_code">'b'</span>
, <span class="tool_code">'c'</span>)  
example : /<span class="tool_code">Homini\[^d\]ae</span>/ matches
<span class="tool_code">'Homininae'</span> but does not match
<span class="tool_code">'Hominidae'</span>

\[<span class="tool_code">a-z0-9</span>\] (character
<span class="tool_code">'a'</span> ～ <span class="tool_code">'z'</span>
or <span class="tool_code">'0'</span> ～
<span class="tool_code">'9'</span>)  
example : /<span class="tool_code">AA\[0-9\]00000</span>/ matches the
for example <span class="tool_code">'AA100000'</span>

{ <span class="tool_code">n </span>} (Previous character occurs n times
exactly)  
example : /<span class="tool_code">AB0{2</span>}/ matches
<span class="tool_code">'AB00'</span> but does not match
<span class="tool_code">'AB0'</span> and
<span class="tool_code">'AB000'</span>

{ <span class="tool_code">n ,</span>} (Previous character occurs n times
or more)  
example : /<span class="tool_code">AB0{2,}</span>/ matches the for
example <span class="tool_code">'AB00'</span> ,
<span class="tool_code">'AB000'</span> , but does not match
<span class="tool_code">'AB0'</span>

{ <span class="tool_code">n , m</span> } (Previous character occurs at
least n and not more than m times  
example : /<span class="tool_code">AB0{2,4}</span>/ matches the for
example <span class="tool_code">'AB00'</span> ,
<span class="tool_code">'AB0000'</span> but does not match
<span class="tool_code">'AB0'</span> and
<span class="tool_code">'AB00000'</span>

Fuzzy Search

Search for a word of spelling similar to the search keyword  
':' + (Search keyword) + '\~' + (Distance of the search term. Numerical
value of 0.0 or more and less than 1.0. Close to the search keyword
closer to 1.)

Proximity Search

The words contained in a phrase search what is indicated in the
neighborhood.

':' + (Phrase) + '\~' + (Distance of the search term. Number of words.)

Weighting Search

(Search keyword) + '^' + (Positive relative weight. Positive number.
Default is 1.0.)

Character with a special meaning

These characters have a special meaning.  
\+ - && || \! ( ) { } \[ \] ^ " \~ \* ? : /

When you search these characters, use phrase search, or cancel the
special meaning by prefixing the ''\\''

</div>

<div class="section chapter">

## Get the search results

Your results are available in the following formats.

<div class="main_table format">

|          |                      |
| -------- | -------------------- |
| FlatFile | DDBJ FlatFile format |
| FASTA    | FASTA format         |
| XML      | INSD-XML format      |

</div>

In the browser

Click the Accession number which you would like to view the content. You
can view the Flatfile of the entry.

Specify the format. Check the results you want to view, and click the
"View selected" button. You can view the results that was selected in
the specified format. (10,000 upper limit)

When your result is over the upper limit, refine your search condition.

Download

To download results, specify the format and click the "Download All"
button (Downloadable entries, 3,000 at most).

To download the selected files, specify the format and check the box you
want to download. Then click the "Download selected" button.

\[Caution\]

  - For download all the results without fail, you should reduce the
    total number of the results less than 3,000 at most. The number of
    downloadable entries might be decreased because it depends on the
    load status of the server. You can reduce the number of the results
    by adding the date filter.
    
    ``` code
    　　Advanced Search     Date  20180101 to 20180630
    　　Quick Search        Date:[20180101 TO 20180630]
    ```

  - In case of downloading XML formated file, if there are a large
    number of entries, multiple XML declaration lines are included in
    one file. Please divide the file and/or check the start line as
    appropriate.

Filter the search results

If you click the "Facet", you can filter your search results by the
following condition.

Kind of filters

  - Division
  - Organism

</div>

<div class="section chapter">

## Other search criteria

Specifiction of the following seach conditions are also available at the
"Search Settints" of "Advanced Search".

Sort condition

You can select a search field or search score for sorting.

Display field of the search results

Check the box(es) you want to display on the search results.

</div>
