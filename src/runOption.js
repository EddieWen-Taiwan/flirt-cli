const packageJson = require('../package.json');

module.exports = (optionArray) => {
	if (['--version', '-v'].includes(optionArray[0])) {
		process.stdout.write(`Current version: ${packageJson.version}\n`);

		return;
	}

	if (optionArray[0] === '--repo') {
		process.stdout.write(`Visit <${packageJson.homepage}>\n`);

		return;
	}

	if (optionArray[0] === '--report') {
		process.stdout.write(
			`Open an issue at <${packageJson.bugs.url}>,\nor mail to <${packageJson.bugs.email}>\n`,
		);
	}
};
