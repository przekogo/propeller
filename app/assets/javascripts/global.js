$(document).ready(function(){
  $(document).on('click', function(e){
    if ($('.popup').length && !$('.fadeout').length && (! $(e.target).closest('.popup').length || $(e.target).closest('.btn').length)) {
      // you clicked anywhere but on an element inside #linkitem (or itself)
      $('.popup').addClass('fadeout');
    }
  });
});