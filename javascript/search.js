function filter(){
  
    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("history-item");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("name");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "inline-block";
      }else{
        item[i].style.display = "none";
      }
    }
  }

  $(".headline").click(function(){
    //위로
    $('.headline').css({'display': 'none'});
    $('.agenda').css({'display': 'inline-block'});
  });

  $(".agenda").click(function(){
    //아래로
    $('.headline').css({'display': 'inline-block'});
    $('.agenda').css({'display': 'none'});
  });