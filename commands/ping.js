module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args) {
		const userFernando = 418776618786619392
		if(msg.sender === userID) { msg.channel.send('Sossega') }

		if(!msg.sender === userID) { msg.channel.send('Pong') }
	},
}; 
