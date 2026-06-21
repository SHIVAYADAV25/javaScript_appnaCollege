console.log("shiva yadav");

let arr = [34,55,3,2,5,34];

console.log(arr);

console.log(arr.length);

let heroes = ["thor","hulk","superman","don"];

console.log(heroes);

console.log(typeof heroes);
console.log(heroes[3]);// don
// heroes[4] -> underfind

heroes[3] = "superman";
console.log(heroes);

// strings -> immutable  isko index value change nhi kar sakte hai
// array -> mutable    change kar sakte hai

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

for(let hero of heroes){
    console.log(hero.toUpperCase());
}

// practice problem 
//average marks

let marks = [85,97,44,37,76,60];
let sum = 0;

for(let ele of marks){
    sum += ele;
}

let average = sum / marks.length;

console.log(average);


// 2 practice problem

let prices = [250,645,300,900,50];
// 10 % off 

for(let i=0;i<prices.length;i++){
    let offer = prices[i] / 10;
    prices[i] -= offer ;
}

console.log(prices);


// push pop 

let foodItem = ["potato","apple","tomato","litchi"];

console.log(foodItem);
foodItem.push("chip");
foodItem.push("mango");
console.log(foodItem);

foodItem.pop();

console.log(foodItem);
console.log(foodItem.toString());


// concat 

let marverl_heroes = ["thor","spiderman","ironman"];
let dc_heroes = ["superman","batman"];

let concat_heroes = marverl_heroes.concat(dc_heroes);

console.log(concat_heroes);

// unshift -> aage ele add karega 
// shift -> aage wala ele remove kar dega

marverl_heroes.unshift("don");
console.log(marverl_heroes)


// slice and splice 
console.log(marverl_heroes.slice(1,4));

let arr1 = [1,2,3,4,5,6,7];

console.log(arr1.splice(2,0,101,102)); // index 2  pr 0 ele delete karo aur add karo 101 102
console.log(arr1.splice(4,1))//delete index 4 aur 1 ele delete karo
