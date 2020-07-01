// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    sayName() {
        return 'Hello! My name is ' + this.name + '! ';
    }
}

module.exports = Employee;