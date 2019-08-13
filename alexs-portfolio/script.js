$(function(){

// ヘッダーリンク
  $('.header-nav li a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animate({'scrollTop':position},500);
		});

// トップへ戻るボタンの出現
  var $pageTop = $(".pagetop")
  $pageTop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
          $pageTop.fadeIn();
      } else {
          $pageTop.fadeOut();
      }
  });

  // トップへ戻るボタンからのスクロール
  $('.pagetop').click(function(){
  		$('html,body').animate({
  				'scrollTop': 0
  		}, 'slow');
  });


});
