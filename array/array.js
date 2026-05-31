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