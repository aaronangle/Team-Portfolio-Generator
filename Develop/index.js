const inquirer = require("inquirer")
const renderEmployees = require("./renderhtml.js");
const { Engineer } = require("./employee.js")
const { Intern } = require("./employee.js")
const { Manager } = require("./employee.js")

const employeeList = []

addManager()

function addManager() {
    inquirer.prompt([
        {
            message: "What is the name of your manager?",
            type: "input",
            name: "manager"
        },
        {
            message: "What is your manager's ID?",
            type: "input",
            name: "id",
            validate: async function (userInput) {
                const num = parseInt(userInput)
                if (isNaN(userInput) || num < 0) {
                    return "Value must be a valid number greater than 0"
                }
                return true;
            }
        },
        {
            message: "What is your manager's office number?",
            type: "input",
            name: "number",
            validate: async function (userInput) {
                const num = parseInt(userInput)
                if (isNaN(userInput) || num < 0) {
                    return "Value must be a valid number greater than 0"
                }
                return true;
            }
        },
        {
            message: "What is your manager's email?",
            type: "input",
            name: "email"
        }
    ])
        .then(data => {
            const { manager, id, email, number } = data;
            employeeList.push(new Manager(manager, id, email, number))
            addEmployee()
        })
}

function addEmployee() {
    inquirer.prompt(
        {
            message: "Would you like to add another employee?",
            type: "list",
            choices: ["Intern", "Engineer", "No more Employees to Add"],
            name: "add"
        }
    )
        .then(data => {
            const answ = data.add
            if (answ === "Intern") addIntern()
            else if (answ === "Engineer") addEngineer()
            else renderEmployees(employeeList)
        })
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is the name of the Intern?",
            type: "input",
            name: "name"
        },
        {
            message: "What is the ID of your Intern?",
            type: "input",
            name: "id",
            validate: async function (userInput) {
                const num = parseInt(userInput)
                if (isNaN(userInput) || num < 0) {
                    return "Value must be a valid number greater than 0"
                }
                return true;
            }
        },
        {
            message: "What is your Intern's email",
            type: "input",
            name: "email"
        },
        {
            message: "What school did your Intern go to?",
            type: "input",
            name: "school"
        }
    ])
        .then(data => {
            const { name, id, email, school } = data
            employeeList.push(new Intern(name, id, email, school))
            addEmployee()
        })
}
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the name of your Engineer?",
            type: "input",
            name: "name"
        },
        {
            message: "What is the ID of your Engineer?",
            type: "input",
            name: "id",
            validate: async function (userInput) {
                const num = parseInt(userInput)
                if (isNaN(userInput) || num < 0) {
                    return "Value must be a valid number greater than 0"
                }
                return true;
            }
        },
        {
            message: "What is your Engineer's email",
            type: "input",
            name: "email"
        },
        {
            message: "What is your Engineer's github username?",
            type: "input",
            name: "github"
        }
    ])
        .then(data => {
            const { name, id, email, github } = data;
            employeeList.push(new Engineer(name, id, email, github))
            addEmployee()
        })
}

