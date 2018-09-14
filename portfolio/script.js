$('.menu').hide();

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
         $('body').addClass('changeColor');
         $('.menu').show();
         $('.text').css('color','rgba(24,100,164)');
      }
      if ($(this).scrollTop() < 300) {
         $('body').removeClass('changeColor');
         $('.text').css('color','white');
      }
   });
});
