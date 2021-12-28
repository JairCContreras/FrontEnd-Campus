
function Bicycle(cadence, speed, gear){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.accelerate = function () {
        console.log(this)
        this.speed += 3;
    }
}

const b1 = new Bicycle(1,2,3);

function Mechanic (name){
    this.name = name;
}

function foo () {
    console.log(this);
}

foo();
//foo.call(b1)

let mike = new Mechanic("Mike");
mike.accelerate = b1.accelerate;
mike.accelerate.call(b1);
console.log(b1)