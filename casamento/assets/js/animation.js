//pisca
$(function(){
    $('.pressStart',).hide();
    });


setInterval(function(){
    $(".pressStart").fadeIn(200).delay(350);
    $(".pressStart").fadeOut(200)
    },200);

//troca página
function trocapagina() {
    location.replace("nossahistoria.html")
  }
