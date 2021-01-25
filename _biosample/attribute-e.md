---
layout: tabbed_indexed_content
service_name: BioSample
title: Sample attributes
category: biosample
current_tab: sample attribute
tab_menu:
  - id: home
    title: Home
    url: /biosample/index-e.html
  - id: handbook
    title: Handbook
    url: /biosample/submission-e.html
  - id: sample attribute
    title: Sample Attribute
    url: /biosample/attribute-e.html
    children:
      - title: Example files
        url: https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482
  - id: validation rules
    title: Validation Rules
    url: /biosample/validation-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=biosample
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/BSSearch/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/biosample
    children:
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/biosample/xsd
  - id: about biosample
    title: About BioSample
    url: /biosample/about-biosample-e.html
lang: en
---

<form method="get" action=""> <button id="all" type="button" name="all" value="all">List all sample attributes</button> </form>
<form id="sample_attr_form" method="get" action="">
  <div id="main_index" class="biosample_attr">
    <div id="sample_type"> <a href="/biosample/submission-e.html#Area_core-package" class="title">Sample type (Core Package)</a>
      <ul>
        <li>
          <div class="radio"><input type="radio" id="Core_MIxS" name="Core" value="MIxS"></div>
          <!-- .radio --><label class="clearfix" for="MIxS"><a href="/biosample/submission-e.html#MIxS_Sample">Genome, metagenome or marker sequences (MIxS compliant)</a></label>
          <ul>
            <li>
              <div class="radio"><input type="radio" id="MIMS.me" name="SampleType" value="MIMS.me"></div>
              <!-- .radio --><label class="clearfix" for="MIMS.me">Environmental/Metagenome Genomic Sequences <a href="/biosample/submission-e.html#Meta_Genomic_Sequences_Sample">(MIMS)</a></label> </li>
            <li>
              <div class="radio"><input type="radio" id="MIGS.ba" name="SampleType" value="MIGS.ba"></div>
              <!-- .radio --><label class="clearfix" for="MIGS.ba">Cultured Bacterial/Archaeal Genomic Sequences <a href="/biosample/submission-e.html#Genomic_Sequences_Sample">(MIGS)</a></label> </li>
            <li>
              <div class="radio"><input type="radio" id="MIGS.eu" name="SampleType" value="MIGS.eu"></div>
              <!-- .radio --><label class="clearfix" for="MIGS.eu">Eukaryotic Genomic Sequences <a href="/biosample/submission-e.html#Genomic_Sequences_Sample">(MIGS)</a></label> </li>
            <li>
              <div class="radio"><input type="radio" id="MIGS.vi" name="SampleType" value="MIGS.vi"></div>
              <!-- .radio --><label class="clearfix" for="MIGS.vi">Viral Genomic Sequences <a href="/biosample/submission-e.html#Genomic_Sequences_Sample">(MIGS)</a></label> </li>
            <li>
              <div class="radio"><input type="radio" id="MIMARKS.specimen" name="SampleType" value="MIMARKS.specimen"></div>
              <!-- .radio --><label class="clearfix" for="MIMARKS.specimen">Specimen Marker Sequences <a href="/biosample/submission-e.html#Marker_Sequences_Sample">(MIMARKS)</a></label> </li>
            <li>
              <div class="radio"><input type="radio" id="MIMARKS.survey" name="SampleType" value="MIMARKS.survey"></div>
              <!-- .radio --><label class="clearfix" for="MIMARKS.survey">Survey related Marker Sequences <a href="/biosample/submission-e.html#Marker_Sequences_Sample">(MIMARKS)</a></label> </li>
          </ul>
        </li>
        <li>
          <div class="radio"><input type="radio" id="Core_FunctionalGenomics" name="Core" value="FunctionalGenomics"></div>
          <!-- .radio --><label class="clearfix" for="FunctionalGenomics"><a href="/biosample/submission-e.html#functional_genomics_samples">Functional genomics samples (e.g. transcriptome, epigenetics etc)</a></label> </li>
        <li>
          <div class="radio"><input type="radio" id="Core_Generic" name="Core" value="Generic"></div>
          <!-- .radio --><label class="clearfix" for="Generic"><a href="/biosample/submission-e.html#General_Sample">Other samples (e.g. transcriptome, epigenetics etc)</a></label> </li>
      </ul>
    </div>
    <!-- #sample_type -->
    <div id="env_package"> <a href="/submission-e.html#Environmental_package" class="title">Environmental package (MIxS Sample)</a>
      <ul>
        <li>
          <div class="radio"><input type="radio" id="No_package" name="Package" value="No_package"></div>
          <!-- .radio --><label class="clearfix" for="No_package">No package</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.air" name="Package" value="MIGS/MIMS/MIMARKS.air"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.air">air</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.host-associated" name="Package" value="MIGS/MIMS/MIMARKS.host-associated"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.host-associated">host-associated</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.human-associated" name="Package" value="MIGS/MIMS/MIMARKS.human-associated"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.human-associated">human-associated</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.human-gut" name="Package" value="MIGS/MIMS/MIMARKS.human-gut"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.human-gut">human-gut</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.human-oral" name="Package" value="MIGS/MIMS/MIMARKS.human-oral"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.human-oral">human-oral</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.human-skin" name="Package" value="MIGS/MIMS/MIMARKS.human-skin"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.human-skin">human-skin</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.human-vaginal" name="Package" value="MIGS/MIMS/MIMARKS.human-vaginal"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.human-vaginal">human-vaginal</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.microbial" name="Package" value="MIGS/MIMS/MIMARKS.microbial"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.microbial">microbial mat/biofilm</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.miscellaneous" name="Package" value="MIGS/MIMS/MIMARKS.miscellaneous"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.miscellaneous">miscellaneous or artificial</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.plant-associated" name="Package" value="MIGS/MIMS/MIMARKS.plant-associated"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.plant-associated">plant-associated</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.sediment" name="Package" value="MIGS/MIMS/MIMARKS.sediment"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.sediment">sediment</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.soil" name="Package" value="MIGS/MIMS/MIMARKS.soil"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.soil">soil</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.wastewater" name="Package" value="MIGS/MIMS/MIMARKS.wastewater"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.wastewater">wastewater/sludge</label> </li>
        <li>
          <div class="radio"><input type="radio" id="MIGS/MIMS/MIMARKS.water" name="Package" value="MIGS/MIMS/MIMARKS.water"></div>
          <!-- .radio --><label class="clearfix" for="MIGS/MIMS/MIMARKS.water">water</label> </li>
      </ul>
    </div>
    <!-- #env.package -->
  </div>
  <!-- #main_index --><button id="definition" class="submit_button" type="button" name="definition" value="definition">DEFINITION</button> <button id="download" class="submit_button" type="button" name="download" value="download">DOWNLOAD</button> </form>
<div class="bs_desc">
  <p>After selecting the relevant Sample type, click the DOWNLOAD button to download the submission template and the DEFINITION button to review the definitions and formats of attribute. <a href="https://docs.google.com/spreadsheets/d/1Q37MHZCEgqH0_b4W2RAPYjLVYZbaLTb_oXSi91tRWFM/edit#gid=631330335">See definition in the table</a>. <a href="https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482">BioSample example submission files are available for several packages.</a></p>
</div>
