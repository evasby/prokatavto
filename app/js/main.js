$(document).ready(function(){

  //menu toggle
  $('.menu-toggle__left').click(function(){
    if ($(this).hasClass('menu-toggle__on')) {
      $(this).removeClass('menu-toggle__on');
      $(".menutop").removeClass('menutop__on');
      $(".overlay").removeClass('overlay__on');
    } else{
      $(this).addClass('menu-toggle__on');
      $(".menutop").addClass('menutop__on');
      $(".overlay").addClass('overlay__on');
      $(".menuleft").removeClass('menuleft__on');
      $('.menu-toggle__right').removeClass('menu-toggle__on');
    }
  });
  $('.menu-toggle__right').click(function(){
    if ($(this).hasClass('menu-toggle__on')) {
      $(this).removeClass('menu-toggle__on');
      $(".menuleft").removeClass('menuleft__on');
      $(".overlay").removeClass('overlay__on');
    } else{
      $(this).addClass('menu-toggle__on');
      $(".menuleft").addClass('menuleft__on');
      $(".overlay").addClass('overlay__on');
      $(".menutop").removeClass('menutop__on');
      $('.menu-toggle__left').removeClass('menu-toggle__on');
    }
  });
  //hide menu
  $(".overlay").click(function(e) {
    $(this).removeClass('overlay__on');
    $('.menu-toggle').removeClass('menu-toggle__on');
    $(".menutop").removeClass('menutop__on');
    $(".menuleft").removeClass('menuleft__on');
  });

  //bxslider
  $('.mybxpager_pager').bxSlider({
    pager: false,
    maxSlides: 3,
    minSlides: 3,
    slideWidth: 197,
    slideMargin: 42,
    infiniteLoop: false,
    hideControlOnEnd: true,
    onSliderLoad: function(){
      $('.mybxslider_list').bxSlider({
        pagerCustom: '#bx-pager'
      });
    }
  });

  //colorbox
  $('a.mybxslider_link').colorbox({
    rel: 'gal',
    maxWidth:'95%',
    maxHeight:'95%',
    scrolling: false,
    className: 'mybxslider-colorbox'
    /*onComplete: function(){
      $('#cboxClose').show();
    },
    onClosed: function(){
      $('#cboxClose').hide();
    }*/
  });

});