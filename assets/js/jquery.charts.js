/* global $, google */
/*
 * 統計表示用 jQuery
 */
var pathname = window.location.pathname;
var filepath = pathname.replace("-e.html", "").replace(".html", "");

// 統計種別名と Google sheet position リスト
var sheet_position_h = {
  // ウェブアクセス
  'page-access':'1',
  'web-access':'2',   
  // 登録
  'dra-submission':'3',
  'jga-submission':'4',
  'ddbj-submission':'5',    
  // 公開
  'dra-release':'6',
  'jga-release':'7',
  // DDBJ リリース
  'ddbj-release':'8', 
  'ddbj-release-proportion':'9', 
  'ddbj-category':'10',   
  'archive-proportion-category':'11',
  'organism-archive':'12',  
  'organism-ranking':'13',
  'journal-ranking':'14', 
  'relinfo':'15',
  'gea-submission':'16',
  'gea-release':'17'
};

// 配列要素の合計値を求める
// http://phiary.me/javascript-array-sum-average-median/
var sum = function(arr) {  
    return arr.reduce(function(prev, current, i, arr) {
        return prev + current;
    });
};

// 平均値を求める
var average = function(arr, fn) {  
    return sum(arr, fn)/arr.length;
};

// Google sheet ID 対応表

// ウェブサービスアクセス
if ( filepath=="/stats/web-access" ){

  $(function(){

    var now = new Date();
    var this_year = now.getFullYear();
    var span = 4; // 直近10年を表示

      // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
      $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['web-access'] + "/public/values?alt=json", function(data) {

        var web_access = data.feed.entry;
        var unique_users_per_year = {};
        var average_unique_users_per_year = {};
        var getentry_per_year_h = {};
        var arsa_per_year_h = {};
        var drasearch_per_year_h = {};
        var txsearch_per_year_h = {};
        var blast_per_year_h = {};
        var clustalw_per_year_h = {};
        var homepage_per_year_h = {};
        var all_per_year_h = {};
        var ave_ftp_download_day_h = {};

        var average_getentry_per_year_h = {};
        var average_arsa_per_year_h = {};
        var average_drasearch_per_year_h = {};
        var average_txsearch_per_year_h = {};
        var average_blast_per_year_h = {};
        var average_clustalw_per_year_h = {};
        var average_homepage_per_year_h = {};
        var average_all_per_year_h = {};

        for(var y = this_year-span; y < this_year; y++) {
          
          getentry_per_year_h[y] = [];
          arsa_per_year_h[y] = [];
          drasearch_per_year_h[y] = [];
          txsearch_per_year_h[y] = [];
          blast_per_year_h[y] = [];
          clustalw_per_year_h[y] = [];
          homepage_per_year_h[y] = [];
          all_per_year_h[y] = [];
          //ave_ftp_download_day_h[y] = [];
        
          for(var i = 0; i < web_access.length; i++) {
           
            var year_month = web_access[i].gsx$yearmonth.$t;
            var getentry_per_month = parseInt(web_access[i].gsx$getentry.$t, 10);
            var arsa_per_month = parseInt(web_access[i].gsx$arsa.$t, 10);
            var drasearch_per_month = parseInt(web_access[i].gsx$drasearch.$t, 10);
            var txsearch_per_month = parseInt(web_access[i].gsx$txsearch.$t, 10);
            var blast_per_month = parseInt(web_access[i].gsx$blast.$t, 10);
            var clustalw_per_month = parseInt(web_access[i].gsx$clustalw.$t, 10);
            var homepage_per_month = parseInt(web_access[i].gsx$homepage.$t, 10);
            var all_per_month = parseInt(web_access[i].gsx$all.$t, 10);
            //var ave_ftp_download_day = parseFloat(web_access[i].gsx$averageftpdownloadtbday.$t, 10);

            // 年毎に配列に格納
            if( parseInt(year_month.substring(0, 4), 10) == y ){
              
              //ログ欠落期間の 2018-02, 03, 04 を除外
              if( year_month == "2018-02" || year_month == "2018-03" || year_month == "2018-04" ){

              } else {
                getentry_per_year_h[y].push(getentry_per_month);
                arsa_per_year_h[y].push(arsa_per_month);
                drasearch_per_year_h[y].push(drasearch_per_month);
                txsearch_per_year_h[y].push(txsearch_per_month);
                blast_per_year_h[y].push(blast_per_month);
                clustalw_per_year_h[y].push(clustalw_per_month);
                homepage_per_year_h[y].push(homepage_per_month);
                all_per_year_h[y].push(all_per_month);
                //ave_ftp_download_day_h[y].push(ave_ftp_download_day);
              }              
            }
            
            } // for(var i = 0; i < web_access.length; i++) {
                        
                average_getentry_per_year_h[y] = Math.floor(average(getentry_per_year_h[y]));
                average_arsa_per_year_h[y] = Math.floor(average(arsa_per_year_h[y]));
                average_drasearch_per_year_h[y] = Math.floor(average(drasearch_per_year_h[y]));
                average_txsearch_per_year_h[y] = Math.floor(average(txsearch_per_year_h[y]));
                average_blast_per_year_h[y] = Math.floor(average(blast_per_year_h[y]));
                average_clustalw_per_year_h[y] = Math.floor(average(clustalw_per_year_h[y]));
                average_homepage_per_year_h[y] = Math.floor(average(homepage_per_year_h[y]));
                average_all_per_year_h[y] = Math.floor(average(all_per_year_h[y]));
                //average_ave_ftp_download_day_h[y] = Math.floor(average(ave_ftp_download_day_h[y]));

          } // for(var y = 2004; y < this_year; y++) {

          // グラフ描画          
          google.charts.load('current', {'packages':['corechart', 'table']});

          // html 要素組み立て
          var chart_year = [];
          var html_tables = "";
          html_tables += '<h2 id="total">By year (' + (this_year-span) + '-' + (this_year-1) + ')</h2>' + '<div id="chart_total"></div><div id="table_total"></div>';
          html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1599631737">Source data</a></p>';
          
          $("#stat_area").append(html_tables);

          for(var y = this_year-span; y < this_year; y++) {
            chart_year.push([y.toString(), average_getentry_per_year_h[y], average_arsa_per_year_h[y], average_drasearch_per_year_h[y], average_txsearch_per_year_h[y], average_blast_per_year_h[y], average_clustalw_per_year_h[y], average_homepage_per_year_h[y], average_all_per_year_h[y]]);
          }
          
          google.charts.setOnLoadCallback(drawWebAccess);
          google.charts.setOnLoadCallback(drawWebAccessTable);
      
      function drawWebAccess(){

          var title = 'Average unique users/month';

          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Year');
          data.addColumn('number', 'getentry');
          data.addColumn('number', 'ARSA');
          data.addColumn('number', 'DRA Search');
          data.addColumn('number', 'TXSearch');
          data.addColumn('number', 'BLAST');
          data.addColumn('number', 'ClustalW');
          data.addColumn('number', 'Home pages');
          data.addColumn('number', 'All');

          data.addRows(chart_year);

          var options = {
            title: 'Average unique users/month', 
            width: 700,      
            height: 500,
            titleTextStyle:{fontSize:15},
            legend: {position: 'right', textStyle: {fontSize: 12}},
            hAxis:{
              textStyle: {fontSize:12}
            },
            vAxis:{
                textStyle: {fontSize:12}
            },
            chartArea:{left:100, height:'80%'},
            titlePosition:'out'
          };
          
          var webaccess = new google.visualization.LineChart(document.getElementById('chart_total'));
          webaccess.draw(data, options);

      } // function drawPageAccess()

          function drawWebAccessTable(){
            
              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'getentry');
              data.addColumn('number', 'ARSA');
              data.addColumn('number', 'DRA Search');
              data.addColumn('number', 'TXSearch');
              data.addColumn('number', 'BLAST');
              data.addColumn('number', 'ClustalW');
              data.addColumn('number', 'Home pages');
              data.addColumn('number', 'All');              
              data.addRows(chart_year);

              var webaccesst = new google.visualization.Table(document.getElementById('table_total'));
              webaccesst.draw(data);

          } // function drawSubmissionNumberTable

      })  // $.getJSON 

    })  // function

} // ページアクセス


