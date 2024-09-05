// for(let i = 0; i < 111; i++){
//     console.log(i);
//     if(i >= 7){
//         break;
//     }
// }

// let n = 80;
// while(n >= 20){
//     if(n <= 55){
//         break;
//     }
//     console.log(n);
//     n--;
// }


// continue

// for(let i = 1; i<10; i++){
//     if(i%2 !== 0){
//         continue
//     }
//     console.log(i);
// }

let a = 0;
while(a <= 5){
    a++;
    if(a%3 === 0 && a%5 === 0){
        continue;
    }
    console.log(a);
}