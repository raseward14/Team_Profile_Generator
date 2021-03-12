// require dependencies
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const inquirer = require('inquirer');
const fs = require('fs');

// create a roster- empty array with each new employee object pushed to the roster array
const roster = [];

// add team members
function newTeamMember() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'team-members',
                message: 'Which type of team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'I dont want to add any more team members']
            }
        ])
        .then(function (choice) {
            switch (inquirer.prompt.choices) {
                case 'Manager':
                    newManager();
                    break;
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                default:
                    break;
            }
        })
}

// create new manager
function newManager() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team managers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team managers email?',
            },
            {
                type: 'input',
                name: 'office-number',
                message: 'What is the team managers office number?',
            },
        ])
        .then(newTeamMember());
}

// create new engineer
function newEngineer() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your engineers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your engineers email?',
            },
            {
                type: 'input',
                name: 'office-number',
                message: 'What is your engineers GitHub username?',
            },
        ])
        .then(newTeamMember());
}

// create new intern
function newIntern() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your interns id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your interns email?',
            },
            {
                type: 'input',
                name: 'office-number',
                message: 'What is your interns school?',
            },
        ])
        .then(newTeamMember());
}

// Initialize a new employee
const employee = new Employee();

roster.push(employee);

// Begin roster
employee.getName();