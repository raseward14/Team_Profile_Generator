const emailValidator = require('email-validator')
// Employee parent class provides the basics for all employees, export so its available for manager, engineer, and intern classes
class Employee {
    // constructor with properties: name, id, email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // prompt name, id, email, and call next method, return the employee
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        emailValidator.validate;
        return this.email;
    }
    getRole() {
        return Employee
    }
}

// export so its visible to engineer, intern, and manager
module.exports = Employee;