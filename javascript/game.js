$(document).ready(function(){
	$('.gamelist-game').slick({
    arrows: true,
    infinite: false,
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
  
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var nn = weekday[d.getDay()];

if (nn === "Sunday") {
  showSlides(slideIndex = 1);
}

if (nn === "Monday") {
  showSlides(slideIndex = 2);
}

if (nn === "Tuesday") {
  showSlides(slideIndex = 3);
}

if (nn === "Wednesday") {
  showSlides(slideIndex = 4);
}

if (nn === "Thursday") {
  showSlides(slideIndex = 5);
}

if (nn === "Friday") {
  showSlides(slideIndex = 6);
}

if (nn === "Saturday") {
  showSlides(slideIndex = 7);
}

$(".cursor-image").mouseover(function () {
	$('.cursor').attr("class", "cursor cursor-hover");
});

$(".cursor-image").mouseout(function () {
	$('.cursor').attr("class", "cursor");
});