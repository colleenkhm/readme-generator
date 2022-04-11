// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadme = require('./utils/generateReadme')
const writeFile = require('./utils/generateReadme');
const generateMarkdown = require("./src/readme-template.js");
const renderLicenseSection = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
    ])
};

promptUser()
    .then(readmeData => {
        return(generateMarkdown(readmeData));
    })
    // .then(licenseData => {
    //     return(renderLicenseSection(licenseData));
    // }) 
    .then(pageMarkdown => {
        return(writeFile(pageMarkdown));
    })
    .catch(err => {
        console.log(err)
    });
// TODO: Create a function to write README file

/* promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
*/

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(promptUser).then((answers) => {
//         console.log(answers)
//         // var markdown = generateMarkdown(answers) as alternative
//     })
// }
// init();