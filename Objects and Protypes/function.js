function foo() {
    console.log(this);
    //refer to window
}

var obj = {
    elem: function() {
        console.log(this)
        //refer to object
    }
}

foo();          
obj.elem();

new foo();  //refer to foo object
