import{w as p,b as j,r as y,L as D,$ as l,m as d,s as w,e as B,t as b,y as A,a as R,l as v,n as M}from"./submission-wizard-5655e7b2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=a=>(...e)=>({_$litDirective$:a,values:e});class f{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends f{constructor(e){if(super(e),this.it=p,e.type!==P.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===p||e==null)return this.ft=void 0,this.it=e;if(e===j)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const s=[e];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}u.directiveName="unsafeHTML",u.resultType=1;const q=c(u);class x extends f{render(){}update(e){e.element.scrollTo({top:0,left:0,behavior:"instant"})}}var T=c(x),k={"q1-yes->g-jga":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit human genetic and phenotypic data requiring controlled-access to the <a href="/jga/submission-step-e.html">Japanese Genotype-phenotype Archive (JGA)</a>. You need to submit a data submission application to the <a href="https://humandbs.biosciencedbc.jp/en/data-submission">NBDC</a> and the application needs to be approved before submitting the data to JGA. Regarding submission and sharing of human data, see the <a href="/policies-e.html#submission-of-human-data">Data submission of human subjects research</a>.</p>
<ol>
  <li>Submit a data submission application in the <a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC application system</a>.</li>
  <li>Upload metadata and data files to JGA.</li>
</ol>
`,ja:`<p>\u30A2\u30AF\u30BB\u30B9\u5236\u9650\u304C\u5FC5\u8981\u306A\u30D2\u30C8\u306E\u907A\u4F1D\u578B\u3068\u8868\u73FE\u578B\u30C7\u30FC\u30BF\u306F <a href="/jga/submission-step.html">Japanese Genotype-phenotype Archive (JGA)</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002
JGA \u306B\u767B\u9332\u3059\u308B\u524D\u306B <a href="https://humandbs.biosciencedbc.jp/data-submission">NBDC</a> \u306B\u30C7\u30FC\u30BF\u63D0\u4F9B\u7533\u8ACB\u3092\u63D0\u51FA\u3057\u3001\u627F\u8A8D\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002
\u30D2\u30C8\u30C7\u30FC\u30BF\u306E\u5171\u6709\u306B\u3064\u3044\u3066\u306F\u300C<a href="/policies.html#submission-of-human-data">\u30D2\u30C8\u3092\u5BFE\u8C61\u3068\u3057\u305F\u7814\u7A76\u30C7\u30FC\u30BF\u306E\u767B\u9332\u306B\u3064\u3044\u3066</a>\u300D\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p>
<ol>
  <li><a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC \u7533\u8ACB\u30B7\u30B9\u30C6\u30E0</a>\u3067\u63D0\u4F9B\u3092\u7533\u8ACB\u3002</li>
  <li>JGA \u306B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3068\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3002</li>
</ol>
`}},{title:{en:"NBDC",ja:"NBDC"},body:{en:`<p>A D-way account is necessary for the application to NBDC. If you do not have an account, <a href="/account-e.html">create a D-way account</a> before the application.</p> See the <a href="https://humandbs.biosciencedbc.jp/en/data-submission">NBDC Data Submission</a> web pages.</p>
<ol>
  <li>Submit a data submission application in the <a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC application system</a> after logging in with your D-way account.</li>
  <li>After the data submission application is approved by NBDC, a JGA submission ID will be created.</li>
</ol>
`,ja:`<p>NBDC \u3078\u306E\u7533\u8ACB\u306E\u305F\u3081\u306B\u306F D-way \u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u5FC5\u8981\u3067\u3059\u3002\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u7121\u3044\u5834\u5408\u3001\u7533\u8ACB\u524D\u306B <a href="/account.html">D-way \u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210</a>\u3057\u307E\u3059\u3002</p>\u8A73\u3057\u304F\u306F <a href="https://humandbs.biosciencedbc.jp/data-submission">NBDC \u30C7\u30FC\u30BF\u306E\u63D0\u4F9B\u30DA\u30FC\u30B8</a>\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p>
<ol>
  <li><a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC \u7533\u8ACB\u30B7\u30B9\u30C6\u30E0</a>\u306B D-way \u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30ED\u30B0\u30A4\u30F3\u3057\u3001\u63D0\u4F9B\u7533\u8ACB\u3092\u63D0\u51FA\u3002</li>
  <li>NBDC \u306B\u3088\u3063\u3066\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u305F\u5F8C\u3001JGA submission ID \u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002</li>
</ol>
`}},{title:{en:"JGA",ja:"JGA"},body:{en:`<p>Prepare metadata and data files and upload them to JGA by sftp. The sftp data transfer is authenticated by a key pair, generate a public and private key pair and <a href="/account-e.html#enable-dra-submission-in-account">register the public key to your D-way account</a> for data transfer. See the <a href="/jga/submission-step-e.html">JGA submission steps</a>.</p>
<ul>
  <li>Enter metadata in the <a href="/jga/submission-step-e.html#create-metadata-using-excel">JGA metadata excel file</a>.</li>
  <li>Prepare <a href="/jga/submission-e.html">data files</a>.</li>
  <li>Upload the metadata and data files to the submission directory of the JGA server by sftp (<a href="/jga/submission-step-e.html">instructions</a>).</li>
</ul>
<p>If the submission is successfully registered, <a href="/jga/submission-e.html">JGA accessions</a> will be issued.</p>
`,ja:`<p>\u30E1\u30BF\u30C7\u30FC\u30BF\u3068\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6E96\u5099\u3057\u3001JGA \u306B sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002sftp \u30C7\u30FC\u30BF\u8EE2\u9001\u306F\u9375\u8A8D\u8A3C\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u516C\u958B\u30FB\u79D8\u5BC6\u9375\u30DA\u30A2\u3092\u751F\u6210\u3057\u3001<a href="/account.html#enable-dra-submission-in-account">\u516C\u958B\u9375\u3092 D-way \u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u767B\u9332</a>\u3057\u3066\u304A\u304D\u307E\u3059\u3002\u8A73\u3057\u304F\u306F <a href="/jga/submission-step.html">JGA \u767B\u9332\u624B\u9806\u30DA\u30FC\u30B8</a>\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p>
<ul>
  <li><a href="/jga/submission-step.html#create-metadata-using-excel">JGA \u30E1\u30BF\u30C7\u30FC\u30BF\u30A8\u30AF\u30BB\u30EB</a>\u306B\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8A18\u5165\u3002</li>
  <li><a href="/jga/submission.html">\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB</a>\u3092\u6E96\u5099\u3002</li>
  <li>JGA \u30B5\u30FC\u30D0\u306E submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30E1\u30BF\u30C7\u30FC\u30BF\u3068\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9 (<a href="/jga/submission-step.html">\u624B\u9806</a>)\u3002</li>
</ul>
<p>\u767B\u9332\u304C\u5B8C\u4E86\u3059\u308B\u3068 <a href="/jga/submission.html">JGA \u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-eukaryote-complete-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during the DRA submission or before the DRA and genome submissions.</li>
  <li>Submit finished level genomic sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u771F\u6838\u751F\u7269\u306E finished level \u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS eukaryote package</a> \u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit finished level genomic sequences (non-WGS) of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
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
`,ja:`<p>\u771F\u6838\u751F\u7269\u306E finished level \u30B2\u30CE\u30E0\u914D\u5217 (WGS \u4EE5\u5916) \u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D\u30B2\u30CE\u30E0\u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u3001<a href="/ddbj/mss.html#flow-2">\u5869\u57FA\u914D\u5217\u3092 fasta \u30D5\u30A1\u30A4\u30EB\u3001\u30E1\u30BF\u30C7\u30FC\u30BF\u3092 annotation \u30D5\u30A1\u30A4\u30EB</a>\u3001\u3068\u3057\u3066\u6E96\u5099\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-eukaryote-complete-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a project to BioProject and a sample to BioSample before the genome submission.</li>
  <li>Submit finished level genomic sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:`<ul>
  <li>\u30B2\u30CE\u30E0\u767B\u9332\u306E\u524D\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject \u306B\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u771F\u6838\u751F\u7269\u306E finished level \u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission.html">BioProject</a> \u306B\u767B\u9332\u3002
 BioProject \u3067\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS eukaryote package</a> \u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit finished level genomic sequences (non-WGS) of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
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
`,ja:`<p>\u771F\u6838\u751F\u7269\u306E finished level \u30B2\u30CE\u30E0\u914D\u5217 (WGS \u4EE5\u5916) \u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D\u30B2\u30CE\u30E0\u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u3001<a href="/ddbj/mss.html#flow-2">\u5869\u57FA\u914D\u5217\u3092 fasta \u30D5\u30A1\u30A4\u30EB\u3001\u30E1\u30BF\u30C7\u30FC\u30BF\u3092 annotation \u30D5\u30A1\u30A4\u30EB</a>\u3001\u3068\u3057\u3066\u6E96\u5099\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-eukaryote-complete-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample BioSample during or before the DRA submission.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3082\u3057\u304F\u306F\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
</ul>      
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS eukaryote package</a> \u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}}]},"q5-genome-eukaryote-draft-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during the DRA submission or before the DRA and draft genome submissions.</li>
  <li>Submit draft genome sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u771F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and draft genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS eukaryote package</a> \u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit draft genome sequences of eukaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">A sample annotation file</a>.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:`<p>\u771F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217 <a href="/ddbj/wgs.html">WGS (Whole Genome Shotgun)</a> \u3068\u3057\u3066 <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D WGS \u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u3001<a href="/ddbj/mss.html#flow-2">\u5869\u57FA\u914D\u5217\u3092 fasta \u30D5\u30A1\u30A4\u30EB\u3001\u30E1\u30BF\u30C7\u30FC\u30BF\u3092 annotation \u30D5\u30A1\u30A4\u30EB</a>\u3001\u3068\u3057\u3066\u6E96\u5099\u3057\u307E\u3059\u3002<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">\u30B5\u30F3\u30D7\u30EB\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a></li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>       
