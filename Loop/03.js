//Question:Print all even numbers from 0 to 100.
for(let j = 0; j<=100; j++){
    if(j % 2 == 0){
        console.log(`${j}`);
    }
}
/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/
let gameNumber = 7;
let userNumber = prompt("Guess the game number:");
while(gameNumber != userNumber){
    userNumber = prompt("You guess the wrong number , try again:");
}
console.log(`Congratulation!!! You guess the Correct Number which is ${gameNumber}`);

