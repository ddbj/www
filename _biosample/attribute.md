---
layout: tabbed_indexed_content
service_name: BioSample
title: サンプル属性
category: biosample
current_tab: sample attribute
lang: ja
---

<form method="get" action="">
    <button id="all" type="button" name="all" value="all">List all sample attributes</button>
</form>
<form id="sample_attr_form" method="get" action="">
  <div id="main_index" class="biosample_attr">
    <div id="sample_package">
      Core package (<a href="/biosample/sample-info.html#Sample-package">Packages</a>, <a href="/biosample/overview.html#genome-assembly-sample-package">Genome assembly sample</a>)
      <ul>
        <li>
        <div class="radio"><input type="radio" id="Core_Standard" name="Core" value="Standard"></div><label class="clearfix" for="Standard">Standard</label>
          <ul>
            <li>
              <div class="radio"><input type="radio" id="SARS-CoV-2.cl" name="SampleType" value="SARS-CoV-2.cl"></div><label class="clearfix" for="SARS-CoV-2.cl">SARS-CoV-2: clinical or host-associated</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="SARS-CoV-2.wwsurv" name="SampleType" value="SARS-CoV-2.wwsurv"></div><label class="clearfix" for="SARS-CoV-2.wwsurv">SARS-CoV-2: wastewater surveillance</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Microbe" name="SampleType" value="Microbe"></div><label class="clearfix" for="Microbe">Microbe</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Model.organism.animal" name="SampleType" value="Model.organism.animal"></div><label class="clearfix" for="Model.organism.animal">Model organism or animal</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Metagenome.environmental" name="SampleType" value="Metagenome.environmental"></div><label class="clearfix" for="Metagenome.environmental">Metagenome or environmental</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Invertebrate" name="SampleType" value="Invertebrate"></div><label class="clearfix" for="Invertebrate">Invertebrate</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Human" name="SampleType" value="Human"></div><label class="clearfix" for="Human">Human</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Plant" name="SampleType" value="Plant"></div><label class="clearfix" for="Plant">Plant</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Virus" name="SampleType" value="Virus"></div><label class="clearfix" for="Virus">Virus</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Beta-lactamase" name="SampleType" value="Beta-lactamase"></div><label class="clearfix" for="Beta-lactamase">Beta-lactamase</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Omics" name="SampleType" value="Omics"></div><label class="clearfix" for="Omics">Omics</label>
            </li>
          </ul>
        </li>
        <li>
        <div class="radio"><input type="radio" id="Core_Pathogen" name="Core" value="Pathogen"></div><label class="clearfix" for="Pathogen">Pathogen</label>
          <ul>
            <li>
              <div class="radio"><input type="radio" id="Pathogen.cl" name="SampleType" value="Pathogen.cl"></div><label class="clearfix" for="Pathogen.cl">Pathogen: clinical or host-associated</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="Pathogen.env" name="SampleType" value="Pathogen.env"></div><label class="clearfix" for="Pathogen.env">Pathogen: environmental/food/other</label>
            </li>
          </ul>
        </li>
        <li>
        <div class="radio"><input type="radio" id="Core_MIxS" name="Core" value="MIxS"></div> <label class="clearfix" for="MIxS">Genome, metagenome or marker sequences (MIxS compliant)</label>
          <ul>
            <li>
              <div class="radio"><input type="radio" id="MIGS.ba" name="SampleType" value="MIGS.ba"></div> <label class="clearfix" for="MIGS.ba">MIGS Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIGS.eu" name="SampleType" value="MIGS.eu"></div> <label class="clearfix" for="MIGS.eu">Eukaryotic Genomic Sequences (MIGS.eu)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIGS.vi" name="SampleType" value="MIGS.vi"></div> <label class="clearfix" for="MIGS.vi">Viral Genomic Sequences (MIGS.vi)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIMS.me" name="SampleType" value="MIMS.me"></div> <label class="clearfix" for="MIMS.me">Environmental/Metagenome Genomic Sequences (MIMS.me)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIMAG" name="SampleType" value="MIMAG"></div> <label class="clearfix" for="MIMAG">Metagenome-assembled Genome Sequences (MIMAG)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MISAG" name="SampleType" value="MISAG"></div> <label class="clearfix" for="MISAG">Single Amplified Genome Sequences (MISAG)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIMARKS.specimen" name="SampleType" value="MIMARKS.specimen"></div> <label class="clearfix" for="MIMARKS.specimen">Specimen Marker Sequences (MIMARKS.specimen)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIMARKS.survey" name="SampleType" value="MIMARKS.survey"></div> <label class="clearfix" for="MIMARKS.survey">Survey related Marker Sequences (MIMARKS.survey)</label>
            </li>
            <li>
              <div class="radio"><input type="radio" id="MIUVIG" name="SampleType" value="MIUVIG"></div> <label class="clearfix" for="">Uncultivated Viral Genome Sequences (MIUVIG)</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
    <div id="env_package">
      <a href="/biosample/submission.html#mixs" class="title">Environmental package (MIxS Sample)</a>
      <ul>
        <li>
          <div class="radio"><input type="radio" id="No_package" name="Package" value="No_package"></div> <label class="clearfix" for="No_package">No package</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="agriculture" name="Package" value="agriculture"></div><label class="clearfix" for="agriculture">agriculture</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="air" name="Package" value="air"></div> <label class="clearfix" for="air">air</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="built" name="Package" value="built"></div> <label class="clearfix" for="built">built</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="food-animal" name="Package" value="food-animal"></div> <label class="clearfix" for="food-animal and animal feed">food-animal and animal feed</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="food-farm_env" name="Package" value="food-farm_env"></div> <label class="clearfix" for="food-farm environment">food-farm environment</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="food-prod_facility" name="Package" value="food-prod_facility"></div> <label class="clearfix" for="food-food production facility">food-food production facility</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="food-human_foods" name="Package" value="food-human_foods"></div> <label class="clearfix" for="food-human foods">food-human foods</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="host-associated" name="Package" value="host-associated"></div> <label class="clearfix" for="host-associated">host-associated</label>
        </li>
        <li>
          <div class="radio"><input type="radio" id="human-associated" name="Package" value="human-associated"></div> <label class="clearfix" for="human-associated">human-associated</label>
        </li>
        <li>
