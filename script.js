const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function moving_courser() {
let main_about_box = document.querySelector("#section2");
let hey_btn = document.querySelector("#hey");
  main_about_box.addEventListener("mouseenter", function () {
    gsap.to(hey_btn, {
      scale: 1,
      opacity: 1,
    });
  });
  main_about_box.addEventListener("mouseleave", function () {
    gsap.to(hey_btn, {
      scale: 0,
      opacity: 0,
    });
  });
  main_about_box.addEventListener("mousemove", function (dets) {
    gsap.to(hey_btn, {
      left: (dets.x - 80),
      top: (dets.y - 80)
    });
  });

}
moving_courser();

let home_bg_img = document.getElementById("home_bg_img");
let All_info_1 = document.getElementById("All_info_1");
let info_box = document.getElementsByClassName("info_box");

function loading_animation() {
  gsap.from(home_bg_img, {
    y: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.3,
    scale: 20,
  });
  gsap.from(info_box, {
    y: 10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 1,
    // scale:20
  });
  gsap.from("#navigation_bar", {
    y: -10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.6,
    delay: 1,
    // scale:20
  });
}
loading_animation();

