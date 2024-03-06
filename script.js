let main_about_box = document.querySelector("#main_about_box")
let hey_btn = document.querySelector("#hey")
main_about_box.addEventListener("mouseenter",function(){
    gsap.to(hey_btn,{
        scale:1,
        opacity:1
    })
})
main_about_box.addEventListener("mouseleave",function(){
    gsap.to(hey_btn,{
        scale:0,
        opacity:0
    })
})
main_about_box.addEventListener("mousemove",function(dets){ 
    gsap.to(hey_btn,{
        left:dets.x-80,
        top:dets.y-80
    })
})