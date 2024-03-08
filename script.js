const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



// function moving_courser() {
// let main_about_box = document.querySelector("#main_about_box");
// let hey_btn = document.querySelector("#hey");
//   // main_about_box.addEventListener("mouseenter", function () {
//   //   gsap.to(hey_btn, {
//   //     scale: 1,
//   //     opacity: 1,
//   //     delay: 1,
//   //     transition:.3
//   //   });
//   // });
//   // main_about_box.addEventListener("mouseout", function () {
//   //   gsap.to(hey_btn, {
//   //     scale: 0,
//   //     opacity: 0,
//   //     delay: 1,
//   //     transition:.3
//   //   });
//   // });
//   main_about_box.addEventListener("mousemove", function (dets) {
//     let higth = screen.height
//     gsap.to(hey_btn, {
//       left: (dets.x -80 ),
//       top: (dets.y + higth)
//     });
//     console.log(dets.y + higth)
//   });

// }
// moving_courser();

let home_bg_img = document.getElementById("home_bg_img");
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


document.addEventListener("mousemove" , function(dets){
  gsap.to("#coursor",{
    left: dets.x,
    top:dets.y,
  })
})

document.querySelector("#main_about_box").addEventListener("mouseenter" ,function(){
  gsap.to("#coursor",{
    transform: 'translate(-50% ,-50%) scale(0)'
  })
})
document.querySelector("#main_about_box").addEventListener("mouseleave" ,function(){
  gsap.to("#coursor",{
    transform: 'translate(-50% ,-50%) scale(1)'
  })
})
document.querySelector(".main_projects_box").addEventListener("mouseenter" ,function(){
  gsap.to("#coursor",{

    transform: 'translate(-50% ,-50%) scale(0)'
  })
})
document.querySelector(".main_projects_box").addEventListener("mouseleave" ,function(){
  gsap.to("#coursor",{
    transform: 'translate(-50% ,-50%) scale(1)'
  })
})

document.querySelector("#card_box").addEventListener("mouseenter" ,function(){
  gsap.to("#coursor",{
    scale:3,
    transform: 'translate(-50% ,-50%) scale(1)'
  })
})
document.querySelector("#card_box").addEventListener("mouseleave" ,function(){
  gsap.to("#coursor",{
    scale:1,
    transform: 'translate(-50% ,-50%) scale(1)'
  })
})
document.querySelector("footer>div>svg").addEventListener("mouseenter" ,function(){
  gsap.to("#coursor",{
    scale:3,
    transform: 'translate(-50% ,-50%) scale(1)'
  })
})

document.querySelector("footer>div>svg").addEventListener("mouseleave" ,function(){
  gsap.to("#coursor",{
    scale:1,
    transform: 'translate(-50% ,-50%) scale(1)'
  })
})

