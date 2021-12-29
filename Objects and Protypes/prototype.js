function Employee(name) {
    this.name = name;
}
Employee.prototype.getName = function getName(){
    console.log(this.name);
}

var emp1 = new Employee("Jim");
var emp2 = new Employee("Pam");