<p><a href="/ddbj/wgs.html#flat-file">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B94\u6587\u5B57\u30688\u6841\u306E\u6570\u5B57\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a> (\u4F8B ZZZZ01000001) \u304C WGS \u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-eukaryote-draft-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a project to BioProject and a sample to BioSample during or before the draft genome submission.</li>
  <li>Submit draft genome sequences of eukaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:`<ul>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u771F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS eukaryote package</a> \u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit draft genome sequences of eukaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include organellar sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">A sample annotation file</a>.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., <a href=""ZZZZ01000001) will be assigned to the WGS sequences.</p>
`,ja:`<p>\u771F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217 <a href="/ddbj/wgs.html">WGS (Whole Genome Shotgun)</a> \u3068\u3057\u3066 <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D WGS \u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u3001<a href="/ddbj/mss.html#flow-2">\u5869\u57FA\u914D\u5217\u3092 fasta \u30D5\u30A1\u30A4\u30EB\u3001\u30E1\u30BF\u30C7\u30FC\u30BF\u3092 annotation \u30D5\u30A1\u30A4\u30EB</a>\u3001\u3068\u3057\u3066\u6E96\u5099\u3057\u307E\u3059\u3002<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">\u30B5\u30F3\u30D7\u30EB\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a></li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>       
<p><a href="/ddbj/wgs.html#flat-file">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B94\u6587\u5B57\u30688\u6841\u306E\u6570\u5B57\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a> (\u4F8B ZZZZ01000001) \u304C WGS \u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>      
`}}]},"q5-genome-eukaryote-draft-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample BioSample during or before the DRA submission.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.eu&Package=No_package&definition=definition">MIGS eukaryote package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS eukaryote package</a> \u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>      
`}}]},"q5-genome-prokaryote-complete-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
  <li>Submit complete genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u539F\u6838\u751F\u7269\u306E\u5B8C\u5168\u9577\u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002
     <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> \u306F\u539F\u6838\u751F\u7269\u30B2\u30CE\u30E0\u3092\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u7D50\u679C\u3092 DDBJ \u306B\u767B\u9332\u53EF\u80FD\u306A\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u51FA\u529B\u3057\u307E\u3059\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes the DRA and genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS cultured bacteria/archaea package</a>\u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit complete genome sequences (non-WGS) of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will shorten submission processing time by annotating prokaryotic genomes and generating submission-ready files.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679">A sample annotation file</a>.</li>
  <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the complete genome sequences of prokaryotes.</p>
`,ja:`<p>\u539F\u6838\u751F\u7269\u306E\u5B8C\u5168\u9577\u30B2\u30CE\u30E0\u914D\u5217 (WGS \u4EE5\u5916) \u3068\u3057\u3066 <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D WGS \u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002
  <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> \u306F locus tag prefix \u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u51FA\u529B\u3057\u307E\u3059\u3002<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679">\u30B5\u30F3\u30D7\u30EB\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a></li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>DFAST job ID \u3092 MSS \u30C1\u30FC\u30E0\u306B\u77E5\u3089\u305B\u308B\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u304B scp/sftp \u3067\u9001\u4ED8</a>\u3002</li>
</ul>
</p>       
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-prokaryote-complete-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register a project to BioProject and a sample to BioSample before the genome submission.</li>
  <li>Submit complete genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:`<ul>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u539F\u6838\u751F\u7269\u306E\u5B8C\u5168\u9577\u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002
     <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> \u306F\u539F\u6838\u751F\u7269\u30B2\u30CE\u30E0\u3092\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u7D50\u679C\u3092 DDBJ \u306B\u767B\u9332\u53EF\u80FD\u306A\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u51FA\u529B\u3057\u307E\u3059\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS cultured bacteria/archaea package</a>\u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit complete genome sequences (non-WGS) of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will shorten submission processing time by annotating prokaryotic genomes and generating submission-ready files.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the genome submission. A genome must be linked to a BioProject and a BioSample.</li>
  <li>If you submit a genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679">A sample annotation file</a>.</li>
  <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the complete genome sequences of prokaryotes.</p>
`,ja:`<p>\u539F\u6838\u751F\u7269\u306E\u5B8C\u5168\u9577\u30B2\u30CE\u30E0\u914D\u5217 (WGS \u4EE5\u5916) \u3068\u3057\u3066 <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D WGS \u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002
  <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> \u306F locus tag prefix \u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u51FA\u529B\u3057\u307E\u3059\u3002<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679">\u30B5\u30F3\u30D7\u30EB\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a></li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>DFAST job ID \u3092 MSS \u30C1\u30FC\u30E0\u306B\u77E5\u3089\u305B\u308B\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u304B scp/sftp \u3067\u9001\u4ED8</a>\u3002</li>
