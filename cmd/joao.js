module.exports = {
	name: 'joão pedro',
	description: 'João Pedro',
	execute(msg) {
		const list = [ 'Mapa' , 'Bom, bom pra quem?', 'Ha ha ha ha ha', 'Clã, viramo notícia' ]
		msg.channel.send(`${list[Math.floor(Math.random() * list.length)]}`);
	},
};