const URL = "https://dog.ceo/api/breeds/list/all";
 const dogFact = async () =>{
     console.log("Fetching Data......");
    let response = await fetch(URL);
    console.log(response); //json formate
      let data = await response.json();
      console.log(data);
 }

 dogFact();
