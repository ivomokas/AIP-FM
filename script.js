

//scroll into lisbon's position
function beginTrip() {
    var elmnt = document.getElementById("t3");
    elmnt.scrollIntoView(false);
  }

//getting modal opening buttons
var modalBtns = document.querySelectorAll(".pop");
console.log(modalBtns);
modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";

    };
});

var closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".popup").style.display = "none");
    };
});

window.onclick = function(e){
    if(e.target.className == 'popup'){
        e.target.style.display = "none";
    }
};