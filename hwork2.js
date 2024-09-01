// ### 1. Declare an array 
let fruits = ["mango" , "apple", "banana", "orange", "biskut"];
let three = fruits[3]
// get element value by index
console.log(three)
// set or update index value by index
fruits[2] = "jambura"
console.log(fruits);


// task 2
let spot = ["bd" , "usa" , "uk"]
spot.push("canada")
console.log(spot)
spot.push("a", "b")
console.log(spot)
spot.pop()
console.log(spot)

// task 3
let book = ['a', 'b', 'c', 'd', 'e']
if(book.includes('i')){
    console.log("got it")
}
else{
    console.log("no idea")
}

// task 4
let ar = [1 , 3, 5 , 6 , 67, 64];
let ur = 34;
if(Array.isArray(ar)){
    console.log("yes it is")
}
else{
    console.log("no")
}

// task 5
const first = [1, 2, 3, 4, 5, 6, 7, 8];
const second = [9, 10, 11, 12, 13, 14, 15, 16 ] ;
const third = [4]
const forth = first.concat(second , third);
console.log(forth);