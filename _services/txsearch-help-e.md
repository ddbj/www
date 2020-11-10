---
layout: indexed_content
title: TXSearch
category: services
lang: en
related_pages:
  - title: ARSA Help
    url: /services/arsa-e.html
  - title: BLAST Help
    url: /blast-help-e.html
  - title: getentry Help
    url: /services/getentry-e.html
  - title: ClustalW Help
    url: /services/clustalw-e.html
  - title: VecScreen Help
    url: /services/vecscreen-e.html
  - title: References
    url: /services/references-e.html
  - title: Services in past
    url: /services/past-services-e.html
  - title: WABI (Web API for Biology)
    url: /wabi-e.html
  - title: WABI BLAST Help
    url: /services/wabi-blast-e.html
---

TXSearch is a [NCBI
Taxonomy](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) retrieval
system provided by DDBJ. When you submit nucleotide sequence data to
International Nucleotide Sequence Database([INSD](/insdc-e.html#insd)),
you need to use the organism name description based on NCBI Taxonomy.


## Search (from the web form) <a name="usage"></a>

#### Top page (Tree screen)：<http://ddbj.nig.ac.jp/tx_search/> <a name="Top_page_Tree_screen：http_//ddbj.nig.ac.jp/tx_search/_"></a>

![Top page]({{ site.baseurl }}/assets/images/help/txhelp01.gif)


### Search from the Web Form <a name="search"></a>

Enter the words and/or numericals into the box, then click the "send"
button or press the "Enter" key.

![Enter to search form]({{ site.baseurl }}/assets/images/help/txhelp03.gif)

  - "Wild Card" ("?" stands for any single character, and "\*" for any
    number of characters) is available.

  - Boolean Operators (AND, OR, NOT) can be entered as follows.

    | AND | "space"　or "AND" or "&&" |
    | OR  | "OR" or "||"             |
    | NOT | "NOT"                    |
    


  - To use the "Example" is an easy way.
    
      - <span class="red">(1)</span> Click the "Example" under the search box, some examples are displayed.
      - <span class="red">(2)</span> Select the one and click it, then its text is entered into the search box.
      - <span class="red">(3)</span> Modify the text to suit your purpose. (e.g. organism names, taxonomy_id)
    
    ![Search form, Example]({{ site.baseurl }}/assets/images/help/txhelp02.gif)

  - Default search fields are as follows.
    
    |  tax_id  |  anamorph  |  in_part  |
    |  scientific_name  |  teleomorph  |  includes  |
    |  common_name  |  authority  |  misnomer  |
    |  synonym  |  blast_name  |  misspelling  |
    |  acronym  |  equivalent_name  |  type_material  |
      
    If you search some particular fields, [specify the field](#f-shitei)
    by refine search.

  - Because the maximum number of results displayed in the screen is
    fixed in 1000 (in ascending order of scientific_name), to view the
    all results, please execute the [refine search](#refine) to narrow
    the number down to 1000.



### Refine Search <a name="refine"></a> 

You can narrow the scope of your search by specifying some particular
fields, and/or combining some field searches.

  - When the result is more than 1000, please execute the refine search
    so that less than 1000 is included in the search result (In this
    system the maximum result display number is fixed as 1000 which is
    unmodifiable)
  - <span id="f-shitei">The description to search a specific field is,
    <span class="red bold">field name：value</span> (e.g.
    tax_id:9606)</span>
  - Multiple fields  
    Connect "field name：value" units, separating by space (e.g.
    scientific_name:(Homo Sapiens) && rank:species)
  - <span id="k-field">Following fields can be specified</span>

    |  Searchable fields  |    |
    | ---- | ---- |
    |      tax_id<br>scientific_name<br>common_name<br>synonym<br>acronym<br>anamorph<br>teleomorph<br>authority<br>blast_name<br>equivalent_name<br>in_part<br>includes<br>misnomer<br>misspelling<br>type_material  |  When the field name is specified, specified field is searched.<br>When the field is not specified, all these field is searched.  |
    |  lineagerank  |  To search these fields, you need to specify the field-name and its value.  |

  - Exact matching, please specify the field name as follows.

    |  scientific_name_ex  |
    |  common_name_ex  |
    |  synonym_ex  |
    |  acronym_ex  |
    |  anamorph_ex  |
    |  teleomorph_ex  |
    |  authority_ex  |
    |  blast_name_ex  |
    |  equivalent_name_ex  |
    |  in_part_ex  |
    |  includes_ex  |
    |  misnomer_ex  |
    |  misspelling_ex  |
    |  type_material_ex  |

### Search Examples <a name="example"></a>

|  Text	  |  what you search  |
| ---- | ---- |
| human AND lineage:Mammalia | search the taxon which contains "human" in the default search fields, and linage is "Mammalia" |
| human AND rank:subspecies | search the taxon which contains "human" in the default search fields, and rank is "subspecies" |
| human AND NOT(lineage:Eukaryota) | search the taxon which contains "human" in the default search fields, and linage is NOT "Eukaryota" |
| tax_id:9606 | tax_id is 9606 |
| Homo Sapiens | search the taxon which contains both "Homo" AND "Sapiens" in the default fields |
| scientific_name:"Homo sapiens" | search the taxon whose scientific_name includes "Homo sapiens" |
| scientific_name:(Homo sapiens) | search the taxon which contains both "Homo" and "sapiens" in the scientific_name field. |
| scientific_name:Homo sapiens | search the taxon which contains both "Homo" in the scientific_name field, and contains "sapiens" in the default search fields. |
| scientific_name_ex:"Homo sapiens" | search the taxon whose scientific_name is "Homo sapiens" (Exact search).<br><span class="red">(Note)</span> When the search words contains a space, the words should be enclosed in double quotation marks. |
| 50000 | search the taxon which contains "50000" in the default search fields.<br>(In this case, both the taxon which contains "50000" in the name, such as "Crinipellis sp. GDGM 50000", and "Sarracenia alabamensis" whose tax_id is "50000" are retrieved. To search either one, you should <a href="#f-shitei">specify the field name</a> you want to retrieve.） |
| tax_id:(741158 OR 63221)<br>or<br>tax_id:(741158 \|\| 63221) | searchs tax_id field either 741158 OR 63221　 |
| scientific_name:(Acetobacter c\*) | search the taxon which contains both "Acetobacter" and "the strings" containing any number of characters starting with "c" in the scientific_name field.
| scientific_name:(Acetobacter sp\*) | search the taxon which contains both "Acetobacter" and "the strings" containing any number of characters starting with "sp" in the scientific_name field. |
| tax_id:960? | search the tax_id field in 960? (? is one character) |


## Search Result <a name="result"></a>

### Search Result (Taxon Information screen) <a name="taxinfo"></a>

This is the result screen of the search by the web form.

![Search result]({{ site.baseurl }}/assets/images/help/txhelp04.gif)

  - Scientific name, taxonomy id, rank, division code, genetic code,
    mitochondrial genetic code, names other than scientific name, and
    lineage of specified taxonomy id's taxon are displayed.
  - taxonomy id links to [NCBI Taxonomy
    Browser](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/).
  - genetic code id, mitochondrial genetic code id links to [Genetic
    code table](/ddbj/geneticcode-e.html).
  - Each name in the lineage line links to the tree.



### Tree Screen <a name="tree"></a>

Click the name in the lineage, then the tree will be displayed on the
screen.

![Tree screen]({{ site.baseurl }}/assets/images/help/txhelp05.gif)

  - <span class="red">(1)</span> scientific name links to Taxon
    Information screen.
  - <span class="red">(2)</span> taxonomy id links to [NCBI Taxonomy
    Browser](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/).
  - <span class="red">(3)</span> Delta icon left side of scientific name
    developes taxonomic tree of lower rank.
  - <span class="red">(4)</span> The right hand arrow icon of top
    scientific name developes upper level tree.  
    If you click it, more 1 ranks are displayed.
  - You can change the number of ranks displayed on the browser by the
    modification of depth parameter value in the URL.


## Method including taxonomy_id into the URL <a name="url"></a>

You can make the URL which include taxonomy_id. Using this, you can
display the search result directly, and/or link to the Taxon Information
page.


### When including taxonomy_id in URL <a name="taxnonmy"></a>

| Parameters | Details | Examples |
| --- | --- | --- |
| id <span class="red">(required item）</span> | specifies target taxonomy id. | {::nomarkdown}<ul><li>taxonomy_id :9606 in the Tree view<br /><a href="http://ddbj.nig.ac.jp/tx_search/9606?view=tree" class="external">//ddbj.nig.ac.jp/tx_search/9606?view=tree</a><br /><a href="http://ddbj.nig.ac.jp/tx_search/9606" class="external">//ddbj.nig.ac.jp/tx_search/9606</a></li><li>taxonomy_id :63221 in Taxon Information view<br /><a href="http://ddbj.nig.ac.jp/tx_search/63221?view=info" class="external">//ddbj.nig.ac.jp/tx_search/63221?view=info</a></li></ul>{:/} |
| view | View of Tree of Taxon information.<br />In case of not specified, automatically tree view is selected. | {::nomarkdown}<ul><li>taxonomy_id :63221 in the Taxon Information view<br /><a href="http://ddbj.nig.ac.jp/tx_search/63221?view=info" class="external">//ddbj.nig.ac.jp/tx_search/63221?view=info</a></li><li>taxonomy_id :63221 in the Tree view<br /><a href="http://ddbj.nig.ac.jp/tx_search/63221" class="external">//ddbj.nig.ac.jp/tx_search/63221</a></li></ul>{:/} |
| depth | specifies number of hierarchy.<br />Default is 2. | {::nomarkdown}<ul><li>display taxonomy_id :9592 in 5 hierarchies<br /><a href="http://ddbj.nig.ac.jp/tx_search/63221?depth=5" class="external">//ddbj.nig.ac.jp/tx_search/63221?depth=5</a></li><li>display taxonomy_id :9606 by default<br /><a href="http://ddbj.nig.ac.jp/tx_search/9606" class="external">//ddbj.nig.ac.jp/tx_search/9606</a></li></ul>{:/} |
