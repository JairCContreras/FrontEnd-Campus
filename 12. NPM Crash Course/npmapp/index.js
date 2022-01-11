const ld = require('lodash');

const numbers = [1,3,332,3232,13,4,0,2332];

ld.each(numbers, (number,i)=>{
    console.log(number);
})
console.log("hi")