// section2 logics //
let sec2_btn = document.getElementById("sec2_btn");
function section2_ani() {
  let info_sec2 = [
    `I'm a passionate developer and designer based in Indore. 
      While my formal education journey recently concluded
      with the completion of my 12th class final exams, my journey into
      the world of web development began long before that. Motivated by
      a deep curiosity and a desire to learn, I embarked on a
      self-taught journey into full-stack MERN development and
      designing, honing my skills through dedicated self-study and
      hands-on practice.`,
    `I approach each project with a focus on understanding the unique needs and goals of my clients, ensuring that the end result not only meets but exceeds their expectations. <br>
      
      Thank you for taking the time to learn a bit about me. I look forward to the opportunity to collaborate with you and bring your ideas to life in the digital world."<br>
      
      Feel free to customize and tweak this introduction to better reflect your personality and experiences! `,
  ];

  let start = () => {
    sec2_btn.classList.add("second");
    document.getElementById("main_content_box").firstElementChild.innerHTML =
      info_sec2[0];
  };
  start();

  sec2_btn.addEventListener("click", function () {
    if (sec2_btn.classList.contains("second")) {
      document.getElementById(
        "main_content_box"
      ).firstElementChild.style = ` transform: translateX(200rem) scale(.8);
                  opacity: 0;`;
      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translateX(-200rem) scale(.8);
            opacity: 0;`;
        document.getElementById(
          "slide_btn"
        ).style = `transform: rotate(180deg);`;
      }, 300);
      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.innerHTML = info_sec2[1];
        sec2_btn.classList.toggle("second");
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translateX(0rem) scale(1);
                              opacity: 1;`;
      }, 400);
    } else {
      document.getElementById(
        "main_content_box"
      ).firstElementChild.style = ` transform: translateX(-200rem) scale(.8);
              opacity: 0;`;
      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translateX(200rem) scale(.8);
              opacity: 0;`;
        document.getElementById("slide_btn").style = `transform: rotate(0deg);`;
      }, 300);

      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.innerHTML = info_sec2[0];
        sec2_btn.classList.toggle("second");
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translate(0rem) scale(1);
                  opacity: 1;`;
      }, 500);
    }
  });
}
section2_ani();

// section3 project //



let nav_btn_right = document.getElementById("nav_btn_right");
let nav_btn_left = document.getElementById("nav_btn_left");
let value = main_projects_box.offsetHeight;


let idt2 = false;
nav_btn_right.addEventListener("click", function () {
  let idt = false;
  if (value > main_projects_box.scrollTop + main_projects_box.offsetHeight) {
    value = main_projects_box.scrollTop;
    idt = true;
    idt2 = true;
  }
  if (idt2 == false) {
    value = main_projects_box.scrollTop + main_projects_box.offsetHeight
  }
  main_projects_box.scroll({
    top: value,
    left: 0,
    behavior: "smooth",
  });
  console.log(value + ":scrolled value" + main_projects_box.scrollTop);
  value += main_projects_box.offsetHeight;
  if (idt == true) {
    value = main_projects_box.scrollTop + 1;
  }
});
nav_btn_left.addEventListener("click", function () {
  if (value < 0) {
    value = main_projects_box.offsetHeight;
  }
  if (idt2 == true) {
    value = main_projects_box.scrollTop
  }
  if (idt2 == false) {
    value = main_projects_box.scrollTop
  }
  main_projects_box.scroll({
    top: value - main_projects_box.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
  console.log(value - main_projects_box.offsetHeight + ":scrolled value");
  value -= main_projects_box.offsetHeight;
  if (value < 0) {
    value = main_projects_box.offsetHeight;
  }
});







let slider_btn1 = document.getElementById("slider_btn1")
let slider_btn2 = document.getElementById("slider_btn2")
let width= document.getElementById("info_box1").offsetWidth
let width_container= document.getElementById("info_box_container").offsetWidth
let info_box_container = document.getElementById("info_box_container")

function slider_visibilty() {
  info_box_container.addEventListener('mouseenter' , ()=>{
  document.addEventListener("mousemove" , function(dets){
    console.log(dets.x  + " " + (width_container -width*1.5))
    if (dets.x < width*1.5) {
      slider_btn1.style.opacity = 1
    }
    if (dets.x > width*1.5) {
      slider_btn1.style.opacity = 0
    }
    if (dets.x > (width_container-width*1.5)) {
      slider_btn2.style.opacity = 1
    }
    if (dets.x < (width_container-width*1.5)) {
      slider_btn2.style.opacity = 0
    }
  })
})
  info_box_container.addEventListener('mouseleave' , ()=>{
      slider_btn1.style.opacity = 0
      slider_btn2.style.opacity = 0
})
  
}
slider_visibilty()

slider_btn2.addEventListener( 'click' , ()=>{
  document.getElementById("info_box_container").scrollLeft += width 
})
slider_btn1.addEventListener( 'click' , ()=>{
  document.getElementById("info_box_container").scrollLeft -= width 
})



function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function alertOverflow(element) {
  if (!isOverflowing(element)) {
    slider_btn1.style.display = "none"
    slider_btn2.style.display = "none"
  } 
}
alertOverflow(document.getElementById("info_box_container"))


