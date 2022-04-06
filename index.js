// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message:"Description of project:"
    },
    {   
        type: "list",
        name: "license",
        message: "What license do you want to apply to your project?",
        choices: ["Apache", "MIT", "Mozilla", "None"]
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        // var markdown = generateMarkdown(answers) as alternative
    })
}

// Function call to initialize app
init();