// WGS リリースデータ (DDBJ 登録分)
if ( filepath=="/stats/wgs-release"){

  $(function(){

    google.charts.load('current', {'packages':['corechart', 'table']});

    var month_list = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var now = new Date();
    var this_year = now.getFullYear();
    var span = 6; // 年毎は直近6年を表示
    var span_month = 3; // 月毎は直近3年を表示
    var chart_year_a = [];    
    var html_tables = "";

      // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
      $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['wgs-release'] + "/public/values?alt=json", function(data) {

        var wgs_release = data.feed.entry;
        var wgs_release_h = {};
        var wgs_release_month_h = {};

        html_tables += '<h2 id="total">By year (' + (this_year-span) + '-' + this_year + ')</h2>' + '<div id="chart_total"></div><div id="table_total"></div>';
        html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=2022454675">Source data</a></p>';

        // 今年の途中も表示
        for(var y = this_year-span; y <= this_year; y++) {

          var projects_year = 0;
          var sequences_year = 0;      
          var month_h = {};
          var chart_month_a = [];
          var year = y.toString();

         // 月でループ 
           for (var m = 0; m < month_list.length; m++) {  

            month = month_list[m].toString();
            var year_month_found = false;

              for(var i = 0; i < wgs_release.length; i++) {
                var year_month = wgs_release[i].gsx$yearmonth.$t;
                var projects = parseInt(wgs_release[i].gsx$projects.$t, 10);
                var sequences = parseInt(wgs_release[i].gsx$sequences.$t, 10);

                // 年月毎に配列に格納
                if( parseInt(year_month.substring(0, 4), 10) == y && year_month.substring(5) == month ){
                    month_h[month] = {"projects":projects, "sequences":sequences};                    
                    projects_year += projects;
                    sequences_year += sequences;

                    if( parseInt(year_month.substring(0, 4), 10) == y && year_month.substring(5) == month ){
                      chart_month_a.push([month.replace(/^0/, ""), projects, sequences]);
                      year_month_found = true;
                    }

                } // if( parseInt(year_month.substring(0, 4), 10) == y && year_month.substring(5) == month )
              } // for(var i = 0; i < dra_submission.length; i++)

              // 今年の将来で該当する値が無かった場合
              if(!year_month_found){
                chart_month_a.push([month.replace(/^0/, ""), null, null]);
              }
           } //for (var m = 0; m < month_list.length; m++)

           chart_year_a.push([year, projects_year, sequences_year]);
           wgs_release_h[year] = month_h;

           // 直近三年だけ
           if( y > this_year - span_month ){
             wgs_release_month_h[year] = chart_month_a;
             
           }            
        } //for(var y = this_year-span; y <= this_year; y++)

        // 月間グラフは逆順に並べる
        for(var y = this_year; y > (this_year - span_month); y--) {          
          year = y.toString();
          html_tables += '<h2 id=\"' + year + '\">' + year + ' (By month)</h2>' + '<div id="' + ("chart_wgs_" + year) + '"></div><div id="' + ("table_wgs_" + year) + '"></div>';
        }

        /* グラフ作成 */
        $("#stat_area_wgs").append(html_tables);

          google.charts.setOnLoadCallback(drawWGSRelease);
          google.charts.setOnLoadCallback(drawWGSReleaseTable);

          function drawWGSRelease(){

              var title = 'Release';

              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'WGS projects');
              data.addColumn('number', 'WGS sequences');

              data.addRows(chart_year_a);

              var options = {
                title: 'WGS data released by DDBJ', 
                width: 600,      
                height:400,
                seriesType: 'bars',
                legend:{position:'top', textStyle: {fontSize: 12}},         
                series: {
                  0:{color:'#00CCFF', targetAxisIndex: 0},
                  1:{color:'#953735', targetAxisIndex: 1}
                },
                hAxis:{
                  title: 'Year',
                  textStyle: {fontSize:11}
                },
                vAxes: {
                  0: {
                    title: 'WGS projects',
                    textStyle: {fontSize:11}
                    //gridlines: {count:6}
                  },
                  1: {   
                    title: 'WGS sequences',
                    color:'#ff0000'
                    //gridlines: {count:6}
                  }
                },
                titlePosition:'out'
              };
              
              var wgsrelyear = new google.visualization.ColumnChart(document.getElementById('chart_total'));
              wgsrelyear.draw(data, options);
          
          } // function drawWGSRelease

          function drawWGSReleaseTable(){
            
              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'WGS projects');
              data.addColumn('number', 'WGS sequences');
              data.addRows(chart_year_a);

              var wgsrelyeartable = new google.visualization.Table(document.getElementById('table_total'));
              wgsrelyeartable.draw(data);

          } // function drawWGSReleaseTable

      /* 月毎 */
      google.charts.setOnLoadCallback(drawWGSReleaseMonth);
      google.charts.setOnLoadCallback(drawWGSReleaseMonthTable);

      function drawWGSReleaseMonth(){

        for(var y = this_year - span_month + 1; y <= this_year; y++) {
        
            year = y.toString();
        
            var chart_id = "chart_wgs_" + year;
            var title = 'WGS data released by DDBJ in ' + year;

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Month');
            data.addColumn('number', 'WGS projects');
            data.addColumn('number', 'WGS sequences');
            data.addRows(wgs_release_month_h[year]);            

            var options = {
              title: title, 
              width: 600,      
              height:400,
              seriesType: 'bars',
              legend:{position:'top', textStyle: {fontSize: 12}},         
              series: {
                0:{color:'#00CCFF', targetAxisIndex: 0},
                1:{color:'#953735', targetAxisIndex: 1}
              },
              hAxis:{
                title: 'Month',
                textStyle: {fontSize:11}
              },
              vAxes: {
                0: {
                  title: 'WGS projects',
                  textStyle: {fontSize:11}
                  //gridlines: {count:6}
                },
                1: {   
                  title: 'WGS sequences',
                  color:'#ff0000'
                  //gridlines: {count:6}
                }
              },
              titlePosition:'out'
            };
            
            var wgsrelmonth = new google.visualization.ColumnChart(document.getElementById(chart_id));
            wgsrelmonth.draw(data, options);
        
        } // for(var y = this_year - span_month; y <= this_year; y++)

      } // function drawWGSReleaseMonth

      function drawWGSReleaseMonthTable(){

        for(var y = this_year - span_month + 1; y <= this_year; y++) {
          
            year = y.toString();
            var table_id = "table_wgs_" + year;
          
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Month');
            data.addColumn('number', 'WGS projects');
            data.addColumn('number', 'WGS sequences');          
            data.addRows(wgs_release_month_h[year]);            

            var wgsrelmonthtable = new google.visualization.Table(document.getElementById(table_id));
            wgsrelmonthtable.draw(data);

        } // for (var i = 0; i < target_years.length; i++)

      } // function drawWGSReleaseMonthTable

    })  // $.getJSON 

  })  // function

} // WGS リリースデータ (DDBJ 登録分)


// 小数点n位までを残す関数
// number=対象の数値
// n=残したい小数点以下の桁数
// https://hacknote.jp/archives/27166/
function roundFloat( number, n ) {
  var _pow = Math.pow( 10 , n );
  return Math.round( number * _pow ) / _pow;
}

// DRA への登録数、年単位、前年まで
if ( filepath=="/stats/dra-submission"){

  $(function(){

    google.charts.load('current', {'packages':['corechart', 'table']});

    var now = new Date();
    var this_year = now.getFullYear();
    var year_min = 0;
    var year_max = 0;
    var x = 0;
    var span = 5; // 前年から5年間を表示
    var chart_year_a = [];    
    var html_tables = "";

      // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
      $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['dra-submission'] + "/public/values?alt=json", function(data) {

        var dra_submission = data.feed.entry;
      
        for(var i = 0; i < dra_submission.length; i++) {

          var y = parseInt(dra_submission[i].gsx$year.$t.substring(0, 4), 10);

          if( y >= (this_year-1-span) ){
            chart_year_a.push([dra_submission[i].gsx$year.$t, parseInt(dra_submission[i].gsx$submissions.$t, 10), roundFloat(parseInt(dra_submission[i].gsx$bytes.$t, 10)/10**12, 2)]);
            if (x==0) year_min = y;
            year_max = y;
            x++;
          } // for(var i = 0; i < dra_submission.length; i++)
        
        } // for(var y = year_max-span; y <= year_max; y++)

        html_tables += '<h2 id="total">By year (' + year_min + '-' + year_max + ')</h2>' + '<div id="chart_total"></div><div id="table_total"></div>';
        html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=781521653">Source data</a></p>';

          /* グラフ作成 */
          $("#stat_area").append(html_tables);

          google.charts.setOnLoadCallback(drawTotalDRASubmission);
          google.charts.setOnLoadCallback(drawTotalDRASubmissionTable);

          function drawTotalDRASubmission(){

              var title = 'Submission';

              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Submissions');
              data.addColumn('number', 'SRA filesize (TB)');

              data.addRows(chart_year_a);

              var options = {
                title: 'Submissions to DRA (By year)', 
                width: 600,      
                height:400,
                seriesType: 'bars',
                legend:{position:'top', textStyle: {fontSize: 12}},         
                series: {
                  0:{color:'#00CCFF', targetAxisIndex: 0},
                  1:{color:'#953735', targetAxisIndex: 1}
                },
                hAxis:{
                  title: 'Year',
                  textStyle: {fontSize:11}
                },
                vAxes: {
                  0: {
                    title: 'Submissions',
                    textStyle: {fontSize:11}
                  },
                  1: {   
                    title: 'SRA filesize (TB)',
                    color:'#ff0000'
                  }
                },
                titlePosition:'out'
              };
              
              var drasubyear = new google.visualization.ColumnChart(document.getElementById('chart_total'));
              drasubyear.draw(data, options);
          
          } // function drawTotalDRASubmission()

          function drawTotalDRASubmissionTable(){
            
              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Submissions');
              data.addColumn('number', 'SRA filesize (TB)');
              data.addRows(chart_year_a);

              var drasubyeartable = new google.visualization.Table(document.getElementById('table_total'));
              drasubyeartable.draw(data);

          } // function drawSubmissionNumberTable
          
      })  // $.getJSON 

    })  // function

} // DRA への登録数

