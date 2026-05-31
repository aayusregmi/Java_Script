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
let cities = ["Baglung" , "pokhara" , "Kathmandau"];
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
