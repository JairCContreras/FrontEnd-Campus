//1. Working with Types
//Core syntax and features
//number [1, 4.5, -10]
//string  ["Hello world", 'Hello world', `Hello world ${variable}`]
//boolean [true, false]
/*
//////////////////////////////////////////////
///Number. boolean, strings

function add(n1: number, n2: number, showResult: boolean, phrase : string) {
    let result = n1 + n2;
  if (showResult) {
    console.log(phrase+ result);
  } else {
  return result;
  }
}
const n1 = 0;
const n2 = 2.2;
const printResult = true;
const resultPhrase = 'The result is: '

add(n1, n2, printResult, resultPhrase);
*/

/////////////////////////////////////////////////
/// Objects types
/*
const person: {
  name: string;
  age: number;
} = {
  name: "Max",
  age: 40,
};

const person1 = {
    name: 'Max',
    age: 40
}
*/
/////////////////////////////////////////////////
/// Arrays
/*
console.log('hello world');
const person = {
    name: 'Jair',
    age: 25,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
//let favoriteActivities: any[];


for(let hobby of person.hobbies ){
    console.log(hobby.toUpperCase())
    //hobby.map() 
}
*/

/////////////////////////////////////////////////
/// Tuple
/*
const person : {
    name: string,
    age: number,
    role: [number, string]
}= {
    name: 'Jair',
    age: 25, 
    role: [2,'author']
}

person.role = [0, 'painter'];

//person.role.push(4); //allowed

console.log(person);
*/

//////////////////////////////////////////////
/// Enum

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Maxi',
    age: 30,
    role: Role.ADMIN
}