</ul>
</p>       
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-prokaryote-complete-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS cultured bacteria/archaea package</a>\u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}}]},"q5-genome-prokaryote-draft-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during the DRA submission or before the DRA and draft genome submissions.</li>
  <li>Submit draft genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u539F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002
     <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> \u306F\u539F\u6838\u751F\u7269\u30B2\u30CE\u30E0\u3092\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u7D50\u679C\u3092 DDBJ \u306B\u767B\u9332\u53EF\u80FD\u306A\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u51FA\u529B\u3057\u307E\u3059\u3002</li>         
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and draft genome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS cultured bacteria/archaea package</a>\u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit draft genome sequences of prokaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=382116224">A sample annotation file</a>.</li>
 <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:`<p>\u539F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217 <a href="/ddbj/wgs.html">WGS (Whole Genome Shotgun)</a> \u3068\u3057\u3066 <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D WGS \u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002
  <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> \u306F locus tag prefix \u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u51FA\u529B\u3057\u307E\u3059\u3002<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">\u30B5\u30F3\u30D7\u30EB\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a></li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>DFAST job ID \u3092 MSS \u30C1\u30FC\u30E0\u306B\u77E5\u3089\u305B\u308B\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u304B scp/sftp \u3067\u9001\u4ED8</a>\u3002</li>
</ul>
</p>       
<p><a href="/ddbj/wgs.html#flat-file">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B94\u6587\u5B57\u30688\u6841\u306E\u6570\u5B57\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a> (\u4F8B ZZZZ01000001) \u304C WGS \u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-prokaryote-draft-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample before the draft genome submissions.</li>
  <li>Submit draft genome sequences of prokaryotes to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. The <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> annotates prokaryotic genomes and generates result files that are readily submittable to DDBJ.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
  <li>\u539F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002
     <a href="https://dfast.ddbj.nig.ac.jp/">DDBJ Fast Annotation and Submission Tool (DFAST)</a> \u306F\u539F\u6838\u751F\u7269\u30B2\u30CE\u30E0\u3092\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u7D50\u679C\u3092 DDBJ \u306B\u767B\u9332\u53EF\u80FD\u306A\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u51FA\u529B\u3057\u307E\u3059\u3002</li>         
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS cultured bacteria/archaea package</a>\u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit draft genome sequences of prokaryotes as <a href="/ddbj/wgs-e.html">WGS (Whole Genome Shotgun) genomes</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Include plasmid sequences with the genome submission.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the WGS submission. A WGS genome must be linked to a BioProject and a sample to BioSample.</li>
  <li>Annotation is optional but required for species whose genome has not been reported. If you submit a WGS genome with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission. <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> will generate submission files with the locus tag prefix. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=382116224">A sample annotation file</a>.</li>
 <li>Inform the MSS team of the DFAST job ID. Otherwise, <a href="/ddbj/mss-e.html#File_transfer">send the submission files</a> to the MSS team by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to WGS sequences.</p>
`,ja:`<p>\u539F\u6838\u751F\u7269\u306E\u30C9\u30E9\u30D5\u30C8\u30B2\u30CE\u30E0\u914D\u5217 <a href="/ddbj/wgs.html">WGS (Whole Genome Shotgun)</a> \u3068\u3057\u3066 <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F\u30B2\u30CE\u30E0\u767B\u9332\u306B\u542B\u3081\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30B2\u30CE\u30E0\u914D\u5217\u306E\u305F\u3081\u306B\u767B\u9332\u3057\u305F BioProject \u3068 BioSample \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30CE\u30E0\u914D\u5217\u306F\u4E00\u3064\u306E BioProject \u3068\u4E00\u3064\u306E BioSample \u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u3067\u3059\u304C\u3001\u65B0\u898F\u751F\u7269\u7A2E\u3067\u306F\u5FC5\u9808\u3067\u3059\u3002\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u4ED8\u304D WGS \u3092\u767B\u9332\u3059\u308B\u5834\u5408\u3001\u907A\u4F1D\u5B50\u304C\u4E00\u610F\u306B\u7279\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B locus tag prefix \u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002<a href="/ddbj/locus_tag.html">locus tag prefix</a> \u306F BioSample \u767B\u9332\u6642\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002
  <a href="https://dfast.ddbj.nig.ac.jp/">DFAST</a> \u306F locus tag prefix \u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u51FA\u529B\u3057\u307E\u3059\u3002<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">\u30B5\u30F3\u30D7\u30EB\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a></li>
  <li><a href="/ddbj/file-format.html#describing_st_comment">\u30B2\u30CE\u30E0\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3068\u30A2\u30BB\u30F3\u30D6\u30EA\u306B\u95A2\u3059\u308B\u60C5\u5831</a>\u3092\u8A18\u8F09\u3002</li>
  <li>DFAST job ID \u3092 MSS \u30C1\u30FC\u30E0\u306B\u77E5\u3089\u305B\u308B\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u304B scp/sftp \u3067\u9001\u4ED8</a>\u3002</li>
</ul>
</p>       
<p><a href="/ddbj/wgs.html#flat-file">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B94\u6587\u5B57\u30688\u6841\u306E\u6570\u5B57\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a> (\u4F8B ZZZZ01000001) \u304C WGS \u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q5-genome-prokaryote-draft-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:`<ul>
  <li>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</li>
  <li>DRA \u306E\u767B\u9332\u9014\u4E2D\u3001\u3082\u3057\u304F\u306F\u3001DRA \u3084\u30B2\u30CE\u30E0\u767B\u9332\u524D\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 BioProject\u3001\u30B5\u30F3\u30D7\u30EB\u3092 BioSample \u306B\u767B\u9332\u3002</li>
</ul>
`}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 <a href="/bioproject/submission-e.html">BioProject</a> \u306B\u767B\u9332\u3002
BioProject \u306F\u7814\u7A76\u306E\u30B4\u30FC\u30EB\u3092\u8AAC\u660E\u3057\u3001\u95A2\u9023\u3059\u308B DRA \u3068\u30B2\u30CE\u30E0\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioProject \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=MIxS&SampleType=MIGS.ba&Package=No_package&definition=definition">MIGS cultured bacteria/archaea package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample contains the source information of the sequenced sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:`<p><a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> \u3067 <a href="/biosample/attribute.html">MIGS cultured bacteria/archaea package</a>\u3092\u4F7F\u3063\u3066\u30B5\u30F3\u30D7\u30EB\u3092 <a  href="/biosample/submission.html">BioSample</a> \u306B\u767B\u9332\u3002
  BioSample \u306F\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u60C5\u5831\u3092\u8A18\u8F09\u3057\u307E\u3059\u3002DRA \u306E\u767B\u9332\u9014\u4E2D\u3067 BioSample \u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</p>
`}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:`<p>\u751F\u30EA\u30FC\u30C9\u3092 <a href="/dra/submission.html">DDBJ Sequence Read Archive (DRA)</a> \u306B\u767B\u9332\u3002</p>
<ol>
  <li>D-way submission portal \u3067 <a href="/dra/submission.html#create-new-submission">DRA \u65B0\u898F\u767B\u9332\u3092\u4F5C\u6210</a>\u3002</li>
  <li>\u751F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092 <a href="/dra/submission.html#upload-sequence-data">DRA submission \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B scp/sftp \u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9</a>\u3002</li>
  <li>D-way submission portal \u3067 DRA \u767B\u9332\u306E\u305F\u3081\u306B\u4F5C\u6210\u3057\u305F BioProject \u3068 BioSample \u3092\u9078\u629E\u3002D-way \u306E<a href="/dra/submission.html#submit-metadata">\u30A6\u30A7\u30D6\u753B\u9762</a>\u3067\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3001\u3082\u3057\u304F\u306F\u3001Run \u6570\u304C100\u3092\u8D85\u3048\u308B\u3088\u3046\u306A\u5834\u5408\u306F<a href="/dra/submission.html#metadata-excel">\u30A8\u30AF\u30BB\u30EB/XML \u30D5\u30A1\u30A4\u30EB</a>\u3067\u767B\u9332\u3002</li>
