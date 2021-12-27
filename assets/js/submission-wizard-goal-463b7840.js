import{T as p,b as S,r as y,L as w,p as r,m as u,s as D,e as B,t as d,y as A,a as q,l as v,n as R}from"./submission-wizard-902da4d0.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=a=>(...e)=>({_$litDirective$:a,values:e});class f{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends f{constructor(e){if(super(e),this.it=p,e.type!==M.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===p||e==null)return this.vt=void 0,this.it=e;if(e===S)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const i=[e];return i.raw=i,this.vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}b.directiveName="unsafeHTML",b.resultType=1;const P=c(b);class x extends f{render(){}update(e){e.element.scrollTo({top:0,left:0,behavior:"instant"})}}var k=c(x),I={"q5-genome-eukaryote-complete-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q5-genome-eukaryote-draft-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q5-genome-prokaryote-complete-dramss>g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
  <li>Submit complete genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes the DRA and genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit complete genome sequences (non-WGS) of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will shorten submission processing time by annotating prokaryotic genomes and generating submission-ready files.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix.</li>
  <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the complete genome sequences of prokaryotes.</p>
`,ja:null}}]},"q4-metagenome-binned-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Binned metagenome assemblies asserted to known taxonomies (Binned metagenome) should be submitted to <a href="/dra/submission-e.html#Analysis">DRA Analysis.</a>. The raw sequence reads from which the binned metagenomes are derived should be submitted to <a href="/dra/submission-e.html">DRA Run.</a></p>
<p>Register a project to BioProject and BioSamples. Samples for raw metagenomic sequencing reads and those for binned metagenoms are necessary.</p>
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register two samples for unassembled raw reads and binned metagenomes.</p>
<p>1. Register a sample for unassembled DRA raw reads to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
<p>2. Register virtual samples for binned metagenomes to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the binned metagenome submission to DRA Analysis. The binned metagenome sample is derived from the metagenomic sample (1) and <a href="/ddbj/metagenome-assembly-e.html#binned-metagenome-biosample">several attributes need to be provided</a>.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Submit binned metagenome assemblies derived from the raw sequence data in fasta/bam files to the DRA Analysis (Analysis type = "De Novo Assembly"). Include information of analysis software used and organism bin in the description. Submit the Analysis along with the Run which had been registered for the raw reads. Please note that Analysis data are not shared with NCBI/ENA.</p>
`,ja:null}}]},"q4-metagenome-tls-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> is a large scale targeted sequencing project for a single gene locus such as 16S rRNA from multiple organisms.</p>
<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}}]},"q4-metagenome-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw metagenomic sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q4-transcriptome-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q3-transcriptome-expression->g-bp-bs-dra-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>For gene expression data by sequencing, submit raw data to the <a href="/dra/submission-e.html">Sequence Read Archive (DRA)</a> and processed data to the <a href="/gea/submit-sequence-e.html">Genomic Expression Archive (GEA)</a>. A BioProject and BioSamples should be registered for the DRA and GEA submissions. Both BioProject and BioSample submissions can be created during the DRA submission. Sequencing-based functional genomics data are accepted in the <a href="/gea/metadata-e.html">MAGE-TAB</a> format in compliance with the <a href="https://fairsharing.org/10.25504/FAIRsharing.a55z32">MINSEQE</a> guideline.</p>
<ol>
  <li>Register a project to BioProject in the D-way submission portal.</li>
  <li>Register samples to BioSample in the D-way submission portal.</li>
  <li>Register raw sequencing data to DRA in the D-way submission portal.</li>
  <li>Upload processed data files to a GEA submission directory by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSamples that have been registered for the DRA and GEA submissions. Enter metadata in MAGE-TAB template files and submit them in the D-way submission portal.</li>
</ol>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and GEA data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=FunctionalGenomics&definition=definition">functional genomics package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. BioSample is a record of biological sample with unique physical properties and majority of GEA submissions require more than one sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSamples that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"GEA",ja:null},body:{en:`<ul>
  <li>Create a new GEA submission in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</li>
  <li><a href="/gea/submit-sequence-e.html#upload-data">Upload processed data files by scp/sftp</a> to the GEA submission directory in the file server.</li>
  <li>In the GEA submission, select the DRA submission that have been registered for this submission. The metadata <a href="/gea/metadata-e.html#idf">IDF</a> and <a href="/gea/metadata-e.html#sdrf">SDRF</a> template files are generated. Describe an overview of the experiment in the IDF, and the relationship between samples, the DRA runs and processed data files in the SDRF.</li>
  <li>Submit the metadata IDF/SDRF and validate the data files.</li>
