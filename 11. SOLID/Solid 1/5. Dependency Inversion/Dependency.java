
interface Persistence {
    void save(Shopping shopping);
}
interface PaymentMethod {
     void pay(Shopping shopping);
 }
class SqlDataBase implements Persistence{
      @Override
     public void save(Shopping shopping){
         System.out.println("save");
     }
}



class CreditCard implements PaymentMethod {
    @Override
      public void pay(Shopping shopping){
         System.out.println("Pay");

      }
  }

class Paypal implements PaymentMethod {   
    @Override
    public void pay(Shopping shopping){
         System.out.println("Pay");
    }
 }



class Shopping {

}



class ShoppingBasket {
    //Clase de alto nivel depende de las abstracciones
    private Persistence persistence;
    private PaymentMethod paymentMethod;
    ShoppingBasket(Persistence persistence, PaymentMethod paymentMethod){
        this.persistence = persistence;
        this.paymentMethod = paymentMethod;
    }
    public void buy(Shopping shopping) {
        persistence.save(shopping);
        paymentMethod.pay(shopping);

    }
}



class Dependency {
    /*
        Las clases de alto nivel no dependen de clases de bajo nivel
        Ambas dependen de abstracciones
        Y las abstracciones no dependen de los detalles
        Los detalles dependen de las abstracciones
    */
    public static void main(String[] args){
        System.out.print("Hello world");
    }
}


