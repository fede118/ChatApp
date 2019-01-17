const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'tyrion',
		text: 'sup?',
		createdAt: 1245
	});

	socket.on('createMessage', (msg) => {
		msg['createdAt'] = new Date();
		console.log('message recived: ', msg);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});

server.listen(port, () => console.log(`server started at port ${port}`));