// JGA への登録数、年単位、前年まで
if ( filepath=="/stats/jga-submission"){

  $(function(){

    google.charts.load('current', {'packages':['corechart', 'table']});

    var now = new Date();
    var this_year = now.getFullYear();
    var year_min = 0;
    var year_max = 0;
    var x = 0;
    var span = 5; // 前年から5年間を表示
    var chart_year_a = [];    
    var html_tables = "";

      // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
      $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['jga-submission'] + "/public/values?alt=json", function(data) {

        var jga_submission = data.feed.entry;
      
        for(var i = 0; i < jga_submission.length; i++) {

          var y = parseInt(jga_submission[i].gsx$year.$t.substring(0, 4), 10);

          if( y >= (this_year-1-span) ){
            chart_year_a.push([jga_submission[i].gsx$year.$t, parseInt(jga_submission[i].gsx$submissions.$t, 10), roundFloat(parseInt(jga_submission[i].gsx$bytes.$t, 10)/10**12, 2)]);
            if (x==0) year_min = y;
            year_max = y;
            x++;
          } // for(var i = 0; i < jga_submission.length; i++)
        
        } // for(var y = year_max-span; y <= year_max; y++)

        html_tables += '<h2 id="total">By year (' + year_min + '-' + year_max + ')</h2>' + '<div id="chart_total"></div><div id="table_total"></div>';
        html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1225854857">Source data</a></p>';

          /* グラフ作成 */
          $("#stat_area").append(html_tables);

          google.charts.setOnLoadCallback(drawTotalJGASubmission);
          google.charts.setOnLoadCallback(drawTotalJGASubmissionTable);

          function drawTotalJGASubmission(){

              var title = 'Submission';

              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Submissions');
              data.addColumn('number', 'Filesize (TB)');

              data.addRows(chart_year_a);

              var options = {
                title: 'Submissions to JGA (By year)', 
                width: 600,      
                height:400,
                seriesType: 'bars',
                legend:{position:'top', textStyle: {fontSize: 12}},         
                series: {
                  0:{color:'#00CCFF', targetAxisIndex: 0},
                  1:{color:'#953735', targetAxisIndex: 1}
                },
                hAxis:{
                  title: 'Year',
                  textStyle: {fontSize:11}
                },
                vAxes: {
                  0: {
                    title: 'Submissions',
                    textStyle: {fontSize:11}
                  },
                  1: {   
                    title: 'Filesize (TB)',
                    color:'#ff0000'
                  }
                },
                titlePosition:'out'
              };
              
              var jgasubyear = new google.visualization.ColumnChart(document.getElementById('chart_total'));
              jgasubyear.draw(data, options);
          
          } // function drawTotalJGASubmission()

          function drawTotalJGASubmissionTable(){
            
              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Submissions');
              data.addColumn('number', 'Filesize (TB)');
              data.addRows(chart_year_a);

              var jgasubyeartable = new google.visualization.Table(document.getElementById('table_total'));
              jgasubyeartable.draw(data);

          } // function drawTotalJGASubmissionTable()
          
      })  // $.getJSON 

    })  // function

} // JGA への登録数

// ページアクセス
if ( filepath=="/stats/page-access" ){

  $(function(){

    var now = new Date();
    var this_year = now.getFullYear();
    var span = 10; // 直近10年を表示

      // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
      $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['page-access'] + "/public/values?alt=json", function(data) {

        var page_access = data.feed.entry;
        var unique_users_per_year = {};
        var average_unique_users_per_year = {};

        for(var y = this_year-span; y < this_year; y++) {
          
          unique_users_per_year[y] = [];
          
          for(var i = 0; i < page_access.length; i++) {
           
            var year_month = page_access[i].gsx$yearmonth.$t;
            var uniqueusersmonth = parseInt(page_access[i].gsx$uniqueusersmonth.$t, 10);

            // 年毎に配列に格納
            if( parseInt(year_month.substring(0, 4), 10) == y ){
              
              //ログ欠落期間の 2018-02, 03, 04 を除外
              if( year_month == "2018-02" || year_month == "2018-03" || year_month == "2018-04" ){

              } else {
                unique_users_per_year[y].push(uniqueusersmonth);
              }              
            }
            
            } // for(var i = 0; i < page_access.length; i++) {
                        
            average_unique_users_per_year[y] = Math.floor(average(unique_users_per_year[y]));

          } // for(var y = 2004; y < this_year; y++) {

          // グラフ描画          
          google.charts.load('current', {'packages':['corechart', 'table']});

          // html 要素組み立て
          var chart_year = [];
          var html_tables = "";
          html_tables += '<h2 id="total">By year (' + (this_year-span) + '-' + (this_year-1) + ')</h2>' + '<div id="chart_total"></div><div id="table_total"></div>';
          html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0">Source data</a></p>';
          $("#stat_area").append(html_tables);

          for(var y = this_year-span; y < this_year; y++) {
            chart_year.push([y.toString(), average_unique_users_per_year[y]]);
          }
          
          google.charts.setOnLoadCallback(drawPageAccess);
          google.charts.setOnLoadCallback(drawPageAccessTable);
      
      function drawPageAccess(){

          var title = 'Average unique users/month';

          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Year');
          data.addColumn('number', 'Average unique users/month');

          data.addRows(chart_year);

          var options = {
            title: 'Average unique users/month', 
            width: 700,      
            height:400,
            legend:{position:'none'},         
            hAxis:{
              textStyle: {fontSize:11}
            },
            vAxis:{
                textStyle: {fontSize:11}
            },
            titlePosition:'out'
          };
          
          var drasuby = new google.visualization.LineChart(document.getElementById('chart_total'));
          drasuby.draw(data, options);

      } // function drawPageAccess()

          function drawPageAccessTable(){
            
              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Average unique users/month');
              data.addRows(chart_year);

              var drat = new google.visualization.Table(document.getElementById('table_total'));
              drat.draw(data);

          } // function drawSubmissionNumberTable

      })  // $.getJSON 

    })  // function

} // ページアクセス

// GEA への登録数、年単位、前年まで
if ( filepath=="/stats/gea-submission"){

  $(function(){

    google.charts.load('current', {'packages':['corechart', 'table']});

    var now = new Date();
    var this_year = now.getFullYear();
    var year_min = 0;
    var year_max = 0;
    var x = 0;
    var span = 5; // 前年から5年間を表示
    var chart_year_a = [];    
    var html_tables = "";

      // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
      $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['gea-submission'] + "/public/values?alt=json", function(data) {

        var gea_submission = data.feed.entry;
      
        for(var i = 0; i < gea_submission.length; i++) {

          var y = parseInt(gea_submission[i].gsx$year.$t.substring(0, 4), 10);

          if( y >= (this_year-1-span) ){
            chart_year_a.push([gea_submission[i].gsx$year.$t, parseInt(gea_submission[i].gsx$submissions.$t, 10), parseInt(gea_submission[i].gsx$samples.$t, 10)]);
            if (x==0) year_min = y;
            year_max = y;
            x++;
          } // for(var i = 0; i < gea_submission.length; i++)
        
        } // for(var y = year_max-span; y <= year_max; y++)

        html_tables += '<h2 id="total">By year (' + year_min + '-' + year_max + ')</h2>' + '<div id="chart_total"></div><div id="table_total"></div>';
        html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=968235888">Source data</a></p>';

          /* グラフ作成 */
          $("#stat_area").append(html_tables);

          google.charts.setOnLoadCallback(drawTotalGEASubmission);
          google.charts.setOnLoadCallback(drawTotalGEASubmissionTable);

          function drawTotalGEASubmission(){

              var title = 'Submission';

              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Submissions');
              data.addColumn('number', 'Samples');

              data.addRows(chart_year_a);

              var options = {
                title: 'Submissions to GEA (By year)', 
                width: 600,      
                height:400,
                seriesType: 'bars',
                legend:{position:'top', textStyle: {fontSize: 12}},         
                series: {
                  0:{color:'#00CCFF', targetAxisIndex: 0},
                  1:{color:'#953735', targetAxisIndex: 1}
                },
                hAxis:{
                  title: 'Year',
                  textStyle: {fontSize:11}
                },
                vAxes: {
                  0: {
                    title: 'Submissions',
                    textStyle: {fontSize:11}
                  },
                  1: {   
                    title: 'Samples',
                    color:'#ff0000'
                  }
                },
                titlePosition:'out'
              };
              
              var geasubyear = new google.visualization.ColumnChart(document.getElementById('chart_total'));
              geasubyear.draw(data, options);
          
          } // function drawTotalGEASubmission

          function drawTotalGEASubmissionTable(){
            
              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Year');
              data.addColumn('number', 'Submissions');
              data.addColumn('number', 'Samples');
              data.addRows(chart_year_a);

              var geasubyeartable = new google.visualization.Table(document.getElementById('table_total'));
              geasubyeartable.draw(data);

          } // function drawTotalGEASubmissionTable
          
      })  // $.getJSON 

    })  // function

} // GEA への登録数





$(function(){
  console.log( 'filepath:', filepath )
  makeDDBJRelease();
  makeDRARelease();
  makeGEARelease();
  makeJGARelease();
  makeSubmission();
});

