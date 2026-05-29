//Taking number from the user and checking if the number is multiple of 5 or not.
let number = prompt("Enter a Number:");
number % 5 == 0 ? console.log("Number is multiple of 5") : console.log("Number is not multiple of 5");
//write a code which can give grade to the student accoring to their score
let score;
score = 78;
let grade;
if(score >= 90 && score <= 100){
    grade = "A";
}else if(score >= 70 && score <= 89){
    grade = "B";
}else if(score >= 60 && score <= 69){
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else if(score >= 0 && score <= 49){
    grade = "F";
}
console.log("Your grade is " , grade);