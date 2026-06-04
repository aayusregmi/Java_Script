console.log("Let's Start the DOM journey");
let head = document.getElementById("header"); //It returns h1 
console.dir(head);
let heading = document.getElementsByClassName("head-class"); //It return HTMl collection
console.dir(heading);
let para = document.getElementsByTagName("p");   //It return HTML collection
console.dir(para);
//<----------Query Selector---------->
let firstEle = document.querySelector("p"); //return first element
console.dir(firstEle);
let secondEle = document.querySelectorAll("p"); //return nodelist
console.dir(secondEle);
//using class
let ele1 = document.querySelector(".myPara"); //return first element of related class
console.dir(ele1);
let ele2 = document.querySelectorAll(".myPara"); //return node list of related class
console.dir(ele2);
//first child : there are nodes as the child such as--> text , comment and element so if i need specifically the element child then i have to use firstElementChild
console.log(document.getElementById("para-01").firstElementChild);
