$(function () {	//화면 로딩후 시작
  $("#searchInput").autocomplete({  //오토 컴플릿트 시작
    source: List,	// source는 data.js파일 내부의 List 배열
    focus : function(event, ui) { // 방향키로 자동완성단어 선택 가능하게 만들어줌	
      return false;
    },
    minLength: 1,// 최소 글자수
    delay: 100,	//autocomplete 딜레이 시간(ms)
    //disabled: true, //자동완성 기능 끄기
  });
});

$(document).ready(function(){
  
  var currentPosition = parseInt($(".ui-menu").css("top"));
  var mql = window.matchMedia("screen and (max-width: 1050px)");
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    if (mql.matches) {
      $(".ui-menu").stop().animate({"top":position+currentPosition+211+"px"},0);
    } else {
      $(".ui-menu").stop().animate({"top":position+currentPosition+56+"px"},0);
    }
  });
});