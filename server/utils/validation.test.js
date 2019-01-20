const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString validation', () => {
	it('should reject non string values', () => {
		expect(isRealString(123)).toBe(false);
		expect(isRealString(true)).toBe(false);
		expect(isRealString(false)).toBe(false);
	});
	it('should reject string with only spaces', () => {
		expect(isRealString("   ")).toBeFalsy();
	});
	it('should allow string with non-space characters', () => {
		expect(isRealString('asdasdasdasda')).toBe(true);
	});
});