</ul>
`,ja:null}}]},"q5-genome-eukaryote-complete-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during the DRA submission or before the DRA and genome submissions.</li>
  <li>Submit finished level genomic sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit finished level genomic sequences (non-WGS) of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the finished level genome sequences.</p>
`,ja:null}}]},"q5-genome-eukaryote-draft-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during the DRA submission or before the DRA and draft genome submissions.</li>
  <li>Submit draft genome sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and draft genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of eukaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:null}}]},"q5-genome-prokaryote-draft-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during the DRA submission or before the DRA and draft genome submissions.</li>
  <li>Submit draft genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and draft genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of prokaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix.</li>
 <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:null}}]},"q5-genome-prokaryote-complete-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q5-genome-prokaryote-draft-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q4-metagenome-mag-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A highest quality representative binned assembly (Metagenome-Assembled Genome, MAG) predicted to be derived from taxonomically defined organisms should be submitted to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as genome entries of <a href="/ddbj/env-e.html">ENV</a> division.</p>
<ul>
  <li>Register unassembled raw reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and BioSamples. Two samples, one is for raw metagenomic sequencing reads and the other is for a MAG are necessary.</li>
  <li>Submit MAG to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>         
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Choose the most appropriate "xyz metagenome" (e.g., soil metagenome) from <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/">metagenome organism names</a> in the taxonomy database. The BioProject describes the goal of your research effort and organizes related metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register two samples, one is for unassembled raw reads and the other is for a MAG.</p>
<p>1. Register a sample for unassembled DRA raw reads to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
<p>2. Register a virtual sample for MAG to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the MAG submission. The MAG sample is derived from the metagenomic sample (1) and <a href="/ddbj/metagenome-assembly-e.html#mag-biosample">several MAG-specific attributes need to be described</a>.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register unassembled raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>.</p>
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit the MAG as a genome entry of <a href="/ddbj/env-e.html">ENV division</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a virtual BioSample that have been registered for the MAG submission. A MAG must be linked to a BioProject and a BioSample.</li>
     <li>Annotation is optional. If you submit a MAG with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
     <li>Provide metadata on the <a href="/ddbj/metagenome-assembly-e.html#mag-ddbj">sequencing and assembly of the genome</a>.</li>
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the MAG.</p>
`,ja:null}}]},"q4-metagenome-tls-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> is a large scale targeted sequencing project for a single gene locus such as 16S rRNA from multiple organisms. Submit TLS data to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
  <li>Submit <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the TLS submission.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit the <a href="/ddbj/tls-e.html">TLS</a> data to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a BioSample that have been registered for the TLS submission.</li>           
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/tls-e.html">Accession numbers with a 4-letter prefix and 8 digits</a> will be assigned to the TLS sequences.</p>
`,ja:null}}]},"q4-metagenome-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metagenomic, environmental sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</p>
<ul>
  <li>Register a project to BioProject and a sample to BioSample for metagenomic sequences.</li>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Submit metagenomic sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</li>
</ul>         
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes raw DRA data and assembled sequences. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit metagenomic sequences as <a href="/ddbj/env-e.html">ENV division</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a BioSample that have been registered for the DRA submission.</li>
     <li>Annotation is optional. If you submit a MAG with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/env-e.html">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the MAG.</p>
`,ja:null}}]},"q3-transcriptome-tsa->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tsa-e.html">TSA (Transcriptome Shotgun Assembly)</a> data are computationally assembled transcribed RNA sequences from primary data including next generation sequencing reads. The primary sequence data used in the assemblies must be publicly available in INSDC.</p>
<ul>
  <li>Register unassembled raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project in BioProject and your library information in BioSample during or before the DRA submission.</li>
  <li>Submit TSA data to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related transcriptome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register your library information to <a href="/biosample/submission-e.html">BioSample</a> as sample(s) by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register unassembled raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit <a href="/ddbj/tsa-e.html">TSA</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Assemblies obtained from multiple species are not acceptable except those derived from environmental samples.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject, BioSample(s) and DRA Run(s) that have been registered for the DRA submission.</li>
  <li>Annotation is optional. If you submit TSA with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/tsa-e.html#flat-file">Accession numbers with a 4-letter prefix and 8 digits</a> will be assigned to the TSA sequences.</p>
`,ja:null}}]},"q4-transcriptome-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
  <li>Submit RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject, BioSample(s) and DRA Run(s) that have been registered for the DRA submission.</li>
  <li>Annotation is optional. If you submit RNA sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the RNA sequences.</p>
