// require dependencies, employee.js, inquirer
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee() {
    constructor(github) {
        this.github = github;
    }
    // prompt github return engineer
    getGithub() {
        return inquirer
            .prompt([

            ])
            .then(this.getRole());
    }
    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;