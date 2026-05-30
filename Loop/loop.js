for (let i = 0; i < 5; i++) {
    console.log("Aayus Regmi!!!");
}
console.log("Kada xah hai!!!");
//sum of first 5 natural number
// let n = prompt("Enter the n value:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`sum of first 10 natural number is ${sum}`);
for (var i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}
console.log(`${i}`);
//sum of first 6 natural using while loop
sum = 0;
let a = 1;
while (a <= 6) {
sum += a;
a++
}
console.log(`sum of first 6 natural number: ${sum}`);
//do-while
a = 1;
do{
    console.log(`a = ${a}`);
    a++;
}while(a <= 6);
//for-of-loop
console.log("<-----Practicing For-of loop------>");
let fullName = "Aayus Regmi";
let len = 0;
for (let val of fullName) {
    console.log(`val = ${val}`);
    len++;
}
console.log(`The length of the string is ${len}`);
//for-in loop
console.log("<------Practicing For-in loop------->");
let student = {
    fullName : "Aayus Regmi",
    age : 19,
    level : "Bachelor",
    campus : "Patan",
    ispass : true
};
console.log(student["fullName"]);
console.log(student.fullName)
for(let key in student){
    console.log(`key = ${key} value = ${student[key]}`);
}