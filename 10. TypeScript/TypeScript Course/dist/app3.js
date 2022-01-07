"use strict";
//unknow
let userInput;
userInput = 5;
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("change");
generateError('An error occureted', 404);