</ol></p>
`}}]},"q4-genome-plasmid-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and shorter than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:`<p>\u5C0F\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0B\u3067\u3042\u308A\u3001\u914D\u5217\u9577\u306F500kb\u4EE5\u4E0B) \u306A\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F <a href="/ddbj/web-submission.html">Nucleotide Sequence Submission System (NSSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u767B\u9332\u624B\u9806\u306F<a href="/ddbj/web-submission-help.html">\u30A6\u30A7\u30D6\u30DA\u30FC\u30B8</a>\u3084<a href="/assets/files/pdf/ddbj/websubHelp_full.pdf">PDF</a> \u3092\u53C2\u7167\u3002</p>
`}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the plasmid sequences.</p>
`,ja:`<p>\u5C0F\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0B\u3067\u3042\u308A\u3001\u914D\u5217\u9577\u306F500kb\u4EE5\u4E0B) \u306A\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F <a href="/ddbj/web-submission.html">Nucleotide Sequence Submission System (NSSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
<p>NSSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u9078\u629E\u3057\u3001\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u8A18\u5165\u3002</li>
  <li>\u5869\u57FA\u914D\u5217\u3092 fasta \u5F62\u5F0F\u3067\u5165\u529B\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3068\u914D\u5217\u3092\u767B\u9332\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q4-genome-plasmid-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
`,ja:`<p>\u5927\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0A\u3001\u3082\u3057\u304F\u306F\u3001\u914D\u5217\u9577\u304C500kb\u4EE5\u4E0A) \u306A\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) plasmid sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the plasmid sequences.</p>
`,ja:`<p>\u5927\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0A\u3001\u3082\u3057\u304F\u306F\u3001\u914D\u5217\u9577\u304C500kb\u4EE5\u4E0A) \u306A\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066 <a href="/ddbj/mss.html#flow-2">fasta \u30D5\u30A1\u30A4\u30EB\u3068\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8A18\u8F09\u3057\u305F\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a>\u3092\u6E96\u5099\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q4-genome-organelle-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:`<p>\u5C0F\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0B\u3067\u3042\u308A\u3001\u914D\u5217\u9577\u306F500kb\u4EE5\u4E0B) \u306A\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F <a href="/ddbj/web-submission.html">Nucleotide Sequence Submission System (NSSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u767B\u9332\u624B\u9806\u306F<a href="/ddbj/web-submission-help.html">\u30A6\u30A7\u30D6\u30DA\u30FC\u30B8</a>\u3084<a href="/assets/files/pdf/ddbj/websubHelp_full.pdf">PDF</a> \u3092\u53C2\u7167\u3002</p>
`}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the organelle sequences.</p>
`,ja:`<p>\u5C0F\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0B\u3067\u3042\u308A\u3001\u914D\u5217\u9577\u306F500kb\u4EE5\u4E0B) \u306A\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F <a href="/ddbj/web-submission.html">Nucleotide Sequence Submission System (NSSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
<p>NSSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u9078\u629E\u3057\u3001\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u8A18\u5165\u3002</li>
  <li>\u5869\u57FA\u914D\u5217\u3092 fasta \u5F62\u5F0F\u3067\u5165\u529B\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3068\u914D\u5217\u3092\u767B\u9332\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q4-genome-organelle-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
`,ja:`<p>\u5927\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0A\u3001\u3082\u3057\u304F\u306F\u3001\u914D\u5217\u9577\u304C500kb\u4EE5\u4E0A) \u306A\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) organelle sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=545461927">A sample annotation file</a>.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the organelle sequences.</p>
`,ja:`<p>\u5927\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0A\u3001\u3082\u3057\u304F\u306F\u3001\u914D\u5217\u9577\u304C500kb\u4EE5\u4E0A) \u306A\u30AA\u30EB\u30AC\u30CD\u30E9\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066 <a href="/ddbj/mss.html#flow-2">fasta \u30D5\u30A1\u30A4\u30EB\u3068\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8A18\u8F09\u3057\u305F\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a>\u3092\u6E96\u5099\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q4-genome-virus-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:`<p>\u5C0F\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0B\u3067\u3042\u308A\u3001\u914D\u5217\u9577\u306F500kb\u4EE5\u4E0B) \u306A\u30A6\u30A4\u30EB\u30B9\u914D\u5217\u306F <a href="/ddbj/web-submission.html">Nucleotide Sequence Submission System (NSSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002\u767B\u9332\u624B\u9806\u306F<a href="/ddbj/web-submission-help.html">\u30A6\u30A7\u30D6\u30DA\u30FC\u30B8</a>\u3084<a href="/assets/files/pdf/ddbj/websubHelp_full.pdf">PDF</a> \u3092\u53C2\u7167\u3002</p>
`}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the virus sequences.</p>
`,ja:`<p>\u5C0F\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0B\u3067\u3042\u308A\u3001\u914D\u5217\u9577\u306F500kb\u4EE5\u4E0B) \u306A\u30A6\u30A4\u30EB\u30B9\u914D\u5217\u306F <a href="/ddbj/web-submission.html">Nucleotide Sequence Submission System (NSSS)</a> \u7D4C\u7531\u3067 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
<p>NSSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u9078\u629E\u3057\u3001\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u8A18\u5165\u3002</li>
  <li>\u5869\u57FA\u914D\u5217\u3092 fasta \u5F62\u5F0F\u3067\u5165\u529B\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u3068\u914D\u5217\u3092\u767B\u9332\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C\u30D7\u30E9\u30B9\u30DF\u30C9\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q4-genome-virus-mss->g-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
`,ja:`<p>\u5927\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0A\u3001\u3082\u3057\u304F\u306F\u3001\u914D\u5217\u9577\u304C500kb\u4EE5\u4E0A) \u306A\u30A6\u30A4\u30EB\u30B9\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
`}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) virus sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the virus sequences.</p>
`,ja:`<p>\u5927\u898F\u6A21 (\u914D\u5217\u6570\u304C500\u4EE5\u4E0A\u3001\u3082\u3057\u304F\u306F\u3001\u914D\u5217\u9577\u304C500kb\u4EE5\u4E0A) \u306A\u30A6\u30A4\u30EB\u30B9\u914D\u5217\u306F <a href="/ddbj/mss.html">Mass Submission System (MSS)</a> \u3092\u7D4C\u7531\u3057\u3066 <a href="/ddbj/index.html">DDBJ</a> \u306B\u767B\u9332\u3057\u307E\u3059\u3002</p>
<p>MSS \u767B\u9332\u30B7\u30B9\u30C6\u30E0\u3067:
<ul>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066 <a href="/ddbj/mss.html#flow-2">fasta \u30D5\u30A1\u30A4\u30EB\u3068\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8A18\u8F09\u3057\u305F\u30A2\u30CE\u30C6\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB</a>\u3092\u6E96\u5099\u3057\u307E\u3059\u3002</li>
  <li><a href="/ddbj/mss.html#Check_submission_files">MSS \u30C1\u30A7\u30C3\u30AF\u30C4\u30FC\u30EB</a>\u3067\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3002</li>
  <li>\u767B\u9332\u7528\u30D5\u30A1\u30A4\u30EB\u3092\u96FB\u5B50\u30E1\u30FC\u30EB\u6DFB\u4ED8\u3001\u3082\u3057\u304F\u306F\u3001<a href="/ddbj/mss.html#File_transfer">scp/sftp \u3067\u8EE2\u9001</a>\u3002</li>
