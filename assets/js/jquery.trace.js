/*
 * jQuery by the DDBJ trace team.
 */

/* 検索ボックス */
/* http://www.buildinsider.net/web/jqueryref/028 */
$(function(){

  // URL、ファイルパス、ファイル名取得
  var url = window.location.href;
  var host = window.location.host;
  var pathname = window.location.pathname;
  var protocol = window.location.protocol;  

  var url_no_params = url.split("?")[0];

  // 言語判定
  var la = "ja";
  if ( pathname.match(/-e.html/) ) la = "en";

  // 404 page でリクエストされた URL を挿入
  $('<p class="requested_uri">' + url + '</p>').insertAfter('#not_found h3');

  // ページ読み込み時に検索ボックスに値がある場合は placeholder を削除
  $(document).ready( function(){

    // ブラウザーでバックされた場合の対応、検索ボックスに値が入力されている場合は背景を表示しない
    if( $("#search-text").val() ) {
      $("#search-text").attr('placeholder','');
      $("#search-text").css("background-image", "none");
      $("#search-text").css('text-indent','1px');   
    } 

    if( $("#search-text-faq").val() ) {
      $("#search-text-faq").attr('placeholder','');
      $("#search-text-faq").css("background-image", "none");
      $("#search-text-faq").css('text-indent','1px');   
    } 

    if( $("#search-text-news").val() ) {
      $("#search-text-news").attr('placeholder','');
      $("#search-text-news").css("background-image", "none");
      $("#search-text-news").css('text-indent','1px');    
    } 
  });

  /* 検索オプションプルダウン選択、検索ボックス入力で青い枠線 */
  $("#search-options")
    .focusin(function(e){
      $(this).parent("label").css("border", "1px solid #6597E9");
    })
    .focusout(function(e){
      $(this).parent("label").css("border", "0.5px solid #888");
    }); 

  $("#search-text, #search-text-news, #search-text-faq")
    .focusin(function(e){
      $(this).css("border", "1px solid #6597E9");
    })
    .focusout(function(e){
      $(this).css("border", "0.5px solid #888");
    }); 

  // 選択オプション値
  var selected = "web";

  /* 検索オプション選択で textindex と背景画像を変更 */
  $("#search-options").change(function(){

    selected = $("#search-options option:selected").val();

    // 検索ボックスに値が入力されていない場合
    if( !$("#search-text").val() ) {  
      if(selected=="ddbj"){
        $("#search-text").attr("placeholder", "Enter accessions or keywords");
        $("#search-text").css("background-image", "none");
        $("#search-text").css("text-indent", "1px");
      } else if(selected=="dra"){
        $("#search-text").attr("placeholder", "Enter accessions or keywords");
        $("#search-text").css("background-image", "none");
        $("#search-text").css("text-indent", "1px");
      } else {
        $("#search-text").attr("placeholder", "カスタム検索");
        $("#search-text").css("background", "url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png) left center no-repeat");
        $("#search-text").css("text-indent", "48px");
      }   
    } 

  });

  /* place holder focus で削除 */
  $("#search-text").focus(function(){
    
    $(this).attr('placeholder','');
    $(this).css("background-image", "none");
    $(this).css('text-indent','1px');

  }).blur(function(){
  
    selected = $("#search-options option:selected").val();

    if( !$(this).val() ) {
      if(selected=="ddbj"){
        $(this).attr("placeholder", "Enter accessions or keywords");
        $(this).css("background-image", "none");
        $(this).css("text-indent", "1px");
      } else if(selected=="dra"){
        $(this).attr("placeholder", "Enter accessions or keywords");
        $(this).css("background-image", "none");
        $(this).css("text-indent", "1px");
      } else {
        $(this).attr("placeholder", "カスタム検索");    
        $(this).css("background", "url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png) left center no-repeat");
        $(this).css("text-indent", "48px");
      }
    }

  });

  /* 検索オプションで切り替え */
  $("#search-btn").click(function(){

    var keyword = $("#search-text").val();
    keyword = jQuery.trim(keyword);

    selected = $("#search-options option:selected").val();
      
    var action = "https://www.google.com/cse";
      
    if(la=="ja"){
      
      // ARSA
      if(selected=="ddbj"){
        $("#cse-search-box").attr("action", "http://ddbj.nig.ac.jp/arsa/search");
        // 全ての input を不活化してパラメータに含まれないようにする
        $("#cse-search-box input").attr("disabled", true);
        // ARSA 用パラメータを生成
        var parameters = $('<input type="hidden" name="lang" value="ja"><input type="hidden" name="cond" value="quick_search"><input type="hidden" name="operator" value="AND"><input type="hidden" name="query" value="' + keyword + '">');
        $("#cse-search-box").append($(parameters));
          // DRASearch
          } else if(selected=="dra"){
            $("#cse-search-box").attr("action", "http://ddbj.nig.ac.jp/DRASearch/query");
            // 全ての input を不活化してパラメータに含まれないようにする
            $("#cse-search-box input").attr("disabled", true);
            // パラメータを生成
            var parameters = $('<input type="hidden" name="keyword" value="' + keyword + '"><input type="hidden" name="show" value="20">');
        $("#cse-search-box").append($(parameters));
      }
    
    } else {

      // ARSA
      if(selected=="ddbj"){
        $("#cse-search-box").attr("action", "http://ddbj.nig.ac.jp/arsa/search");
        // 全ての input を不活化してパラメータに含まれないようにする
        $("#cse-search-box input").attr("disabled", true);
        // ARSA 用パラメータを生成
        var parameters = $('<input type="hidden" name="lang" value="en"><input type="hidden" name="cond" value="quick_search"><input type="hidden" name="operator" value="AND"><input type="hidden" name="query" value="' + keyword + '">');
        $("#cse-search-box").append($(parameters));
          // DRASearch
          } else if(selected=="dra"){
            $("#cse-search-box").attr("action", "http://ddbj.nig.ac.jp/DRASearch/query");
            // 全ての input を不活化してパラメータに含まれないようにする
            $("#cse-search-box input").attr("disabled", true);
            // パラメータを生成
            var parameters = $('<input type="hidden" name="keyword" value="' + keyword + '"><input type="hidden" name="show" value="20">');
        $("#cse-search-box").append($(parameters));
      } 
    
    }

    $("#cse-search-box").submit();

  }); // $("#search-btn").click(function(){
    

  /*
    news faq の個別ページ Google カスタム検索
  */
  $("#search-text-news").focus(function(){    
    $(this).attr('placeholder','');
    $(this).css("background-image", "none");
    $(this).css('text-indent','1px');
  }).blur(function(){
    // 検索ボックスに値が入力されていない場合
    if( !$(this).val() ) {
      $(this).attr("placeholder", "News カスタム検索");   
      $(this).css("background", "url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png) left center no-repeat");
      $(this).css("text-indent", "48px");
    } 
  });

  $("#search-text-faq").focus(function(){   
    $(this).attr('placeholder','');
    $(this).css("background-image", "none");
    $(this).css('text-indent','1px');
  }).blur(function(){
    // 検索ボックスに値が入力されていない場合
    if( !$(this).val() ) {
      $(this).attr("placeholder", "FAQ カスタム検索");    
      $(this).css("background", "url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png) left center no-repeat");
      $(this).css("text-indent", "48px");
    } 
  });

});

