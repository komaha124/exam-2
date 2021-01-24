 
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