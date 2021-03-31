// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
const licenses = ["MIT", "GNU"];
fs = require("fs");

// TODO: Create an array of questions for user input
// title,  description,  installation instructions, usage information, contribution guidelines, and test instructions

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your readme",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your readme",
  },
  {
    type: "list",
    name: "license",
    choices: licenses,
    message: "pick a license",
  },
  {
    type: "input",
    name: "instalInstruct",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usageInfo",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contGuide",
    message: "What are the contribution guidelines",
  },
  {
    type: "input",
    name: "testInstruct",
    message: "What are the test instructions",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile(filename, data, [encoding], [callback]);
  fs.writeFile(`${fileName}.md`, data, function (err) {
    console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers.title, generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
