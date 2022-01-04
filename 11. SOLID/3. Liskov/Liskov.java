interface Animal {
    void walk();
    void jump() throws Exception;
}


class Elephant implements Animal {
    @Override
    public void walk(){
        System.out.println("Walking...");
    }
    @Override
    public void jump() throws Exception{
        throw new Exception("Cannot jum");
    }
}


class Liskov  {
    public static void jumpHole(Animal animal){
        try {
        animal.walk();
        animal.jump();
        animal.walk();
        }
        catch(Exception e){}
        
    }
    public static void main(String[] args){
        Elephant elefant =  new Elephant();
        jumpHole(elefant);
    }
}