</ul>
</p>
<p><a href="/ddbj/flat-file.html#ACCESSION">\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B92\u6587\u5B57\u3068\u6570\u5B576\u6841\u304B\u3089\u6210\u308B\u30A2\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u756A\u53F7</a>\u304C finished level \u30B2\u30CE\u30E0\u914D\u5217\u306B\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p>
`}}]},"q4-metagenome-mag-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A highest quality representative binned assembly (Metagenome-Assembled Genome, MAG) predicted to be derived from taxonomically defined organisms should be submitted to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as genome entries of <a href="/ddbj/env-e.html">ENV</a> division.</p>
<ul>
  <li>Register unassembled raw reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and BioSamples. Two samples, one is for raw metagenomic sequencing reads and the other is for a MAG are necessary.</li>
  <li>Submit MAG to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>         
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Choose the most appropriate "xyz metagenome" (e.g., soil metagenome) from <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/">metagenome organism names</a> in the taxonomy database. The BioProject describes the goal of your research effort and organizes related metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register two samples, one is for unassembled raw reads and the other is for a MAG.</p>
<p>1. Register a sample for unassembled DRA raw reads to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
<p>2. Register a virtual sample for MAG to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the MAG submission. The MAG sample is derived from the metagenomic sample (1) and <a href="/ddbj/metagenome-assembly-e.html#mag-biosample">several MAG-specific attributes need to be described</a>.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register unassembled raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>.</p>
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit the MAG as a genome entry of <a href="/ddbj/env-e.html">ENV division</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a virtual BioSample that have been registered for the MAG submission. A MAG must be linked to a BioProject and a BioSample.</li>
     <li>Annotation is optional. If you submit a MAG with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
     <li>Provide metadata on the <a href="/ddbj/metagenome-assembly-e.html#mag-ddbj">sequencing and assembly of the genome</a>.</li>
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. Sample annotation files of <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=11301438">a complete MAG sequence</a> and <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1453206143">a draft MAG sequence</a>.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the MAG.</p>
`,ja:""}}]},"q4-metagenome-mag-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A highest quality representative binned assembly (Metagenome-Assembled Genome, MAG) predicted to be derived from taxonomically defined organisms should be submitted to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as genome entries of <a href="/ddbj/env-e.html">ENV</a> division.</p>
<ul>
  <li>Register a project to BioProject and a MAG sample to BioSample.</li>
  <li>Submit MAG to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>         
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Choose the most appropriate "xyz metagenome" (e.g., soil metagenome) from <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/">metagenome organism names</a> in the taxonomy database. The BioProject describes the goal of your research effort and organizes related metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register a virtual sample for MAG to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the MAG submission. The MAG sample needs <a href="/ddbj/metagenome-assembly-e.html#mag-biosample">several MAG-specific attributes</a>.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit the MAG as a genome entry of <a href="/ddbj/env-e.html">ENV division</a> to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a virtual BioSample that have been registered for the MAG submission. A MAG must be linked to a BioProject and a BioSample.</li>
     <li>Annotation is optional. If you submit a MAG with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
     <li>Provide metadata on the <a href="/ddbj/metagenome-assembly-e.html#mag-ddbj">sequencing and assembly of the genome</a>.</li>
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. Sample annotation files of <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=11301438">a complete MAG sequence</a> and <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1453206143">a draft MAG sequence</a>.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the MAG.</p>
`,ja:""}}]},"q4-metagenome-binned-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Binned metagenome assemblies asserted to known taxonomies (Binned metagenome) should be submitted to <a href="/dra/submission-e.html#Analysis">DRA Analysis.</a>. The raw sequence reads from which the binned metagenomes are derived should be submitted to <a href="/dra/submission-e.html">DRA Run.</a></p>
<p>Register a project to BioProject and BioSamples. Samples for raw metagenomic sequencing reads and those for binned metagenomes are necessary.</p>
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register two samples for unassembled raw reads and binned metagenomes.</p>
<p>1. Register a sample for unassembled DRA raw reads to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
<p>2. Register virtual samples for binned metagenomes to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the binned metagenome submission to DRA Analysis. The binned metagenome sample is derived from the metagenomic sample (1) and <a href="/ddbj/metagenome-assembly-e.html#binned-metagenome-biosample">several attributes need to be provided</a>.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Submit binned metagenome assemblies derived from the raw sequence data in fasta/bam files to the DRA Analysis (Analysis type = "De Novo Assembly"). Include information of analysis software used and organism bin in the description. Submit the Analysis along with the Run which had been registered for the raw reads. Please note that Analysis data are not shared with NCBI/ENA.</p>
`,ja:""}}]},"q4-metagenome-primary-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Assembled contigs of unknown taxa (primary metagenome) should be submitted to <a href="/dra/submission-e.html#Analysis">DRA Analysis.</a>. The raw sequence reads from which the primary metagenomes are derived should be submitted to <a href="/dra/submission-e.html">DRA Run.</a></p>
<p>Register a project to BioProject and BioSamples. Samples for raw metagenomic sequencing reads and those for primary metagenomes are necessary.</p>
<p>The <a href="/ddbj/metagenome-assembly-e.html">Metagenome Assembly</a> page describes how to submit metagenome assemblies categorized by four assembly levels.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes metagenomic assemblies. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register two samples for unassembled raw reads and primary metagenomes.</p>
<p>1. Register a sample for unassembled DRA raw reads to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
<p>2. Register virtual samples for primary metagenomes to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the primary metagenome submission to DRA Analysis. The primary metagenome sample is derived from the metagenomic sample (1) and <a href="/ddbj/metagenome-assembly-e.html#binned-metagenome-biosample">several attributes need to be provided</a>.Choose the most appropriate "xyz metagenome" (e.g., soil metagenome) from <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/">metagenome organism names</a> in the taxonomy database.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Submit primary metagenome assemblies derived from the raw sequence data in fasta/bam files to the DRA Analysis (Analysis type = "De Novo Assembly"). Include information of analysis software used in the description. Submit the Analysis along with the Run which had been registered for the raw reads. Please note that Analysis data are not shared with NCBI/ENA.</p>
`,ja:""}}]},"q4-metagenome-tls-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> is a large scale targeted sequencing project for a single gene locus such as 16S rRNA from multiple organisms. Submit TLS data to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
  <li>Submit <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a> before the TLS submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>.</p>
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit the <a href="/ddbj/tls-e.html">TLS</a> data to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a BioSample that have been registered for the TLS submission.</li>           
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=580470761">A sample annotation file</a>.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/tls-e.html">Accession numbers with a 4-letter prefix and 8 digits</a> will be assigned to the TLS sequences.</p>
`,ja:""}}]},"q4-metagenome-tls-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>A <a href="/ddbj/tls-e.html">Targeted Locus Study (TLS)</a> is a large scale targeted sequencing project for a single gene locus such as 16S rRNA from multiple organisms.</p>
<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>.</p>
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol>
`,ja:""}}]},"q4-metagenome-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metagenomic, environmental sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</p>
<ul>
  <li>Register a project to BioProject and a sample to BioSample for metagenomic sequences.</li>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Submit metagenomic sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</li>
</ul>         
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes raw DRA data and assembled sequences. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit metagenomic sequences as <a href="/ddbj/env-e.html">ENV division</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
<p>In the MSS submission, you will need to:
   <ul>
     <li>Provide a BioProject and a BioSample that have been registered for the DRA submission.</li>
     <li>Annotation is optional. If you submit metagenomic sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
     <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
     <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
     <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
   </ul>
   </p>
<p><a href="/ddbj/env-e.html">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the ENV sequences.</p>
`,ja:""}}]},"q4-metagenome-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metagenomic, environmental sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</p>
<ul>
  <li>Register a project to BioProject and a sample to BioSample for metagenomic sequences.</li>
  <li>Submit metagenomic sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> as <a href="/ddbj/env-e.html">ENV</a> division sequences.</li>
</ul>         
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit metagenomic sequences as <a href="/ddbj/env-e.html">ENV division</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p> 
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
`,ja:""}}]},"q4-metagenome-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw metagenomic sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and a sample to BioSample during or before the DRA submission.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> as a <a href="/bioproject/submission-e.html#Project-type">metagenome/environmental project</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}}]},"q3-transcriptome-tsa->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tsa-e.html">TSA (Transcriptome Shotgun Assembly)</a> data are computationally assembled transcribed RNA sequences from primary data including next generation sequencing reads. The primary sequence data used in the assemblies must be publicly available in INSDC.</p>
<ul>
  <li>Register unassembled raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project in BioProject and your library information in BioSample during or before the DRA submission.</li>
  <li>Submit TSA data to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related transcriptome data. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register your library information to <a href="/biosample/submission-e.html">BioSample</a> as sample(s) by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register unassembled raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit <a href="/ddbj/tsa-e.html">TSA</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. Assemblies obtained from multiple species are not acceptable except those derived from environmental samples.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject, BioSample(s) and DRA Run(s) that have been registered for the DRA submission.</li>
  <li>Annotation is optional. If you submit TSA with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. Sample annotation files of TSA sequences assembled from NGS reads <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1607251813">with annotation</a> and <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=931177555">without annotation</a>.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/tsa-e.html#flat-file">Accession numbers with a 4-letter prefix and 8 digits</a> will be assigned to the TSA sequences.</p>
`,ja:""}}]},"q3-transcriptome-expression->g-bp-bs-dra-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>For gene expression data by sequencing, submit raw data to the <a href="/dra/submission-e.html">Sequence Read Archive (DRA)</a> and processed data to the <a href="/gea/submit-sequence-e.html">Genomic Expression Archive (GEA)</a>. A BioProject and BioSamples should be registered for the DRA and GEA submissions. Both BioProject and BioSample submissions can be created during the DRA submission. Sequencing-based functional genomics data are accepted in the <a href="/gea/metadata-e.html">MAGE-TAB</a> format in compliance with the <a href="https://fairsharing.org/10.25504/FAIRsharing.a55z32">MINSEQE</a> guideline.</p>
<ol>
  <li>Register a project to BioProject in the D-way submission portal.</li>
  <li>Register samples to BioSample in the D-way submission portal.</li>
  <li>Register raw sequencing data to DRA in the D-way submission portal.</li>
  <li>Upload processed data files to a GEA submission directory by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSamples that have been registered for the DRA and GEA submissions. Enter metadata in MAGE-TAB template files and submit them in the D-way submission portal.</li>
</ol>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort and organizes related DRA and GEA data. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=FunctionalGenomics&definition=definition">functional genomics package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. BioSample is a record of biological sample with unique physical properties and majority of GEA submissions require more than one sample. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSamples that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}},{title:{en:"GEA",ja:"GEA"},body:{en:`<ul>
  <li>Create a new GEA submission in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</li>
  <li><a href="/gea/submit-sequence-e.html#upload-data">Upload processed data files by scp/sftp</a> to the GEA submission directory in the file server.</li>
  <li>In the GEA submission, select the DRA submission that have been registered for this submission. The metadata <a href="/gea/metadata-e.html#idf">IDF</a> and <a href="/gea/metadata-e.html#sdrf">SDRF</a> template files are generated. Describe an overview of the experiment in the IDF, and the relationship between samples, the DRA runs and processed data files in the SDRF.</li>
  <li>Submit the metadata IDF/SDRF and validate the data files.</li>
