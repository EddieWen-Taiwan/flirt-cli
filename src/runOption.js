const packageJson = require('../package.json');

module.exports = (optionArray) => {
	if (['--version', '-v'].includes(optionArray[0])) {
		process.stdout.write(`Current version: ${packageJson.version}\n`);
	}
};
