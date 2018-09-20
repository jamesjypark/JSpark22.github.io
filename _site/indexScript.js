$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 600){
        $('#layOn').css('background','rgba(0,0,0,0.7)');
            }
      if ($(this).scrollTop() < 600) {
        $('#layOn').css('background','rgba(30, 125, 207)');
      }
   });
});

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
