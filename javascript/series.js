$(".headline").click(function(){
  $('.series').css({'height': '110px'});
  $('.headline').css({'display': 'none'});
  $('.agenda').css({'display': 'inline-block'});
});

$(".agenda").click(function(){
  $('.series').css({'height': 'auto'});
  $('.headline').css({'display': 'inline-block'});
  $('.agenda').css({'display': 'none'});
});

lightbox.option({
  'disableScrolling': true,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true
})