<div class="radio"><input type="radio" id="human-gut" name="Package" value="human-gut"></div> <label class="clearfix" for="human-gut">human-gut</label>
</li>
        <li>
<div class="radio"><input type="radio" id="human-oral" name="Package" value="human-oral"></div> <label class="clearfix" for="human-oral">human-oral</label>
</li>
        <li>
<div class="radio"><input type="radio" id="human-skin" name="Package" value="human-skin"></div> <label class="clearfix" for="human-skin">human-skin</label>
</li>
        <li>
<div class="radio"><input type="radio" id="human-vaginal" name="Package" value="human-vaginal"></div> <label class="clearfix" for="human-vaginal">human-vaginal</label>
</li>
				<li>
          <div class="radio"><input type="radio" id="hydrocarbon-cores" name="Package" value="hydrocarbon-cores"></div> <label class="clearfix" for="hydrocarbon resources-cores">hydrocarbon resources-cores</label>
        </li>
				<li>
					<div class="radio"><input type="radio" id="hydrocarbon-fluids_swabs" name="Package" value="hydrocarbon-fluids_swabs"></div> <label class="clearfix" for="hydrocarbon resources-fluids/swabs">hydrocarbon resources-fluids/swabs</label>
				</li>
				
        <li>
<div class="radio"><input type="radio" id="microbial" name="Package" value="microbial"></div> <label class="clearfix" for="microbial">microbial mat/biofilm</label>
</li>
        <li>
<div class="radio"><input type="radio" id="miscellaneous" name="Package" value="miscellaneous"></div> <label class="clearfix" for="miscellaneous">miscellaneous or artificial</label>
</li>
        <li>
<div class="radio"><input type="radio" id="plant-associated" name="Package" value="plant-associated"></div> <label class="clearfix" for="plant-associated">plant-associated</label>
</li>
        <li>
<div class="radio"><input type="radio" id="sediment" name="Package" value="sediment"></div> <label class="clearfix" for="sediment">sediment</label>
</li>
        <li>
<div class="radio"><input type="radio" id="soil" name="Package" value="soil"></div> <label class="clearfix" for="soil">soil</label>
</li>
<li>
	<div class="radio"><input type="radio" id="symbiont-associated" name="Package" value="symbiont-associated"></div> <label class="clearfix" for="symbiont-associated">symbiont-associated/sludge</label>
	</li>

        <li>
<div class="radio"><input type="radio" id="wastewater" name="Package" value="wastewater"></div> <label class="clearfix" for="wastewater">wastewater/sludge</label>
</li>
        <li>
<div class="radio"><input type="radio" id="water" name="Package" value="water"></div> <label class="clearfix" for="water">water</label>
</li>
      </ul>
    </div>
<!-- #env.package -->
  </div> <!-- #main_index -->

  <button id="definition" class="submit_button" type="button" name="definition" value="definition">DEFINITION</button>
  
</form>

パッケージを選択し、「DEFINITION」でパッケージに含まれる属性一覧と説明を閲覧します。[定義表](https://docs.google.com/spreadsheets/d/1myigsvkiftZ2ReqBAll4n3zajwHfyJfccDZNwlcqNak/edit?gid=631330335#gid=631330335)

<p>*: 必須<br>
**数字: 同一数字グループの中で少なくとも一つ必須（選択必須）</p>

<div class="bs_desc"></div>