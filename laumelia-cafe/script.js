$(function(){

// ヘッダーリンク
  $('.header-link').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animate({'scrollTop':(position)-60},500);
		});

// シェアボックス
  $('.share a').hover(function(){
    $('.share-box').show();
  });

  $('body').click(function(){
    $('.share-box').hide();
  });

// ナビモーダル
  $('.nav-icon').click(function(){
    $('.black-modal').fadeIn('slow');
  });

  $('.close-icon').click(function(){
    $('.black-modal').hide();
  });

  $('.black-modal a').click(function(){
    $('.black-modal').hide();
  });

// トップへ戻るボタン
  var $pageTop = $(".pagetop")
  $pageTop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
          $pageTop.fadeIn();
      } else {
          $pageTop.fadeOut();
      }
  });

  $('.pagetop').click(function(){
  		$('html,body').animate({
  				'scrollTop': 0
  		}, 'slow');
  });

});
