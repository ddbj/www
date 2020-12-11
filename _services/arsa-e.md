---
layout: tabbed_indexed_content
title: ARSA 
category: services
lang: en
related_pages:
  - title: BLAST Help
    url: /services/blast-e.html
  - title: getentry Help
    url: /services/getentry-e.html
  - title: TXSearch Help
    url: /services/txsearch-e.html
  - title: ClustalW Help
    url: /services/clustalw-e.html
  - title: VecScreen Help
    url: /services/vecscreen-e.html
  - title: References
    url: /services/references-e.html
  - title: Services in past
    url: /services/past-services-e.html
  - title: WABI (Web API for Biology)
    url: /services/wabi-e.html
  - title: WABI BLAST Help
    url: /services/wabi-blast-e.html
---

## Searchable DataBases <a name="database"></a>

ARSA retrieves the following databases.

| Database                                            | Note                     |
| --------------------------------------------------- | ------------------------ |
| DDBJ Release                                        |                          |
| DDBJ New (daily updates)                            |                          |
| Amino Acid Patent Sequence data submitted from JPO  |                          |
| Amino Acid Patent Sequence data submitted from KIPO | Update is not periodical |


Entries whose accession number is assigned in a different rules from
[general data](/ddbj/flat-file-e.html#Accession), such as
[WGS](/ddbj/wgs-e.html)(including WGS Scaffold CON), some TSA entries,
[MGA](/ddbj/mga-e.html)　are not searchable in ARSA.

## Quick Search <a name="Quick_Search"></a>

These are search options and examples. If you click "Search Condition"
at the Result page, you can check your entered keyword.  
When you use the boolean operators (AND, OR, NOT) in the text box,
please write in capitals.

"AND" search（Searchs that contain all search keywords）
: Enter all keywords into the text box, separating each word with a space.
: [Example: Example: Enter lung cancer to the text box, and select "AND" as a boolean operator.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=lung+cancer&operator=AND)
: The result contains for example,  
"~ Human lung cancer associated ~" in the DEFINITION  
"~ Lung Focal Fibrosis ~" in the FEATURES, and "~ National Cancer
Institute ~" in the REFERENCE TITLE.

Partial match search（Searchs that contains the search keyword in a part of a word）
: Specify the search keyword containing the wild card *.
: [Example: Enter Hom\*.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=Hom*&operator=AND)
: The result contains for example,  
"~ Hominidae; ~" in the SOURCE ORGANISM.  
"~ higher homolog of ~" in the REFERENCE TITLE.

Phrase search（Searchs keyword in a word order）
: Enclose the phrase into double quotation( " ). A character with a
special meaning is also searched as a free search keyword.
: [Example: Enter "lung cancer"](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+OR+%22gastric+cancer%22&operator=AND)
: The result contains for example,  
"~ Human lung cancer associated ~" in the DEFINITION.

"OR" search（Searchs that contains either of the search keyword）
: Connect a search keyword by OR in the text box, or select "OR" in the
operator box.
: The same results are obtained in the either case.
: [Example: Enter "stomach cancer" OR "gastric cancer"](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+OR+%22gastric+cancer%22&operator=AND)
: [Example: Enter "stomach cancer" "gastric cancer" into the text box, and select "OR" in the operator box.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=%22stomach+cancer%22+%22gastric+cancer%22&operator=OR)
: "~ Homo sapiens stomach cancer ~" in the DEFINITION    
"~ human gastric cancer ~" in the REFERENCE TITLE

"NOT" search（Searchs what does not include the keyword after NOT.)
: [Example: Enter cancer NOT "Homo sapiens".](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=cancer+NOT+%22Homo+sapiens%22&operator=AND)
: The result contains for example,  
"~ Mouse Cancer Genetics ~" in the COMMENT.

Search that specifies the search fiel（Searchs that a search keyword is present in the specified field)
: There are two ways in this method.  
Include the search field name in the search keywords.  
Use the Advanced Search.  
The details about the search fieldand Advanced Search are mentioned
later.  
Note:A search field name and : shold be placed before a search keyword.
: [Example: Enter Keyword:HTG  into the text column.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=Keyword%3AHTG&operator=AND)
: The result contains for example,  
"HTG" in the KEYWORDS
: [Example: Enter ReferencePubmedID:1111111](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=ReferencePubmedID%3A1111111&operator=AND)
: The result contains for example,  
"1111111" in the REFERENCE PUBMED
: [Example: Enter FeatureQualifier:"CDS /gene=DRB6"](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=FeatureQualifier%3A%22CDS+%2Fgene%3DDRB6%22&operator=AND)
: The result contains for example,  
"/gene="DRB6"" to FEATURES.

