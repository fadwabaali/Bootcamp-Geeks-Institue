const chalk = require('chalk');

const displayColorfulMessage = () => {
    console.log(chalk.blue('Hello,') + chalk.red(' this is a ') + chalk.green('colorful message!'));
};

module.exports = displayColorfulMessage;