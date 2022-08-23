window.addEventListener('load', function () {
  let query = window.location.search;
  let param = new URLSearchParams(query);
  let id = param.get('m');
  
  if (id === "jan") {
    $('.year').slick('slickGoTo', 0);
  }
  
  if (id === "feb") {
    $('.year').slick('slickGoTo', 1);
  }
  
  if (id === "mar") {
    $('.year').slick('slickGoTo', 2);
  }
  
  if (id === "apr") {
    $('.year').slick('slickGoTo', 3);
  }
  
  if (id === "may") {
    $('.year').slick('slickGoTo', 4);
  }
  
  if (id === "jun") {
    $('.year').slick('slickGoTo', 5);
  }
  
  if (id === "jul") {
    $('.year').slick('slickGoTo', 6);
  }
  
  if (id === "aug") {
    $('.year').slick('slickGoTo', 7);
  }
  
  if (id === "sep") {
    $('.year').slick('slickGoTo', 8);
  }
  
  if (id === "oct") {
    $('.year').slick('slickGoTo', 9);
  }
  
  if (id === "nov") {
    $('.year').slick('slickGoTo', 10);
  }
  
  if (id === "dec") {
    $('.year').slick('slickGoTo', 11);
  }
})

$(document).ready(function(){
	$('.gamelist-game').slick({
    arrows: true,
    infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
    draggable: false,
	  speed: 300
	});
});

$(document).ready(function(){
	$('.year').slick({
    arrows: true,
    infinite: false,
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};

$(".cursor-image").mouseover(function () {
	$('.cursor').attr("class", "cursor cursor-hover");
});

$(".cursor-image").mouseout(function () {
	$('.cursor').attr("class", "cursor");
});