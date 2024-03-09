// section2 logics //
let sec2_btn = document.getElementById("sec2_btn");
function section2_ani() {
  let info_sec2 = [
    `I'm a passionate web developer and designer based in indore. 
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

let prj_array = [
  {
    prj_link: "/",
    img_src: "pic5.jpg",
    prj_box_head: "RK Coaching classes",
    prj_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
    temporibus?`,
    alert_span: `click image to check-out`,
  },
  {
    prj_link: "/",
    img_src: "pic2.jpg",
    prj_box_head: "RK Coaching classes",
    prj_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
    temporibus?`,
    alert_span: `click image to check-out`,
  },
  {
    prj_link: "/",
    img_src: "pic4.jpg",
    prj_box_head: "RK Coaching classes",
    prj_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
    temporibus?`,
    alert_span: `click image to check-out`,
  },
  {
    prj_link: "/",
    img_src: "pic2.jpg",
    prj_box_head: "RK Coaching classes",
    prj_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
    temporibus?`,
    alert_span: `click image to check-out`,
  },
  {
    prj_link: "/",
    img_src: "pic4.jpg",
    prj_box_head: "RK Coaching classes",
    prj_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
    temporibus?`,
    alert_span: `click image to check-out`,
  },
  {
    prj_link: "/",
    img_src: "pic5.jpg",
    prj_box_head: "RK Coaching classes",
    prj_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
    temporibus?`,
    alert_span: `click image to check-out`,
  }
];

prj_array.forEach(element => {
    let main_projects_box = document.getElementById("main_projects_box")

    let pre_prj_box1 = document.createElement("div")
    pre_prj_box1.classList.add("pre_prj_box")
    pre_prj_box1.innerHTML = `
    <div class="pre_prj_box" id="pre_prj_box1">
    <a href="${element.prj_link}">
      <img
        data-scroll
        data-scroll-speed=".5"
        src="assets/${element.img_src}"
        alt="thumbnail"
        loading="lazy"
      />
    </a>
    <div data-scroll
    data-scroll-speed="-.5" class="prj_caption_box">
      <div class="prj_caption_head">
        <div class="live_box">
          <!--svg  -->
          <svg
            width="118"
            height="40"
            viewBox="0 0 118 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="118"
              height="40"
              rx="20"
              fill="#FFD0D0"
              fill-opacity="0.31"
            />
            <path
              d="M37.5 20C37.5 29.0317 29.9708 36.5 20.5 36.5C11.0292 36.5 3.5 29.0317 3.5 20C3.5 10.9683 11.0292 3.5 20.5 3.5C29.9708 3.5 37.5 10.9683 37.5 20Z"
              fill="#D30000"
              stroke="black"
              stroke-width="7"
            />
            <path
              d="M54.592 25.64H60.664C60.952 25.64 61.144 25.832 61.144 26.12V28.52C61.144 28.808 60.952 29 60.664 29H51.424C51.136 29 50.944 28.808 50.944 28.52V12.68C50.944 12.392 51.136 12.2 51.424 12.2H54.112C54.4 12.2 54.592 12.392 54.592 12.68V25.64ZM66.6979 12.2C66.9859 12.2 67.1779 12.392 67.1779 12.68V28.52C67.1779 28.808 66.9859 29 66.6979 29H64.0099C63.7219 29 63.5299 28.808 63.5299 28.52V12.68C63.5299 12.392 63.7219 12.2 64.0099 12.2H66.6979ZM77.8476 23.864L82.1916 12.512C82.2636 12.32 82.4556 12.2 82.6476 12.2H85.5276C85.9596 12.2 86.1516 12.464 85.9836 12.848L79.5996 28.688C79.5276 28.88 79.3596 29 79.1436 29H76.5516C76.3356 29 76.1676 28.88 76.0956 28.688L69.7116 12.848C69.5436 12.464 69.7356 12.2 70.1676 12.2H73.0476C73.2396 12.2 73.4316 12.32 73.5036 12.512L77.8476 23.864ZM92.0217 22.28V25.64H98.8137C99.1017 25.64 99.2937 25.832 99.2937 26.12V28.52C99.2937 28.808 99.1017 29 98.8137 29H88.8537C88.5657 29 88.3737 28.808 88.3737 28.52V12.68C88.3737 12.392 88.5657 12.2 88.8537 12.2H98.8137C99.1017 12.2 99.2937 12.392 99.2937 12.68V15.08C99.2937 15.368 99.1017 15.56 98.8137 15.56H92.0217V18.92H97.7337C98.0217 18.92 98.2137 19.112 98.2137 19.4V21.8C98.2137 22.088 98.0217 22.28 97.7337 22.28H92.0217Z"
              fill="black"
            />
          </svg>
        </div>
        <h3>${element.prj_box_head}</h3>
      </div>
      <div class="prj_discription">
        <p>
        ${element.prj_info}<br><span>${element.alert_span}</span>
        </p>
      </div>
    </div>
  </div>`
  main_projects_box.appendChild(pre_prj_box1)
});

