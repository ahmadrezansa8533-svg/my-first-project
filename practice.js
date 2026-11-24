// const double = (number) => number * 2 ;
// console.log (double(5));

const users = [
  { name: "Ali", age: 30 },
  { name: "Sara", age: 17 },
  { name: "Reza", age: 24 }
];

for (const user of users) {
    if(user.age >18){
        console.log(user.name + " is a adult")
    }
}