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
              en: 'アクセッション番号で塩基配列データを取得'
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
              en: 'キーワードで塩基配列データを検索'
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
              en: 'DDBJ/EBI/NCBI SRA のデータの検索と取得'
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
              en: '生物名を検索'
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
              en: '塩基配列の類似性で検索'
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
              en: 'ベクター配列をスクリーニング'
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
              en: '系統樹を作成'
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
              en: 'DDBJ 検索サービスの Web API'
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
              en: 'データを ftp でダウンロード'
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
              en: '公共遺伝子発現データベースの目次'
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
              en: '入力した塩基配列に対してCRISPR/Cas9システムのガイドRNAを設計することができる'
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
              en: '公共次世代シーケンスデータの統計情報と検索機能を提供するサービス'
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
              en: '遺伝子、疾患について特徴をキーワードでリスト表示するツール'
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
              en: '高速ゲノム配列検索ツール'
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
              en: '高速な遺伝子検索エンジン'
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
              en: '遺伝子発現解析の基準となる各遺伝子の遺伝子発現量を簡単に検索、閲覧できるウェブツール'
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
  const script = document.getElementById('DDBJ_common_header');
  let language = document.getElementsByTagName('html')[0].getAttribute('lang');
  language = language === 'ja' ? 'ja' : 'en';
  script.style.display = '';
  script.style.height = '';


  // generate header
  const header = document.createElement('header');
  header.id = 'CommonHeader';
  header.innerHTML = (`
    <div class="inner">
      <div class="logocontainer">
        <a class="logotype" href="/index.html">DDBJ DNA Data Bank of Japan</a>
      </div>
      <nav class="services">
        <h1 class="title">サービス</h1>
        <div class="spcollapsemenubutton">Services</div>
        <div class="rows spcollapsemenu">
          ${HEADER_SERVICES_ROWS.map(row => {
            return `<div class="row">${row.map(group => {
              return `
              <div class="group">
                <h2 class="grouptitle">${group.groupLabel}</h2>
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
      <nav class="navigation">
        <div class="spcollapsemenubutton">Menu</div>
        <ul class="spcollapsemenu">
          <li><a href="https://ddbj.nig.ac.jp/D-way">ログインとサブミット</a></li>
          <li><a href="/policies.html">個人情報の取り扱いと免責事項</a></li>
          <li class="contact-form"><a href="/contact.html">コンタクト</a></li>
          <li class="language"><a href="/index-e.html">English</a></li>
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
