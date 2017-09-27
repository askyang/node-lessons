"use strict";

process.on('message', (msg, server) => {
	if(msg === 'server'){
		server.on('connection', (socket) => {
			socket.end(`handled by child: ${process.pid}\n`);
		});
	}
});