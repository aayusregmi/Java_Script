/* function async1(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        console.log("Data1");
        resolve("Sucess1");
        } , 4000)
    })
}

function async2(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        console.log("Data2");
        resolve("Sucess2");
        } , 4000)
    })
}

console.log("Fetching Data1....");
let p1 = async1();
p1.then((res)=>{
    console.log(res);
    console.log("Fetching Data2....");
    let p2 = async2();
    p2.then((res)=>{
    console.log(res);
})
}) */

//<----------------||------------->

/*function timer(sec){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        console.log(sec);
        resolve("Tick Tick");
        } , 1000)
    })
}
timer(1).then((res)=>{
    console.log(res);
    timer(2).then((res)=>{
        console.log(res);
        timer(3).then((res)=>{
            console.log(res);
            timer(4).then((res)=>{
                console.log(res);
            })
        })
    })
}) 
*/

function getData(data){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        console.log(data);
        resolve("Successfully fetched")
        } , 5000)
    })
}
getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    return getData(4);
    console.log(res);
})