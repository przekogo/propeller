function hide(id) {
  document.getElementById(id).style.display = 'none';
}
function totop(thisthing){
  if (thisthing.parent().hasClass('one')) {
    return;
  }
  else{
    var marker=false;
    var depth=['five', 'four', 'three', 'two', 'one'];
    for (var i=0; i<depth.length; i++){
      if (marker == false && thisthing.parent().hasClass(depth[i])){
        marker=true;
      }
      else if(marker==true){
        $('.'+depth[i]).addClass(depth[i-1]);
        $('.'+depth[i]).removeClass('oneanim');
        $('.'+depth[i]).removeClass(depth[i]);
      }
    }
    thisthing.parent().removeClass('two three four five');
    thisthing.parent().addClass('one oneanim');
    thisthing.parent().css('left', '');
  };
};
function pushOut(thisbutton){
  var zind = thisbutton.parent().css("z-index");
  if(zind == 5){
    return;
  }
  else if (zind == 4){
    thisbutton.parent().css("left", "9%");
  }
  else if (zind == 3){
    thisbutton.parent().css("left", "8.5%");
  }
  else if (zind == 2){
    thisbutton.parent().css("left", "8%");
  }
  else if (zind == 1){
    thisbutton.parent().css("left", "7.5%");
  };
};
function pushIn(thisbutton){
  var zind = thisbutton.parent().css("z-index");
    thisbutton.parent().css("left", "");
}
