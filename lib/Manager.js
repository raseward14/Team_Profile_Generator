// require dependencies, employee.js
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee() {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    // prompt officeNumber, return manager
    getOfficeNumber() {
        return inquirer
            .prompt([

            ])
            .then(this.getRole());
    }
    getRole() {
        return Manager;
    }
}

module.exports = Manager;