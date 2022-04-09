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
        name: "installation",
        message: "Please provide instructions for installation:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please give a brief description of what this project is used for:"
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
        message: "Please list any contributors to this project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any necessary instructions for testing this project:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "contact",
        message: "Please list any additional instructions on how to best contact you:"
    },
];
// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        // var markdown = generateMarkdown(answers) as alternative
    })
}
init();