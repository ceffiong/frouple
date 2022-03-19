function animateIndex(page){
  console.log(document.getElementsByClassName(page))
  document.getElementsByClassName(page)[0].style.animation="animation-headline-screen 2s ease-out";
  document.getElementsByClassName(page)[1].style.animation="animation-subheadline-index 2s ease-out";
  document.getElementsByClassName(page)[2].style.animation = "animation-next-screen 2s ease-out";
  document.getElementsByClassName(page)[3].style.animation = "animation-phone-screen 2s ease-out";

}

function nextScreen(nextpage){
  //scroll to next page
  document.getElementById('#'+nextpage).scrollIntoView();

  //annimate elements on the page
  document.getElementsByClassName(nextpage)[0].style.animation="animation-headline-screen 3s ease-out";
  document.getElementsByClassName(nextpage)[1].style.animation="animation-subheadline-screen 3s ease-out";
  document.getElementsByClassName(nextpage)[2].style.animation = "animation-next-screen 3s ease-out";
  document.getElementsByClassName(nextpage)[3].style.animation = "animation-phone-screen 2s ease-out";

  //remove annimation style
  setTimeout(() => {
    document.getElementsByClassName(nextpage)[0].style.animation = null;
    document.getElementsByClassName(nextpage)[1].style.animation = null;
    document.getElementsByClassName(nextpage)[2].style.animation = null;
    document.getElementsByClassName(nextpage)[3].style.animation = null;
  }, 4000)
}