`,ja:null}}]},"q2-fgarray->g-bp-bs-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit functional genomics data (gene expression, gene regulation, epigenetics or genotyping) by microarray to the <a href="/gea/submit-array-e.html">Genomic Expression Archive (GEA)</a>. A BioProject and BioSamples should be registered before the GEA submission. Microarray data are accepted in the <a href="/gea/metadata-e.html">MAGE-TAB</a> format in compliance with the <a href="https://fairsharing.org/bsg-s000177/">MIAME</a> guideline.</p>
<ol>
  <li>Register a project to BioProject in the D-way submission portal.</li>
  <li>Register samples to BioSample in the D-way submission portal.</li>
  <li>Upload raw and processed data files to a GEA submission directory by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSamples that have been registered for the GEA submission. Enter metadata in MAGE-TAB template files and submit them in the D-way submission portal.</li>
</ol>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject contains the description of the research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=FunctionalGenomics&definition=definition">functional genomics package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. BioSample is a record of biological sample with unique physical properties and majority of GEA submissions require more than one sample.</p>
`,ja:null}},{title:{en:"GEA",ja:null},body:{en:`<ul>
  <li>Create a new GEA submission in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</li>
  <li><a href="/gea/submit-array-e.html#upload-data">Upload raw and processed data files by scp/sftp</a> to the GEA submission directory in the file server.</li>
  <li>In the GEA submission, select the BioProject and BioSamples that have been registered for this submission. The metadata <a href="/gea/metadata-e.html#idf">IDF</a> and <a href="/gea/metadata-e.html#sdrf">SDRF</a> template files are generated. Describe an overview of the experiment in the IDF, and the relationship between samples, raw and processed data files in the SDRF.</li>
  <li>Submit the metadata IDF/SDRF and validate the data files.</li>
</ul>
`,ja:null}}]},"q5-genome-eukaryote-complete-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a project to BioProject and a sample to BioSample before the genome submission.</li>
  <li>Submit finished level genomic sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit finished level genomic sequences (non-WGS) of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the finished level geonme sequences.</p>       
`,ja:null}}]},"q5-genome-eukaryote-draft-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a project to BioProject and a sample to BioSample during or before the draft genome submission.</li>
  <li>Submit draft genome sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of eukaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:null}}]},"q5-genome-prokaryote-complete-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a project to BioProject and a sample to BioSample before the genome submission.</li>
  <li>Submit complete genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit complete genome sequences (non-WGS) of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will shorten submission processing time by annotating prokaryotic genomes and generating submission-ready files.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix.</li>
  <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the complete genome sequences of prokaryotes.</p>
`,ja:null}}]},"q5-genome-prokaryote-draft-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample before the draft genome submissions.</li>
  <li>Submit draft genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of prokaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a sample to BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix.</li>
 <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:null}}]},"q4-metagenome-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metagenomic, environmental sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</p>
<ul>
  <li>Register a project to BioProject and a sample to BioSample for metagenomic sequences.</li>
  <li>Submit metagenomic sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</li>
</ul>         
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit metagenomic sequences as <a href="/ddbj/env-e.html">ENV division</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a BioSample that have been registered for the metagenome sequences submission.</li>
     <li>Annotation is optional. If you submit metagenome sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/env-e.html">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the ENV sequences.</p>
