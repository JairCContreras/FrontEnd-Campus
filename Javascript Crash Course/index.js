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
const array = new Array(1, 3, 44, 2, 1, 4);
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


//destructuring 
const { firstName, lastName, address: { street } } = person;
console.log(firstName, lastName, street)



//array of objects

const names = [
    {name: 'Jair', lastName: 'Contreras'},
    {name: 'Alejandro', lastName: 'Lopez'}, 
    {name: 'Alejandro', lastName: 'Lopez'}, 
    {name: 'Alejandro', lastName: 'Lopez'}, 
    {name: 'Alejandro', lastName: 'Lopez'}, 
    {name: 'Alejandro', lastName: 'Lopez'}, 
]

//json!



const namesJson = JSON.stringify(names);



//cicles 
////for
for(let i = 0; i < 10; i++){
    console.log(i)
}

////while
let i = 0;
while( i < 10){
    console.log(i);
    i++;
}

 i = 0;
do{
    console.log(i);
    i++;

}while(i < 10);


//foreach, map, filter


//foreach
console.log("foreach")
names.forEach(name => console.log(name))

//map
console.log("map");
names.map(name => console.log(name))

//filter
console.log("filter")
const filteredArray = names.filter(name => "Jair" == name.name);
console.log(filteredArray)


//////constructor function
function Person(name, lastname){
    this.name = name;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.name+" "+this.lastName;
    }
}

const person1 = new Person("Jair", "Contreras");
console.log(person1.getFullName())