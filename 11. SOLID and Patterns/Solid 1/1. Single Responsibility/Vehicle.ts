class Vehicle {
    wheelCount: number;
    maxSpeed: number;
    constructor(wheelCount: number, maxSpeed: number){
        this.wheelCount = wheelCount;
        this.maxSpeed = maxSpeed;
    }
    print(){
        console.log(`Wheelcount=${this.wheelCount}  maxSpeed=${this.maxSpeed}`)
    }
}



class VehiclePrint{
    print(vehicle: Vehicle){
        console.log(`Wheelcount=${vehicle.wheelCount}  maxSpeed=${vehicle.maxSpeed}`)
    }
}