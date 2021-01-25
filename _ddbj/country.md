---
layout: tabbed_indexed_content
title: Controlled vocabulary for /country qualifier
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
---

The original site; [Controlled vocabulary for /country qualifier](//www.insdc.org/documents/country-qualifier-vocabulary) 2020.01.08 version

A new qualifier was introduced in version 2.1 (December 15, 1998) of the Feature table definitions: /country.<br>This new qualifier is used to indicate the country of origin of a DNA sample. 

The text below outlines the format and the present list of allowed countries. 

## Defiition of /country qualifier  <a name="Defiition_of_country_qualifier"></a>

<pre><code>
Qualifier:      /country=" "
Qualifier       /country=
Definition      locality of isolation of the sequenced organism indicated in
                terms of political names for nations, oceans or seas, followed
                by regions and localities
Value format    "[:][, ]" where
                country_value is any value from the controlled vocabulary at
                <a href="//www.insdc.org/documents/country-qualifier-vocabulary">//www.insdc.org/documents/country-qualifier-vocabulary</a>
Example         /country="Canada:Vancouver"
                /country="France:Cote d'Azur, Antibes"
                /country="Atlantic Ocean:Charlie Gibbs Fracture Zone"
Comment         Intended to provide a reference to the site where the source
                organism was isolated or sampled. Regions and localities should
                be indicated where possible. Note that the physical geography of
                the isolation or sampling site should be represented in
                /isolation_source.
</code></pre>

COUNTRY LIST based on information from: [https://unstats.un.org/unsd/methods/m49/m49.htm](https://unstats.un.org/unsd/methods/m49/m49.htm)

### Initial links

<table>
    <tbody>
        <tr>
            <td><a href="#A">A</a></td>
            <td><a href="#B">B</a></td>
            <td><a href="#C">C</a></td>
            <td><a href="#D">D</a></td>
            <td><a href="#E">E</a></td>
            <td><a href="#F">F</a></td>
            <td><a href="#G">G</a></td>
            <td><a href="#H">H</a></td>
            <td><a href="#I">I</a></td>
            <td><a href="#J">J</a></td>
            <td><a href="#K">K</a></td>
            <td><a href="#L">L</a></td>
            <td><a href="#M">M</a></td>
        </tr>
        <tr>
            <td><a href="#N">N</a></td>
            <td><a href="#O">O</a></td>
            <td><a href="#P">P</a></td>
            <td><a href="#Q">Q</a></td>
            <td><a href="#R">R</a></td>
            <td><a href="#S">S</a></td>
            <td><a href="#T">T</a></td>
            <td><a href="#U">U</a></td>
            <td><a href="#V">V</a></td>
            <td><a href="#W">W</a></td>
            <td>X</td>
            <td><a href="#Y">Y</a></td>
            <td><a href="#Z">Z</a></td>
        </tr>
    </tbody>
</table>

[Historical Country Names](#history) 

## A  {#A}

- Afghanistan 
- Albania 
- Algeria 
- American Samoa 
- Andorra 
- Angola 
- Anguilla 
- Antarctica 
- Antigua and Barbuda 
- Arctic Ocean 
- Argentina 
- Armenia 
- Aruba 
- Ashmore and Cartier Islands 
- Atlantic Ocean 
- Australia 
- Austria 
- Azerbaijan 

## B  {#B}

- Bahamas 
- Bahrain 
- Baltic Sea 
- Baker Island 
- Bangladesh 
- Barbados 
- Bassas da India 
- Belarus 
- Belgium 
- Belize 
- Benin 
- Bermuda 
- Bhutan 
- Bolivia 
- Borneo 
- Bosnia and Herzegovina 
- Botswana 
- Bouvet Island 
- Brazil 
- British Virgin Islands 
- Brunei 
- Bulgaria 
- Burkina Faso 
- Burundi 

## C  {#C}

- Cambodia 
- Cameroon 
- Canada
- Cape Verde 
- Cayman Islands 
- Central African Republic 
- Chad 
- Chile
- China 
- Christmas Island 
- Clipperton Island 
- Cocos Islands 
- Colombia 
- Comoros 
- Cook Islands 
- Coral Sea Islands 
- Costa Rica 
- Cote d'Ivoire 
- Croatia 
- Cuba 
- Curacao 
- Cyprus 
- Czech Republic 

## D  {#D}
- Democratic Republic of the Congo 
- Denmark 
- Djibouti 
- Dominica 
- Dominican Republic 

## E  {#E}
- Ecuador 
- Egypt 
- El Salvador 
- Equatorial Guinea 
- Eritrea 
- Estonia 
- Eswatini 
- Ethiopia 
- Europa Island 

## F  {#F}
- Falkland Islands (Islas Malvinas) 
- Faroe Islands 
- Fiji 
- Finland 
- France 
- French Guiana 
- French Polynesia 
- French Southern and Antarctic Lands 

## G  {#G}
- Gabon 
- Gambia 
- Gaza Strip 
- Georgia 
- Germany
- Ghana 
- Gibraltar 
- Glorioso Islands 
- Greece 
- Greenland 
- Grenada 
- Guadeloupe 
- Guam 
- Guatemala 
- Guernsey 
- Guinea 
- Guinea-Bissau 
- Guyana 

## H  {#H}
- Haiti 
- Heard Island and McDonald Islands 
- Honduras 
- Hong Kong 
- Howland Island 
- Hungary 

## I  {#I}
- Iceland 
- India 
- Indian Ocean 
- Indonesia 
- Iran 
- Iraq 
- Ireland 
- Isle of Man 
- Israel 
- Italy

## J  {#J}
- Jamaica 
- Jan Mayen 
- Japan 
- Jarvis Island 
- Jersey 
- Johnston Atoll 
- Jordan 
- Juan de Nova Island 

## K  {#K}
- Kazakhstan 
- Kenya 
- Kerguelen Archipelago 
- Kingman Reef 
- Kiribati 
- Kosovo 
- Kuwait 
- Kyrgyzstan 

## L  {#L}
- Laos 
- Latvia 
- Lebanon 
- Lesotho 
- Liberia 
- Libya
- Liechtenstein 
- Line Islands 
- Lithuania 
- Luxembourg 

## M  {#M}
- Macau 
- Macedonia 
- Madagascar 
- Malawi 
- Malaysia 
- Maldives 
- Mali 
- Malta 
- Marshall Islands 
- Martinique 
- Mauritania 
- Mauritius 
- Mayotte 
- Mediterranean Sea 
- Mexico 
- Micronesia 
- Midway Islands 
- Moldova 
- Monaco 
- Mongolia 
- Montenegro 
- Montserrat 
- Morocco 
- Mozambique 
- Myanmar 

## N  {#N}
- Namibia 
- Nauru 
- Navassa Island 
- Nepal 
- Netherlands
- New Caledonia 
- New Zealand 
- Nicaragua 
- Niger 
- Nigeria 
- Niue 
- Norfolk Island 
- North Korea 
- North Macedonia 
- North Sea 
- Northern Mariana Islands 
- Norway 

## O  {#O}
- Oman 

## P  {#P}
- Pacific Ocean 
- Pakistan
- Palau 
- Palmyra Atoll 
- Panama 
- Papua New Guinea 
- Paracel Islands 
- Paraguay 
- Peru 
- Philippines 
- Pitcairn Islands 
- Poland 
- Portugal 
- Puerto Rico 

## Q  {#Q}
- Qatar 

## R  {#R}
- Republic of the Congo 
- Reunion 
- Romania 
- Ross Sea 
- Russia 
- Rwanda 

## S  {#S}
- Saint Helena 
- Saint Kitts and Nevis 
- Saint Lucia 
- Saint Pierre and Miquelon 
- Saint Vincent and the Grenadines 
- Samoa 
- San Marino 
- Sao Tome and Principe 
- Saudi Arabia 
- Senegal 
- Serbia 
- Seychelles 
- Sierra Leone 
- Singapore 
- Sint Maarten 
- Slovakia 
- Slovenia 
- Solomon Islands 
- Somalia 
- South Africa
- South Georgia and the South Sandwich Islands 
- South Korea 
- South Sudan 
- Southern Ocean 
- Spain 
- Spratly Islands 
- Sri Lanka 
- State of Palestine 
- Sudan 
- Suriname 
- Svalbard 
- Sweden 
- Switzerland 
- Syria


## T  {#T}
- Taiwan 
- Tajikistan 
- Tanzania 
- Tasman Sea 
- Thailand 
- Timor-Leste 
- Togo 
- Tokelau 
- Tonga 
- Trinidad and Tobago 
- Tromelin Island 
- Tunisia 
- Turkey 
- Turkmenistan 
- Turks and Caicos Islands 
- Tuvalu 

## U  {#U}
- USA 
- Uganda 
- Ukraine 
- United Arab Emirates 
- United Kingdom 
- Uruguay 
- Uzbekistan 

## V  {#V}
- Vanuatu 
- Venezuela 
- Viet Nam 
- Virgin Islands 

## W  {#W}
- Wake Island 
- Wallis and Futuna 
- West Bank 
- Western Sahara 

## Y  {#Y}
- Yemen 

## Z  {#Z}
- Zambia 
- Zimbabwe 

## Historical Country Names  {#history} 
- Belgian Congo 
- British Guiana 
- Burma 
- Czechoslovakia
- East Timor 
- Former Yugoslav Republic of Macedonia 
- Korea 
- Macedonia
- Netherlands Antilles 
- Serbia and Montenegro 
- Siam 
- Swaziland 
- The former Yugoslav Republic of Macedonia 
- USSR 
- Yugoslavia 
- Zaire
