var slideIndex = 7;
var direction = null;
var previousIndex = null;

showDivs(slideIndex);

function plusDivs(n) {

  if(n > 0){
      direction = "left"
  }else{
      direction = "right"
  }

  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  
  x[slideIndex-1].style.display = "block";  
  x[slideIndex-1].style.opacity = 0.9;
  x[slideIndex-1].style.animation = "animation-slide-left 4s ease-out";
  x[slideIndex-1].style.transform = ".2s";
}