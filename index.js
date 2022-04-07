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
        type: "input",
        name: "table",
        message: "Please provide links for the contents of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions for installation"
    },
    {
        type: "input",
        name: "usage",
        message: "Please give a brief description of what this project is used for"
    },
    {   
        type: "list",
        name: "license",
        message: "What license do you want to apply to your project?",
        choices: ["Apache", "MIT", "Mozilla", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list any contributors to this project"
    },
    {
        type: "input",
        name: "tests",
        message: "Please give a brief description of what this project is used for"
    },
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
// example for function to create readme file - maybe needs to go in "generateMarkdown??"
/* fs.writeFile('README.md', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
}); */
// Function call to initialize app
init();