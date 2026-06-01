let marks = [ 97 , 98 , 99 , 90 , 100];
console.log(marks);
marks[2] = 100;
for(let i = 0; i<5; i++){
    console.log(marks[i]);
}
console.log(marks.length)

let heroes = ["Anju Sapkota" , "Jivan Nath Sharma" , "Shanti Sharma" , "Ganesh Sharma" , "Sarada Sharma"];
console.log(heroes[0]);
console.log(heroes);
for(let i = 0; i < (heroes.length); i++){
    console.log(heroes[i]);
}
for(let idx of heroes){
    console.log(idx);
} 
let cities = ["Baglung" , "pokhara" , "Kathmandu"];
for(let city of cities){
    console.log(city.toUpperCase());
}

console.log("<-----array method---->");
let vegetable = ["Potato" , "Cabbage" , "Cauliflower" , "Brocauli" , "Beans"];
console.log(vegetable);
vegetable.push("Cucumber");
console.log(vegetable);
let deletedItem = vegetable.pop();
console.log(vegetable);
console.log(deletedItem);

let fruit = ["Apple" , "Banana" , "Mango" , "Litchi" , "Grape"];
let chocolate = ["Dark Chocolate" , "Dark Fantasy"];
console.log(fruit);
console.log(fruit.toString());
let foodItems = vegetable.concat(fruit , chocolate);
console.log(foodItems);

chocolate.unshift("Kitkat");
console.log(chocolate);

let deletedChoco = chocolate.shift();
console.log(chocolate);
console.log("deleted " , deletedChoco);

console.log(foodItems.slice(2 , 5));

let arr = [1 , 2 , 3 , 4 , 5 , 6];
//add
// arr.splice(2 , 0 , 2.5);
//delete
//arr.splice(2 , 1);
//replace
arr.splice(2 , 1 , 3.5); 

console.log("<------Array Destructuring------>");
let fruits = ["Apple" , "Banana" , "Mango"];
let [firstFruit , secondFruit , thirdFruit] = fruits;

//we can skip the element from the array
let [first , , third] = fruits;
console.log(first);

//Another powerful feature of array destructuring is the ability to use default values. If the array has fewer elements than the variables you're trying to assign, you can provide default values:
let numbers = [1 , 2 , 3];
let [x , y , z , w = 4] = numbers;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

//Now, let's discuss the rest syntax, denoted by three dots (...). It allows you to capture the remaining elements of an array that haven’t been destructured into a new array. Here's how it works:
let fav = ["Apple" , "Banana" , "Mango" , "Grapes" , "Kiwi"];
let [fulka , halka , ...khatra] = fav;
console.log(fulka);
console.log(halka);
console.log(khatra);
 
//String and Array method to reverse the string
let firstName = "Aayus";
let charArray = firstName.split("");
console.log(charArray);
charArray.reverse();
let revString = charArray.join("");
console.log(revString);


