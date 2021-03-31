var outputData = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![${license} License](https://img.shields.io/badge/License-${license}-Orange)`;
  } else
    return `![${license} License](https://img.shields.io/badge/License-${license}-Green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("hello");
  console.log(data);
  var title = `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## ${data.description}
  ## ${data.instalInstruct}
  ## ${data.usageInfo}
  ## ${data.contGuide}
  ## ${data.testInstruct}

  `;
  outputData += title;
  var description = data.description;
  outputData += description;
  renderLicenseBadge(data.license);
  console.log(outputData);
  return title;
}

module.exports = generateMarkdown;