`,ja:null}}]},"q3-transcriptome-est->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/est-e.html">Expressed Sequence Tags (ESTs)</a> are single-pass sequence reads from cDNA generated from mRNA or other RNA transcripts. They are tags of expression for the cDNA library of interest for a number of organisms. Sequences generated from next generation sequencing technologies should be submitted to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>. Assembled sequences should not be submitted as EST. <a href="/ddbj/index-e.html">DDBJ</a> accepts assembled EST sequences as the <a href="/ddbj/tsa-e.html">TSA (Transcriptome Shotgun Assembly) division</a>.</p>
<p>Submit ESTs to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the ESTs are part of a larger project.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>You may register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>You may register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit EST sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> (<a href="/ddbj/est-e.html">instructions</a>).</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the ESTs are part of a larger project.</li>
  <li>No <a href="/ddbj/flat-file-e.html#FeaturesB">feature</a> annotation should not be included except source.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the finished level geonme sequences.</p>       
`,ja:null}}]},"q4-transcriptome-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the RNA sequencing is part of a larger project.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>You may register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>You may register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>You may include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a>, if the RNA sequencing is part of a larger project.</li>
  <li>Annotation is optional. If you submit RNA sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the RNA sequences.</p>
`,ja:null}}]},"q3-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
  <li>Submit other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject, BioSample(s) and DRA Run(s) that have been registered for the DRA submission.</li>
  <li>Annotation is optional. If you submit RNA sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the RNA sequences.</p>
`,ja:null}}]},"q3-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q3-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the other DNA/RNA sequencing is part of a larger project.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>You may register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>You may register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>You may include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a>, if the other DNA/RNA sequencing is part of a larger project.</li>
  <li>Annotation is optional. If you submit RNA sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the RNA sequences.</p>
