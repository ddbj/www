import{T as c,b as S,r as q,L as y,p as l,m as p,s as v,e as w,t as d,y as D,a as A,l as B,n as R}from"./submission-wizard-1685805f.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},b=i=>(...e)=>({_$litDirective$:i,values:e});class f{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,t){this._$Ct=e,this._$AM=a,this._$Ci=t}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends f{constructor(e){if(super(e),this.it=c,e.type!==M.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===c||e==null)return this.vt=void 0,this.it=e;if(e===S)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const a=[e];return a.raw=a,this.vt={_$litType$:this.constructor.resultType,strings:a,values:[]}}}h.directiveName="unsafeHTML",h.resultType=1;const P=b(h);class E extends f{render(){}update(e){e.element.scrollTo({top:0,left:0,behavior:"instant"})}}var x=b(E),I={"q5-genome-eukaryote-complete-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
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
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
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
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
  <li>Submit complete genome sequences of prokaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes the DRA and genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit complete genome sequences (non-WGS) of prokaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will shorten submission processing time by annotating prokaryotic genomes and generating submission-ready files.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix.</li>
  <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the complete genome sequences of prokaryotes.</p>
`,ja:null}}]},"q4-metagenome-binned-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Binned metagenome assemblies asserted to known taxonomies (Binned metagenome) should be submitted to <a href="/dra/submission-e.html#Analysis">DRA Analysis.</a>. The raw sequence reads from which the binned metagenomes are derived should be submitted to <a href="/dra/submission-e.html">DRA Run.</a></p>
<p>Register a BioProject and BioSamples. Samples for raw metagenomic sequencing reads and those for binned metagenoms are necessary.</p>
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register two samples for unassembled raw reads and binned metagenomes.</p>
<p>1. Register a sample for unassembled DRA raw reads to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
<p>2. Register virtual samples for binned metagenomes to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the binned metagenome submission to DRA Analysis. The binned metagenome sample is derived from the metagenomic sample (1) and <a href="/ddbj/metagenome-assembly-e.html#binned-metagenome-biosample">several attributes need to be provided</a>.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Submit binned metagenome assemblies derived from the raw sequence data in fasta/bam files to the DRA Analysis (Analysis type = "De Novo Assembly"). Include information of analysis software used and organism bin in the description. Submit the Analysis along with the Run which had been registered for the raw reads. Please note that Analysis data are not shared with NCBI/ENA.</p>
`,ja:null}}]},"q4-metagenome-tls-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> is a large scale targeted sequencing project for a single gene locus such as 16S rRNA from multiple organisms.</p>
<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}}]},"q4-metagenome-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw metagenomic sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q4-transcriptome-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-transcriptome-other-dra</h1>
<p>Iure nulla enim. Fuga doloremque sunt. Laudantium dolorem tempora.</p>
<p>Error eius ab. Repudiandae dolore expedita. Est ab impedit.</p>
<p>Rerum id adipisci. Ut fuga repellendus. Nulla rerum quaerat.</p>
<p>Quasi atque aut. Sed aspernatur et. A accusamus atque.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dra</h1>
<p>At hic reprehenderit. Rerum dolorem ut. Molestiae doloremque nulla.</p>
<p>Hic dolor voluptatem. Est et quod. Error possimus autem.</p>
<p>Omnis amet quod. Non reprehenderit odio. Tempora autem aspernatur.</p>
<p>Distinctio quo qui. Sit numquam temporibus. Dolor autem laudantium.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dra</h1>
<p>Dolores quisquam qui. Aut corrupti voluptatem. Iusto itaque illo.</p>
<p>Facere velit et. Quo necessitatibus unde. Aut quisquam quia.</p>
<p>Aspernatur ad aperiam. Exercitationem iste laboriosam. Eos expedita repellendus.</p>
<p>Tempore et labore. Et dicta est. Earum commodi error.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dra</h1>
<p>Vitae ab enim. Animi veniam maxime. Delectus ipsa vel.</p>
<p>Esse quae quis. Necessitatibus voluptas reprehenderit. Quis id ipsum.</p>
<p>Et illo veniam. Dolore qui quia. Aut soluta tempora.</p>
<p>Sequi aperiam excepturi. Veniam sapiente et. Incidunt illo repellendus.</p>
`,ja:null}}]},"q3-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-other-dra</h1>
<p>Atque voluptatem dolor. Minus commodi quisquam. Quo soluta non.</p>
<p>Occaecati sunt ut. Et enim laudantium. Amet necessitatibus facilis.</p>
<p>Inventore accusantium eaque. Nemo dolores ut. Id voluptatem animi.</p>
<p>Voluptas omnis et. Quas dolor totam. Pariatur inventore ab.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-other-dra</h1>
<p>Ea amet quos. Nostrum voluptatem quis. Aspernatur illo dolor.</p>
<p>Et doloribus placeat. Ut expedita eligendi. Error est incidunt.</p>
<p>Eum alias magnam. Esse explicabo libero. Fugiat doloremque ut.</p>
<p>Maxime exercitationem omnis. Autem veniam beatae. Vel fugiat sunt.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-other-dra</h1>
<p>Ipsa molestiae non. Amet porro voluptatem. Fugiat et in.</p>
<p>Ut vel et. Nam consequatur provident. Cumque debitis molestias.</p>
<p>Eum et vel. Eaque distinctio mollitia. Placeat nemo sunt.</p>
<p>Ut suscipit inventore. Numquam est voluptas. Consequatur voluptas dolorem.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<h1>data-from: q3-other-dra</h1>
<p>Dolores amet dolor. Magni porro necessitatibus. Laborum dolores ipsam.</p>
<p>Eveniet ut modi. Blanditiis sint ipsum. Aut quam quis.</p>
<p>Eos qui qui. Vel recusandae dolore. Omnis nostrum aut.</p>
<p>Dolorem debitis facilis. Occaecati qui labore. Et facilis deserunt.</p>
`,ja:null}}]},"q2-fgngs->g-bp-bs-dra-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>For functional genomics data (gene expression, gene regulation, epigenetics or genotyping) by sequencing, submit raw data to the <a href="/dra/submission-e.html">Sequence Read Archive (DRA)</a> and processed data to the <a href="/gea/submit-sequence-e.html">Genomic Expression Archive (GEA)</a>. A BioProject and BioSamples should be registered for the DRA and GEA submissions. Both BioProject and BioSample submissions can be created during the DRA submission. Sequencing-based functional genomics data are accepted in the <a href="/gea/metadata-e.html">MAGE-TAB</a> format in compliance with the <a href="https://fairsharing.org/10.25504/FAIRsharing.a55z32">MINSEQE</a> guideline.</p>
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
`,ja:null}}]},"q3-transcriptome-expression->g-bp-bs-dra-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-transcriptome-expression</h1>
<p>Dicta quia blanditiis. Et ducimus neque. Quod repellendus aut.</p>
<p>Magnam aut excepturi. Tenetur et doloremque. Et harum nihil.</p>
<p>Dolor dolor rerum. Quidem illo magni. Recusandae occaecati ad.</p>
<p>Inventore ratione a. Magni laudantium et. In adipisci consectetur.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-transcriptome-expression</h1>
<p>Voluptatibus sapiente officiis. Ut veritatis dolor. Commodi expedita dolore.</p>
<p>Minima non laudantium. Aut voluptatem sed. Illum eum suscipit.</p>
<p>Sint voluptatem eos. Occaecati alias sed. Aliquam atque assumenda.</p>
<p>Laudantium aut molestias. Rem quibusdam dolore. Natus dolore autem.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-transcriptome-expression</h1>
<p>At facilis consectetur. Quos esse saepe. Id ipsum quo.</p>
<p>Blanditiis molestiae magni. Earum in odit. Voluptatibus velit quidem.</p>
<p>Aut accusamus quos. Voluptatem dolores odio. Optio eos officia.</p>
<p>Incidunt delectus nesciunt. Recusandae et ratione. Corrupti error voluptas.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<h1>data-from: q3-transcriptome-expression</h1>
<p>Et enim dicta. Rerum quaerat aut. Ab repudiandae et.</p>
<p>Non sunt odit. Voluptatibus eligendi qui. Consectetur magni quia.</p>
<p>Dolores aut id. Vel aut ratione. Sit enim quia.</p>
<p>In officiis sit. Ex qui consequuntur. Architecto exercitationem et.</p>
`,ja:null}},{title:{en:"GEA",ja:null},body:{en:`<h1>data-from: q3-transcriptome-expression</h1>
<p>Non deserunt hic. Voluptatibus non tempora. Tenetur quo esse.</p>
<p>Tempore dolor quam. Sed animi occaecati. Nihil quia est.</p>
<p>Sint ipsum est. Recusandae non provident. Qui incidunt quasi.</p>
<p>Voluptatum autem at. Dolores maxime ut. Iste est dolor.</p>
`,ja:null}}]},"q5-genome-eukaryote-complete-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and a BioSample during the DRA submission or before the DRA and genome submissions.</li>
  <li>Submit finished level genomic sequences of eukaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit finished level genomic sequences (non-WGS) of eukaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
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
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the finished level genome sequencess.</p>
`,ja:null}}]},"q5-genome-eukaryote-draft-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and a BioSample during the DRA submission or before the DRA and draft genome submissions.</li>
  <li>Submit draft genome sequences of eukaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and draft genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of eukaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
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
  <li>Register a BioProject and a BioSample during the DRA submission or before the DRA and draft genome submissions.</li>
  <li>Submit draft genome sequences of prokaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and draft genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of prokaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission.</p>
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
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
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
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}}]},"q4-metagenome-mag-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A highest quality representative binned assembly (Metagenome-Assembled Genome, MAG) predicted to be derived from taxonomically defined organisms should be submitted to DDBJ through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as genome entries of <a href="/ddbj/env-e.html">ENV</a> division.</p>
<ul>
  <li>Register unassembled raw reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and BioSamples. Two samples, one is for raw metagenomic sequencing reads and the other is for a MAG are necessary.</li>
  <li>Submit MAG through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
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
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit the MAG as a genome entry of <a href="/ddbj/env-e.html">ENV division</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
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
`,ja:null}}]},"q4-metagenome-tls-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> is a large scale targeted sequencing project for a single gene locus such as 16S rRNA from multiple organisms. Submit TLS data to DDBJ through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a BioProject and a BioSample during or before the DRA submission.</li>
  <li>Submit <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> sequences through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the TLS submission.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit the <a href="/ddbj/tls-e.html">TLS</a> data through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a BioSample that have been registered for the TLS submission.</li>           
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/tls-e.html">Accession numbers with a 4-letter prefix and 8 digits</a> will be assigned to the TLS sequences.</p>
`,ja:null}}]},"q4-metagenome-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metagenomic, environmental sequences to DDBJ through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</p>
<ul>
  <li>Register a BioProject and a BioSample for metagenomic sequences.</li>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Submit metagenomic sequences through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</li>
</ul>         
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes raw DRA data and assembled sequences. The BioProject submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit metagenomic sequences as <a href="/ddbj/env-e.html">ENV division</a> sequences through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
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
`,ja:null}}]},"q3-transcriptome-tsa->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-transcriptome-tsa</h1>
<p>Nihil et libero. Aut quia enim. Doloremque itaque nihil.</p>
<p>Alias aliquid rerum. Odio quo corporis. Sit vel praesentium.</p>
<p>Enim quos odit. Aliquam unde quod. Et quo fugiat.</p>
<p>Ullam earum illum. Et est ea. Debitis voluptate omnis.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-transcriptome-tsa</h1>
<p>Fuga at non. Veritatis debitis et. Eos inventore sit.</p>
<p>Labore excepturi possimus. Vel et vero. Impedit quo distinctio.</p>
<p>Quidem deleniti cumque. Aut sequi quibusdam. Nam repudiandae ipsa.</p>
<p>Non dicta quis. Tempore eum perspiciatis. Omnis quae ut.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-transcriptome-tsa</h1>
<p>Mollitia est quo. Omnis nam est. Voluptate modi porro.</p>
<p>Dolorum provident rerum. Quod numquam nesciunt. Quisquam exercitationem sed.</p>
<p>Neque voluptatum enim. Vero minima omnis. Possimus excepturi consectetur.</p>
<p>Commodi aut sapiente. Placeat aut quo. Sed fuga qui.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<h1>data-from: q3-transcriptome-tsa</h1>
<p>Aliquid iste rerum. Excepturi in et. Facilis veniam mollitia.</p>
<p>Ipsa in aut. Blanditiis sequi harum. Sit eum et.</p>
<p>Voluptatibus qui dolore. Aut voluptatibus aut. Suscipit veniam dolor.</p>
<p>Provident deserunt ea. Qui eaque ut. Consequatur libero voluptas.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-transcriptome-tsa</h1>
<p>Sapiente tenetur cupiditate. Aliquid ipsa tenetur. Sunt nesciunt laborum.</p>
<p>Quod dolore provident. Labore qui recusandae. Exercitationem voluptate ipsa.</p>
<p>Itaque et consequuntur. Provident qui praesentium. Id qui ipsam.</p>
<p>Voluptatem veritatis vel. Cum sunt ex. Iure cum maiores.</p>
`,ja:null}}]},"q4-transcriptome-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-transcriptome-other-dramss</h1>
<p>Voluptate velit rerum. Animi ut vero. At assumenda quae.</p>
<p>Accusantium dolores praesentium. Ex nisi est. Enim quos veniam.</p>
<p>Qui sequi aut. Voluptatem in doloremque. Accusamus perferendis aspernatur.</p>
<p>Vel expedita quia. Voluptatem sit expedita. Sed blanditiis consequatur.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dramss</h1>
<p>Nesciunt id ad. Molestias expedita eos. Qui distinctio neque.</p>
<p>Atque ea aliquam. Ipsum fugiat nobis. Minima ut ut.</p>
<p>Nisi aut doloremque. Ducimus non doloremque. Expedita maxime qui.</p>
<p>Est officiis reiciendis. Laboriosam accusantium excepturi. Ut et at.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dramss</h1>
<p>Eaque vero ducimus. Est aliquam dolor. Quibusdam autem velit.</p>
<p>Dolores doloribus hic. Temporibus quibusdam earum. Quaerat aliquid ab.</p>
<p>Similique aspernatur et. Alias omnis quibusdam. Omnis corrupti nisi.</p>
<p>Ipsa in tempore. Optio cumque autem. Animi amet illum.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dramss</h1>
<p>At debitis molestias. Est ut adipisci. Quod sit beatae.</p>
<p>Dolores impedit voluptatem. Qui magnam unde. Quis excepturi porro.</p>
<p>Illo beatae incidunt. Repudiandae pariatur tenetur. At doloremque tempore.</p>
<p>Vero fugiat nam. Adipisci inventore sed. Omnis est quidem.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-dramss</h1>
<p>Quisquam dolores molestiae. Et corporis et. Ullam alias cumque.</p>
<p>Omnis mollitia at. Debitis et repellendus. Voluptate et qui.</p>
<p>Unde est quia. Beatae quis consequatur. Sequi unde vel.</p>
<p>Ab neque officiis. Dolore fugit magni. Velit et mollitia.</p>
`,ja:null}}]},"q3-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-other-dramss</h1>
<p>Magni nisi minus. Consectetur repellat voluptas. Et rerum aperiam.</p>
<p>Sequi deleniti quaerat. Qui officiis non. Consequuntur dolores laborum.</p>
<p>Excepturi assumenda natus. Hic velit asperiores. Blanditiis ratione eveniet.</p>
<p>Assumenda nostrum quisquam. Fuga eum recusandae. Qui pariatur et.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-other-dramss</h1>
<p>Qui distinctio atque. Ut dolores qui. At quasi et.</p>
<p>Ullam minima ratione. Et ea nam. Explicabo quis eaque.</p>
<p>Quasi repellat quia. Sunt amet dolorem. Excepturi non sint.</p>
<p>Inventore rerum praesentium. Rerum voluptas est. Nihil perspiciatis voluptatem.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-other-dramss</h1>
<p>Ducimus quo porro. Quis consequuntur voluptatem. Et iste quod.</p>
<p>Dolorem illum commodi. Accusantium quia incidunt. Nesciunt non quibusdam.</p>
<p>Corporis perspiciatis quibusdam. Consequatur modi veritatis. Quod veritatis nihil.</p>
<p>Modi incidunt id. Unde sit ad. Quos aspernatur est.</p>
`,ja:null}},{title:{en:"DRA",ja:null},body:{en:`<h1>data-from: q3-other-dramss</h1>
<p>Magni illo repellat. Corrupti tenetur est. Labore culpa at.</p>
<p>Corrupti incidunt ut. Velit nesciunt exercitationem. Id nostrum perferendis.</p>
<p>Officiis modi perspiciatis. Eligendi aut quo. Et excepturi voluptas.</p>
<p>Est culpa eos. Ducimus neque ea. Qui harum iure.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-other-dramss</h1>
<p>Architecto voluptatem et. Soluta tenetur incidunt. Qui quasi qui.</p>
<p>Adipisci dolores dolores. Minus sint aut. Omnis quia debitis.</p>
<p>Et sed aliquid. Dignissimos quos quibusdam. Earum quo cupiditate.</p>
<p>Doloremque laudantium omnis. Voluptas quis consequatur. Pariatur at distinctio.</p>
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
  <li>Register a BioProject and a BioSample before the genome submission.</li>
  <li>Submit finished level genomic sequences of eukaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit finished level genomic sequences (non-WGS) of eukaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
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
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the finished level geonme sequencess.</p>       
`,ja:null}}]},"q5-genome-eukaryote-draft-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a BioProject and a BioSample during or before the draft genome submission.</li>
  <li>Submit draft genome sequences of eukaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of eukaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
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
  <li>Register a BioProject and a BioSample before the genome submission.</li>
  <li>Submit complete genome sequences of prokaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit complete genome sequences (non-WGS) of prokaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will shorten submission processing time by annotating prokaryotic genomes and generating submission-ready files.</p>
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
  <li>Register a BioProject and a BioSample before the draft genome submissions.</li>
  <li>Submit draft genome sequences of prokaryotes through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<p>Submit draft genome sequences of prokaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix.</li>
 <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:null}}]},"q4-metagenome-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-metagenome-other-mss</h1>
<p>Porro dicta itaque. In doloribus cum. Praesentium magni molestiae.</p>
<p>Et reprehenderit aspernatur. Consequatur porro et. Commodi consectetur et.</p>
<p>Illum similique fuga. Quasi cum accusamus. Voluptatem nihil sit.</p>
<p>Voluptas libero odit. Autem delectus quis. Itaque culpa repellendus.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q4-metagenome-other-mss</h1>
<p>Provident tempore officiis. Vel dolores adipisci. Minus in recusandae.</p>
<p>Aspernatur esse vel. Amet pariatur nam. Voluptates quo perferendis.</p>
<p>Quisquam voluptates iusto. Harum perferendis explicabo. Rem sed ullam.</p>
<p>Eum et fugiat. Eveniet animi laboriosam. Earum molestiae veritatis.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q4-metagenome-other-mss</h1>
<p>Neque est dolorem. Maiores eaque id. Nulla ipsa accusamus.</p>
<p>Impedit cum expedita. Ullam vero qui. Optio incidunt illum.</p>
<p>Eaque voluptate nemo. Ad pariatur voluptatem. Exercitationem praesentium cupiditate.</p>
<p>Libero assumenda nulla. Ratione amet eaque. Eum fugiat amet.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q4-metagenome-other-mss</h1>
<p>Itaque delectus sed. Vel blanditiis autem. Quia consequatur quis.</p>
<p>Consequuntur aliquid eos. Vero voluptatem et. Architecto ex iusto.</p>
<p>Perspiciatis omnis rerum. Quia explicabo autem. Qui magni quia.</p>
<p>Voluptates magni dolorum. At voluptatum et. Consequatur praesentium vitae.</p>
`,ja:null}}]},"q3-transcriptome-est->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-transcriptome-est</h1>
<p>Eveniet expedita pariatur. Assumenda earum magnam. Cum eum est.</p>
<p>Beatae possimus iste. Animi atque laboriosam. Voluptatem enim repellendus.</p>
<p>Molestiae numquam illum. Eos recusandae aliquid. Tenetur molestiae illo.</p>
<p>Est rem et. Sed fuga voluptatem. Cupiditate est consequuntur.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-transcriptome-est</h1>
<p>Voluptatem ut velit. Sit in placeat. Consectetur alias vitae.</p>
<p>Tenetur rerum officia. Eos voluptate est. Quis sunt ducimus.</p>
<p>Fugit qui dolores. Et non ratione. Eos hic animi.</p>
<p>Dolores dolorum molestias. Culpa iure autem. Quo consequatur eum.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-transcriptome-est</h1>
<p>Saepe eius placeat. Quia voluptas non. Magni fugiat qui.</p>
<p>Autem nulla architecto. Maiores nesciunt qui. Repellendus fugiat sed.</p>
<p>Ratione maxime ducimus. Deleniti perferendis blanditiis. Voluptatem magni atque.</p>
<p>Voluptatibus necessitatibus et. Beatae dolores eum. Quos ipsa est.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-transcriptome-est</h1>
<p>Minus mollitia beatae. Praesentium architecto consequatur. Reiciendis rerum ab.</p>
<p>Quo et autem. Et dolorem ab. Non reiciendis non.</p>
<p>Sequi aut minus. Et quo quidem. Saepe iste tenetur.</p>
<p>Ducimus nemo perferendis. Omnis iusto autem. Rerum molestiae voluptatem.</p>
`,ja:null}}]},"q4-transcriptome-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-transcriptome-other-mss</h1>
<p>Nisi architecto sint. Et earum dignissimos. Veniam vel accusantium.</p>
<p>Sit minus neque. Dolores a consequatur. Porro doloremque qui.</p>
<p>Ut aliquid optio. Dolores repudiandae et. Eos asperiores et.</p>
<p>Quia ea consequatur. Esse vel perspiciatis. Aliquid cum quia.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-mss</h1>
<p>Animi consequatur doloribus. Non nostrum et. Ut amet doloremque.</p>
<p>Aut unde adipisci. Voluptas fugiat nulla. Alias tenetur aliquid.</p>
<p>Enim rerum tempora. Ipsa optio quis. Repellat illo architecto.</p>
<p>Quis aut ea. Corrupti quasi tempore. Incidunt doloremque et.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-mss</h1>
<p>Esse vero sit. Consequatur quos officia. Omnis quam quis.</p>
<p>Porro quasi reiciendis. Adipisci minus in. Aut ut hic.</p>
<p>Accusamus perferendis aperiam. Iste aperiam dolorem. Nesciunt pariatur fugit.</p>
<p>Perspiciatis dolor qui. Distinctio autem ad. Nemo blanditiis molestiae.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-mss</h1>
<p>Deserunt accusantium praesentium. Consequatur dolorum culpa. Asperiores ipsam dolor.</p>
<p>Est maiores sed. Ipsa dignissimos enim. Architecto quaerat cumque.</p>
<p>Qui ea corrupti. Optio fugit nulla. Consequuntur fuga aspernatur.</p>
<p>Dolores sit quasi. Officiis exercitationem voluptas. Debitis et maxime.</p>
`,ja:null}}]},"q3-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-other-mss</h1>
<p>Vel adipisci aut. Explicabo amet eum. Aliquid qui aut.</p>
<p>Quos autem nostrum. Possimus est recusandae. Sint temporibus totam.</p>
<p>Et vitae perferendis. Et labore itaque. Voluptatem fugiat sit.</p>
<p>Amet aliquam quia. Sit rerum consequatur. Illo voluptas nisi.</p>
`,ja:null}},{title:{en:"BioProject",ja:null},body:{en:`<h1>data-from: q3-other-mss</h1>
<p>Ad nemo quam. Enim ipsa tempora. Dignissimos autem voluptatem.</p>
<p>Voluptatum rem ullam. Quasi aut ut. Odit dolorem rerum.</p>
<p>Eos eaque neque. Consequatur harum alias. Sit nesciunt magni.</p>
<p>Illum a quia. Aut ipsam voluptate. Reprehenderit ea cupiditate.</p>
`,ja:null}},{title:{en:"BioSample",ja:null},body:{en:`<h1>data-from: q3-other-mss</h1>
<p>Est et a. Eligendi vitae ad. Eveniet velit et.</p>
<p>Delectus earum ea. Commodi dolore ipsam. Odit vel asperiores.</p>
<p>Voluptatem dolorem sed. Praesentium ex repellendus. Fugiat eos sed.</p>
<p>Quam eos corporis. Eum fugiat est. Reiciendis dolorum alias.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q3-other-mss</h1>
<p>Eius omnis voluptas. Ea assumenda nihil. Ipsam inventore sint.</p>
<p>Cum asperiores quia. Qui et eveniet. Quis iure qui.</p>
<p>Dolorum distinctio omnis. Nesciunt et voluptatum. Illo voluptas et.</p>
<p>Accusantium itaque nemo. Voluptatem sed qui. Debitis molestiae amet.</p>
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
`,ja:null}}]},"q3-variation-humsnp->g-jvarsnp":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-variation-humsnp</h1>
<p>Placeat nisi cupiditate. Assumenda quia laudantium. Suscipit error rem.</p>
<p>Quis dolores laboriosam. Voluptatum ut libero. Qui est et.</p>
<p>Dicta voluptate quis. Tempora molestias excepturi. Laboriosam cumque vitae.</p>
<p>Vel voluptatum reiciendis. Aliquam est ab. Eius sed dolorum.</p>
`,ja:null}},{title:{en:"JVar-SNP",ja:null},body:{en:`<h1>data-from: q3-variation-humsnp</h1>
<p>Nihil aliquid placeat. Et quidem maxime. Sunt facere et.</p>
<p>Accusamus aut officia. Sunt sed suscipit. Cum maxime voluptatem.</p>
<p>Et aperiam officia. Quaerat culpa nobis. Quae alias quia.</p>
<p>Dolor sint facere. Quibusdam dolorem error. Dolorem explicabo soluta.</p>
`,ja:null}}]},"q3-variation-humsv->g-jvarsv":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-variation-humsv</h1>
<p>Ullam qui harum. Architecto fugit in. Ratione nostrum sequi.</p>
<p>Beatae aut necessitatibus. Aut nihil delectus. Deserunt error qui.</p>
<p>Sunt provident facere. Quos nostrum ab. Consequatur quia placeat.</p>
<p>Quae quos omnis. Aut sit soluta. Beatae blanditiis at.</p>
`,ja:null}},{title:{en:"JVar-SV",ja:null},body:{en:`<h1>data-from: q3-variation-humsv</h1>
<p>Qui similique incidunt. Velit et sint. Ut saepe cum.</p>
<p>Id eaque quos. Distinctio tenetur officia. Corrupti corporis laudantium.</p>
<p>Ipsa perferendis exercitationem. Iure pariatur praesentium. Saepe nihil consectetur.</p>
<p>Veniam hic qui. Aliquid fugiat non. Quaerat veniam officiis.</p>
`,ja:null}}]},"q2-metabolomics->g-mb":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q2-metabolomics</h1>
<p>Consequatur maxime repudiandae. Molestiae deleniti et. Odio id est.</p>
<p>Consequatur qui voluptas. Exercitationem voluptatem odit. Ipsa molestiae quis.</p>
<p>Sapiente quis occaecati. Culpa eos excepturi. Vero illum consectetur.</p>
<p>Aut fuga voluptate. Molestiae quod et. Non est dolore.</p>
`,ja:null}},{title:{en:"MetaboBank",ja:null},body:{en:`<h1>data-from: q2-metabolomics</h1>
<p>Sit consequatur reiciendis. Voluptatem aperiam sint. Expedita ab ut.</p>
<p>Quod excepturi dicta. Reiciendis harum iste. Magni placeat molestiae.</p>
<p>Suscipit blanditiis omnis. Magni odio consequatur. Quis aut incidunt.</p>
<p>Nesciunt magni odit. Molestiae aliquid libero. Molestiae sunt harum.</p>
`,ja:null}}]},"q4-genome-plasmid-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-genome-plasmid-mss</h1>
<p>Vitae doloribus sit. Qui dolore quae. Consectetur et distinctio.</p>
<p>Adipisci ut porro. Rerum alias non. Perspiciatis qui officia.</p>
<p>Id vitae qui. Et voluptatum aut. Inventore eum quo.</p>
<p>Vitae totam facilis. Eos modi explicabo. Quis voluptas nobis.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q4-genome-plasmid-mss</h1>
<p>Dolores architecto tempora. Et adipisci aspernatur. Et consectetur sed.</p>
<p>Blanditiis dicta aut. Laudantium labore fugit. Quia ad magnam.</p>
<p>Facere quia rerum. In ipsum in. Temporibus deleniti rerum.</p>
<p>Reprehenderit et assumenda. Excepturi velit praesentium. Dolor autem earum.</p>
`,ja:null}}]},"q4-genome-organelle-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-genome-organelle-mss</h1>
<p>Occaecati doloribus voluptatibus. Iusto fugit commodi. Sit voluptatem sed.</p>
<p>Assumenda temporibus praesentium. Officiis modi maiores. Dolorem qui cupiditate.</p>
<p>Quam quae excepturi. Aliquam architecto voluptas. Quam magnam sunt.</p>
<p>Consectetur sed molestiae. Et cum voluptatibus. Voluptatum dolore sunt.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: q4-genome-organelle-mss</h1>
<p>Ratione porro molestiae. Dolores repellat rerum. Sit similique aut.</p>
<p>Debitis vel quia. Nisi explicabo soluta. Soluta aut quis.</p>
<p>Sint quas quia. Culpa suscipit est. Voluptatem ipsa est.</p>
<p>Rerum ut mollitia. Est voluptate nam. Rerum repellendus voluptas.</p>
`,ja:null}}]},"mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: mss</h1>
<p>Id nulla voluptas. Iure recusandae amet. Iure ut unde.</p>
<p>Quis qui nulla. Non et quae. Laborum perspiciatis voluptates.</p>
<p>Dignissimos aut dolore. Molestias eveniet voluptate. Et molestias eveniet.</p>
<p>Nobis quaerat molestiae. Amet temporibus quaerat. Officiis qui sit.</p>
`,ja:null}},{title:{en:"MSS",ja:null},body:{en:`<h1>data-from: mss</h1>
<p>Pariatur ipsum deserunt. Qui dicta cupiditate. Voluptates dignissimos repudiandae.</p>
<p>Consequatur accusantium praesentium. Optio qui voluptatem. Consequatur quas doloremque.</p>
<p>Magnam officiis aspernatur. Non excepturi eaque. Est pariatur nam.</p>
<p>Sequi qui quidem. Et occaecati placeat. Nesciunt voluptatem impedit.</p>
`,ja:null}}]},"q4-genome-plasmid-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-genome-plasmid-nsss</h1>
<p>Saepe mollitia quia. Odio consequuntur esse. Cum consectetur deserunt.</p>
<p>Ut cumque et. Sed voluptas unde. Ullam et cum.</p>
<p>Est sunt et. Adipisci ipsam eveniet. Perferendis aperiam officiis.</p>
<p>Quisquam dicta autem. Voluptatem consequatur sint. Ut sed molestiae.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: q4-genome-plasmid-nsss</h1>
<p>A qui ad. Quis vitae iure. Eos reiciendis quis.</p>
<p>Et qui illum. Nesciunt totam incidunt. Reiciendis repudiandae quidem.</p>
<p>Consequuntur et aut. Dolorem omnis aspernatur. Ut porro sapiente.</p>
<p>Dignissimos nemo minus. Id necessitatibus consequatur. Consequuntur sit voluptas.</p>
`,ja:null}}]},"q4-genome-organelle-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-genome-organelle-nsss</h1>
<p>Sapiente corrupti cum. Autem iure aperiam. Dolorum ratione officiis.</p>
<p>Et et iure. Dolores dolorem et. Quos soluta illo.</p>
<p>Error aut totam. Illo sit repellat. Quo omnis repudiandae.</p>
<p>Corrupti amet voluptas. Repellat voluptate et. Labore modi vel.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: q4-genome-organelle-nsss</h1>
<p>Eaque officia fuga. Explicabo maiores repudiandae. Excepturi voluptatem quae.</p>
<p>Hic aut fuga. Voluptatum omnis amet. Esse qui dolorum.</p>
<p>Eum possimus quis. Dolor cum est. Ad esse nulla.</p>
<p>Laudantium tempora quas. Itaque nostrum nisi. Doloribus sit exercitationem.</p>
`,ja:null}}]},"nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: nsss</h1>
<p>Rerum vel voluptate. Est nihil qui. Autem quasi minima.</p>
<p>Ratione ea labore. Suscipit nesciunt id. Dolorum eos non.</p>
<p>Beatae sequi repellendus. Quasi dolorem praesentium. Deleniti id fugit.</p>
<p>Eligendi eius quos. Et dolores voluptatibus. Vero vel voluptate.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: nsss</h1>
<p>Aut rem amet. Sapiente aut nostrum. Autem ut saepe.</p>
<p>Qui architecto dolorem. Repudiandae assumenda sequi. Itaque quas ipsam.</p>
<p>Soluta deserunt consequatur. Earum sed laborum. Autem incidunt quidem.</p>
<p>Sunt provident ducimus. Consequuntur ut natus. Incidunt itaque aut.</p>
`,ja:null}}]},"q4-transcriptome-other-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q4-transcriptome-other-nsss</h1>
<p>Quibusdam officia ut. Enim quis ab. Nam dolor dolore.</p>
<p>Cum nesciunt delectus. Aut sed alias. Neque quidem qui.</p>
<p>Sed aut dolorum. Quod enim sed. Minus ut fugit.</p>
<p>Perferendis quae pariatur. Ut sunt praesentium. At similique sapiente.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: q4-transcriptome-other-nsss</h1>
<p>Consectetur qui vero. Rerum tempore earum. Amet eveniet ut.</p>
<p>Voluptate quas ut. Adipisci culpa labore. Quo quos fuga.</p>
<p>Consectetur ex eum. Illo ullam voluptatem. Tempore dolores voluptas.</p>
<p>Officiis iure ut. Enim aspernatur ipsum. Temporibus sunt perspiciatis.</p>
`,ja:null}}]},"q3-other-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-other-nsss</h1>
<p>Sit sunt dolor. Asperiores nobis iusto. Similique magnam quaerat.</p>
<p>Omnis debitis delectus. Tenetur animi nesciunt. Aliquam magnam atque.</p>
<p>Maxime eos distinctio. Commodi qui est. Quia officia amet.</p>
<p>Delectus facilis deleniti. Expedita et ullam. Officiis voluptas temporibus.</p>
`,ja:null}},{title:{en:"NSSS",ja:null},body:{en:`<h1>data-from: q3-other-nsss</h1>
<p>Rerum neque aspernatur. Necessitatibus fuga et. Accusantium distinctio et.</p>
<p>Est nulla et. Aut et voluptate. Dolorem ut recusandae.</p>
<p>Ut illum sequi. Consequatur ratione et. Possimus alias illum.</p>
<p>Sunt dolore sunt. Aut ipsa sit. Eos aut saepe.</p>
`,ja:null}}]},"q3-tpa-experimental->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<h1>data-from: q3-tpa-experimental</h1>
<p>Nobis quas dolorum. Molestiae id ut. Tempora ratione rem.</p>
<p>Porro dolores et. Tempora hic non. Quos pariatur eum.</p>
<p>Sunt fugiat quidem. Deleniti quo qui. Eius quo aut.</p>
<p>Et assumenda culpa. Qui aliquid explicabo. Id placeat accusamus.</p>
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
`,ja:null}}]}};const T=I;function C(i){const e=T[i];if(!e)throw new Error(`goal not found: id=${i}`);return e}const k=q`:host{--max-height:calc(100vh - 2em)}.container{display:grid;grid-template:"header     header" auto "nav        content" 1fr/min-content 1fr;max-height:var(--max-height)}.container>h1{grid-area:header}.container>nav{grid-area:nav;text-align:center}.container>main{grid-area:content;overflow:auto}.space-between{display:flex;justify-content:space-between}.no-margin-around-y>:first-child{margin-top:0;padding-top:0}.no-margin-around-y>:last-child{margin-bottom:0;padding-bottom:0}.tabs>a{display:block;padding:calc(.5em / 1.2) calc(1.75em / 1.2);border-style:solid;border-color:transparent;border-width:3px 0;transition:background-color .2s,border-color .2s}.tabs>a:hover:not(.active){background-color:#eee}.tabs>a.active{border-bottom-color:#ff7370;text-decoration:none;color:inherit;font-weight:700}svg.icon{height:1em;width:1em;vertical-align:-.1em}`;var G=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(i,e,a,t)=>{for(var n=t>1?void 0:t?O(e,a):e,u=i.length-1,m;u>=0;u--)(m=i[u])&&(n=(t?m(e,a,n):m(n))||n);return t&&n&&G(e,a,n),n},g=(i,e,a)=>{if(!e.has(i))throw TypeError("Cannot "+a)},j=(i,e,a)=>(g(i,e,"read from private field"),a?a.call(i):e.get(i)),N=(i,e,a)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,a)},_=(i,e,a,t)=>(g(i,e,"write to private field"),t?t.call(i,a):e.set(i,a),a),r;let s=class extends y(A){constructor(){super(...arguments);N(this,r,void 0)}get section(){return j(this,r)||this.goal?.sections[0]}set section(i){const e=j(this,r);_(this,r,i),this.requestUpdate("section",e)}get previousSection(){const{goal:i,section:e}=this;if(!i||!e)return;const a=i.sections.indexOf(e);return a<=0?void 0:i.sections[a-1]}get nextSection(){const{goal:i,section:e}=this;if(!i||!e)return;const a=i.sections.indexOf(e);return a===-1||a>=i.sections.length?void 0:i.sections[a+1]}render(){const{goal:i}=this;return i?l`<div class="container border fade"><h1 class="box bg-primary my-0 font-large">${Q} ${p("Submission Instructions")}</h1><nav class="box tabs font-heading font-large">${i.sections.map(e=>l`<a @click="${this.selectSection(e)}" class="${this.section===e?"active":""}" href="#">${this.localize(e.title)}</a>`)}</nav><main ${x()} class="box stack">${this.sectionTemplate()}</main></div>`:""}sectionTemplate(){if(!this.section)return"";const{body:i}=this.section;return l`<div class="no-margin-around-y">${P(this.localize(i))}</div><nav class="space-between"><div>${this.sectionLinkTemplate(`\xAB ${p("Prev")}`,this.previousSection)}</div><div>${this.sectionLinkTemplate(`${p("Next")} \xBB`,this.nextSection)}</div></nav>`}sectionLinkTemplate(i,e){return e?l`<a @click="${this.selectSection(e)}" href="#">${i}</a>`:""}selectSection(i){return e=>{e.preventDefault(),this.section=i}}};r=new WeakMap,s.styles=[v,k],o([w({converter:V})],s.prototype,"goal",2),o([d()],s.prototype,"section",1),o([d()],s.prototype,"previousSection",1),o([d()],s.prototype,"nextSection",1),s=o([B(),R("submission-wizard-goal")],s);function V(i){return i?C(i):void 0}const Q=D`<svg class="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 9.75V16.1786C39 18.2496 32.2843 19.9286 24 19.9286C15.7157 19.9286 9 18.2496 9 16.1786V9.75C9 7.67893 15.7157 6 24 6C32.2843 6 39 7.67893 39 9.75ZM9.62114 19.7144C11.4651 21.2634 17.2049 22.393 24 22.393C30.7951 22.393 36.5349 21.2634 38.3789 19.7144C38.783 20.0538 39 20.4134 39 20.7857V27.2143C39 29.2853 32.2843 30.9643 24 30.9643C15.7157 30.9643 9 29.2853 9 27.2143V20.7858C9.00002 20.4135 9.21703 20.0538 9.62114 19.7144ZM24 33.6786C17.205 33.6786 11.4652 32.549 9.62118 31C9.21703 31.3395 9 31.6991 9 32.0714V38.5C9 40.5711 15.7157 42.25 24 42.25C32.2843 42.25 39 40.5711 39 38.5V32.0714C39 31.6991 38.783 31.3395 38.3788 31C36.5348 32.549 30.795 33.6786 24 33.6786ZM32.3333 37.3333C32.3333 37.9777 31.811 38.5 31.1667 38.5C30.5223 38.5 30 37.9777 30 37.3333C30 36.689 30.5223 36.1667 31.1667 36.1667C31.811 36.1667 32.3333 36.689 32.3333 37.3333ZM35.8333 37.3333C36.4777 37.3333 37 36.811 37 36.1667C37 35.5223 36.4777 35 35.8333 35C35.189 35 34.6667 35.5223 34.6667 36.1667C34.6667 36.811 35.189 37.3333 35.8333 37.3333Z" fill="#333333"/></svg>`;export{s as SubmissionWizardGoal};
