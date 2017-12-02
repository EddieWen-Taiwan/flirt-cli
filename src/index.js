#!/usr/bin/env node

const data = require('./data.js');

const print = (message, self = false) => {
	process.stdout.write(
		`\x1b[38;5;${self ? '11' : '3'}m${self ? '我' : '你'}：「${message}」\x1b[0m\n`,
	);
};

data[Math.floor(Math.random() * data.length)].forEach((conversation) => {
	print(conversation.text, conversation.self);
});

process.stdout.write('\n');
