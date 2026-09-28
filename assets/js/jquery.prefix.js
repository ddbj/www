/*
 * Prefix Letter List 表示用 jQuery
 * データ: https://github.com/ddbj/pub/blob/master/docs/common/prefix_letter_list.tsv
 */
var prefix_tsv_url = "https://raw.githubusercontent.com/ddbj/pub/master/docs/common/prefix_letter_list.tsv";

// TSV の db 列の値と表示先 div の対応
// widths: オリジナルページ (prefix.html) の Prefix 列、Data source 列の表示幅
var prefix_areas = {
  "ddbj_conventional": { area: "prefix-gen_area", widths: [8, 16] },
  "ddbj_bulk": { area: "prefix-large_area", widths: [15, 13] },
  "protein_id": { area: "prefix-protein_area", widths: [12, 14] },
  "sra": { area: "prefix-dra_area", widths: [8, 11] },
  "bioproject": { area: "prefix-project_area", widths: [16, 9] },
  "biosample": { area: "prefix-sample_area", widths: [9, 9] }
};

// 表示しない prefix
var prefix_excludes = {
  "biosample": ["SAMEA", "SAMEG"]
};

$(function(){
  makePrefixList();
});

// HTML エスケープ
function escapePrefixHtml(str) {
  return $("<div>").text(str).html();
}

// Prefix / Data source / Comment をオリジナルと同じ等幅テキストで作成
// 列幅は widths と各列の最大文字数 + 2 の大きい方
function makePrefixText(rows, widths) {

  widths = widths || [0, 0];
  var w = [widths[0], widths[1]];

  for(var j = 0; j < rows.length; j++) {
    w[0] = Math.max(w[0], rows[j][0].length + 2);
    w[1] = Math.max(w[1], rows[j][1].length + 2);
  }

  var text = "";

  for(var k = 0; k < rows.length; k++) {
    var line = rows[k][0];
    if (rows[k][1] !== "" || rows[k][2] !== "") line += Array(w[0] - rows[k][0].length + 1).join(" ") + rows[k][1];
    if (rows[k][2] !== "") line += Array(w[1] - rows[k][1].length + 1).join(" ") + rows[k][2];
    text += line + "\n";
  }

  return '<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>' + escapePrefixHtml(text) + '</code></pre></div></div>';

}

function makePrefixList() {

  if ( !document.getElementById('prefix-gen_area') ) return;

  var is_en = window.location.pathname.indexOf("-e.html") !== -1;

  $.get(prefix_tsv_url, function(tsv) {

    var rows_by_db = {};
    var db_order = []; // TSV に出てくる db の順
    var lines = tsv.replace(/\r/g, "").split("\n");

    // 1 行目はヘッダー
    for(var i = 1; i < lines.length; i++) {

      if (lines[i] === "") continue;

      var cols = lines[i].split("\t");
      var db = cols[0];

      if (prefix_excludes[db] && prefix_excludes[db].indexOf(cols[1]) !== -1) continue;

      if (!rows_by_db[db]) {
        rows_by_db[db] = [];
        db_order.push(db);
      }
      rows_by_db[db].push([cols[1] || "", cols[2] || "", cols[3] || ""]);

    } // for(var i = 1; i < lines.length; i++)

    // 既定の区分は md 側の見出しの下に表示
    for (var area_db in prefix_areas) {
      $("#" + prefix_areas[area_db].area).html(makePrefixText(rows_by_db[area_db] || [], prefix_areas[area_db].widths));
    }

    // prefix_areas にない区分は、見出しと表をページ末尾 (#prefix-source の前) に追加
    var html_other = "";

    for(var k = 0; k < db_order.length; k++) {

      var other_db = db_order[k];
      if (prefix_areas[other_db]) continue;

      html_other += '<h2 id="prefix-' + escapePrefixHtml(other_db.replace(/[^A-Za-z0-9_-]/g, "_")) + '">For ' + escapePrefixHtml(other_db) + '</h2>';
      html_other += makePrefixText(rows_by_db[other_db]);

    } // for(var k = 0; k < db_order.length; k++)

    if (html_other !== "") $("#prefix-source").before(html_other);

  }, "text").fail(function() {

    var message = is_en ? "Failed to load the prefix list. Please reload the page." : "Prefix 一覧を読み込めませんでした。ページを再読み込みしてください。";
    $("#prefix-gen_area").html('<p>' + message + '</p>');

  }); // $.get

}