/* handbook 以外でページサイド目次を作成 */
$(function() {

  // URL、ファイルパス、ファイル名取得
  var url = window.location.href;

  // text() から子要素を除外 https://stackoverflow.com/questions/11347779/jquery-exclude-children-from-text
  $.fn.ignore = function(sel){
    return this.clone().find(sel||">*").remove().end();
  };

  // 単純に h1 は一つであり h2 を取得する
  var poc = $('<ul class="menu"></ul>');

  // features qualifiers では h2 の代わりに keys を取得
  var pathname = window.location.pathname;
  var filepath = pathname.replace("-e.html", "").replace(".html", "");
  
  var in_this_page_target = "";
  if ( filepath == "/ddbj/features" || filepath == "/ddbj/qualifiers" ) {
    in_this_page_target = $(".keys dt").ignore("span a");
  } else {
    in_this_page_target = $("article[id!=article] h2");
  }

  in_this_page_target.each(function(i){
    
    // id があればそれを使う、なければテキストを加工して使う
    var h2_id = "";
    if ( $(this).attr("id") ){
      h2_id = $(this).attr("id");
    } else {
      h2_id = $(this).text().replace(/ |:/g, "_").replace(/\(|\)/g, "");
      h2_id = jQuery.trim(h2_id);
      $(this).attr("id", h2_id);
    }
        
    var h2_text = $(this).text();
          
    poc.append($('<li><a href="#' + h2_id + '" class="toc_chapter">' + h2_text + '</a></li>'));
      
  }); // h2 each

  poc.addClass("single_book");
  
  // 目次を挿入
  if ( poc.children("li").length ) {
    $('#in_this_page').append(poc);

    // fq keys の場合のみ in this page の見出しを変更
    if ( filepath == "/ddbj/features" ) {
      $('#in_this_page > h2').text("Feature keys");     
    } else if ( filepath == "/ddbj/qualifiers" ) {
      $('#in_this_page > h2').text("Qualifier keys");     
    } 

  }

  // 要素が無ければ非表示、faq、biosample rules は非同期で json を読み込んでいるため除外
  if( $(".page-noside:not('.page-faq') #in_this_page ul").length == 0 && !filepath.match(/validation/) && filepath != "/ddbj/validator"){
    $(".side_nav_menu.handbook_contents.page-noside:not('.page-faq')").hide();
  }

  /* 
    論文リスト年表示切替
  */
  // デフォルトは最新以外非表示
  $("#pub-list.switch h2:not(:first)").hide();
  $("#pub-list.switch > ul:not(:first), #pub-list.switch > div:not(:first)").hide();    

  // jump はせずに anchor 指定セクションを表示
  function show_pub_list_section(selected_id){    

    if ( selected_id=="all" ){

      $("#pub-list.switch > h2[id!=all]").show();
      $("#pub-list.switch > h2[id!=all]").next("ul,div").show();

    // all 以外、年毎のページで id 指定を可能にするために yyyy-ft のような id 指定に対応
    } else {

      var year_id = "";
      // id 形式は \d+.* を要求
      if ( selected_id.match(/(\d+).*/) ){
        
        year_id = RegExp.$1;

        $("#pub-list.switch > h2[id!=" + year_id + "]").hide();
        $("#pub-list.switch > h2[id!=" + year_id + "] ").next("ul,div").hide();       

        $("#pub-list.switch > h2#" + year_id).show();
        $("#pub-list.switch > h2#" + year_id).next("ul,div").show();

      } else {
        
        // デフォルトは最新以外非表示
        $("#pub-list.switch h2:not(:first)").hide();
        $("#pub-list.switch > ul:not(:first), #pub-list.switch > div:not(:first)").hide();    
        
      }

    }
  }

  // 活動リストの表示がスイッチ形式の場合
  if ( $("#pub-list").hasClass("switch") ){

    // 読み込み時に url で id 指定されている場合はその年を表示、指定無い場合一番最初が表示される
    var id_in_url = "";
    if( url.indexOf("#") != -1 ){
      id_in_url = url.substring(url.indexOf("#") + 1);
      show_pub_list_section(id_in_url);
    }
    $("a").click(function(e){   
    //$("#in_this_page a").click(function(e){   
      if ( $(this).attr("href").match(/#(\d{4})/) || $(this).attr("href").match(/icm-reports.*html#(\d{4})/) ){
        var selected_id = RegExp.$1;  
        //var selected_id = $(this).attr("href").replace("#", "");  
        // jump はせずに anchor 指定セクションを表示
        //e.preventDefault();
        location.hash = '#' + selected_id;      
        show_pub_list_section(selected_id);
      } else {

      }
      

    }); 
  }

});


$(function(){
  
  var pathname = window.location.pathname;

  // index ページでは表示しない
  if ( !pathname.match(/index/) ){

    /* スクロール 表示と位置 */
    $("#page_main").append('<div id="back-top">^</div>');

    $("#back-top").click(function(){
      $('body, html').animate({
        scrollTop: 0
      }, 700);
      return false;
    }); 

    $(window).scroll(function () {
      
      if($(this).scrollTop() > 120) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }

      var footer_top = $("footer").offset().top;
      if((footer_top - $("#back-top").offset().top) < 40){
        $("#back-top").addClass("bottom");
      } else {
        $("#back-top").removeClass("bottom");
      }

      /* side navigation fix 処理 */
      if ($("#side_navigation").length){
        if((footer_top - $("#side_navigation").offset().top) < $("#side_navigation").height()){
          $("#side_navigation").addClass("bottom");
        } else {
          $("#side_navigation").removeClass("bottom");
        }
        
        if($(this).scrollTop() > 180) {
          $("#side_navigation").addClass("fixed");
        } else {
          $("#side_navigation").removeClass("fixed");
        }
      }

    });

    var w = $("#primary").width();
    var l = $("#primary").offset().left;
    if ($("#side_navigation").length){
      $("#side_navigation").css("left", w + l + "px");
    }

    $(window).resize(function(){
      w = $("#primary").width();
      l = $("#primary").offset().left;
      
      if ($("#side_navigation").length){
        $("#side_navigation").css("left", w + l + "px");
      }
    });

  } // if not index

  // page-template-page-doc, page-template-page で PDF リンクを挿入
  var pdf_path = "";
  pdf_path = pathname.replace(".html", ".pdf");
  if ( !$("#pdf_link").length ){
    
    // DB ページのみ、faq index about 除外
    if ( pathname.match(/\/ddbj\/|\/dra\/|\/dta\/|\/gea\/|\/bioproject\/|\/biosample\/|\/jvar-snp\/|\/jvar-sv\/|\/jga\/|\/agd\//) && !pathname.match(/about|index|faq|sitemap|validation|validator|contact|features|qualifiers/) ){
      $('<a id="pdf_link" class="clearfix" title="View this page in PDF" href="/pdf' + pdf_path + '"><img src="/images/parts/pdf.png" alt="*"></a>').insertAfter(".page-template-page #page_main header h1:first-child, .page-template-page_jga #page_main header h1:first-child");
    }

  }

  /* 
    サイドメニューがブラウザーウィンドウから上下にはみ出した場合にスクロールバーを付加
  */

  // 位置変更イベントで上下にはみ出している場合は scroll bar を付加
  function addScrollbar(){

    // 上にはみ出している距離　はみだしている = 正の値 (window top y) - (side nav top y)
    var top_diff = $(window).scrollTop() - $("#side_navigation").offset().top;
    // 下にはみ出している距離　はみだしている = 正の値  (side nav bottom y) - (window bottom y)
    var bottom_diff = ( $("#side_navigation").offset().top + $("#side_navigation").height() ) - ( $(window).scrollTop() + $(window).height() );

    // 上にのみはみ出している場合
    if ( top_diff > 0 && bottom_diff < 0 ){
      // height をオリジナルからはみ出している分短く、overflow を scroll に      
      $("#side_navigation").css("height", ( $("#side_navigation").height() - top_diff ) + "px");
      $("#side_navigation").css("overflow-y", "scroll");
    // 下にのみはみ出している場合
    } else if ( top_diff < 0 && bottom_diff > 0 ) {
      // height をオリジナルからはみ出している分短く、overflow を scroll に      
      $("#side_navigation").css("height", ( $("#side_navigation").height() - bottom_diff ) + "px");
      $("#side_navigation").css("overflow-y", "scroll");
    // 両方にのみはみ出している場合
    } else if ( top_diff > 0 && bottom_diff > 0 ) {
      // height をオリジナルからはみ出している分短く、overflow を scroll に      
      $("#side_navigation").css("height", ( $("#side_navigation").height() - top_diff - bottom_diff ) + "px");
      $("#side_navigation").css("overflow-y", "scroll");    
    // はみ出していない場合
    } else {
      $("#side_navigation").css("height", "auto");
      $("#side_navigation").css("overflow-y", "visible");
    }

  }
  
  // 位置変更イベントで上下にはみ出しているか計算
  if ( $("#side_navigation").length ){
    $(window).on("load", addScrollbar);
  }

  // scroll 設定秒数経過でイベント終了
  var stime;
  var stimeout = false;
  var sdelta = 100;
  $(window).scroll(function() {
      stime = new Date();
      if (stimeout === false) {
          stimeout = true;
          setTimeout(scrollend, sdelta);
      }
  });

  function scrollend() {
      if (new Date() - stime < sdelta) {
          setTimeout(scrollend, sdelta);
      } else {
          stimeout = false;
          addScrollbar;
      }               
  }

  // resize 設定秒数経過でイベント終了
  var rtime;
  var timeout = false;
  var delta = 100;
  $(window).resize(function() {
      rtime = new Date();
      if (timeout === false) {
          timeout = true;
          setTimeout(resizeend, delta);
      }
  });

  function resizeend() {
      if (new Date() - rtime < delta) {
          setTimeout(resizeend, delta);
      } else {
          timeout = false;
          addScrollbar;
      }               
  }

});
/* お知らせ内容の開閉 */
$(function(){
  
  if( $(".announce .news_content").css("display")=="block" ){
    $(".announce .news_content").not(".otherpage").before('<a href="javascript:void(0);" class="moreless">less...</a>');
  } else {
    $(".announce .news_content").not(".otherpage").before('<a href="javascript:void(0);" class="moreless">more...</a>');
  }
  
  $(".announce a.moreless").click(function(){
    if($("+div", this).css("display")=="none"){
      $("+div", this).show();
      $(this).text("less...");
    } else if($("+div", this).css("display")=="block"){
      $("+div", this).hide();
      $(this).text("more...");
    }
    return false;
  });
});


/* お知らせの年別アーカイブ */
$(function(){

  /* 親ユーティリティメニューに矢印 */
  $("#utility_nav .menu-parent-item > a").append('<span><svg class="svg-triangle utility-menu"><polygon points="0,0 4,4 8,0"></svg></span>');
  
  /* 親グローバルメニューに矢印 */
  $("#access .menu-parent-item > a").append('<span><svg class="svg-triangle global-menu"><polygon points="0,0 5,6 10,0"></svg></span>');

});

/* ドロップダウンメニュー */
$(function(){

  var config = {
    over: showDropdown,
    out: hideDropdown,
    timeout: 500
  };

  $("#top_nav_left ul li").hoverIntent(config);
  $("#access ul li").hoverIntent(config);
  $("#utility_nav ul li").hoverIntent(config);
  
  function showDropdown(){
    if($(this).children("ul").css("display")=="none"){
      $(this).children("ul").show();
    }
  };
  
  function hideDropdown(){
    if($(this).children("ul").css("display")=="block"){
      $(this).children("ul").hide();
    }
  };
});

/* 画像ビュー 
$(function(){
  if($.isFunction($.fn.colorbox)){
   
    // 画像ポップアップ
    $("figure a").attr("rel", "colorbox-group");
    $("figure a").colorbox({maxWidth:"80%", maxHeight:"80%", close: closeText});

    // youtube ポップアップ
    $("a.youtube_figure").colorbox({iframe:true, innerWidth:"80%", innerHeight:"80%", close: closeText});
  }
});*/

/* サンプル属性 */
$(function(){

  // BioSample 属性ページ限定
  var pathname = window.location.pathname;
  var hash = window.location.hash;
  var filepath = pathname.replace("-e.html", "").replace(".html", "");

  if ( filepath == "/biosample/attribute" ) {
    $(document).ready(function(){
      $("#all").trigger('click');
    });  
  }

  examples = {
    "All" : [["All"],["1811256482"],[]],
    "Generic" : [["Generic"],["1439451015"],[]],
    "MIMS.me.host-associated" : [["MIMS.me.host-associated"],["1004692144"],[]],
    "MIMS.me.human-gut" : [["MIMS.me.human-gut"],["915839688"],[]],
    "MIMS.me.miscellaneous" : [["MIMS.me.miscellaneous"],["1128132322"],[]],
    "MIMS.me.soil" : [["MIMS.me.soil"],["1794922193"],[]],
    "MIMS.me.water" : [["MIMS.me.water"],["2027136500"],[]],
    "MIGS.ba" : [["MIGS.ba"],["813250793"],[]],
    "MIGS.ba.human-gut" : [["MIGS.ba.human-gut"],["1434503047"],[]],
    "MIGS.ba.soil" : [["MIGS.ba.soil"],["89670053"],[]],
    "MIGS.ba.wastewater" : [["MIGS.ba.wastewater"],["761155515"],[]],
    "MIGS.eu" : [["MIGS.eu"],["1974833585"],[]],
    "MIGS.eu.plant-associated" : [["MIGS.eu.plant-associated"],["367588972"],[]],
    "MIGS.vi.human-associated" : [["MIGS.vi.human-associated"],["1705943128"],[]],
    "MIGS.vi.human-oral" : [["MIGS.vi.human-oral"],[0],["SAMD00000001"]],
    "MIGS.vi.human-skin" : [["MIGS.vi.human-skin"],[60278156],["SAMN02904796"]],
    "MIMARKS.specimen" : [["MIMARKS.specimen"],["1705943128"],[]],
    "MIMARKS.survey.host-associated" : [["MIMARKS.survey.host-associated"],["644400814"],[]],
    "MIMARKS.survey.human-associated" : [["MIMARKS.survey.human-associated"],["1788731819"],[]],
    "MIMARKS.survey.microbial" : [["MIMARKS.survey.microbial"],["1272690562"],[]],
    "MIMARKS.survey.plant-associated" : [["MIMARKS.survey.plant-associated"],["755378768"],[]],
    "MIMARKS.survey.sediment" : [["MIMARKS.survey.sediment"],["1011687082"],[]]
  }

  package_tsv = {
    "Beta-lactamase":"https://drive.google.com/u/4/uc?id=1y5WhGXrdwc_o0XWxrEqCjs2zzZaoO5fa&export=download",
    "Human":"https://drive.google.com/u/4/uc?id=1wS2kgkosAHe0RyWHALgNZvydut6iWsZP&export=download",
    "Invertebrate":"https://drive.google.com/u/4/uc?id=1fsdehlfobBH1C9lL91ZPaIwDe_HcSA7v&export=download",
    "Metagenome.environmental":"https://drive.google.com/u/4/uc?id=1s5OGdgK_tRU5Wv0Q5ofqeU_efFnDxZjx&export=download",
    "Microbe":"https://drive.google.com/u/4/uc?id=1u2m6vpWnGS3SKODvpL_7fTiGNassYHED&export=download",
    "MIGS.ba":"https://drive.google.com/u/4/uc?id=1FkycD5oWHKhq6_VYQceSDrVeYG8wWWrx&export=download",
    "MIGS.ba.air":"https://drive.google.com/u/4/uc?id=1r910K3yobc7hUuxzCRXRGbuQZFJU0inA&export=download",
    "MIGS.ba.built":"https://drive.google.com/u/4/uc?id=1co_R_483151J3_b9wguTnwiRFNcXK-1d&export=download",
    "MIGS.ba.host-associated":"https://drive.google.com/u/4/uc?id=1cwG8_8jJ20CCnXTnncUM39K2WtVAFor8&export=download",
    "MIGS.ba.human-associated":"https://drive.google.com/u/4/uc?id=1xP1iqDIzNK-APn59yS4QS8j2_1hJpLAK&export=download",
    "MIGS.ba.human-gut":"https://drive.google.com/u/4/uc?id=1RxnQfwANH6kp0iGAz04qh3NcJPfdH_g-&export=download",
    "MIGS.ba.human-oral":"https://drive.google.com/u/4/uc?id=1V7RdHjJepao7FgJWzhab-Pa0uUcQCCy8&export=download",
    "MIGS.ba.human-skin":"https://drive.google.com/u/4/uc?id=1nbInUWkfoNth1P1HlnNGhPmhwszQrnEM&export=download",
    "MIGS.ba.human-vaginal":"https://drive.google.com/u/4/uc?id=1eFKNJPn6lUp63F-f6bw934tMUrxeAcav&export=download",
    "MIGS.ba.microbial":"https://drive.google.com/u/4/uc?id=1ErTiTzCSfofAXOQLOpCEpEeot_CR_B28&export=download",
    "MIGS.ba.miscellaneous":"https://drive.google.com/u/4/uc?id=1pflkLHRz0x6GOWTpImDy1_umBYRUy-81&export=download",
    "MIGS.ba.plant-associated":"https://drive.google.com/u/4/uc?id=19enwqJ1p0VgNhNnVnOVHj1xcm2CSmPUq&export=download",
    "MIGS.ba.sediment":"https://drive.google.com/u/4/uc?id=1FGEZpboK6hVabFIdF1x5VewAvi43Kp1k&export=download",
    "MIGS.ba.soil":"https://drive.google.com/u/4/uc?id=1CYgMLOBAh_rfmzu9WJes-_H6tix-4mt_&export=download",
    "MIGS.ba.wastewater":"https://drive.google.com/u/4/uc?id=1hNd61iOV8R8hdlRoIaivaj_S3XjJJ8FN&export=download",
    "MIGS.ba.water":"https://drive.google.com/u/4/uc?id=151mxS3RnslNiIUfVzGYFAmwEKKFHmtrO&export=download",
    "MIGS.eu":"https://drive.google.com/u/4/uc?id=1VgcOcRd6zwbkRPxp_ImO7JnKe1u1dN8H&export=download",
    "MIGS.eu.air":"https://drive.google.com/u/4/uc?id=1CDDCcv_SlD1HUQOyS9elsxhm39MJgpNJ&export=download",
    "MIGS.eu.built":"https://drive.google.com/u/4/uc?id=1N8EePpvpP0irWABhgSOOSppB8rRXeFfd&export=download",
    "MIGS.eu.host-associated":"https://drive.google.com/u/4/uc?id=1L6j4WCEe51_jtqmYpsjs8kSlG7nCkPn-&export=download",
    "MIGS.eu.human-associated":"https://drive.google.com/u/4/uc?id=1l1Gt4mw83Ww5TObP52YQddfhRpiZaumL&export=download",
    "MIGS.eu.human-gut":"https://drive.google.com/u/4/uc?id=1BWvOXFmnB1ugw39qOLMaWuqmnJcQwy0D&export=download",
    "MIGS.eu.human-oral":"https://drive.google.com/u/4/uc?id=1gEPhOBfP611UXjdkkgKAnk8wFVxpiUIY&export=download",
    "MIGS.eu.human-skin":"https://drive.google.com/u/4/uc?id=1_K73sLEzLiXkSOjH-Reg_RPA3_ncLXjM&export=download",
    "MIGS.eu.human-vaginal":"https://drive.google.com/u/4/uc?id=1fs1bhbtZfOyxkuUp1I8nNVLs2qzfKlan&export=download",
    "MIGS.eu.microbial":"https://drive.google.com/u/4/uc?id=1xXkmr8qZ5o1NKnahmbv-LhMry51P0Lch&export=download",
    "MIGS.eu.miscellaneous":"https://drive.google.com/u/4/uc?id=1rvrj6kqLlsWGekBTT4x2paUmurseUKyR&export=download",
    "MIGS.eu.plant-associated":"https://drive.google.com/u/4/uc?id=1w_COI_Ja39v_mV92W2icmrGesLdH0Bnk&export=download",
    "MIGS.eu.sediment":"https://drive.google.com/u/4/uc?id=1OWhPxlDUPla7yliavcHGvJrOfXsVaL6E&export=download",
    "MIGS.eu.soil":"https://drive.google.com/u/4/uc?id=1wFN0n4HVU_YzYJ7FZsaTqcWMTPb9Cx_x&export=download",
    "MIGS.eu.wastewater":"https://drive.google.com/u/4/uc?id=1Hsx03KOl1a9EhdKzAYcwgP4Qc_num0ua&export=download",
    "MIGS.eu.water":"https://drive.google.com/u/4/uc?id=1JE4c-T2yKzlvqnrHGWZBekWonn9jSOGf&export=download",
    "MIGS.vi":"https://drive.google.com/u/4/uc?id=1Rvjg5bPxgWyrnAzn1PxfUPdt7u7bhbEP&export=download",
    "MIGS.vi.air":"https://drive.google.com/u/4/uc?id=1nePfx9UnNzYMhgs9Ta4BBPsQnNdFYZpV&export=download",
    "MIGS.vi.built":"https://drive.google.com/u/4/uc?id=1uDzV_ZmW4PHvnJilmKJ66T7-4xekeE0V&export=download",
    "MIGS.vi.host-associated":"https://drive.google.com/u/4/uc?id=1GVJTDYKsgr53PJ2xI6sWNsGsnAiFbe1_&export=download",
    "MIGS.vi.human-associated":"https://drive.google.com/u/4/uc?id=1wUht67IW99VUP4-fg7cWW4PZ2xu5IE2K&export=download",
    "MIGS.vi.human-gut":"https://drive.google.com/u/4/uc?id=1cDyULp_yCmaF0E_yxo56ecbpkYp2FkoX&export=download",
    "MIGS.vi.human-oral":"https://drive.google.com/u/4/uc?id=1gIDmT9gq-apBOWyoeK886d0QrlgOltNE&export=download",
    "MIGS.vi.human-skin":"https://drive.google.com/u/4/uc?id=1txkWgo6bfT4pE1xF9rkZgNreLq1ifjn2&export=download",
    "MIGS.vi.human-vaginal":"https://drive.google.com/u/4/uc?id=18E1qyPwGTgreobfIH-PACNuKtwC_UaMs&export=download",
    "MIGS.vi.microbial":"https://drive.google.com/u/4/uc?id=1X6uuRfsyCpIViKqnBUDYtnWbKiuzLBHX&export=download",
    "MIGS.vi.miscellaneous":"https://drive.google.com/u/4/uc?id=1soX1Frq-p110CfShP4UGPQlRWN17M7Wn&export=download",
    "MIGS.vi.plant-associated":"https://drive.google.com/u/4/uc?id=1W6zSLar8rtrY8KxAVjcJpY7EyH1iZSeE&export=download",
    "MIGS.vi.sediment":"https://drive.google.com/u/4/uc?id=17MhUjQzlxfJOA0uwuWDt8zU1RNDnO-nt&export=download",
    "MIGS.vi.soil":"https://drive.google.com/u/4/uc?id=1F4-wllvmqkn986LRzKOhVEJUMtpyzKfx&export=download",
    "MIGS.vi.wastewater":"https://drive.google.com/u/4/uc?id=1CyTYktt28xo18NY14JwV0l4LlEm0mPhB&export=download",
    "MIGS.vi.water":"https://drive.google.com/u/4/uc?id=1-eNPgTghcyQkRl3kGAqrpkJw8wiwzr36&export=download",
    "MIMAG":"https://drive.google.com/u/4/uc?id=1ifWukxaEy0IMd1U_lOWKb4-PaJh8XI27&export=download",
    "MIMAG.air":"https://drive.google.com/u/4/uc?id=1RKZiu6d7EHmIkguh_1qtlygw3ZXFBniX&export=download",
    "MIMAG.built":"https://drive.google.com/u/4/uc?id=1NGrgW_Brggv8XFqtl0POBeWR7uXMkmjT&export=download",
    "MIMAG.host-associated":"https://drive.google.com/u/4/uc?id=1ukYJ3bPYFdqY21Dg3J4eO-cZ0J4IUSTW&export=download",
    "MIMAG.human-associated":"https://drive.google.com/u/4/uc?id=1mZ5S-Wpj3Qn3QgrG353QEAI3Awon1rff&export=download",
    "MIMAG.human-gut":"https://drive.google.com/u/4/uc?id=1jr4xbqg806_rn5rRWSsoCYBvKjF7G0WG&export=download",
    "MIMAG.human-oral":"https://drive.google.com/u/4/uc?id=1yHrd4MKy2Umo1q4RCDEmK2W27H-zXnJR&export=download",
    "MIMAG.human-skin":"https://drive.google.com/u/4/uc?id=1nEVFD_lMdVFNUvcgow_yYLYI_K6S3mX0&export=download",
    "MIMAG.human-vaginal":"https://drive.google.com/u/4/uc?id=1jPDbddWCsNVXoSkylUmUWbawp3eI_h1z&export=download",
    "MIMAG.microbial":"https://drive.google.com/u/4/uc?id=1_ZzBH9nid0kFUn3boT7mRr9QH5PTFOHZ&export=download",
    "MIMAG.miscellaneous":"https://drive.google.com/u/4/uc?id=19x4wwGoYyg-niWJKfHL5_m4FUTDjGxnW&export=download",
    "MIMAG.plant-associated":"https://drive.google.com/u/4/uc?id=1jpOnIDRsGvwX2N7HYKTwHKjmfLmMtLlR&export=download",
    "MIMAG.sediment":"https://drive.google.com/u/4/uc?id=1vAsBDD3ia6uabhptaHduSVKN1LcwRaaC&export=download",
    "MIMAG.soil":"https://drive.google.com/u/4/uc?id=1vaFVQa_D7dxs4F_YMv8BgNWCiVXi_KHB&export=download",
    "MIMAG.wastewater":"https://drive.google.com/u/4/uc?id=1UD1bJFMf_TmgRjyiUvO7aULqPL0SQl6J&export=download",
    "MIMAG.water":"https://drive.google.com/u/4/uc?id=1z5LYcWgABOL6DMm7Vz2jGhKaxXfAU9Ci&export=download",
    "MIMARKS.specimen":"https://drive.google.com/u/4/uc?id=1AI70Och-Wr1kRztvQ0hVBHcAdYZUy8x7&export=download",
    "MIMARKS.specimen.air":"https://drive.google.com/u/4/uc?id=1SKI_1SnRL9VtA2EznK3CiBm61DPm6_fx&export=download",
    "MIMARKS.specimen.built":"https://drive.google.com/u/4/uc?id=1cCW0WJe1vTTkfzEEsdtR1mRK4-4v9ZGA&export=download",
    "MIMARKS.specimen.host-associated":"https://drive.google.com/u/4/uc?id=1m3WXKZTl7wTVgVifKxARSGWhEPKZsEoV&export=download",
    "MIMARKS.specimen.human-associated":"https://drive.google.com/u/4/uc?id=1ElH-2peiRY6thb_15MBUqT4dJHknNS67&export=download",
    "MIMARKS.specimen.human-gut":"https://drive.google.com/u/4/uc?id=1mq2O_rFDG702fuJ2VL6o4zseCAZ4TgNi&export=download",
    "MIMARKS.specimen.human-oral":"https://drive.google.com/u/4/uc?id=1EGyjvTK1J7RyCd60SRZEXoecM7AgNOmp&export=download",
    "MIMARKS.specimen.human-skin":"https://drive.google.com/u/4/uc?id=15eYGiaqdVwU9VJFcAtTFNK87i9Dq99s2&export=download",
    "MIMARKS.specimen.human-vaginal":"https://drive.google.com/u/4/uc?id=1R01QcNatpPHBHo53s8G6kxrVyjiqRFVx&export=download",
    "MIMARKS.specimen.microbial":"https://drive.google.com/u/4/uc?id=1iRg7UdsToniP-wkiJkUDrrirUVRiBcc0&export=download",
    "MIMARKS.specimen.miscellaneous":"https://drive.google.com/u/4/uc?id=18G7-CMgFenpaqT8jasY-YfyrGd907S-X&export=download",
    "MIMARKS.specimen.plant-associated":"https://drive.google.com/u/4/uc?id=1sGpeVA0iWNB0w3kiW3xBKZdAzNhOSfSg&export=download",
    "MIMARKS.specimen.sediment":"https://drive.google.com/u/4/uc?id=1-6knC_L-M8MyfKLc16pobUOEXXQnLXfS&export=download",
    "MIMARKS.specimen.soil":"https://drive.google.com/u/4/uc?id=1ZohWEHSf6VIqlYPMZ6xfmVwXlvqZfCun&export=download",
    "MIMARKS.specimen.wastewater":"https://drive.google.com/u/4/uc?id=18-gcpR9HW1lI9lPMsVumRvHtAS6seivq&export=download",
    "MIMARKS.specimen.water":"https://drive.google.com/u/4/uc?id=1Nx4kuQPqrb6sda7JVccZEmd1D3AHdqfr&export=download",
    "MIMARKS.survey.air":"https://drive.google.com/u/4/uc?id=1Z_-8-uBCKto0bf7acyoH-sUwob-W8F_O&export=download",
    "MIMARKS.survey.built":"https://drive.google.com/u/4/uc?id=1REhpa34pfM0MkPc2IIX2YgGml7BZCpZ1&export=download",
    "MIMARKS.survey.host-associated":"https://drive.google.com/u/4/uc?id=1jZ9nnO11a1DINVQ0OopLDWnMHjwSwtli&export=download",
    "MIMARKS.survey.human-associated":"https://drive.google.com/u/4/uc?id=1mfFG9rW8IUju51C7TmZWvBtOjWBe68F9&export=download",
    "MIMARKS.survey.human-gut":"https://drive.google.com/u/4/uc?id=168DvV20yUyxC9w50Yg9C5pS_jh1GtIab&export=download",
    "MIMARKS.survey.human-oral":"https://drive.google.com/u/4/uc?id=1TNPMqKJx8t7lAsQdMiXjic2iO32ZKLLj&export=download",
    "MIMARKS.survey.human-skin":"https://drive.google.com/u/4/uc?id=1SmL3Cw-SeBvqia2ioac8Xj9JCX6PndlE&export=download",
    "MIMARKS.survey.human-vaginal":"https://drive.google.com/u/4/uc?id=19QBU62sVbNBSpWrOv9yd4qtTC6JmW44U&export=download",
    "MIMARKS.survey.microbial":"https://drive.google.com/u/4/uc?id=1p4UdZTJygzdgDsdcVkxoLnxuUQxgsJnX&export=download",
    "MIMARKS.survey.miscellaneous":"https://drive.google.com/u/4/uc?id=1iTu-WspYnrTiiYxMDYn079KVNPyVUSro&export=download",
    "MIMARKS.survey.plant-associated":"https://drive.google.com/u/4/uc?id=1hoPLa4leK63g879_8hl9IcJFk4Ndzxtp&export=download",
    "MIMARKS.survey.sediment":"https://drive.google.com/u/4/uc?id=1zUqtbMJ-MqR8aZZakniWX7i7j6LCCIZU&export=download",
    "MIMARKS.survey.soil":"https://drive.google.com/u/4/uc?id=19q8YfnvOJS9pa4fcno-ZBsywi9WITjdp&export=download",
    "MIMARKS.survey.wastewater":"https://drive.google.com/u/4/uc?id=12J-fFsTyfOFHD9f0f0uWyHS2uzzz5Qvf&export=download",
    "MIMARKS.survey.water":"https://drive.google.com/u/4/uc?id=15HTpFVbSCwfMZYhbbuUw5hSyLefxQrcF&export=download",
    "MIMS.me.air":"https://drive.google.com/u/4/uc?id=1ZMXsW-Yitoq-p6yqyP2BorA0JE8ncgVo&export=download",
    "MIMS.me.built":"https://drive.google.com/u/4/uc?id=1MMuutn15NNisfWfpsS5Y3jKgVT3NYvLZ&export=download",
    "MIMS.me.host-associated":"https://drive.google.com/u/4/uc?id=1LG8854T1QtozWXHVy8bYlx1bFyIf1vL2&export=download",
    "MIMS.me.human-associated":"https://drive.google.com/u/4/uc?id=16KCqjtPj_oK372UC1MNOlzTJ_W1CT0Bb&export=download",
    "MIMS.me.human-gut":"https://drive.google.com/u/4/uc?id=19VPaNVLZvt1RE_LCqzFlYV21r_X1ICVz&export=download",
    "MIMS.me.human-oral":"https://drive.google.com/u/4/uc?id=1dw-Bmn586CEyK48X0zd95aWx7Gsczn51&export=download",
    "MIMS.me.human-skin":"https://drive.google.com/u/4/uc?id=16zAFYw7wjxZz-6R9BxheBP9UaixLyShF&export=download",
    "MIMS.me.human-vaginal":"https://drive.google.com/u/4/uc?id=1M6m3RYRPrPpTqzJf-diXHLG80TpFwsBR&export=download",
    "MIMS.me.microbial":"https://drive.google.com/u/4/uc?id=1M8t530spQqmQCdnLxycqhtUin-J1tvPj&export=download",
    "MIMS.me.miscellaneous":"https://drive.google.com/u/4/uc?id=1HXq6ssGstkBaAKGoU2ro226e7z_pPzzO&export=download",
    "MIMS.me.plant-associated":"https://drive.google.com/u/4/uc?id=1rFk8kqA2s-yV7o6PawQddhy3UmCLxmTI&export=download",
    "MIMS.me.sediment":"https://drive.google.com/u/4/uc?id=1LdozsZKVreR1F42Zn45CCAs_CrTgR58c&export=download",
    "MIMS.me.soil":"https://drive.google.com/u/4/uc?id=1MknY7uas5OwAJliGG1cS5Ao9rYqD-TEh&export=download",
    "MIMS.me.wastewater":"https://drive.google.com/u/4/uc?id=1-Tf7tuuv0NEJFal6KkhKFc4HEsAVijEX&export=download",
    "MIMS.me.water":"https://drive.google.com/u/4/uc?id=1pJzxaqmWQBjpcljFbSatfIZvIGIUbrO5&export=download",
    "MISAG":"https://drive.google.com/u/4/uc?id=1u1UvMKaWJECWR7WCq5Gehcql1KYV2pGf&export=download",
    "MISAG.air":"https://drive.google.com/u/4/uc?id=19LIhH7U0mW2ZX56YtfmSuLHzB0Osxzuc&export=download",
    "MISAG.built":"https://drive.google.com/u/4/uc?id=1-NyQaTfSVKzU5ZX8v64x4B6ov4GN4Alk&export=download",
    "MISAG.host-associated":"https://drive.google.com/u/4/uc?id=1pBpd_JT4PP0O_3OO1qQ2_DjEluOwc87D&export=download",
    "MISAG.human-associated":"https://drive.google.com/u/4/uc?id=1UzkNzjkLpANcwKWlaPwG9_37oWyUOj83&export=download",
    "MISAG.human-gut":"https://drive.google.com/u/4/uc?id=1UdZzZwytZgpA0tS4JdUgZ4zZ8D3RN8M3&export=download",
    "MISAG.human-oral":"https://drive.google.com/u/4/uc?id=1NrjtnOHsH-fyoCPUUI5xeeLnaK1NCkn8&export=download",
    "MISAG.human-skin":"https://drive.google.com/u/4/uc?id=1WsPGJ7eUbfeDdCHkUGPC9P5IQaXi439Q&export=download",
    "MISAG.human-vaginal":"https://drive.google.com/u/4/uc?id=16snm5E86O8Q27NoWAtEmxzUp2PeuxN05&export=download",
    "MISAG.microbial":"https://drive.google.com/u/4/uc?id=1Swh9DsBHoe0Hox3XUo7HB9naeBHRzyPh&export=download",
    "MISAG.miscellaneous":"https://drive.google.com/u/4/uc?id=1MjqLhi-K2HQKwdS9vzKVolQudaR7MmZm&export=download",
    "MISAG.plant-associated":"https://drive.google.com/u/4/uc?id=14k5bZFkaOW75WuXfWU0e5TVEvFsxKcr_&export=download",
    "MISAG.sediment":"https://drive.google.com/u/4/uc?id=1UsVaJ1YYx3K_O3zHedC3TzuuQ6r9kBI2&export=download",
    "MISAG.soil":"https://drive.google.com/u/4/uc?id=15H7hXTbM9EJnnxnuBekY1B3PwnS3v_-A&export=download",
    "MISAG.wastewater":"https://drive.google.com/u/4/uc?id=11_AK1pVrIUjHOq_POtZJSDtXM1o_DtC_&export=download",
    "MISAG.water":"https://drive.google.com/u/4/uc?id=19Bb6AV0kSaH_XD9kWfFvjKe4iTFUKe3N&export=download",
    "MIUVIG":"https://drive.google.com/u/4/uc?id=1yLg7chbA_excTp1d_sBym6o3j568A9n-&export=download",
    "MIUVIG.air":"https://drive.google.com/u/4/uc?id=17AsvCJELBWh-mKOezw3ifc98SqIvHl2o&export=download",
    "MIUVIG.built":"https://drive.google.com/u/4/uc?id=13rjYw4fjY4I7GkEFN_-LaMjdQCnU81Pa&export=download",
    "MIUVIG.host-associated":"https://drive.google.com/u/4/uc?id=1XXe8VYxDYFaN0y-t0chTybIVmp0F5XSl&export=download",
    "MIUVIG.human-associated":"https://drive.google.com/u/4/uc?id=107_CeAZV_C3HxaRiezjLCUQs7XsKcice&export=download",
    "MIUVIG.human-gut":"https://drive.google.com/u/4/uc?id=1eN-yufcOA0PXxzg9nwAQ4TI9dg5KvnQF&export=download",
    "MIUVIG.human-oral":"https://drive.google.com/u/4/uc?id=1jWLAARtz2Va8OyGkhLgitwycagFNMjnZ&export=download",
    "MIUVIG.human-skin":"https://drive.google.com/u/4/uc?id=1XRtQ-hcJW0C0mF17-NLooapjMLmRyPW9&export=download",
    "MIUVIG.human-vaginal":"https://drive.google.com/u/4/uc?id=1FwCJ5ET5geUmD6bEjl8VZDLfiWkYA0xj&export=download",
    "MIUVIG.microbial":"https://drive.google.com/u/4/uc?id=1elOiB1tCVPdLBjsohNVOhGKnfjHMRYZe&export=download",
    "MIUVIG.miscellaneous":"https://drive.google.com/u/4/uc?id=1Ee0ZCppNAe89tFTd5RVms_I69xT82472&export=download",
    "MIUVIG.plant-associated":"https://drive.google.com/u/4/uc?id=1pgwKVJfx1aejUye9fIjijDOY8-bCaidS&export=download",
    "MIUVIG.sediment":"https://drive.google.com/u/4/uc?id=1NpFD7TaPQ0tJNWKKIRALeEKc7k_drayQ&export=download",
    "MIUVIG.soil":"https://drive.google.com/u/4/uc?id=1NuNf2vzEdgLNH5wf7PIseKH3toAr9T8e&export=download",
    "MIUVIG.wastewater":"https://drive.google.com/u/4/uc?id=1tybRLHd2PF3o2idI9vvJ4czKN0jMq6A9&export=download",
    "MIUVIG.water":"https://drive.google.com/u/4/uc?id=1fjdtYOh1dWIkCYyxgf0bB2HUCi0t2A5w&export=download",
    "Model.organism.animal":"https://drive.google.com/u/4/uc?id=1vNe8iLnVC0g2RzwIq_KLcvHEFK5BNWaW&export=download",
    "Omics":"https://drive.google.com/u/4/uc?id=1ZTINvlFR1xEWP-fWl4rrv4YsmI_ZbQWu&export=download",
    "Pathogen.cl":"https://drive.google.com/u/4/uc?id=1dSjr4ck75GziTszsqkHJ18h0LyZPcXWW&export=download",
    "Pathogen.env":"https://drive.google.com/u/4/uc?id=1vUHi41cqipOaH5M57S0Ou6_ZIAMGgXBh&export=download",
    "Plant":"https://drive.google.com/u/4/uc?id=1Z7HDYz_ex2h4dXmBkXlJkfn1wttUm5Nq&export=download",
    "SARS-CoV-2.cl":"https://drive.google.com/u/4/uc?id=1OFHde9i8azddp85P1KsgCyiqJIdCBu5O&export=download",
    "SARS-CoV-2.wwsurv":"https://drive.google.com/u/4/uc?id=11DorIYsayS3CByqCpFkpTzGyDQAkh-KF&export=download",
    "Virus":"https://drive.google.com/u/4/uc?id=1w8x4DRyU6CZveKCX4rzmHGCQMfSmD5gy&export=download"
  }

  // URL、ファイルパス、ファイル名取得
  var url = window.location.href;
  var host = window.location.host;
  var pathname = window.location.pathname;
  var protocol = window.location.protocol;  

  // 言語判定
  var la = "ja";
  if ( pathname.match(/-e.html/) ) la = "en";

  // 親がチェックされていれば表示する
  if( $('.biosample_attr input[value="MIxS"]:checked').val() ){
    $('.biosample_attr input[value="MIxS"]').parent(".radio").nextAll("ul").show();
    $("#env_package").show();
  } else if( $('.biosample_attr input[value="Standard"]:checked').val() ){
    $('.biosample_attr input[value="Standard"]').parent(".radio").nextAll("ul").show();
    $("#env_package").hide();
  } else if( $('.biosample_attr input[value="Pathogen"]:checked').val() ){
    $('.biosample_attr input[value="Pathogen"]').parent(".radio").nextAll("ul").show();
    $("#env_package").hide();
  }

  // input 変化
  $('.biosample_attr input[name="Core"]').change(function(){
    if( this.value == "MIxS" ){
      $('.biosample_attr input[value!="MIxS"]').removeAttr("checked");
      $('.biosample_attr input[name="Core"]').parent(".radio").nextAll("ul").hide();
      $(this).parent(".radio").nextAll("ul").show();
      $("#env_package").show();
    } else if ( this.value == "Standard" ) {
      $('.biosample_attr input[value!="Standard"]').removeAttr("checked");
      $('.biosample_attr input[name="Core"]').parent(".radio").nextAll("ul").hide();
      $(this).parent(".radio").nextAll("ul").show();
      $("#env_package").hide();
    } else if ( this.value == "Pathogen" ) {
      $('.biosample_attr input[value!="Pathogen"]').removeAttr("checked");
      $('.biosample_attr input[name="Core"]').parent(".radio").nextAll("ul").hide();
      $(this).parent(".radio").nextAll("ul").show();
      $("#env_package").hide();
    }
  });

  // 必須マークを除外
  $(".biosample_attr input").change(function(){
    $(".biosample_attr .required").removeClass("required");
  });

  // MIMS or MIMARKS 選択で No package 非表示
  $('.biosample_attr input[name="SampleType"]').change(function(){
    if( this.value == "MIMS.me" || this.value == "MIMARKS.survey" ){
      $("#env_package #No_package").closest("li").hide();
    } else {
      $("#env_package #No_package").closest("li").show();
    }
  });

  // 表の初期化
  var attr_table = "";

  /* list all attributes クリック時 */
  $("#all").click(function(){
  
    // 選択済みラジオボタンを非選択化
    $('.biosample_attr input').removeAttr('checked');
    $('#env_package').hide();
    $('#sample_type ul ul').hide();

    // all 選択時の処理
      $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1Q37MHZCEgqH0_b4W2RAPYjLVYZbaLTb_oXSi91tRWFM/values/attribute?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {
      //$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1BwzRPc5g5bLH9tLj1MFSykXzMX5Zb52Zxoorf88bSLI/values/attribute?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {

      attr_table = "";
      attr_table += '<p class="attr-title">All attributes</p>';
      attr_table += '<p class="attr-title">Template files for attributes: <a href="https://drive.google.com/drive/u/2/folders/1ZG_v9q8F9A13XCqTrFQewuq2S1RLH75F">template files</a></p>';
      attr_table += '<p class="biosample-example">Example: <a href="https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=' + examples["All"][1] + '">' + examples["All"][0] + '</a></p>';       
      attr_table += '<div id="biosample_attr_area"><table id="biosample_attr_table"><thead><tr class="biosample_header"><th class="name">Name</th><th class="description">Description</th></tr></thead><tbody>';

      for(var i = 1; i < data.values.length; i++) {

        var entries = data.values[i];

        var name = entries[0];
        var harmonizedname = entries[1];
        var synonym = entries[2];
        var format = entries[3];
        var description = entries[4];
        var descriptionja = entries[5];

        var description_place = ""
        if( la == "ja" ){
          description_place = descriptionja? descriptionja : description;
        } else {
          description_place = description;
        }

        attr_table += '<tr id="' + name + '"><td class="name"><a href="#' + name + '">' + name + '</a></td><td class="description">' + description_place + '</td></tr>';

      } // for(var i = 0; i < entries.length; i++)

      attr_table += '</tbody></table></div>';   

      if ( $('.attr-title').length ){
        $('.attr-title').remove();
      }
      if ( $('#biosample_attr_table').length ){
        $('#biosample_attr_table').remove();
      }
      if ( $('.biosample-example').length ){
        $('.biosample-example').remove();
      }

      $('.bs_desc').after(attr_table);

      if(hash && $(hash).length){
        $('html, body').animate({scrollTop: $(hash).offset().top}, 200);
      }

    }); // $.getJSON

  }); // $("#all").click(function()

  // パラメータでの指定時
  // package + env 定義属性リスト表示ボタンクリック 
  $("#definition").click(function(){

    // 選択チェック MIxS の場合 env 必須
    var core = $('.biosample_attr input[name="Core"]:checked').val();
    var type = $('.biosample_attr input[name="SampleType"]:checked').val();
    var env = $('.biosample_attr input[name="Package"]:checked').val();

    // core が選択されていない
    if (!core) {
      $('.biosample_attr input[name="Core"]').parent(".radio").addClass("required");
      return false;
    } else if (!type && !env){
      $('.biosample_attr input[name="SampleType"]').parent(".radio").addClass("required");
      $('.biosample_attr input[name="Package"]').parent(".radio").addClass("required");
      return false;
    } else if (!type){
      $('.biosample_attr input[name="SampleType"]').parent(".radio").addClass("required");
      return false;
    } else if (core=="MIxS" && type && !env) {
      $('.biosample_attr input[name="Package"]').parent(".radio").addClass("required");
      return false;      
    }

    if (core!="MIxS") {
      env = "";
    }

    // package の name 構築
    var package_shortname = "";

    if( env ){
      if( env=="No_package" ){
        package_shortname = type;
      } else {
        package_shortname = type + '.' + env;
      }
    } else {
      package_shortname = type;
    }

    // package 選択時の処理 attribute シートを起点に
      $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1Q37MHZCEgqH0_b4W2RAPYjLVYZbaLTb_oXSi91tRWFM/values/attribute?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {
      
      var span_required = "";

      attr_table = "";
      attr_table += '<p class="attr-title">' + package_shortname + '</p>';

      // template
      if (package_tsv[package_shortname]) {
          attr_table += '<p class="attr-title">A template file for attributes: <a href="' + package_tsv[package_shortname] + '">a template file</a></p>';
      }

      var example_number = 0;
      var real_example_number = 0;
    
      if (examples[package_shortname]) {
        example_number = examples[package_shortname][0].length;
        real_example_number = examples[package_shortname][2].length;
      }

      // example
      if ( example_number > 0 ) {
        
        var s = example_number > 1 ? "s" : "";

        attr_table += '<p class="biosample-example no_bottom">Example' + s + ': ';
        
        for (var e = 0; e < example_number; e++){
          if (e == 0){
            attr_table += '<a href="https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=' + examples[package_shortname][1][e] + '">' + examples[package_shortname][0][e] + '</a>';
          } else {
            attr_table += ', <a href="https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=' + examples[package_shortname][1][e] + '">' + examples[package_shortname][0][e] + '</a>';
          }
        }       

        attr_table += '</p>';           
      }

      // real-world example
      if ( real_example_number > 0 ) {
        
        var s = real_example_number > 1 ? "s" : "";

        attr_table += '<p class="biosample-real-example">Real-world example' + s + ': ';
        
        for (var e = 0; e < real_example_number; e++){
          if (e == 0){
            attr_table += '<a href="https://www.ncbi.nlm.nih.gov/biosample/' + examples[package_shortname][2][e] + '">' + examples[package_shortname][2][e] + '</a>';
          } else {
            attr_table += ', <a href="https://www.ncbi.nlm.nih.gov/biosample/' + examples[package_shortname][2][e] + '">' + examples[package_shortname][2][e] + '</a>';
          }         
        }       

        attr_table += '</p>';           
      }

      attr_table += '<div id="biosample_attr_area"><table id="biosample_attr_table"><thead><tr class="biosample_header"><th class="name">Name</th><th class="description">Description</th></tr></thead><tbody>';

      // name 毎に選択された package shorname の M O - で判定していく
      var pac_names = data.values[0];   
      var e = 0;   
      var pre_group = "";      

      // attribute シートの package short name の位置取得
      var package_position = 0;
      for(var j = 0; j < pac_names.length; j++) {
          if(pac_names[j] == package_shortname){
            package_position = j;
          }
      }

      for(var i = 1; i < data.values.length; i++) { 

        var entries = data.values[i];

        var name = entries[0];
        var harmonizedname = entries[1];
        var synonym = entries[2];
        var format = entries[3];
        var description = entries[4];
        var descriptionja = entries[5];

        var description_place = ""
        if( la == "ja" ){
          description_place = descriptionja? descriptionja : description;
        } else {
          description_place = description;
        }
        
        // attribute シートの package short name の位置取得
        var option = "";
        option = entries[package_position];
          
        // 属性の M O - 判定
        var optional_pattern = /^O/;
        var required_pattern = /^M/;
        var either_one_pattern = /^E:([A-Za-z]*)/;
        if ( option.match(required_pattern) ){
          span_required = '<span class="required">*</span>';
          attr_table += '<tr id="' + name + '"><td class="name"><a href="#' + name + '">' + name + '</a>' + span_required + '</td><td class="description">' + description_place + '</td></tr>';
        } else if ( option.match(either_one_pattern) ) {
          group = option.match(either_one_pattern)[1].toLowerCase();                
          
          if(group!=pre_group){
            e = e + 1;
          };
          
          span_required = '<span class="required">**' + e + '</span>';
          attr_table += '<tr id="' + name + '"><td class="name"><a href="#' + name + '">' + name + '</a>' + span_required + '</td><td class="description">' + description_place + '</td></tr>';                    
          pre_group = group;
        } else if ( option.match(optional_pattern) ) {
          attr_table += '<tr id="' + name + '"><td class="name"><a href="#' + name + '">' + name + '</a></td><td class="description">' + description_place + '</td></tr>';
        }
          
      } // for(var i = 0; i < entries.length; i++)
      
      attr_table += '</tbody></table></div>';

      if ( $('.attr-title').length ){
        $('.attr-title').remove();
      }
      if ( $('#biosample_attr_table').length ){
        $('#biosample_attr_table').remove();
      }
      if ( $('.biosample-example').length ){
        $('.biosample-example').remove();
      }

      $('.bs_desc').after(attr_table);

    }); // $.getJSON

  }); // $("#definition").click(function()

});

