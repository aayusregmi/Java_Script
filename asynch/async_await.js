// function api() {
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve(200);
//         } , 2000)
//     })
// }

// async function getWeatherData() {
//     await api(); //1st 
//     await api(); //1st 
// }

function getData(id){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
           console.log("ID" , id);
           resolve(200);
        } , 2000)
    })
}

async function data(){
    console.log("Getting data 1......");
    await getData(400);
    console.log("Getting data 2......");
    await getData(300);
    console.log("Getting data 3......");
    await getData(100);
    console.log("Getting data 4......");
    await getData(200);
    console.log("Getting data 5......");
    await getData(600);
    console.log("Getting data 6......");
    await getData(800);
    console.log("Getting data 7......");
    await getData(900);
    console.log("Getting data 8......");
    await getData(700);

}