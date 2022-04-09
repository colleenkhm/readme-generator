// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache") {
        // just need the img.shields part, next https is the actual link so it can go in next function
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === "Mozilla") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else {
        return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return ""
    }
    else {
        return `
        ## License ${license}
        ${renderLicenseBadge(license)}
        ${renderLicenseLink(license)}
        `
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title 
    ${data.title}
  ## Project Description 
  ${data.description}
  ## Table of Contents
    // link to installation
    // link to usage
    // link to license
    // link to contributing
    // link to tests
    // link to questions
  ## License
    ${renderLicenseSection(data.license)}
  ## Contributing
    // create function that gives opportunity to enter more than one contributor/makes bulleted list (addContributor?)
  ## Tests
  ## Questions
    [GitHub] (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;