/* GET パラメータ取得 */
function getUrlVars() {
  var vars = [], hash;
  var url_without_anchor = window.location.href.split('#')[0];
  var hashes = url_without_anchor.slice(url_without_anchor.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}

$(function() {
  $('.resources-btn').click(function(){
    /* 閉じる */
    if($(this).hasClass('open')){
      $('.resources-contents').hide();
      $('.resources-btn').removeClass('open');
      $('.down').show();
      $('.up').hide();
    /* 開く */
    } else {
      $('.resources-contents').show();
      $('.resources-btn').addClass('open');
      $('.down').hide();
      $('.up').show();
    }
  });
});

// .resources-btn, .resources-contents 以外の場所をクリックされたら隠す
$(document).mouseup(function(e) {
  var container = $(".resources-contents");
  var button = $(".resources-btn");

  // 指定した要素もしくは子孫要素にクリック場所がない
  if ( (!container.is(e.target) && container.has(e.target).length === 0) && ( !button.is(e.target) && button.has(e.target).length === 0) ) {
    $('.resources-contents').hide();
    $('.resources-btn').removeClass('open');
    $('.down').show();
    $('.up').hide();
  }
});

// DDBJ Flat File の field comment の説明を json ファイルで管理
$(function() {

  var pathname = window.location.pathname;
  var filepath = pathname.replace("-e.html", "").replace(".html", "");

  if ( filepath.match(/ddbj/) ){
    if ( pathname.match(/-e\.html/) ){
      var filename = "/json/flat-file_en.json";
    } else {
      var filename = "/json/flat-file_ja.json";
    }

    $.getJSON( filename , function(data) {
    var len = data.length;

    for(var i = 0; i < len; i++) {
      if ( data[i].id == "LocusName" || data[i].id == "SequenceLength" || data[i].id == "MoleculeType" || data[i].id == "MoleculeForm" || data[i].id == "Division" || data[i].id == "ModificationDate" || data[i].id == "Organism" || data[i].id == "Authors" || data[i].id == "Title" || data[i].id == "Journal") {
        $("#" + data[i].id ).append("<h4 id=\"" + data[i].id + "B\"><a href=\"#" + data[i].id + "A\">" + data[i].Title + "</a></h4><p  class=\"no_top\">" + data[i].content +"</p>") ;
      } else {
        $("#" + data[i].id ).append("<h3 id=\"" + data[i].id + "B\"><a href=\"#" + data[i].id + "A\">" + data[i].Title + "</a></h3>" + data[i].content ) ;
      }
    }
  });
  }
});

/* DDBJ BioSample validation rules */
$(function() {
  
  var url = window.location.href;
  var pathname = window.location.pathname;
  var filepath = pathname.replace("-e.html", "").replace(".html", "");
  var la = "ja";

  var anchor = "";
  if ( url.split('#')[1] ) anchor = "#" + url.split('#')[1];

  // 単純に h1 は一つであり h2 を取得する
  var poc_html = '<ul class="menu single_book">';

  if ( pathname.match(/-e\.html/) ) la = "en";

  if ( pathname.match(/\/biosample\/validation/) ){

      $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1kh9vRllab7t7PBftd0nEBi-YbIWvFVRAiYS6F6RRBNU/values/rule?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {

      var rule_html = "";

      for(var i = 1; i < data.values.length; i++) {
       
        var entries = data.values[i];

        var rule_class = entries[0];
        var rule_id = entries[1];
        var level = entries[2];
        var name = entries[3];
        var message = entries[4];
        var description = entries[5];
        var description_ja = entries[6];
   
        rule_html += '<dl>';
        rule_html += '<dt id="' + rule_id + '"><a class="rule-id" href="#' + rule_id + '">' + rule_id + '</a><span class="rule-level ' + level + '">' + level + '</span>' + '<span class="rule-name">' + name + '</span></dt>';       

        if (la == "ja"){
          rule_html += '<dd><div class="rule-message"><span class="ja rule-message-tag">message:</span> ' + message + '</div>';

          if (description_ja) {
            rule_html += '<div class="rule-description"><span class="ja rule-description-tag">説明:</span> ' + description_ja + '</div></dd>';
          } else {
            rule_html += '<div class="rule-description"></div></dd>';
          }
          
        } else {
          rule_html += '<dd><div class="rule-message"><span class="rule-message-tag">message:</span> ' + message + '</div>';

          if (description) {
            rule_html += '<div class="rule-description"><span class="rule-description-tag">description:</span> ' + description + '</div></dd>';
          } else {
            rule_html += '<div class="rule-description"></div></dd>';
          }
          
        }

        rule_html += "</dl>";

        poc_html += '<li><a href="#' + rule_id + '" class="toc_chapter">' + rule_id + '</a></li>';

      }
    
      $("#rule").prepend(rule_html);
      poc_html += '</ul>';
    
      $('#in_this_page').append(poc_html);
      $('#in_this_page > h2').text("Rules");
      
      // anchor 指定時にページ内遷移
      if (anchor && $(anchor).length){
        $(document).scrollTop( $(anchor).offset().top );
      }

    }); // $.getJSON

  // if ( pathname.match(/\/biosample\/validation/) )
  } else if ( pathname.match(/\/gea\/validation/) ) {

      $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/values/rule?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {

      var rule_html = "";

      for(var i = 1; i < data.values.length; i++) {
       
        var entries = data.values[i];

        var rule_class = entries[0];
        var rule_id = entries[1];
        var level = entries[2];
        var experiment_type = entries[3];
        var object = entries[4];
        var message = entries[5];
        var description = entries[6];
        var description_ja = entries[7];

        rule_html += '<dl>';
        rule_html += '<dt id="' + rule_id + '"><a class="rule-id" href="#' + rule_id + '">' + rule_id + '</a><span class="rule-level ' + level + '">' + level + '</span>' + '<span class="rule-exp-type"> Experiment Type:' + experiment_type + '</span>' + '<span class="rule-object"> Object:' + object + '</span>' + '</dt>';        

        if (la == "ja"){
          rule_html += '<dd><div class="rule-message"><span class="ja rule-message-tag">message:</span> ' + message + '</div>';

          if (description_ja) {
            rule_html += '<div class="rule-description"><span class="ja rule-description-tag">説明:</span> ' + description_ja + '</div></dd>';
          } else {
            rule_html += '<div class="rule-description"></div></dd>';
          }
          
        } else {
          rule_html += '<dd><div class="rule-message"><span class="rule-message-tag">message:</span> ' + message + '</div>';

          if (description) {
            rule_html += '<div class="rule-description"><span class="rule-description-tag">description:</span> ' + description + '</div></dd>';
          } else {
            rule_html += '<div class="rule-description"></div></dd>';
          }
          
        }

        rule_html += "</dl>";

        poc_html += '<li><a href="#' + rule_id + '" class="toc_chapter">' + rule_id + '</a></li>';

        }     
    
      $("#rule").prepend(rule_html);      
      poc_html += '</ul>';
    
      $('#in_this_page').append(poc_html);
      $('#in_this_page > h2').text("Rules");        
      
      // anchor 指定時にページ内遷移
      if (anchor && $(anchor).length){
        $(document).scrollTop( $(anchor).offset().top );
      }     

    }); // $.getJSON

  }

});

