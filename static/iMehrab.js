$("#projectBox").hide();
$("#maramBox").hide();
$("#skills").hide();
$("#mojavezBox").hide();
$("#contactBox").hide();

$("#projects").click(function() {
  $("#aboutBox").hide();
  $("#maramBox").hide();
  $("#skills").hide();
  $("#mojavezBox").hide();
  $("#contactBox").hide();
  $("#projectBox").fadeIn();

});
$("#about").click(function() {
  $("#projectBox").hide();
  $("#maramBox").hide();
  $("#skills").hide();
  $("#mojavezBox").hide();
  $("#contactBox").hide();
  $("#aboutBox").fadeIn();

});
$("#maram").click(function() {
  $("#projectBox").hide();
  $("#aboutBox").hide();
  $("#skills").hide();
  $("#mojavezBox").hide();
  $("#contactBox").hide();
  $("#maramBox").fadeIn();
});
$("#maharat").click(function() {
  $("#projectBox").hide();
  $("#aboutBox").hide();
  $("#maramBox").hide();
  $("#mojavezBox").hide();
  $("#contactBox").hide();
  $("#skills").fadeIn();
});
$("#mojavez").click(function() {
  $("#projectBox").hide();
  $("#aboutBox").hide();
  $("#maramBox").hide();
  $("#skills").hide();
  $("#contactBox").hide();
  $("#mojavezBox").fadeIn();
});
$("#contact").click(function() {
  $("#projectBox").hide();
  $("#aboutBox").hide();
  $("#maramBox").hide();
  $("#skills").hide();
  $("#mojavezBox").hide();
  $("#contactBox").fadeIn();
});