</ul>
`,ja:""}}]},"q3-transcriptome-est->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/est-e.html">Expressed Sequence Tags (ESTs)</a> are single-pass sequence reads from cDNA generated from mRNA or other RNA transcripts. They are tags of expression for the cDNA library of interest for a number of organisms. Sequences generated from next generation sequencing technologies should be submitted to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>. Assembled sequences should not be submitted as EST. <a href="/ddbj/index-e.html">DDBJ</a> accepts assembled EST sequences as the <a href="/ddbj/tsa-e.html">TSA (Transcriptome Shotgun Assembly) division</a>.</p>
<p>Submit ESTs to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the ESTs are part of a larger project.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>You may register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>You may register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#General_Sample">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit EST sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a> (<a href="/ddbj/est-e.html">instructions</a>).</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the ESTs are part of a larger project.</li>
  <li>No <a href="/ddbj/flat-file-e.html#FeaturesB">feature</a> annotation should not be included except source.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1753678626">A sample annotation file</a>.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the finished level geonme sequences.</p>       
`,ja:""}}]},"q4-transcriptome-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
  <li>Submit RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
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
`,ja:""}}]},"q4-transcriptome-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the RNA sequencing is part of a larger project.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>You may register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>You may register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
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
`,ja:""}}]},"q4-transcriptome-other-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:""}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) RNA sequences (e.g. cDNA sequences of genes) to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the RNA sequences.</p>
`,ja:""}}]},"q4-transcriptome-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}}]},"q3-other-dra->g-bp-bs-dra":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}}]},"q3-other-dramss->g-bp-bs-dra-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<ul>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register your project to BioProject and your sample(s) to BioSample during or before the DRA submission.</li>
  <li>Submit assembled other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort. The BioProject submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioSample submission can be done during the DRA submission.</p>
`,ja:""}},{title:{en:"DRA",ja:"DRA"},body:{en:`<p>Register raw sequencing reads to <a href="/dra/submission-e.html">DRA</a>. 
<ol>
  <li><a href="/dra/submission-e.html#create-new-submission">Create a new DRA submission</a> in the D-way submission portal.</li>
  <li><a href="/dra/submission-e.html#upload-sequence-data">Upload raw sequencing data files to the DRA submission directory</a> by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSample that have been registered for the DRA submission. Submit metadata in the <a href="/dra/submission-e.html#submit-metadata">web interface</a> or, when number of runs exceeds 100, <a href="/dra/submission-e.html#metadata-excel">in excel/XML files</a> in the D-way submission portal.</li>
</ol></p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit assembled other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
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
`,ja:""}}]},"q3-other-mss->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) assembled other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>. You may also include <a href="/bioproject/submission-e.html">BioProject</a> or <a href="/biosample/submission-e.html">BioSample</a> information, if the other DNA/RNA sequencing is part of a larger project.</p>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>You may register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>You may register your sample(s) to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit large-scale (more than 500 sequences and/or longer than 500kb) assembled other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
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
`,ja:""}}]},"q3-other-nsss->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) assembled/targeted other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>. Instructions in <a href="/ddbj/web-submission-help-e.html">web page</a and <a href="/assets/files/pdf/ddbj/websubHelp_full-e.pdf">PDF</a>.</p>
`,ja:""}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) assembled/targeted other DNA/RNA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>Select an annotation template and describe annotation.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/flat-file-e.html#ACCESSION">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the other DNA/RNA sequences.</p>
`,ja:""}}]},"q2-fgarray->g-bp-bs-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit functional genomics data (gene expression, gene regulation, epigenetics or genotyping) by microarray to the <a href="/gea/submit-array-e.html">Genomic Expression Archive (GEA)</a>. A BioProject and BioSamples should be registered before the GEA submission. Microarray data are accepted in the <a href="/gea/metadata-e.html">MAGE-TAB</a> format in compliance with the <a href="https://fairsharing.org/bsg-s000177/">MIAME</a> guideline.</p>
<ol>
  <li>Register a project to BioProject in the D-way submission portal.</li>
  <li>Register samples to BioSample in the D-way submission portal.</li>
  <li>Upload raw and processed data files to a GEA submission directory by scp/sftp.</li>
  <li>In the D-way submission portal, select the BioProject and BioSamples that have been registered for the GEA submission. Enter metadata in MAGE-TAB template files and submit them in the D-way submission portal.</li>
</ol>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject contains the description of the research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=FunctionalGenomics&definition=definition">functional genomics package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. BioSample is a record of biological sample with unique physical properties and majority of GEA submissions require more than one sample.</p>
`,ja:""}},{title:{en:"GEA",ja:"GEA"},body:{en:`<ul>
  <li>Create a new GEA submission in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</li>
  <li><a href="/gea/submit-array-e.html#upload-data">Upload raw and processed data files by scp/sftp</a> to the GEA submission directory in the file server.</li>
  <li>In the GEA submission, select the BioProject and BioSamples that have been registered for this submission. The metadata <a href="/gea/metadata-e.html#idf">IDF</a> and <a href="/gea/metadata-e.html#sdrf">SDRF</a> template files are generated. Describe an overview of the experiment in the IDF, and the relationship between samples, raw and processed data files in the SDRF.</li>
  <li>Submit the metadata IDF/SDRF and validate the data files.</li>
</ul>
`,ja:""}}]},"q2-fgngs->g-bp-bs-dra-gea":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit functional genomics data (gene expression, gene regulation, epigenetics or genotyping) by next generation sequencing (NGS) technologies to the <a href="/gea/submit-array-e.html">Genomic Expression Archive (GEA)</a>. NGS data are accepted in the <a href="/gea/metadata-e.html">MAGE-TAB</a> format in compliance with the <a href="https://fairsharing.org/10.25504/FAIRsharing.a55z32">MINSEQE</a> guideline.</p>
<ol>
  <li>Register raw sequencing reads to the <a href="/dra/submission-e.html">DDBJ Sequence Read Archive (DRA)</a>.</li>
  <li>Register a project to BioProject and samples to BioSample during or before the DRA submission.</li>
  <li>Upload processed data files to a GEA submission directory by scp/sftp.</li>
  <li>In the D-way submission portal, select the DRA submission which has been registered for the GEA submission. Enter metadata in MAGE-TAB template files and submit them in the D-way submission portal.</li>
</ol>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject contains the description of the research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register samples to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=FunctionalGenomics&definition=definition">functional genomics package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. BioSample is a record of biological sample with unique physical properties and majority of GEA submissions require more than one sample.</p>
`,ja:""}},{title:{en:"GEA",ja:"GEA"},body:{en:`<ul>
  <li>Create a new GEA submission in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>.</li>
  <li><a href="/gea/submit-array-e.html#upload-data">Upload processed data files by scp/sftp</a> to the GEA submission directory in the file server.</li>
  <li>In the GEA submission, select the DRA submission that have been registered for this submission. The metadata <a href="/gea/metadata-e.html#idf">IDF</a> and <a href="/gea/metadata-e.html#sdrf">SDRF</a> template files are generated. Describe an overview of the experiment in the IDF, and the relationship between samples, raw sequencing Runs and processed data files in the SDRF.</li>
  <li>Submit the metadata IDF/SDRF and validate the data files.</li>
