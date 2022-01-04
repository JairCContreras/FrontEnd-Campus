33
function main (): void {
   const firstString  = +prompt('Enter first number:')!;
   const secondString = +prompt('Enter second number')!;
   const menu = prompt('1.- Add 2.- Substaract 3.-Divide 4.-Multiply');
   let result = 32;
   switch(menu){
       case '1':  result = firstString + secondString
       break;
       case '2': result = firstString-secondString;
       break;
       case '3':
            if(+secondString === 0){
                throw 'Arithmetic exception'
            }
            result = firstString/secondString;
        break;
        case '4': result = firstString*secondString;
   }

   console.log(result);
}


main();