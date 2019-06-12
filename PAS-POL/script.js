$(function(){

// スマホナビ開閉
  $('.nav-menu').click(function(){
    if($('.header-nav').hasClass('open')){
      $('.header-nav').removeClass('open');
      $('.header-nav').slideUp('1000');
    }else{
      $('.header-nav').addClass('open');
      $('.header-nav').slideDown('1000');
    }
  });

});
