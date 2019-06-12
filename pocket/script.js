$(function(){

// ハンバーガーメニューエフェクト
  $('.m-btn').click(function(){
    if($('.m-btn span').hasClass('active')){
      $('.m-btn span').removeClass('active');
      $('.modal-wrapper').hide();
    }else{
      $('.m-btn span').addClass('active');
      $('.modal-wrapper').show();
    }
  });

// モーダル表示＆非表示
  $('.modal-wrapper').click(function(){
    $('.m-btn span').removeClass('active');
    $('.modal-wrapper').hide();
  });

  // ページ内リンクのスクロール
  $('.nav-link').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},500);
  });

// faqアコーディオン
  $('.question').click(function(){
    var $answer = $(this).siblings();
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp(200);
    }else{
      $answer.addClass('open');
      $answer.slideDown(200);
    }
	});




});
