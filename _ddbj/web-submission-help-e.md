---
layout: indexed_content
title: DDBJ Nucleotide Sequence Submission System HELP
category: ddbj
lang: en
---

## 1\. Contact person <a name="flow-1"></a>

Enter [contact person's](/ddbj/submission.html#contact) information here.

![]({{ site.baseurl }}/assets/images/help/NSSShelp1-1_e.png "contact information entry screen"){:.w600}

An e-mail, which contains a link to start the submission, is automatically sent to the contact person's e-mail address.

![]({{ site.baseurl }}/assets/images/help/NSSShelp1-2_e.png){:.w600}

## 2\. Hold date <a name="flow-2"></a>

Enter hold date if you would like to suspend the release, or select "Release immediately" on the page.

![]({{ site.baseurl }}/assets/images/help/NSSShelp2-1_e.png){:.w600}

  - A day six months from today is highlighted when you click the calendar icon.

  - You cannot select the days on end or begin of the year because DDBJ suspends the work to release the nucleotide sequences during the days.

  - The selectable hold date is limited within three years from today.

### How to suspend/resume <a name="flow-2-1"></a>

  - Please bookmark the URL of the page after you click "Next". You can resume the submission from the bookmarked URL even if you close the internet browser.

  - For "7.Annotation" page, please bookmark the URL of the page. You can keep the data even if "Next" button is not clicked. You can restart to edit the annotation from the URL.

## 3\. Submitter <a name="flow-3"></a>

Enter submitter(s) on the page.

![]({{ site.baseurl }}/assets/images/help/NSSShelp3-1_e.png){:.w600}

{::options parse_block_html="true" /}
<div class="attention">

**Please enter submitter in abbreviated format as indicated in example below.**

**format：**<br>Last name\[comma\]Initial of first name\[period\]Initial of middle name\[period\]

**e.g.:**<br>Miyashita,Y.<br>Robertson,G.R.<br>Mishima-Tokai,H.<br>Kim,C.S.<br>Wang,Y.Q.

</div>

Related page  
: [REFERENCE 1](/ddbj/flat-file-e.html#Reference1) / [Explanation of DDBJ flat file format](/ddbj/flat-file-e.html)

<!-- end list -->

  - We would like to ask you to include two or more submitters.  
    We occasionally meet the situation where we cannot contact to the submitter in case of entries which have only one submitter. In our rule, submitter is responsible for the data and only the submitter can update own entries. Without contacting to the submitter, we cannot fulfill necessary corrections.  
    Of course, you can register your entries with only one submitter, but we recommend you to add more submitters, such as principal investigator, to your entries.

## 4\. Reference <a name="flow-4"></a>

Enter [reference information](/ddbj/flat-file-e.html#Reference2) on the page. Please enter [primary citation](/ddbj/submission.html#pcite) on the 1st reference.

![]({{ site.baseurl }}/assets/images/help/NSSShelp4_e.png){:.w600}

<div class="attention">

**Please enter reference author name in abbreviated format as follows.**

**format:**<br>Last name\[comma\]Initial of first name\[period\]Initial of middle name\[period\]

**e.g.:**<br>Miyashita,Y.<br>Robertson,G.R.<br>Mishima-Tokai,H.<br>Kim,C.S.<br>Wang,Y.Q.

</div>

Related page  
: [REFERENCE 2](/ddbj/flat-file-e.html#Reference2) / [Explanation of DDBJ flat file format](/ddbj/flat-file-e.html)

### Reference examples <a name="flow-4-1"></a>

#### Status: Unpublished <a name="flow-4-1-1"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-1-1_e.png){:.w600}

#### Status: In press <a name="flow-4-1-2"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-1-2_e.png){:.w600}

#### Status: Published <a name="flow-4-1-3"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-1-3_e.png){:.w600}

### Journal name <a name="flow-4-2"></a>

Please enter a journal name in ISO abbreviated format. You will see the candidates of journal name when you enter a full or part of the beginning name of a journal. You can enter the abbreviation name by selecting one from the list.

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-2_e.png){:.w600}

Regarding ISO abbreviation of the journal name, you can consult it on [NLM Catalog](//www.ncbi.nlm.nih.gov/nlmcatalog?db=journals).

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-2-1_e.png){:.w600}

## 5\. Sequence <a name="flow-5"></a>

Enter nucleotide sequence here. When you submit [TPA](/ddbj/tpa-e.html) entry, assembly information is also needed.

![]({{ site.baseurl }}/assets/images/help/NSSShelp5_e.png){:.w600}

### Format of the nucleotide sequences <a name="flow-5-1"></a>

  - You can paste or upload nucleotide sequence consists of multi-FASTA format.

  - Entry name is required to be described in less than 24 letters of characters which do not contain \[space\], " \[double-quote\], ? \[question\], ￥ \[yen sign\], \\ \[back-slash\].

  - Entry names must be unique in one submission. If the same entry name are contained in the submission, you must correct the entry name to avoid an error.

  - Double slash (//) is not needed for separate the entries. Of course, you can include double slash (//) as a separation mark of the entries (e.g.1 & e.g.2).

  - This system automatically insert double slash (//) between entries when the nucleotide sequence that contains no double slash (//) is entered.

  - The sequence must consists of a, c, g, t, m, r, w, s, y, k, v, h, d, b, or n.

  - Spaces, numeric characters within the nucleotide sequence are automatically removed.

  - Upper cases of the nucleotide residue id automatically converted into lower cases.

e.g.1

```
>CLN01
ggacaggctgccgcaggagccaggccgggagcaggtggtggaagacagacctgtaggtgg
aagaggcttcgggggagccggagaactgggccagaccccacaggtgcaggctgccctgtc
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tgaggcaggagaatcgcttgaaccccggaggcggaggttgcagtgagccgagattacgcc
accgcactccagcctgggcgacagagtgagactccatctcaaaaaaaaaaaaaaaaaa
>CLN02
ctcacacagatgctgcgcacaccagtggttgtaacaatgccgtttgcctccttcaggtct
gaagcctgaggtgcgctcgtggtcagtgaagagggcaaaaagagagagaggctcaaagga
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tagtcattcatataaatttgaacacacctgctgtgcctagacaagtgtctttctgtaaga
gctgtaactctgagatgtgctaaataaaccctctttctcaaaaaaaaaaaaaaaa
        
```

e.g.2

```
>CLN01
ggacaggctgccgcaggagccaggccgggagcaggtggtggaagacagacctgtaggtgg
aagaggcttcgggggagccggagaactgggccagaccccacaggtgcaggctgccctgtc
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tgaggcaggagaatcgcttgaaccccggaggcggaggttgcagtgagccgagattacgcc
accgcactccagcctgggcgacagagtgagactccatctcaaaaaaaaaaaaaaaaaa
//
>CLN02
ctcacacagatgctgcgcacaccagtggttgtaacaatgccgtttgcctccttcaggtct
gaagcctgaggtgcgctcgtggtcagtgaagagggcaaaaagagagagaggctcaaagga
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tagtcattcatataaatttgaacacacctgctgtgcctagacaagtgtctttctgtaaga
gctgtaactctgagatgtgctaaataaaccctctttctcaaaaaaaaaaaaaaaa
//
        
```

### TPA nucleotide sequence <a name="flow-5-2"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp5-2_e.png){:.w600}

### Format of assembly information for TPA <a name="flow-5-3"></a>

#### Example <a name="flow-5-3-1"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp5-3-1_e.png){:.w600}

You can download the assembly sample [from here (tab-delimited text format)]({{ site.baseurl }}/assets/files/example/NSSShelp-tpa-sample.txt).

#### The example indicates following information. <a name="The_example_indicates_following_information."></a>

**Entry name FA01**<br>TPA sequence:1-552 corresponds to ZZ000001.1:54872-55422<br>TPA sequence:553-705 corresponds to ZZ000002.5:1-153

**Entry name BM123**<br>TPA sequence:1-438 corresponds to ZZ000010.1:1-438<br>TPA sequence:377-695 corresponds to ZZ000011.1:complement (1-320)<br>TPA sequence:411-790 corresponds to ZZ000021.12:1-398<br>TPA sequence:790-1191 corresponds to ZZ000022.0:1-401

Their correspondence is subject to the rule, ["The sequence alignment rule between TPA and primary entries"](/ddbj/tpa-e.html#alignment-rule).

### Detailed rule for description of assembly information <a name="flow-5-4"></a>

  - The 1st line must be
      - <span style="font-size: 11px;">\[tab or space\]TPA\_SPAN\[tab or space\]PRIMARY\_IDENTIFIER\[tab or space\]PRIMARY\_SPAN\[tab or space\]COMPLEMENT</span>
  - Do not include null line(s).
  - Entry name must be entered at the 1st column. Assembly information is separated with each entry at the line of entry name.
  - TPA\_SPAN
      - X..Y or X-Y
      - X and Y are numeric. Location on TPA sequence is described.
      - e.g. 100..2000   100-2000
  - PRIMARY\_IDENTIFIER
      - accession number.version
      - Accession number with version of primary entry is described. Please use 0 for the version number if primary entry is not released.
      - e.g. AB123456.1   AB987654.0
  - PRIMARY\_SPAN
      - X..Y or X-Y
      - X and Y are numeric. The region from primary entry, which was used for construct TPA sequence, is described. The region must match to the TPA\_SPAN. Please see ["The sequence alignment rule between TPA and primary entries"](/ddbj/tpa-e.html#alignment-rule).
  - COMPLEMENT
      - null or c
      - Enter "c" when complementary region from primary entry is used.

## 6\. Template <a name="flow-6"></a>

Please select template that matches to annotation.

![]({{ site.baseurl }}/assets/images/help/NSSShelp6_e.png){:.w600}

## 7\. Annotation <a name="flow-7"></a>

### Annotation when a template except "other" is selected <a name="flow-7-1"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-1_e.png)

</div>

Related page  
: [Definition of Feature key](/ddbj/features-e.html) / [Definition of Qualifier key](/ddbj/qualifiers-e.html) / [Organism qualifier](/ddbj/organism-e.html) / [Protein Coding Sequence; CDS feature](/ddbj/cds-e.html)

### Annotation when template "other" is selected <a name="flow-7-2"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-2_e.png)

</div>

Related page  
: [Definition of Feature key](/ddbj/features-e.html) / [Definition of Qualifier key](/ddbj/qualifiers-e.html) / [Organism qualifier](/ddbj/organism-e.html) / [Protein Coding Sequence; CDS feature](/ddbj/cds-e.html)

### How to edit the annotation <a name="flow-7-3"></a>

#### "Edit" button <a name="flow-7-3-1"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-1_e.png){:.w600}

#### "Select Qualifier" button <a name="flow-7-3-2"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-2_e.png){:.w600}

#### "Pen & Note" button <a name="flow-7-3-3"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-3_e.png){:.w600}

#### "Edit Column" button <a name="flow-7-3-4"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-4_e.png){:.w600}

#### Double-clicking a cell (clicking each qualifier when template: other is selected) ![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-5_e.png){:.w600}

### Organism name <a name="flow-7-4"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-4_e.png){:.w600}

Enter a scientific name and click "OK".  
You need to select one from the category list, if the organism name is not registered on NCBI Taxonomy database. Please see ["Category of organism name"](/ddbj/organism-e.html#deasy) for detail.

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-4-1_e.png){:.w600}

Related page  
: [Organism qualifier](/ddbj/organism-e.html)

### Annotation examples <a name="flow-7-5"></a>

#### 16S rRNA <a name="flow-7-5-1"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-5-1_e.png)

</div>

#### CDS <a name="flow-7-5-2"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-5-2_e.png)

</div>

#### Mitochondrial genome <a name="flow-7-5-3"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-5-3_e.png)

</div>

### Submission by uploading the annotation file <a name="flow-7-6"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-6_e.png)

</div>

#### Uploadable file format <a name="flow-7-6-1"></a>

  - You can download [sample annotation file from here]({{ site.baseurl }}/assets/files/example/mtDNA.txt).

  - Please refer to ["Making MSS Files for preparation of annotation file"](/ddbj/file-format-e.html#annotation) for detail.

  - Please include only [biological feature](/ddbj/file-format-e.html#biological_feature) in annotation file.

  - You cannot upload WGS, CON, AGP, EST, GSS, STS, HTG, HTC, TSA files. Please contact ["Mass Submission System (MSS)"](/ddbj/mss-e.html) to
    submit such submission files.

  - Information that you entered on the pages, "1. Contact person", "2. Hold date", "3. Submitter", and "4. Reference", are automatically added in front of uploaded annotation file as COMMON section.

  - When "COMMON" is included in the uploaded annotation file, if will be replaced with information obtained from "1. Contact person", "2. Hold date", "3. Submitter", and "4. Reference."

  - For TPA, you should not include PRIMARY\_CONTIG section in annotation file. PRIMARY\_CONTIG section is automatically inserted to the uploaded annotation file by converting information of the "5. Sequence" page.

<!-- end list -->

Related page  
: [Definition of Feature key](/ddbj/features-e.html) / [Definition of Qualifier key](/ddbj/qualifiers-e.html) / [Organism qualifier](/ddbj/organism-e.html) / [Protein Coding Sequence; CDS feature](/ddbj/cds-e.html)

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-6-1_e.png)

</div>

#### Common mistake that causes file-uploading error <a name="flow-7-6-2"></a>

  - When you use Excel for making annotation file, you need to copy it to text editor and save as the text file. The annotation file must be saved as tab-deliminated text file format.

  - Entry names of the nucleotide sequences entered at "5. Sequence" are not described in the annotation file, or order of each entry names is different between the annotation file and the nucleotide sequence.

  - The tab column structure is wrong.

  - Some extra space or illegal characters, such as multibyte, unicode, or unprintable character, are included in the file.

### Error/Warning <a name="flow-7-7"></a>

  - If there are is no error after you click "Confirm", "Next" button is changed to be clickable and you can move to the next process.

  - Error/warning messages are displayed beneath annotation input area when error or warning occurred.

  - In order to correct error, please scroll-up the screen, and edit entry at which error occurred on annotation input field. Please click "Confirm" after you correct the errors.

  - When error/warning occurred at "Submitter", "Reference", or "Sequence", please go back to previous page by clicking the page name on progress bar. After correction, you must click "Next" on each page, and then click "7.Annotation" on progress bar in order to return to "7. Annotation" page.

  - "Next" button changes to be clickable, even though there are some warnings. Please check again the input data. You should correct if there are any problems. You can click "Next" if you believe that there is no problem in the input data.

For detailed error/warning messages, please refer ["validator error message"](/ddbj/validator-e.html). Add "\#JPxxxx" (xxxx = 4 digits) after the URL for direct link to each page.  
e.g.：
[http://www.ddbn.nig.ac.jp/ddbj/validator-e.html\#JP0015](/ddbj/validator-e.html#JP0015)

Related page  
: [Definition of Feature key](/ddbj/features-e.html) / [Definition of Qualifier key](/ddbj/qualifiers-e.html) / [Organism qualifier](/ddbj/organism-e.html) / [Protein Coding Sequence; CDS feature](/ddbj/cds-e.html)

### How to obtain amino acid sequence <a name="flow-7-8"></a>

Please refer to the page, ["How to confirm translated amino acid sequences (i.e. /translation qualifier) for CDS features"](/faq/en/how-to-confirm-translated-amino-acid-seq.html).

As an alternative way, you can use the following Web services.  
ORFfinder (NCBI)  
[https://www.ncbi.nlm.nih.gov/orffinder/](//www.ncbi.nlm.nih.gov/orffinder/)  
EMBOSS Transeq (EBI)  
[https://www.ebi.ac.uk/Tools/st/emboss\_transeq/](//www.ebi.ac.uk/Tools/st/emboss_transeq/)

## Final page <a name="flow-7a"></a>

You will see the page after you click "Confirm" and then click "Next".

![]({{ site.baseurl }}/assets/images/help/NSSShelp7a_e.png){:.w600}

## 8\. Finish <a name="flow-8"></a>

You have been able to complete the submission when you see the finish screen.  
The data are automatically transferred to DDBJ registration server and an email is sent to contact person’s email address.

![]({{ site.baseurl }}/assets/images/help/NSSShelp8-1_e.png){:.w600}

You will receive an email to notify the completion.

![]({{ site.baseurl }}/assets/images/help/NSSShelp8-2_e.png){:.w600}