$(function() {

  var w = $(window).width(),
    h = $(window).height();
  //$('section').width(w);
  $('sections').height(h);
  $('.aside-menu .containers').height('100%');
  $('body').prepend('<div id="overlay">');

  $('#menu').click(function() {$('html').addClass('active');});
  $('#close-menu').click(function() {$('html').removeClass('active');});
  $('#overlay').click(function() {$('html').removeClass('active');});
  $(window).resize(function() {
    if($(window).width() >1239) {
      var w = $(window).width(),
        h = $(window).height();
      //$('section').width(w);
      $('sections').height(h);
      $('.aside-menu .containers').height('100%');
    } else {
      var w = $(window).width(),
        h = $(window).height();
      //$('section').width(w);
      $('sections').height(h);
      $('.aside-menu .containers').height(h);
    }
  });

});