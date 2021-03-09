const inquirer = require('inquirer');
// Employee parent class provides the basics for all employees, export so its available for each employee
class Employee {
    // constructor with properties: name, id, email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // prompt name, id, email, and call next method, return the employee
    getName() {
        return inquirer
            .prompt([

            ])
            .then(this.getId());
    }
    getId() {
        return inquirer
            .prompt([

            ])
            .then(this.getEmail());
    }
    getEmail() {
        return inquirer
            .prompt([

            ])
            .then(this.getRole());
    }
    getRole() {
        return Employee;
    }
}

// export so its visible to engineer, intern, and manager
module.exports = Employee;