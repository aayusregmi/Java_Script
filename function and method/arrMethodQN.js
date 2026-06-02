//Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [80 , 70 , 91 , 95 , 99 , 100 , 90 , 89 , 85 , 84];
let marksAbove90 = marks.filter((num)=>{
    return num > 90;
});
console.log(marksAbove90);

/*Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/
let maxNumber = prompt("Enter the maximum number:");
let numArray = [];
for(let i = 1; i<=maxNumber ; i++){
    numArray[i-1] = i;
}
//
console.log(numArray);
let sumArray = numArray.reduce((previousVal , currentval)=>{
    return previousVal + currentval;
})
console.log(sumArray);
//
let prodArray = numArray.reduce((previousVal , currentval)=>{
    return previousVal * currentval;
})
console.log(prodArray);

