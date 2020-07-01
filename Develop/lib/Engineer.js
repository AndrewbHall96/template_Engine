const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
    sayName() {
        return super.sayName() + "I am a engineer!"
    }
}