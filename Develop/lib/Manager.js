const Employee = require("./Employee.js");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// A class is like a template for creating new data types
class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    sayName() {
        return super.sayName() + "I am a manager!"
    }
}


module.exports = Manager;
//      OBJECT             CLASS
// let new_manager = new Manager("Andrew Hall", 1, "superawesome@email.com");
// console.log(new_manager.sayName());