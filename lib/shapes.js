const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function promptUser() {
    return inquirer.prompt([
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
]);
}

function generateLogo(text, textColor, shape, shapeColor) {
    let shapeEl;
  
    if (shape === 'circle') {
      shapeEln = `<circle cx="50%" cy="50%" r="50%" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
      shapeEl = `<polygon points="0,0 100,100 0,100" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
      shapeEl = `<rect width="100" height="100" fill="${shapeColor}" />`;
    } else {
      throw new Error('Invalid shape');
    }
    const svgMarkup = `
      <svg width="300" height="200">
        ${shapeEl}
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `;
  
    const filePath = path.join('examples', 'logo.svg');
    fs.writeFileSync(filePath, svgMarkup);
    console.log(`Generated ${filePath}`);
  }
  
  module.exports = {
    promptUser,
    generateLogo
  };