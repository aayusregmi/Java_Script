let div1 = document.querySelector("div");
console.log(div1);
let id = div1.getAttribute("id");
console.log(id);
let name = div1.getAttribute("name");
console.log(name);
id = div1.setAttribute("id" , "newBox" );
console.log(id);
div1.style.backgroundColor = "Green";
// div1.style.visibility = "hidden";

let newBtn = document.createElement("button");
newBtn.innerText = "Append";
div1.append(newBtn);

let anoBtn = document.createElement("button");
anoBtn.innerText = "prepend";
div1.prepend(anoBtn);

let beforeBtn = document.createElement("button");
beforeBtn.innerText = "before";
div1.before(beforeBtn);

let aftBtn = document.createElement("button");
aftBtn.innerText = "After";
div1.after(aftBtn);

anoBtn.remove();