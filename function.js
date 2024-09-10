// task 1


// function multiply(a, b, c, d){
//     let x = a*b*c*d;
//     // console.log(x);
//     return x;
// }
// let y = multiply(2, 2, 2, 2);
// console.log(y);


// task 2 Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


// function oddEven(number){
//     if(number % 2 === 0){
//         let a = number * 2;
//         console.log(a)
//     }
//     else{
//         let b = number / 2;
//         console.log(b)
//     }
    
// }
// let num = oddEven(3);
// console.log(num);


// task three   Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



// function avg(make_avg){
//     let sum = 0;
//     for(let make of make_avg){
        
//         sum = sum + make;
//     }
//     let a = make_avg.length;
//     let b = sum / a;
//     // console.log(b);
//     return b;
// }
// let ary = [2, 3, 54, 6, 7, 8, 9];
// let c = avg(ary);
// console.log(c)



// task four
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(find){
    let counts = 0;
    for(let c of find){
        if(c === 0){
           let cv = counts;
           return cv;
        }
    }
}
let ff = [0, 1,0,1,0,1,0,1,0]
// Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

// function odd_ev(nums){
    
//         if(nums % 2 === 0){
//             return "even"
//         }
//         else{
//             return 'odd';
//         }
    
    
// }

// let u = 9;
// let v = odd_ev(u);
// console.log(v);



// function evenNumbersOnly(numbers){
//     const evenss = [];
//     for(let number of numbers){
//         if(number % 2 === 0){
//             // console.log(number);
//             evenss.push(number)
//         }
//     }
//     return evenss;
// } 

// const bb = [5, 6, 7, 8, 9 ,0];
// let ev = evenNumbersOnly(bb);
// console.log(ev);

// let cc = [3,4,5,6,87,9,0];
// let dd = evenNumbersOnly(cc);
// console.log(dd);

// function summation(namb){
//     let sum = 0;
//     for(let nam of namb){
//         if(nam % 2 === 0){
//             sum = sum + nam;
//         }
//     }
//     return sum;
// }
// let sam = summation(cc);
// console.log(sam);