</ul>
`,ja:""}}]},"q2-metabolomics->g-mb":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit metabolomics data to <a href="/metabobank/index-e.html">MetaboBank</a>.</p>
`,ja:""}},{title:{en:"MetaboBank",ja:null},body:{en:`<p>Submit metabolomics data to <a href="/metabobank/index-e.html">MetaboBank</a>. You need to register your project to <a href="/bioproject/submission-e.html">BioProject</a> and your samples to <a href="/biosample/submission-e.html">BioSample</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Please contact the <a href="/contact-ddbj-e.html">MetaboBank team</a> before submission.</p>
`,ja:""}}]},"q2-proteomics->g-jpost":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit proteomics data to the <a href="https://repository.jpostdb.org/">Japan Proteome Standard Repository (jPOSTrepo)</a>. jPOSTrepo is a public repository for datasets obtained from proteomics experiments and a member of <a href="http://www.proteomexchange.org/">ProteomeXchange Consortium</a>. Please note that jPOSTrepo is operated by the <a href="https://repository.jpostdb.org/about">jPOST team</a> and NOT by Bioinformation and DDBJ Center.</p>
`,ja:""}},{title:{en:"jPOST",ja:"jPOST"},body:{en:`<p>Submit your proteomics data to <a href="https://repository.jpostdb.org/">jPOSTrepo</a> (<a href="https://repository.jpostdb.org/help">instructions</a>). Please note that jPOSTrepo is operated by the <a href="https://repository.jpostdb.org/about">jPOST team</a> consisting of <a href="http://dbcls.rois.ac.jp/index-en.html">DBCLS</a> and Japanese universites and not by Bioinformation and DDBJ Center.</p>
`,ja:""}}]},"q3-variation-humsnp->g-jvarsnp":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit human short genetic variations (&le;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Short genetic variation data of JVar (JVar-SNP) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/snp/">dbSNP</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a>.</p>
<p>JVar is under construction.</p>
`,ja:""}},{title:{en:"JVar-SNP",ja:"JVar-SNP"},body:{en:`<p>Submit human short genetic variations (&le;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Short genetic variation data of JVar (JVar-SNP) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/snp/">dbSNP</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a>.</p>
<p>JVar is under construction.</p>
`,ja:""}}]},"q3-variation-humsv->g-jvarsv":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit human structural variations (&gt;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Structural variation data of JVar (JVar-SV) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/dbvar/">dbVar</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA, former DGVa)</a>.</p>
<p>JVar is under construction.</p>
`,ja:""}},{title:{en:"JVar-SV",ja:"JVar-SV"},body:{en:`<p>Submit human structural variations (&gt;50bp) to the <a href="/jvar/index-e.html">JVar (Japan Variation Database)</a>. Structural variation data of JVar (JVar-SV) will be exchanged with the NCBI <a href="https://www.ncbi.nlm.nih.gov/dbvar/">dbVar</a> and the EBI <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA, former DGVa)</a>.</p>
<p>JVar is under construction.</p>
`,ja:""}}]},"q3-variation-nonhumsnp->g-eva":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit non-human short genetic variations (&le;50bp) to the <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a> of <a href="https://www.ebi.ac.uk">EBI</a>. The NCBI <a href="https://www.ncbi.nlm.nih.gov/snp/">dbSNP</a> no longer accepts submissions of non-human organisms variations. Please note that EVA is provided by EBI and not by Bioinformation and DDBJ Center.</p>      
ja |
:
`}},{title:{en:"EVA",ja:"EVA"},body:{en:`<p>Submit non-human short genetic variations (&le;50bp) to <a href="https://www.ebi.ac.uk/eva/">EVA</a> of <a href="https://www.ebi.ac.uk">EBI</a>. EVA accepts all types of precise short genetic variations in any species (<a href="https://www.ebi.ac.uk/eva/?Submit-Data">instructions</a>).</p>
`,ja:""}}]},"q3-variation-nonhumsv->g-dgva":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p>Submit non-human structural variations (&gt;50bp) to the <a href="https://www.ebi.ac.uk/eva/">European Variation Archive (EVA)</a> of <a href="https://www.ebi.ac.uk">EBI</a>. The NCBI <a href="https://www.ncbi.nlm.nih.gov/dbvar">dbVar</a> no longer accepts submissions of non-human organisms variations. Please note that EVA is provided by EBI and not by Bioinformation and DDBJ Center.</p>
`,ja:""}},{title:{en:"DGVa",ja:"DGVa"},body:{en:`<p>Submit non-human structural variations (&gt;50bp) to <a href="https://www.ebi.ac.uk/eva/">EVA</a> (former DGVa) of <a href="https://www.ebi.ac.uk">EBI</a>. EVA accepts all types of structural variations in any species (<a href="https://www.ebi.ac.uk/eva/?Submit-Data">instructions</a>).</p>
`,ja:""}}]},"q3-tpa-experimental->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tpa-e.html">Third PArty data (TPA)</a> are submitted to INSDC as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.</p>
<p><a href="/ddbj/tpa-table-e.html#subcategories">TPA:experimental</a> describes records that include functional annotation derived at least in part from peer-reviewed wet-lab experimental investigation.</p>
<p>The following data are NOT acceptable as TPA:
<ul>
  <li>Microsatellites and related types of repeat regions.</li>
  <li>Annotation that has arisen from an automated tool, such as GeneMark, tRNA scan, or ORF finder, where no further evidence, experimental or otherwise, is presented for the annotation.</li>
  <li>Annotation from in vivo, in vitro, or in silico experimentation that will not be submitted for publication in a peer-reviewed journal.</li>
</ul></p>
`,ja:""}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) TPA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>In the Sequence tab, <a href="/ddbj/web-submission-help-e.html#flow-5">select "No" to the question "Did you determine the nucleotide sequence by yourself?"</a>.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/tpa-e.html">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the TPA sequences.</p>
`,ja:""}}]},"q3-tpa-inferential->g-nsss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tpa-e.html">Third PArty data (TPA)</a> are submitted to INSDC as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.</p>
<p><a href="/ddbj/tpa-table-e.html#subcategories">TPA:inferential</a> describes records that include functional annotation derived from peer-reviewed bioinformatic investigation.</p>
<p>The following data are NOT acceptable as TPA:
<ul>
  <li>Microsatellites and related types of repeat regions.</li>
  <li>Annotation that has arisen from an automated tool, such as GeneMark, tRNA scan, or ORF finder, where no further evidence, experimental or otherwise, is presented for the annotation.</li>
  <li>Annotation from in vivo, in vitro, or in silico experimentation that will not be submitted for publication in a peer-reviewed journal.</li>
</ul></p>
`,ja:""}},{title:{en:"NSSS",ja:"NSSS"},body:{en:`<p>Submit small-scale (less than 500 sequences and/or shorter than 500kb) TPA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/web-submission-e.html">Nucleotide Sequence Submission System (NSSS)</a>.</p>
<p>In the NSSS submission, you will need to:
<ul>
  <li>In the Sequence tab, <a href="/ddbj/web-submission-help-e.html#flow-5">select "No" to the question "Did you determine the nucleotide sequence by yourself?"</a>.</li>
  <li>Input sequences in the fasta format.</li>
  <li>Check the submission files and submit annotation and sequences.</li>
</ul>
</p>
<p><a href="/ddbj/tpa-e.html">Accession numbers with a 2-letter prefix and 6 digits</a> will be assigned to the TPA sequences.</p>
`,ja:""}}]},"q3-tpa-wgs-assembly->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tpa-e.html">Third PArty data (TPA)</a> are submitted to INSDC as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.</p>
<p><a href="/ddbj/tpa-table-e.html#subcategories">TPA:assembly</a> describes records reporting assembly or reassembly, for which the generation, whether it is purely informatic or informed by experimentation, has been subject to peer review. Annotation may or may not be available and does not require to be part of the peer review for this TPA class.</p>
<ul>
  <li>Register a project to BioProject and a sample to BioSample before the TPA WGS (Whole Genome Shotgun) submission.</li>
  <li>Submit the TPA WGS sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register a TPA sample to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Genomic_Sequences_Sample">MIGS: genome package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Relate the TPA sample and the original sample of sequences which had been used for the TPA assembly.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit the TPA <a href="/ddbj/wgs-e.html">WGS</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the TPA assembly WGS submission. A TPA WGS assembly must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional. If you submit a WGS assembly with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the genome</a> and <a href="/ddbj/tpa-table-e.html#subcategories">keywords for TPA</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files. <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=80322930">A sample annotation file of TPA assembly WGS sequences</a>.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/wgs-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to the TPA WGS sequences.</p>