// DDBJ リリース統計
function makeDDBJRelease() {

  // DDBJ リリース総データ量推移
  var release_new = 107; // release 107 から bulk sequence が含まれている
    
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.goosgle.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['ddbj-release'] + "/public/values?alt=json", function(data) {

    var ddbj_release = data.feed.entry;
    var chart_a = [];
    var chart_table_a = [];
    
    for(var i = release_new - 1; i < ddbj_release.length; i++) {
      
      var year_month = ddbj_release[i].gsx$yearmonth.$t;
      var release_no = ddbj_release[i].gsx$release.$t;
      var bases = parseInt(ddbj_release[i].gsx$bases.$t, 10);
      var sequences = parseInt(ddbj_release[i].gsx$sequences.$t, 10);
      var comments = ddbj_release[i].gsx$comments.$t;

      // リリース毎に配列に格納
      chart_a.push([release_no + " (" + year_month + ")", roundFloat(sequences/10**6, 2), roundFloat(bases/10**9, 2)]);                          
      chart_table_a.push([release_no, year_month, sequences, bases, comments]);
      
    } // for(var i = 0; i < ddbj_release.length; i++)

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(DDBJReleaseGrowth);
    google.charts.setOnLoadCallback(DDBJReleaseGrowthTable);

    function DDBJReleaseGrowth(){

      var title = 'DDBJ/ENA/GenBank database growth';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Release No.');
      data.addColumn('number', 'Sequences');
      data.addColumn('number', 'Bases');
      data.addRows(chart_a);

      var options = {
        title: title,
        width: 600,
        height: 500,
        titleTextStyle: {fontSize:15},
        legend:{position:'top', textStyle: {fontSize: 12}},
        series: {            
          0:{color:'#5b84d6', targetAxisIndex: 0, type:'line'},
          1:{color:'#ff0000', targetAxisIndex: 1, type:'line'}
        },
        hAxis:{
          title: 'Release',
          textStyle: {fontSize:12},
          slantedText:true, 
          slantedTextAngle:90
        },
        vAxes: {
          0: {   
            title: 'Sequences (million)',
            color:'#ff0000',
            textStyle: {fontSize:12},
            viewWindow: {min:500, max:2500},
            gridlines: {count:5}
          },
          1: {
            title: 'Bases (billion)',
            textStyle: {fontSize:12},
            viewWindow: {min:2000, max:7000},
            gridlines: {count:6}
          }
        },
        chartArea:{top:60},
        titlePosition:'out'
      };

      var ddbjrelease = new google.visualization.ColumnChart(document.getElementById('ddbj-release-growth-chart'));          
      ddbjrelease.draw(data, options);

    } // function DDBJReleaseGrowth()

    function DDBJReleaseGrowthTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Release');
      data.addColumn('string', 'Date');
      data.addColumn('number', 'Sequences');
      data.addColumn('number', 'Bases');
      data.addColumn('string', 'Comments');

      data.addRows(chart_table_a);
      data.setProperty(0, 4, 'style', 'width:40%');

      var options = {
        allowHtml: true
      }

      var ddbjreleaset = new google.visualization.Table(document.getElementById('ddbj-release-growth-table'));
      ddbjreleaset.draw(data, options);

    } // function drawTotalDRAReleaseTable()

    updateSectionLocation();

  })  // $.getJSON 

  // DDBJ リリース配列数、塩基数各バンクの割合
  release_new = 107; // release 107 から bulk sequence が含まれている
  var chart_seq_a = [];
  var chart_base_a = [];
  var chart_seq_table_a = [];
  var chart_base_table_a = [];
    
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['ddbj-release-proportion'] + "/public/values?alt=json", function(data) {

    var ddbj_release = data.feed.entry;
          
    // release 10 からなので 9 をさらに引いている
    for(var i = release_new - 1 - 9; i < ddbj_release.length; i++) {
      
      var release_no = ddbj_release[i].gsx$release.$t;
      var year_month = ddbj_release[i].gsx$yearmonth.$t;              
      var ddbjsequences = parseInt(ddbj_release[i].gsx$ddbjsequences.$t, 10);
      var jposequences = parseInt(ddbj_release[i].gsx$jposequences.$t, 10);
      var kiposequences = parseInt(ddbj_release[i].gsx$kiposequences.$t, 10);
      var ddbjsubtotalsequences = ddbjsequences + jposequences + kiposequences;
      
      var enasequences = parseInt(ddbj_release[i].gsx$enasequences.$t, 10);
      var eposequences = parseInt(ddbj_release[i].gsx$eposequences.$t, 10);
      var enasubtotalsequences = enasequences + eposequences;
      
      var genbanksequences = parseInt(ddbj_release[i].gsx$genbanksequences.$t, 10);
      var usptosequences = parseInt(ddbj_release[i].gsx$usptosequences.$t, 10);
      var genbanksubtotalsequences = genbanksequences + usptosequences;
      
      var totalsequences = parseInt(ddbj_release[i].gsx$totalsequences.$t, 10);

      var ddbjbases = parseInt(ddbj_release[i].gsx$ddbjbases.$t, 10);
      var jpobases = parseInt(ddbj_release[i].gsx$jpobases.$t, 10);
      var kipobases = parseInt(ddbj_release[i].gsx$kipobases.$t, 10);
      var ddbjsubtotalbases = ddbjbases + jpobases + kipobases;

      var enabases = parseInt(ddbj_release[i].gsx$enabases.$t, 10);
      var epobases = parseInt(ddbj_release[i].gsx$epobases.$t, 10);
      var enasubtotalbases = enabases + epobases;

      var genbankbases = parseInt(ddbj_release[i].gsx$genbankbases.$t, 10);
      var usptobases = parseInt(ddbj_release[i].gsx$usptobases.$t, 10);
      var genbanksubtotalbases = genbankbases + usptobases;

      var totalbases = parseInt(ddbj_release[i].gsx$totalbases.$t, 10);

      // リリース毎に配列に格納                            
      chart_seq_a.push([release_no + " (" + year_month + ")", roundFloat(genbanksubtotalsequences/10**6, 2), roundFloat(enasubtotalsequences/10**6, 2), roundFloat(ddbjsubtotalsequences/10**6, 2)]);
      chart_seq_table_a.push([release_no + " (" + year_month + ")", ddbjsubtotalsequences, enasubtotalsequences, genbanksubtotalsequences, totalsequences]);

      chart_base_a.push([release_no + " (" + year_month + ")", roundFloat(genbanksubtotalbases/10**9, 2), roundFloat(enasubtotalbases/10**9, 2), roundFloat(ddbjsubtotalbases/10**9, 2)]);
      chart_base_table_a.push([release_no + " (" + year_month + ")", ddbjsubtotalbases, enasubtotalbases, genbanksubtotalbases, totalbases]);

    } // for(var i = 0; i < ddbj_release.length; i++)

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(DDBJReleasePropSeq);
    google.charts.setOnLoadCallback(DDBJReleasePropSeqTable);

    google.charts.setOnLoadCallback(DDBJReleasePropBase);
    google.charts.setOnLoadCallback(DDBJReleasePropBaseTable);

    function DDBJReleasePropSeq(){

      var title = 'Proportion of each archive in total data volume (Sequences)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Release');          
      data.addColumn('number', 'GenBank');
      data.addColumn('number', 'ENA');
      data.addColumn('number', 'DDBJ');          
      data.addRows(chart_seq_a);

      var options = {
        title: title, 
        width:700,
        height:500,
        titleTextStyle: {fontSize:15},
        legend:{position: 'top',  textStyle: {fontSize:12}},
        hAxis: {title: 'Release', slantedText:true, slantedTextAngle:90, textStyle: {fontSize:12}},
        isStacked: true,
        colors: ['#528cde',  '#5fb4a0',  '#ff8a29'],
        chartArea:{top:60},
        vAxis: {title: 'Sequences (million)', textStyle: {fontSize:12}}
      };

      var charpropseq = new google.visualization.ColumnChart(document.getElementById('ddbj-release-prop-seq-chart')); 
      charpropseq.draw(data, options);
    
    } // function DDBJReleasePropSeq()

    function DDBJReleasePropSeqTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Release');          
      data.addColumn('number', 'DDBJ');
      data.addColumn('number', 'ENA');
      data.addColumn('number', 'GenBank');
      data.addColumn('number', 'Total');
      data.addRows(chart_seq_table_a);

      var charpropseqtable = new google.visualization.Table(document.getElementById('ddbj-release-prop-seq-table'));
      charpropseqtable.draw(data);

    } // function DDBJReleasePropSeqTable

    function DDBJReleasePropBase(){

      var title = 'Proportion of each archive in total data volume (Bases)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Release');          
      data.addColumn('number', 'GenBank');
      data.addColumn('number', 'ENA');
      data.addColumn('number', 'DDBJ');
      data.addRows(chart_base_a);

      var options = {
        title: title, 
        width:700,
        height:500,
        titleTextStyle: {fontSize:15},
        legend:{position: 'top',  textStyle: {fontSize:12}},
        hAxis: {title: 'Release', slantedText:true, slantedTextAngle:90, textStyle: {fontSize:12}},
        isStacked: true,
        colors: ['#528cde',  '#5fb4a0',  '#ff8a29'],
        chartArea:{top:60},
        vAxis: {title: 'Bases (billion)', textStyle: {fontSize:12}}
      };

      var charpropbase = new google.visualization.ColumnChart(document.getElementById('ddbj-release-prop-base-chart')); 
      charpropbase.draw(data, options);
    
    } // function DDBJReleasePropBase

    function DDBJReleasePropBaseTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Release');
      data.addColumn('number', 'DDBJ');
      data.addColumn('number', 'ENA');
      data.addColumn('number', 'GenBank');
      data.addColumn('number', 'Total');
      data.addRows(chart_base_table_a);

      var charpropbasetable = new google.visualization.Table(document.getElementById('ddbj-release-prop-base-table'));
      charpropbasetable.draw(data);

    } // function DDBJReleasePropBaseTable

    updateSectionLocation();

  })  // $.getJSON 

  // DDBJ 最新リリースにおけるアーカイブ毎の data category の割合
  var chart_ddbj_cat_seq_a = ['DDBJ'];    
  var chart_ena_cat_seq_a = ['ENA'];    
  var chart_genbank_cat_seq_a = ['GenBank'];    
  var table_cat_seq_a = [];
  var chart_ddbj_cat_base_a = ['DDBJ'];    
  var chart_ena_cat_base_a = ['ENA'];    
  var chart_genbank_cat_base_a = ['GenBank'];    
  var table_cat_base_a = [];
    
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['ddbj-category'] + "/public/values?alt=json", function(data) {

    var ddbj_cat = data.feed.entry;      
    var release_no = ddbj_cat[0].gsx$release.$t;

    // Category から Total まで
    for(var i = 0; i < ddbj_cat.length; i++) {

      // グラフからは Total を除く
      if (i < ddbj_cat.length - 1){
        chart_ddbj_cat_seq_a.push(parseFloat(ddbj_cat[i].gsx$ddbjsequencesproportion.$t, 10));    
        chart_ena_cat_seq_a.push(parseFloat(ddbj_cat[i].gsx$enasequencesproportion.$t, 10));    
        chart_genbank_cat_seq_a.push(parseFloat(ddbj_cat[i].gsx$genbanksequencesproportion.$t, 10));    
        
        chart_ddbj_cat_base_a.push(parseFloat(ddbj_cat[i].gsx$ddbjbasesproportion.$t, 10));    
        chart_ena_cat_base_a.push(parseFloat(ddbj_cat[i].gsx$enabasesproportion.$t, 10));    
        chart_genbank_cat_base_a.push(parseFloat(ddbj_cat[i].gsx$genbankbasesproportion.$t, 10));    
      }

      // 表には Total を含める
      table_cat_seq_a.push([ddbj_cat[i].gsx$category.$t, parseInt(ddbj_cat[i].gsx$ddbjsequences.$t, 10), parseFloat(ddbj_cat[i].gsx$ddbjsequencesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$enasequences.$t, 10), parseFloat(ddbj_cat[i].gsx$enasequencesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$genbanksequences.$t, 10), parseFloat(ddbj_cat[i].gsx$genbanksequencesproportion.$t, 10)])
      table_cat_base_a.push([ddbj_cat[i].gsx$category.$t, parseInt(ddbj_cat[i].gsx$ddbjbases.$t, 10), parseFloat(ddbj_cat[i].gsx$ddbjbasesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$enabases.$t, 10), parseFloat(ddbj_cat[i].gsx$enabasesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$genbankbases.$t, 10), parseFloat(ddbj_cat[i].gsx$genbankbasesproportion.$t, 10)])

    } // for(var i = 0; i < ddbj_release.length; i++)

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(CategoryPropSeq);
    google.charts.setOnLoadCallback(CategoryPropSeqTable);

    google.charts.setOnLoadCallback(CategoryPropBase);
    google.charts.setOnLoadCallback(CategoryPropBaseTable);

    function CategoryPropSeq(){

      var title = 'Data categories at each archive (Sequences)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Archive');          
      data.addColumn('number', 'Taxonomic & Env');
      data.addColumn('number', 'SYN');
      data.addColumn('number', 'EST');
      data.addColumn('number', 'TSA');
      data.addColumn('number', 'GSS');
      data.addColumn('number', 'HTC');
      data.addColumn('number', 'HTG');
      data.addColumn('number', 'STS');
      data.addColumn('number', 'PAT');
      data.addColumn('number', 'WGS');
      data.addRows([chart_ddbj_cat_seq_a,chart_ena_cat_seq_a,chart_genbank_cat_seq_a]);

      var options ={
        title: title, 
        width: 650,      
        height: 300,
        isStacked: true,
        titleTextStyle: {fontSize:15},
        colors: ['#a14543','#439ea0','#4291a7','#42a78b','#f1d7c2','#565989','#d33f46','#91c1c9','#cb8fac','#ae8fcb'],
        vAxis: {title: 'Archive', textStyle: {fontSize:12}},
        legend: {position: 'right', textStyle: {fontSize: 12}},
        hAxis:{title:'Proportion in Release ' + release_no + ' (%)', textStyle: {fontSize:12}, viewWindow:{min:0, max:100}},
        chartArea:{left:70,width:'65%'}
      };

      var catpropseq = new google.visualization.BarChart(document.getElementById('ddbj-release-chart-div-all-seq')); 
      catpropseq.draw(data, options);
    
    } // function DDBJReleasePropSeq()

    function CategoryPropSeqTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ Sequences');
      data.addColumn('number', '%');
      data.addColumn('number', 'ENA Sequences');
      data.addColumn('number', '%');
      data.addColumn('number', 'GenBank Sequences');
      data.addColumn('number', '%');

      data.addRows(table_cat_seq_a);

      var tablecatpropseq = new google.visualization.Table(document.getElementById('ddbj-release-table-div-all-seq'));
      tablecatpropseq.draw(data);

    } // function CategoryPropSeqTable

    function CategoryPropBase(){

      var title = 'Data categories at each archive (Bases)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Archive');          
      data.addColumn('number', 'Taxonomic & Env');
      data.addColumn('number', 'SYN');
      data.addColumn('number', 'EST');
      data.addColumn('number', 'TSA');
      data.addColumn('number', 'GSS');
      data.addColumn('number', 'HTC');
      data.addColumn('number', 'HTG');
      data.addColumn('number', 'STS');
      data.addColumn('number', 'PAT');
      data.addColumn('number', 'WGS');
      data.addRows([chart_ddbj_cat_base_a, chart_ena_cat_base_a, chart_genbank_cat_base_a]);

      var options ={
        title: title, 
        width: 650,      
        height: 300,
        isStacked: true,
        titleTextStyle: {fontSize:15},
        colors: ['#a14543','#439ea0','#4291a7','#42a78b','#f1d7c2','#565989','#d33f46','#91c1c9','#cb8fac','#ae8fcb'],
        vAxis: {title: 'Archive', textStyle: {fontSize:12}},
        legend: {position: 'right', textStyle: {fontSize: 12}},
        hAxis:{title:'Proportion in Release ' + release_no + ' (%)', textStyle: {fontSize:12}, viewWindow: {min:0, max:100}},
        chartArea:{left:70,width:'65%'}
      };

      var catpropbase = new google.visualization.BarChart(document.getElementById('ddbj-release-chart-div-all-base')); 
      catpropbase.draw(data, options);
    
    } // function DDBJReleasePropSeq()

    function CategoryPropBaseTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ Bases');
      data.addColumn('number', '%');
      data.addColumn('number', 'ENA Bases');
      data.addColumn('number', '%');
      data.addColumn('number', 'GenBank Bases');
      data.addColumn('number', '%');

      data.addRows(table_cat_base_a);

      var tablecatpropbase = new google.visualization.Table(document.getElementById('ddbj-release-table-div-all-base'));
      tablecatpropbase.draw(data);

    } // function CategoryPropSeqTable

    updateSectionLocation();

  })  // $.getJSON 

  // DDBJ 最新リリースにおけるアーカイブ毎の division の割合
  var chart_div_seq_a = [];    
  var table_div_seq_a = [];
  var chart_div_base_a = [];    
  var table_div_base_a = [];
    
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['archive-proportion-category'] + "/public/values?alt=json", function(data) {

    var ddbj_cat = data.feed.entry;      
    var release_no = ddbj_cat[0].gsx$release.$t;

    // 各 division におけるアーカイブの割合を取得
    for(var i = 0; i < ddbj_cat.length; i++) {

      chart_div_seq_a.push([ddbj_cat[i].gsx$category.$t, parseFloat(ddbj_cat[i].gsx$ddbjsequencesproportion.$t, 10), parseFloat(ddbj_cat[i].gsx$enasequencesproportion.$t, 10), parseFloat(ddbj_cat[i].gsx$genbanksequencesproportion.$t, 10)]);    
      chart_div_base_a.push([ddbj_cat[i].gsx$category.$t, parseFloat(ddbj_cat[i].gsx$ddbjbasesproportion.$t, 10), parseFloat(ddbj_cat[i].gsx$enabasesproportion.$t, 10), parseFloat(ddbj_cat[i].gsx$genbankbasesproportion.$t, 10)]);    

      table_div_seq_a.push([ddbj_cat[i].gsx$category.$t, parseInt(ddbj_cat[i].gsx$ddbjsequences.$t, 10), parseFloat(ddbj_cat[i].gsx$ddbjsequencesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$enasequences.$t, 10), parseFloat(ddbj_cat[i].gsx$enasequencesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$genbanksequences.$t, 10), parseFloat(ddbj_cat[i].gsx$genbanksequencesproportion.$t, 10)]);    
      table_div_base_a.push([ddbj_cat[i].gsx$category.$t, parseInt(ddbj_cat[i].gsx$ddbjbases.$t, 10), parseFloat(ddbj_cat[i].gsx$ddbjbasesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$enabases.$t, 10), parseFloat(ddbj_cat[i].gsx$enabasesproportion.$t, 10), parseInt(ddbj_cat[i].gsx$genbankbases.$t, 10), parseFloat(ddbj_cat[i].gsx$genbankbasesproportion.$t, 10)]);    

    } // for(var i = 0; i < ddbj_release.length; i++)

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(DivPropSeq);
    google.charts.setOnLoadCallback(DivPropSeqTable);

    google.charts.setOnLoadCallback(DivPropBase);
    google.charts.setOnLoadCallback(DivPropBaseTable);

    function DivPropSeq(){

      var title = 'Proportion of each archive per data category (Sequences)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ');
      data.addColumn('number', 'ENA');
      data.addColumn('number', 'GenBank');
      data.addRows(chart_div_seq_a);

      var options = {
        title: title,
        width: 650,      
        height: 450,
        isStacked: true,
        titleTextStyle: {fontSize:15},
        legend: {position: 'right', textStyle: {fontSize: 12}},
        colors: ['#ff8a29',  '#5fb4a0',  '#528cde'],
        vAxis: {title: 'Category', textStyle: {fontSize:12}},
        chartArea:{height:'75%'},
        hAxis:{title: 'Proportion of each archive in Release ' + release_no + ' (%)', textStyle: {fontSize:12}, viewWindow:{min:0, max:100}}
      };

      var catpropseq = new google.visualization.BarChart(document.getElementById('ddbj-release-chart-prop-category-seq')); 
      catpropseq.draw(data, options);
    
    } // function DDBJReleasePropSeq()

    function DivPropSeqTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ Sequences');
      data.addColumn('number', '%');
      data.addColumn('number', 'ENA Sequences');
      data.addColumn('number', '%');
      data.addColumn('number', 'GenBank Sequences');
      data.addColumn('number', '%');
      data.addRows(table_div_seq_a);

      var tablepropseq = new google.visualization.Table(document.getElementById('ddbj-release-table-prop-category-seq'));
      tablepropseq.draw(data);

    } // function CategoryPropSeqTable

    function DivPropBase(){

      var title = 'Proportion of each archive per data category (Bases)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ');
      data.addColumn('number', 'ENA');
      data.addColumn('number', 'GenBank');
      data.addRows(chart_div_base_a);

      var options = {
        title: title,
        width: 650,      
        height: 550,
        isStacked: true,
        titleTextStyle: {fontSize:15},
        legend: {position: 'right', textStyle: {fontSize: 12}},
        colors: ['#ff8a29',  '#5fb4a0',  '#528cde'],
        vAxis: {title: 'Category', textStyle: {fontSize:12}},
        chartArea:{height:'75%'},
        hAxis:{title: 'Proportion of each archive in Release ' + release_no + ' (%)', textStyle: {fontSize:12}, viewWindow:{min:0, max:100}}
      };

      var catpropbase = new google.visualization.BarChart(document.getElementById('ddbj-release-chart-prop-category-base')); 
      catpropbase.draw(data, options);
  
    } // function DDBJReleasePropSeq()

    function DivPropBaseTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ Bases');
      data.addColumn('number', '%');
      data.addColumn('number', 'ENA Bases');
      data.addColumn('number', '%');
      data.addColumn('number', 'GenBank Bases');
      data.addColumn('number', '%');
      data.addRows(table_div_base_a);

      var tablepropbase = new google.visualization.Table(document.getElementById('ddbj-release-table-prop-category-base'));
      tablepropbase.draw(data);

    } // function CategoryPropSeqTable

    updateSectionLocation();

  })  // $.getJSON 

  // DDBJ 最新リリースにおけるアーカイブ毎の tax & env における div 割合
  var chart_ddbj_tax_seq_a = ['DDBJ'];    
  var chart_ena_tax_seq_a = ['ENA'];    
  var chart_genbank_tax_seq_a = ['GenBank'];    
  var table_tax_seq_a = [];
  var chart_ddbj_tax_base_a = ['DDBJ'];    
  var chart_ena_tax_base_a = ['ENA'];    
  var chart_genbank_tax_base_a = ['GenBank'];    
  var table_tax_base_a = [];
  
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['organism-archive'] + "/public/values?alt=json", function(data) {

    var ddbj_tax = data.feed.entry;      
    var release_no = ddbj_tax[0].gsx$release.$t;

    // Tax から Total まで
    for(var i = 0; i < ddbj_tax.length; i++) {

      // グラフからは Total を除く
      if (i < ddbj_tax.length - 1){
        chart_ddbj_tax_seq_a.push(parseFloat(ddbj_tax[i].gsx$ddbjsequencesproportion.$t, 10));    
        chart_ena_tax_seq_a.push(parseFloat(ddbj_tax[i].gsx$enasequencesproportion.$t, 10));    
        chart_genbank_tax_seq_a.push(parseFloat(ddbj_tax[i].gsx$genbanksequencesproportion.$t, 10));    
        
        chart_ddbj_tax_base_a.push(parseFloat(ddbj_tax[i].gsx$ddbjbasesproportion.$t, 10));    
        chart_ena_tax_base_a.push(parseFloat(ddbj_tax[i].gsx$enabasesproportion.$t, 10));    
        chart_genbank_tax_base_a.push(parseFloat(ddbj_tax[i].gsx$genbankbasesproportion.$t, 10));    
      }

      // 表には Total を含める
      table_tax_seq_a.push([ddbj_tax[i].gsx$category.$t, parseInt(ddbj_tax[i].gsx$ddbjsequences.$t, 10), parseFloat(ddbj_tax[i].gsx$ddbjsequencesproportion.$t, 10), parseInt(ddbj_tax[i].gsx$enasequences.$t, 10), parseFloat(ddbj_tax[i].gsx$enasequencesproportion.$t, 10), parseInt(ddbj_tax[i].gsx$genbanksequences.$t, 10), parseFloat(ddbj_tax[i].gsx$genbanksequencesproportion.$t, 10)])
      table_tax_base_a.push([ddbj_tax[i].gsx$category.$t, parseInt(ddbj_tax[i].gsx$ddbjbases.$t, 10), parseFloat(ddbj_tax[i].gsx$ddbjbasesproportion.$t, 10), parseInt(ddbj_tax[i].gsx$enabases.$t, 10), parseFloat(ddbj_tax[i].gsx$enabasesproportion.$t, 10), parseInt(ddbj_tax[i].gsx$genbankbases.$t, 10), parseFloat(ddbj_tax[i].gsx$genbankbasesproportion.$t, 10)])

    } // for(var i = 0; i < ddbj_release.length; i++)

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(TaxPropSeq);
    google.charts.setOnLoadCallback(TaxPropSeqTable);

    google.charts.setOnLoadCallback(TaxPropBase);
    google.charts.setOnLoadCallback(TaxPropBaseTable);

    function TaxPropSeq(){

      var title = 'Organisms in Taxonomic & ENV at each archive (Sequences)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Archive');
      data.addColumn('number', 'HUM');
      data.addColumn('number', 'PRI');
      data.addColumn('number', 'ROD');
      data.addColumn('number', 'MAM');
      data.addColumn('number', 'VRT');
      data.addColumn('number', 'INV');
      data.addColumn('number', 'PLN');
      data.addColumn('number', 'BCT');
      data.addColumn('number', 'VRL');
      data.addColumn('number', 'PHG');
      data.addColumn('number', 'ENV');
      data.addRows([chart_ddbj_tax_seq_a,chart_ena_tax_seq_a,chart_genbank_tax_seq_a]);

      var options ={
        title: title, 
        width: 650,      
        height: 350,
        isStacked: true,
        titleTextStyle: {fontSize:15},
        colors: ['#4b7bb2','#86a04f','#4291a7','#a34542','#6d5689','#d3823f','#91a5c9','#cb908f','#b6c894', '#ff0000','#90bdce'],
        vAxis: {title: 'Archive', textStyle: {fontSize:12}},
        legend: {position: 'right', textStyle: {fontSize: 12}},
        hAxis:{title:'Proportion in Release ' + release_no + ' (%)', textStyle: {fontSize:12}, viewWindow:{min:0, max:100}},
        chartArea:{left:70, width:'70%', height:'65%'}
      };

      var taxpropseq = new google.visualization.BarChart(document.getElementById('ddbj-release-chart-tax-prop-seq')); 
      taxpropseq.draw(data, options);
    
    } // function DDBJReleasePropSeq()

    function TaxPropSeqTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ Sequences');
      data.addColumn('number', '%');
      data.addColumn('number', 'ENA Sequences');
      data.addColumn('number', '%');
      data.addColumn('number', 'GenBank Sequences');
      data.addColumn('number', '%');

      data.addRows(table_tax_seq_a);

      var tablecatpropseq = new google.visualization.Table(document.getElementById('ddbj-release-table-tax-prop-seq'));
      tablecatpropseq.draw(data);

    } // function TaxPropSeqTable

    function TaxPropBase(){

      var title = 'Organisms in Taxonomic & ENV at each archive (Bases)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Archive');
      data.addColumn('number', 'HUM');
      data.addColumn('number', 'PRI');
      data.addColumn('number', 'ROD');
      data.addColumn('number', 'MAM');
      data.addColumn('number', 'VRT');
      data.addColumn('number', 'INV');
      data.addColumn('number', 'PLN');
      data.addColumn('number', 'BCT');
      data.addColumn('number', 'VRL');
      data.addColumn('number', 'PHG');
      data.addColumn('number', 'ENV');
      data.addRows([chart_ddbj_tax_base_a,chart_ena_tax_base_a,chart_genbank_tax_base_a]);

      var options ={
        title: title, 
        width: 650,      
        height: 350,
        isStacked: true,
        titleTextStyle: {fontSize:15},
        colors: ['#4b7bb2','#86a04f','#4291a7','#a34542','#6d5689','#d3823f','#91a5c9','#cb908f','#b6c894', '#ff0000','#90bdce'],
        vAxis: {title: 'Archive', textStyle: {fontSize:12}},
        legend: {position: 'right', textStyle: {fontSize: 12}},
        hAxis:{title:'Proportion in Release ' + release_no + ' (%)', textStyle: {fontSize:12}, viewWindow:{min:0, max:100}},
        chartArea:{left:70, width:'70%', height:'65%'}
      };

      var taxpropbase = new google.visualization.BarChart(document.getElementById('ddbj-release-chart-tax-prop-base')); 
      taxpropbase.draw(data, options);
    
    } // function DDBJReleasePropSeq()

    function TaxPropBaseTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');          
      data.addColumn('number', 'DDBJ Bases');
      data.addColumn('number', '%');
      data.addColumn('number', 'ENA Bases');
      data.addColumn('number', '%');
      data.addColumn('number', 'GenBank Bases');
      data.addColumn('number', '%');

      data.addRows(table_tax_base_a);

      var tablecatpropbase = new google.visualization.Table(document.getElementById('ddbj-release-table-tax-prop-base'));
      tablecatpropbase.draw(data);

    } // function TaxPropSeqTable

    updateSectionLocation();

  })  // $.getJSON 

  // DDBJ 最新リリースにおける上生物種ランキング
  var table_org_ranking_a = [];
      
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['organism-ranking'] + "/public/values?alt=json", function(data) {

    var org_rank = data.feed.entry;      
    var org_rank_limit = 19;

    // ranking 1-20
    for(var i = 0; i <= org_rank_limit; i++) {
      table_org_ranking_a.push([parseInt(org_rank[i].gsx$rank.$t, 10), org_rank[i].gsx$organism.$t, parseInt(org_rank[i].gsx$sequences.$t, 10), parseInt(org_rank[i].gsx$bases.$t, 10)]);    
    }

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(OrgRankingTable);

    function OrgRankingTable(){

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Rank');          
      data.addColumn('string', 'Organism');
      data.addColumn('number', 'Sequences');
      data.addColumn('number', 'Bases');

      data.addRows(table_org_ranking_a);

      var tableorgrank = new google.visualization.Table(document.getElementById('ddbj-release-table_organism_ranking'));
      tableorgrank.draw(data);

    } // function OrgRankingTable

    updateSectionLocation();

  })  // $.getJSON 

  // DDBJ 最新リリースにおける Journal ランキング
  var table_journal_ranking_a = [];
      
  google.charts.load('current', {'packages':['corechart', 'table']});

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['journal-ranking'] + "/public/values?alt=json", function(data) {

    var journal_rank = data.feed.entry;      
    var journal_rank_limit = 19;

    // ranking 1-20
    for(var i = 0; i <= journal_rank_limit; i++) {
      table_journal_ranking_a.push([parseInt(journal_rank[i].gsx$rank.$t, 10), journal_rank[i].gsx$journal.$t, parseInt(journal_rank[i].gsx$counts.$t, 10)]);    
    }

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(JournalRankingTable);

    function JournalRankingTable(){

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Rank');          
      data.addColumn('string', 'Journal');
      data.addColumn('number', 'Counts');

      data.addRows(table_journal_ranking_a);

      var tablejournalrank = new google.visualization.Table(document.getElementById('ddbj-release-table_journal_ranking'));
      tablejournalrank.draw(data);

    } // function JournalRankingTable

    updateSectionLocation();

  })  // $.getJSON
} // makeDDBJRelease

