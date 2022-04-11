// put all Markdown text here- move from generateMarkdown?
// TODO: Create a function to generate markdown for README
// const licenseSection = 

module.exports = templateData => {
    console.log(templateData);

    const { title, description, installation, usage, license, contributing, tests, github, email, contact } = templateData

    return `
    # Title 
      ${title}
    ## Project Description 
    ${description}
    ## Table of Contents
      // link to installation
      // link to usage
      // link to license
      // link to contributing
      // link to tests
      // link to questions
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    ${license}
    ## Contributing
    ${contributing}
    ## Tests
    ${tests}
    ## Questions
      [GitHub] (https://github.com/${github})
      [Email] (${email})
      ${contact}
  `;
}