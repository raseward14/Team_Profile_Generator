// require dependencies, employee.js
const Employee = require('./Employee');

class Manager extends Employee() {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    // return manager
    getRole() {
        return Manager;
    }
}

module.exports = Manager;