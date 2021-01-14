/*
 * json を表示、検索する jQuery
 */

$(function(){
	
	/* json 読み込み、表示、検索*/
	
	// URL、ファイルパス、ファイル名取得
	var url = window.location.href;
	var host = window.location.host;
	var pathname = window.location.pathname;
	var protocol = window.location.protocol;	
	var bare_url = 'https://' + host + pathname;

	var anchor = "";
	if ( url.split('#')[1] ) anchor = "#" + url.split('#')[1];

	var filename = "";
	if ( pathname.match(/-e.html$/) ){
		filename = pathname.split('/').pop().replace(/-e\.html$/, "");
	} else {
		filename = pathname.split('/').pop().replace(/\.html$/, "");
	}

	// GET パラメータ取得 
	var arg = new Object;
	var pair = location.search.substring(1).split('&');
	for( var i=0; pair[i]; i++ ) {
	    var kv = pair[i].split('=');
	    arg[kv[0]] = kv[1];
	}

	// 日付変換関数
	function to_date(date, la) {

		// 日付変換用配列
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		
		var date_s = "";
		
		if ( la=="ja" ) {
			date_s = date.getFullYear() + '年' + (parseInt(date.getMonth()) + parseInt(1)) + '月' + date.getDate() + '日'; 
		} else {
			date_s = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
		}

		return date_s;

	} // function to_date

	// news 抜粋作成
	function get_excerpt(article_text, limitNum) {
		
		// 記事の本文の抜粋
		var letter_count = limitNum;　
		
		// 記事の本文から html タグの削除
		var article_text_stripped = article_text.replace(/<(.*?)>/g, '');　
		var textLength = article_text_stripped.length;

		var excerpt = "";
		if (textLength > letter_count) {
			excerpt = article_text_stripped.substring(0, letter_count) + ' ..... ';
		} else {
			excerpt = article_text_stripped;
		}

		return excerpt;

	} // function excerpt(text)

	// DB 判定
	var db_names = [
		
		// majic word、DDBJ Center top は全 news が掲載されるので全ページ掲載の重要ニュース用		
		"top",
		
		// database name
		"ddbj",
		"dra",
		"dta",
		"gea",
		"bioproject",
		"biosample",
		"jvar-snp",
		"jvar-sv",
		"jga",
		"agd",

		// NIG SuperComputer
		"sc",

		// service name
		"getentry",
		"arsa",
		"drasearch",
		"txsearch",
		"blast",
		"vecscreen",
		"clustalw",
		"wabi",
		"ftp",
		"pipeline",
		
		// post name
		"faq",
		"news",
		"glossary",

		// DDBJ Group Cloud
		"dgc"
		
	]

	var display_names = [

		// majic word
		"DDBJ Center",
		
		// database name
		"DDBJ",
		"DRA",
		"DTA",
		"GEA",
		"BioProject",
		"BioSample",
		"JVar-SNP",
		"JVar-SV",
		"JGA",
		"AGD",
		
		// NIG SuperComputer
		"SC",

		// service name
		"getentry",
		"ARSA",
		"DRA Search",
		"TXSearch",
		"BLAST",
		"VecScreen",
		"ClustalW",
		"WABI",
		"ftp",
		"Pipeline",

		// post name
		"FAQ",
		"News",
		"Glossary",

		// DDBJ Group Cloud
		"DDBJ Group Cloud"

	]

	// アーカイブ DB 
	var db_archives = ["ddbj", "dra", "dta", "gea", "bioproject", "biosample", "jvar-snp", "jvar-sv", "jga", "agd"];	

	var db = "top";
	for( var i in db_names ) {
		
		pattern = new RegExp('\/' + db_names[i] + '\/');
		
		if( pathname.match(pattern) ){
			db = db_names[i];
		}
	
	}

	//  DB パラメータ処理
	var db_select = "";
	if ( arg.db ) db_select = arg.db;

	//  keyword パラメータ処理
	var keyword_select = "";
	if ( arg.keyword ) keyword_select = arg.keyword;

	// 言語判定
	var la = "ja";
	if ( pathname.match(/-e.html/) ) la = "en";

	// 年処理
	var y = "";

	// 個別 news ページでアーカイブ年指定して form submit
	$("#select_year_news").change(function(){
		
		y = $("[name=y]").val();

		// 空の場合 submit しない
		if (y){
			$('#select_year_news_form').submit();
		}
		
	});	

	// y がパラメータとして指定された場合
	if( getUrlVars()["y"] && getUrlVars()["y"].match(/\d{4}/) && parseInt(getUrlVars()["y"]) > 1995){
	
		y = getUrlVars()["y"];
	
		$('h1.news').text('News from ' + y);

		// 年選択プルダウンメニュー y 一致に selected 付加
		$("#select_year_news option").each(function(){
			if ( $(this).val()==y ) $(this).attr("selected", "selected");
		});	

	// news リストページでパラーメータで年指定されていない場合は今年にする
	// news 個別ページは除外
	} else if ( typeof(getUrlVars()["y"]) == "undefined" && ( pathname.match(/news\/ja\/index.html/) || pathname.match(/news\/en\/index-e.html/) ) ) {
		
		y = new Date().getFullYear();
		
		$('h1.news').text('News from ' + y);

		// 年選択プルダウンメニュー y 一致に selected 付加
		$("#select_year_news option").each(function(){
			if ( $(this).val()==y ) $(this).attr("selected", "selected");
		});	

	} // y が不正 (1996 < 以外) な指定の場合は何も返さない

	/* 
	-------------------------------------------------------------------------------------------------------------------------------------------
		News
	-------------------------------------------------------------------------------------------------------------------------------------------
	*/

	// news アーカイブ読み込み処理 news + index
	if ( filename=="index" && db=="news" ){		

		var news_json = "";
		if ( la=="ja" ) {
			news_json = '/json/news_ja.json';
		} else {
			news_json = '/json/news_en.json';
		}

		$.getJSON(news_json, function(data){

			// アーカイブ表示
			if ( db=="news" && filename=="index" ) {
				
				// 新しい順にソートし言語を限定した配列を作成
				var selected = [];

				for ( var i in data ){			

						// y は無ければ今年が設定される
						if ( db_select && keyword_select ){
							if ( new Date(data[i].publish_date).getFullYear()==y && data[i].db.indexOf(db_select) != -1 && data[i].keyword.indexOf(keyword_select) != -1 ) {											
								selected.push(data[i]);
							}
						} else if ( db_select && !keyword_select ) {
							if ( new Date(data[i].publish_date).getFullYear()==y && data[i].db.indexOf(db_select) != -1 ) {											
								selected.push(data[i]);
							}
						} else if ( !db_select && keyword_select ) {
							if ( new Date(data[i].publish_date).getFullYear()==y && data[i].keyword.indexOf(keyword_select) != -1 ) {											
								selected.push(data[i]);
							}
						} else {						
							if ( new Date(data[i].publish_date).getFullYear()==y ) {											
								selected.push(data[i]);
							}					
						}

				} // for ( var i in data )

				// 件数を取得
				var count = 0;
				count = selected.length;
				count_html = "";
				
				if ( la=="ja" ) {
					$('.news_post_container .post_found').text('News: ' + count + '件');
				} else {
					$('.news_post_container .post_found').text('News: ' + count);
				}

				// html と目次 toc を組み立て
				var news_html= '';			

				var first_post = true;
				for ( var i in selected　) {
				
					// 日付処理
					var publish_date = "";
					var last_update = "";
					var publish_date_s = "";
					var last_update_s = "";

					// 日付が存在すれば Date オブジェクトに変換
					if (selected[i].publish_date) {
						publish_date = new Date(selected[i].publish_date);	
					}
					
					if (selected[i].last_update) {
						last_update = new Date(selected[i].last_update);
					}

					// 日付を変換
					if ( publish_date ) { 
						publish_date_s = to_date(publish_date, la);
					}
					if ( last_update ) { 
						last_update_s = to_date(last_update, la);
					}

					// db から service 名を取得
					var service_html = "";
					var service_link_html = "";
					var service_link_htmls = [];
					var display_service_names = [];
					if ( selected[i].db.length > 0 ) {
						for ( var j in selected[i].db ){										
							if ( db_names.indexOf(selected[i].db[j]) != -1 && display_names[db_names.indexOf(selected[i].db[j])] ){						

								display_service_names.push(display_names[db_names.indexOf(selected[i].db[j])]);

								var db_query_url = "";
								
								// サービスでの news 絞り込み検索リンク、DB は上書きになるので y keyword 保存
								// 年指定されば db keyword ともに y 保存
								if ( arg.y ) {
									if ( arg.keyword ) {
										db_query_url = bare_url + "?y=" + arg.y + "&keyword=" + arg.keyword + "&db=" + selected[i].db[j];
									} else {
										db_query_url = bare_url + "?y=" + arg.y + "&db=" + selected[i].db[j];
									}
								// 年指定なし
								} else {
									if ( arg.keyword ) {
										db_query_url = bare_url + "?keyword=" + arg.keyword + "&db=" + selected[i].db[j];
									} else {
										db_query_url = bare_url + "?db=" + selected[i].db[j];
									}
								}

								service_link_html = '<a href="' + db_query_url + '">' + display_names[db_names.indexOf(selected[i].db[j])] + '</a>';
								service_link_htmls.push(service_link_html);

							}										
						}

						if ( display_service_names.length > 0 ){
							
							if (la=="ja"){
								service_html += '<span class="service">サービス: ' + service_link_htmls.join(", ") + '</span>';
								//service_html += '<span class="service">サービス: ' + display_service_names.join(", ") + '</span>';
							} else {
								service_html += '<span class="service">Services: ' + service_link_htmls.join(", ") + '</span>';
								//service_html += '<span class="service">Services: ' + display_service_names.join(", ") + '</span>';
							}
						}						

					}

					// キーワードを取得
					var keyword_html = "";
					var keywords = [];
					if ( selected[i].keyword.length > 0 ) {		
						for ( var k in selected[i].keyword ){															
						
							var keyword_query_url = "";

							// 年指定されば db y 保存
							if ( arg.y ) {
								if ( arg.db ) {
									keyword_query_url = bare_url + "?y=" + arg.y + "&db=" + arg.db + "&keyword=" + selected[i].keyword[k];
								} else {
									keyword_query_url = bare_url + "?y=" + arg.y + "&keyword=" + selected[i].keyword[k];
								}
							// 年指定なし
							} else {
								if ( arg.db ) {
									keyword_query_url = bare_url + "?db=" + arg.db + "&keyword=" + selected[i].keyword[k];
								} else {
									keyword_query_url = bare_url + "?keyword=" + selected[i].keyword[k];
								}
							}

							var keyword_link_html = '<a href="' + keyword_query_url + '">' + selected[i].keyword[k] + '</a>';
							keywords.push(keyword_link_html);
						}
					
						if ( keywords.length > 0 ) {
							if (la=="ja"){
								keyword_html = '<span class="keyword">キーワード: ' + keywords.join(", ") + '</span>';
							} else {
								keyword_html = '<span class="keyword">Keywords: ' + keywords.join(", ") + '</span>';
							}
						}
					}

					// 抜粋取得
					var excerpt = "";
					if ( selected[i].content ) {
						excerpt = get_excerpt(selected[i].content, 100);
					}

					// 最初の投稿				
					var first_post_class = "";
					if ( first_post ) {
						first_post_class = " firstpost";
						first_post = false;
					}

					// news 毎に html を組み立てる処理
					stripped_title = selected[i].title.replace(/<(.*?)>/g, '');
					//news_html += '<div class="news_post' + first_post_class + '"><h2 class="news_title"><a href="/news/' + la + '/' + selected[i].url + '">' + stripped_title + '</a></h2>';							
					news_html += '<div class="news_post' + first_post_class + '"><h2 class="news_title"><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></h2>';							
					news_html += '<div class="news_date">' + publish_date_s + '</div>';					
					news_html += '<div class="news_content"><a href="/news/' + la + '/' + selected[i].url + '">' + excerpt + '</a></div>';
					news_html += '<div class="news_category">' + service_html;
					news_html += keyword_html + '</div>';
					
					// news ではキーワードは表示せずサービス名のみにする
					news_html += '</div> <!-- .news_post -->';

				} // for selected

				$(".news_post_container.archive.news").append(news_html);
			
			} 

		}); // $.getJSON

	// トップページでは全ての latest、サービストップページでは DB 毎の latest、全ページで重要ニュースを掲載
	} else {		

		var news_json = "";
		if ( la=="ja" ) {
			news_json = '/json/news_latest_ja.json';
		} else {
			news_json = '/json/news_latest_en.json';
		}

		$.getJSON(news_json, function(data){

				// 新しい順にソートし言語を限定した配列を作成
				var selected = [];

				for ( var i in data ){			
					if ( db=="top" ){
						if ( new Date(data[i].retire_datetime) > new Date() ) {											
							selected.push(data[i]);
						}
					} else if (db) {
						if ( new Date(data[i].retire_datetime) > new Date() && data[i].db.indexOf(db) != -1 ) {											
							selected.push(data[i]);
						}
					}
				}

				// 件数を取得
				var count = 0;
				count = selected.length;
				count_html = "";

				// html と目次 toc を組み立て
				var news_html= '';
				var news_all_html = "";
				var news_all_top_html = "";
				var top_news_list = '';				

				var first_post = true;
				for ( var i in selected　) {
				
					// 日付処理
					var publish_date = "";
					var publish_date_s = "";

					// 日付が存在すれば Date オブジェクトに変換
					if (selected[i].publish_date) {
						publish_date = new Date(selected[i].publish_date);	
					}
					
					// 日付を変換
					if ( publish_date ) { 
						publish_date_s = to_date(publish_date, la);
					}

					// db から service 名を取得
					var service_html = "";
					for ( var j in selected[i].db ){										
						if ( db_names.indexOf(selected[i].db[j]) != -1 && display_names[db_names.indexOf(selected[i].db[j])] ){						
							if ( la=="ja" ){
								service_html += '<span class="service">' + display_names[db_names.indexOf(selected[i].db[j])] + '</span>';
							} else {
								service_html += '<span class="service">' + display_names[db_names.indexOf(selected[i].db[j])] + '</span>';
							}
						}										
					}

					// キーワードを取得
					var keyword_html = "";
					
					if ( selected[i].keyword.length==0 ) {
						keyword_html = '';
					} else {
						
						for ( var k in selected[i].keyword ){															
							keyword_html +=  selected[i].keyword[k] ;
						}

					}

					// 抜粋文作成
					var excerpt = get_excerpt(selected[i].content, 100);
					var excerpt_top_news = get_excerpt(selected[i].content, 500);

					// センタートップ用に html を組み立て
					stripped_title = selected[i].title.replace(/<(.*?)>/g, '');

					top_news_list += '<div class="news-content">';
					top_news_list += '<span class="label">' + publish_date_s + '</span>' + '<span class="label label-keyword"> | ' + keyword_html + '</span><span class="label label-service"> | ' + service_html + '</span>';
					//top_news_list += '<h5><a href="/news/' + la + '/' + selected[i].url + '">' + stripped_title + '</a></h5>' ;
					top_news_list += '<h5><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></h5>' ;
					//top_news_list += '<p class="excerpt"><a href="/news/' + la + '/' + selected[i].url + '">' + excerpt + '</a></p>';
					top_news_list += '</div>';

					// サービストップページ用に html を組み立てる処理
					news_html += '<div class="news_post">';
					news_html += '<span class="label">' + publish_date_s  + '</span><span class="label label-keyword"> | ' + keyword_html + '</span>';
					//news_html += '<h5><a href="/news/' + la + '/' + selected[i].url + '">' + stripped_title + '</a></h5>';
					news_html += '<h5><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></h5>';
					news_html += '<p class="excerpt"><a href="/news/' + la + '/' + selected[i].url + '">' + excerpt + '</a></p>';
					news_html += '</div> <!-- .news_post -->';

					// post_to 処理 news、指定された db の全ページで表示
					if ( ( selected[i].post_to == "all" || selected[i].post_to == "all-open") && selected[i].db.indexOf(db) != -1 ){

						if ( selected[i].title.match(/^ *\<a/) ) {
							news_all_html += '<div class="news_post clearfix"><h4><span class="news_title">' + selected[i].title + '</span></h4>';						
							//news_all_html += '<div class="news_post clearfix"><h4><span class="news_date">' + publish_date_s + ': </span><span class="news_title">' + selected[i].title + '</span></h4>';						
						} else {
							news_all_html += '<div class="news_post clearfix"><h4><span class="news_title"><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></span></h4>';						
							//news_all_html += '<div class="news_post clearfix"><h4><span class="news_date">' + publish_date_s + ': </span><span class="news_title"><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></span></h4>';						
						}					

						if ( selected[i].post_to == "all-open"){
							news_all_html += '<p class="excerpt"><a href="/news/' + la + '/' + selected[i].url + '">' + excerpt_top_news + '</a></p>';
						}

						news_all_html += '</div> <!-- .news_post -->';						
					}

					// post_to 処理 news、指定された db のトップのみで表示
					if ( ( selected[i].post_to == "all-top" || selected[i].post_to == "all-top-open") && selected[i].db.indexOf(db) != -1 ){

						if ( selected[i].title.match(/^ *\<a/) ) {
							news_all_top_html += '<div class="news_post clearfix"><h4><span class="news_title">' + selected[i].title + '</span></h4>';						
							//news_all_top_html += '<div class="news_post clearfix"><h4><span class="news_date">' + publish_date_s + ': </span><span class="news_title">' + selected[i].title + '</span></h4>';						
						} else {
							news_all_top_html += '<div class="news_post clearfix"><h4><span class="news_title"><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></span></h4>';						
							//news_all_top_html += '<div class="news_post clearfix"><h4><span class="news_date">' + publish_date_s + ': </span><span class="news_title"><a href="/news/' + la + '/' + selected[i].url + '">' + selected[i].title + '</a></span></h4>';						
						}

						if ( selected[i].post_to == "all-top-open"){
							news_all_top_html += '<p class="excerpt"><a href="/news/' + la + '/' + selected[i].url + '">' + excerpt_top_news + '</a></p>';
						}

						news_all_top_html += '</div> <!-- .news_post -->';						
					}

				} // for selected

				var latest_news_html = "";
				// latest news があれば
				if ( count > 0 ) {
					if ( la=="ja" ) {
						latest_news_html = '<h3 class="news"><a href="/news/ja/index.html?db=' + db + '" title="お知らせ一覧へ">Latest News</a></h3><div class="news_post_container announce db_top" >' + news_html + '</div>';
					} else {
						latest_news_html = '<h3 class="news"><a href="/news/en/index-e.html?db=' + db + '" title="Go to news archives.">Latest News</a></h3><div class="news_post_container announce db_top">' + news_html + '</div>';
					}
				}

				var latest_news_all_html = "";
				// 全ページ表示ニュースがあれば
				if ( news_all_html ) {
					if ( la=="ja" ) {				
						latest_news_all_html = '<div class="news_post_container announce post_all">' + news_all_html + '</div>';
					} else {
						latest_news_all_html = '<div class="news_post_container announce post_all">' + news_all_html + '</div>';
					}
				}

				var latest_news_all_top_html = "";
				// 全トップページ表示ニュースがあれば
				if ( news_all_top_html ) {
					if ( la=="ja" ) {
						latest_news_all_top_html = '<div class="news_post_container announce post_all">' + news_all_top_html + '</div>';
					} else {
						latest_news_all_top_html = '<div class="news_post_container announce post_all">' + news_all_top_html + '</div>';
					}
				}

				// センタートップページに latest news を挿入
				if ( top_news_list ){
					if ( filename=="index" && db=="top" ) {
						$("#news").prepend(top_news_list);
					}
				}

				// サービストップページに latest news を挿入
				if ( latest_news_html ){
					if ( filename=="index" && db_archives.indexOf(db) != -1 ) {
						$("#news_part").prepend(latest_news_html);
					}
				}

				// 全ページ表示ニュースを挿入
				if ( latest_news_all_html ){
					$("#page_main").prepend(latest_news_all_html);
				}

				// 全トップページ表示ニュースを挿入
				if ( latest_news_all_top_html && filename=="index" ){
					$("#page_main").prepend(latest_news_all_top_html);
				}

		}); // $.getJSON

	} // if news 
	
	/* 
	-------------------------------------------------------------------------------------------------------------------------------------------
		FAQ 
	-------------------------------------------------------------------------------------------------------------------------------------------
	*/

	// faq アーカイブ読み込み処理 faq + index
	var faq_json = "";
	if ( la=="ja" ) {
		faq_json = '/json/faq_ja.json';
	} else {
		faq_json = '/json/faq_en.json';
	}

	// パーセントエンコードをデコード
	keyword_select = decodeURI(keyword_select);

	if ( filename=="index" && db=="faq" ){		

		$.getJSON(faq_json, function(data){

				// 新しい順にソートし DB を限定した配列を作成
				var selected = [];

				for ( var i in data ){		

					if ( db_select ){

						if ( keyword_select ){
							if ( data[i].db.indexOf(db_select) != -1 && data[i].keyword.indexOf(keyword_select) != -1 ) {																		
								selected.push(data[i]);
							}
						} else {
							if ( data[i].db.indexOf(db_select) != -1 ) {											
								selected.push(data[i]);
							}
						}

					} else {					
						
						if ( keyword_select ){
							if ( data[i].keyword.indexOf(keyword_select) != -1 ) {																		
								selected.push(data[i]);
							}
						} else {
							selected.push(data[i]);
						}

					}
				}

				// 件数を取得
				var count = 0;
				count = selected.length;

				// html と目次 toc を組み立て
				var faq_html= '';			

				for ( var i in selected ) {
				
					// 日付処理
					var publish_date = "";
					var publish_date_s = "";

					// 日付が存在すれば Date オブジェクトに変換
					if (selected[i].publish_date) {
						publish_date = new Date(selected[i].publish_date);	
					}

					// faq 毎に html を組み立てる処理
					faq_html += '<div class="faq_section"><h3 id="' + selected[i].name + '"><a href="#' + selected[i].name + '" class="faq_title">' + selected[i].title + '</a></h3>';
					faq_html += '<div class="answer">' + selected[i].content + '</div> <!-- .answer -->';			

					// 日付を変換
					if ( publish_date ) { 
						publish_date_s = to_date(publish_date, la);
					}

					// db から service 名を取得、複数
					var service_html = "";
					var service_link_html = "";
					var service_link_htmls = [];
					var display_service_names = [];
					if ( selected[i].db.length > 0 ) {
						for ( var j in selected[i].db ){																
							if ( db_names.indexOf(selected[i].db[j]) != -1 && display_names[db_names.indexOf(selected[i].db[j])] ){						
								
								display_service_names.push(display_names[db_names.indexOf(selected[i].db[j])]);

								var db_query_url = "";
								
								// サービスでの faq 絞り込み検索リンク
								if ( arg.keyword ) {
									db_query_url = bare_url + "?db=" + selected[i].db[j] + "&keyword=" + arg.keyword;
								} else {
									db_query_url = bare_url + "?db=" + selected[i].db[j];
								}

								service_link_html = '<a href="' + db_query_url + '">' + display_names[db_names.indexOf(selected[i].db[j])] + '</a>';
								service_link_htmls.push(service_link_html);

							}							
						}

						if ( display_service_names.length > 0 ){
							if ( la=="ja" ) {
								service_html += '<span class="service">サービス: ' + service_link_htmls.join(", ") + '</span>';
							} else {
								service_html += '<span class="service">Services: ' + service_link_htmls.join(", ") + '</span>';
							}
						}

					}

					// キーワードを取得
					var keyword_html = "";
					var keyword_link_html = "";
					var keyword_link_htmls = [];					
					var keywords = [];
					if ( selected[i].keyword.length > 0 ) {
						for ( var k in selected[i].keyword ){															
								
								keywords.push(selected[i].keyword[k]);
								
								var keyword_query_url = "";
								
								// サービスでの news 絞り込み検索リンク
								if ( arg.db ) {
									keyword_query_url = bare_url + "?db=" + arg.db + "&keyword=" + selected[i].keyword[k];
								} else {
									keyword_query_url = bare_url + "?keyword=" + selected[i].keyword[k];
								}

								keyword_link_html = '<a href="' + keyword_query_url + '">' + selected[i].keyword[k] + '</a>';
								keyword_link_htmls.push(keyword_link_html);

						}	
						
						if ( keywords.length > 0 ) {
							if ( la=="ja" ) {
								keyword_html = '<div class="faq_category">キーワード: ' + keyword_link_htmls.join(", ") + '</div>';
							} else {
								keyword_html = '<div class="faq_category">Keywords: ' + keyword_link_htmls.join(", ") + '</div>';
							}
						}

					} else {
								
						if ( la=="ja" ) {

							keyword_html = '<div class="faq_category">キーワード: その他</div>';

						} else {
							
							if ( arg.db ) {
								keyword_query_url = bare_url + "?db=" + arg.db + "&keyword=Other";
							} else {
								keyword_query_url = bare_url + "?keyword=Other";
							}							

							keyword_html = '<div class="faq_category">Keywords: Other</div>';
						}
					}

					if ( la=="ja" ) {

						var url = "";
						if ( selected[i].url ) { url = '/faq/ja/' + selected[i].url;}

						// 作成日
						faq_html += '<div class="faq_attrs clearfix">' + service_html + keyword_html + '<div class="faq_date"><a href="' + url + '"<span class="published">作成日: ' + publish_date_s + '</span></a></div> <!-- .faq_date --></div> <!-- .faq_attrs --> </div> <!-- .faq_section -->';
						
						// faq 件数
						$("#faq .post_found").text('FAQ: ' + count + ' 件');

					} else {

						var url = "";
						if ( selected[i].url ) { url = '/faq/en/' + selected[i].url;}

						// 作成日
						faq_html += '<div class="faq_attrs clearfix">' + service_html + keyword_html + '<div class="faq_date"><a href="' + url + '"<span class="published">Created: ' + publish_date_s + '</span></a></div> <!-- .faq_date --></div> <!-- .faq_attrs --> </div> <!-- .faq_section -->';

						// faq 件数
						$("#faq .post_found").text('FAQ: ' + count);

					} // if la

				} // for selected

				$("#faq").append(faq_html);

				// anchor 指定時にページ内遷移
				if (anchor){
					$(document).scrollTop( $(anchor).offset().top ); 
				}				

				}); // $.getJSON

			// 各 DB の faq ページ
			} else if ( db_archives.indexOf(db) != -1 && filename=="faq" ) {

				$.getJSON(faq_json, function(data){

				// ソートするため現在の DB と言語に faq を限定した配列を作成
				var selected = [];
				for ( var i in data ){			
					if ( data[i].db.indexOf(db) != -1 ) {											
						selected.push(data[i]);
					}
				}

				// keyword が無い undefined faq はその他を付加
				for ( var i in selected ) {
					if ( !selected[i].keyword[0] ) {
						if (la=="ja") {
							selected[i].keyword = ["その他"];
						} else {
							selected[i].keyword = ["Other"];
						}
					} 
				}				

				// カテゴリーでソート
				selected.sort(function(a,b){
					if ( a.keyword[0] < b.keyword[0] ) return -1;
					if ( a.keyword[0] > b.keyword[0] ) return 1;
					return 0;
				});		

				// ソートされたカテゴリーの配列を作成
				var categories = [];
				var first_category = selected[0].keyword[0];
				
				categories.push(first_category);
				for ( var i in selected ) {						
					if ( selected[i].keyword[0]!=first_category ) {
						categories.push(selected[i].keyword[0]);
					} 
					first_category = selected[i].keyword[0];
				}

				// other を最後にもってくる
				index = -1;
				if (la=="ja") {
	
					index = categories.indexOf("その他");
	
					if (index > -1){
						categories.splice(index, 1);
						categories.push("その他");
					}

				} else {
					
					index = categories.indexOf("Other");

					if (index > -1){
						categories.splice(index, 1);
						categories.push("Other");
					}

				}

				// 件数を取得
				var count = 0;
				count = selected.length;

				// ソートしたカテゴリー毎に限定 faq 配列で html と目次を組み立て
				var faq_html = '';
				var toc = '';

				for ( var cati in categories ) {

					// faq カテゴリー毎に見出しをつける
					faq_html += '<section class="faq_cat"><h2 id="' + categories[cati] + '">' + categories[cati] + '</h2>';

					for ( var i in selected ) {
					
						if ( categories[cati]==selected[i].keyword[0] ) {

							// 日付処理
							var publish_date = "";
							var publish_date_s = "";

							if (selected[i].publish_date) {
								publish_date = new Date(selected[i].publish_date);	
							}
							
							// faq 毎に html を組み立てる処理
							faq_html += '<div class="faq_section"><h3 id="' + selected[i].name + '"><a href="#' + selected[i].name + '" class="faq_title">' + selected[i].title + '</a></h3>';
							faq_html += '<div class="answer">' + selected[i].content + '</div> <!-- .answer -->';			

							// 日付を変換
							if ( publish_date ) { 
								publish_date_s = to_date(publish_date, la);
							}

							if (la=="ja") {

								var url = "";
								if ( selected[i].url ) { url = '/faq/ja/' + selected[i].url;　}

								// 作成日
								faq_html += '<div class="faq_attrs clearfix"><div class="faq_date"><a href="' + url + '"><span class="published">作成日: ' + publish_date_s + '</span></a></div> <!-- .faq_date --></div> <!-- .faq_attrs --> </div> <!-- .faq_section -->';

							} else {

								var url = "";
								if ( selected[i].url ) { url = '/faq/en/' + selected[i].url;　}

								// 作成日
								faq_html += '<div class="faq_attrs clearfix"><div class="faq_date"><a href="' + url + '"<span class="published">Created: ' + publish_date_s + '</span></a></div> <!-- .faq_date --></div> <!-- .faq_attrs --> </div> <!-- .faq_section -->';

							} // if la

						} // if category

					} // for selected

					// faq カテゴリーセクションを閉じる
					faq_html += '</section>';

				} // for categories 			

				if (la=="ja") {
					$("#faq").prepend('<p class="post_found">FAQ: ' + count + ' 件' + '</p>');
				} else {
					$("#faq").prepend('<p class="post_found">FAQ: ' + count + '' + '</p>');
				}

				$("#faq").append(faq_html);

				// faq 目次
				var toc = '<div id="main_index"><ul class="faq">';
				var poc = $('<ul class="menu"></ul>');

				$("#faq .faq_cat").each(function(){

					var h2_id = $("h2", this).attr("id");
					var h2_text = $("h2", this).text();

					toc += '<li class="area"><a href="#' + h2_id + '">' + h2_text + '</a></li>';
					toc += '<ul>';	

					// カテゴリーのサイド目次
					poc.append($('<li><a href="#' + h2_id + '" class="toc_chapter">' + h2_text + '</a></li>'));

					$('.faq_section > h3', this).each(function(){
						var h3_id = $(this).attr("id");
						var h3_text = $(this).text();
						
						toc += '<li><a href="#' + h3_id + '">' + h3_text + '</a></li>';

					});
					
					toc += '</ul>';

				});
				
				toc += '</div> <!-- #main_index -->';

				$("#faq").before(toc);
				
				// 目次を挿入
				poc.addClass("single_book");
				if ( poc.children("li").length ) {
					$('#in_this_page').append(poc);
				}

			// anchor 指定時にページ内遷移
			if (anchor){				
				$(document).scrollTop( $(anchor).offset().top ); 
			}				

		}); // $.getJSON

	} // if faq json 読み込み

});

