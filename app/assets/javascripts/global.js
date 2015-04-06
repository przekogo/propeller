$(document).ready(function(){
  $(document).on('click', function(e){
    if ($('.popup').length && !$('.fadeout').length && (! $(e.target).closest('.popup').length || $(e.target).closest('.btn').length)) {
      $('.popup').addClass('fadeout');
      $('.fadeout').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(){
        $('.fadeout').css({'display':'none'});
      });
    }
  });
});