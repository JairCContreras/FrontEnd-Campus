//unknow
let userInput: unknown;


userInput = 5;


//never
function generateError(message: string, code: number) /*never*/{
    throw { message: message, errorCode: code};
}





generateError('An error occureted', 404);