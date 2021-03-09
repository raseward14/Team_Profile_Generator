// require dependencies, employee.js, inquirer
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee() {
    constructor(school) {
        this.school = school;
    }
    // prompt school, return intern
    getSchool() {
        return inquirer([

        ])
        .then(this.getRole());
    }
    getRole() {
        return Intern;
    }
}

module.exports = Intern;