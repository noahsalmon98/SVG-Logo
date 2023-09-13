const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text up to 3 characters for your logo.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal number).",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for the logo.",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape of your logo."
    }
]

