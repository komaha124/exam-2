
$(document).ready(function(){
    $(".foto-slaider").click(function() {
        modal2.style.display = "block";
      
    });
});
var modal2 = document.getElementById("myModal2");
var span9 = document.getElementsByClassName("close9")[0];

span9.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
   
}
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});
