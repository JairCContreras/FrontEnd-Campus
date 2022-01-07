interface VehicleType {
    void draw();
}


class Car implements VehicleType{
    @Override
    public void draw(){
        ////draw
        System.out.println("Car");
    }
}


class Motorbike implements VehicleType{
    @Override
    public void draw(){
        ////draw
        System.out.println("Motorbike");
    }
}




class OpenClosed{
    public static void draw(VehicleType vehicle){
        vehicle.draw();
    }
    public static void main(String[] args){
        Motorbike motorbike = new Motorbike();
        Car car = new Car();
        draw(motorbike);
        draw(car);
    }
}