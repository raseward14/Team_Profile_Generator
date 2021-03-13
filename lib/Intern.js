// require dependencies, employee.js
const Employee = require('./Employee');

class Intern extends Employee() {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // prompt school, return intern
    getSchool() {
        return this.school;
    }
    getRole() {
        return Intern;
    }
}

module.exports = Intern;