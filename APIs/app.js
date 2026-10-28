// Accessing data from json => Json returns data in string fromat, to use it in javascript objects, we use parse
// JSON.parse(data) Method

// To parse the string data into JS object

// let jsonRes = '{"fact":"Some cats have survived falls of over 65 feet (20 meters), due largely to their \u201crighting reflex.\u201d The eyes and balance organs in the inner ear tell it where it is in space so the cat can land on its feet. Even cats without a tail have this ability.","length":249}'

// let validRes = JSON.parse(jsonRes);    // to parse string data in Js Object

// // console.log(validRes);

// console.log(validRes.fact);


// to convert Js object data in Json

// let student = {

//     name: "Aditya",
//     age: 21
// };

// let jsonData = JSON.stringify(student);

// console.log(jsonData);


// Testing API requests 

// Tools => Hoppscotch, Postman


// Ajax => Asynchonorous javascript and XML

// Javascript => request => API  => Response => XML  , It is asynchonorous  and resposne comes in json


// Status Codes for APIs

// 200 - OK  => means API found 

// 404 not found =>  means Api not found , it shoes error, means a client sends a request that doesnt exists

// 400 => Bad request 

// 500 => Internal Server Error


// Add Information is URLs using query strings

// https:// www.google.com/search?q=harry+potter,   here q = key, and value = harry + potter

// Url ?name = aditya&marks=95


// Api for Harry Potter => https://potterdb.com/, https://api.potterdb.com/

// https://api.potterdb.com/v1/movies , https://api.potterdb.com/v1/movies/id


//  Apis for University information => https://github.com/Hipo/university-domains-list

// http://universities.hipolabs.com/search?name=India, returns colleges that list has of india

// https headers, used to get request and resposne , means type of data in whih format 

// example Header => Accept, Application/json,   text/plain  , used to send meta data(data about data)



// Our First API request using fetch

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) =>{
//     console.log(res);

//     // console.log(res.json());   // it also return promise and object inside where data is

//     res.json().then((data) =>{

//         console.log(data);
//     })

// })
// .catch((err) =>{

//     console.log(err);
// })


//  more compact form to written

// fetch(url)
// .then((res) =>{

//     return res.json();
// })

// .then((data) => {

//     console.log("data1 fetched: ",data.fact);

//     return fetch(url);
// })
// .then((res) => {

//     return res.json();
// })
// .then((data) =>{

//     console.log("data2 fetched: ", data.fact);
// })

// .catch((err) =>{

//     console.log("Error: ",err);
// })



// using async and await in fetching api 

// let url = "https://catfact.ninja/fact";

// async function getFacts(){

//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch(err){

//         console.log("ERROR WAS",err);
//     }

//     console.log("bye");

// };


// Axios => Library to make HTTP requests


// let btn = document.querySelector("button");

// let p = document.querySelector("p");

// btn.addEventListener("click", async () =>{

//     let fact = await getFacts();
//     console.log(fact);

//     let p = document.querySelector("#result");
    
//     p.innerText = fact;
// });



// let url = "https://catfact.ninja/fact";
// async function getFacts(){

//     try{
//         let res = await axios.get(url);
//         return res.data.fact;

//     } catch(err){

//         console.log("ERROR WAS",err);

//         return "NO Data Found";
//     }

// };

// get dog api images

//  let btn = document.querySelector("button");

//  let url = "https://dog.ceo/api/breeds/image/random";


//  btn.addEventListener("click", async () =>{

//     let link = await getImg();
    
//     let img = document.querySelector("#result");

//     img.setAttribute("src", link);
//     console.log(link);

// });


//  async function getImg(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message;

//     } catch(err){

//         console.log("ERROR WAS",err);

//         return "/";
//     }

// };

// Getting a random joke using headers

// const url = "https://icanhazdadjoke.com/";

//     async function getJokes(){

//         try{

//             const config = {headers: {Accept: "application/json"}};
//             let res = await axios.get(url, config);
//             console.log(res.data);

//         } catch(err){
//             console.log(err);
//         }

// } 


//Using Query String

// get the colleges names as per coutry search


// let url = "http://universities.hipolabs.com/search?name="

// let btn = document.querySelector("button");


// btn.addEventListener("click", async () =>{

//     let country = document.querySelector("input").value;

//     let collArr = await getUniversity(country);

//     show(collArr);


// })

// function show(collArr){

//     let list = document.querySelector("#list");

//     list.innerText = "";

//     for(coll of collArr){

//         let li = document.createElement("li");
//         li.innerText = coll.name;

//         list.appendChild(li);
//     }


// }



// async function getUniversity(country){

//     try{

//         let res = await axios.get(url + country);
         
//         return res.data;

//     }catch(err){

//         console.log("Error was", err);

//         return [];
//     }

// };


// get colleges as per country of state search



// let baseURL = "http://universities.hipolabs.com/search";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {

//     let country = document.querySelector("#country").value.trim();
//     let state = document.querySelector("#state").value.trim();

//     let collArr = await getUniversity(country, state);
//     show(collArr);

// });

// function show(collArr) {

//     let list = document.querySelector("#list");
//     list.innerText = "";

//     if (collArr.length === 0) {
//         let li = document.createElement("li");
//         li.innerText = "No universities found";
//         list.appendChild(li);
//         return;
//     }

//     for (let coll of collArr) {
//         let li = document.createElement("li");
//         li.innerText = coll.name;
//         list.appendChild(li);
//     }
// }

// async function getUniversity(country, state) {

//     try {
//         let query = "";

//         if (country) {
//             query += `?country=${country}`;
//         }

//         if (state) {
//             query += `&state-province=${state}`;
//         }

//         let res = await axios.get(baseURL + query);
//         return res.data;

//     } catch (err) {
//         console.log("Error was", err);
//         return [];
//     }
// }












