module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args) {
		const userID = '418776618786619392'
		const randomValidation = Math.floor(Math.random() * 10)
		if(randomValidation > 5){
			if(msg.author.id === userID) { msg.channel.send('Sossega') }

			if(msg.author.id != userID) { msg.channel.send('Pong') }
		} else {
			msg.channel.send('Pong')
		}
	},
}; 
