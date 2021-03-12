// require dependencies, employee.js
const Employee = require('./Employee');

class Engineer extends Employee() {
    constructor(name, id, email, github) {
        super(name, id, email)
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