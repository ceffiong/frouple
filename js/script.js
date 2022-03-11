var slideIndex = 7;


showDivs(slideIndex);

function plusDivs(n) {
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
  
  x[slideIndex-1].style.display = "flex";  
  x[slideIndex-1].style.flexDirection = "column";
  x[slideIndex-1].style.justifyContent = "center"; 
  x[slideIndex-1].style.alignItems = "center"; 
  x[slideIndex-1].style.opacity = 0.9;
  x[slideIndex-1].style.animation = "animation-slide 4s ease-out";
  x[slideIndex-1].style.transform = ".4s";
}