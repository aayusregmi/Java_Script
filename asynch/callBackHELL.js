console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Sanchai Hunuhunxa?");
} , 4000 ) //1 s = 1000 ms
console.log("three");
console.log("four");
// <-------callBack-------->
function sum(a , b){
    console.log(`${a + b}`);
}
function calculator(a , b , callBack){
    callBack(a , b);
}
calculator(2 , 3 , sum); //we dont use paranthesis while passing the function as the argument it shows the error , we can even directly pass the function i.e passing complete function as the argument  


//<-------callBack Hell--------->
// function getData(data){
//     setTimeout(()=>{
//         console.log("Data", data);
//     },2000) 
// }
// getData(450);

function getData(data , getNextData){
   setTimeout(() => {
    if(getNextData){
        getNextData();
    }
     console.log("Data" , data);
     
   }, 3000);
}
getData(1 , ()=>{
    getData(2 , ()=>{
        getData(3 ,()=>{
            getData(4);
        });
    });
});
