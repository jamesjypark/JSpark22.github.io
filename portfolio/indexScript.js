$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 700){
        $('#layOn').css('background','rgba(0,0,0,0.7)');
        // $('body').css('background-image', 'url("images/main.jpg")');
        // $('body').css('background-attachment', 'fixed');
        // $('body').css('background-position', '50% 50%');
        // $('body').css('background-size', 'cover');
            }
      if ($(this).scrollTop() < 700) {
        $('#layOn').css('background','rgba(30, 125, 207)');
      }
   });
});

// $(function() {
//    $(window).scroll(function () {
//       if ($(this).scrollTop() > 400) {
//          $('body').addClass('changeColor');
//          // $('.text').css('color','rgba(30, 125, 207)');
//       }
//       if ($(this).scrollTop() < 400) {
//          $('body').removeClass('changeColor');
//          // $('.text').css('color','white');
//       }
//    });
// });
