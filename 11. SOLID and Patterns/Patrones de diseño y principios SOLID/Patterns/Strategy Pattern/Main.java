class Main{
    public static void main(String args[]){
        LoudQuack loudQuack = new LoudQuack();
        LowFly lowFly = new LowFly();
        HighFly highFly = new HighFly();

        Duck duck1 = new Duck(lowFly, loudQuack);
        Duck duck2 = new Duck(highFly, loudQuack);
        duck1.quack();
        duck1.fly();

        System.out.println("//////");

        duck2.quack();
        duck2.fly();
    }
}