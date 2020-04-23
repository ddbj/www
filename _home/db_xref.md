---
layout: indexed_content
title: Controlled vocabulary for /db\_xref qualifier
pathname: db_xref
category: _home
---

# Controlled vocabulary for /db\_xref qualifier

The original site; [Controlled vocabulary for /db\_xref qualifier](http://www.insdc.org/documents/dbxref-qualifier-vocabulary) 2019.08.14 version  
See also [db\_xref](https://www.ncbi.nlm.nih.gov/genbank/collab/db_xref) at NCBI.

New qualifier was introduced in version 1.08 (December 1, 1995) of the Feature table definitions: /db\_xref. This new qualifier serves as a vehicle for the linking of DNA sequence records to other external databases.

The text below outlines the format and the present list of allowed database cross references. Inquiries about the addition of other database types should be made to one of the collaborating databases, listed above.

## Definition of /db\_xref qualifier

``` flat-file code
Qualifier:       /db_xref="[database]:[identifier]"
Definition:      database cross-reference: pointer to related information in
         another database                     
Scope:           all feature keys
Value format:    "[database]:[identifier]" where [database] is the name of the
         database containing related information, and 
         [identifier] is the internal identifier of the related 
         information according to the naming conventions of the
         cross-referenced database.
```

For all [*databases*] types 'Case' is important. All databases member of the International Collaboration (DDBJ, ENA/EBI and GenBank/NCBI) may make recommendations for additions or removal of databases to this list at their convenience, and need not rely on the release cycle of the Feature Table documentation.

## Database:

Description of database, and type with example(s).

  - Database  
    Description of database name in /db\_xref qualifier
  - Full name  
    Full name of the database
  - Format  
    Format for /db\_xref qualifier
  - Diff  
    Flag for any difference with [the original site](http://www.insdc.org/documents/dbxref-qualifier-vocabulary) in the line.
  - Use  
    **Yes**: to be described by DDBJ submitters
    **No**: not to be described by DDBJ submitters
    **Auto**: not to be described by DDBJ submitters, described by the database

Presently the list includes:

|  Database  |  Full name	  |  Format  |  Diff  |  Use  |
| ---- | ---- | ---- | ---- | ---- |
|  [AceView/WormGenes](//www.ncbi.nlm.nih.gov/IEB/Research/Acembly/)  |  AceView Worm Genome  |  /db\_xref="AceView/WormGenes:vha-6"  |  空白  |  No  |
|  AFTOL  |  Assembling the Fungal Tree of Life  |  /db\_xref="AFTOL:959"  |  URL removed  |  No  |
|  [AntWeb](//www.antweb.org/)  |  Ant Database  |  /db\_xref="AntWeb:CASENT0058943-D01"  |  空白  |  No  |
|  [APHIDBASE](//www.aphidbase.com/)  |  Aphid Genome Database  |  /db\_xref="APHIDBASE:ACYPI007424"  |  URL changed  |  No  |
|  [ApiDB](//eupathdb.org/eupathdb/)  |  Apicomplexan Database Resources  |  /db\_xref="ApiDB:cgd1\_1090"  |  空白  |  No  |
|  [ApiDB\_CryptoDB](//cryptodb.org/cryptodb/)  |  Cryptosporidium Genome Resources  |  /db\_xref="ApiDB\_CryptoDB:cgd7\_20"  |  空白  |  No  |
|  [ApiDB\_PlasmoDB](//www.plasmodb.org/plasmo/home.jsp)  |  Plasmodium Genome Resources  |  /db\_xref="ApiDB\_PlasmoDB: PF11\_0344"  |  空白  |  No  |
|  [ApiDB\_ToxoDB](//www.toxodb.org/toxo/home.jsp)  |  Toxoplasma Genome Resources  |  /db\_xref="ApiDB\_ToxoDB:49.m00014"  |  空白  |  No  |
|  [Araport](//www.araport.org/)  |  Arabidopsis Information Portal  |  /db\_xref="[Araport:AT1G01010](https://www.araport.org/locus/AT1G01010)"  |  空白  |  No  |
|  [ASAP](//asap.genetics.wisc.edu/asap/logon.php)  |  A Systematic Annotation Package for Community Analysis of Genomes  |  /db\_xref="ASAP:ABE-0000006"  |  URL changed  |  No  |
|  [ATCC](//www.atcc.org/)  |  American Type Culture Collection database  |  /db\_xref="ATCC:123456"  |  空白  |  No  |
|  [ATCC(dna)](//www.atcc.org/)  |  American Type Culture Collection database  |  /db\_xref="ATCC(dna):123456”  |  空白  |  No  |
|  [ATCC(in host)](//www.atcc.org/)  |  American Type Culture Collection database  |  /db\_xref="ATCC(in host):123456"  |  空白  |  No  |
|  [Axeldb](//www.dkfz-heidelberg.de/molecular_embryology/axeldb.htm)  |  A Xenopus laevis database  |  /db\_xref="Axeldb:32B3.1"  |  空白  |  No  |
|  [BDGP\_EST](//www.fruitfly.org/EST/index.shtml)  |  Berkeley Drosophila Genome Project EST database  |  /db\_xref="BDGP\_EST:123456"  |  空白  |  No  |
|  [BDGP\_INS](//www.fruitfly.org/)  |  Berkeley Drosophila Genome Project database -- Insertion  |  /db\_xref="BDGP\_INS:123456"  |  空白  |  No  |
|  [BEEBASE](//hymenopteragenome.org/beebase/?q=home)  |  BeeBase  |  /db\_xref="[BEEBASE:GB55480](//hymenopteragenome.org/cgi-bin/gb2/gbrowse/bee_genome45/?name=GB55480)"  |  空白  |  No  |
|  [BEETLEBASE](//www.beetlebase.org/)  |  Tribolium Genome Database -- Insertion  |  /db\_xref="BEETLEBASE:TC030551"  |  空白  |  No  |
|  [BEI](//www.beiresources.org/)  |  BEI Resources  |  /db\_xref="[BEI:NR-50065](https://www.beiresources.org/Catalog/animalViruses/NR-50065.aspx)"  |  空白  |  No  |
|  [BGD](//bovinegenome.org/genepages/btau40/)  |  Bovine Genome Database  |  /db\_xref="BGD:BT10004"  |  URL changed  |  No  |
|  [BOLD](//www.barcodinglife.com/)  |  Barcode of Life database  |  /db\_xref="Bold:EPAF263"  |  空白  |  Yes  |
|  [CABRI](//www.cabri.org/)  |  Common Access to Biological Resources and Information project  |  /db\_xref="CABRI: ACC 424"  |  空白  |  No  |
|  [CCAP](//www.ccap.ac.uk/)  |  Culture Collection of algae and protozoa  |  /db\_xref="CCAP: 1460/15"  |  空白  |  No  |
|  [CDD](//www.ncbi.nlm.nih.gov/Structure/cdd/cdd.shtml)  |  Conserved Domain Database  |  /db\_xref="CDD:02194"  |  URL changed  |  No  |
|  [CGD](//www.candidagenome.org/)  |  Candida Genome Database  |  /db\_xref="CGD:CAL0005934"  |  空白  |  No  |
|  [dbEST](//www.ncbi.nlm.nih.gov/dbEST/index.html)  |  EST database maintained at the NCBI.  |  /db\_xref="dbEST:123456"<br>/db\_xref="dbEST:BP535535"  |  URL changed  |  No  |
|  [dbProbe](//www.ncbi.nlm.nih.gov/probe)  |  NCBI Probe database Public registry of nucleic acid reagents  |  /db\_xref="dbProbe:38"  |  URL changed  |  No  |
|  [dbSNP](//www.ncbi.nlm.nih.gov/SNP/)  |  Variation database maintained at the NCBI.  |  /db\_xref="dbSNP:4647"<br>/db\_xref="dbSNP:rs133073"  |  URL changed  |  No  |
|  [dbSTS](//www.ncbi.nlm.nih.gov/dbSTS/index.html)  |  STS database maintained at the NCBI.  |  /db\_xref="dbSTS:456789"<br>/db\_xref="dbSTS:BV210161"  |  URL changed  |  No  |
|  [dictyBase](//dictybase.org/)  |  Dictyostelium genome database  |  /db\_xref="dictyBase:DDB0191090"  |  空白  |  No  |
|  [ECOCYC](//ecocyc.org/)  |  *E. coli* Database  |  /db\_xref="ECOCYC:sroC"  <br>/db\_xref="ECOCYC:C0343"  |  空白  |  No  |
|  [EcoGene](//ecogene.org/)  |  Database of *Escherichia coli* Sequence and Function  |  /db\_xref="EcoGene:EG11277"  |  空白  |  No  |
|  [ENSEMBL](//www.ensembl.org/)  |  Database of automatically annotated genomic data  |  /db\_xref="ENSEMBL:HUMAN-Clone-AC005612"<br>/db\_xref="ENSEMBL:HUMAN-Gene-ENSG00000007102"  |  空白  |  No  |
|  [EnsemblGenomes](//ensemblgenomes.org/)  |  Extending Ensembl across the taxonomic space  |  /db\_xref="EnsemblGenomes:AAC73116"<br>/db\_xref="EnsemblGenomes:b0005"  |  空白  |  No  |
|  [EnsemblGenomes-Gn](//ensemblgenomes.org/)  |  EnsemblGenomes Gene  |  /db\_xref="EnsemblGenomes-Gn:WBGene00022276"  |  Added  |  No  |
|  [EnsemblGenomes-Tr](//ensemblgenomes.org/)  |  EnsemblGenomes Transcript  |  /db\_xref="EnsemblGenomes-Tr:MAPG\_00606T0"  |  Added  |  No  |
|  [EPD](//epd.vital-it.ch/)  |  Eukaryotic Promotor Database  |  /db\_xref="EPD: EP00576"  |  空白  |  No  |
|  ERIC  |  Enteropathogen Resource Integration Center  |  /db\_xref="ERIC:ABY-0246137"  |  URL removed  |  No  |
|  ESTLIB  |  EBI's EST library identifier  |  /db\_xref="ESTLIB:1200"  |  空白  |  No  |
|  [FANTOM\_DB](//fantom.gsc.riken.go.jp/)  |  Database of Functional Annotation of Mouse  |  /db\_xref="FANTOM\_DB:0610005A07"  |  空白  |  Auto  |
|  [FBOL](//www.fungalbarcoding.org/)  |  International Fungal Working Group Fungal Barcoding  |  /db\_xref="FBOL:2224"  |  空白  |  Yes  |
|  [FLYBASE](//www.flybase.org/)  |  Database of Genetic and molecular data of Drosophila.  |  /db\_xref="FLYBASE:FBgn0000024"  |  空白  |  No  |
|  [Fungorum](//www.indexfungorum.org/)  |  Index Fungorum  |  /db\_xref="Fungorum:ID550186"  |  空白  |  No  |
|  [GABI](//www.gabipd.org/)  |  Network of Different Plant Genomic Research Projects  |  /db\_xref="GABI:HA05J18"  |  URL changed  |  No  |
|  GDB  |  Human Genome Database accession numbers  |  /db\_xref="GDB:G00-128-600"  |  URL removed  |  No  |
|  [GeneDB](//www.genedb.org/)  |  Curated gene database for Schizosaccharomyces pombe,Leishmania major and Trypanosoma brucei  |  /db\_xref="GeneDB:SPCC285.16c"  |  空白  |  No  |
|  [GeneID](//www.ncbi.nlm.nih.gov/gene)  |  Entrez Gene Database (replaces NCBI Locus Link)  |  /db\_xref="GeneID:3054987"  |  URL changed  |  No  |
|  GI  |  GenInfo identifier, used as a unique sequence identifier for nucleotide and proteins  |  /db\_xref="GI:1234567890"  |  空白  |  No  |
|  [GO](//amigo.geneontology.org/)  |  Gene Ontology Database identifier  |  /db\_xref="GO:123"  |  空白  |  No  |
|  [GOA](//www.ebi.ac.uk/GOA/)  |  Gene Ontology Annotation Database Identifier  |  /db\_xref="GOA:P01100"  |  空白  |  No  |
|  [Greengenes](//greengenes.lbl.gov/)  |  16S rRNA gene database  |  /db\_xref="Greengenes:269185"  |  空白  |  No  |
|  [GRIN](//www.ars-grin.gov/)  |  Germplasm Resources Information Network  |  /db\_xref="GRIN:1005973"  |  空白  |  No  |
|  [HGNC](//www.genenames.org/cgi-bin/search)  |  Human Gene Nomenclature Database  |  /db\_xref="HGNC:2041"  |  URL changed  |  Yes  |
|  [H-InvDB](//www.h-invitational.jp/)  |  H-Invitational Database  |  /db\_xref="H-InvDB:HIT000000001"<br>/db\_xref="H-InvDB:HIX0000001"  |  空白  |  Auto  |
|  [HMP](//www.hmpdacc.org/)  |  Human Microbiome Project  |  /db\_xref="HMP:0536"  |  空白  |  No  |
|  [HOMD](//www.homd.org/)  |  Human Oral Microbiome Database  |  /db\_xref="HOMD:tax\_078"<br>/db\_xref="HOMD:seq\_1603”  |  空白  |  No  |
|  [HPM](//www.humanproteomemap.org)  |  Human Proteome Map  |  /db\_xref="HPM:8106"  |  空白  |  No  |
|  HSSP  |  Database of homology-derived secondary structure of proteins  |  /db\_xref="HSSP:12GS"  |  URL removed  |  No  |
|  [I5KNAL](//i5k.nal.usda.gov/)  |  i5k Workspace  |  /db\_xref="I5KNAL:OFAS008986"  |  Added  |  No  |
|  [IKMC](//www.knockoutmouse.org/)  |  International Knockout Mouse Consortium  |  /db\_xref="IKMC:66303"  |  空白  |  No  |
|  [IMGT/GENE-DB](//www.imgt.org/genedb/)  |  Immunogenetics database, immunoglobulin and T-cell receptor genes  |  /db\_xref="IMGT/GENE-DB:IGKC"  |  URL changed  |  Auto  |
|  [IMGT/LIGM](//www.imgt.org/ligmdb/)  |  Immunogenetics database, immunoglobulins and T-cell receptors  |  /db\_xref="IMGT/LIGM:U03895"  |  URL changed  |  Auto  |
|  [IMGT/HLA](//www.ebi.ac.uk/imgt/hla/)  |  Immunogenetics database, human MHC  |  /db\_xref="IMGT/HLA:HLA00031"  |  空白  |  Auto  |
|  [Interpro](//www.ebi.ac.uk/interpro/)  |  InterPro protein sequence database  |  /db\_xref="InterPro:IPR002928"  |  空白  |  No  |
|  [IntrepidBio](//server1.intrepidbio.com/)  |  Intrepid BioInformatics  |  /db\_xref="ItrepidBio:5259707746"  |  空白  |  No  |
|  [IRD](//www.fludb.org/)  |  Influenza Research Database  |  /db\_xref="IRD:CEIRS-CIP045-123456.2"  |  空白  |  No  |
|  [ISFinder](//www-is.biotoul.fr/)  |  Insertion sequence elements database  |  /db\_xref="ISFinder:ISA1083-2"  |  空白  |  No  |
|  [ISHAM-ITS](//its.mycologylab.org/)  |  ITS reference database for human and animal pathogenic fungi  |  /db\_xref="ISHAM-ITS:MITS310"  |  URL changed  |  Auto  |
|  [JCM](//www.jcm.riken.go.jp/)  |  Japan Collection of Microorganisms  |  /db\_xref="JCM:1339"  |  空白  |  No  |
|  [JGIDB](//genome.jgi.doe.gov/)  |  JGI Genome Portal  |  /db\_xref="JGIDB:Chluvu1\_81011"  |  URL changed  |  No  |
|  [JGI Phytozome](//phytozome.jgi.doe.gov/pz/portal.html)  |  Comparative genomics of plants  |  /db\_xref="Phytozome:Glyma0021s00410"<br>/db\_xref="Phytozome:ppb016588m\_2\_1.p"  |  URL changed  |  No  |
|  LocusID  |  NCBI LocusLink ID \*\*Discontinued March 2005  |  /db\_xref="LocusID:51199"  |  空白  |  No  |
|  [MaizeGDB](//www.maizegdb.org/)  |  Maize Genome Database unique identifiers  |  /db\_xref="MaizeGDB:635633"  |  空白  |  No  |
|  [MarpolBase](//marchantia.info/)  |  Genome Database for Marchantia polymorpha  |  /db\_xref="MarpolBase:Mp1g00010.1"  |  空白  |  Auto  |
|  [MedGen](//www.ncbi.nlm.nih.gov/medgen)  |  Human Medical Genetics  |  /db\_xref="MedGen:C0010674"  |  URL changed  |  No  |
|  [MGI](//www.informatics.jax.org/)  |  Mouse Genome Informatics  |  /db\_xref="MGI:1894891"  |  空白  |  Auto  |
|  [MIM](//www.ncbi.nlm.nih.gov/omim)  |  Mendelian Inheritance in Man numbers  |  /db\_xref="MIM:123456"  |  URL changed  |  No  |
|  [miRBase](//www.mirbase.org/)  |  The microRNA database  |  /db\_xref="miRBase: MI0001857"  |  空白  |  No  |
|  [MycoBank](//www.mycobank.org/)  |  Fungal Databases, Nomenclature and Species Banks  |  /db\_xref="MycoBank:MB519473"  |  空白  |  No  |
|  [NBRC](//www.nite.go.jp/en/nbrc/cultures/nbrc/online/index.html)  |  NITE Biological Resource Center  |  /db\_xref="NBRC:3189"  |  URL changed  |  No  |
|  [NextDB](//nematode.lab.nig.ac.jp/)  |  Nematode Expression Pattern DataBase  |  /db\_xref="NextDB:CELK01662"  |  空白  |  No  |
|  [niaEST](//esbank.nia.nih.gov/)  |  NIA Mouse cDNA Project  |  /db\_xref="niaEST:L0304H12-3"  |  URL changed  |  No  |
|  [NMPDR](//www.nmpdr.org/)  |  National Microbial Pathogen Data Resource  |  /db\_xref="NMPDR:fig|306254.1.peg.183"  |  空白  |  No  |
|  [NRESTdb](//www.mgi-nibm.my/nrestdb/)  |  Natural Rubber EST database  |  /db\_xref="NRESTdb:Y01A01"  |  URL changed  |  No  |
|  [OrthoMCL](//orthomcl.org/)  |  Ortholog Groups of Protein Sequences  |  /db\_xref="OrthoMCL:OG5\_130679"  |  空白  |  No  |
|  [Osa1](//rice.plantbiology.msu.edu/)  |  Rice Genome Annotation Project  |  /db\_xref="Osa1:LOC\_Os01g12345"  |  空白  |  Auto  |
|  [Pathema](//www.jcvi.org/cms/research/past-projects/pathema/overview/)  |  Pathema Genome Resource  |  /db\_xref="Pathema:BA\_4405"<br>/db\_xref="Pathema:191218"  |  URL changed  |  No  |
|  [PBmice](//www.idmshanghai.cn/PBmice/)  |  PiggyBac Mutagenesis Information Center  |  /db\_xref="PBmice:38"  |  空白  |  No  |
|  [PDB](//www.rcsb.org/pdb/)  |  Biological macromolecule three dimensional structure database  |  /db\_xref="PDB:12GS"  |  空白  |  Yes  |
|  [PFAM](//pfam.xfam.org)  |  Collection of protein families  |  /db\_xref="PFAM:PF00003"  |  URL changed  |  No  |
|  PGN  |  Plant Genome Network  |  /db\_xref="PGN:aam01-1ms3-a05"  |  URL removed  |  No  |
|  [PIR](//pir.georgetown.edu/)  |  Protein Information Resource accession numbers  |  /db\_xref="PIR:S12345"  |  空白  |  No  |
|  [PomBase](//www.pombase.org/)  |  Database of Structural and Functional Data for Schizosaccaromyces pombe  |  /db\_xref="PomBase:SPBC1709.20"  |  空白  |  No  |
|  PSEUDO  |  EMBL pseudo protein identifier  |  /db\_xref="PSEUDO:CAC44644.1"  |  空白  |  No  |
|  [PseudoCAP](//www.pseudomonas.com/)  |  Pseudomonas Genome Database  |  /db\_xref="PseudoCAP:PA0001"  |  空白  |  No  |
|  [RAP-DB](//rapdb.dna.affrc.go.jp/)  |  Rice Annotation Project Database  |  /db\_xref="RAP-DB:Os01g1234567"  |  空白  |  Auto  |
|  RATMAP  |  Rat Genome Database  |  /db\_xref="RATMAP:5"  |  URL removed  |  No  |
|  [RBGE\_garden](//elmer.rbge.org.uk/bgbase/livcol/bgbaselivcol.php)  |  Royal Botanic Garden Edinburgh Living Collections  |  /db\_xref="RBGE\_garden:20021433"  |  空白  |  No  |
|  [RBGE\_herbarium](//elmer.rbge.org.uk/bgbase/vherb/bgbasevherb.php)  |  Royal Botanic Garden Edinburgh Herbarium  |  /db\_xref="RBGE\_herbarium:E00217291"  |  空白  |  No  |
|  [RFAM](//rfam.xfam.org)  |  RNA families database of alignments and CMs  |  /db\_xref="RFAM:RF00230"  |  URL changed  |  No  |
|  [RGD](//rgd.mcw.edu/)  |  Rat Genome Database  |  /db\_xref="RGD:620528"  |  空白  |  No  |
|  [RiceGenes](//www.gramene.org/)  |  Rice database accession numbers  |  /db\_xref="RiceGenes:AA231856"  |  空白  |  No  |
|  [RNAcentral](//rnacentral.org/)  |  RNAcentral: The non-coding RNA sequence database  |  /db\_xref="RNAcentral:URS00001B9622"  |  空白  |  No  |
|  RZPD  |  Resource Centre Primary Database Clone Identifiers  |  /db\_xref="RZPD:IMAGp998I142450Q6"  |  URL removed  |  No  |
|  [SEED](//www.theseed.org/)  |  The SEED Database  |  /db\_xref="SEED:fig|83331.1.peg.1"  |  空白  |  No  |
|  [SGD](//www.yeastgenome.org/)  |  Saccharomyces Genome Database  |  /db\_xref="SGD:L0000470"  |  空白  |  No  |
|  [SGN](//www.sgn.cornell.edu/)  |  SOL Genomics Network  |  /db\_xref="SGN:E553090"  |  空白  |  No  |
|  SK-FST  |  Saskatoon Arabidopsis T-DNA mutant population - SK Collection  |  /db\_xref="SK-FST: FST:SK32219"  |  URL removed  |  No  |
|  [SoyBase](//soybase.org)  |  Glycine max Genome Database  |  /db\_xref="SoyBase:Satt005"  |  URL changed  |  No  |
|  [SRPDB](//bio.lundberg.gu.se/dbs/SRPDB/SRPDB.html)  |  Signal Recognition Particle Database  |  /db\_xref="SRPDB:Arth.aure.\_CP000474.fasta"  |  空白  |  No  |
|  [SubtiList](//genolist.pasteur.fr/SubtiList/)  |  Bacillus subtilis genome sequencing project  |  /db\_xref="SubtiList:BG10001"  |  空白  |  No  |
|  [TAIR](//www.arabidopsis.org/)  |  The Arabidopsis Information Resource  |  /db\_xref="TAIR:AT1F51370"  |  Renamed  |  No  |
|  [taxon](//www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/)  |  NCBI's taxonomic identifier  |  /db\_xref="taxon:4932"  |  URL changed  |  Auto  |
|  [TIGRFAM](//www.jcvi.org/cgi-bin/tigrfams/index.cgi)  |  TIGR protein families  |  /db\_xref="TIGRFAM:TIGR00094"  |  URL changed  |  No  |
|  [TubercuList](//tuberculist.epfl.ch)  |  TubercuList knowledge base  |  /db\_xref="TubercuList:Rv3322c"  |  空白  |  No  |
|  UNILIB  |  Unified Library Database, a library-level view of the EST and SAGE　libraries present in dbEST, UniGene and SAGEmap  |  /db\_xref="UNILIB:1002"  |  空白  |  No  |
|  [UniProtKB/Swiss-Prot](//www.uniprot.org/)  |  section of the UniProt Knowledgebase containing annotated records, which include curator-evaluated computational analysis, as well as, information extracted from the literature  |  /db\_xref="UniProtKB/Swiss-Prot:P12345"  |  空白  |  Yes  |
|  [UniProtKB/TrEMBL](//www.uniprot.org/)  |  section of the UniProt Knowledgebase, containing　computationally　analysed records waiting for full manual annotation  |  /db\_xref=" UniProtKB/TrEMBL:Q00177"  |  空白  |  No  |
|  UniSTS  |  Database of Sequence Tagged Sites  |  /db\_xref="UniSTS:486599"  |  URL removed  |  No  |
|  [UNITE](//unite.ut.ee/index.php)  |  Molecular database for the identification of fungi  |  /db\_xref="UNITE:UDB000157"  |  空白  |  No  |
|  [VBASE2](//www.vbase2.org/)  |  Integrative database of germ-line V genes from the immunoglobulin loci of human and mouse  |  /db\_xref="VBASE2:humIGKV165"  |  URL changed  |  No  |
|  [VectorBase](//www.vectorbase.org/index.php)  |  Bioinformatics Resource Center for Invertebrate Vectors of Human Pathogens  |  /db\_xref="VectorBase:ENSANGG00000007825"  |  空白  |  No  |
|  [VGNC](//vertebrate.genenames.org)  |  Vertebrate Gene Nomenclature Committee  |  /db\_xref="[VGNC:VGNC:4927](//vertebrate.genenames.org/data/gene-symbol-report/#!/vgnc_id/VGNC:4927)"  |  空白  |  No  |
|  [ViPR](//www.viprbrc.org/brc/home.do?decorator=vipr)  |  Virus Pathogen Resource  |  /db\_xref="ViPR:HRV-A34\_p1058\_sR263\_2008"  |  空白  |  No  |
|  [VISTA](//enhancer.lbl.gov/)  |  Vista Enhancer Browser  |  /db\_xref="VISTA:hs123"  |  Added  |  No  |
|  [WorfDB](//worfdb.dfci.harvard.edu/)  |  C. elegans ORFeome cloning project  |  /db\_xref="WorfDB:pos-1"  |  空白  |  No  |
|  [WormBase](//www.wormbase.org)  |  Caenorhabditis elegans Genome Database  |  /db\_xref="WormBase:R13H7"  |  空白  |  No  |
|  [Xenbase](//www.xenbase.org/)  |  Xenopus laevis and tropicalis biology and genomics resource  |  /db\_xref="Xenbase:XB-GENE-1019547"  |  URL changed  |  No  |
|  [ZFIN](//zfin.org/)  |  Zebrafish Information Network  |  /db\_xref="ZFIN:ZDB-GENE-011205-17"  |  空白  |  No  |