const { promptUser, generateLogo } = require('./lib/shapes.js');

function init() {
    promptUser().then(answers => {
        generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    });
}

init();