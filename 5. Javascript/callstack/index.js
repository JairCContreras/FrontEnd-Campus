//el motor puede ejecutar solo una cosa, ya que cuenta con una sola pila de ejecución. 



//contexto de la funcion(this)  vs    contexto de ejecuccion 

const cortar = (ingrediente) => {
    console.log('Cortar ' + ingrediente);
  }
  
  function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  
  function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
  
  hacerEnsaladaMixta();







//cortar tomate
////hacer ensalada


//cortar lechuga
//hacer ensalada


//cortar cebolla
//hacer ensalada


//mezclar ingredientes(1)
//mezclar ingredientes(2)
//mezclar ingredientes(3)
//mezclar ingredientes(4)
//mezclar ingredientes(5)
//hacer ensalada


//mezclar ingredientes(2)
//mezclar ingredientes(3)
//mezclar ingredientes(4)
//mezclar ingredientes(5)
//hacer ensalada


//mezclar ingredientes(3)
//mezclar ingredientes(4)
//mezclar ingredientes(5)
//hacer ensalada


//mezclar ingredientes(4)
//mezclar ingredientes(5)
//hacer ensalada



//mezclar ingredientes(5)
//hacer ensalada




///hacer ensalda




//comer
//hacer ensalada 