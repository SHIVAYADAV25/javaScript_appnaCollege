
let div = document.querySelector("div");

// class and id ka name find ya change karne ke liye
let clss = div.getAttribute("class");
console.log(clss);

//console.log(div.setAttribute("class","newBox"));

// js se style set karna-------
div.style.backgroundColor= "green";
div.style.backgroundColor= "blue";

div.style.fontSize = "26px" ;

div.innerText = "shiva yadav";

// create tag----
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi I am new!</i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
// do class ek sath kaam karna --- context aur newClass dono
para.classList.add("newClass");

let newbtn = document.createElement("button");
newbtn.innerText = "click me!";

para.after(newbtn);

/*append → Add at the end (inside)
prepend → Put at the front (inside)
before → Outside, before the element
after → Outside, after the element
remove → Delete the element */

