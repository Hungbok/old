$(document).ready(function() {
  
  //Pour afficher le bouton 
    var offset = 120;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            $('#topBtn').fadeIn(duration);
        } else {
            $('#topBtn').fadeOut(duration);
        }
    });
  
  //Pour le smoth scroll
  $(function() {
     $('a[href*=#]:not([href=#])').click(function() {
     	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
       		$('html,body').animate({
          scrollTop: target.offset().top
          }, 500);
          return false;
          }
        }
    });
	});
});

$(document).ready(function(){

  var scrolled = 1;
  /*If you want it to start from the first div set the value to 0;*/
  
  var elements = $('.lists-section').find('.list-id').length;
  
  /*Scroll Down button*/
  $('.list-down').click(function(){
    
    var pos = $('.list-id').eq(scrolled).offset().top;
      
    $('html,body').animate({
      scrollTop: pos},
    100);
      
    scrolled += 1;
    
    if(scrolled>=elements){
      $(this).hide();
    }
    
    $('.list-up').show();
  
  });
  
  /*Scroll Up button*/
  $('.list-up').click(function(){
    scrolled -= 2;
    var pos = $('.list-id').eq(scrolled).offset().top;

    $('html,body').animate({
      scrollTop: pos},
    100);
    
    scrolled += 1;
    
    if(scrolled==1){
      $(this).hide();
    }
    
    $('.list-down').show();
  
  });
  
  $('.list-up').hide();
  
});

function clickme() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}

$(".mobile-menu-open").click(function(){
  $('.header').css({'max-height': '500px'});
  $('.mobile-menu-open').css({'display': 'none'});
  $('.mobile-menu-close').css({'display': 'inline-block'});
});

$(".mobile-menu-close").click(function(){
  $('.header').css({'max-height': '35px'});
  $('.mobile-menu-open').css({'display': 'inline-block'});
  $('.mobile-menu-close').css({'display': 'none'});
});