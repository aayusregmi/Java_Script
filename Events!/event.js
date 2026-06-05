let btn = document.querySelector("#btn1");
btn.onclick = () =>{
    console.log("Hello Welcome to the journey of learning javascript");
    alert("Aayus ho Aayus");
}

let box1 = document.querySelector("#box1");
box1.onmouseover = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log("event object");
}
//<-------Event Listener------->
let evntList = document.querySelector("#eventListener");
evntList.addEventListener("click" , () =>{
    console.log(`2 * 3 = 6`);
} ) // evntlist.addeventListener(event , callBack)
const sum = () =>{
    console.log(`2 + 3 = 5`);
}
evntList.addEventListener("click" , sum)
evntList.addEventListener("click" , () =>{
    console.log(`2 * 4 = 8`);
})
evntList.removeEventListener("click" , () =>{
    console.log(`2 + 3 = 5`);
})
//removeEventListener ---> Project gardai jaada yedi malai laagxa ki mah kunai event lai paxi gayera remove garxu taba malai yaad aauxa remove garna ko laaghi same reference hunu parxa. So what i will do vanda jun function ko kaam kunai event maa hunxa jaslai mah paxi gayera remove garni wala xu then tyo function lai mah yeuta reference didinxu yaniki tyo function lai yeuta varibale maa store garera raakhxu
evntList.removeEventListener("click" , sum);
