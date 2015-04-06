$(document).ready(function() {
  $("#things_search input").keyup(function() {
    $.get($("#things_search").attr("action"), $("#things_search").serialize(), null, "script");
    return false;
  });
});