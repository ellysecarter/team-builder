const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("../utils/generate-page.js")


const 

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please provide the name of the Team Manager.",
          },
          {
            type: "input",
            name: "managerID",
            message: "What is the Team Manager's employee ID?",
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is Team Manager's email address?",
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is the Team Manager's office number?",
          },
    ])
}

const promptMenu = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "menu",
            message: "Please select from one the choices below:",
            choices: ["Add an engineer.", "Add an intern.", "Finish building team."],
          },
    ])
}

const promptEngineer = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
          },
          {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's employee ID?",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
          },
          {
            type: "input",
            name: "engineerGitHub",
            message:"What is the engineer's GitHub username? (please leave out the @ symbol)",
          },
    ])
}

const promptIntern = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
          },
          {
            type: "input",
            name: "internID",
            message: "What is the intern's employee ID?",
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
          },
          {
            type: "input",
            name: "school",
            message:"What school does the intern attend?",
          },
    ])
};

promptManager()
    .then(promptMenu)
    .then(promptEngineer)
    .then(promptMenu)
    .then(promptIntern)
    .then(promptMenu)
    return "generatePage"


// write to html file
    const writeToFile = (fileName, data) => {
        fs.writeFile(fileName, generatePage(data), function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Your webpage has been created! Go to index.html and open in browser to check it out!");
          }
        });
      };
      
      // initialize app here
      const init = () => {
        inquirer
        promptManager()
            .then(promptMenu)
            .then(promptEngineer)
            .then(promptMenu)
            .then(promptIntern)
            .then(promptMenu)
                console.log(results)
            writeToFile("index.html", results);
      };
      
      init();
      