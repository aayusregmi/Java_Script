function getId(id){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
           console.log(`ID = ${id}`);
           resolve(200);
        },2000)
    })
}
 (async function(){
  await getId(100);
  await getId(200);
  await getId(300);
 })();