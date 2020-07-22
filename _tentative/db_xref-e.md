---
layout: indexed_content
title: Controlled vocabulary for /db_xref qualifier
pathname: db_xref-e
category: tentative
---

The original site; [Controlled vocabulary for /db_xref
qualifier](http://www.insdc.org/documents/dbxref-qualifier-vocabulary)
2016.08.28 version  
See also [db_xref](https://www.ncbi.nlm.nih.gov/genbank/collab/db_xref)
at NCBI.

New qualifier was introduced in version 1.08 (December 1, 1995) of the
Feature table definitions: /db_xref. This new qualifier serves as a
vehicle for the linking of DNA sequence records to other external
databases.

The text below outlines the format and the present list of allowed
database cross references. Inquiries about the addition of other
database types should be made to one of the collaborating databases,
listed above.

## Definition of /db_xref qualifier

```
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

For all [*databases*] types 'Case' is important. All databases member
of the International Collaboration (DDBJ, ENA/EBI and GenBank/NCBI) may
make recommendations for additions or removal of databases to this list
at their convenience, and need not rely on the release cycle of the
Feature Table documentation.

## Database:

Description of database, and type with example(s).

Database  
: Description of database name in /db_xref qualifier

Full name  
: Full name of the database

Format  
: Format for /db_xref qualifier

Diff  
: Flag for any difference with [the original
site](http://www.insdc.org/documents/dbxref-qualifier-vocabulary) in
the line.

Use  
: **Yes**: to be described by DDBJ submitters  
**No**: not to be described by DDBJ submitters  
**Auto**: not to be described by DDBJ submitters, described by the database

Presently the list includes:

| Database | Full name | Format | Diff | Use |
| -------- | -------- | -------- | -------- | -------- |
| [AceView/WormGenes](https://www.ncbi.nlm.nih.gov/IEB/Research/Acembly/) | AceView Worm Genome | /db_xref="AceView/WormGenes:vha-6" |  | No |
| AFTOL | Assembling the Fungal Tree of Life | /db_xref="AFTOL:959" | URL removed | No |
| [AntWeb](https://www.antweb.org/) | Ant Database | /db_xref="AntWeb:CASENT0058943-D01" |  | No |
| [APHIDBASE](http://www.aphidbase.com/) | Aphid Genome Database | /db_xref="APHIDBASE:ACYPI007424" | URL changed | No |
| [ApiDB](http://eupathdb.org/eupathdb/) | Apicomplexan Database Resources | /db_xref="ApiDB:cgd1_1090" |  | No
| [ApiDB_CryptoDB](http://cryptodb.org/cryptodb/) | Cryptosporidium Genome Resources | /db_xref="ApiDB_CryptoDB:cgd7_20" |  | No |
| [ApiDB_PlasmoDB](http://www.plasmodb.org/plasmo/home.jsp) | Plasmodium Genome Resources | /db_xref="ApiDB_PlasmoDB: PF11_0344" |  | No |
| [ApiDB_ToxoDB](http://www.toxodb.org/toxo/home.jsp) | Toxoplasma Genome Resources | /db_xref="ApiDB_ToxoDB:49.m00014" |  | No |
| [Araport](https://www.araport.org/) | Arabidopsis Information Portal | /db_xref="[Araport:AT1G01010](https://www.araport.org/locus/AT1G01010)" |  | No |
| [ASAP](https://asap.genetics.wisc.edu/asap/logon.php) | A Systematic Annotation Package for Community Analysis of Genomes | /db_xref="ASAP:ABE-0000006" | URL changed | No |
| [ATCC](//www.atcc.org/) | American Type Culture Collection database | /db_xref="ATCC:123456" |  | No |
| [ATCC(dna)](//www.atcc.org/) | American Type Culture Collection database | /db_xref="ATCC(dna):123456” |   | No |
| [ATCC(in host)](//www.atcc.org/) | American Type Culture Collection database | /db_xref="ATCC(in host):123456" |   | No |
| [Axeldb](//www.dkfz-heidelberg.de/molecular_embryology/axeldb.htm) | A Xenopus laevis database | /db_xref="Axeldb:32B3.1" |   | No |
| [BDGP_EST](http://www.fruitfly.org/EST/index.shtml) | Berkeley Drosophila Genome Project EST database | /db_xref="BDGP_EST:123456" |   | No |
| [BDGP_INS](http://www.fruitfly.org/) | Berkeley Drosophila Genome Project database -- Insertion | /db_xref="BDGP_INS:123456" |   | No |
| [BEEBASE](http://hymenopteragenome.org/beebase/?q=home) | BeeBase | /db_xref="[BEEBASE:GB55480](//hymenopteragenome.org/cgi-bin/gb2/gbrowse/bee_genome45/?name=GB55480)" |   | No |
| [BEETLEBASE](http://www.beetlebase.org/) | Tribolium Genome Database -- Insertion | /db_xref="BEETLEBASE:TC030551" |   | No |
| [BEI](https://www.beiresources.org/) | BEI Resources | /db_xref="[BEI:NR-50065](https://www.beiresources.org/Catalog/animalViruses/NR-50065.aspx)" |   | No |
| [BGD](http://bovinegenome.org/genepages/btau40/) | Bovine Genome Database | /db_xref="BGD:BT10004" | URL changed | No |
| [BOLD](http://www.barcodinglife.com/) | Barcode of Life database | /db_xref="Bold:EPAF263" |   | Yes |
| [CABRI](http://www.cabri.org/) | Common Access to Biological Resources and Information project | /db_xref="CABRI: ACC 424" |   | No |
| [CCAP](//www.ccap.ac.uk/) | Culture Collection of algae and protozoa | /db_xref="CCAP: 1460/15" |   | No |
| [CDD](https://www.ncbi.nlm.nih.gov/Structure/cdd/cdd.shtml) | Conserved Domain Database | /db_xref="CDD:02194" | URL changed | No |
| [CGD](http://www.candidagenome.org/) | Candida Genome Database | /db_xref="CGD:CAL0005934" |   | No |
| [dbEST](https://www.ncbi.nlm.nih.gov/dbEST/index.html) | EST database maintained at the NCBI. | /db_xref="dbEST:123456"<br>/db_xref="dbEST:BP535535" | URL changed | No |
| [dbProbe](https://www.ncbi.nlm.nih.gov/probe) | NCBI Probe database Public registry of nucleic acid reagents | /db_xref="dbProbe:38" | URL changed | No |
| [dbSNP](https://www.ncbi.nlm.nih.gov/SNP/) | Variation database maintained at the NCBI. | /db_xref="dbSNP:4647"<br>/db_xref="dbSNP:rs133073" | URL changed | No |
| [dbSTS](https://www.ncbi.nlm.nih.gov/dbSTS/index.html) | STS database maintained at the NCBI. | /db_xref="dbSTS:456789"<br>/db_xref="dbSTS:BV210161" | URL changed | No |
| [dictyBase](http://dictybase.org/) | Dictyostelium genome database | /db_xref="dictyBase:DDB0191090" |   | No |
| [ECOCYC](https://ecocyc.org/) | *E. coli* Database | /db_xref="ECOCYC:sroC"<br>/db_xref="ECOCYC:C0343" |   | No |
| [EcoGene](http://ecogene.org/) | Database of *Escherichia coli* Sequence and Function | /db_xref="EcoGene:EG11277" |   | No |
| [ENSEMBL](//www.ensembl.org/) | Database of automatically annotated genomic data | /db_xref="ENSEMBL:HUMAN-Clone-AC005612"<br>/db_xref="ENSEMBL:HUMAN-Gene-ENSG00000007102" |   | No |
| [EnsemblGenomes](http://ensemblgenomes.org/) | Extending Ensembl across the taxonomic space | /db_xref="EnsemblGenomes:AAC73116"<br>/db_xref="EnsemblGenomes:b0005" |   | No |
| [EnsemblGenomes-Gn](http//ensemblgenomes.org/) | EnsemblGenomes Gene | /db_xref="EnsemblGenomes-Gn:WBGene00022276" | Added | No |
| [EnsemblGenomes-Tr](http://ensemblgenomes.org/) | EnsemblGenomes Transcript | /db_xref="EnsemblGenomes-Tr:MAPG_00606T0" | Added | No |
| [EPD](http://epd.vital-it.ch/) | Eukaryotic Promotor Database | /db_xref="EPD: EP00576" |   | No |
| ERIC | Enteropathogen Resource Integration Center | /db_xref="ERIC:ABY-0246137" | URL removed | No |
| ESTLIB | EBI's EST library identifier | /db_xref="ESTLIB:1200" |   | No |
| [FANTOM_DB](http://fantom.gsc.riken.go.jp/) | Database of Functional Annotation of Mouse | /db_xref="FANTOM_DB:0610005A07" |   | Auto |
| [FBOL](http://www.fungalbarcoding.org/) | International Fungal Working Group Fungal Barcoding | /db_xref="FBOL:2224" |   | Yes |
| [FLYBASE](http://www.flybase.org/) | Database of Genetic and molecular data of Drosophila. | /db_xref="FLYBASE:FBgn0000024" | No |
| [Fungorum](http://www.indexfungorum.org/) | Index Fungorum | /db_xref="Fungorum:ID550186" | No |
| [GABI](https://www.gabipd.org/) | Network of Different Plant Genomic Research Projects | /db_xref="GABI:HA05J18" | URL changed | No |
| GDB | Human Genome Database accession numbers | /db_xref="GDB:G00-128-600" | URL removed | No |
| [GeneDB](//www.genedb.org/) | Curated gene database for Schizosaccharomyces pombe, Leishmania major and Trypanosoma brucei | /db_xref="GeneDB:SPCC285.16c" |   | No |
| [GeneID](https://www.ncbi.nlm.nih.gov/gene) | Entrez Gene Database (replaces NCBI Locus Link) | /db_xref="GeneID:3054987" | URL changed | No |
| GI | GenInfo identifier, used as a unique sequence identifier for nucleotide and proteins | /db_xref="GI:1234567890" |   | No |
| [GO](http://amigo.geneontology.org/) | Gene Ontology Database identifier | /db_xref="GO:123" |   | No |
| [GOA](//www.ebi.ac.uk/GOA/) | Gene Ontology Annotation Database Identifier | /db_xref="GOA:P01100" |   | No |
| [Greengenes](http://greengenes.lbl.gov/) | 16S rRNA gene database | /db_xref="Greengenes:269185" |   | No |
| [GRIN](//www.ars-grin.gov/) | Germplasm Resources Information Network | /db_xref="GRIN:1005973" |   | No |
| [HGNC](//www.genenames.org/cgi-bin/search) | Human Gene Nomenclature Database | /db_xref="HGNC:2041" | URL changed | Yes |
| [H-InvDB](http://www.h-invitational.jp/) | H-Invitational Database | /db_xref="H-InvDB:HIT000000001"<br>/db_xref="H-InvDB:HIX0000001" |   | Auto |
| [HMP](//www.hmpdacc.org/) | Human Microbiome Project | /db_xref="HMP:0536" |   | No |
| [HOMD](http://www.homd.org/) | Human Oral Microbiome Database | /db_xref="HOMD:tax_078"<br>/db_xref="HOMD:seq_1603” |   | No |
| [HPM](http://www.humanproteomemap.org) | Human Proteome Map | /db_xref="HPM:8106" |   | No |
HSSP | Database of homology-derived secondary structure of proteins | /db_xref="HSSP:12GS" | URL removed | No |
| [I5KNAL](https://i5k.nal.usda.gov/) | i5k Workspace | /db_xref="I5KNAL:OFAS008986" | Added | No |
| [IKMC](//www.knockoutmouse.org/) | International Knockout Mouse Consortium | /db_xref="IKMC:66303" |   | No |
| [IMGT/GENE-DB](http://www.imgt.org/genedb/) | Immunogenetics database, immunoglobulin and T-cell receptor genes | /db_xref="IMGT/GENE-DB:IGKC" | URL changed | Auto |
| [IMGT/LIGM](http://www.imgt.org/ligmdb/) | Immunogenetics database, immunoglobulins and T-cell receptors | /db_xref="IMGT/LIGM:U03895" | URL changed | Auto |
| [IMGT/HLA](//www.ebi.ac.uk/imgt/hla/) | Immunogenetics database, human MHC | /db_xref="IMGT/HLA:HLA00031" |   | Auto |
| [Interpro](//www.ebi.ac.uk/interpro/) | InterPro protein sequence database | /db_xref="InterPro:IPR002928" |   | No |
| [IntrepidBio](//server1.intrepidbio.com/) | Intrepid BioInformatics | /db_xref="ItrepidBio:5259707746" |   | No |
| [IRD](//www.fludb.org/) | Influenza Research Database | /db_xref="IRD:CEIRS-CIP045-123456.2" |   | No |
| [ISFinder](//www-is.biotoul.fr/) | Insertion sequence elements database | /db_xref="ISFinder:ISA1083-2" |   | No |
| [ISHAM-ITS](http://its.mycologylab.org/) | ITS reference database for human and animal pathogenic fungi | /db_xref="ISHAM-ITS:MITS310" | URL changed | Auto |
| [JCM](http://www.jcm.riken.go.jp/) | Japan Collection of Microorganisms | /db_xref="JCM:1339" |   | No |
| [JGIDB](//genome.jgi.doe.gov/) | JGI Genome Portal | /db_xref="JGIDB:Chluvu1_81011" | URL changed | No |
| [JGI Phytozome](//phytozome.jgi.doe.gov/pz/portal.html) | Comparative genomics of plants | /db_xref="Phytozome:Glyma0021s00410"<br>/db_xref="Phytozome:ppb016588m_2_1.p" | URL changed | No |
| LocusID | NCBI LocusLink ID **Discontinued March 2005 | /db_xref="LocusID:51199" |   | No |
| [MaizeGDB](//www.maizegdb.org/) | Maize Genome Database unique identifiers | /db_xref="MaizeGDB:635633" |   | No |
| [MedGen](https://www.ncbi.nlm.nih.gov/medgen) | Human Medical Genetics | /db_xref="MedGen:C0010674" | URL changed | No |
| [MGI](http://www.informatics.jax.org/) | Mouse Genome Informatics | /db_xref="MGI:1894891" |   | Auto |
| [MIM](https://www.ncbi.nlm.nih.gov/omim) | Mendelian Inheritance in Man numbers | /db_xref="MIM:123456" | URL changed | No |
| [miRBase](http://www.mirbase.org/) | The microRNA database | /db_xref="miRBase: MI0001857" |   | No |
| [MycoBank](http://www.mycobank.org/) | Fungal Databases, Nomenclature and Species Banks | /db_xref="MycoBank:MB519473" |   | No |
| [NBRC](http://www.nite.go.jp/en/nbrc/cultures/nbrc/online/index.html) | NITE Biological Resource Center | /db_xref="NBRC:3189" | URL changed | No |
| [NextDB](http://nematode.lab.nig.ac.jp/) | Nematode Expression Pattern DataBase | /db_xref="NextDB:CELK01662" |   | No |
| [niaEST](//esbank.nia.nih.gov/) | NIA Mouse cDNA Project | /db_xref="niaEST:L0304H12-3" | URL changed | No |
| [NMPDR](http://www.nmpdr.org/) | National Microbial Pathogen Data Resource | /db_xref="NMPDR:fig\|306254.1.peg.183" |   | No |
| [NRESTdb](http://www.mgi-nibm.my/nrestdb/) | Natural Rubber EST database | /db_xref="NRESTdb:Y01A01" | URL changed | No |
| [OrthoMCL](http://orthomcl.org/) | Ortholog Groups of Protein Sequences | /db_xref="OrthoMCL:OG5_130679" |   | No |
| [Osa1](http://rice.plantbiology.msu.edu/) | Rice Genome Annotation Project | /db_xref="Osa1:LOC_Os01g12345" |   | Auto |
| [Pathema](//www.jcvi.org/cms/research/past-projects/pathema/overview/) | Pathema Genome Resource | /db_xref="Pathema:BA_4405"<br>/db_xref="Pathema:191218" | URL changed | No |
| [PBmice](http://www.idmshanghai.cn/PBmice/) | PiggyBac Mutagenesis Information Center | /db_xref="PBmice:38" |   | No |
| [PDB](//www.rcsb.org/pdb/) | Biological macromolecule three dimensional structure database | /db_xref="PDB:12GS" |   | Yes |
| [PFAM](//pfam.xfam.org) | Collection of protein families | /db_xref="PFAM:PF00003" | URL changed | No |
| PGN | Plant Genome Network | /db_xref="PGN:aam01-1ms3-a05" | URL removed | No |
| [PIR](//pir.georgetown.edu/) | Protein Information Resource accession numbers | /db_xref="PIR:S12345" |   | No |
| [PomBase](//www.pombase.org/) | Database of Structural and Functional Data for Schizosaccaromyces pombe | /db_xref="PomBase:SPBC1709.20" |   | No |
| PSEUDO | EMBL pseudo protein identifier | /db_xref="PSEUDO:CAC44644.1" |   | No |
| [PseudoCAP](http://www.pseudomonas.com/) | Pseudomonas Genome Database | /db_xref="PseudoCAP:PA0001" |   | No |
| [RAP-DB](http://rapdb.dna.affrc.go.jp/) | Rice Annotation Project Database | /db_xref="RAP-DB:Os01g1234567" |   | Auto |
| RATMAP | Rat Genome Database | /db_xref="RATMAP:5" | URL removed | No |
| [RBGE_garden](http://elmer.rbge.org.uk/bgbase/livcol/bgbaselivcol.php) | Royal Botanic Garden Edinburgh Living Collections | /db_xref="RBGE_garden:20021433" |   | No |
| [RBGE_herbarium](http://elmer.rbge.org.uk/bgbase/vherb/bgbasevherb.php) | Royal Botanic Garden Edinburgh Herbarium | /db_xref="RBGE_herbarium:E00217291" |   | No |
| [RFAM](//rfam.xfam.org) | RNA families database of alignments and CMs | /db_xref="RFAM:RF00230" | URL changed | No |
| [RGD](//rgd.mcw.edu/) | Rat Genome Database | /db_xref="RGD:620528" |   | No |
| [RiceGenes](http://www.gramene.org/) | Rice database accession numbers | /db_xref="RiceGenes:AA231856" |   | No |
| [RNAcentral](http://rnacentral.org/) | RNAcentral: The non-coding RNA sequence database | /db_xref="RNAcentral:URS00001B9622" |   | No |
| RZPD | Resource Centre Primary Database Clone Identifiers | /db_xref="RZPD:IMAGp998I142450Q6" | URL removed | No |
[SEED](http://www.theseed.org/) | The SEED Database | /db_xref="SEED:fig\|83331.1.peg.1" |   | No |
| [SGD](//www.yeastgenome.org/) | Saccharomyces Genome Database | /db_xref="SGD:L0000470" |   | No |
| [SGN](http://www.sgn.cornell.edu/) | SOL Genomics Network | /db_xref="SGN:E553090" |   | No |
| SK-FST | Saskatoon Arabidopsis T-DNA mutant population - SK Collection | /db_xref="SK-FST: FST:SK32219" | URL removed | No |
| [SoyBase](//soybase.org) | Glycine max Genome Database | /db_xref="SoyBase:Satt005" | URL changed | No |
| [SRPDB](http://bio.lundberg.gu.se/dbs/SRPDB/SRPDB.html) | Signal Recognition Particle Database | /db_xref="SRPDB:Arth.aure._CP000474.fasta" |   | No |
| [SubtiList](http://genolist.pasteur.fr/SubtiList/) | Bacillus subtilis genome sequencing project | /db_xref="SubtiList:BG10001" |   | No |
| [TAIR](//www.arabidopsis.org/)[](//www.arabidopsis.org/) | The Arabidopsis Information Resource | /db_xref="TAIR:AT1F51370" | Renamed | No |
| [taxon](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) | NCBI's taxonomic identifier | /db_xref="taxon:4932" | URL changed | Auto |
| [TIGRFAM](//www.jcvi.org/cgi-bin/tigrfams/index.cgi) | TIGR protein families | /db_xref="TIGRFAM:TIGR00094" | URL changed | No |
| [TubercuList](http://tuberculist.epfl.ch) | TubercuList knowledge base | /db_xref="TubercuList:Rv3322c" |   | No |
| UNILIB | Unified Library Database, a library-level view of the EST and SAGE libraries present in dbEST, UniGene and SAGEmap | /db_xref="UNILIB:1002" |   | No |
| [UniProtKB/Swiss-Prot](//www.uniprot.org/) | section of the UniProt Knowledgebase, containing annotated records,which include curator-evaluated computational analysis, as well as,information extracted from the literature | /db_xref="UniProtKB/Swiss-Prot:P12345" |   | Yes |
| [UniProtKB/TrEMBL](//www.uniprot.org/) | section of the UniProt Knowledgebase, containing computationally analysed records waiting for full manual annotation | /db_xref=" UniProtKB/TrEMBL:Q00177" | No |
| UniSTS | Database of Sequence Tagged Sites | /db_xref="UniSTS:486599" | URL removed | No |
| [UNITE](//unite.ut.ee/index.php) | Molecular database for the identification of fungi | /db_xref="UNITE:UDB000157" |   | No |
| [VBASE2](http://www.vbase2.org/) | Integrative database of germ-line V genes from the immunoglobulin loci of human and mouse | /db_xref="VBASE2:humIGKV165" | URL changed | No |
| [VectorBase](//www.vectorbase.org/index.php) | Bioinformatics Resource Center for Invertebrate Vectors of Human Pathogens | /db_xref="VectorBase:ENSANGG00000007825" |   | No |
| [VGNC](//vertebrate.genenames.org) | Vertebrate Gene Nomenclature Committee | /db_xref="[VGNC:VGNC:4927](//vertebrate.genenames.org/data/gene-symbol-report/#!/vgnc_id/VGNC:4927)" |   | No |
| [ViPR](//www.viprbrc.org/brc/home.do?decorator=vipr) | Virus Pathogen Resource | /db_xref="ViPR:HRV-A34_p1058_sR263_2008" |    | No |
| [VISTA](//enhancer.lbl.gov/) | Vista Enhancer Browser | /db_xref="VISTA:hs123" | Added | No |
| [WorfDB](http://worfdb.dfci.harvard.edu/) | C. elegans ORFeome cloning project | /db_xref="WorfDB:pos-1" |   | No |
| [WormBase](//www.wormbase.org) | Caenorhabditis elegans Genome Database | /db_xref="WormBase:R13H7" |   | No |
| [Xenbase](http://www.xenbase.org/) | Xenopus laevis and tropicalis biology and genomics resource | /db_xref="Xenbase:XB-GENE-1019547" | URL changed | No |
| [ZFIN](//zfin.org/) | Zebrafish Information Network | /db_xref="ZFIN:ZDB-GENE-011205-17" |   | No |
