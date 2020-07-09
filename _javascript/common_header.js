(()=>{
  const HEADER_SERVICES_ROWS = [
    [
      {
        groupLabel: 'Search',
        items: [
          {
            label: {
              ja: 'getentry',
              en: 'getentry'
            },
            guide: {
              ja: 'アクセッション番号で塩基配列データを取得',
              en: 'Retrieve sequence records by accession numbers'
            },
            uri: {
              ja: 'http://getentry.ddbj.nig.ac.jp/top-j.html',
              en: 'http://getentry.ddbj.nig.ac.jp/top-e.html'
            }
          },
          {
            label: {
              ja: 'ARSA',
              en: 'ARSA'
            },
            guide: {
              ja: 'キーワードで塩基配列データを検索',
              en: 'Retrieve sequence and annotation by keywords'
            },
            uri: {
              ja: 'http://ddbj.nig.ac.jp/DRASearch/',
              en: 'http://ddbj.nig.ac.jp/DRASearch/'
            }
          },
          {
            label: {
              ja: 'DRA Search',
              en: 'DRA Search'
            },
            guide: {
              ja: 'DDBJ/EBI/NCBI SRA のデータの検索と取得',
              en: 'Search and retrieve sequencing data.'
            },
            uri: {
              ja: 'http://ddbj.nig.ac.jp/DRASearch/',
              en: 'http://ddbj.nig.ac.jp/DRASearch/'
            }
          },
          {
            label: {
              ja: 'TXSearch',
              en: 'TXSearch'
            },
            guide: {
              ja: '生物名を検索',
              en: 'Search unified taxonomy database'
            },
            uri: {
              ja: 'http://ddbj.nig.ac.jp/tx_search/?lang=ja',
              en: 'http://ddbj.nig.ac.jp/tx_search/?lang=en'
            }
          },
          {
            label: {
              ja: 'BLAST',
              en: 'BLAST'
            },
            guide: {
              ja: '塩基配列の類似性で検索',
              en: 'Search nucleotide sequences by sequence similarity'
            },
            uri: {
              ja: 'http://blast.ddbj.nig.ac.jp/blastn?lang=ja',
              en: 'http://blast.ddbj.nig.ac.jp/blastn?lang=en'
            }
          }
        ]
      },
      {
        groupLabel: 'Analysis',
        items: [
          {
            label: {
              ja: 'Vector Screening System',
              en: 'Vector Screening System'
            },
            guide: {
              ja: 'ベクター配列をスクリーニング',
              en: 'Screen vector sequences'
            },
            uri: {
              ja: 'http://ddbj.nig.ac.jp/vecscreen/vecscreen?lang=ja',
              en: 'http://ddbj.nig.ac.jp/vecscreen/vecscreen?lang=en'
            }
          },
          {
            label: {
              ja: 'ClustalW',
              en: 'ClustalW'
            },
            guide: {
              ja: '系統樹を作成',
              en: 'Multiple alignment and tree-making'
            },
            uri: {
              ja: 'http://clustalw.ddbj.nig.ac.jp/index.php?lang=ja',
              en: 'http://clustalw.ddbj.nig.ac.jp/index.php?lang=en'
            }
          },
          {
            label: {
              ja: 'WABI (Web API for Biology)',
              en: 'WABI (Web API for Biology)'
            },
            guide: {
              ja: 'DDBJ 検索サービスの Web API',
              en: 'Web API for using the search services of DDB'
            },
            uri: {
              ja: '/search/help/wabi/wabi.html',
              en: '/search/help/wabi/wabi.html'
            }
          },
          {
            label: {
              ja: 'DDBJ FTP Site',
              en: 'DDBJ FTP Site'
            },
            guide: {
              ja: 'データを ftp でダウンロード',
              en: 'Download public data by ftp'
            },
            uri: {
              ja: 'ftp://ftp.ddbj.nig.ac.jp/',
              en: 'ftp://ftp.ddbj.nig.ac.jp/'
            }
          }
        ]
      }
    ],
    [
      {
        groupLabel: 'Databases',
        items: [
          {
            label: {
              ja: 'Annotated/Assembled Sequences (DDBJ)',
              en: 'Annotated/Assembled Sequences (DDBJ)'
            },
            guide: {
              ja: 'Annotated/Assembled Sequences (DDBJ)',
              en: 'Annotated/Assembled Sequences (DDBJ)'
            },
            uri: {
              ja: '/ddbj/index.html',
              en: '/ddbj/index.html'
            }
          },
          {
            label: {
              ja: 'Sequence Read Archive',
              en: 'Sequence Read Archive'
            },
            guide: {
              ja: 'Sequence Read Archive',
              en: 'Sequence Read Archive'
            },
            uri: {
              ja: '/dra/index.html',
              en: '/dra/index.html'
            }
          },
          {
            label: {
              ja: 'Genomic Expression Archive (GEA)',
              en: 'Genomic Expression Archive (GEA)'
            },
            guide: {
              ja: 'Genomic Expression Archive',
              en: 'Genomic Expression Archive'
            },
            uri: {
              ja: '/gea/index.html',
              en: '/gea/index.html'
            }
          },
          {
            label: {
              ja: 'BioProject',
              en: 'BioProject'
            },
            guide: {
              ja: 'BioProject',
              en: 'BioProject'
            },
            uri: {
              ja: '/bioproject/index.html',
              en: '/bioproject/index.html'
            }
          },
          {
            label: {
              ja: 'BioSample',
              en: 'BioSample'
            },
            guide: {
              ja: 'BioSample',
              en: 'BioSample'
            },
            uri: {
              ja: '/biosample/index.html',
              en: '/biosample/index.html'
            }
          },
          {
            label: {
              ja: 'Japanese Genotype-phenotype Archive (JGA)',
              en: 'Japanese Genotype-phenotype Archive (JGA)'
            },
            guide: {
              ja: 'Japanese Genotype-phenotype Archive',
              en: 'Japanese Genotype-phenotype Archive'
            },
            uri: {
              ja: '/jga/index.html',
              en: '/jga/index.html'
            }
          },
          {
            label: {
              ja: 'Submission portal D-way',
              en: 'Submission portal D-way'
            },
            guide: {
              ja: 'Submission portal D-way',
              en: 'Submission portal D-way'
            },
            uri: {
              ja: 'https://ddbj.nig.ac.jp/D-way',
              en: 'https://ddbj.nig.ac.jp/D-way'
            }
          }
        ]
      },
      {
        groupLabel: 'NIG SuperComputer',
        items: [
          {
            label: {
              ja: 'NIG SuperComputer',
              en: 'NIG SuperComputer'
            },
            guide: {
              ja: 'NIG SuperComputer',
              en: 'NIG SuperComputer'
            },
            uri: {
              ja: 'https://sc.ddbj.nig.ac.jp/ja',
              en: 'https://sc.ddbj.nig.ac.jp/en'
            }
          }
        ]
      }
    ],
    [
      {
        groupLabel: 'DBCLS Services',
        items: [
          {
            label: {
              ja: 'AOE',
              en: 'AOE'
            },
            guide: {
              ja: '公共遺伝子発現データベースの目次',
              en: 'Statistics and trends of gene expression data'
            },
            uri: {
              ja: 'http://aoe.dbcls.jp/',
              en: 'http://aoe.dbcls.jp/'
            }
          },
          {
            label: {
              ja: 'CRISPRdirect',
              en: 'CRISPRdirect'
            },
            guide: {
              ja: '入力した塩基配列に対してCRISPR/Cas9システムのガイドRNAを設計することができる',
              en: 'Designing CRISPR/Cas9 guide RNA with reduced off-target sites'
            },
            uri: {
              ja: 'https://crispr.dbcls.jp/',
              en: 'https://crispr.dbcls.jp/'
            }
          },
          {
            label: {
              ja: 'DBCLS SRA',
              en: 'DBCLS SRA'
            },
            guide: {
              ja: '公共次世代シーケンスデータの統計情報と検索機能を提供するサービス',
              en: 'Statistics and trends of SRA data'
            },
            uri: {
              ja: 'http://sra.dbcls.jp/',
              en: 'http://sra.dbcls.jp/'
            }
          },
          {
            label: {
              ja: 'Gendoo',
              en: 'Gendoo'
            },
            guide: {
              ja: '遺伝子、疾患について特徴をキーワードでリスト表示するツール',
              en: 'Functional profiling of gene and disease features for omics analysis'
            },
            uri: {
              ja: 'http://gendoo.dbcls.jp/',
              en: 'http://gendoo.dbcls.jp/'
            }
          },
          {
            label: {
              ja: 'GGGenome',
              en: 'GGGenome'
            },
            guide: {
              ja: '高速ゲノム配列検索ツール',
              en: 'A ultrafast sequence search'
            },
            uri: {
              ja: 'https://gggenome.dbcls.jp/ja/',
              en: 'https://gggenome.dbcls.jp/en/'
            }
          },
          {
            label: {
              ja: 'GGRNA',
              en: 'GGRNA'
            },
            guide: {
              ja: '高速な遺伝子検索エンジン',
              en: 'A Google-like, ultrafast search engine for genes and transcripts'
            },
            uri: {
              ja: 'https://ggrna.dbcls.jp/ja/',
              en: 'https://ggrna.dbcls.jp/en/'
            }
          },
          {
            label: {
              ja: 'RefEx',
              en: 'RefEx'
            },
            guide: {
              ja: '遺伝子発現解析の基準となる各遺伝子の遺伝子発現量を簡単に検索、閲覧できるウェブツール',
              en: 'A web tool for a comfortable search of reference data for gene expression analysis'
            },
            uri: {
              ja: 'http://refex.dbcls.jp/index.php?lang=ja',
              en: 'http://refex.dbcls.jp/index.php?lang=en'
            }
          }
        ]
      }
    ]
  ];
  const HEADER_MENU = [
    {
      label: {
        ja: 'ログインとサブミット',
        en: 'Login & Submit'
      },
      uri: {
        ja: 'https://ddbj.nig.ac.jp/D-way',
        en: 'https://ddbj.nig.ac.jp/D-way'
      }
    },
    {
      label: {
        ja: '個人情報の取り扱いと免責事項',
        en: 'Policies and Disclaimers'
      },
      uri: {
        ja: '/policies.html',
        en: '/policies-e.html'
      }
    },
    {
      label: {
        ja: 'コンタクト',
        en: 'Contact'
      },
      uri: {
        ja: '/contact.html',
        en: '/contact-e.html'
      }
    }
  ];
  const CSS = `#DDBJ_CommonHeader {
    height: 4rem;
    background-color: black;
    color: white;
    font-size: 1.2rem;
    line-height: 4rem;
  }
  #DDBJ_CommonHeader a {
    color: white;
  }
  #DDBJ_CommonHeader > .DDBJ_inner {
    margin: 0 auto;
    max-width: 128rem;
    padding: 0 1rem;
    height: 4rem;
    display: flex;
  }
  #DDBJ_CommonHeader > .DDBJ_inner.-stretched {
    max-width: 100%;
  }
  #DDBJ_CommonHeader > .DDBJ_inner .DDBJ_spcollapsemenubutton {
    display: none;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_logocontainer > .DDBJ_logotype {
    margin-left: 1.6rem;
    display: block;
    text-indent: -9999px;
    width: 6.7rem;
    height: 4rem;
    background: url(data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20180%2066%22%20style%3D%22enable-background%3Anew%200%200%20180%2066%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23FFFFFF%3B%7D.st1%7Bfill%3A%23E99523%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M37.9%2C58.4c-0.3-0.3-1.8-0.7-5.1-1.6c-0.5%2C0.5-1.4%2C1.5-3.4%2C3c2.1%2C0.4%2C7.1%2C0.6%2C7.9%2C0.3C38.6%2C59.6%2C38.2%2C58.7%2C37.9%2C58.4z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M1.8%2C4.2C1.1%2C4.3-0.4%2C5%2C0.1%2C5.7c0.3%2C0.4%2C3.8%2C0.7%2C7%2C1.8c0.8-1%2C1.6-1.7%2C2.1-2.1C4.8%2C4.1%2C2.3%2C4.1%2C1.8%2C4.2z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M28.2%2C16.6c-1.9-4.9-7.7-7.8-13.9-9.4c-0.6%2C0.4-1.7%2C1.6-2.1%2C2.5c6.9%2C2.9%2C10.2%2C5.7%2C11.3%2C8.6c1.8%2C4.5-3.6%2C11.8-6.8%2C15.7c-3.7%2C4.5-7.2%2C9.1-5.9%2C13.7c1.5%2C5.4%2C8.5%2C9.8%2C12.2%2C10.5c0.5%2C0.1%2C3.2-2.7%2C3.2-2.8c-4.9-2-10.6-5.6-10.9-10.6c-0.2-3.7%2C3.3-8.4%2C6-11.6C25.7%2C27.9%2C30.5%2C22.5%2C28.2%2C16.6z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M20%2C0C17.8-0.6-1.8%2C10.7%2C2.8%2C24.7c1.6%2C4.7%2C8.8%2C7.4%2C12.8%2C9l1.8-2C12.9%2C30%2C9.9%2C28.1%2C8%2C24.1c-5.1-11%2C10.4-22%2C11.9-23C20.7%2C0.6%2C20.4%2C0.1%2C20%2C0z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M37.4%2C44.2c-2.2-6.7-9.3-9.2-14.8-11c0%2C0-1.2%2C0.9-1.8%2C2c5.3%2C1.9%2C9.2%2C3.6%2C11%2C8.7c1.3%2C3.8-1.3%2C10.3-8.3%2C15.2c-3.1%2C2.2-5.1%2C3.4-6%2C4c-1.3%2C0.9-2.3%2C3.1-0.2%2C2.7c0%2C0%2C5.7-2.3%2C10.7-6.3C29.2%2C58.7%2C39.7%2C51.1%2C37.4%2C44.2z%22%2F%3E%3C%2Fg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M65.2%2C12.4H49.4h-0.8v3.1l0.7%2C0.1c4%2C0.3%2C4%2C0.3%2C4%2C4.6v22.7c0%2C4.3-0.1%2C4.4-4.5%2C4.7l-0.8%2C0.1v3.1h14.1c7.4%2C0%2C13-1.6%2C17.2-4.9c4.7-3.6%2C7.3-9%2C7.3-15.7c0-5.1-1.8-9.6-5-12.7C78.2%2C14%2C72.9%2C12.4%2C65.2%2C12.4z%20M65%2C47c-4%2C0-5.2-1-5.2-4.5V19c0-2%2C0.2-2.4%2C0.4-2.5c0.1-0.1%2C0.8-0.6%2C3.9-0.6c3.7%2C0%2C6.8%2C0.7%2C9.2%2C2.2c4%2C2.4%2C6.3%2C6.9%2C6.3%2C12.8C79.6%2C38.7%2C75.8%2C47%2C65%2C47z%20M105.4%2C12.4H89.6h-0.8v3.1l0.7%2C0.1c4%2C0.3%2C4%2C0.3%2C4%2C4.6v22.7c0%2C4.3-0.1%2C4.4-4.5%2C4.7l-0.8%2C0.1v3.1h14.1c7.4%2C0%2C13-1.6%2C17.2-4.9c4.7-3.6%2C7.2-9%2C7.2-15.7c0-5.1-1.8-9.6-5-12.7C118.3%2C14%2C113.1%2C12.4%2C105.4%2C12.4z%20M105.2%2C47c-4%2C0-5.2-1-5.2-4.5V19c0-2%2C0.2-2.4%2C0.4-2.5c0.1-0.1%2C0.8-0.6%2C3.9-0.6c3.7%2C0%2C6.8%2C0.7%2C9.2%2C2.2c4%2C2.4%2C6.3%2C6.9%2C6.3%2C12.8C119.7%2C38.7%2C115.9%2C47%2C105.2%2C47zM151%2C29.9c3.7-1.8%2C5.8-4.6%2C5.8-8.3c0-2.9-1.3-5.6-3.5-7.1c-2-1.4-4.8-2.1-8.9-2.1h-14.5H129v3.1l0.8%2C0.1c4%2C0.3%2C4%2C0.3%2C4%2C4.5v22.8c0%2C4.2%2C0%2C4.2-4.4%2C4.5l-0.8%2C0.1v3.1h13.3c4.8%2C0%2C8.6-0.8%2C11.4-2.4c3.7-2%2C5.8-5.3%2C5.8-9.2C159%2C35.8%2C157.5%2C31.7%2C151%2C29.9z%20M140.1%2C18.4c0-1.8%2C0.2-2%2C0.3-2.1c0.3-0.2%2C1.3-0.4%2C2.7-0.4c6%2C0%2C6.7%2C4.5%2C6.7%2C6.4c0%2C4.4-2.4%2C6.4-7.9%2C6.4c0%2C0-1.1%2C0-1.8%2C0C140.1%2C27.3%2C140.1%2C18.4%2C140.1%2C18.4z%20M144%2C47.1c-3%2C0-3.9-0.5-3.9-4.3c0%2C0%2C0-9.2%2C0-10.6c0.8%2C0%2C1.7%2C0%2C1.7%2C0c6.7%2C0%2C10%2C2.4%2C10%2C7.5C151.9%2C46.3%2C146.4%2C47.1%2C144%2C47.1z%20M179.2%2C12.4h-15.4v3.1l0.8%2C0.1c4.1%2C0.3%2C4.3%2C0.3%2C4.3%2C4.7v19.2c0%2C4.5-0.1%2C7.9-0.6%2C10.6c-0.6%2C3.2-2.2%2C5.4-5%2C6.7l-0.7%2C0.3l1.3%2C3l0.7-0.2c1.7-0.5%2C3.7-1.8%2C5.6-3.4c3.8-3.5%2C5.1-7.5%2C5.1-15.2v-21c0-4.3%2C0.2-4.4%2C4-4.7l0.7-0.1v-3.1L179.2%2C12.4L179.2%2C12.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) no-repeat 0 center;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services {
    position: relative;
    padding-right: 10rem;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_title {
    cursor: pointer;
    padding-left: 1.6rem;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_title:after {
    content: "";
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    border-left: solid 1px white;
    border-bottom: solid 1px white;
    position: relative;
    transform: translateY(-0.3rem) rotate(-45deg);
    margin-left: 0.8rem;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows {
    padding: 1.6rem 0rem 2.4rem;
    display: flex;
    justify-content: center;
    position: absolute;
    left: -9.3rem;
    width: 100vw;
    max-width: 128rem;
    background-color: #1C1B19;
    font-size: 1.4rem;
    line-height: 2rem;
    opacity: 0;
    transform: translateY(-1rem);
    pointer-events: none;
    z-index: 99999999;
    transition: opacity 0.2s, transform 0.2s;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row {
    margin: 0 4rem;
    flex-grow: 1;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row > .DDBJ_group + .DDBJ_group {
    margin-top: 2.8rem;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row > .DDBJ_group > .DDBJ_grouptitle {
    color: #ff9905;
    padding: 0.4rem 0;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row > .DDBJ_group > ul > li {
    padding: 0.4rem 0;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services:hover > .DDBJ_rows {
    opacity: 1;
    transform: translateY(0rem);
    pointer-events: auto;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_navigation {
    flex-grow: 2;
    text-align: right;
  }
  #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_navigation > ul > li {
    display: inline-block;
    margin-left: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    #DDBJ_CommonHeader {
      z-index: 10000000;
    }
    #DDBJ_CommonHeader > .DDBJ_inner {
      width: auto;
      padding: 0;
    }
    #DDBJ_CommonHeader > .DDBJ_inner a {
      color: black;
      text-decoration: none;
    }
    #DDBJ_CommonHeader > .DDBJ_inner .DDBJ_spcollapsemenu {
      display: block !important;
      background-color: #FF7300 !important;
      padding: 0.8rem 0 !important;
      width: 100vw !important;
      position: absolute !important;
      left: 0 !important;
      top: 4rem !important;
      z-index: 10000000 !important;
      text-align: left !important;
      opacity: 0 !important;
      transform: translateY(-1rem) !important;
      pointer-events: none !important;
      transition: opacity 0.2s, transform 0.2s;
    }
    #DDBJ_CommonHeader > .DDBJ_inner .DDBJ_spcollapsemenubutton {
      display: block;
      padding: 0 1rem;
      font-size: 1.4rem;
    }
    #DDBJ_CommonHeader > .DDBJ_inner .DDBJ_spcollapsemenubutton.-opened {
      background-color: #FF7300;
    }
    #DDBJ_CommonHeader > .DDBJ_inner .DDBJ_spcollapsemenubutton.-opened + .DDBJ_spcollapsemenu {
      opacity: 1 !important;
      transform: translateY(0rem) !important;
      pointer-events: auto !important;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_logocontainer {
      flex-grow: 2;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services {
      position: static;
      padding-right: 0;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_title {
      display: none;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows {
      width: auto;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row {
      margin: 0;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row + .DDBJ_row {
      margin-top: 1.4rem;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row > .DDBJ_group + .DDBJ_group {
      margin-top: 1.4rem;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_rows > .DDBJ_row > .DDBJ_group > .DDBJ_grouptitle {
      padding: 0 2rem;
      color: white;
      line-height: 4rem;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_navigation {
      flex-grow: 0;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_navigation > ul > li {
      display: block;
    }
    #DDBJ_CommonHeader > .DDBJ_inner > .DDBJ_services > .DDBJ_spcollapsemenu > .DDBJ_row > .DDBJ_group > ul > li, #DDBJ_CommonHeader > .DDBJ_inner .DDBJ_navigation > ul > li {
      padding: 0 2rem;
      margin: 0;
      line-height: 4rem;
    }
  }
  `; // TODO: 最終的にはCSS読み込みは自動化したい
  const script = document.getElementById('DDBJ_common_header');
  let language = document.getElementsByTagName('html')[0].getAttribute('lang');
  language = language === 'ja' ? 'ja' : 'en';
  script.style.display = '';
  script.style.height = '';

  // add stylesheet
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // generate header
  const header = document.createElement('header');
  header.id = 'DDBJ_CommonHeader';
  header.innerHTML = (`
    <div class="DDBJ_inner">
      <div class="DDBJ_logocontainer">
        <a class="DDBJ_logotype" href="/index.html">DDBJ DNA Data Bank of Japan</a>
      </div>
      <nav class="DDBJ_services">
        <h1 class="DDBJ_title">サービス</h1>
        <div class="spcollapsemenubutton">Services</div>
        <div class="DDBJ_rows DDBJ_spcollapsemenu">
          ${HEADER_SERVICES_ROWS.map(row => {
            return `<div class="DDBJ_row">${row.map(group => {
              return `
              <div class="DDBJ_group">
                <h2 class="DDBJ_grouptitle">${group.groupLabel}</h2>
                <ul>
                  ${group.items .map(item => `
                  <li>
                    <a
                      title="${item.guide[language]}"
                      href="${item.uri[language]}"
                    >${item.label[language]}</a>
                  </li>
                  `).join('')}
                </ul>
              </div>`;
            }).join('')}</div>`;
          }).join('')}
        </div>
      </nav>
      <nav class="DDBJ_navigation">
        <div class="DDBJ_spcollapsemenubutton">Menu</div>
        <ul class="DDBJ_spcollapsemenu">
          ${HEADER_MENU.map(item => `
          <li><a href="${item.uri[language]}">${item.label[language]}</a></li>
          `).join('')}
          ${language === 'ja'
          ? '<li class="DDBJ_language"><a href="/index-e.html">English</a></li>'
          : '<li class="DDBJ_language"><a href="/index.html">Japanese</a></li>'}
        </ul>
      </nav>
    </div>
  `);
  script.insertAdjacentElement('afterend', header);

  // attach event
  const collapseButtons = document.querySelectorAll('.spcollapsemenubutton');
  for (const button of collapseButtons) {
    button.addEventListener('touchend', toggleServicesMenu);
  }
  
  function toggleServicesMenu() {
    for (const button of collapseButtons) {
      if (this !== button) button.classList.remove('-opened');
    }
    this.classList.toggle('-opened');
  }
  
})();
