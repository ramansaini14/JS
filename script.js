// let abc;
// Sync 
// Singlee Thraded 

// Call Stack 

// let a = 5 ;

// let a = "abc";
// let a = true;
// abc = abc + 1;
// console.log(abc);
// {
    //     var abc = 10;
//     abc = abc +1;
//     console.log(abc);
    
// }
// console.log(abc);
// console.error("this is an error");
// var
// const 

// const a = 5;
// a = 10;

// Undefined 
// not defined

// Hoisting
// console.log(abc);  
// -- TDZ --> temporal Dead Zone 

// Not Hoisted and globally Scopped
// abc = 5;

// Oprators  
// let a = 5;
// let b = 2;

// let c;
// Addition Operator and assignment Opeerator 
// c = a + b ; 
// c = a - b ; 
// c = a * b ; 
// c = a / b ; 

// c = Math.pow(a,b);

// c = a ** b;

// Equality Opeerator 
// Strict Equality Opeerator 

// c = 5 === 6;
// console.log(c);

// let str = {"name":6};
// console.log(str.name);

// Template Literals -- String Interpolation
// Rest and Spread Operators
// Logical Operators
// Ternary Operator
// Conditional Statements 

// let a = 40;

// console.log(`This is a string  ${a}`);


// let arr2 = [4,5,6]
// let arr1 = [1,2,3, ...arr2]
// let copiedArray = [...arr1, ...arr2]

// console.log(copiedArray);

// let arr = [5,6,"ABC",56]
// let first = arr[0]
// let [a, b, ...c] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arr.length);
// && 2 conditions -- 
// || -- people younger then 18 and older then 80 cannot drive 
// !

let age = 80;
// let candrive = age >= 18 && age <= 49 ? console.log("canDrive ") : age >= 50 && age<= 79 ? console.log("occasionally drive") : age >=80 ? console.log("he cannot drive") : console.log("Invalid Number");

// let obj = {
//     {"id": 1, 
//     name: "ASB",} 
//     , {

//     }
//     , {

//     }
// }
// console.log(obj.id);

// let arr = [{}, {}, {}]

// if(age >= 18 && age <= 49){
//     console.log("HEY");
    
// }
// else if(){
    
// }
// else{
//     console.warn("This is an error")
// }

// if age is greater then 18 then he can drive if age is greater then 50 he can occasionally drive and els if age is greater then 80 he cannot drive


// let str = "Hey it's is first online SESSION";
// let strLength = str.length;
// console.log(strLength);
// console.log(str.charCodeAt(0));

// ASCII Codes for charactors 
// A -- 65 
// D -- 68

// slice (start, end)
// substring(start, end)
// substr(start, end)

// console.log(str.slice(1, 7));
// let subString = str.substring(2, 7)
// console.log(subString);

// console.log(str.substr(1,7));
// console.log(str);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

//let str1 = "String 1"; //AND 
// let str2 = "String 2";

// let concatinatedString = str1.concat(" AND ", str2)
// console.log(concatinatedString);

// let concatinated2 = str1 + " AND2 " + str2;
// console.log(concatinated2);

// Strings are immutable in nature 

// let newString = "String STR DTR STR STR STR";
// console.log(newString);

// console.log(newString.indexOf("STR"));
// console.log(newString.lastIndexOf("STR"));
// let matchAll = newString.matchAll("DTR");
// console.log(matchAll);


// console.log(newString.trim());
// console.log(newString.trimEnd());

// console.log(newString.replaceAll("STR", "One"));

// MDN 

// let obj = {
//     "id": 1,
//     "fname": "ASB",
//     lname : "SCHOOL",
//     sci : 78,
//     math : 89,
//     eng: 56,
// }

// arrays 

// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// 3-length 
// console.log(values);

// ForIn Loop

// for (const key in obj) {
//         console.log(key);
//         console.log(obj[key]);
        
//     }

// [1,2,3] -- arr 

// let [x,y, ...rest] 

// forOf loop 

// for (const [key,value] of Object.entries(obj)) {
//     console.log(key, value);
// }


// let arr = [1,2,3,4,5];

// arr.forEach((key, val) => {
//     console.log(key);
//     console.log(val);

// })

// let obj = {city: "Chandigarh"}

// const map = new Map();
// map.set("id", "1");
// map.set("name", "ASB");
// map.set("obj", "India");

// console.log(map.get("id"));
// console.log(map.get("name"));
// let myCountry = {city: "Chandigarh"};
// map.set(myCountry, "India");

// console.log(map.get(myCountry));

// console.log(map.has("name"));

