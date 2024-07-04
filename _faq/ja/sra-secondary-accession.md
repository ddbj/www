---
layout: simple
title: SRA のセカンダリアクセッション番号とは？
category: faq
db:
  - dra

tags: 
  - アクセッション番号
date: 2023-03-16T11:16:30
lang: ja
---

SRA では公開されている Run を別の Run に差し替えた場合、対応関係を記録するため、旧 Run 番号を新 Run 番号のセカンダリ番号にします。  
例えば DRR046787 が DRR049544 に置き換わった場合、DRR049544 が primary、DRR046787 が secondary accession として XML では以下のように記載されます。

```
<RUN accession="DRR049544" center_name="HOKU_FS" alias="DRR049544">
  <IDENTIFIERS>
    <PRIMARY_ID>DRR049544</PRIMARY_ID>
    <SECONDARY_ID>DRR046787</SECONDARY_ID>
  </IDENTIFIERS>
  <TITLE>454 GS Junior sequencing of SAMD00041397</TITLE>
  <EXPERIMENT_REF accession="DRX042075" refcenter="HOKU_FS" refname="DRX042075"/>
</RUN>
```

NCBI では DRR046787 で検索すると DRR049544 が表示されます。[https://ncbi.nlm.nih.gov/sra/DRR046787](https://ncbi.nlm.nih.gov/sra/DRR046787)   
また、NCBI SRA Run Browser では secondary である DRR046787 が小さく併記されます。[DRR049544](https://trace.ncbi.nlm.nih.gov/Traces/?view=run_browser&acc=DRR049544&display=metadata)

Experiment DRX と Submission DRA 番号のセカンダリも同様の扱いになります。