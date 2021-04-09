module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args) {
		const userID = 418776618786619392
		if(msg.author.id === userID) { msg.channel.send('Sossega') }

		if(!msg.author.id === userID) { msg.channel.send('Pong') }
	},
}; 