/* DDBJ vallidator error message */
$(function() {

  var url = window.location.href;
  var pathname = window.location.pathname;
  var filepath = pathname.replace("-e.html", "").replace(".html", "");
  var la = "ja";

  var anchor = "";
  if ( url.split('#')[1] ) anchor = "#" + url.split('#')[1];

  var rule_html = '<ul class="menu single_book">';
  if ( pathname.match(/-e\.html/) ) la = "en";  
  
  if ( pathname.match(/\/ddbj\/validator/) ){
  
    // Parser
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/values/Parser?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {

      var rule_html = "";

      for(var i = 1; i < data.values.length; i++) {
       
        var entries = data.values[i];

        var rule_class = entries[0];
        var rule_id = entries[1];
        var level = entries[2];
        var type = entries[3];
        var file = entries[4];
        var message = entries[5];
        var description = entries[6];
        var description_ja = entries[7];
   
        rule_html += '<dl>';
        
        if ( file ){          
          rule_html += '<dt id="' + rule_id + '"><div class="rule-message"><a href="#' + rule_id + '">' + rule_id + '</a>:' + level + ':' + type + ':' + file + ':' +  message + '</div></dt>';
        } else {
          rule_html += '<dt id="' + rule_id + '"><div class="rule-message"><a href="#' + rule_id + '">' + rule_id + '</a>:' + level + ':' + type + ':' +  message + '</div></dt>';
        }

        if (la == "ja"){        
          rule_html += '<dd><div class="rule-description"> ' + description_ja + '</div></dd>';
        } else {
          rule_html += '<dd><div class="rule-description"> ' + description + '</div></dd>';
        }
        rule_html += "</dl>";

      }

      $("#Parser-rule").prepend(rule_html);

    }); // $.getJSON..Parser 

    // transChecker
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/values/transChecker?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {

      var rule_html = "";

      for(var i = 1; i < data.values.length; i++) {
       
        var entries = data.values[i];

        var rule_class = entries[0];
        var rule_id = entries[1];
        var level = entries[2];
        var message = entries[3];
        var description = entries[4];
        var description_ja = entries[5];
   
        rule_html += '<dl>';
        rule_html += '<dt id="' + rule_id + '"><div class="rule-message"><a href="#' + rule_id + '">' + rule_id + '</a>:' + level + ':' +  message + '</div></dt>';
        
        if (la == "ja"){        
          rule_html += '<dd><div class="rule-description"> ' + description_ja + '</div></dd>';
        } else {
          rule_html += '<dd><div class="rule-description"> ' + description + '</div></dd>';
        }
        rule_html += "</dl>";
        
      }

      $("#transChecker-rule").prepend(rule_html);

    }); // $.getJSON. transChecker

    // AGPParser
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/values/AGP Parser?key=AIzaSyAn1Z6u4xEQ43BVGXeWMWI37R0rotfdJEo", function(data) {

      var rule_html = "";

      for(var i = 1; i < data.values.length; i++) {
       
        var entries = data.values[i];

        var rule_class = entries[0];
        var rule_id = entries[1];
        var level = entries[2];
        var message = entries[3];
        var description = entries[4];
        var description_ja = entries[5];
   
        rule_html += '<dl>';      
        rule_html += '<dt id="' + rule_id + '"><div class="rule-message"><a href="#' + rule_id + '">' + rule_id + '</a>:' + level + ':' + message + '</div></dt>';

        if (la == "ja"){        
          rule_html += '<dd><div class="rule-description"> ' + description_ja + '</div></dd>';
        } else {
          rule_html += '<dd><div class="rule-description"> ' + description + '</div></dd>';
        }
        rule_html += "</dl>";

      }

    $("#AgpParser-rule").prepend(rule_html);

    }); // $.getJSON. AGPParser

  }

});
