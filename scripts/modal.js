function modal(type, head, discription ,BTN_name , deley , func, param1, param2, param3) {
    let modal_box 
  if (document.getElementById("modal_box")) {
} else {
    let modal_box = document.createElement("div");
    modal_box.id = "modal_box";
    document.body.appendChild(modal_box);
}
modal_box= document.getElementById("modal_box");

  if (func == undefined) {
    func = "emptyy";
  }
  if (type == "type1") {
    if (BTN_name == undefined || BTN_name == "") {
        BTN_name= "Close"
    }
    let modal_type1 = document.createElement("div");
    modal_type1.id = "modal_type1";
    modal_type1.classList.add("Modal");

    modal_type1.innerHTML = `     
    <h3>${head}</h3>
    <p>${discription}</p>
    <button  onclick="closes2(this , ${func}(${
      param1 + "," + param2 + ", " + param3
    }))" >${BTN_name}</button>
    `;

    modal_box.appendChild(modal_type1);
}

if (type == "type2") {
    if (BTN_name == undefined || BTN_name == "") {
        BTN_name= "Undo"
    }
    let modal_type2 = document.createElement("div");
    modal_type2.id = "modal_type2";
    modal_type2.classList.add("Modal");
    
    modal_type2.innerHTML = `<p>${discription}</p><button onclick="closes2(this , ${func}(${
        param1 + "," + param2 + ", " + param3
    }))" >${BTN_name}</button>`;
    modal_box.appendChild(modal_type2);

    if (deley == undefined) {
        deley = 5000
    }
    setTimeout(() => {
        modal_type2.remove()
    }, deley);
  }
}

function closes(element) {
element.parentElement.remove();
}
function emptyy() {}
function closes2(element) {
  closes(element);
}
function emptyy2(count) {
  for (let i = 0; i < count; i++) {
    console.log("hello");
  }
}
