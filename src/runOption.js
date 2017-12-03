const packageJson = require('../package.json');

const support = {
	version: {
		commands: ['--version', '-v'],
		note: 'version number',
	},
	repo: {
		commands: '--repo',
		note: 'git repository link',
	},
	report: {
		commands: '--report',
		note: 'how to report a bug',
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

	if (optionArray[0] === '--help') {
		process.stdout.write('Options:\n\n');

		Object.values(support).forEach((value) => {
			process.stdout.write(`\t${
				typeof value.commands === 'string' ?
					value.commands
					:
					value.commands.join(', ')
			}\t\t${
				value.note
			}\n`);
		});
	}
};