// console.log(map.size);

// const map1 = new Map([
//     ["id", 1],
//     ["name", "ASB"],
//     ["city", "Chandigarh"]]);

// map1.has("marks");


// for (const [keys, values] of map1) {
//     console.log(keys, values);
       
// }
// for (const key of map1.keys()) {
//     console.log(key);
    
// }
// for (const value of map1.values()) {
//     console.log(value);
    
// }

// for (const [key, value] of map1.entries()) {
//     console.log(key);
//     console.log(value);    
// }

// function hello(name, myFunction) {
//     console.log("Hello its " + name);
//     myFunction();

// }

// Made this function today and called it when it was needed 
// function callbackFunc() {
//     console.log("i am a callback function");
// }

// hello("ASB", callbackFunc)

// Map
// Object
// Callback Function 

// Callback Hell -- Pyramid of Doom 

// function hello(thisFunction) {
//    
//     thisFunction();

// }

// hello(() => {
//     console.log("i am a callback function 1");
//     hello(() => {
//         console.log("i am a callback function 1");
//         hello(() => {
//             console.log("i am a callback function 1");
//             hello(() => {
//                 console.log("i am a callback function 1");
//                 hello(() => {
//                     console.log("i am a callback function 1");
//                     hello(() => {
//                         console.log("i am a callback function 1");
//                         hello(() => {
//                             console.log("i am a callback function 1");
//                             hello(() => {
//                                 console.log("i am a callback function 1");
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// Pyramid of DOOM 
// Callback Hell 

// Async Await  --- Pending !! -- APIs 


// Document -- Web APIs 
// DOCUMENT OBJECT MODEL 

// Classname 
// id 
// tagName 

// document.querySelector(".container")

{/* <div class="container">this is a div
</div> */}

let myContainer = document.querySelector(".container");
myContainer.getAttribute("id");
myContainer.setAttribute("id", "myContainerNew");
console.log(myContainer);
// let oldDiv = document.getElementById("container");
// let newDiv = document.createElement("div"); <div></div>

// newDiv.id = "newBox"; <div id = "newBox"></div>
// newDiv.className = "newClassOfDiv"; <div id = "newBox" class= "newClassOfDiv"></div>
// newDiv.textContent = "this is brand new div" 
{/* <div id = "newBox" class= "newClassOfDiv">this is brand new div</div> */}
// console.log(newDiv);

// document.body.appendChild(newDiv);

// document.body.style.background = ("aqua");

// oldDiv.style.background = "red";
// oldDiv.style.height = "100px"
// oldDiv.style.width = "100px"

// newDiv.style.background = "blue";
{/* <div id = "newBox" class= "newClassOfDiv" style="background:blue;">this is brand new div</div>  */}
// newDiv.style.height = "200px";
// newDiv.style.width = "400px";
// newDiv.textContent = "Something Else"

// newDiv.appendChild(oldDiv);

// AppendChild  -- inserted a node at the end 
// insertBefore  -- inserts a node before target newDib.insertbefore(newNode, referencing node)
// removeChild -- removeChild(element)
// replaceChild -- replaceChild (newNode, OldNode)

// textcontent 

// setAttribute(name, value)
// getAttribute(name) 
// newDiv.getAttribute(className);
// newDiv.setAttribute(className, "newClass");

{/* 
<div class="newClassOfDiv"></div>
<div class="newClass"></div> 
*/}



// ${}

// Sync -- Async 

// Sync 
// console.log("hi 1");
// console.log("hi 2");
// console.log("hi 3");

// Async -- You are waiting for some state to complete and then you want to proceed further 


// Get -- to get some data 
// Post -- to create a new entry in DB 
// Put -- To update something into the database
// Delete -- to delete something from existing DB 


// Promise -- 
// Fulfill -- Responsee Recorded , 
// Pending , 
// fail -- Rejected. 

async function getDataFromApi() {
    let promiseData = await fetch("https://reqres.in/api/users");
    let jSonData = await promiseData.json();
    console.log(jSonData.data);
}
getDataFromApi();

// function fakePromise(delay, result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result); //2001
//         }, delay);
//     });
// }

// async function getDataFromPromise() {
//     console.log("Starting Fetching Data ");
//     let data = await fakePromise(3000, "Fetched Api and promise returned");
//     console.log("The data was : " + data);
//     console.log("Done Fetching .. ");  
    
// }
// getDataFromPromise();

// DATA FETCH -- https://jsonplaceholder.typicode.com/

// Fetch User data from https://reqres.in/api/users and then manipulate DOM accordingly. Create table for the particular user.
