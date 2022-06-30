var popupWidth = 500;
var popupHeight = 700;

var popupX = (window.screen.width / 2) - (popupWidth / 2);
// 만들 팝업창 width 크기의 1/2 만큼 보정값으로 빼주었음

var popupY= (window.screen.height / 2) - (popupHeight / 2);
// 만들 팝업창 height 크기의 1/2 만큼 보정값으로 빼주었음

function openWindowPop_contact(url, name){
    window.open('/contactus', 'popup', 'status=no, menubar=no, toolbar=no, resizable=no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY);
}