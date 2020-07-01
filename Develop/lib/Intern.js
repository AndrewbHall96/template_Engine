const Intern = require("./Inten.js");
const Employee = require("./Employee.js");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    sayName() {
        return super.sayName() + "I am a Intern!"
    }
}