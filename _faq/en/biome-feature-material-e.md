---
layout: simple
title: What is the difference between env_biome, env_feature and env_material?
category: faq
db:
  - biosample
tags: 
  - Sample
  - attributes
date: 2014-07-24T10:49:53
lang: en
---

These three sample attributes describe environmental systems have
influences on living organisms.

[env\_biome](/biosample/attribute-e.html?all=all#env_biome)
: In the Environment Ontology (ENVO), the biome \[[ENVO\_00000428](http://bioportal.bioontology.org/ontologies/ENVO?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000428)\] classes are subclasses of environmental system.The env\_biome represents
environmental systems to which resident ecological communities have
evolved adaptations.Thus, a env\_biome may be thought of as a
community-centric ecosystem, whose extent is defined by the presence of
the communities adapted to it.This requires that a env\_biome possesses
a degree of spatial and temporal stability that has allowed at least
some of its constituent communities to adapt.Classes such as tundra
biome
\[[ENVO\_01000180](http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_01000180)\]
and coniferous forest biome
\[[ENVO\_01000196](http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_01000196)\]
are included in ENVO.Currently, the biome branch of the ontology makes
no commitment to a specific spatial or temporal scale.

[env\_feature](/biosample/attribute-e.html?all=all#env_feature)
: The biome described above are useful in ecological settings; however,
environments are often described by referencing a single entity that has
a strong causal influence on its surrounding space.For example, a coral
reef environment is determined by the presence and influence of a coral
reef
\[[ENVO\_00000150](http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000150&jump_to_nav=true)\].Similarly,
the human gut environment is determined by the human gut.Removal of
either the coral reef or the human gut would cause the associated
environmental system to collapse.Environmental systems of this kind make
no specific reference to ecological communities or populations (as do
biomes),but to some central, supporting ‘feature’.Entities that act in
this way as the causal ‘hubs’ or supports of a given environmental
system are referenced by classes in ENVO’s top-level environmental
feature
\[[ENVO\_00002297](http://bioportal.bioontology.org/ontologies/ENVO?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00002297)\]
hierarchy.For example, the environmental feature seamount
\[[ENVO\_00000264](http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000264&jump_to_nav=true)\]
would support a seamount environment, i.e. an environmental system which
is supported by, and whose properties are determined by, the presence of
a seamount.

[env\_material](/biosample/attribute-e.html?all=all#env_material)
: In contrast to the classes above, which identify countable entities, the
subclasses of the top-level environmental material
\[[ENVO\_00010483](http://bioportal.bioontology.org/ontologies/ENVO?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00010483)\]
class refer to masses, volumes, or other portions of some medium
included in an environmental system. A portion of environmental material
is understood to be more complex and variable in composition than a
simple collection of material entities (e.g. a collection of silicate
particles). For example, the environmental material soil
\[[ENVO\_00001998](http://bioportal.bioontology.org/ontologies/ENVO?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00001998)\]
typically contains aggregates of fine rock particles, sand grains, clay
particles, silt particles, communities of animals, plants, fungi and
microbes, small parts of organisms, organic matter, water inclusions,
and airspaces.
