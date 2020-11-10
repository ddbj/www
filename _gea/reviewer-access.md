---
layout: indexed_content
title: Reviewer Access
pathname: reviewer-access
category: gea
lang: ja
---

## Reviewer access token <a name="access"></a>

GEA 登録データにアクセッション番号が発行された後、'Generate new reviewer access key' で非公開データに read-only の匿名アクセスを提供する reviewer トークン を生成することができます。トークンをジャーナルの編集者に渡すことで非公開データへのアクセスが必要な査読者にトークンを回覧してもらうことができます。トークンは生成後三か月で失効します。必要であればトークンを再発行することができます。 Reviewer access URL はアクセッション番号発行通知メールに含まれています。 Reviewer access では [DRA](/dra/index.html) に登録した次世代シークエンス生データ以外の全てのメタデータとデータファイルへのアクセスが提供されます。[DRA](/dra/index.html) は非公開データへの reviewer access を提供していません。

{::nomarkdown}
{% include image.html url="submission/reviewer1.jpg" caption="reviewer access key を生成" class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/reviewer3.jpg" caption="reviewer トークン" class="w300" %}
{:/}

## 登録者の匿名化 <a name="anonymity"></a>

論文の査読プロセスにおけるバイアスを無くすためいくつかのジャーナルでは査読者に論文著者が誰だか分からなくする "double-blind" peer review オプションを論文投稿者に提供しています。 GEA では登録者が特定されないようにするためにメタデータのいくつかのフィールド、[IDF](/gea/metadata.html#idf_tags) で "Person" (名前とメールアドレス)、"PubMed" と "Publication" (pubmed ID と DOI) で始まるフィールドを削除して reviewer access に供する "double-blind" オプションを提供しています。 登録者が double-blind オプションを選択して reviewer token を生成した場合、reviewer には登録者を特定するようなフィールドが削除されたメタデータが提供されますが、GEA 登録者は削除されていないメタデータを登録アカウントでみることができます。論文を double-blind 査読をサポートしていないジャーナルに再投稿することになった場合など、double-blind オプションを選択せずにトークンを再生成すると reviewer access でフルメタデータが提供されるようになります。 データ公開後は reviewer access での登録者関連フィールドの自動削除は実施されなくなります。

<div class="attention red">
GEA は "Person"、"PubMed" と "Publication" で始まる IDF フィールドを自動で削除します。解析済みデータファイルのエクセル所有者情報などこれら以外の箇所に登録者を特定する情報を含めないようにすることは登録者の責任において実施してください。
</div>

{::nomarkdown}
{% include image.html url="submission/reviewer7.jpg" caption="double-blind オプションで自動削除される IDF フィールド" class="w300" %}
{:/}
