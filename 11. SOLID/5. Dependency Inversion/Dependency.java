class Shopping {

}

class ShoppingBasket {
    public void buy(Shopping shopping) {
        SqlDataBase db = new SqlDataBase();
        db.save(shopping);
        CreditCard creditCard = new CreditCard();
        creditCard.pay(creditCard);

    }
}


 class SqlDataBase{
     public void save(Shopping shopping){

     }
 }

  class CreditCard {
      public void pay(Shopping shopping){

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

    }
}


