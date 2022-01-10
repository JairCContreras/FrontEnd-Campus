class Duck {
    IFlyBehavior flyBehavior;
    IQuackBehavior quakBehavior;
    Duck(IFlyBehavior flyBehavior, IQuackBehavior quakBehavior){
        this.flyBehavior = flyBehavior;
        this.quakBehavior = quakBehavior;
    }

    public void fly(){
        flyBehavior.fly();
    }


    public void quack(){
        quakBehavior.quack();
    }
}