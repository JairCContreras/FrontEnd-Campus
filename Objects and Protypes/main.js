function Bicycle(cadence, speed, gear){
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}

function Bicycle2(cadence, speed, gear){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}

var b1 =  new Bicycle (1,2,3);
var b2 = new Bicycle2(1,2,3);

console.log(b1);
console.log(b2);