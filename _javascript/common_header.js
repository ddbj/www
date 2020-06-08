(()=>{
  const script = document.getElementById('DDBJ_common_header');
  script.style.display = '';
  script.style.height = '';

  // generate header
  const header = document.createElement('header');
  header.id = 'CommonHeader';
  header.innerHTML = (`
    <div class="inner">
      <div class="logocontainer">
        <a class="logotype" href="index.html">DDBJ DNA Data Bank of Japan</a>
      </div>
      <nav class="services">
        <h1 class="title">サービス</h1>
        <div class="spcollapsemenubutton">Services</div>
        <div class="rows spcollapsemenu">
          <div class="row">
            <div class="group">
              <h2 class="grouptitle">Search</h2>
              <ul>
                <li><a title="アクセッション番号で塩基配列データを取得" href="http://getentry.ddbj.nig.ac.jp/top-j.html">getentry</a></li>
                <li><a title="キーワードで塩基配列データを検索" href="http://ddbj.nig.ac.jp/arsa/">ARSA</a></li>
                <li><a title="DDBJ/EBI/NCBI SRA のデータの検索と取得" href="http://ddbj.nig.ac.jp/DRASearch/">DRA Search</a></li>
                <li><a title="生物名を検索" href="http://ddbj.nig.ac.jp/tx_search/?lang=ja">TXSearch</a></li>
                <li><a title="塩基配列の類似性で検索" href="http://blast.ddbj.nig.ac.jp/blastn?lang=ja">BLAST</a></li>
              </ul>
            </div>
            <div class="group">
              <h2 class="grouptitle">Analysis</h2>
              <ul>
                <li><a title="ベクター配列をスクリーニング" href="http://ddbj.nig.ac.jp/vecscreen/vecscreen?lang=ja">Vector Screening System</a></li>
                <li><a title="系統樹を作成" href="http://clustalw.ddbj.nig.ac.jp/index.php?lang=ja">ClustalW</a></li>
                <li><a title="DDBJ 検索サービスの Web API" href="/search/help/wabi/wabi.html">WABI (Web API for Biology)</a></li>
                <li><a title="データを ftp でダウンロード" href="ftp://ftp.ddbj.nig.ac.jp/">DDBJ FTP Site</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="group">
              <h2 class="grouptitle">Databases</h2>
              <ul>
                <li><a title="Annotated/Assembled Sequences (DDBJ)" href="/ddbj/index.html">Annotated/Assembled Sequences (DDBJ)</a></li>
                <li><a title="Sequence Read Archive" href="/dra/index.html">Sequence Read Archive (DRA)</a></li>
                <li><a title="Genomic Expression Archive" href="/gea/index.html">Genomic Expression Archive (GEA)</a></li>
                <li><a title="BioProject" href="/bioproject/index.html">BioProject</a></li>
                <li><a title="BioSample" href="/biosample/index.html">BioSample</a></li>
                <li><a title="Japanese Genotype-phenotype Archive" href="/jga/index.html">Japanese Genotype-phenotype Archive (JGA)</a></li>
                <li><a title="Submission portal D-way" href="https://ddbj.nig.ac.jp/D-way">Submission portal D-way</a></li>
              </ul>
            </div>
            <div class="group">
              <h2 class="grouptitle">NIG SuperComputer</h2>
              <ul>
                <li><a title="NIG SuperComputer" href="https://sc.ddbj.nig.ac.jp/ja">NIG SuperComputer</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="group">
              <h2 class="grouptitle">DBCLS Services</h2>
              <ul>
                <li><a title="公共遺伝子発現データベースの目次" href="http://aoe.dbcls.jp/">AOE</a></li>
                <li><a title="入力した塩基配列に対してCRISPR/Cas9システムのガイドRNAを設計することができる" href="https://crispr.dbcls.jp/">CRISPRdirect</a></li>
                <li><a title="公共次世代シーケンスデータの統計情報と検索機能を提供するサービス" href="http://sra.dbcls.jp/">DBCLS SRA</a></li>
                <li><a title="遺伝子、疾患について特徴をキーワードでリスト表示するツール" href="http://gendoo.dbcls.jp/">Gendoo</a></li>
                <li><a title="高速ゲノム配列検索ツール" href="https://gggenome.dbcls.jp/ja/">GGGenome</a></li>
                <li><a title="高速な遺伝子検索エンジン" href="https://ggrna.dbcls.jp/ja/">GGRNA</a></li>
                <li><a title="遺伝子発現解析の基準となる各遺伝子の遺伝子発現量を簡単に検索、閲覧できるウェブツール" href="http://refex.dbcls.jp/index.php?lang=ja">RefEx</a></li>
              </ul>
            </div>
          </div>
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
