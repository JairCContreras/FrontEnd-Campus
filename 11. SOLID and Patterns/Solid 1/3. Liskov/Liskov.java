interface Animal {
    void walk();
}

interface  LightWeightAnimal  extends Animal{
    void jump();
}

class Elephant implements Animal {
    @Override
    public void walk(){
        System.out.println("Walking...");
    }

}

class Cat implements LightWeightAnimal {
    @Override
    public void walk() {
        System.out.println("Walking");
    }

    @Override
    public void jump() {
        System.out.println("Jumping");
    }
}

class Liskov  {
    public static void jumpHole(LightWeightAnimal animal){
        animal.walk();
        animal.jump();
        animal.walk();
    }
    public static void main(String[] args){
        Elephant elefant =  new Elephant();
        Cat cat = new Cat();
    
        jumpHole(cat);
    }
}