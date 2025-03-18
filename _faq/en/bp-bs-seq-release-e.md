---
layout: simple
title: How are linked BioProject/BioSample/experimental data released?
category: faq
db:
  - bioproject
  - biosample
  - dra
  - gea
  - metabobank
tags: 
  - Data release
date: 2014-12-15T11:41:03
lang: en
---

Linked [BioProject](/bioproject/index-e.html), [BioSample](/biosample/index-e.html), [DDBJ](/ddbj/submission-e.html), [DRA](/dra/index-e.html), [GEA](/gea/index-e.html) and [MetaboBank](/metabobank/index-e.html) data are released as follows.

- Release of the BioProject and BioSample records DO NOT trigger release of the other linked data.
- Release of the BioSample records trigger release of the referencing BioSample in derived_from attributes.
- Release of the DDBJ, DRA, GEA and MetaboBank data DO trigger release of the linked BioProject and BioSample records.
- Release of DDBJ triggers release of DRA Run(s) linked from DBLINK(s).
- Release of GEA triggers release of linked DRA Run(s).
- Release of the DRA data DO NOT trigger release of the DDBJ records.

<p class="attention">All metadata and sequencing data in a DRA submission are released at once.</p>

<figure><a href="/assets/images/books/bp-bs-seq_release.jpg" title="Release of linked BioProject/BioSample/experimental data"><img src="/assets/images/books/bp-bs-seq_release.jpg" alt="Release of linked BioProject/BioSample/experimental data" title="Release of linked BioProject/BioSample/experimental data" class="w400"></a>
  <figcaption class="caption">Release of linked BioProject/BioSample/experimental data</figcaption>
</figure>

<figure><a href="/assets/images/books/bp-bs-seq_release-2.jpg" title="Release of the other data linked to BioProject/BioSample"><img src="/assets/images/books/bp-bs-seq_release-2.jpg" alt="Release of the other data linked to BioProject/BioSample" title="Release of the other data linked to BioProject/BioSample" class="w550"></a>
	<figcaption class="caption">Release of the other data linked to BioProject/BioSample</figcaption>
</figure>

<figure><a href="/assets/images/books/bp-bs-seq_release-3.jpg" title="Release of derived BioSample"><img src="/assets/images/books/bp-bs-seq_release-3.jpg" alt="Release of derived BioSample" title="Release of derived BioSample" class="w400"></a>
	<figcaption class="caption">Release of derived BioSample</figcaption>
</figure>

