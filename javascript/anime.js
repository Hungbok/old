$(document).ready(function(){
	$('.anime-container').slick({
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 300
	});
});

$(document).ready(function(){
  
    $(document).mousemove(function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        
        $('.cursor-hover').css({
            left: mouseX + "px",
            top : mouseY + "px"
        })
    })
})

$(".cursor-image").mouseover(function () {
	$('.cursor').attr("class", "cursor cursor-hover");
});

$(".cursor-image").mouseout(function () {
	$('.cursor').attr("class", "cursor");
});

window.addEventListener('load', function () {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  var today = weekday[d.getDay()];
  
  if (today === "Sunday") {
    $('.anime-container').slick('slickGoTo', 6);
  }
  
  if (today === "Monday") {
    $('.anime-container').slick('slickGoTo', 0);
  }
  
  if (today === "Tuesday") {
    $('.anime-container').slick('slickGoTo', 1);
  }
  
  if (today === "Wednesday") {
    $('.anime-container').slick('slickGoTo', 2);
  }
  
  if (today === "Thursday") {
    $('.anime-container').slick('slickGoTo', 3);
  }
  
  if (today === "Friday") {
    $('.anime-container').slick('slickGoTo', 4);
  }
  
  if (today === "Saturday") {
    $('.anime-container').slick('slickGoTo', 5);
  }
})