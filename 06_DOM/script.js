console.log("shiva yadav");

let getid = document.getElementById("heading1");
console.log(getid);

let getclass = document.getElementsByClassName("heading-class");
console.log(getclass);

let getTag = document.getElementsByTagName("p");
console.log(getTag);


// tag aur class me querySelectorall bhi kaam karta 
// id me querySelectorall kaam nhi karta hai

//class-------
let firstEle = document.querySelector(".heading-class");
console.log(firstEle);

let allEle = document.querySelectorAll(".heading-class");

console.log(allEle);

// tag----
let el = document.querySelectorAll("p");
console.log(el);

//first child-----
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);



// inner html and text
//innerHTML element ke andar ka HTML content (tags + text) return ya change karta hai.
//innerText sirf visible text content return ya change karta hai (HTML tags ignore karta hai)
// innerText ko update bhi kar skte hai   inn.innertext = "assssss";

let inn = document.querySelector("div");
console.log(inn);
console.log(inn.innerHTML);
console.log(inn.innerText)


// ---
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna College Student!"


//---
let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
