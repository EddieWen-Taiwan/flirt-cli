const data = require('./data.js');

process.stdout.write(`${
	data[Math.floor(Math.random() * data.length)]
}\n`);
