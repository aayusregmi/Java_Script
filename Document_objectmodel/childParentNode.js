//appendChild
const lastDesert = document.getElementById("desert-list");
const endChild = document.createElement("li");
endChild.innerText = "Cookie";
lastDesert.appendChild(endChild);

//removeChild
const scnDiv = document.getElementById("second-div");
const rmvChild = document.querySelector("#second-div p:last-of-type");
scnDiv.removeChild(rmvChild);
//extra
console.log(window.innerWidth);