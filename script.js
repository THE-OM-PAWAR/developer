let scroll = new LocomotiveScroll({
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

function mousemove_ani() {
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

  
}  
mousemove_ani()

function menu_work() {
  let menuBTN = document.getElementById("menuBTN")
  menuBTN.onclick = ()=>{
    if (menuBTN.classList.contains("not_clicked")) {
      menuBTN.classList.remove("not_clicked")
      document.querySelector("menu").style.height="100vh"
      document.querySelectorAll(".link").forEach(element => {
        element.style.color = "#fff"
      });
      gsap.from("menu >ul>li", {
        y: 20,
        opacity: .5,
        duration: 0.5,
        stagger: 0.2,
        delay: .5,
      });
      
        document.querySelector("#nav_part1").innerHTML = `        <svg
        width="125"
        height="75"
        viewBox="0 0 125 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.8461 18.9946C43.2041 18.9946 55.6922 31.25 55.6922 46.8407C55.6922 62.4315 43.2041 74.6869 27.8461 74.6869C12.4881 74.6869 0 62.4315 0 46.8407C0 31.25 12.4881 18.9946 27.8461 18.9946ZM27.8461 63.6725C36.8438 63.6725 43.9022 56.6916 43.9022 46.8407C43.9022 36.9899 36.8438 30.009 27.8461 30.009C18.7709 30.009 11.79 36.9899 11.79 46.8407C11.79 56.6916 18.7709 63.6725 27.8461 63.6725Z"
          fill="#fff"
        />
        <path
          d="M80.8558 53.1235L97.3773 20.5459C97.6876 20.0029 98.2306 19.6926 98.7735 19.6926H108.081C109.012 19.6926 109.633 20.3132 109.633 21.2439V72.4374C109.633 73.3682 109.012 73.9887 108.081 73.9887H99.3941C98.4633 73.9887 97.8427 73.3682 97.8427 72.4374V44.6688L85.8976 68.4039C85.5873 68.9469 85.0444 69.2572 84.5014 69.2572H77.2102C76.6673 69.2572 76.1243 68.9469 75.8141 68.4039L63.8689 44.6688V72.4374C63.8689 73.3682 63.2484 73.9887 62.3176 73.9887H53.6302C52.6994 73.9887 52.0789 73.3682 52.0789 72.4374V21.2439C52.0789 20.3132 52.6994 19.6926 53.6302 19.6926H62.9381C63.4811 19.6926 64.0241 20.0029 64.3343 20.5459L80.8558 53.1235Z"
          fill="#fff"
        />
        <path
          d="M123.4 17.1858C123.352 17.1858 123.279 17.1615 123.255 17.0888L118.819 10.5684H114.698L113.898 17.0161C113.874 17.1131 113.801 17.1858 113.705 17.1858H113.559C113.438 17.1858 113.341 17.0888 113.365 16.9676L115.401 0.387938C115.426 0.29098 115.498 0.218262 115.595 0.218262H120.225C122.867 0.218262 125 2.13317 125 4.99341C125 8.33843 122.479 10.5684 119.425 10.5684L123.788 16.8949C123.909 17.0646 123.837 17.1858 123.643 17.1858H123.4ZM120.176 0.703049H115.91L114.747 10.0837H119.498C121.752 10.0837 124.491 8.50811 124.491 4.99341C124.491 2.23013 122.309 0.703049 120.176 0.703049Z"
          fill="#fff"
        />
        <path
          d="M109.976 17.0161C109.952 17.1131 109.879 17.1858 109.782 17.1858H100.232C100.111 17.1858 100.014 17.0888 100.038 16.9676L102.074 0.387938C102.099 0.29098 102.171 0.218262 102.268 0.218262H111.819C111.94 0.218262 112.037 0.315219 112.012 0.436416V0.533373C111.988 0.630331 111.916 0.703049 111.819 0.703049H102.583L101.638 8.26571H109.734C109.855 8.26571 109.952 8.36267 109.928 8.48387V8.58082C109.904 8.67778 109.831 8.7505 109.734 8.7505H101.59L100.62 16.701H109.807C109.928 16.701 110.001 16.798 110.001 16.9191L109.976 17.0161Z"
          fill="#fff"
        />
        <path
          d="M87.647 17.0161C87.6228 17.1131 87.5501 17.1858 87.4531 17.1858H87.3077C87.1865 17.1858 87.0895 17.0888 87.1138 16.9676L89.1499 0.387938C89.1741 0.29098 89.2468 0.218262 89.3438 0.218262H93.9735C96.6156 0.218262 98.7487 2.13317 98.7487 4.99341C98.7487 8.33843 96.2278 10.5684 93.1736 10.5684H88.4469L87.647 17.0161ZM93.925 0.703049H89.6589L88.4954 10.0837H93.2463C95.5006 10.0837 98.2396 8.50811 98.2396 4.99341C98.2396 2.23013 96.0581 0.703049 93.925 0.703049Z"
          fill="#fff"
        />
        <path
          d="M77.5276 0C81.9876 0 85.066 3.34503 85.066 7.8293C85.066 12.556 81.3089 17.4038 75.9278 17.4038C71.4435 17.4038 68.3893 14.0103 68.3893 9.59877C68.3893 4.3146 72.4373 0 77.5276 0ZM75.9278 16.8706C80.5817 16.8706 84.5327 12.6772 84.5327 7.8293C84.5327 3.19959 81.2362 0.533265 77.5033 0.533265C72.2434 0.533265 68.9226 5.11449 68.9226 9.59877C68.9226 14.0103 72.0495 16.8706 75.9278 16.8706Z"
          fill="#fff"
        />
        <path
          d="M58.2485 16.701H66.3929C66.5141 16.701 66.5868 16.798 66.5868 16.9191L66.5626 17.0161C66.5384 17.1131 66.4656 17.1858 66.3687 17.1858H57.8607C57.7395 17.1858 57.6425 17.0888 57.6668 16.9676L59.7029 0.387938C59.7271 0.29098 59.7998 0.218262 59.8968 0.218262H60.0422C60.1634 0.218262 60.2604 0.315219 60.2361 0.436416L58.2485 16.701Z"
          fill="#fff"
        />
        <path
          d="M54.278 17.0161C54.2538 17.1131 54.1811 17.1858 54.0841 17.1858H44.5338C44.4126 17.1858 44.3157 17.0888 44.3399 16.9676L46.376 0.387938C46.4003 0.29098 46.473 0.218262 46.5699 0.218262H56.1202C56.2414 0.218262 56.3384 0.315219 56.3141 0.436416V0.533373C56.2899 0.630331 56.2172 0.703049 56.1202 0.703049H46.8851L45.9397 8.26571H54.0356C54.1568 8.26571 54.2538 8.36267 54.2296 8.48387V8.58082C54.2053 8.67778 54.1326 8.7505 54.0356 8.7505H45.8912L44.9217 16.701H54.1084C54.2296 16.701 54.3023 16.798 54.3023 16.9191L54.278 17.0161Z"
          fill="#fff"
        />
        <path
          d="M29.9666 0.218262C30.0636 0.218262 30.1363 0.266741 30.1606 0.363699L34.766 16.4344L43.371 0.315219C43.3952 0.266741 43.4679 0.218262 43.5407 0.218262H43.7103C43.88 0.218262 43.9527 0.315219 43.8558 0.484895L34.8872 17.0888C34.863 17.1373 34.7903 17.1858 34.7176 17.1858H34.6691C34.5721 17.1858 34.4994 17.1373 34.4752 17.0403L29.6031 0.460655C29.5546 0.315219 29.6273 0.218262 29.797 0.218262H29.9666Z"
          fill="#fff"
        />
        <path
          d="M25.7779 17.0161C25.7537 17.1131 25.681 17.1858 25.584 17.1858H16.0337C15.9125 17.1858 15.8156 17.0888 15.8398 16.9676L17.8759 0.387938C17.9001 0.29098 17.9729 0.218262 18.0698 0.218262H27.6201C27.7413 0.218262 27.8383 0.315219 27.814 0.436416V0.533373C27.7898 0.630331 27.7171 0.703049 27.6201 0.703049H18.3849L17.4396 8.26571H25.5355C25.6567 8.26571 25.7537 8.36267 25.7294 8.48387V8.58082C25.7052 8.67778 25.6325 8.7505 25.5355 8.7505H17.3911L16.4215 16.701H25.6082C25.7294 16.701 25.8022 16.798 25.8022 16.9191L25.7779 17.0161Z"
          fill="#fff"
        />
        <path
          d="M6.37868 0.218262C10.6933 0.218262 13.7959 3.56329 13.7959 8.02332C13.7959 13.6226 9.86914 17.1858 4.87584 17.1858H0.197653C0.076457 17.1858 -0.0205001 17.0888 0.00373918 16.9676L2.03984 0.387938C2.06408 0.29098 2.1368 0.218262 2.23376 0.218262H6.37868ZM4.8516 16.701C8.94804 16.701 13.2142 13.9377 13.2142 8.04756C13.2142 3.53905 10.0388 0.703049 6.3302 0.703049H2.54887L0.585483 16.701H4.8516Z"
          fill="#fff"
        />
      </svg>`
        
      // });

    }else{
      menuBTN.classList.add("not_clicked")
      document.querySelector("menu").style.height="0vh"
      document.querySelectorAll(".link").forEach(element => {
        element.style.color = "#000"
      });
      document.querySelector("#nav_part1").innerHTML = `        <svg
      width="125"
      height="75"
      viewBox="0 0 125 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.8461 18.9946C43.2041 18.9946 55.6922 31.25 55.6922 46.8407C55.6922 62.4315 43.2041 74.6869 27.8461 74.6869C12.4881 74.6869 0 62.4315 0 46.8407C0 31.25 12.4881 18.9946 27.8461 18.9946ZM27.8461 63.6725C36.8438 63.6725 43.9022 56.6916 43.9022 46.8407C43.9022 36.9899 36.8438 30.009 27.8461 30.009C18.7709 30.009 11.79 36.9899 11.79 46.8407C11.79 56.6916 18.7709 63.6725 27.8461 63.6725Z"
        fill="black"
      />
      <path
        d="M80.8558 53.1235L97.3773 20.5459C97.6876 20.0029 98.2306 19.6926 98.7735 19.6926H108.081C109.012 19.6926 109.633 20.3132 109.633 21.2439V72.4374C109.633 73.3682 109.012 73.9887 108.081 73.9887H99.3941C98.4633 73.9887 97.8427 73.3682 97.8427 72.4374V44.6688L85.8976 68.4039C85.5873 68.9469 85.0444 69.2572 84.5014 69.2572H77.2102C76.6673 69.2572 76.1243 68.9469 75.8141 68.4039L63.8689 44.6688V72.4374C63.8689 73.3682 63.2484 73.9887 62.3176 73.9887H53.6302C52.6994 73.9887 52.0789 73.3682 52.0789 72.4374V21.2439C52.0789 20.3132 52.6994 19.6926 53.6302 19.6926H62.9381C63.4811 19.6926 64.0241 20.0029 64.3343 20.5459L80.8558 53.1235Z"
        fill="black"
      />
      <path
        d="M123.4 17.1858C123.352 17.1858 123.279 17.1615 123.255 17.0888L118.819 10.5684H114.698L113.898 17.0161C113.874 17.1131 113.801 17.1858 113.705 17.1858H113.559C113.438 17.1858 113.341 17.0888 113.365 16.9676L115.401 0.387938C115.426 0.29098 115.498 0.218262 115.595 0.218262H120.225C122.867 0.218262 125 2.13317 125 4.99341C125 8.33843 122.479 10.5684 119.425 10.5684L123.788 16.8949C123.909 17.0646 123.837 17.1858 123.643 17.1858H123.4ZM120.176 0.703049H115.91L114.747 10.0837H119.498C121.752 10.0837 124.491 8.50811 124.491 4.99341C124.491 2.23013 122.309 0.703049 120.176 0.703049Z"
        fill="black"
      />
      <path
        d="M109.976 17.0161C109.952 17.1131 109.879 17.1858 109.782 17.1858H100.232C100.111 17.1858 100.014 17.0888 100.038 16.9676L102.074 0.387938C102.099 0.29098 102.171 0.218262 102.268 0.218262H111.819C111.94 0.218262 112.037 0.315219 112.012 0.436416V0.533373C111.988 0.630331 111.916 0.703049 111.819 0.703049H102.583L101.638 8.26571H109.734C109.855 8.26571 109.952 8.36267 109.928 8.48387V8.58082C109.904 8.67778 109.831 8.7505 109.734 8.7505H101.59L100.62 16.701H109.807C109.928 16.701 110.001 16.798 110.001 16.9191L109.976 17.0161Z"
        fill="black"
      />
      <path
        d="M87.647 17.0161C87.6228 17.1131 87.5501 17.1858 87.4531 17.1858H87.3077C87.1865 17.1858 87.0895 17.0888 87.1138 16.9676L89.1499 0.387938C89.1741 0.29098 89.2468 0.218262 89.3438 0.218262H93.9735C96.6156 0.218262 98.7487 2.13317 98.7487 4.99341C98.7487 8.33843 96.2278 10.5684 93.1736 10.5684H88.4469L87.647 17.0161ZM93.925 0.703049H89.6589L88.4954 10.0837H93.2463C95.5006 10.0837 98.2396 8.50811 98.2396 4.99341C98.2396 2.23013 96.0581 0.703049 93.925 0.703049Z"
        fill="black"
      />
      <path
        d="M77.5276 0C81.9876 0 85.066 3.34503 85.066 7.8293C85.066 12.556 81.3089 17.4038 75.9278 17.4038C71.4435 17.4038 68.3893 14.0103 68.3893 9.59877C68.3893 4.3146 72.4373 0 77.5276 0ZM75.9278 16.8706C80.5817 16.8706 84.5327 12.6772 84.5327 7.8293C84.5327 3.19959 81.2362 0.533265 77.5033 0.533265C72.2434 0.533265 68.9226 5.11449 68.9226 9.59877C68.9226 14.0103 72.0495 16.8706 75.9278 16.8706Z"
        fill="black"
      />
      <path
        d="M58.2485 16.701H66.3929C66.5141 16.701 66.5868 16.798 66.5868 16.9191L66.5626 17.0161C66.5384 17.1131 66.4656 17.1858 66.3687 17.1858H57.8607C57.7395 17.1858 57.6425 17.0888 57.6668 16.9676L59.7029 0.387938C59.7271 0.29098 59.7998 0.218262 59.8968 0.218262H60.0422C60.1634 0.218262 60.2604 0.315219 60.2361 0.436416L58.2485 16.701Z"
        fill="black"
      />
      <path
        d="M54.278 17.0161C54.2538 17.1131 54.1811 17.1858 54.0841 17.1858H44.5338C44.4126 17.1858 44.3157 17.0888 44.3399 16.9676L46.376 0.387938C46.4003 0.29098 46.473 0.218262 46.5699 0.218262H56.1202C56.2414 0.218262 56.3384 0.315219 56.3141 0.436416V0.533373C56.2899 0.630331 56.2172 0.703049 56.1202 0.703049H46.8851L45.9397 8.26571H54.0356C54.1568 8.26571 54.2538 8.36267 54.2296 8.48387V8.58082C54.2053 8.67778 54.1326 8.7505 54.0356 8.7505H45.8912L44.9217 16.701H54.1084C54.2296 16.701 54.3023 16.798 54.3023 16.9191L54.278 17.0161Z"
        fill="black"
      />
      <path
        d="M29.9666 0.218262C30.0636 0.218262 30.1363 0.266741 30.1606 0.363699L34.766 16.4344L43.371 0.315219C43.3952 0.266741 43.4679 0.218262 43.5407 0.218262H43.7103C43.88 0.218262 43.9527 0.315219 43.8558 0.484895L34.8872 17.0888C34.863 17.1373 34.7903 17.1858 34.7176 17.1858H34.6691C34.5721 17.1858 34.4994 17.1373 34.4752 17.0403L29.6031 0.460655C29.5546 0.315219 29.6273 0.218262 29.797 0.218262H29.9666Z"
        fill="black"
      />
      <path
        d="M25.7779 17.0161C25.7537 17.1131 25.681 17.1858 25.584 17.1858H16.0337C15.9125 17.1858 15.8156 17.0888 15.8398 16.9676L17.8759 0.387938C17.9001 0.29098 17.9729 0.218262 18.0698 0.218262H27.6201C27.7413 0.218262 27.8383 0.315219 27.814 0.436416V0.533373C27.7898 0.630331 27.7171 0.703049 27.6201 0.703049H18.3849L17.4396 8.26571H25.5355C25.6567 8.26571 25.7537 8.36267 25.7294 8.48387V8.58082C25.7052 8.67778 25.6325 8.7505 25.5355 8.7505H17.3911L16.4215 16.701H25.6082C25.7294 16.701 25.8022 16.798 25.8022 16.9191L25.7779 17.0161Z"
        fill="black"
      />
      <path
        d="M6.37868 0.218262C10.6933 0.218262 13.7959 3.56329 13.7959 8.02332C13.7959 13.6226 9.86914 17.1858 4.87584 17.1858H0.197653C0.076457 17.1858 -0.0205001 17.0888 0.00373918 16.9676L2.03984 0.387938C2.06408 0.29098 2.1368 0.218262 2.23376 0.218262H6.37868ZM4.8516 16.701C8.94804 16.701 13.2142 13.9377 13.2142 8.04756C13.2142 3.53905 10.0388 0.703049 6.3302 0.703049H2.54887L0.585483 16.701H4.8516Z"
        fill="black"
      />
    </svg>`

      
    }
  }
}
menu_work()
