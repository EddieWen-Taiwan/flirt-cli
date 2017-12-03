const packageJson = require('../package.json');

const support = {
	version: {
		commands: ['--version', '-v'],
		note: '',
	},
	repo: {
		commands: '--repo',
		note: '',
	},
	report: {
		commands: '--report',
		note: '',
	},
};

module.exports = (optionArray) => {
	if (support.version.commands.includes(optionArray[0])) {
		process.stdout.write(`Current version: ${packageJson.version}\n`);

		return;
	}

	if (optionArray[0] === support.repo.commands) {
		process.stdout.write(`Visit <${packageJson.homepage}>\n`);

		return;
	}

	if (optionArray[0] === support.report.commands) {
		process.stdout.write(
			`Open an issue at <${packageJson.bugs.url}>,\nor mail to <${packageJson.bugs.email}>\n`,
		);
	}
};
