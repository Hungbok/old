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
    $('.history-item').css({'height': '85px'});
    $('.headline').css({'display': 'none'});
    $('.agenda').css({'display': 'inline-block'});
  });

  $(".agenda").click(function(){
    $('.history-item').css({'height': '245px'});
    $('.headline').css({'display': 'inline-block'});
    $('.agenda').css({'display': 'none'});
  });

  $(document).ready(function(){
    $('.history-thumbnail').slick({
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300
    });
  });

  window.addEventListener('load', function() {
    playAlert = setInterval(function() {
      $('.cards').attr("class", "cards");
      $('#loader').attr("class", "loader hidden");
    }, 10000);
  })