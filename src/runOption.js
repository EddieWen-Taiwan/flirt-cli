import packageJson from '../package.json';

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

const padString = (text, expectedLength) => (
	text.length < expectedLength ?
		`${text}${' '.repeat(expectedLength - text.length)}`
		:
		text
);

module.exports = (optionArray) => {
	if (support.version.commands.includes(optionArray[0])) {
		process.stdout.write(
			`\x1b[38;5;8mCurrent version:\x1b[0m ${packageJson.version}\n`,
		);

		return;
	}

	if (optionArray[0] === support.repo.commands) {
		process.stdout.write(
			`\x1b[38;5;8mVisit <\x1b[0m${packageJson.homepage}\x1b[38;5;8m>\x1b[0m\n`
		);

		return;
	}

	if (optionArray[0] === support.report.commands) {
		process.stdout.write(
			`\x1b[38;5;8mOpen an issue at <\x1b[0m${
				packageJson.bugs.url
			}\x1b[38;5;8m>,\nor mail to <\x1b[0m${
				packageJson.bugs.email
			}\x1b[38;5;8m>\x1b[0m\n`,
		);
	}

	if (optionArray[0] === '--help') {
		process.stdout.write('Options:\n\n');

		Object.values(support).forEach((value) => {
			process.stdout.write(`  ${
				padString(
					typeof value.commands === 'string' ?
						value.commands
						:
						value.commands.join(', '),
					24,
				)
			}\x1b[38;5;8m${
				value.note
			}\x1b[0m\n`);
		});
	}
};
