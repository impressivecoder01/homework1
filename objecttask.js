// task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod']);

// task 2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['price'] = 5;
console.log(car); 

// task 3
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student['physics']['marks']);

// task 4
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
// for(let stu in students){
//     console.log(stu);
// }

let x = Object.keys(students);
console.log(x.length);

// task 5
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};
let objects = Object.keys(myObject);
console.log(objects)
for(let object of objects){
    console.log(object,':' ,myObject[object], '|' , 'type :', typeof myObject[object])
}