`,ja:null}}]},"q3-other-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the other DNA/RNA sequences.</p>
`,ja:null}}]},"q3-tpa-wgs-assembly->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-tpa-wgs-assembly</h1>
<p>Expedita error est. Quam repudiandae dolorem. Ad recusandae reprehenderit.</p>
<p>Non et esse. Nostrum neque ipsum. Delectus voluptates odit.</p>
<p>Sint cum recusandae. Autem neque praesentium. Reiciendis a repellat.</p>
<p>Ad corporis soluta. Assumenda error eum. Magnam vel ut.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-tpa-wgs-assembly</h1>
<p>Sed harum quas. Sed quia aut. Minus nemo voluptatum.</p>
<p>Sequi earum nesciunt. Laudantium consequatur sunt. Voluptas quia non.</p>
<p>Consequatur quod ut. Dicta deserunt harum. Minima sit illo.</p>
<p>Ut libero dolores. Dolor ullam sit. Quasi sint facilis.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-tpa-wgs-assembly</h1>
<p>Omnis quae et. Sed voluptate illo. Nemo asperiores odit.</p>
<p>Sit iure nulla. Quasi nemo provident. Perferendis dicta placeat.</p>
<p>Dolorem architecto non. Et inventore earum. Iste doloribus officia.</p>
<p>At et sunt. Totam quibusdam voluptatem. Enim rem incidunt.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-tpa-wgs-assembly</h1>
<p>Ea modi et. Aliquid nam voluptatum. Deserunt perferendis aut.</p>
<p>Nisi hic dolor. Distinctio odit incidunt. Quibusdam ut laudantium.</p>
<p>Quas saepe dolore. Ipsum nobis libero. Doloribus voluptate voluptas.</p>
<p>Laboriosam inventore placeat. Totam quia quo. Dolor neque nisi.</p>
`,ja:null}}]},"q3-tpa-tsa-assembly->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-tpa-tsa-assembly</h1>
<p>Illo ex non. Cum facilis tempore. Laboriosam architecto recusandae.</p>
<p>Voluptatem dolores ea. Eum ratione sed. Deleniti est cum.</p>
<p>Voluptas aut molestias. Illo quis neque. Omnis temporibus vero.</p>
<p>Facilis mollitia laboriosam. Aut quae et. Impedit minima et.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-tpa-tsa-assembly</h1>
<p>Voluptas incidunt et. Natus corporis aut. Quo a quos.</p>
<p>Ratione animi et. Quis earum corporis. Nulla molestias ratione.</p>
<p>Omnis voluptatem incidunt. Quas reiciendis est. Voluptas aut libero.</p>
<p>Quia eum aut. Molestias rerum impedit. Dolore asperiores quia.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-tpa-tsa-assembly</h1>
<p>A quisquam sapiente. Sint voluptate consequatur. Autem aut ex.</p>
<p>Exercitationem aliquid quia. Officiis rerum et. A natus esse.</p>
<p>Dolorem nisi molestias. Laudantium possimus aliquid. Quia et rem.</p>
<p>Enim fugiat suscipit. Est iure laborum. Error cupiditate praesentium.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-tpa-tsa-assembly</h1>
<p>Officia quo sit. Sapiente molestias ut. Enim a fugit.</p>
<p>Dolores ut consequuntur. Tenetur a quia. Doloribus aliquid animi.</p>
<p>Nobis sit ratione. Ad quasi reprehenderit. Minus dignissimos nihil.</p>
<p>Iusto at eveniet. Voluptas dolores ipsam. Sed praesentium minima.</p>
`,ja:null}}]},"q3-tpa-tls-assembly->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-tpa-tls-assembly</h1>
<p>Laboriosam ad et. Iusto quis quod. Voluptate consectetur et.</p>
<p>Natus et fugit. Modi reiciendis accusamus. Blanditiis saepe in.</p>
<p>Aut voluptates ut. Sit placeat tempore. Incidunt ullam atque.</p>
<p>Id rerum nulla. Temporibus soluta aut. Est dolores qui.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-tpa-tls-assembly</h1>
<p>Itaque maxime quis. Aut error aliquid. Non eligendi perspiciatis.</p>
<p>A autem quam. Laborum unde impedit. Reiciendis numquam odio.</p>
<p>Cum molestiae quaerat. Sapiente placeat dolorum. Eos ipsum qui.</p>
<p>Eius eos laborum. Ut eum reprehenderit. Quam placeat consequatur.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-tpa-tls-assembly</h1>
<p>Quis qui et. Possimus quo sequi. Ad quia maiores.</p>
<p>Fugiat enim in. Autem explicabo voluptatem. Nihil numquam in.</p>
<p>Et optio ullam. Quo et voluptas. Quia voluptatem velit.</p>
<p>Consequatur excepturi vel. Et aut recusandae. Natus aut facilis.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-tpa-tls-assembly</h1>
<p>Ipsa et quibusdam. Laudantium voluptate ullam. Sint laboriosam sed.</p>
<p>Repudiandae molestias maxime. Eum earum quibusdam. Quia ullam adipisci.</p>
<p>Totam omnis nihil. Sit et ipsam. Sit enim nemo.</p>
<p>Et aut a. Iste sit alias. Quisquam exercitationem ad.</p>
`,ja:null}}]},"q3-variation-nonhumsv->g-dgva":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit non-human structural variations (&gt;50bp) to the <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a> of <a href="https://www.ebi.ac.uk">EBI</a>. The NCBI <a href="https://www.ncbi.nlm.nih.gov/dbvar">dbVar</a> no longer accepts submissions of non-human organisms variations.</p>
`,ja:null}},{title:{en:"DGVa",ja:null},body:{en:`<p>Submit non-human structural variations (&gt;50bp) to <a href="https://www.ebi.ac.uk/eva/">EVA</a> (former DGVa) of <a href="https://www.ebi.ac.uk">EBI</a>. EVA accepts all types of structural variations in any species (<a href="https://www.ebi.ac.uk/eva/?Submit-Data">instructions</a>).</p>
`,ja:null}}]},"q3-variation-nonhumsnp->g-eva":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit non-human short genetic variations (&le;50bp) to the <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a> of <a href="https://www.ebi.ac.uk">EBI</a>. The NCBI <a href="https://www.ncbi.nlm.nih.gov/snp/">dbSNP</a> no longer accepts submissions of non-human organisms variations.</p>      ja:
`}},{title:{en:"EVA",ja:null},body:{en:`<p>Submit non-human short genetic variations (&le;50bp) to <a href="https://www.ebi.ac.uk/eva/">EVA</a> of <a href="https://www.ebi.ac.uk">EBI</a>. EVA accepts all types of precise short genetic variations in any species (<a href="https://www.ebi.ac.uk/eva/?Submit-Data">instructions</a>).</p>
`,ja:null}}]},"q1-yes->g-jga":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit human genetic and phenotypic data requiring controlled-access to the <a href="/jga/submission-step-e.html">Japanese Genotype-phenotype Archive (JGA)</a>. You need to apply a data submission application to the <a href="https://humandbs.biosciencedbc.jp/en/data-submission">NBDC</a> and the application needs to be approved before submitting the data to JGA. Regarding submission and sharing of human data, see the <a href="/policies-e.html#submission-of-human-data">Data submission of human subjects research</a>.</p>
<ol>
  <li>Apply a data submission application in the <a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC application system</a>.</li>
  <li>After the data submission application is approved by NBDC, upload metadata and data files to JGA.</li>
</ol>
`,ja:null}},{title:{en:"NBDC",ja:null},body:{en:`<p>Apply a data submission application in the <a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC application system</a>. A D-way account is necessary for the data submission application. If you do not have an account, <a href="/account-e.html">create a D-way account</a> before the application.</p> See the <a href="/jga/submission-step-e.html">JGA submission steps</a> and the <a href="https://humandbs.biosciencedbc.jp/en/data-submission">NBDC Data Submission</a> web pages.</p>
<ol>
  <li>Apply a data submission application in the <a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC application system</a>.</li>
  <li>After the data submission application is approved by NBDC, a JGA submission ID will be created. Upload metadata and data files to the submission directory of the JGA server.</li>
</ol>
`,ja:null}},{title:{en:"JGA",ja:null},body:{en:`<p>After the data submission application is approved by NBDC, prepare metadata and data files and upload them to JGA by sftp. The sftp data transfer is authenticated by a key pair, generate a public and private key pair and <a href="/account-e.html#enable-dra-submission-in-account">register the public key to your D-way account</a> for data transfer.</p>
<ul>
  <li>Enter metadata in the <a href="/jga/submission-step-e.html#create-metadata-using-excel">JGA metadata excel file</a>.</li>
  <li>Prepare <a href="/jga/submission-e.html">data files</a>.</li>
  <li>Upload the metadata and data files to the submission directory of the JGA server by sftp (<a href="/jga/submission-e.html">instructions</a>).</li>
</ul>
<p>If the submission is successfully registered, <a href="/jga/submission-e.html#submission">JGA accessions</a> will be issued.</p>
`,ja:null}}]},"q2-proteomics->g-jpost":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit proteomics data to the <a href="https://repository.jpostdb.org/">Japan Proteome Standard Repository (jPOSTrepo)</a>. jPOSTrepo is a public repository for datasets obtained from proteomics experiments and a member of <a href="http://www.proteomexchange.org/">ProteomeXchange Consortium</a>. jPOSTrepo is operated by the <a href="https://repository.jpostdb.org/about">jPOST team</a> and not by Bioinformation and DDBJ Center.</p>
`,ja:null}},{title:{en:"jPOST",ja:null},body:{en:`<p>Submit your proteomics data to <a href="https://repository.jpostdb.org/">jPOSTrepo</a> (<a href="https://repository.jpostdb.org/help">instructions</a>). Please note that jPOSTrepo is operated by the <a href="https://repository.jpostdb.org/about">jPOST team</a> consisting of <a href="http://dbcls.rois.ac.jp/index-en.html">DBCLS</a> and Japanese universites and not by Bioinformation and DDBJ Center.</p>
`,ja:null}}]},"q3-variation-humsnp->g-jvarsnp":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit human short genetic variations (&le;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Short genetic variation data of JVar (JVar-SNP) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/snp/">dbSNP</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a>.</p>
<p>JVar is under construction.</p>
`,ja:null}},{title:{en:"JVar-SNP",ja:null},body:{en:`<p>Submit human short genetic variations (&le;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Short genetic variation data of JVar (JVar-SNP) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/snp/">dbSNP</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a>.</p>
<p>JVar is under construction.</p>
`,ja:null}}]},"q3-variation-humsv->g-jvarsv":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit human structural variations (&gt;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Structural variation data of JVar (JVar-SV) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/dbvar/">dbVar</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA, former DGVa)</a>.</p>
<p>JVar is under construction.</p>
`,ja:null}},{title:{en:"JVar-SV",ja:null},body:{en:`<p>Submit human structural variations (&gt;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Structural variation data of JVar (JVar-SV) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/dbvar/">dbVar</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA, former DGVa)</a>.</p>
<p>JVar is under construction.</p>
`,ja:null}}]},"q2-metabolomics->g-mb":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metabolomics data to <a href="/metabobank/index-e.html">MetaboBank</a>.</p>
`,ja:null}},{title:{en:"MetaboBank",ja:null},body:{en:`<p>Submit metabolomics data to <a href="/metabobank/index-e.html">MetaboBank</a>. You need to register your project to <a href="/bioproject/submission-e.html">BioProject</a> and your samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=FunctionalGenomics&definition=definition">functional genomics package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Please contact the <a href="/contact-ddbj-e.html">MetaboBank team</a> before submission.</p>
`,ja:null}}]},"q4-genome-plasmid-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the plasmid sequences.</p>
`,ja:null}}]},"q4-genome-organelle-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the organelle sequences.</p>
`,ja:null}}]},"q4-genome-virus-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the virus sequences.</p>
`,ja:null}}]},"q4-genome-plasmid-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the plasmid sequences.</p>
`,ja:null}}]},"q4-genome-organelle-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the organelle sequences.</p>
`,ja:null}}]},"q4-genome-virus-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the virus sequences.</p>
`,ja:null}}]},"q4-transcriptome-other-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the RNA sequences.</p>
`,ja:null}}]},"q3-tpa-experimental->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tpa-e.html">Third PArty data (TPA)</a> are submitted to INSDC as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.</p>
<p><a href="/ddbj/tpa-table-e.html#subcategories">TPA:experimental</a> describes records that include functional annotation derived at least in part from peer-reviewed wet-lab experimental investigation.</p>
<p>The following data are NOT acceptable in TPA:
<ul>
  <li>Microsatellites and related types of repeat regions.</li>
  <li>Annotation that has arisen from an automated tool, such as GeneMark, tRNA scan, or ORF finder, where no further evidence, experimental or otherwise, is presented for the annotation.</li>
  <li>Annotation from in vivo, in vitro, or in silico experimentation that will not be submitted for publication in a peer-reviewed journal.</li>
</ul></p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: q3-tpa-experimental</h1>
<p>Rerum est non. Suscipit mollitia nulla. Consectetur assumenda itaque.</p>
<p>Labore nulla a. Alias porro nisi. Ut voluptas minima.</p>
<p>Aut ut eius. Iusto ducimus dolor. Et aut iure.</p>
<p>Error minima cumque. Voluptas quidem deserunt. Ipsum velit eligendi.</p>
`,ja:null}}]},"q3-tpa-inferential->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-tpa-inferential</h1>
<p>Quae dolor sed. Eos harum culpa. Voluptates et cumque.</p>
<p>Nihil quia repellat. Error possimus illo. Voluptas quis magnam.</p>
<p>Voluptas dolores iste. Nobis adipisci debitis. Ex vel inventore.</p>
<p>Nam doloribus ad. Placeat unde sint. Cupiditate quia ea.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: q3-tpa-inferential</h1>
<p>Quod atque saepe. Rerum in rerum. Commodi nostrum aut.</p>
<p>Excepturi voluptas officiis. Ut esse ex. Architecto voluptatem recusandae.</p>
<p>Suscipit aliquid dolorem. Repellat aut modi. Dolorem quidem quis.</p>
<p>Eaque et occaecati. Nemo quisquam qui. Asperiores veritatis iure.</p>
`,ja:null}}]}};const T=I;function C(a){const e=T[a];if(!e)throw new Error(`goal not found: id=${a}`);return e}const N=y`:host{--max-height:calc(100vh - 2em)}.container{display:grid;grid-template:"header     header" auto "nav        content" 1fr/min-content 1fr;max-height:var(--max-height)}.container>h1{grid-area:header}.container>nav{grid-area:nav;text-align:center}.container>main{grid-area:content;overflow:auto}.space-between{display:flex;justify-content:space-between}.no-margin-around-y>:first-child{margin-top:0;padding-top:0}.no-margin-around-y>:last-child{margin-bottom:0;padding-bottom:0}.tabs>a{display:block;padding:calc(.5em / 1.2) calc(1.75em / 1.2);border-style:solid;border-color:transparent;border-width:3px 0;transition:background-color .2s,border-color .2s}.tabs>a:hover:not(.active){background-color:#eee}.tabs>a.active{border-bottom-color:#ff7370;text-decoration:none;color:inherit;font-weight:700}svg.icon{height:1em;width:1em;vertical-align:-.1em}`;var _=Object.defineProperty,G=Object.getOwnPropertyDescriptor,o=(a,e,i,s)=>{for(var n=s>1?void 0:s?G(e,i):e,m=a.length-1,h;m>=0;m--)(h=a[m])&&(n=(s?h(e,i,n):h(n))||n);return s&&n&&_(e,i,n),n},g=(a,e,i)=>{if(!e.has(a))throw TypeError("Cannot "+i)},j=(a,e,i)=>(g(a,e,"read from private field"),i?i.call(a):e.get(a)),E=(a,e,i)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,i)},J=(a,e,i,s)=>(g(a,e,"write to private field"),s?s.call(a,i):e.set(a,i),i),l;let t=class extends w(q){constructor(){super(...arguments);E(this,l,void 0)}get section(){return j(this,l)||this.goal?.sections[0]}set section(a){const e=j(this,l);J(this,l,a),this.requestUpdate("section",e)}get previousSection(){const{goal:a,section:e}=this;if(!a||!e)return;const i=a.sections.indexOf(e);return i<=0?void 0:a.sections[i-1]}get nextSection(){const{goal:a,section:e}=this;if(!a||!e)return;const i=a.sections.indexOf(e);return i===-1||i>=a.sections.length?void 0:a.sections[i+1]}render(){const{goal:a}=this;return a?r`<div class="container border fade"><h1 class="box bg-primary my-0 font-large">${V} ${u("Submission Instructions")}</h1><nav class="box tabs font-heading font-large">${a.sections.map(e=>r`<a @click="${this.selectSection(e)}" class="${this.section===e?"active":""}" href="#">${this.localize(e.title)}</a>`)}</nav><main ${k()} class="box stack">${this.sectionTemplate()}</main></div>`:""}sectionTemplate(){if(!this.section)return"";const{body:a}=this.section;return r`<div class="no-margin-around-y">${P(this.localize(a))}</div><nav class="space-between"><div>${this.sectionLinkTemplate(`\xAB ${u("Prev")}`,this.previousSection)}</div><div>${this.sectionLinkTemplate(`${u("Next")} \xBB`,this.nextSection)}</div></nav>`}sectionLinkTemplate(a,e){return e?r`<a @click="${this.selectSection(e)}" href="#">${a}</a>`:""}selectSection(a){return e=>{e.preventDefault(),this.section=a}}};l=new WeakMap,t.styles=[D,N],o([B({converter:O})],t.prototype,"goal",2),o([d()],t.prototype,"section",1),o([d()],t.prototype,"previousSection",1),o([d()],t.prototype,"nextSection",1),t=o([v(),R("submission-wizard-goal")],t);function O(a){return a?C(a):void 0}const V=A`<svg class="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 9.75V16.1786C39 18.2496 32.2843 19.9286 24 19.9286C15.7157 19.9286 9 18.2496 9 16.1786V9.75C9 7.67893 15.7157 6 24 6C32.2843 6 39 7.67893 39 9.75ZM9.62114 19.7144C11.4651 21.2634 17.2049 22.393 24 22.393C30.7951 22.393 36.5349 21.2634 38.3789 19.7144C38.783 20.0538 39 20.4134 39 20.7857V27.2143C39 29.2853 32.2843 30.9643 24 30.9643C15.7157 30.9643 9 29.2853 9 27.2143V20.7858C9.00002 20.4135 9.21703 20.0538 9.62114 19.7144ZM24 33.6786C17.205 33.6786 11.4652 32.549 9.62118 31C9.21703 31.3395 9 31.6991 9 32.0714V38.5C9 40.5711 15.7157 42.25 24 42.25C32.2843 42.25 39 40.5711 39 38.5V32.0714C39 31.6991 38.783 31.3395 38.3788 31C36.5348 32.549 30.795 33.6786 24 33.6786ZM32.3333 37.3333C32.3333 37.9777 31.811 38.5 31.1667 38.5C30.5223 38.5 30 37.9777 30 37.3333C30 36.689 30.5223 36.1667 31.1667 36.1667C31.811 36.1667 32.3333 36.689 32.3333 37.3333ZM35.8333 37.3333C36.4777 37.3333 37 36.811 37 36.1667C37 35.5223 36.4777 35 35.8333 35C35.189 35 34.6667 35.5223 34.6667 36.1667C34.6667 36.811 35.189 37.3333 35.8333 37.3333Z" fill="#333333"/></svg>`;export{t as SubmissionWizardGoal};
