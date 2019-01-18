const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Yusseppe';
		var lng = 25;
		var lat = 50;
		var res = generateLocationMessage(from, lat, lng);

		expect(res.from).toBe(from);
		expect(typeof res.createdAt).toBe('number');
		expect(res.url).toBe('https://www.google.com/maps?q=50,25');
	});
});