let cutieName = "Aayushma Dhital Chhetri";
console.log(cutieName);
let length = cutieName.length;
console.log(`Length of cutieName is ${length}`);

//template literal
let specialString = `This is the template literal`;
console.log(specialString);
console.log(typeof specialString);
let object = {
    item : "pen",
    price : 10
};
let output = `The price of ${object.item} is ${object.price}`;
console.log(output);
//Escape character
console.log("Aayus\nRegmi"); // \n treated as the single character
// \n ---> next line , \t ---> tab space

//stringmethod in javascript
console.log("<------Using stringmethod in js------->");
let userName1 = "Aayus Regmi";
userName1.toUpperCase();   // my string change to the uppercase
console.log(userName1);    //this give me the origin string i.e the string method that i use always return the new value (immutable ---> original value doesnot change)
let changeUserName = userName1.toUpperCase();
console.log(changeUserName);
//str.trim ---> remove whitespaces of starting and ending
let spacedString = '     Aayus    Regmi     '
console.log(spacedString);
console.log(spacedString.trim());

//str.slice
console.log("<-----String Slice----->");
let slice2Be = "abcdefg"
console.log(slice2Be.slice(2 , 5))    //cde
console.log(slice2Be.slice(2));       //cdefg

//str.concat
console.log("String Concatination");
let firstName = "Aayus";
let lastName = "Regmi";
console.log(`${firstName.concat(lastName)}`);
 //str.replaca
 console.log("String Replace");
 let greet = "Hello";
 console.log(`${greet.replace("l" , "u")}`);  //replace ley first matching lai replace garxa 
 console.log(`${greet.replaceAll("l" , "u")}`); //replaceALL ley sabai matching lai replace garxa