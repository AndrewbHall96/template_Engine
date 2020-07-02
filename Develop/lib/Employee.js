// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    sayName() {
        return 'Hello! My name is ' + this.name + '! ';
    }

    getRole() {
        return this.role;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

module.exports = Employee;