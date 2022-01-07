interface Product {
    String product = "Hola";
    int stock = 10;
    int numberOfDisks = 4;
    String releaseDate = "12";
    int recommendedAge = 12;
}


class CD implements Product {

}

/*
Las funciones deberan ser relevantes para cualquier clase que implemente la interfaz.

Las interfaces ayudan a desacoplar modulos entre si.

Evitar fat interfaces.


Relacionado con Liskov principle


*/