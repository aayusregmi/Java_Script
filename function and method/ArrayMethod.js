//map method
let arr = [1 , 2 , 3 , 4];
// let arr2 = [1 , 4 , 9 , 16];  aam jindagi :c
let arr2 = arr.map((num)=>{
    return num * num;
})
console.log(arr2);
//filter method
let Arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
let evenArr = Arr.filter((num) =>{
    return num > 5;
});
console.log(evenArr);
//reduce methode
let evenNumber = [80 , 40 , 105 , 125 , 6];
evenNumber.reverse();
let sumEven = evenNumber.reduce((prev_value , current_value)=>{
    return prev_value + current_value;
});
console.log(sumEven);
//<--------Another example-------->
let largeEven = evenNumber.reduce((prev_value , current_value)=>{
    // let large = prev_value;
    // if(current_value > prev_value){
    //     large = current_value;
    // }
    return current_value > prev_value? current_value : prev_value;
})
console.log(largeEven);