const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app.'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined'));

	socket.on('createMessage', (msg, callback) => {
		console.log('message recived: ', msg);
		io.emit('newMessage', generateMessage(msg.from, msg.text));
		callback('this is from the server:');
	});

	socket.on('createLocationMessage', (coords) => {
		io.emit('newLocationMessage', generateLocationMessage('Fede', coords.latitude, coords.longitude));
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});

server.listen(port, () => console.log(`server started at port ${port}`));