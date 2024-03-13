let prj_array = [
    {
      prj_link: "https://the-om-pawar.github.io/notes/",
      img_src: "notes.png",
      prj_box_head: "Notes Taking App",
      prj_info: `This is a progressive web application i.e. can be downloaded in any device "mobile, tabs, computers". its responsive and also runs offline`,
      alert_span: `click image to check-out`,
      live:true
    },
    {
      prj_link: "https://www.rkclasses.co.in/",
      img_src: "rk poster.png",
      prj_box_head: "RK Coaching classes",
      prj_info: `This is mine first full-stake vps deployed website in 2022. <br> It is a promotional and student management website. well authenticated, stuctured data and realtime website. created in 11th standard for a coaching institute`,
      alert_span: `click image to check-out`,
      live:true
    },
    {
      prj_link: "https://github.com/THE-OM-PAWAR/rural-development-prj.git",
      img_src: "farm.png",
      prj_box_head: "Web-app for rural-areas",
      prj_info: `Ths application is project of Hackathon. it uses complex data-structuring also real time. <br> works on the concept to create a EComerse plateform farmers can sell, post jobs and rent there equipments here`,
      alert_span: `repository on github`,
      live:false
    },
    {
      prj_link: "http://52.66.73.191:3000/",
      img_src: "MSG app.png",
      prj_box_head: "chat application",
      prj_info: `A replica of modern realtime messaging application. <br> it is mine initial step to working in backend server and json data transferiing using APIs`,
      alert_span: `click image to check-out`,
      live:true
    },
    {
      prj_link: "https://the-om-pawar.github.io/VectorCalculator/",
      img_src: "vector.png",
      prj_box_head: "Vector Calculators",
      prj_info: `static website to solve vector calculations. <br> one of first hosted website developed as school project in 11th standard simple light with childish UI. `,
      alert_span: `click image to check-out`,
      live:true
    },
    {
      prj_link: "https://the-om-pawar.github.io/XO/",
      img_src: "tic.png",
      prj_box_head: "Tic Tac Toe(XO)",
      prj_info: `Progressive application to play with a friend. <br> self developed logics 
      simplistic animation in pure html, css, js and uses of svg `,
      alert_span: `click image to check-out`,
      live:true
    },
  ];
  
  let main_projects_box = document.getElementById("main_projects_box");
  prj_array.forEach((element, index) => {
    let pre_prj_box1 = document.createElement("div");
    pre_prj_box1.classList.add("pre_prj_box");
    pre_prj_box1.id = `pre_prj_box${index}`;
    pre_prj_box1.innerHTML = `
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
    </div>`;
    main_projects_box.appendChild(pre_prj_box1);
    if (element.live == false) {
      
      console.log(pre_prj_box1.children[1].children[0].children[0].innerHTML = "")
    }
  });