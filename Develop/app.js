const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


var employees = [];

console.log("Please build your team.");
inquirer
    .prompt([
        {
            type:"input",
            message:"What is your manager's name?",
            name: "managerName"
        },
        {
            type:"input",
            message:"What is your manager's i.d.?",
            name: "managerID"
        },
        {
            type:"input",
            message:"What is your manager's email?",
            name: "managerEmail"
        },
        {
            type:"input",
            message:"What is your manager's office number?",
            name: "managerON"
        }
    ])
    .then(answers => {
        var newManager = new Manager(answers.name, answers.id, answer.email);
        employees.push(newManager);
        var exit = false;

        while (exit !== true) {
            // Ask what kind of employee to add - new inquirer
            // Engineer
                // Ask engineer specific questions (new inquirer) inquirer.prompt([])
                // create a new engineer with given data (.then)
                // push new engineer to employees array
            // Intern
                // Same thing but for interns
            // I don't wanna
                // exit = true;
        }
    });

// inquirer // 1
// // Create a new Manager
// // Answers come back as 
// .then(function(answers) {
//     var newManager = new Manager(answers.name, answers.id, answer.email);
//     // push to employees
//     employees.push(newManager);
//     var exit = false;
//     // Loop starts while(exit !== true) OR recursion
//     // Ask which type of employee
//     inquirer // 2
//         // A. Engineer (function)
//             // Create engineer inquirer prompt
//             inquirer // 3
//             var newEngineer = new Engineer(answers.name...)
//             // push to employees
//         // B. Intern
//             // Create an intern inquirer
//             inquirer // 4
//             var newIntern = new Intern(answers.name...)
//             // push to employees
//         // C. I don't want to add anymore
//             // Escape the loop
//             exit = true;
// }
// const result = render.render(employees);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
