const Employee = require("./Employee.js");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// A class is like a template for creating new data types
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    sayName() {
        return super.sayName() + "I am a manager!"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}


module.exports = Manager;
//      OBJECT             CLASS
// let new_manager = new Manager("Andrew Hall", 1, "superawesome@email.com");
// console.log(new_manager.sayName());