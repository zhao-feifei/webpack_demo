import $ from "jquery";

$(function () {
  //奇数行红色
  $("li:odd").css("background-color", "res");
  $("li:even").css("background-color", "pink");
});
