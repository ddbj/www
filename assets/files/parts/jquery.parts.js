/*
 * jQuery by the DDBJ trace team.
 */

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
