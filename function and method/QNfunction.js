/*Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/
function vowel(string){
    let count = 0;
    let length = string.length;
    let charArray = string.toUpperCase().split("");
    for(let i=0 ; i < length; i++ ){
        if(charArray[i]=='A' || charArray[i]=='E' || charArray[i]=='I'|| charArray[i]=='O' || charArray[i]=='U') {
               count++;
        }
    }
    return count;
}
console.log(`There are ${vowel("Aayus")} vowel letter in given name`);

//Create an arrow function to perform the same task.
const vowelNumber = (str)=>{
    let count = 0;
    let length = str.length;
    let charArray = str.toLowerCase().split("");
    for(let i = 0; i < length ; i++){
        if(charArray[i]=='a' || charArray[i]=='e' || charArray[i]=='i'|| charArray[i]=='o' || charArray[i]=='u') {
               count++;
        }
    }
    return count;
}
console.log(`Using arrow function there are ${vowelNumber("Anju")} vowel in given name`);