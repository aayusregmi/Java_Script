/* let promise1 = new Promise((resolve , reject) =>{
    console.log("I am promise");
    resolve("Operation Carried on succesfully");
})
let promise2 = new Promise((resolve , reject)=>{
    console.log("I am second promise");
    reject("some error happend");
})

// function getData(data , getNextData){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//     console.log("Data" , data);
//     if(getNextData){
//         getData;
//     }
//     resolve(500);
//         } , 5000)
//     })
// }

// function getData2(data , getNextData){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//     // console.log("Data" , data);
//     if(getNextData){
//         getData;
//     }
//     reject("sorry");
//         } , 5000)
//     })
// }
function getPromise(){
    return new Promise((resolve , reject)=>{
        console.log("I am a promise");
         resolve("Succesfully Resolve");
        // reject("Some error")
    })
}
let promise = getPromise();
promise.then((res)=>{
    console.log("Promise resolve" , res);
})
promise.catch((err)=>{
    console.log("error" , err);
})

*/
