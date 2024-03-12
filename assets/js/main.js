$("#burgerMenuBtn").on("click", function () {
  $(".bar1").toggleClass("change");
  $(".bar2").toggleClass("change");
  $(".bar3").toggleClass("change");
//   slideInLeftAnim();
});
function slideInLeftAnim()
{
    $(".animSlider").toggleClass("slideInLeft");
}
