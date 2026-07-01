// inline  < javascript --- events
/* An event is an action or occurrence that happens in the browser. JavaScript can detect these events and execute code in response.

event object -- Whenever an event occurs, JavaScript automatically creates an event object and passes it to the event handler.
*/

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("onclick button");
//     let a = 25;
//     console.log(++a);
// }

let para = document.querySelector("p");

para.onmouseover = () =>{
    console.log("para mouseover!");
    para.style.backgroundColor = "green";
}

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = (e) =>{
    console.log(e.type);
    console.log(e.target);
}

// events listener

btn1.addEventListener("click",() =>{
    console.log("Button1 was clicked handler1");
});
btn1.addEventListener("click",() =>{
    console.log("Button1 was clicked handler2");
});

let handler3 = () =>{
    console.log("Button1 was clicked handler3");
};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",() =>{
    console.log("Button1 was clicked handler4");
});

// remove 

btn1.removeEventListener("click",handler3);