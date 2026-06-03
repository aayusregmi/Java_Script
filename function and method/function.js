function myFunction(){  //function defination
    console.log("Hello, Welcome to the journey of Java Script");
    console.log("java Script is fun");
}
myFunction();    //function call
//doing some fun things-------------------->
// let userName = prompt("Enter your Name:");
// function gretting(msg){   //msg------> Parameter
//     console.log(`${msg}, ${userName} Welcome to the Aayus Website!!:)`);
// }
// gretting("Namaste"); //Namaste---> Argument

//function ----> sum of two number
function sum(a , b){
   let s = a + b;
   console.log("before return");
    return s;
    console.log("After return");
}
let x = 10;
let y = 20;
let add = sum(10 , 20);
console.log(add);

//arrow function (Multiplication Using Arrow Function)
const multiplication = (a , b) =>{
    return a * b;
}
console.log(multiplication(5 , 6));

const hello = () => {
    console.log("Hello Aayus");
}
hello();

function subtraction(x , y) {
     return x - y;
}
function secSubtrac(subtraction){
    return subtraction;
}
console.log(subtraction(5 , 3));
console.log(secSubtrac(5));

console.log("<------forEach Loop in Arrays------->"); //can only be use for array
let number = [10 , 20, 40];
number.forEach(function print(n , idx , number){
    console.log(n , idx , number);
}) 

// <-------Default parameteers--------->
const greeting = (name = "Guest")=>{
    console.log(`Hello,${name}!!! Welcome to our website`);
}
console.log(greeting());
console.log(greeting("Aayus"));