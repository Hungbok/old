$(".headline").click(function(){
  $('.series').css({'height': '110px'});
  $('.item').css({'width': '97px'});
  $('.item-thumbnail').css({'height': '145.5px'});
  $('.item-thumbnail').css({'width': '97px'});
  $('.headline').css({'display': 'none'});
  $('.agenda').css({'display': 'inline-block'});
});

$(".agenda").click(function(){
  $('.series').css({'height': 'auto'});
  $('.item').css({'width': '200px'});
  $('.item-thumbnail').css({'height': '300px'});
  $('.item-thumbnail').css({'width': '200px'});
  $('.headline').css({'display': 'inline-block'});
  $('.agenda').css({'display': 'none'});
});

lightbox.option({
  'disableScrolling': true,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true
})