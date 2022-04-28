module.exports = {
	name: 'ping',
	description: 'Ping!',
	slash: true,
	execute (message, args) {
		const userID = '418776618786619392'
		const randomValidation = Math.floor(Math.random() * 10)
		if(randomValidation > 5){
			if(message.author.id === userID) { message.channel.send('Sossega') }

			if(message.author.id != userID) { message.channel.send('Pong1') }
		} else {
			message.channel.send('Pong')
		}
	},
}; 
