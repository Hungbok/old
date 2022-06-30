var prevScrollTop = 0;
var nowScrollTop = 0;
function wheelDelta(){
    return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
};
$(window).on('scroll', function(){
    nowScrollTop = $(this).scrollTop();
        if(wheelDelta() == 'down'){
            $('.warning-bar').css("top", "-100px");
        }
           if(wheelDelta() == 'up'){
             $('.warning-bar').css("top", "-15px");
        }
    prevScrollTop = nowScrollTop;
});