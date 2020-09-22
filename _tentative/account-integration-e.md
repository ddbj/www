---
layout: indexed_content
title: New account system
pathname: account-integration-e
category: tentative
lang: en
---

## Current account system <a name="current-account"></a>

Bioinformation and DDBJ Center provides three separate account systems,
BioProject/BioSample/DRA/GEA (D-way), JGA and AGD. These systems will be
integrated into new single system with ['group' concept](group-e.html)
and users will be able to access all submission services with single
account. In the new system, a principal investigator (PI) and a
researcher can collaboratively submit and update records within their
own accounts, and transfer records to a successor when leaving institute
or lab.

{::nomarkdown}
{% include image.html url="books/account_integration-e.png" caption="Integration to new account system" class="w450" %}
{:/}

## Migration to new account system <a name="migration"></a>

As the first step, the JGA account system will be migrated to new one in
29th September, 2020. The AGD system will follow (planned in 2020).

At the same time, the new account system will be introduced to the
application system of [NBDC](https://humandbs.biosciencedbc.jp/en).
After this integration, users will be able to "apply data submission
application to NBDC - submit data to JGA" and "apply data use
application to NBDC - download JGA dataset" in the same account.

The JGA account migration process is explained below.

### When you own JGA account only <a name="jga-only"></a>

If you have JGA account (Account: 'A') only, 'A' is migrated to new
system. Because the new system and the BioProject/BioSample/DRA/GEA
D-way account system are synchronized, you can use 'A' for both JGA and
D-way.

<span class="red">After a new account is notified, do NOT
create new D-way account to avoid duplication.</span>

{::nomarkdown}
{% include image.html url="books/account_jga_only-e.png" caption="When you own JGA account only" class="w450" %}
{:/}

### When you own D-way account only <a name="dway-only"></a>

When you own D-way account (Account: 'B') only, after the JGA system is
migrated to the new one, you can use 'B' in JGA.

{::nomarkdown}
{% include image.html url="books/account_dway_only-e.png" caption="When you own D-way account only" class="w450" %}
{:/}

### When you own both JGA and D-way accounts <a name="jga-and-dway"></a>

When you own a JGA (Account: 'C') and a D-way account (Account: 'D').
<span class="red">The JGA accounts are merged to the D-way
accounts.</span> After the JGA system migration, you can use 'D' for
JGA. The JGA data linked to 'C' are transferred to 'D'. The account 'C'
will be discontinued.

{::nomarkdown}
{% include image.html url="books/account_jga_dway-e.png" caption="When you own JGA and D-way accounts" class="w450" %}
{:/}

## AGD account <a name="agd-account"></a>

The AGD account will be migrated to the new one as JGA (planned in
2020).

-   When you have D-way account, the AGD account is merged to D-way.
-   When you have JGA account and no D-way, the AGD account is merged to
    JGA.
-   When you have no D-way nor JGA account, the AGD account is retained
    and can be used for D-way/JGA/AGD.