// DRA リリース
function makeDRARelease() {
  google.charts.load('current', {'packages':['corechart', 'table']});

  var now = new Date();
  var this_year = now.getFullYear();
  var year_min = 0;
  var year_max = 0;
  var span = 10; // 年毎は直近10年を表示
  var x = 0;
  var chart_size_year_a = [];    
  var chart_bases_seqs_year_a = [];    
  var html_tables = "";

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['dra-release'] + "/public/values?alt=json", function(data) {

    var dra_release = data.feed.entry;

    // 今年の途中も表示
    
    for(var i = 0; i < dra_release.length; i++) {
    
      var year = dra_release[i].gsx$year.$t;
      var y = parseInt(year, 10);
      var sra_bytes = parseInt(dra_release[i].gsx$srabytes.$t, 10);
      var sequences = parseInt(dra_release[i].gsx$sequences.$t, 10);
      var bases = parseInt(dra_release[i].gsx$bases.$t, 10);
      var fastq_bytes = parseInt(dra_release[i].gsx$fastqbytes.$t, 10);

      // 年毎に配列に格納                
      if(y > this_year -1 - span){
        chart_size_year_a.push([year, roundFloat(sra_bytes/10**12, 2), roundFloat(fastq_bytes/10**12, 2)]);                          
        // sequences, bases trillion 10^12
        chart_bases_seqs_year_a.push([year, roundFloat(sequences/10**12, 2), roundFloat(bases/10**12, 2)]);                          
        if (x==0) year_min = y;
        year_max = y;
        x++;
      }
      
    } // for(var i = 0; i < dra_release.length; i++)

    html_tables += '<h3 id="total">Total filesize (' + year_min + '-' + year_max + ')</h3>' + '<div id="dra-release_chart_size"></div><div id="dra-release_table_size"></div><div id="dra-release_chart_bases_seqs"></div><div id="dra-release_table_bases_seqs"></div>';        
    html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=300088284">Source data</a></p>';

    /* グラフ作成 */
    $("#dra-release_stat_area").append(html_tables);

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(drawTotalDRARelease);
    google.charts.setOnLoadCallback(drawTotalDRAReleaseTable);

    // bases seqs
    google.charts.setOnLoadCallback(drawTotalDRABasesSeqs);
    google.charts.setOnLoadCallback(drawTotalDRABasesSeqsTable);

    function drawTotalDRARelease(){

      var title = 'DRA data release (total filesize)';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'SRA filesize (TB)');
      data.addColumn('number', 'fastq filesize (TB)');

      data.addRows(chart_size_year_a);

      var options = {
        width: 600,
        height: 600,
        title: title,
        titleTextStyle:{fontSize:15},
        fontSize:12,
        legend: {position: 'top', textStyle:{fontSize: 10}},
        hAxis:{title:'Year'},
        vAxis:{title:'Filesize (TB)', minorGridlines:{count:0}},
        colors: ['#3366cc','#5b84d6'],
        isStacked:true
      };
      
      var drareleasey = new google.visualization.ColumnChart(document.getElementById('dra-release_chart_size'));
      drareleasey.draw(data, options);

    } // function drawTotalDRARelease()

    function drawTotalDRAReleaseTable(){
    
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'SRA filesize (TB)');
      data.addColumn('number', 'fastq filesize (TB)');
      data.addRows(chart_size_year_a);

      var formatter = new google.visualization.NumberFormat({ fractionDigits:0, groupingSymbol: '' });
      formatter.format(data, 0);

      var drareleaseyt = new google.visualization.Table(document.getElementById('dra-release_table_size'));
      drareleaseyt.draw(data);

    } // function drawTotalDRAReleaseTable()

    // bases sequences
    function drawTotalDRABasesSeqs(){

      var title = 'DRA data release (total sequences and bases)';

      // Create the data table.
      var data = new google.visualization.DataTable();          

      data.addColumn('string', 'Year');
      data.addColumn('number', 'Sequences (trillion)');
      data.addColumn('number', 'Bases (trillion)');
      
      data.addRows(chart_bases_seqs_year_a);

      var options = {
        width: 600,
        height: 600,
        title: title,
        titleTextStyle:{fontSize:15},
        fontSize:12,
        legend: {position: 'top', textStyle: {fontSize: 10}},
        series: {
          0: {targetAxisIndex: 0},
          1: {targetAxisIndex: 1}
        },
        hAxis:{title:'Year', textStyle:{fontSize:12}, format:'0', minorGridlines:{count:0}, gridlines:{color:'#eee'}},
        vAxes:{
          // Adds titles to each axis.              
          0: {title: 'Sequences (trillion)', scaleType:'log', ticks: [0, 10, 100]},
          1: {title: 'Bases (trillion)', scaleType:'log', ticks: [0, 10, 100]}
        },            
        colors: ['#5b84d6', '#ff0000']
      };

      var formatter = new google.visualization.NumberFormat({ pattern:'####',groupingSymbol:'' });
      formatter.format(data, 0);
      
      var drareleasebq = new google.visualization.LineChart(document.getElementById('dra-release_chart_bases_seqs'));
      drareleasebq.draw(data, options);
    } // drawTotalDRARelease()

    function drawTotalDRABasesSeqsTable(){
    
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Sequences (trillion)');
      data.addColumn('number', 'Bases (trillion)');
      data.addRows(chart_bases_seqs_year_a);

      var formatter = new google.visualization.NumberFormat({ fractionDigits:0, groupingSymbol:'' });
      formatter.format(data, 0);

      var drareleasebqt = new google.visualization.Table(document.getElementById('dra-release_table_bases_seqs'));
      drareleasebqt.draw(data);

    } // function drawTotalDRABasesSeqsTable()

    updateSectionLocation();

  })  // $.getJSON
} // makeDRARelease

