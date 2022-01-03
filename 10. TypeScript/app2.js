//unions
/*
function combine (
    input1: Combinable,
    input2: Combinable,
    resultType: 'number' | 'text') {
    let result;
    if (typeof input2 === 'number' && typeof input1 === 'number' || resultType == 'number'){
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}


const r1 = combine(30,20, 'number');
const r2 = combine("30", "5", 'number');

const r3 = combine("Jair", 5, 'text');

console.log(r1)
console.log(r2);
*/
//return types
//typescript infer the type
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("The result: " + num);
}
