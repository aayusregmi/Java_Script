const btn = document.querySelector("#myButton");
const bdy = document.querySelector("body");
let iniMode = "white";
btn.addEventListener("click" , ()=>{
       if(iniMode === "white"){
        bdy.classList.remove("light");
        bdy.classList.add("dark");
        btn.classList.remove("dark");
        btn.classList.add("light");
        iniMode = "black";
        console.log(iniMode);
       }else{
        bdy.classList.remove("dark");
        bdy.classList.add("light");
        btn.classList.remove("light");
        btn.classList.add("dark");
        iniMode = "white"
        console.log(iniMode);
       }
})