// GEA 公開数、年単位、前年まで
function makeGEARelease() {
  google.charts.load('current', {'packages':['corechart', 'table']});

  var now = new Date();
  var this_year = now.getFullYear();
  var year_min = 0;
  var year_max = 0;
  var x = 0;
  var span = 5; // 前年から5年間を表示
  var chart_year_a = [];
  var html_tables = "";

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['gea-release'] + "/public/values?alt=json", function(data) {

    var gea_release = data.feed.entry;
  
    for(var i = 0; i < gea_release.length; i++) {

      var y = parseInt(gea_release[i].gsx$year.$t.substring(0, 4), 10);

      if( y >= (this_year-1-span) ){
        chart_year_a.push([gea_release[i].gsx$year.$t, parseInt(gea_release[i].gsx$experiments.$t, 10), parseInt(gea_release[i].gsx$samples.$t, 10)]);
        if (x==0) year_min = y;
        year_max = y;
        x++;
      } // for(var i = 0; i < gea_release.length; i++)
    
    } // for(var y = year_max-span; y <= year_max; y++)

    html_tables += '<h3 id="gea-release_otal">Total data volume (' + year_min + '-' + year_max + ')</h3>' + '<div id="gea-release_chart_total"></div><div id="gea-release_table_total"></div>';
    html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=584932770">Source data</a></p>';

    /* グラフ作成 */
    $("#gea-release_stat_area").append(html_tables);

    google.charts.setOnLoadCallback(drawTotalGEARelease);
    google.charts.setOnLoadCallback(drawTotalGEAReleaseTable);

    function drawTotalGEARelease(){

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Experiments');
      data.addColumn('number', 'Samples');

      data.addRows(chart_year_a);

      var options = {
        title: 'GEA release (total data volume)', 
        width: 600,      
        height:400,
        seriesType: 'bars',
        legend:{position:'top', textStyle: {fontSize: 12}},         
        series: {
          0:{color:'#00CCFF', targetAxisIndex: 0},
          1:{color:'#953735', targetAxisIndex: 1}
        },
        hAxis:{
          title: 'Year',
          textStyle: {fontSize:11}
        },
        vAxes: {
          0: {
            title: 'Experiments',
            textStyle: {fontSize:11}
          },
          1: {   
            title: 'Samples',
            color:'#ff0000'
          }
        },
        titlePosition:'out'
      };
      
      var gearelyear = new google.visualization.ColumnChart(document.getElementById('gea-release_chart_total'));
      gearelyear.draw(data, options);
    
    } // function drawTotalGEASubmission

    function drawTotalGEAReleaseTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Experiments');
      data.addColumn('number', 'Samples');
      data.addRows(chart_year_a);

      var gearelyeartable = new google.visualization.Table(document.getElementById('gea-release_table_total'));
      gearelyeartable.draw(data);

    } // function drawTotalGEASubmissionTable

    updateSectionLocation();
    
  })  // $.getJSON

} // makeGEARelease

