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
  // slideInLeftAnim();
});
$(".navlink").on("click", function () {
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
  setTimeout(() => {  removeUnnecessaryClass(); }, 100);
}
function removeUnnecessaryClass()
{
  $(".navOverlay").removeClass("fadeOutUp");
  $(".navOverlay").removeClass("fadeInDown");
}
function slideInLeftAnim() {
  // play the animation then remove its class when it's done
  $(".animSlider").toggleClass("slideInLeft");
setTimeout(() => {  $(".animSlider").removeClass("slideInLeft"); }, 700);
}
