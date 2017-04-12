/*
  Table of content:
  1. Profile page
  2. Miscellanous
*/

// 1. Profile page.
// A. Show/Hide password on Profile page.
$(".toggle_password input").click(function() {
  if ($("#set_password").attr("type") == "password") {
    $("#set_password").attr("type", "text");
  } else {
    $("#set_password").attr("type", "password");
  }
});