// JGA リリース
function makeJGARelease() {
  google.charts.load('current', {'packages':['corechart', 'table']});

  var now = new Date();
  var this_year = now.getFullYear();
  var year_min = 0;
  var year_max = 0;
  var span = 5; // 年毎は直近4年を表示
  var x = 0;
  var chart_year_a = [];    
  var chart_year_table_a = [];    
  var html_tables = "";

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['jga-release'] + "/public/values?alt=json", function(data) {

    var jga_release = data.feed.entry;

    // 今年の途中も表示
    
    for(var i = 0; i < jga_release.length; i++) {
      
      var year = jga_release[i].gsx$year.$t;
      var y = parseInt(year, 10);
      var studies = parseInt(jga_release[i].gsx$studies.$t, 10);
      var samples = parseInt(jga_release[i].gsx$samples.$t, 10);
      var bytes = parseInt(jga_release[i].gsx$bytes.$t, 10);

      // 年毎に配列に格納                                
      if(y > this_year - 1 - span){
        chart_year_a.push([year, samples, roundFloat(bytes/10**12, 2)]);                          
        chart_year_table_a.push([year, studies, samples, roundFloat(bytes/10**12, 2)]);                          
        if (x==0) year_min = y;
        year_max = y;
        x++;
      }
      
    } // for(var i = 0; i < jga_release.length; i++)

    html_tables += '<h3 id="total">Total data volume (' + year_min + '-' + year_max + ')</h3>' + '<div id="jga-release_chart_total"></div><div id="jga-release_table_total"></div>';        
    html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1609644463">Source data</a></p>';

    /* グラフ作成 */
    $("#jga-release_stat_area").append(html_tables);

    // 棒グラフ描画 size
    google.charts.setOnLoadCallback(JGATotalRelease);
    google.charts.setOnLoadCallback(JGATotalReleaseTable);

    function JGATotalRelease(){

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Samples');
      data.addColumn('number', 'Filesize (TB)');

      data.addRows(chart_year_a);

      var options = {
        title: 'JGA data release (total data volume)', 
        width: 600,      
        height:400,
        seriesType: 'bars',
        legend:{position:'top', textStyle: {fontSize: 12}},         
        series: {
          0:{color:'#00CCFF', targetAxisIndex: 0},
          1:{color:'#953735', targetAxisIndex: 1}
        },
        hAxis:{
          title: 'Year',
          textStyle: {fontSize:11}
        },
        vAxes: {
          0: {
            title: 'Samples',
            textStyle: {fontSize:11},
            gridlines: {count:6}
          },
          1: {   
            title: 'Filesize (TB)',
            color:'#ff0000',
            gridlines: {count:6}
          }
        },
        titlePosition:'out'
      };
      
      var jgarel = new google.visualization.ColumnChart(document.getElementById('jga-release_chart_total'));
      jgarel.draw(data, options);
    } // function drawTotalJGASubmission()

    function JGATotalReleaseTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Studies');
      data.addColumn('number', 'Samples');
      data.addColumn('number', 'Filesize (TB)');
      data.addRows(chart_year_table_a);

      var jgarelt = new google.visualization.Table(document.getElementById('jga-release_table_total'));
      jgarelt.draw(data);

    } // function drawSubmissionNumberTable

    updateSectionLocation();

  })  // $.getJSON

} // makeJGARelease

