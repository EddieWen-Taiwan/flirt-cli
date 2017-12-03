import data from '../src/data.js';

describe('data format', () => {
	test('`data` is an Array type.', () => {
		expect(data instanceof Array).toBeTruthy();
	});

	test('Each conversation is an Array type.', () => {
		data.forEach((value) => {
			expect(value instanceof Array).toBeTruthy();
		});
	});

	test('Message format contains `text` and `self` property', () => {
		data.forEach((conversation) => {
			conversation.forEach((message) => {
				expect(message instanceof Object).toBeTruthy();
				expect(Object.hasOwnProperty.call(message, 'text')).toBeTruthy();
				expect(Object.hasOwnProperty.call(message, 'self')).toBeTruthy();
			});
		});
	});
});
