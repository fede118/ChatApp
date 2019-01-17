const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Admin';
		var text = 'this is a test';
		var res = generateMessage(from, text);

		expect(res.from).toBe(from);
		expect(res.text).toBe(text);
		expect(typeof res.createdAt).toBe('number');
	});
});