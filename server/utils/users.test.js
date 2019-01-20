const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: 1,
			name: 'Franz',
			room: 'Germans',
		}, {
			id: 2,
			name: 'Lucille',
			room: 'Frenchs',
		}, {
			id: 3,
			name: 'Ghunter',
			room: 'Germans',
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '1234',
			name: 'Fede',
			room: 'NASA',
		};
		var resUsers = users.addUser(user.id, user.name, user.room);

		expect(users.users).toMatchObject([user]);
	});

	it('should remove a user', () => {
		var userId = 2
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var user = users.removeUser(5);

		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = 1;
		var user = users.getUser(userId);

		expect(user.id).toEqual(userId);
	});

	it('should not find user', () => {
		var userId = 10;
		var user = users.getUser(userId);

		expect(user).toBeFalsy();
	});

	it('should return names for germans room', () => {
		var userList = users.getUserList('Germans');

		expect(userList).toEqual(['Franz', 'Ghunter']);
	});

	it('should return names for frenchs room', () => {
		var userList = users.getUserList('Frenchs');

		expect(userList).toEqual(['Lucille']);
	});
});