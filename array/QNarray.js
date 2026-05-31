//Qs.
let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix" ];
//removing first company from array
console.log(companies);
companies.shift();
console.log(companies);
//replacing uber with ola
companies.splice(2 , 1 , "Ola");
console.log(companies);
//adding amazon at the end
companies.push("Amazon");
console.log(companies);

//For a given array with marks of students -> [85, 97, 44, 37, 76, 60].Find the average marks of the entire class.
console.log("<----Next Question----->");
let marks_std = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avg;
for(let mark of marks_std){
    sum += mark;
}
avg = sum / marks_std.length ;
console.log(`The average mark of the students is ${avg}`);
/*For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.*/
let prices = [250 , 645 , 300 , 900 , 50];
console.log(prices);
console.log("<----Price after discount---->");
 for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - (0.1 * prices[i]);
 }
console.log(prices);


