function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("slideshow-selet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "";
  }

function videocurrentDiv(n) {
    videoshowDivs(slideIndex = n);
  }
  
  function videoshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("video-slideshow");
    var dots = document.getElementsByClassName("video-slideshow-selet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "";
  }

function subvideocurrentDiv(n) {
    subvideoshowDivs(slideIndex = n);
  }
  
  function subvideoshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("subvideo-slideshow");
    var dots = document.getElementsByClassName("subvideo-slideshow-selet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "";
  }

  
function subvideo() {
  document.querySelector(".video-slideshow-container").classList.add("subvideo");
  document.querySelector(".video-slideshow-content").classList.add("hidevideo");
  document.querySelector(".subvideo-slideshow-content").classList.remove("hidevideo");
}

function mainvideo() {
  document.querySelector(".video-slideshow-container").classList.remove("subvideo");
  document.querySelector(".subvideo-slideshow-content").classList.add("hidevideo");
  document.querySelector(".video-slideshow-content").classList.remove("hidevideo");
}

const slider = document.querySelector('.details-top-showcase-content');
let isMouseDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  slider.classList.add('active');

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isMouseDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isMouseDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});

function slideshow1(n) {
    slideshow1show(slideIndex = n);
  }
  
  function slideshow1show(n) {
    var i;
    var x = document.getElementsByClassName("slideshow1");
    var dots = document.getElementsByClassName("slideshow1-selet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "";
  }

function slideshow2(n) {
    slideshow2show(slideIndex = n);
  }
  
  function slideshow2show(n) {
    var i;
    var x = document.getElementsByClassName("slideshow2");
    var dots = document.getElementsByClassName("slideshow2-selet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "";
  }