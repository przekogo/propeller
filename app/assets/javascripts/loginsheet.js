$(document).ready(function(){
  $(".loginbutton").click(function(){
    ShowLogin($(this));
  });
  $(".loginbutton").hover(function(){
    pushOutDown($(this));
  },function(){
    pushInDown($(this));  
  });
  $(document).on('click', function(e) {
    if (parseInt($('#loginsheet').css("top"))>parseInt("-200px") && (! $(e.target).closest('#loginsheet').length || $(e.target).closest('.loginbutton').length)) {
      // you clicked anywhere but on an element inside #linkitem (or itself)
      $('#loginsheet').css('top', '-210px');
    }
  });
});
//declarations
function pushOutDown(thisbutton){
  if(parseInt(thisbutton.parent().css("top"))<=parseInt("-207px")){
    thisbutton.parent().css("top", "-207px");
  }
}
function pushInDown(thisbutton){
  if(parseInt(thisbutton.parent().css("top"))<=parseInt("-207px")){
    thisbutton.parent().css("top", "-210px");
  }
}
function ShowLogin(thisbutton){
  thisbutton.parent().css("top", "0px");
}
function HideLogin(thisbutton){
  thisbutton.parent().css("top", "-210px");  
}
