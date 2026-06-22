console.log("shiva yadav")

function sum(x, y) {
    s = x + y;
    console.log("before return");
    return s;
    console.log("after return");// return ke baad kuch print nhi hota hai 
}

let val = sum(3, 4);
console.log(val);


// count the number of vowels in given string 

function countVowels(str) {
    let count = 0;

    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    console.log(count);
}

countVowels("shivayadav");


// forEach  

const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

let arr = [1,2,3,4,5,6,7];

arr.forEach((val) => {
    console.log(val ** 2);
});

//arr.map  

let arr13 = [1, 2, 3, 4];

let doubled = arr13.map(num => num * 2);

console.log(doubled);

//filter

let arr12 = [5, 12, 8, 20, 3];

let result = arr12.filter(num => num > 10);

console.log(result);

// reduce single value return 

let arr11 = [1, 2, 3, 4, 5];

let sum1 = arr11.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum1);


// problem 1

let n = prompt("Enter a number:");

let arr1 = [] ;

for(let i=0;i<n;i++){
    arr1[i] = i+1;
}

console.log(arr1);

const summm = arr1.reduce((res,curr) =>{
    return res + curr;
});

console.log(summm);