`,ja:""}}]},"q3-tpa-tsa-assembly->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tpa-e.html">Third PArty data (TPA)</a> are submitted to INSDC as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.</p>
<p><a href="/ddbj/tpa-table-e.html#subcategories">TPA:assembly</a> describes records reporting assembly or reassembly, for which the generation, whether it is purely informatic or informed by experimentation, has been subject to peer review. Annotation may or may not be available and does not require to be part of the peer review for this TPA class.</p>
<p>The following data are NOT acceptable as TPA:
<ul>
  <li>Annotation from in vivo, in vitro, or in silico experimentation that will not be submitted for publication in a peer-reviewed journal.</li>
</ul></p>
<ul>
  <li>Register a project to BioProject and sample(s) to BioSample before the TPA TSA (Transcriptome Shotgun Assembly) submission.</li>
  <li>Submit the TPA TSA sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register TPA sample(s) to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/attribute-e.html?Core=Generic&definition=definition">Other samples package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Relate the TPA sample and the original sample of sequences which had been used for the TPA assembly.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit the TPA <a href="/ddbj/tsa-e.html">TSA</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and BioSample(s) that have been registered for the TPA TSA submission. A TPA TSA must be linked to a BioProject, BioSample(s) and original SRA Run(s).</li>
  <li>Annotation is optional. If you submit TSA sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide metadata on the <a href="/ddbj/file-format-e.html#describing_st_comment">sequencing and assembly of the transcriptome</a> and <a href="/ddbj/tpa-table-e.html#subcategories">keywords for TPA</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/tsa-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to the TPA TSA sequences.</p>
`,ja:""}}]},"q3-tpa-tls-assembly->g-bp-bs-mss":{sections:[{title:{en:"Overview",ja:"\u6982\u8981"},body:{en:`<p><a href="/ddbj/tpa-e.html">Third PArty data (TPA)</a> are submitted to INSDC as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.</p>
<p><a href="/ddbj/tpa-table-e.html#subcategories">TPA:assembly</a> describes records reporting assembly or reassembly, for which the generation, whether it is purely informatic or informed by experimentation, has been subject to peer review. Annotation may or may not be available and does not require to be part of the peer review for this TPA class.</p>
<p>The following data are NOT acceptable as TPA:
<ul>
  <li>Annotation from in vivo, in vitro, or in silico experimentation that will not be submitted for publication in a peer-reviewed journal.</li>
</ul></p>
<ul>
  <li>Register a project to BioProject and a sample to BioSample before the TPA TLS (Targeted Locus Study) submission.</li>
  <li>Submit the TPA TLS sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a></li>
</ul>
`,ja:""}},{title:{en:"BioProject",ja:"BioProject"},body:{en:`<p>Register a project to <a href="/bioproject/submission-e.html">BioProject</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. The BioProject describes the goal of your research effort.</p>
`,ja:""}},{title:{en:"BioSample",ja:"BioSample"},body:{en:`<p>Register a TPA sample to <a href="/biosample/submission-e.html">BioSample</a> by using the <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">MIMS: metagenome/environmental package</a> in the <a href="https://ddbj.nig.ac.jp/D-way">D-way submission portal</a>. Relate the TPA sample and the original sample of sequences which had been used for the TPA assembly.</p>
`,ja:""}},{title:{en:"MSS",ja:"MSS"},body:{en:`<p>Submit the TPA <a href="/ddbj/tls-e.html">TLS</a> sequences to <a href="/ddbj/index-e.html">DDBJ</a> through the <a href="/ddbj/mss-e.html">Mass Submission System (MSS)</a>.</p>
<p>In the MSS submission, you will need to:
<ul>
  <li>Provide a BioProject and a BioSample that have been registered for the TPA TSA submission. A TPA TSA must be linked to a BioProject and a BioSample.</li>
  <li>Annotation is optional. If you submit TLS sequences with annotation, it must contain the locus tag prefix so that genes are uniquely identifiable. Register the <a href="/ddbj/locus_tag-e.html">locus tag prefix</a> in the BioSample submission.</li>
  <li>Provide <a href="/ddbj/tpa-table-e.html#subcategories">keywords for TPA</a>.</li>
  <li>Prepare sequences in <a href="/ddbj/mss-e.html#flow-2">fasta files and metadata in annotation files</a> as submission files.</li>
  <li>Check the submission files by using the <a href="/ddbj/mss-e.html#Check_submission_files">MSS checking tool</a>.</li>
  <li><a href="/ddbj/mss-e.html#File_transfer">Send the submission files</a> by email attachment or scp/sftp.</li>
</ul>
</p>
<p><a href="/ddbj/tls-e.html#flat-file">Accession numbers with a 4-letter WGS prefix and 8 digits</a> (e.g., ZZZZ01000001) will be assigned to the TPA TLS sequences.</p>
`},ja:""}]}};const G=k;function I(a){const e=G[a];if(!e)throw new Error(`goal not found: id=${a}`);return e}const N=y`:host{--max-height:calc(100vh - 2em)}.container{display:grid;grid-template:"header     header" auto "nav        content" 1fr/min-content 1fr;max-height:var(--max-height)}.container>h1{grid-area:header}.container>nav{grid-area:nav;text-align:center}.container>main{grid-area:content;overflow:auto}.space-between{display:flex;justify-content:space-between}.no-margin-around-y>:first-child{margin-top:0;padding-top:0}.no-margin-around-y>:last-child{margin-bottom:0;padding-bottom:0}.tabs>a{display:block;padding:calc(.5em / 1.2) calc(1.75em / 1.2);border-style:solid;border-color:transparent;border-width:3px 0;transition:background-color .2s,border-color .2s}.tabs>a:hover:not(.active){background-color:#eee}.tabs>a.active{border-bottom-color:#ff7370;text-decoration:none;color:inherit;font-weight:700}svg.icon{height:1em;width:1em;vertical-align:-.1em}`;var _=Object.defineProperty,C=Object.getOwnPropertyDescriptor,o=(a,e,s,i)=>{for(var n=i>1?void 0:i?C(e,s):e,m=a.length-1,h;m>=0;m--)(h=a[m])&&(n=(i?h(e,s,n):h(n))||n);return i&&n&&_(e,s,n),n},g=(a,e,s)=>{if(!e.has(a))throw TypeError("Cannot "+s)},S=(a,e,s)=>(g(a,e,"read from private field"),s?s.call(a):e.get(a)),J=(a,e,s)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,s)},E=(a,e,s,i)=>(g(a,e,"write to private field"),i?i.call(a,s):e.set(a,s),s),r;let t=class extends D(R){constructor(){super(...arguments);J(this,r,void 0)}get section(){return S(this,r)||this.goal?.sections[0]}set section(a){const e=S(this,r);E(this,r,a),this.requestUpdate("section",e)}get previousSection(){const{goal:a,section:e}=this;if(!a||!e)return;const s=a.sections.indexOf(e);return s<=0?void 0:a.sections[s-1]}get nextSection(){const{goal:a,section:e}=this;if(!a||!e)return;const s=a.sections.indexOf(e);return s===-1||s>=a.sections.length?void 0:a.sections[s+1]}render(){const{goal:a}=this;return a?l`<div class="container border fade"><h1 class="box bg-primary my-0 font-large">${O} ${d("Submission Instructions")}</h1><nav class="box tabs font-heading font-large">${a.sections.map(e=>l`<a @click="${this.selectSection(e)}" class="${this.section===e?"active":""}" href="#">${this.localize(e.title)}</a>`)}</nav><main ${T()} class="box vstack">${this.sectionTemplate()}</main></div>`:""}sectionTemplate(){if(!this.section)return"";const{body:a}=this.section;return l`<div class="no-margin-around-y">${q(this.localize(a))}</div><nav class="space-between"><div>${this.sectionLinkTemplate(`\xAB ${d("Prev")}`,this.previousSection)}</div><div>${this.sectionLinkTemplate(`${d("Next")} \xBB`,this.nextSection)}</div></nav>`}sectionLinkTemplate(a,e){return e?l`<a @click="${this.selectSection(e)}" href="#">${a}</a>`:""}selectSection(a){return e=>{e.preventDefault(),this.section=a}}};r=new WeakMap,t.styles=[w,N],o([B({converter:F})],t.prototype,"goal",2),o([b()],t.prototype,"section",1),o([b()],t.prototype,"previousSection",1),o([b()],t.prototype,"nextSection",1),t=o([v(),M("submission-wizard-goal")],t);function F(a){return a?I(a):void 0}const O=A`<svg class="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 9.75V16.1786C39 18.2496 32.2843 19.9286 24 19.9286C15.7157 19.9286 9 18.2496 9 16.1786V9.75C9 7.67893 15.7157 6 24 6C32.2843 6 39 7.67893 39 9.75ZM9.62114 19.7144C11.4651 21.2634 17.2049 22.393 24 22.393C30.7951 22.393 36.5349 21.2634 38.3789 19.7144C38.783 20.0538 39 20.4134 39 20.7857V27.2143C39 29.2853 32.2843 30.9643 24 30.9643C15.7157 30.9643 9 29.2853 9 27.2143V20.7858C9.00002 20.4135 9.21703 20.0538 9.62114 19.7144ZM24 33.6786C17.205 33.6786 11.4652 32.549 9.62118 31C9.21703 31.3395 9 31.6991 9 32.0714V38.5C9 40.5711 15.7157 42.25 24 42.25C32.2843 42.25 39 40.5711 39 38.5V32.0714C39 31.6991 38.783 31.3395 38.3788 31C36.5348 32.549 30.795 33.6786 24 33.6786ZM32.3333 37.3333C32.3333 37.9777 31.811 38.5 31.1667 38.5C30.5223 38.5 30 37.9777 30 37.3333C30 36.689 30.5223 36.1667 31.1667 36.1667C31.811 36.1667 32.3333 36.689 32.3333 37.3333ZM35.8333 37.3333C36.4777 37.3333 37 36.811 37 36.1667C37 35.5223 36.4777 35 35.8333 35C35.189 35 34.6667 35.5223 34.6667 36.1667C34.6667 36.811 35.189 37.3333 35.8333 37.3333Z" fill="#333333"/></svg>`;export{t as SubmissionWizardGoal};