Search by the regular expression
: In some search fields, you can use the regular expression in the search
keyword. You should enclose the search keyword in /.
: [Example: Enter PrimaryAccessionNumber:/AA[1-9]00000/](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=PrimaryAccessionNumber%3A%2FAA%5B1-9%5D00000%2F&operator=AND)
: The result contains for example,  
Like as "AA100000" and "AA900000", top of the numerical part ranges from
1 to 9, at the head of ACCESSION.  
"AA000000" at the head of ACCESSION does
not match the search criteria.

Search by the range specification
: Search keywords connected by TO are
enclosed in [ ].
: [Example: Enter SequenceLength:[* TO 500].](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=quick_search&query=SequenceLength%3A%5B*+TO+500%5D&operator=AND)
: The result contains for example,  
Sequence length of LOCUS include the 500 or less.


## Advanced Search <a name="Advanced_Search"></a>

Basic searchEnter the search keyword to the search box of the field which you want to search.
: [Example: Enter human into "Definition" column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
: The result contains for example,　  
"~ Human parvovirus ~" in DEFINITION

"OR" search for the single search fieldSearch keywords should be connected by a space.
: [Example: Enter stomach gastric into "Definition" column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=stomach+gastric&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
: The result contains for example,  
"~ human gastric lipase ~" to
DEFINITION "~ related to stomach cancer
~" to DEFINITION

"AND" search for the single search fieldEnter the keywords to the search box of the field which you want to search. Keywords are connected by AND.
: [Example: Enter stomach AND gastric into "Definition" column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=stomach+AND+gastric&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
: The result contains for example,  
"~ male stomach cDNA ~ polypeptide, gastric specific ~" to DEFINITION

"OR" search for the plural search fieldsSearch by selecting the OR.
: [Example:Enter human into "Definition" column, Enter human into "Reference Title" column, and choose "OR" at "Combine Searches with", the result is obtained.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=human&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=OR)
: The result contains for example,  
"~ Human metapneumovirus ~" to DEFINITION "~ human cDNA project ~" to REFERENCE

"AND" search for the plural search fieldsSearch by selecting the AND
: [Example:Enter human into "Definition" column, Enterhuman into "Reference Title" column, and choose "AND" at "Combine Searches with", The result is obtained.](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=human&kw=&og=&ln=&ra=&rt=human&rj=&rp=&cm=&fq%5B0%5D.featureKey=&fq%5B0%5D.qualifierName=&fq%5B0%5D.qualifierValue=&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
: The result contains for example,  
"~ Human glucocerebrosidase ~" to the DEFINITION "~ expression of human ~" in the REFERENCE TITLE

Partial match search of Feature/QualifierSearch by Feature Key, Qualifier Name,Qualifier Value.
: [Example: Enter CDS into "Feature Key" column in "Features", translation "Qualifier Name" column, and AAA\*CC into "Qualifier Value" column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=CDS&fq%5B0%5D.qualifierName=translation&fq%5B0%5D.qualifierValue=AAA*CC&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
: The result contains for example,  
"/translation="～AAA～CC～"" to CDS of FEATURES
: [Example: Enter CDS into "Feature Key" column in "Features",gene "Qualifier Name" column, and p53 into "Qualifier Value" column,](http://ddbj.nig.ac.jp/arsa/search?lang=en&cond=advanced_search&pa=&an=&sl1=&sl2=&_mt=on&_mf=on&_dv=on&dt1=&dt2=&df=&kw=&og=&ln=&ra=&rt=&rj=&rp=&cm=&fq%5B0%5D.featureKey=CDS&fq%5B0%5D.qualifierName=gene&fq%5B0%5D.qualifierValue=p53&at=&sortTarget=score&sortOrder=desc&displayFields=PrimaryAccessionNumber&displayFields=Definition&displayFields=SequenceLength&displayFields=MolecularType&displayFields=Organism&_displayFields=on&op=AND)
: The result contains for example,  
One which has been described as "/gene="p53"" to CDS of
FEATURES One which has been described as
"/gene="p53R2"" to CDS of FEATURES

## Details of the search field <a name="Details_of_the_search_field"></a>

Reference: ['Available Fields'](http://ddbj.nig.ac.jp/arsa/quick_search?lang=en)

<table>
        <caption>※regexp search: Yes（except for <span>AllText</span>）</caption>
        <thead>
          <tr>
            <th>Search field name</th>
            <th>Short<br>name</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>PrimaryAccessionNumber</span></td>
            <td><span>pa</span></td>
            <td><a href="/ddbj/flat-file-e.html#AccessionB">"Accession number" that is described at the head of<span>ACCESSION</span></a></td>
            <td><span>AB999999</span></td>
          </tr>
          <tr>
            <td><span>AccessionNumber</span></td>
            <td><span>an</span></td>
            <td><a href="/ddbj/flat-file-e.html#AccessionB">"Accession number" in <span>ACCESSION</span></a></td>
            <td><span>AB999999, AB888888, AB777777</span></td>
          </tr>
          <tr>
            <td><span>Division</span></td>
            <td><span>dv</span></td>
            <td><a href="/ddbj/flat-file-e.html#LocusB">"Division" in <span>LOCUS</span></a></td>
            <td><span>HUM</span></td>
          </tr>
          <tr>
            <td><span>SequenceLength</span></td>
            <td><span>sl</span></td>
            <td><a href="/ddbj/flat-file-e.html#LocusB">"Sequence length" in <span>LOCUS</span></a></td>
            <td><span>450</span></td>
          </tr>
          <tr>
            <td><span>MolecularType</span></td>
            <td><span>mt</span></td>
            <td><a href="/ddbj/flat-file-e.html#LocusB">"Molecular type" in <span>LOCUS</span></a></td>
            <td><span>mRNA</span></td>
          </tr>
          <tr>
            <td><span>MolecularForm</span></td>
            <td><span>mf</span></td>
            <td><a href="/ddbj/flat-file-e.html#LocusB">"Molecular form" in <span>LOCUS</span></a></td>
            <td><span>linear</span></td>
          </tr>
          <tr>
            <td><span>Date</span></td>
            <td><span>dt</span></td>
            <td><a href="/ddbj/flat-file-e.html#LocusB">"Last published date"in <span>LOCUS</span></a></td>
            <td><span>01-JUN-2009</span></td>
          </tr>
          <tr>
            <td><span>Definition</span></td>
            <td><span>df</span></td>
            <td><a href="/ddbj/flat-file-e.html#DefinitionB">Text in <span>DEFINITION</span></a></td>
            <td><span>Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate<br>
              dehydrogenase, partial cds.</span></td>
          </tr>
          <tr>
            <td><span>Comment</span></td>
            <td><span>cm</span></td>
            <td><a href="/ddbj/flat-file-e.html#CommentB">Text in <span>COMMENT</span></a></td>
            <td><span>Human cDNA sequencing project.</span></td>
          </tr>
          <tr>
            <td><span>Keyword</span></td>
            <td><span>kw</span></td>
            <td><a href="/ddbj/flat-file-e.html#KeywordsB">Text in <span>KEYWORDS</span></a></td>
            <td><span>HTC, HTC_FLI, oligo capping</span></td>
          </tr>
          <tr>
            <td><span>Organism</span></td>
            <td><span>og</span></td>
            <td><a href="/ddbj/flat-file-e.html#SourceB">ORGANISM in <span>ORGANISM</span></a></td>
            <td><span>Homo sapiens</span></td>
          </tr>
          <tr>
            <td><span>Lineage</span></td>
            <td><span>ln</span></td>
            <td><a href="/ddbj/flat-file-e.html#SourceB">"Lineage" in <span>ORGANISM</span></a></td>
            <td><span>Eukaryota, Metazoa, ..., Hominidae, Homo</span></td>
          </tr>
          <tr>
            <td><span>ReferenceAuthor</span></td>
            <td><span>ra</span></td>
            <td><a href="/ddbj/flat-file-e.html#Reference1B">Text in <span>AUTHORS</span> of <span>REFERENCE</span></a></td>
            <td><span>Mishima,H. , Shizuoka,T. , Fuji,I.</span></td>
          </tr>
          <tr>
            <td><span>ReferenceTitle</span></td>
            <td><span>rt</span></td>
            <td><a href="/ddbj/flat-file-e.html#Reference1B">Text in <span>TITLE</span> of <span>REFERENCE</span></a></td>
            <td><span>Direct Submission , Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver</span></td>
          </tr>
          <tr>
            <td><span>ReferenceJournal</span></td>
            <td><span>rj</span></td>
            <td><a href="/ddbj/flat-file-e.html#Reference1B">Text in <span>JOURNAL</span> of  <span>REFERENCE</span></a></td>
            <td><span>Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.<br>
              Contact:Hanako Mishima<br>
              National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,<br>
              Mishima, Shizuoka 411-8540, Japan , Unpublished (2009)</span></td>
          </tr>
          <tr>
            <td><span>ReferencePubmedID</span></td>
            <td><span>rp</span></td>
            <td>Text in <span>PUBMED</span> of  <span>REFERENCE</span>
</td>
            <td><span>1111111</span></td>
          </tr>
          <tr>
            <td><span>Feature</span></td>
            <td><span>fe</span></td>
            <td><a href="/ddbj/flat-file-e.html#FeaturesB">"Text of Feature" in <span>FEATURES</span></a></td>
            <td><pre><code>source 1..450
/chromosome="12" 
/clone="GT200015" 
/clone_lib="lambda gt11 human liver cDNA (GeneTech.
No.20)" 
/db_xref="taxon:9606" 
/map="12p13" 
/mol_type="mRNA" 
/organism="Homo sapiens" 
/tissue_type="liver"
CDS 86..&gt;450
/codon_start=1
/gene="GAPD" 
/product="glyceraldehyde-3-phosphate dehydrogenase" 
/protein_id="BAA12345.1" 
/transl_table=1
/translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
VFTDKDKAVAQLKGGAKKV" </code></pre></td>
          </tr>
          <tr>
            <td><span>FeatureQualifier</span></td>
            <td><span>fq</span></td>
            <td><a href="/ddbj/flat-file-e.html#FeaturesB">"Text of Qualifier" in <span>FEATURES</span></a></td>
            <td><pre><code>source 1..450
source /chromosome=12
CDS /translation=MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
VFTDKDKAVAQLKGGAKKV</code></pre></td>
          </tr>
           <tr>
            <td><span>AllText</span></td>
            <td><span>at</span></td>
            <td><a href="/ddbj/flat-file-e.html">Full text that is described in the flat file.</a></td>
            <td><span>LOCUS ～ //</span></td>
          </tr>
        </tbody>
      </table>

```
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

## Format of the search keyword <a name="Format_of_the_search_keyword"></a>

Specification of the search field
: (Search field name or Short name) + ':' + (Search keyword)

Boolean operator ("AND", "OR", "NOT" search)
: (Search keyword) + ' AND ' + (Search keyword)  
: (Search keyword) + ' && ' + (Search keyword)  
: (Search keyword) + ' +' + (Search keyword)
: (Search keyword) + ' OR ' + (Search keyword)  
: (Search keyword) + ' &#124;&#124; ' + (Search keyword)
: (Search keyword) + ' NOT ' + (Search keyword)  
: (Search keyword) + ' -' + (Search keyword)

Grouping
: '(' + (Search keyword) + (Logical operator) + (Search keyword) + ')'

Range search
: (Search field name or Short name) + ':[' + (Start value or '\*') + ' TO
' + (End value or '\*') + ']'  
: Including start value, end value
: (Search field name or Short name) + ':{' + (Start value or '\*') + ' TO
' + (End value or '\*') + '}'  
: Not including start value, end value

Wild card search
: (Search keyword) + '\*'
: '\*' + (Search keyword)
: (Search keyword) + '\*' + (Search keyword)  
: '\*' matches any texts more than 0 characters
: (Search keyword) + '?' + (Search keyword)  
: '?' match in any one character

Phrase search
: Search in sequence the search keyword. Or search characters that have special meaning.  
: "' + (Search keyword) + '"'

Regular expression search
: '/' + (Search keyword) + '/'

Example of the regular expression
: . (any single character)  
example : /Homini.ae/ matches the for
example 'Hominidae' and
'Homininae'.
: \* (a letter more than 0)  
example : /AB0\*/ matches the for example
'AB',
'AB0',
'AB00',
'AB000'
: .\* (zero or more of the preceding element)  
example : /AB.\*/ matches the for example
'AB',
'AB0',
'AB789',
'ABXYZ'
: ?(Previous character is 0 or 1)  
example : /AB?00000/ matches
'AB000000' and
'A000000'
: \+ (Previous character is 1 or more)  
example : /AB0+/ matches the for example
'AB0',
'AB00',
'AB000', , but does not match
'AB'
: [abc] (character
'a' , 'b'
or 'c')  
example : /Homini[dn]ae/ matches
'Hominidae' and
'Homininae'
: [^abc] (except character
'a' , 'b'
, 'c')  
example : /Homini[^d]ae/ matches
'Homininae' but does not match
'Hominidae'
: [a-z0-9] (character
'a' ～ 'z'
or '0' ～
'9')  
example : /AA[0-9]00000/ matches the
for example 'AA100000'
: { n } (Previous character occurs n times
exactly)  
example : /AB0{2}/ matches
'AB00' but does not match
'AB0' and
'AB000'
: { n ,} (Previous character occurs n times
or more)  
example : /AB0{2,}/ matches the for
example 'AB00' ,
'AB000' , but does not match
'AB0'
: { n , m } (Previous character occurs at
least n and not more than m times  
example : /AB0{2,4}/ matches the for
example 'AB00' ,
'AB0000' but does not match
'AB0' and
'AB00000'

Fuzzy Search
: Search for a word of spelling similar to the search keyword  
':' + (Search keyword) + '~' + (Distance of the search term. Numerical
value of 0.0 or more and less than 1.0. Close to the search keyword
closer to 1.)

Proximity Search
: The words contained in a phrase search what is indicated in the
neighborhood.
':' + (Phrase) + '~' + (Distance of the search term. Number of words.)

Weighting Search
: (Search keyword) + '^' + (Positive relative weight. Positive number.
Default is 1.0.)

Character with a special meaning
: These characters have a special meaning.  
\+ \- && &#124;&#124; \! \( \) \{ \} \[ \] ^ " ~ \* ? : /

When you search these characters, use phrase search, or cancel the
special meaning by prefixing the ''{::nomarkdown}\{:/}''

## Get the search results <a name="Get_the_search_results"></a>

Your results are available in the following formats.

<table>
  <tbody>
    <tr>
      <th>FlatFile</th>
      <td>DDBJ FlatFile format</td>
    </tr>
    <tr>
      <th>FASTA</th>
      <td>FASTA format</td>
    </tr>
    <tr>
      <th>XML</th>
      <td>INSD-XML format</td>
    </tr>
  </tbody>
</table>

In the browser
: Click the Accession number which you would like to view the content. You
can view the Flatfile of the entry.
: Specify the format. Check the results you want to view, and click the
"View selected" button. You can view the results that was selected in
the specified format. (10,000 upper limit)
: When your result is over the upper limit, refine your search condition.

Download
: To download results, specify the format and click the "Download All"
button (Downloadable entries, 3,000 at most).
: To download the selected files, specify the format and check the box you
want to download. Then click the "Download selected" button.

[Caution]

  - For download all the results without fail, you should reduce the
    total number of the results less than 3,000 at most. The number of
    downloadable entries might be decreased because it depends on the
    load status of the server. You can reduce the number of the results
    by adding the date filter.
    
    ```
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


## Other search criteria <a name="Other_search_criteria"></a>

Specifiction of the following seach conditions are also available at the
"Search Settints" of "Advanced Search".

Sort condition
: You can select a search field or search score for sorting.

Display field of the search results
: Check the box(es) you want to display on the search results.

