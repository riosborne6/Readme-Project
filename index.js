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
    message: "What is your name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your height?",
  },
  {
    type: "list",
    name: "license",
    choices: licenses,
    message: "pick a license",
  },
  {
    type: "input",
    name: "description",
    message: "What is your height?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile(filename, data, [encoding], [callback]);
  fs.writeFile("test.txt", "test", function (err) {});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    generateMarkdown(answers);
    writeToFile("", "");
  });
}

// Function call to initialize app
init();
