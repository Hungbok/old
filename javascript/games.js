$(document).ready(function(){
            
    $(document).mousemove(function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        
        $('.game-item-cursor-hover').css({
            left: mouseX + "px",
            top : mouseY + "px"
        })
    })
})

$(".game-item").mouseover(function () {
	$('.game-item-cursor').attr("class", "game-item-cursor game-item-cursor-hover");
});

$(".game-item").mouseout(function () {
	$('.game-item-cursor').attr("class", "game-item-cursor");
});

$(document).ready(function(){
	$('.year').slick({
    arrows: false,
    infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 300
	});
});