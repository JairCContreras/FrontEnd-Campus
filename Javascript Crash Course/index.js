//let, const, has a block scope. 
//types
const s = 'Hello world';
const number = 5;
const decimal = 1.2;
const boolean = true;
const nulo = null;
const indefinido = undefined;

console.log(typeof s);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof boolean);
console.log(typeof nulo);
console.log(typeof indefinido);


//arrays
const fruits = ["Apple", "Banana", "Pineapple"];
const array = new Array (1,3,44,2,1,4);
console.log(fruits);
console.log(array);


//objects
const person = {
    firstName: 'Jair',
    lastName: 'Contreras',
    age: 30,
    hobbies: ['music', 'movies', 'sport'],
    address: {
        street: '50 main st',
        city: 'Bostons',
        state: 'MA'
    }
}