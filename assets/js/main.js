var navCounter = 0;

$("#burgerMenuBtn").on("click", function () {
  $(".bar1").toggleClass("change");
  $(".bar2").toggleClass("change");
  $(".bar3").toggleClass("change");

  if(navCounter === 0)
  {
    navSlideDown();
  }
  else
  {
    navSlideUp();
  }
  console.log(navCounter);
});
$(".navlink").on("click", function () {
  removeAll();
  slideInLeftAnim();
  console.log("nav clicked");
});
function navSlideDown()
{
  $(".navOverlay").toggleClass("fadeInDown");
  navCounter = 1;
}
function navSlideUp()
{
  $(".navOverlay").toggleClass("fadeOutUp");
  navCounter = 0;
  setTimeout(() => {  removeUnnecessaryClass(); }, 300);
}
function removeUnnecessaryClass()
{
  // remove the classes of overlay
  $(".navOverlay").removeClass("fadeOutUp");
  $(".navOverlay").removeClass("fadeInDown");
}
function slideInLeftAnim() {
  // play the animation then remove its class when it's done
  $(".animSlider").toggleClass("slideInLeft");
  setTimeout(() => {  $(".animSlider").removeClass("slideInLeft"); }, 700);
}
function removeAll()
{
  navSlideUp()
  $(".bar1").removeClass("change");
  $(".bar2").removeClass("change");
  $(".bar3").removeClass("change");
}
$(document).ready(function(){
  $('.content').toggleClass("zoomIn");
  $('#particles-js').toggleClass("zoomIn");
})