function foo() {
    console.log("Hello")
}

var obj = {
    elem: function() {
        console.log('hello')
    }
}

foo();          //method 1  global object
obj.elem();     //method 2  

new foo();      //method 3

                //method 4