// DDBJ への登録ルート毎の submission
function makeSubmission() {

  google.charts.load('current', {'packages':['corechart', 'table']});

  var now = new Date();
  var this_year = now.getFullYear();
  var year_min = 0;
  var year_max = 0;
  var x = 0;
  var span = 5; // 前年から5年間を表示
  var chart_year_a = [];    
  var chart_year_table_a = [];    
  var html_tables = "";

  // 統計公開シート https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=0
  $.getJSON("https://spreadsheets.google.com/feeds/list/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/" + sheet_position_h['ddbj-submission'] + "/public/values?alt=json", function(data) {

    var ddbj_sub = data.feed.entry;

    for(var i = 0; i < ddbj_sub.length; i++) {

      var y = parseInt(ddbj_sub[i].gsx$year.$t.substring(0, 4), 10);

      if( y >= (this_year-1-span) ){
        
        var submission_total_web = parseInt(ddbj_sub[i].gsx$submissiontotalweb.$t, 10);
        var submission_total_mss = parseInt(ddbj_sub[i].gsx$submissiontotalmss.$t, 10);

        chart_year_a.push([ddbj_sub[i].gsx$year.$t, submission_total_web, submission_total_mss]);
        chart_year_table_a.push([ddbj_sub[i].gsx$year.$t, submission_total_web, submission_total_mss, submission_total_web + submission_total_mss]);
        
        if (x==0) year_min = y;
        year_max = y;
        x++;

      } // for(var i = 0; i < ddbj_sub.length; i++)
    
    } // for(var y = year_max-span; y <= year_max; y++)

    html_tables += '<h3 id="ddbj-submission_total">By year (' + year_min + '-' + year_max + ')</h3>' + '<div id="ddbj-submission_chart_total"></div><div id="ddbj-submission_table_total"></div>';
    html_tables += '<p class="original_data"><a href="https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=881663501">Source data</a></p>';

    /* グラフ作成 */
    $("#submission_stat_area").append(html_tables);

    google.charts.setOnLoadCallback(drawDDBJSub);
    google.charts.setOnLoadCallback(drawDDBJSubTable);

    function drawDDBJSub(){

      var title = 'Submission to DDBJ';

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Web Submission');
      data.addColumn('number', 'MSS Submission');

      data.addRows(chart_year_a);

      var options = {
        width: 700,
        height: 500,
        title: title,
        titleTextStyle:{fontSize:15},
        fontSize:12,
        legend: {position: 'right', textStyle: {fontSize: 12}},
        hAxis: {title: 'Year'},
        vAxis: {title: 'Submissions'},
        colors: ['#3366cc', '#039be5'],
        chartArea:{left:60, height:'80%', width:'50%'},
        isStacked:true
      };

      var ddbjsubyear = new google.visualization.ColumnChart(document.getElementById('ddbj-submission_chart_total'));
      ddbjsubyear.draw(data, options);
    
    } // function drawWGSRelease

    function drawDDBJSubTable(){
      
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Web Submission');
      data.addColumn('number', 'MSS Submission');
      data.addColumn('number', 'Total Submission');

      data.addRows(chart_year_table_a);

      var ddbjsubyeartable = new google.visualization.Table(document.getElementById('ddbj-submission_table_total'));
      ddbjsubyeartable.draw(data);

    } // function drawWGSReleaseTable

    updateSectionLocation();

  }) // $.getJSON

} // makeSubmission

function updateSectionLocation() {
  $(window).triggerHandler('resize');
}
