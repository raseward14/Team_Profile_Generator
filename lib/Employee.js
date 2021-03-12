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
    getName(name) {
        return inquirer
            .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?",
            }])
            .then(this.getId());
    }
    getId(id) {
        return inquirer
            .prompt([{
                type: "input",
                name: "id",
                message: "What is your id?",
            }])
            .then(this.getEmail());
    }
    getEmail(email) {
        return inquirer
            .prompt([{
                type: "input",
                name: "email",
                message: "What is your email?",
                // Uses dependency emailValidator to validate email
                validate: emailValidator
            }])
            .then(this.getRole());
    }
    getRole() {
        return Employee
    }
}

// export so its visible to engineer, intern, and manager
module.exports = Employee;