---
layout: simple
title: BioProject/BioSample 番号の DRA 登録での指定方法は?
category: faq
db:
  - bioproject
  - biosample
  - dra
tags: 
  - メタデータの登録
date: 2014-06-04T14:59:28
lang: ja
---

## BioProject/BioSample 番号の DRA 登録での指定方法は?

<p>BioProject と BioSample の投稿を始めると，それぞれに対して一時的なトラッキング用 ID である PSUB/SSUB 番号が割り振られますが，これらは正式なアクセッション番号ではありません。</p><p>BioProject の登録が完了すると PRJDB で始まるアクセッション番号が，BioSample の登録が完了すると，それぞれのサンプルに対して SAMD で始まるアクセッション番号が発行されます。</p><p>DRA 登録の過程では，PSUB もしくは PRJDB 番号で BioProject を，そして SSUB + sample name もしくは SAMD 番号で BioSample を指定します。DRA のデータファイルは一つの BioSample にしかリンクされないことに注意してください。</p><p>共同研究でサンプル調整とシークエンシングが別の組織で行われた場合など，他の登録アカウントで取得された BioProject と BioSample ID を DRA から参照することができます。アカウントをまたがった参照を希望する場合は <a href="/contact-ddbj.html">DRA チーム</a>までご連絡ください。アカウントをまたがる場合は <a href="/faq/ja/bp-bs-seq-release.html">BioProject，BioSample と DRA 間での連動公開</a>にご注意ください。</p>
