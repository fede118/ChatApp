var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	// socket.emit('createEmail', {
	// 	to: "jav@er.com",
	// 	text: "hey javiar"
	// });

	// socket.emit('createMessage', {
	// 	from: 'Fede',
	// 	text: 'Not much, you?'
	// });
});

socket.on('disconnect', function () {
	console.log('disconnected from server');
});

socket.on('newMessage', function (msg) {
	console.log('You got a new message', msg);
});