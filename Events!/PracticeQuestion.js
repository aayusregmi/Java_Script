const btn = document.querySelector("#button-mode");
const bkground = document.querySelector("body");
let currentMode_body = "Light";
let currentMode_button = "Black"
let currentBtnColor = "Light"
btn.addEventListener("click" , ()=>{
    if(currentMode_body === "Light"){
        bkground.style.backgroundColor = "black";
        currentMode_body = "Dark";
        btn.style.backgroundColor = "white";
        currentMode_button = "Light"
        btn.style.color = "black";
        currentBtnColor = "black";
      
    }else{
      bkground.style.backgroundColor = "white";
      currentMode_body = "Light";
      btn.style.backgroundColor = "black";
      currentMode_button = "Black";
      btn.style.color = "white";
      currentBtnColor = "white";
    }
})
const inp = document.getElementById("input");
inp.addEventListener("input" , ()=>{
    console.log(input.value)
})