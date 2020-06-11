---
layout: indexed_content
title: TXSearch
category: services
---

TXSearch is a [NCBI
Taxonomy](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) retrieval
system provided by DDBJ. When you submit nucleotide sequence data to
International Nucleotide Sequence Database([INSD](/insdc-e.html#insd)),
you need to use the organism name description based on NCBI Taxonomy.

<div class="section chapter">

## Search (from the web form)

#### Top page (Tree screen)：<http://ddbj.nig.ac.jp/tx_search/>

![Top page](/images/help/txhelp01.gif)

<div class="section section">

### Search from the Web Form

Enter the words and/or numericals into the box, then click the "send"
button or press the "Enter" key.

![Enter to search form](/images/help/txhelp03.gif)

  - "Wild Card" ("?" stands for any single character, and "\*" for any
    number of characters) is available.

  - Boolean Operators (AND, OR, NOT) can be entered as follows.
    
    <div class="main_table format">
    
    |     |                          |
    | --- | ------------------------ |
    | AND | "space"　or "AND" or "&&" |
    | OR  | "OR" or "||"             |
    | NOT | "NOT"                    |
    

    </div>

  - To use the "Example" is an easy way.
    
      - <span class="red">(1)</span> Click the "Example" under the
        search box, some examples are displayed.
      - <span class="red">(2)</span> Select the one and click it, then
        its text is entered into the search box.
      - <span class="red">(3)</span> Modify the text to suit your
        purpose. (e.g. organism names, taxonomy\_id)
    
    ![Search form, Example](/images/help/txhelp02.gif)

  - Default search fields are as follows.
    
    <table>
    <colgroup>
    <col style="width: 33%" />
    <col style="width: 33%" />
    <col style="width: 33%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td>tax_id<br />
    scientific_name<br />
    common_name<br />
    synonym<br />
    acronym<br />
    </td>
    <td>anamorph<br />
    teleomorph<br />
    authority<br />
    blast_name<br />
    equivalent_name<br />
    </td>
    <td>in_part<br />
    includes<br />
    misnomer<br />
    misspelling<br />
    type_material<br />
    </td>
    </tr>
    </tbody>
    </table>
    
    If you search some particular fields, [specify the field](#f-shitei)
    by refine search.

  - Because the maximum number of results displayed in the screen is
    fixed in 1000 (in ascending order of scientific\_name), to view the
    all results, please execute the [refine search](#refine) to narrow
    the number down to 1000.

</div>

<div class="section section">

### Refine Search

You can narrow the scope of your search by specifying some particular
fields, and/or combining some field searches.

  - When the result is more than 1000, please execute the refine search
    so that less than 1000 is included in the search result (In this
    system the maximum result display number is fixed as 1000 which is
    unmodifiable)
  - <span id="f-shitei">The description to search a specific field is,
    <span class="red bold">field name：value</span> (e.g.
    tax\_id:9606)</span>
  - Multiple fields  
    Connect "field name：value" units, separating by space (e.g.
    scientific\_name:(Homo Sapiens) && rank:species)
  - <span id="k-field">Following fields can be specified</span>
    <div class="main_table format">
    Searchable fields
    </div>
  - Exact matching, please specify the field name as follows.
    <table>
    <colgroup>
    <col style="width: 100%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td>scientific_name_ex<br />
    common_name_ex<br />
    synonym_ex<br />
    acronym_ex<br />
    anamorph_ex<br />
    teleomorph_ex<br />
    authority_ex<br />
    blast_name_ex<br />
    equivalent_name_ex<br />
    in_part_ex<br />
    includes_ex<br />
    misnomer_ex<br />
    misspelling_ex<br />
    type_material_ex</td>
    </tr>
    </tbody>
    </table>

</div>

<div class="section section">

### Search Examples

<div class="main_table format">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Text</th>
<th>what you search</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>human AND lineage:Mammalia</td>
<td>search the taxon which contains "human" in the default search fields, and linage is "Mammalia"</td>
</tr>
<tr class="even">
<td>human AND rank:subspecies</td>
<td>search the taxon which contains "human" in the default search fields, and rank is "subspecies"</td>
</tr>
<tr class="odd">
<td>human AND NOT(lineage:Eukaryota)</td>
<td>search the taxon which contains "human" in the default search fields, and linage is NOT "Eukaryota"</td>
</tr>
<tr class="even">
<td>tax_id:9606</td>
<td>tax_id is 9606</td>
</tr>
<tr class="odd">
<td>Homo Sapiens</td>
<td>search the taxon which contains both "Homo" AND "Sapiens" in the default fields</td>
</tr>
<tr class="even">
<td>scientific_name:"Homo sapiens"</td>
<td>search the taxon whose scientific_name includes "Homo sapiens"</td>
</tr>
<tr class="odd">
<td>scientific_name:(Homo sapiens)</td>
<td>search the taxon which contains both "Homo" and "sapiens" in the scientific_name field.</td>
</tr>
<tr class="even">
<td>scientific_name:Homo sapiens</td>
<td>search the taxon which contains both "Homo" in the scientific_name field, and contains "sapiens" in the default search fields.</td>
</tr>
<tr class="odd">
<td>scientific_name_ex:"Homo sapiens"</td>
<td>search the taxon whose scientific_name is "Homo sapiens" (Exact search).<br />
<span class="red">(Note)</span> When the search words contains a space, the words should be enclosed in double quotation marks.</td>
</tr>
<tr class="even">
<td>50000</td>
<td>search the taxon which contains "50000" in the default search fields.<br />
(In this case, both the taxon which contains "50000" in the name, such as "Crinipellis sp. GDGM 50000", and "Sarracenia alabamensis" whose tax_id is "50000" are retrieved. To search either one, you should <a href="#f-shitei">specify the field name</a> you want to retrieve.）</td>
</tr>
<tr class="odd">
<td>tax_id:(741158 OR 63221)<br />
or<br />
tax_id:(741158 || 63221)</td>
<td>searchs tax_id field either 741158 OR 63221　</td>
</tr>
<tr class="even">
<td>scientific_name:(Acetobacter c*)</td>
<td>search the taxon which contains both "Acetobacter" and "the strings" containing any number of characters starting with "c" in the scientific_name field.</td>
</tr>
<tr class="odd">
<td>scientific_name:(Acetobacter sp*)</td>
<td>search the taxon which contains both "Acetobacter" and "the strings" containing any number of characters starting with "sp" in the scientific_name field.</td>
</tr>
<tr class="even">
<td>tax_id:960?</td>
<td>search the tax_id field in 960? (? is one character)</td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

<div class="section chapter">

## Search Result

<div class="section section">

### Search Result (Taxon Information screen)

This is the result screen of the search by the web form.

![Search result](/images/help/txhelp04.gif)

  - Scientific name, taxonomy id, rank, division code, genetic code,
    mitochondrial genetic code, names other than scientific name, and
    lineage of specified taxonomy id's taxon are displayed.
  - taxonomy id links to [NCBI Taxonomy
    Browser](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/).
  - genetic code id, mitochondrial genetic code id links to [Genetic
    code table](/ddbj/geneticcode-e.html).
  - Each name in the lineage line links to the tree.

</div>

<div class="section section">

### Tree Screen

Click the name in the lineage, then the tree will be displayed on the
screen.

![Tree screen](/images/help/txhelp05.gif)

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

</div>

</div>

<div class="section chapter">

## Method including taxonomy\_id into the URL

You can make the URL which include taxonomy\_id. Using this, you can
display the search result directly, and/or link to the Taxon Information
page.

<div class="section section">

### When including taxonomy\_id in URL

<div class="main_table format">

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Parameters</th>
<th>Details</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id <span class="red">(required item）</span></td>
<td>specifies target taxonomy id.</td>
<td><ul>
<li>taxonomy_id :9606 in the Tree view<br />
<a href="http://ddbj.nig.ac.jp/tx_search/9606?view=tree" class="external">//ddbj.nig.ac.jp/tx_search/9606?view=tree</a><br />
<a href="http://ddbj.nig.ac.jp/tx_search/9606" class="external">//ddbj.nig.ac.jp/tx_search/9606</a></li>
<li>taxonomy_id :63221 in Taxon Information view<br />
<a href="http://ddbj.nig.ac.jp/tx_search/63221?view=info" class="external">//ddbj.nig.ac.jp/tx_search/63221?view=info</a></li>
</ul></td>
</tr>
<tr class="even">
<td>view</td>
<td>View of Tree of Taxon information.<br />
In case of not specified, automatically tree view is selected.</td>
<td><ul>
<li>taxonomy_id :63221 in the Taxon Information view<br />
<a href="http://ddbj.nig.ac.jp/tx_search/63221?view=info" class="external">//ddbj.nig.ac.jp/tx_search/63221?view=info</a></li>
<li>taxonomy_id :63221 in the Tree view<br />
<a href="http://ddbj.nig.ac.jp/tx_search/63221" class="external">//ddbj.nig.ac.jp/tx_search/63221</a></li>
</ul></td>
</tr>
<tr class="odd">
<td>depth</td>
<td>specifies number of hierarchy.<br />
Default is 2.</td>
<td><ul>
<li>display taxonomy_id :9592 in 5 hierarchies<br />
<a href="http://ddbj.nig.ac.jp/tx_search/63221?depth=5" class="external">//ddbj.nig.ac.jp/tx_search/63221?depth=5</a></li>
<li>display taxonomy_id :9606 by default<br />
<a href="http://ddbj.nig.ac.jp/tx_search/9606" class="external">//ddbj.nig.ac.jp/tx_search/9606</a></li>
</ul></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>
