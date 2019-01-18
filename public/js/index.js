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

socket.on('newLocationMessage', function (msg) {
	var li = $(`<li></li>`);
	var a = $(`<a target="_blank">My current location</a>`);

	li.text(`${msg.from}`);
	a.attr('href', msg.url);

	li.append(a);
	$('#messages').append(li);
});

$('#message-form').on('submit', function (e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: $('[name=message]').val()
	}, function () {

	});
});

var locationButton = $('#send-location');
locationButton.on('click', function () {
	if (!navigator.geolocation) {
		return alert('Geolocation not supported by your browser');
	}

	navigator.geolocation.getCurrentPosition(function (position) {
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function () {
		alert('Unable to fetch location');
	});
});