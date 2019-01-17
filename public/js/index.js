var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

});

socket.on('disconnect', function () {
	console.log('disconnected from server');
});

socket.on('newMessage', function (msg) {
	console.log('You got a new message', msg);
	$('#messages').append(`<li>${msg.from}: ${msg.text}</li>`);
});

$('#message-form').on('submit', function (e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: $('[name=message]').val()
	}, function () {

	});
});