// Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.
const celsius = 112;
function fahrenheit(temperature){
    let a = (temperature * 1.8) + 32
    return a;
}
let b = fahrenheit(celsius);
console.log(b);


// Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

function noRepetitive(numbers){
    let neW = [];
    for(let number of numbers){
        if(neW.includes(number) === false){
            neW.push(number);
        }
    }
    return neW
}
let numbers = [1, 2, 3, 2, 1, 3, 4, 2, 5, 1];
console.log(noRepetitive(numbers));

let numb = [5,6,11,12,98, 5];
let find = [5];
let n = [];
function t(f){
    for(let ult of found){
        if(find.includes(ult) === true){
            ult.push(n);
        }
    }
    return n;
}
console.log(t(numb));