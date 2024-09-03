// task 1       Free Drinks

// let burger = 333;
// if(burger > 500){
//     console.log("free coke")
// }
// else{
//     console.log("coke 30tk")
// }

// task 2


// task 3      Grade Calculator
// const grade = (70);

// if(grade >= 90 && grade <= 100){
//     console.log("Got A+")

// if(grade >= 80 && grade <= 89){
//     console.log("Got A")
// }
// if(grade >= 70 && grade <= 79){
//     console.log("Got B+")
// }
// if(grade >= 60 && grade <= 69){
//     console.log("B")
// }
// }
// else{
//     console.log("c")
// }
// let grade = 75;
// if (grade >= 90 && grade <=100){
//     console.log("Got a+")
// }
// else if(grade >= 80 && grade<= 89){
//     console.log("a")
// }
// else if(grade >= 70 && grade <= 79){
//     console.log("b+")
// }
// else if(grade >= 60 && grade <= 69){
//     console.log("b")
// }
// else if(grade >= 0 && grade <= 59){
//     console.log("c")
// }
// else{
//     console.log("sleep")
// }


// task 4      nested friend
// let markFriend = 65;
// let markMe = 82;
// if(markFriend > 80 && markMe > 80 ){
//     console.log("Go for a lunch.")
//     if((markFriend < 80 && markFriend >= 60) && (markMe> 80)){
//         console.log("Better luck next time")
//     }
//     if((markFriend < 60 && markFriend >= 40) && (markMe > 80)){
//         console.log("no message")
//     }
//     if (markFriend < 40 && markMe < 80){
//         console.log("Block")
//     }
//     if(markMe < 80){
//         console.log("home")
//     }
// }

// console.log(markFriend)

// let markFriend = 45;
// let markMe = 5;
// if(markFriend > 80 && markMe > 80){
//     console.log("let have a lunch.")
// }
// else if((markFriend <= 80 && markFriend >= 60)&& (markMe > 80)){
//     console.log("better luck");
// }
// else if((markFriend < 60 && markFriend >= 40)&& (markMe > 80)){
//     console.log("no msg")
// }
// else if((markFriend < 40 && markMe > 80) && (markMe > 80)){
//     console.log("blk")
// }
// else if(markMe < 80){
//     console.log("go to sleep")
// }
// task 5
// let one =7;
// let two = 6;
// let result;
// if(one > two){
//     result = one * 2;
// }
// else{
//     result = one + two;
// }
// console.log(result);

// ternary
// one > two ? console.log(one *2 ) : console.log(result)

// task 6   ticket fare calculator
// let age = 22;
let ticket = 200;
let student = true;
if(age < 10){
    console.log("free")
}
else if(student ){
    console.log(ticket * 50 / 100)
}
else if (age >= 60 && age < 80){
    console.log(ticket * 15 / 100)
}
else{
    console.log(ticket)
}
